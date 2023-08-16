import React, { useCallback, useEffect, useMemo, useState } from "react";
import { EditorContextProvider } from "State/context";
import { AxiosResponse } from "axios";
import { UseQueryResult, MutateFunction, UseMutateFunction } from "react-query";
import { RevisionActionTypes, revisionReducer, initRevisionReducerState } from "State/reducers/workflowRevision";
import { useAppContext, useTeamContext, useIsModalOpen, useQuery } from "Hooks";
import { useImmerReducer } from "use-immer";
import { useMutation, useQueryClient, UseMutationResult } from "react-query";
import { Prompt, Route, Switch, useLocation, useParams, useRouteMatch } from "react-router-dom";
import { Loading, Error, notify, ToastNotification } from "@boomerang-io/carbon-addons-boomerang-react";
import ChangeLog from "./ChangeLog";
import Configure from "./Configure";
import Designer from "./Designer";
import Header from "./Header";
import Properties from "./Properties";
import Schedule from "./Schedule";
import queryString from "query-string";
import { serviceUrl, resolver } from "Config/servicesConfig";
import { AppPath } from "Config/appConfig";
import { WorkflowDagEngineMode } from "Constants";
import { ChangeLog as ChangeLogType, TaskTemplate, WorkflowView, Workflow } from "Types";
import styles from "./editor.module.scss";
import { groupTaskTemplatesByName } from "Utils";

export default function EditorContainer() {
  const { team } = useTeamContext();
  // Init revision number state is held here so we can easily refect the data on change via react-query

  const [revisionNumber, setRevisionNumber] = useState<string>("");
  const { workflowId }: { workflowId: string } = useParams();
  const queryClient = useQueryClient();

  const getChangelogUrl = serviceUrl.getWorkflowChangelog({ id: workflowId });
  const getWorkflowUrl = serviceUrl.getWorkflowCompose({ id: workflowId, version: revisionNumber });

  const getTaskTemplatesUrl = serviceUrl.getTaskTemplates({
    query: queryString.stringify({ teams: team?.id, statuses: "active" }),
  });

  const getAvailableParametersUrl = serviceUrl.workflowAvailableParameters({ workflowId });

  /**
   * Queries
   */
  const changeLogQuery = useQuery(getChangelogUrl);
  const workflowQuery = useQuery(getWorkflowUrl);
  const taskTemplatesQuery = useQuery(getTaskTemplatesUrl);
  const availableParametersQuery = useQuery(getAvailableParametersUrl);

  /**
   * Mutations
   */
  const revisionMutator = useMutation(resolver.postCreateWorkflowRevision, {
    onSuccess: () => {
      queryClient.invalidateQueries(getWorkflowUrl);
    },
  });

  const parametersMutator = useMutation(resolver.postWorkflowAvailableParameters, {
    onSuccess: (response) =>
      queryClient.setQueryData(serviceUrl.workflowAvailableParameters({ workflowId }), response.data),
  });

  // Only show loading for the summary and task templates
  // Revision takes longer and we want to show a separate loading animation for it, plus prevent remounting everything
  if (
    workflowQuery.isLoading ||
    changeLogQuery.isLoading ||
    taskTemplatesQuery.isLoading ||
    availableParametersQuery.isLoading
  ) {
    return <Loading />;
  }

  if (workflowQuery.error || changeLogQuery.error || taskTemplatesQuery.error || availableParametersQuery.error) {
    return <Error />;
  }

  // Don't block render if we don't have the revision data. We want to render the header and sidenav regardless
  // prevents unnecessary remounting when creating a new version or navigating to a previous one
  if (workflowQuery.data && changeLogQuery.data && taskTemplatesQuery.data && availableParametersQuery.data) {
    return (
      <EditorStateContainer
        availableParametersQueryData={availableParametersQuery.data}
        parametersMutator={parametersMutator}
        changeLogData={changeLogQuery.data}
        revisionMutator={revisionMutator}
        revisionQuery={workflowQuery}
        setRevisionNumber={setRevisionNumber}
        taskTemplatesList={taskTemplatesQuery.data.content}
        workflowId={workflowId}
      />
    );
  }

  return null;
}

interface EditorStateContainerProps {
  availableParametersQueryData: Array<string>;
  changeLogData: ChangeLogType;
  revisionMutator: UseMutationResult<AxiosResponse<any, any>, unknown, { workflowId: any; body: any }, unknown>;
  parametersMutator: UseMutationResult<AxiosResponse<any, any>, unknown, { workflowId: any; body: any }, unknown>;
  revisionQuery: UseQueryResult<Workflow, unknown>;
  setRevisionNumber: (revisionNumber: string) => void;
  taskTemplatesList: Array<TaskTemplate>;
  workflowId: string;
}

/**
 * Workflow Manager responsible for holding state of summary and revision
 * Make function calls to mutate server data
 */
const EditorStateContainer: React.FC<EditorStateContainerProps> = ({
  availableParametersQueryData,
  changeLogData,
  revisionMutator,
  parametersMutator,
  revisionQuery,
  setRevisionNumber,
  taskTemplatesList,
  workflowId,
}) => {
  const location = useLocation();
  const match: { params: { workflowId: string } } = useRouteMatch();
  const { teams, quotas } = useAppContext();
  const isModalOpen = useIsModalOpen();
  const queryClient = useQueryClient();

  const [workflowDagEngine, setWorkflowDagEngine] = useState<any>(null);
  const [revisionState, revisionDispatch] = useImmerReducer(
    revisionReducer,
    initRevisionReducerState(revisionQuery.data)
  );

  const [revisionConfig, setRevisionConfig] = useState<Workflow>({ ...revisionState });
  // Reset the reducer state if there is new data
  useEffect(() => {
    if (revisionQuery.data) {
      revisionDispatch({
        type: RevisionActionTypes.Reset,
        data: revisionQuery.data,
      });
    }
  }, [revisionDispatch, revisionQuery.data]);

  // //Triggers the POST request for refresh availableParameters
  // useEffect(() => {
  //   if (JSON.stringify(revisionConfig) !== JSON.stringify(revisionState)) {
  //     const normilzedConfig = Object.values(revisionState.config).map((config: any) => ({
  //       ...config,
  //       currentVersion: undefined,
  //       taskVersion: config.currentVersion || config.taskVersion,
  //     }));
  //     const revisionConfig = { nodes: Object.values(normilzedConfig) };
  //     const revision = {
  //       changelog: revisionState.changelog,
  //       config: revisionConfig,
  //       dag: revisionState.dag,
  //     };
  //     setRevisionConfig(revisionState);
  //     parametersMutator.mutateAsync({ workflowId, body: revision });
  //   }
  // }, [parametersMutator, workflowId, revisionState, revisionConfig]);

  /**
   *
   * @param {string} reason - changelog reason for new version
   * @param {function} callback - optional callback
   */
  const handleCreateRevision = useCallback(
    async ({ reason = "Update workflow", callback }) => {
      const normalizedConfig = Object.values(revisionState.config).map((config: any) => ({
        ...config,
        currentVersion: undefined,
        taskVersion: config.currentVersion || config.taskVersion,
      }));
      const revisionConfig = { nodes: Object.values(normalizedConfig) };

      const revision = {
        dag: {}, //TODO
        config: revisionConfig,
        changelog: { reason },
        markdown: revisionState.markdown,
      };

      try {
        const { data } = await revisionMutator.mutateAsync({ workflowId, body: revision });
        notify(
          <ToastNotification kind="success" title="Create Version" subtitle="Successfully created workflow version" />
        );
        if (typeof callback === "function") {
          callback();
        }
        revisionDispatch({ type: RevisionActionTypes.Set, data });
        setRevisionNumber(data.version);
        queryClient.removeQueries(serviceUrl.getWorkflowRevision({ workflowId, revisionNumber: null }));
        queryClient.removeQueries(serviceUrl.workflowAvailableParameters({ workflowId }));
      } catch (err) {
        notify(
          <ToastNotification kind="error" title="Something's Wrong" subtitle={`Failed to create workflow version`} />
        );
      }
    },
    [
      revisionMutator,
      queryClient,
      revisionDispatch,
      revisionState.config,
      revisionState.markdown,
      setRevisionNumber,
      workflowId,
    ]
  );

  /**
   *
   * @param {Object} formikValues - key/value pairs for inputs
   */
  const updateSummary = useCallback(
    async ({ values: formikValues }) => {
      const flowTeamId = formikValues?.selectedTeam?.id;
      const updatedWorkflow = { ...revisionQuery.data, ...formikValues, flowTeamId };

      try {
        const { data } = await revisionMutator.mutateAsync({ workflowId, body: updatedWorkflow });
        queryClient.setQueryData(serviceUrl.getWorkflowSummary({ workflowId }), data);
        notify(
          <ToastNotification kind="success" title="Workflow Updated" subtitle={`Successfully updated workflow`} />
        );
      } catch (err) {
        notify(
          <ToastNotification
            kind="error"
            title="Something's Wrong"
            subtitle={`Failed to update workflow configuration`}
          />
        );
      }
    },
    [revisionMutator, queryClient, revisionQuery, workflowId]
  );

  const handleUpdateNotes = useCallback(
    ({ markdown }) => {
      revisionDispatch({
        type: RevisionActionTypes.UpdateNotes,
        data: { markdown },
      });
    },
    [revisionDispatch]
  );

  /**
   *  Simply update the parent state to use a different revision to fetch it w/ react-query
   * @param {string} revisionNumber
   */
  const handleChangeRevision = (revisionNumber: string) => {
    return setRevisionNumber(revisionNumber);
  };

  const revisionCount = changeLogData.length;
  const { markdown, version } = revisionState;
  const mode = version === revisionCount ? WorkflowDagEngineMode.Editor : WorkflowDagEngineMode.Viewer;

  useEffect(() => {
    // Initial value of revisionState will be null, so need to check if its present or we get two engines created
    if (revisionState.version) {
      const newWorkflowDagEngine = {};
      setWorkflowDagEngine(newWorkflowDagEngine);
      //newWorkflowDagEngine.getDiagramEngine().repaintCanvas();
    }

    // really and truly only want to rerun this on version change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [revisionState.version]);

  const store = useMemo(() => {
    const taskTemplatesData = groupTaskTemplatesByName(taskTemplatesList);
    return {
      availableParametersQueryData,
      mode,
      revisionDispatch,
      revisionState,
      taskTemplatesData,
    };
  }, [availableParametersQueryData, mode, revisionDispatch, revisionState, taskTemplatesList]);

  return (
    // Must create context to share state w/ nodes that are created by the DAG engine
    <EditorContextProvider value={store}>
      <>
        <Prompt
          when={Boolean(revisionState.hasUnsavedUpdates)}
          message={(location) =>
            //Return true to navigate if going to the same route we are currently on
            location.pathname.includes(workflowId)
              ? true
              : "Are you sure? You have unsaved changes to your workflow that will be lost."
          }
        />
        <div className={styles.container}>
          <Header
            changeLog={changeLogData}
            changeRevision={handleChangeRevision}
            createRevision={handleCreateRevision}
            isOnDesigner={location.pathname.endsWith("/workflow")}
            revisionState={revisionState}
            viewType={WorkflowView.Workflow}
            revisionCount={revisionCount}
            revisionMutator={revisionMutator}
          />
          <Switch>
            <Route path={AppPath.EditorDesigner}>
              <Designer
                isModalOpen={isModalOpen}
                notes={markdown}
                revisionQuery={revisionQuery}
                tasks={taskTemplatesList}
                updateNotes={handleUpdateNotes}
                workflowName={revisionState.displayName}
              />
            </Route>
            <Route path={AppPath.EditorProperties}>
              <Properties summaryData={revisionState} />
            </Route>
            <Route path={AppPath.EditorSchedule}>
              <Schedule summaryData={revisionState} />
            </Route>
            <Route path={AppPath.EditorChangelog}>
              <ChangeLog summaryData={revisionState} />
            </Route>
          </Switch>
          <Route
            // Always render parent Configure component so state isn't lost when switching tabs
            // It is responsible for rendering its children, but Formik form management is always mounted
            path={AppPath.EditorConfigure}
          >
            <Configure
              quotas={quotas}
              summaryData={revisionState}
              summaryMutation={revisionMutator}
              updateSummary={updateSummary}
            />
          </Route>
        </div>
      </>
    </EditorContextProvider>
  );
};
