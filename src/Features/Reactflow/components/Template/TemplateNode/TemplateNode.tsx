import React from "react";
import { ComposedModal } from "@boomerang-io/carbon-addons-boomerang-react";
import { useReactFlow, Node } from "reactflow";
import TaskUpdateModal from "Components/TaskUpdateModal";
import WorkflowEditButton from "Components/WorkflowEditButton";
import WorkflowWarningButton from "Components/WorkflowWarningButton";
import { useEditorContext, useRunContext } from "Hooks";
import { WorkflowEngineMode } from "Constants";
import type { DataDrivenInput, Task, WorkflowNode, WorkflowNodeProps } from "Types";
import BaseNode from "../../Base/BaseNode";
import { TaskForm as DefaultTaskForm } from "./TaskForm";
import styles from "./TemplateNode.module.scss";

interface TaskTemplateNodeProps extends WorkflowNodeProps {
  additionalFormInputs?: Array<Partial<DataDrivenInput>>;
  className?: string;
  formInputsToMerge?: Array<Partial<DataDrivenInput>>;
  TaskForm?: React.FC<any>; //TODO
}

export default function TaskTemplateNode(props: TaskTemplateNodeProps) {
  const { mode, tasksData } = useEditorContext();
  // Get the first (and latest) version of the task template
  const taskTemplate = tasksData[props.data.taskRef][0];

  if (mode === WorkflowEngineMode.Runner) {
    return <TaskTemplateNodeExecution {...props} taskTemplate={taskTemplate} />;
  }

  return <TaskTemplateNodeDesigner {...props} taskTemplate={taskTemplate} TaskForm={props.TaskForm} />;
}

interface TaskTemplateNodeDesignerProps extends TaskTemplateNodeProps {
  taskTemplate: Task;
}

function TaskTemplateNodeDesigner(props: TaskTemplateNodeDesignerProps) {
  const { taskTemplate, TaskForm = DefaultTaskForm } = props;
  const reactFlowInstance = useReactFlow();

  const { availableParameters } = useEditorContext();
  const nodes = reactFlowInstance.getNodes() as Array<WorkflowNode>;

  // Get the taskNames names from the nodes on the model
  const otherTaskNames = nodes.map((node) => node.data.name).filter((name) => name !== props.data.name);

  props.formInputsToMerge?.forEach((input) => {
    const foundConfigItemIdx = taskTemplate.config.findIndex((configItem) => configItem.key === input.key);
    if (foundConfigItemIdx >= 0) {
      taskTemplate.config[foundConfigItemIdx] = { ...taskTemplate.config[foundConfigItemIdx], ...input };
    }
  });

  const handleOnUpdateTaskVersion = ({ inputs, version }: { inputs: Record<string, string>; version: number }) => {
    const nameAndParamListRecord = inputRecordToNameAndParamListRecord(inputs);
    const newNodes = nodes.map((node) => {
      if (node.id === props.id) {
        return {
          ...node,
          data: { ...node.data, ...nameAndParamListRecord, taskVersion: version, upgradesAvailable: false },
        };
      } else {
        return node;
      }
    }) as Array<WorkflowNode>;

    reactFlowInstance.setNodes(newNodes);
  };

  const handleOnSaveTaskConfig = (
    inputs: Record<string, string>,
    results: Array<{ name: string; description: string }> = [],
  ) => {
    const nameAndParamListRecord = inputRecordToNameAndParamListRecord(inputs);
    const newNodes = nodes.map((node) => {
      if (node.id === props.id) {
        return {
          ...node,
          data: { ...node.data, ...nameAndParamListRecord, results },
        };
      } else {
        return node;
      }
    }) as unknown as Node<any>[];

    reactFlowInstance.setNodes(newNodes);
  };

  const ConfigureTask = () => {
    return (
      <ComposedModal
        modalHeaderProps={{
          title: `Edit ${taskTemplate.displayName}`,
          subtitle: taskTemplate.description || "Configure the task",
        }}
        modalTrigger={({ openModal }) => <WorkflowEditButton className={styles.editButton} onClick={openModal} />}
      >
        {({ closeModal }) => (
          <TaskForm
            availableParameters={availableParameters}
            additionalFormInputs={props.additionalFormInputs}
            closeModal={closeModal}
            node={props.data}
            onSave={handleOnSaveTaskConfig}
            otherTaskNames={otherTaskNames}
            task={taskTemplate}
          />
        )}
      </ComposedModal>
    );
  };

  const UpdateTaskVersion = () => {
    return (
      <ComposedModal
        composedModalProps={{
          containerClassName: styles.updateTaskModalContainer,
          shouldCloseOnOverlayClick: false,
        }}
        modalHeaderProps={{
          title: `New version available`,
          subtitle:
            "The managers of this task have made some changes that were significant enough for a new version. You can still use the current version, but it’s usually a good idea to update when available. The details of the change are outlined below. If you’d like to update, review the changes below and make adjustments if needed. This process will only update the task in this Workflow - not any other workflows where this task appears.",
        }}
        modalTrigger={({ openModal }) =>
          props.data?.upgradesAvailable ? (
            <WorkflowWarningButton className={styles.updateButton} onClick={openModal} />
          ) : null
        }
      >
        {({ closeModal }) => (
          <TaskUpdateModal
            availableParameters={availableParameters}
            closeModal={closeModal}
            node={props.data}
            onSave={handleOnUpdateTaskVersion}
            latestTaskTemplate={taskTemplate}
          />
        )}
      </ComposedModal>
    );
  };

  return (
    <BaseNode
      isConnectable
      className={props.className}
      icon={taskTemplate.icon}
      kind={WorkflowEngineMode.Editor}
      nodeProps={props}
      title={props.data.name}
      subtitle={taskTemplate.description}
    >
      <ConfigureTask />
      <UpdateTaskVersion />
    </BaseNode>
  );
}

interface TaskTemplateNodeExecutionProps extends WorkflowNodeProps {
  className?: string;
  taskTemplate: Task;
}

function TaskTemplateNodeExecution(props: TaskTemplateNodeExecutionProps) {
  const { workflowRun } = useRunContext();
  const scrollToTask = () => {
    const taskLogItem = document.getElementById(`task-${props.data.name}`);
    if (taskLogItem) {
      taskLogItem.scrollIntoView();
      taskLogItem.focus();
    }
  };

  const status = workflowRun.tasks.find((task) => task.name === props.data.name)?.status;

  return (
    <BaseNode
      className={props.className}
      icon={props.taskTemplate.icon}
      isConnectable={false}
      kind={WorkflowEngineMode.Runner}
      nodeProps={props}
      onClick={scrollToTask}
      status={status}
      subtitle={props.taskTemplate.description}
      title={props.data.name}
    />
  );
}

function inputRecordToNameAndParamListRecord(inputRecord: Record<string, string>): {
  name: string;
  params: Array<{ name: string; value: string }>;
} {
  // Pull off taskName from input record to set the new name
  // TODO: think about making this better
  const name = inputRecord["taskName"];
  delete inputRecord["taskName"];

  const params = Object.entries(inputRecord).map(([key, value]) => {
    return { name: key, value };
  });

  return { name, params };
}
