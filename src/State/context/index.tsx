import React from "react";
import { FlowTeam, FlowUser, TaskTemplate, WorkflowExecution, WorkflowRevision, WorkflowSummary } from "Types";

export function createContext<ContextType>() {
  const context = React.createContext<ContextType | undefined>(undefined);
  function useContext() {
    const contextValue = React.useContext(context);
    if (!contextValue) throw new Error("useContext must be inside a Provider with a value");
    return contextValue;
  }
  return [useContext, context.Provider] as const;
}

export const [useAppContext, AppContextProvider] = createContext<AppContext>();

type AppContext = {
  communityUrl: string;
  isTutorialActive: boolean;
  setIsTutorialActive: (isActive: boolean) => void;
  quotas: {
    maxActivityStorageSize: string;
    maxWorkflowStorageSize: string;
  };
  teams: FlowTeam[];
  user: FlowUser;
  activeTeam?: FlowTeam;
};

interface TaskProvider {
  category: string;
  id: string;
  icon: any;
  name: string;
}

interface ExecutionContext {
  tasks: Array<TaskProvider>;
  workflowExecution?: WorkflowExecution;
  workflowRevision: object;
}
export const [useExecutionContext, ExecutionContextProvider] = createContext<ExecutionContext>();

interface EditorContext {
  mode: string;
  availableParametersQueryData?: any;
  revisionDispatch?: Function;
  revisionState: WorkflowRevision;
  summaryData: WorkflowSummary;
  taskTemplatesData: Array<TaskTemplate>;
}

export const [useEditorContext, EditorContextProvider] = createContext<EditorContext>();
