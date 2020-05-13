import React, { useContext } from "react";
import PropTypes from "prop-types";
import { WorkflowContext } from "State/context";
import { ComposedModal } from "@boomerang/carbon-addons-boomerang-react";
import WorkflowTaskForm from "Components/WorkflowTaskForm";
import TaskUpdateModal from "Components/TaskUpdateModal";
import WorkflowCloseButton from "Components/WorkflowCloseButton";
import WorkflowEditButton from "Components/WorkflowEditButton";
import WorkflowWarningButton from "Components/WorkflowWarningButton";
import WorkflowNode from "Components/WorkflowNode";
import styles from "./SwitchNodeDesigner.module.scss";

SwitchNodeDesigner.propTypes = {
  diagramEngine: PropTypes.object.isRequired,
  node: PropTypes.object.isRequired
};

SwitchNodeDesigner.defaultProps = {
  node: {}
};

export default function SwitchNodeDesigner({ diagramEngine, node: designerNode }) {
  const { revisionDispatch, revisionState, summaryState, setIsModalOpen, taskTemplatesData } = useContext(
    WorkflowContext
  );

  /**
   * Pull data off of context
   */
  const inputProperties = summaryState.properties;
  const nodeDag = revisionState.dag?.nodes?.find(revisionNode => revisionNode.nodeId === designerNode.id) ?? {};
  const nodeConfig = revisionState.config[designerNode.id] ?? {};
  const task = taskTemplatesData.find(taskTemplate => taskTemplate.id === designerNode.taskId);

  // Get the taskNames names from the nodes on the model
  const taskNames = Object.values(diagramEngine.getDiagramModel().getNodes())
    .map(node => node.taskName)
    .filter(name => Boolean(name));

  /**
   * Event handlers
   */

  const handleOnSaveTaskConfig = inputs => {
    revisionDispatch({
      type: "UPDATE_NODE_CONFIG",
      data: { nodeId: designerNode.id, inputs }
    });
  };

  const handleOnUpdateTaskVersion = ({ version, inputs }) => {
    revisionDispatch({
      type: "UPDATE_NODE_TASK_VERSION",
      data: { nodeId: designerNode.id, inputs, version }
    });
  };

  // Delete the node in state and then remove it from the diagram
  const handleOnDelete = () => {
    revisionDispatch({
      type: "DELETE_NODE",
      data: { nodeId: designerNode.id }
    });
    designerNode.remove();
  };

  const renderConfigureNode = () => {
    return (
      <ComposedModal
        composedModalProps={{
          onAfterOpen: () => setIsModalOpen(true),
          shouldCloseOnOverlayClick: false
        }}
        confirmModalProps={{
          title: "Are you sure?",
          children: "Your changes will not be saved"
        }}
        modalHeaderProps={{
          title: this.props.task?.name
        }}
        modalTrigger={({ openModal }) => <WorkflowEditButton className={styles.editButton} onClick={openModal} />}
        onCloseModal={() => setIsModalOpen(false)}
      >
        {({ closeModal }) => (
          <WorkflowTaskForm
            closeModal={closeModal}
            inputProperties={this.props.inputProperties}
            node={designerNode}
            nodeConfig={nodeConfig}
            onSave={handleOnSaveTaskConfig}
            taskNames={taskNames}
            task={task}
          />
        )}
      </ComposedModal>
    );
  };

  const renderUpdateTaskVersion = () => {
    if (nodeDag?.templateUpgradeAvailable) {
      return (
        <ComposedModal
          composedModalProps={{
            containerClassName: styles.updateTaskModalContainer,
            onAfterOpen: () => setIsModalOpen(true)
          }}
          modalHeaderProps={{
            title: `New version available`,
            subtitle:
              "The managers of this task have made some changes that were significant enough for a new version. You can still use the current version, but it’s usually a good idea to update when available. The details of the change are outlined below. If you’d like to update, review the changes below and make adjustments if needed. This process will only update the task in this Workflow - not any other workflows where this task appears."
          }}
          modalTrigger={({ openModal }) => (
            <WorkflowWarningButton className={styles.updateButton} onClick={openModal} />
          )}
          onCloseModal={() => setIsModalOpen(false)}
        >
          {({ closeModal }) => (
            <TaskUpdateModal
              closeModal={closeModal}
              inputProperties={inputProperties}
              node={designerNode}
              nodeConfig={nodeConfig}
              onSave={handleOnUpdateTaskVersion}
              taskNames={taskNames}
              task={task}
            />
          )}
        </ComposedModal>
      );
    }

    return null;
  };

  return (
    <WorkflowNode
      className={styles.node}
      icon={task?.icon}
      node={designerNode}
      rightPortClass={styles.rightPort}
      subtitle={designerNode.taskName}
      subtitleClass={styles.subtitle}
      title={"Switch"}
    >
      <div className={styles.badgeContainer}>
        <p className={styles.badgeText}>Switch</p>
      </div>
      {renderUpdateTaskVersion()}
      {renderConfigureNode()}
      <WorkflowCloseButton className={styles.deleteButton} onClick={handleOnDelete} />
    </WorkflowNode>
  );
}
