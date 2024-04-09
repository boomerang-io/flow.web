import React from "react";
import dagre from "@dagrejs/dagre";
import ReactFlow, {
  Background,
  Connection,
  ControlButton,
  Controls,
  Edge,
  EdgeProps,
  Node,
  NodeProps,
  Position,
  ReactFlowInstance,
  ReactFlowProvider,
  XYPosition,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { WorkflowProvider } from "State/context";
import { EdgeExecutionCondition, NodeType, WorkflowEngineMode } from "Constants";
import {
  NodeTypeType,
  Task,
  WorkflowEdge,
  WorkflowEdgeData,
  WorkflowEngineModeType,
  WorkflowNode,
  WorkflowNodeData,
} from "Types";
import * as GraphComps from "./components";
import "./styles.scss";

function CustomEdgeArrow({ id }: { id: string }) {
  return (
    <marker
      id={id}
      markerWidth="16"
      markerHeight="16"
      viewBox="-10 -10 20 20"
      markerUnits="strokeWidth"
      orient="auto-start-reverse"
      refX="0"
      refY="0"
    >
      <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" points="-5,-4 0,0 -5,4 -5,-4"></polyline>
    </marker>
  );
}

interface MarkerDefinitionsProps {
  children: React.ReactNode;
}

export function MarkerDefinition({ children }: MarkerDefinitionsProps) {
  return (
    <svg>
      <defs>{children}</defs>
    </svg>
  );
}

export const markerTypes: { [K in NodeTypeType]: string } = {
  approval: "task-marker",
  acquirelock: "task-marker",
  custom: "task-marker",
  decision: "decision-marker",
  end: "task-marker",
  eventwait: "task-marker",
  generic: "task-marker",
  manual: "task-marker",
  releaselock: "task-marker",
  runscheduledworkflow: "task-marker",
  runworkflow: "task-marker",
  script: "task-marker",
  setwfproperty: "task-marker",
  setwfstatus: "task-marker",
  template: "task-marker",
  start: "task-marker",
  sleep: "task-marker",
};

const edgeTypes: { [K in NodeTypeType]: React.FC<EdgeProps> } = {
  acquirelock: GraphComps.TemplateEdge,
  approval: GraphComps.TemplateEdge,
  custom: GraphComps.TemplateEdge,
  decision: GraphComps.DecisionEdge,
  end: GraphComps.TemplateEdge,
  eventwait: GraphComps.TemplateEdge,
  generic: GraphComps.TemplateEdge,
  manual: GraphComps.TemplateEdge,
  releaselock: GraphComps.TemplateEdge,
  runscheduledworkflow: GraphComps.TemplateEdge,
  runworkflow: GraphComps.TemplateEdge,
  script: GraphComps.TemplateEdge,
  setwfproperty: GraphComps.TemplateEdge,
  setwfstatus: GraphComps.TemplateEdge,
  start: GraphComps.StartEdge,
  template: GraphComps.TemplateEdge,
  sleep: GraphComps.TemplateEdge,
};

const nodeTypes: { [K in NodeTypeType]: React.FC<NodeProps> } = {
  acquirelock: GraphComps.TemplateNode,
  approval: GraphComps.ApprovalNode,
  custom: GraphComps.CustomTaskNode,
  decision: GraphComps.DecisionNode,
  end: GraphComps.EndNode,
  eventwait: GraphComps.TemplateNode,
  generic: GraphComps.TemplateNode,
  manual: GraphComps.TemplateNode,
  releaselock: GraphComps.TemplateNode,
  runscheduledworkflow: GraphComps.RunScheduledWorkflowNode,
  runworkflow: GraphComps.RunWorkflowNode,
  script: GraphComps.ScriptNode,
  setwfproperty: GraphComps.TemplateNode,
  setwfstatus: GraphComps.TemplateNode,
  start: GraphComps.StartNode,
  template: GraphComps.TemplateNode,
  sleep: GraphComps.TemplateNode,
};

interface FlowDiagramProps {
  mode: WorkflowEngineModeType;
  nodes?: WorkflowNode[];
  edges?: Edge[];
  reactFlowInstance: ReactFlowInstance | null;
  setReactFlowInstance?: React.Dispatch<React.SetStateAction<ReactFlowInstance | null>>;
  tasks: Record<string, Array<Task>>;
}

// Determine if we should use auto-layout or not
function initElements(nodes: Array<WorkflowNode> = [], edges: Array<WorkflowEdge> = []) {
  let useAutoLayout = false;
  for (let node of nodes) {
    if (!node.position) {
      useAutoLayout = true;
      break;
    }
  }

  return useAutoLayout ? autoLayoutElements(nodes, edges) : { nodes, edges };
}

// Auto-layout via dagre
function autoLayoutElements(nodes: Array<WorkflowNode> = [], edges: Array<WorkflowEdge> = []) {
  const direction = edges.length === 0 ? "TB" : "LR";
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ rankdir: direction, edgesep: 100 });

  nodes.forEach((node: WorkflowNode) => {
    if (node.type === NodeType.Start || node.type === NodeType.End) {
      dagreGraph.setNode(node.id, { width: 144 * 1.5, height: 80 });
    } else {
      dagreGraph.setNode(node.id, { width: 280 * 1.5, height: 80 });
    }
  });

  edges.forEach((edge: Edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node: WorkflowNode) => {
    const positionedNode = dagreGraph.node(node.id);
    node.targetPosition = Position.Left;
    node.sourcePosition = Position.Right;

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left)
    if (node.type === NodeType.Start || node.type === NodeType.End) {
      node.position = {
        x: (positionedNode.x - 144 / 2) * 1,
        y: (positionedNode.y - 80 / 2) * 1,
      };
    } else {
      node.position = {
        x: (positionedNode.x - 240 / 2) * 1,
        y: (positionedNode.y - 80 / 2) * 1,
      };
    }

    return node;
  });

  return { nodes, edges };
}

function FlowDiagram(props: FlowDiagramProps) {
  /**
   * Set up state and refs
   */
  const reactFlowWrapper = React.useRef<HTMLDivElement>(null);
  const { nodes: initNodes, edges: initEdges } = initElements(props.nodes, props.edges);
  const [nodes, setNodes, onNodesChange] = useNodesState<WorkflowNodeData>(initNodes ?? []);
  const [edges, setEdges, onEdgesChange] = useEdgesState<WorkflowEdgeData>(initEdges ?? []);
  const shouldFitGraph = React.useRef(false);

  React.useEffect(() => {
    if (shouldFitGraph.current) {
      props.reactFlowInstance?.fitView();
      shouldFitGraph.current = false;
    }
  });

  /**
   * Handle changes of nodes and eges
   */
  const onConnect = React.useCallback(
    (connection: Connection) =>
      setEdges((edges) => addEdge({ ...connection, ...getEdgeType(connection, nodes) }, edges)),
    [setEdges, nodes],
  );

  const onLayout = React.useCallback(() => {
    const { nodes: positionedNodes, edges: positionedEdges } = autoLayoutElements(nodes, edges);
    setNodes([...positionedNodes]);
    setEdges([...positionedEdges]);
    shouldFitGraph.current = true;
  }, [nodes, edges, setEdges, setNodes]);

  /**
   * Handle drag action w/ drag and drop
   */
  const onDragOver = React.useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  /**
   * Handle drop action w/ drag and drop
   */
  const onDrop = React.useCallback(
    (event) => {
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect() ?? { left: 0, top: 0 };
      const taskString = event.dataTransfer.getData("application/reactflow") as string;
      const task = JSON.parse(taskString) as Task;

      // check if the dropped element is valid
      if (typeof task.type === "undefined" || !task) {
        return;
      }

      const position = props.reactFlowInstance?.project({
        x: event.clientX - reactFlowBounds?.left - 75,
        y: event.clientY - reactFlowBounds?.top - 25,
      }) as XYPosition;

      // TODO: clean this up - determines how to give the task template a unique name
      const numTaskRefInstances = nodes.reduce((accum, currentNode) => {
        if (currentNode.data.taskRef === task.name) {
          accum += 1;
        }
        return accum;
      }, 0);

      const taskName = numTaskRefInstances ? `${task.displayName} ${numTaskRefInstances + 1}` : task.displayName;

      const newNode: Node = {
        id: taskName,
        type: task.type,
        position,
        data: {
          name: taskName,
          taskRef: task.name,
          taskVersion: task.version,
          upgradesAvailable: false,
          params: [],
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [props.reactFlowInstance, nodes, setNodes],
  );

  const isEnabled = props.mode === WorkflowEngineMode.Editor;

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <WorkflowProvider value={{ mode: props.mode, tasks: props.tasks }}>
        <ReactFlowProvider>
          <div
            data-mode={props.mode}
            className="reactflow-wrapper"
            ref={reactFlowWrapper}
            style={{ height: "100%", width: "100%" }}
          >
            <ReactFlow
              edges={edges}
              edgeTypes={edgeTypes}
              elementsSelectable={isEnabled}
              fitView={true}
              fitViewOptions={{ maxZoom: 1 }}
              nodeTypes={nodeTypes}
              nodes={nodes}
              nodesConnectable={isEnabled}
              nodesDraggable={isEnabled}
              onConnect={onConnect}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onEdgesChange={onEdgesChange}
              onNodesChange={onNodesChange}
              onInit={props.setReactFlowInstance}
              proOptions={{ hideAttribution: true }}
            >
              <MarkerDefinition>
                <CustomEdgeArrow id={markerTypes.decision} />
                <CustomEdgeArrow id={markerTypes.template} />
              </MarkerDefinition>
              <Background />
              <Controls showInteractive={isEnabled}>
                {isEnabled ? (
                  <ControlButton onClick={onLayout} title="auto-layout">
                    <div>L</div>
                  </ControlButton>
                ) : null}
              </Controls>
            </ReactFlow>
          </div>
        </ReactFlowProvider>
      </WorkflowProvider>
    </div>
  );
}

function getEdgeType(connection: Connection, nodes: WorkflowNode[]): Pick<WorkflowEdge, "type" | "data"> {
  const { source } = connection;
  const node = nodes.find((node) => node.id === source) as WorkflowNode;
  return {
    type: node.type,
    data: { executionCondition: EdgeExecutionCondition.Always, decisionCondition: "" },
  };
}

export default FlowDiagram;
