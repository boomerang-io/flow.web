import React from "react";
import { TemplateNode } from "../Template";
import { DataDrivenInput, WorkflowNodeProps } from "Types";
import { useTeamContext } from "Hooks";

export default function ApprovalNode(props: WorkflowNodeProps) {
  // use context to determine state of diagram
  // render the correct component based on the mode of the diagram
  return <ApprovalNodeDesigner {...props} />;
}

function ApprovalNodeDesigner(props: WorkflowNodeProps) {
  const { team } = useTeamContext();

  const taskFormInputs: Array<Partial<DataDrivenInput>> =
    team.approverGroups && team.approverGroups.length > 0
      ? [
          {
            placeholder: "",
            description: "",
            value: "1",
            required: true,
            min: 1,
            key: "numberOfApprovals",
            name: "numberOfApprovals",
            label: "Number of Approvals",
            type: "number",
            helperText: "Number of approvals needed in order to approve",
          },
          {
            placeholder: "",
            description: "",
            required: false,
            key: "approverGroupId",
            name: "approvalGroupId",
            label: "Approver Group (optional)",
            type: "select",
            helperText: "Choose an Approver Group to handle this approval",
            options: team.approverGroups.map((approverGroup) => ({
              key: approverGroup.id,
              value: approverGroup.name,
            })),
          },
        ]
      : [
          {
            disabled: true,
            placeholder:
              "This will be assigned to you as the approver to Action. Approver Groups and multiple approvers are a Team Workflows concept.",
            description: "",
            required: false,
            key: "message",
            label: "Nothing to configure",
            type: "textarea",
            helperText: "",
          },
        ];

  return <TemplateNode {...props} additionalFormInputs={taskFormInputs} />;
}
