//@ts-nocheck
import React from "react";
import { Button } from "@carbon/react";
import { Template, Add } from "@carbon/react/icons";
import { ModalFlow, notify, ToastNotification } from "@boomerang-io/carbon-addons-boomerang-react";
import { useFeature } from "flagged";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { appLink } from "Config/appConfig";
import { FeatureFlag } from "Config/appConfig";
import { serviceUrl, resolver } from "Config/servicesConfig";
import { FlowTeam, ModalTriggerProps, Workflow } from "Types";
import CreateWorkflowContent from "./CreateWorkflowContent";
import CreateWorkflowTemplates from "./CreateWorkflowTemplates";
import styles from "./createWorkflow.module.scss";

interface CreateTemplateWorkflowProps {
  team: FlowTeam;
  workflowList: Array<Workflow>;
}

function CreateTemplateWorkflow({ team, workflowList }: CreateTemplateWorkflowProps) {
  const queryClient = useQueryClient();
  const history = useHistory();
  const teamQuotasEnabled: boolean = useFeature(FeatureFlag.TeamQuotasEnabled);
  const workflowTemplatesUrl = serviceUrl.template.getWorkflowTemplates();

  //WorkflowTemplates are global Tasks only
  const queryTasksUrl = serviceUrl.task.queryTasks({ query: "" });

  const {
    data: workflowTemplatesData,
    isLoading: workflowTemplatesIsLoading,
    error: workflowTemplatesError,
  } = useQuery({
    queryKey: workflowTemplatesUrl,
    queryFn: resolver.query(workflowTemplatesUrl),
  });

  const {
    data: taskData,
    error: taskError,
    isLoading: taskAreLoading,
  } = useQuery({
    queryKey: queryTasksUrl,
    queryFn: resolver.query(queryTasksUrl),
  });

  const {
    mutateAsync: createTemplateWorkflowMutator,
    isLoading: createTemplateWorkflowIsLoading,
    error: createTemplateWorkflowError,
  } = useMutation(resolver.postTemplateWorkflow);

  const handleCreateWorkflow = async (selectedTemplateId: string, requestBody: any) => {
    try {
      const { data: newWorkflow } = await createTemplateWorkflowMutator({
        workflowId: selectedTemplateId,
        body: requestBody,
      });
      const workflowId = newWorkflow.id;

      history.push(appLink.editorCanvas({ workflowId }));
      notify(
        <ToastNotification
          kind="success"
          title="Create Workflow"
          subtitle="Successfully created workflow from template"
        />,
      );
      queryClient.invalidateQueries(serviceUrl.getMyTeams());
      return;
    } catch (e) {
      console.log(e);
      return;
      //no-op
    }
  };
  const isLoading = createTemplateWorkflowIsLoading;

  return (
    <ModalFlow
      composedModalProps={{ containerClassName: styles.modalContainer }}
      modalTrigger={({ openModal }: ModalTriggerProps) => (
        <Button
          onClick={openModal}
          renderIcon={Add}
          kind="ghost"
          size="md"
          data-testid="workflows-create-workflow-template-button"
        >
          <Template className={styles.addIcon} />
          <p className={styles.text}>Templates</p>
        </Button>
      )}
      modalHeaderProps={{
        title: "Create Workflow from Template",
        subtitle: "Get started by leveraging this template",
      }}
    >
      <CreateWorkflowTemplates
        templatesError={workflowTemplatesError || taskError}
        isLoading={workflowTemplatesIsLoading || taskAreLoading}
        workflowTemplates={workflowTemplatesData?.content ? workflowTemplatesData.content : []}
        taskTemplates={taskData}
      />
      <CreateWorkflowContent
        createWorkflow={handleCreateWorkflow}
        createError={createTemplateWorkflowError}
        isLoading={isLoading}
        team={team}
        teamQuotasEnabled={teamQuotasEnabled}
        workflowList={workflowList}
      />
    </ModalFlow>
  );
}

export default CreateTemplateWorkflow;
