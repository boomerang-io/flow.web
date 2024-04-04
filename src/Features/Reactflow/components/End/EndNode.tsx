import React from "react";
import cx from "classnames";
import { Connection, Handle, Position, NodeProps } from "reactflow";
import { useEditorContext } from "Hooks";
import { WorkflowEngineMode } from "Constants";
import styles from "./EndNode.module.scss";

export default function EndNode(props: NodeProps) {
  const { mode } = useEditorContext();
  const { isConnectable } = props;
  return (
    <div className={cx(styles.node, { [styles.locked]: mode !== WorkflowEngineMode.Editor })}>
      <Handle
        className={styles.port}
        isConnectable={isConnectable}
        isValidConnection={isValidHandle}
        position={Position.Left}
        type="target"
      />
      <h2>End</h2>
    </div>
  );
}
function isValidHandle(connection: Connection) {
  return connection.source !== connection.target;
}
