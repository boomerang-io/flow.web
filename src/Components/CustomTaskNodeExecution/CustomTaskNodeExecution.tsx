import React from "react";
import cx from "classnames";
import { useExecutionContext } from "Hooks";
import WorkflowNode from "Components/WorkflowNode";
import { RunStatus } from "Types";
import styles from "./CustomTaskNodeExecution.module.scss";

import CustomTaskNodeModel from "Utils/dag/customTaskNode/CustomTaskNodeModel";

interface CustomTaskNodeExecutionProps {
  node: CustomTaskNodeModel;
}

const CustomTaskNodeExecution: React.FC<CustomTaskNodeExecutionProps> = (props) => {
  const { tasks, workflowExecution } = useExecutionContext();
  const { id, taskId, taskName } = props.node;
  const task = tasks.find((task) => task.id === taskId);
  // const { steps } = workflowExecution;
  const stepTaskStatus = Array.isArray(workflowExecution?.steps)
    ? workflowExecution?.steps.find((step) => step.taskId === id)?.flowTaskStatus
    : null;
  // const flowTaskStatus = stepTaskStatus ?? ExecutionStatus.Skipped;
  const flowTaskStatus = stepTaskStatus ? stepTaskStatus : RunStatus.Skipped;

  const scrollToTask = () => {
    const taskLogItem = document.getElementById(`task-${id}`);
    if (taskLogItem) {
      taskLogItem.scrollIntoView();
      taskLogItem.focus();
    }
  };

  return (
    <WorkflowNode
      category={task?.category}
      className={cx(styles[flowTaskStatus], { [styles.disabled]: flowTaskStatus === RunStatus.NotStarted })}
      icon={task?.icon}
      isExecution
      name={task?.name}
      node={props.node}
      subtitle={taskName}
      title={task?.name}
      onClick={scrollToTask}
    >
      <div className={styles.progressBar} />
      <div className={styles.badgeContainer}>
        <p className={styles.badgeText}>Custom</p>
      </div>
      <div className={styles.progressBar} />
    </WorkflowNode>
  );
};

export default React.memo(CustomTaskNodeExecution);
