import React from "react";
import { ComposedModal } from "@boomerang-io/carbon-addons-boomerang-react";
import { getBezierPath, EdgeLabelRenderer, useReactFlow } from "reactflow";
import { markerTypes } from "Features/Reactflow/Reactflow";
import WorkflowCloseButton from "Components/WorkflowCloseButton";
import { useWorkflowContext } from "Hooks";
import { WorkflowEngineMode } from "Constants";
import { WorkflowEdge, WorkflowEdgeProps } from "Types";
import ConfigureSwitchModal from "./ConfigureModal";
import ExecutionConditionButton from "./ExecutionConditionButton";

export default function SwitchEdge(props: WorkflowEdgeProps) {
  const { mode } = useWorkflowContext();

  if (mode === WorkflowEngineMode.Runner) {
    return <SwitchEdgeRun {...props} />;
  }

  return <SwitchEdgeEditor {...props} />;
}

function SwitchEdgeEditor(props: WorkflowEdgeProps) {
  const { id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style, data } = props;
  const { mode } = useWorkflowContext();
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const reactFlowInstance = useReactFlow();

  const mergedStyles = {
    ...style,
    stroke: "var(--flow-switch-primary)",
    strokeWidth: "2",
  };

  const handleChangeCondition = (decisionCondition: string) => {
    const edges = reactFlowInstance.getEdges() as Array<WorkflowEdge>;
    const newEdges = edges.map((edge) => {
      if (edge.id === props.id) {
        return {
          ...edge,
          data: { ...edge.data, decisionCondition },
        };
      } else {
        return edge;
      }
    }) as Array<WorkflowEdge>;

    reactFlowInstance.setEdges(newEdges);
  };

  return (
    <>
      <path
        id={id}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={`url(#${markerTypes.decision}`}
        style={mergedStyles}
      />
      <EdgeLabelRenderer>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            fontWeight: 700,
            pointerEvents: "all",
          }}
          className="nodrag nopan"
        >
          {mode === "editor" ? (
            <>
              <WorkflowCloseButton
                style={{ path: "var(--flow-switch-primary)" }}
                className=""
                onClick={() => reactFlowInstance.deleteElements({ edges: [props] })}
              />
              <ComposedModal
                confirmModalProps={{
                  title: "Are you sure?",
                  children: "Your changes will not be saved",
                }}
                modalHeaderProps={{
                  title: "Switch",
                  subtitle: "Set up the conditions",
                }}
                modalTrigger={(props) => {
                  return <ExecutionConditionButton onClick={props.openModal} inputText={data?.decisionCondition} />;
                }}
              >
                {({ closeModal }) => {
                  return (
                    <ConfigureSwitchModal
                      closeModal={closeModal}
                      decisionCondition={data?.decisionCondition}
                      onUpdate={handleChangeCondition}
                    />
                  );
                }}
              </ComposedModal>
            </>
          ) : (
            <ExecutionConditionButton disabled inputText={data?.decisionCondition} />
          )}
        </div>
      </EdgeLabelRenderer>
    </>
  );
}

function SwitchEdgeRun(props: WorkflowEdgeProps) {
  const { id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, style, data } = props;
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const mergedStyles = {
    ...style,
    stroke: "var(--flow-switch-primary)",
    strokeWidth: "2",
  };

  return (
    <>
      <path
        id={id}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={`url(#${markerTypes.decision}`}
        style={mergedStyles}
      />
      <EdgeLabelRenderer>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            fontWeight: 700,
            pointerEvents: "all",
          }}
          className="nodrag nopan"
        >
          <ExecutionConditionButton disabled onClick={() => {}} inputText={data?.decisionCondition} />
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
