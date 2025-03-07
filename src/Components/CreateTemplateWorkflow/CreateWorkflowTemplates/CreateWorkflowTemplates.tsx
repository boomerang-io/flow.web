import React, { useState, useEffect } from "react";
import {
  Loading, // Tag,
  // TooltipHover,
} from "@carbon/react";
import { Button, ModalBody, ModalFooter } from "@carbon/react";
import { Bee } from "@carbon/react/icons";
import { ModalFlowForm, ErrorMessage } from "@boomerang-io/carbon-addons-boomerang-react";
import workflowIcons from "Assets/workflowIcons";
import cx from "classnames";
import { Box } from "reflexbox";
import WombatMessage from "Components/WombatMessage";
import { WorkflowEngineMode } from "Constants";
import { WorkflowTemplate } from "Types";
import styles from "./createWorkflowTemplate.module.scss";

export const TriggerType: { [key: string]: string } = {
  Manual: "manual",
  Scheduler: "scheduler",
  Webhook: "webhook",
  DockerHub: "dockerhub",
  Slack: "slack",
  Custom: "custom",
};

export const TriggerTypeLabel: { [key: string]: string } = {
  [TriggerType.Manual]: "Manual",
  [TriggerType.Scheduler]: "Scheduler",
  [TriggerType.Webhook]: "Webhook",
  [TriggerType.DockerHub]: "Docker Hub",
  [TriggerType.Slack]: "Slack",
  [TriggerType.Custom]: "Custom",
};
interface CreateWorkflowTemplatesProps {
  closeModal: () => void;
  saveValues: any;
  formData: any;
  isLoading: boolean;
  requestNextStep: any;
  workflowTemplates: WorkflowTemplate[];
  templatesError: any;
  // taskTemplates: TaskModel[];
}

const CreateWorkflowTemplates: React.FC<CreateWorkflowTemplatesProps> = ({
  closeModal,
  formData,
  saveValues,
  requestNextStep,
  workflowTemplates,
  isLoading,
  templatesError,
  // taskTemplates,
}) => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<WorkflowTemplate | null>(formData.selectedWorkflow ?? null);
  const [currentDag, setCurrentDag] = useState<any>(
    formData.selectedWorkflow
      ? new WorkflowDagEngine({
          dag: formData.selectedWorkflow.revision.dag,
          mode: WorkflowEngineMode.Run,
        })
      : null,
  );
  // const triggersList = selectedWorkflow ? Object.keys(selectedWorkflow.triggers).filter((trigger) => selectedWorkflow.triggers[trigger].enable) : [];

  useEffect(() => {
    if (currentDag) {
      currentDag.getDiagramEngine().zoomToFit();
    }
  }, [currentDag]);

  const handleSelectTemplate = (template: WorkflowTemplate) => {
    setSelectedWorkflow(template);
    // setCurrentDag(
    //   new WorkflowDagEngine({
    //     dag: template.revision.dag,
    //     mode: WorkflowEngineMode.Run,
    //   })
    // );
  };

  const handleNextStep = (e: any) => {
    e.preventDefault();
    saveValues({ selectedWorkflow });
    requestNextStep();
  };

  return (
    <ModalFlowForm onSubmit={handleNextStep}>
      {isLoading && <Loading />}
      {templatesError ? (
        <ErrorMessage />
      ) : (
        <ModalBody aria-label="inputs" className={styles.formBody}>
          <aside className={styles.templates}>
            {workflowTemplates?.map((template) => {
              const { name, Icon = Bee } = workflowIcons.find((icon) => icon.name === template.icon) ?? {};
              return (
                <Button
                  className={cx(styles.template, { [styles.active]: selectedWorkflow?.name === template.name })}
                  kind="ghost"
                  size="sm"
                  onClick={() => handleSelectTemplate(template)}
                >
                  <Icon className={styles.icon} alt={`${name}`} />
                  <p className={styles.buttonText}>{template.displayName}</p>
                </Button>
              );
            })}
          </aside>
          {
            //  selectedWorkflow ?
            // <ExecutionContextProvider
            //   value={{
            //     tasks: taskTemplates,
            //     workflowRevision: selectedWorkflow.revision,
            //     //@ts-ignore
            //     workflowExecution: {},
            //   }}
            // >
            //   <div className={styles.templateInfo}>
            //     <DiagramWidget
            //       allowLooseLinks={false}
            //       allowCanvasTranslation={true}
            //       allowCanvasZoom={true}
            //       className={styles.diagram}
            //       deleteKeys={[]}
            //       diagramEngine={currentDag.getDiagramEngine()}
            //       maxNumberPointsPerLink={0}
            //     />
            //     <span className={styles.title}>Description</span>
            //     <p className={styles.text}>{selectedWorkflow.description ? selectedWorkflow.description : "No description available."}</p>
            //     <span className={styles.title}>Parameters</span>
            //     {
            //       selectedWorkflow.parameters?.length ?
            //         selectedWorkflow.parameters.map((param) =>(
            //           <p className={styles.text}>{`${param.label}: ${param.type}`}</p>
            //         ))
            //       :
            //       <p className={styles.text}>No parameters available.</p>
            //     }
            //     {/* commented for possible future implementation of triggers detail
            //     <span className={styles.title}>Triggers</span>
            //     {
            //       triggersList.length ?
            //       <div className={styles.tagsContainer}>
            //         {
            //           triggersList.map((trigger) => {
            //             const currentTrigger = selectedWorkflow.triggers[trigger];
            //             switch(trigger) {
            //               case TriggerType.Scheduler:
            //                 return (
            //                   <TooltipHover direction="top" tooltipText={`${currentTrigger.schedule} - ${currentTrigger.timezone}`}>
            //                     <div>
            //                       <Tag type="teal">{TriggerTypeLabel[trigger]}</Tag>
            //                     </div>
            //                   </TooltipHover>
            //                 );
            //               case TriggerType.Custom:
            //                 return (
            //                   <TooltipHover direction="top" tooltipText={`Topic: ${currentTrigger.topic}`}>
            //                     <div>
            //                       <Tag type="teal">{TriggerTypeLabel[trigger]}</Tag>
            //                     </div>
            //                   </TooltipHover>
            //                 );
            //               default:
            //                 return (
            //                   <Tag type="teal">{TriggerTypeLabel[trigger]}</Tag>
            //                 );
            //             }
            //           })
            //         }
            //       </div>
            //       :
            //       <p className={styles.text}>No triggers available.</p>
            //     } */}
            //   </div>
            // </ExecutionContextProvider>
            // :
            <Box maxWidth="30rem" margin="0 auto">
              <WombatMessage
                className={styles.wombat}
                //@ts-ignore
                style={{ margin: "0" }}
                title="Select a template to start with"
                data-testid="initial-template-screen"
              />
            </Box>
          }
        </ModalBody>
      )}
      <ModalFooter>
        <Button kind="secondary" onClick={closeModal} type="button">
          Cancel
        </Button>
        <Button
          data-testid="workflows-create-workflow-submit"
          disabled={isLoading || templatesError || !Boolean(selectedWorkflow)}
          type="submit"
        >
          Next
        </Button>
      </ModalFooter>
    </ModalFlowForm>
  );
};

export default CreateWorkflowTemplates;
