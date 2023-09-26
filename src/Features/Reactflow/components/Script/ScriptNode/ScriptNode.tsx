import React from "react";
import { TemplateNode } from "../../Template";
import { WorkflowNodeProps } from "Types";
import { ScriptForm } from "./ScriptForm";
import styles from "./ScripNode.module.scss";

export default function CustomTaskNode(props: WorkflowNodeProps) {
  // use context to determine state of diagram
  // render the correct component based on the mode of the diagram
  return <CustomTaskNodeDesigner {...props} />;
}

function CustomTaskNodeDesigner(props: WorkflowNodeProps) {
  return <TemplateNode {...props} className={styles.node} TaskForm={ScriptForm} />;
}
