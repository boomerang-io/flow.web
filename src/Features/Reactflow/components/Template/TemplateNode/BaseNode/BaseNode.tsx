import React from "react";
import { Bee } from "@carbon/react/icons";
import cx from "classnames";
import { Connection, Handle, Position, useReactFlow } from "reactflow";
import WorkflowCloseButton from "Components/WorkflowCloseButton";
import { taskIcons } from "Utils/taskIcons";
import { WorkflowEngineMode } from "Constants";
import { RunStatus, WorkflowEngineModeType, WorkflowNodeProps } from "Types";
import styles from "./BaseNode.module.scss";

//About: based on WorkflowNode component that serves as a base for many of the the components
//TODO: add icon
//TODO: look at what props are required

interface BaseNodeProps {
  children?: React.ReactNode;
  className?: string;
  icon?: string;
  isConnectable: boolean;
  mode: WorkflowEngineModeType;
  nodeProps: WorkflowNodeProps;
  onClick?: () => void;
  subtitle?: string;
  title?: string;
  status?: RunStatus;
}

export default function BaseNode(props: BaseNodeProps) {
  const { isConnectable, children, className, icon, onClick, status, subtitle, title } = props;
  const reactFlowInstance = useReactFlow();
  let Icon = () => <Bee style={{ willChange: "auto" }} />;

  if (icon) {
    //@ts-ignore
    Icon = taskIcons.find((taskIcon) => taskIcon.name === icon)?.Icon ?? Icon;
  }

  const isEditor = props.mode === WorkflowEngineMode.Editor;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={cx(styles.node, className, styles[status ?? ""], { [styles.locked]: !isEditor })} onClick={onClick}>
      {isEditor ? (
        <div style={{ position: "absolute", top: "-1rem", right: "-0.875rem", display: "flex", gap: "0.25rem" }}>
          <WorkflowCloseButton
            style={{ height: "1.75rem" }}
            className={""}
            onClick={() => reactFlowInstance.deleteElements({ nodes: [props.nodeProps] })}
          >
            Delete
          </WorkflowCloseButton>
        </div>
      ) : null}
      {status === RunStatus.Running ? <div className={styles.progressBar} /> : null}
      <header className={styles.header}>
        <Icon />
        <h3 title={title || "Task"} className={styles.title}>
          {title || "Task"}
        </h3>
      </header>
      <p title={subtitle} className={styles.subtitle}>
        {subtitle || "Task"}
      </p>
      <Handle
        className={cx(styles.port, styles.right)}
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        isValidConnection={isValidHandle}
      />
      <Handle
        className={cx(styles.port, styles.left)}
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        isValidConnection={isValidHandle}
      />
      {children}
    </div>
  );

  function isValidHandle(connection: Connection) {
    return connection.source !== connection.target;
  }
}
