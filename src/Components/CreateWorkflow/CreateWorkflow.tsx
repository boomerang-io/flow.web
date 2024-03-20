import { ComposedModal, notify, ToastNotification, TooltipHover } from "@boomerang-io/carbon-addons-boomerang-react";
import { Add } from "@carbon/react/icons";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";
import { formatErrorMessage } from "@boomerang-io/utils";
import { useFeature } from "flagged";
import CreateWorkflowContainer from "./CreateWorkflowContainer";
import styles from "./createWorkflow.module.scss";
import { appLink } from "Config/appConfig";
import { FeatureFlag } from "Config/appConfig";
import { serviceUrl, resolver } from "Config/servicesConfig";
import { WorkflowView } from "Constants";
import { FlowTeam, ModalTriggerProps, CreateWorkflowSummary, Workflow, WorkflowViewType } from "Types";

interface CreateWorkflowProps {
  team?: FlowTeam;
  hasReachedWorkflowLimit: boolean;
  workflows: Array<Workflow>;
  viewType: WorkflowViewType;
}

const CreateWorkflow: React.FC<CreateWorkflowProps> = ({ team, hasReachedWorkflowLimit, workflows, viewType }) => {
  const queryClient = useQueryClient();
  const history = useHistory();
  const workflowQuotasEnabled = useFeature(FeatureFlag.WorkflowQuotasEnabled);

  const createWorkflowMutator = useMutation(resolver.postCreateWorkflow);

  const handleCreateWorkflow = async (workflowSummary: CreateWorkflowSummary) => {
    try {
      const { data: newWorkflow } = await createWorkflowMutator.mutateAsync({
        team: team?.name,
        body: workflowSummary,
      });
      const workflowId = newWorkflow.id;
      history.push(appLink.editorCanvas({ team: team?.name!, workflowId: workflowId }));
      notify(
        <ToastNotification kind="success" title={`Create ${viewType}`} subtitle={`${viewType} successfully created`} />,
      );
      if (viewType === WorkflowView.Template) {
        queryClient.invalidateQueries(serviceUrl.getWorkflowTemplates());
      } else {
        queryClient.invalidateQueries(serviceUrl.team.workflow.getWorkflows({ team: team?.name }));
      }
      return;
    } catch (e) {
      console.log(e);
      return;
      //no-op
    }
  };

  // TODO - fix up import query
  const handleImportWorkflow = async (workflow: Workflow, closeModal: () => void) => {
    try {
      const { data: newWorkflow } = await createWorkflowMutator.mutateAsync({
        team: team?.name,
        body: workflow,
      });
      history.push(appLink.editorCanvas({ team: team?.name!, workflowId: newWorkflow.id }));
      notify(
        <ToastNotification kind="success" title={`Update ${viewType}`} subtitle={`${viewType} successfully updated`} />,
      );
      if (viewType === WorkflowView.Template) {
        queryClient.invalidateQueries(serviceUrl.getWorkflowTemplates());
      } else {
        queryClient.invalidateQueries(serviceUrl.team.workflow.getWorkflows({ team: team?.name }));
      }
      closeModal();
    } catch (err) {
      const errorMessages = formatErrorMessage({
        error: err,
        defaultMessage: `Import ${viewType} Failed`,
      });
      notify(<ToastNotification kind="error" title={errorMessages.title} subtitle={errorMessages.message} />);
    }
  };

  const isLoading = createWorkflowMutator.isLoading;

  return (
    <ComposedModal
      composedModalProps={{ containerClassName: styles.modalContainer }}
      modalTrigger={({ openModal }: ModalTriggerProps) =>
        workflowQuotasEnabled && hasReachedWorkflowLimit ? (
          <TooltipHover
            direction="top"
            tooltipText={
              "This team has reached the maximum number of Workflows allowed. Contact your administrator or team owner to increase the quota, or delete a Workflow to create a new one."
            }
          >
            <div className={styles.disabledCreate} data-testid="workflows-create-workflow-button">
              <Add className={styles.addIcon} />
              <p className={styles.text}>{`Create a new ${viewType}`}</p>
            </div>
          </TooltipHover>
        ) : (
          <button className={styles.container} onClick={openModal} data-testid="workflows-create-workflow-button">
            <Add className={styles.addIcon} />
            <p className={styles.text}>{`Create a new ${viewType}`}</p>
          </button>
        )
      }
      confirmModalProps={{
        title: "Close this?",
        children: "Your request will not be saved",
      }}
      modalHeaderProps={{
        title: `Create a new ${viewType}`,
        subtitle: "Get started with these basics, then proceed to designing it out.",
      }}
    >
      {({ closeModal }) => (
        <CreateWorkflowContainer
          closeModal={closeModal}
          createError={createWorkflowMutator.error}
          createWorkflow={handleCreateWorkflow}
          importWorkflowMutator={createWorkflowMutator.error}
          importWorkflow={handleImportWorkflow}
          isLoading={isLoading}
          team={team}
          type={viewType}
          workflows={workflows}
          //@ts-ignore
          workflowQuotasEnabled={workflowQuotasEnabled}
        />
      )}
    </ComposedModal>
  );
};

export default CreateWorkflow;
