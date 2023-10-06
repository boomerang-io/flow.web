import { User } from "@boomerang-io/carbon-addons-boomerang-react";
import { Edge, EdgeProps, Node, NodeProps } from "reactflow";
import {
  FlowTeamStatus,
  UserRole,
  WorkflowEngineMode,
  WorkflowPropertyAction,
  NodeType,
  EdgeExecutionCondition,
  WorkflowView,
} from "Constants";

type ObjectValuesToType<T> = T[keyof T];

declare global {
  interface Window {
    _SERVER_DATA: {
      APP_ROOT: string;
      CORE_ENV_URL: string;
      CORE_SERVICE_ENV_URL: string;
      EMBEDDED_MODE: string;
      PRODUCT_ENV_URL: string;
      PRODUCT_SERVICE_ENV_URL: string;
      PRODUCT_STANDALONE: string;
      [key: string]: string;
    };
  }
}

export enum PlatformRole {
  Admin = "admin",
  User = "user",
  Operator = "operator",
}

export enum UserStatus {
  Active = "active",
  Inactive = "inactive",
}

export interface SimpleApprover {
  approverId: string;
  approverEmail: string;
  approverName: string;
  comments: string;
  date: string;
  approved: boolean;
}

export interface Action {
  id: string;
  taskRunRef: string;
  workflowRunRef: string;
  workflowRef: string;
  teamRef: string;
  status: string;
  type: string;
  creationDate: string;
  taskName: string;
  workflowName: string;
  teamName: string;
  numberOfApprovals: number;
  approvalsRequired: number;
  actioners: SimpleApprover[];
  instructions: any;
}

export interface Approver {
  name: string;
  id: string;
  email: string;
}

export interface ApproverGroup {
  id: string;
  name: string;
  creationDate: string;
  approvers: Array<Member>;
}

export interface DataDrivenInput {
  id: string;
  defaultValue?: string;
  description?: string;
  helperText?: string;
  language?: string;
  name?: string;
  disabled?: boolean;
  key: string;
  label?: string;
  onChange?: (args: any) => void;
  onBlur?: (args: any) => void;
  options?: Array<{ key: string; value: string }>;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  value: string;
  values?: Array<string> | Array<{ key: string; value: string }>;
  type: string;
  min?: number;
  max?: number;
}

export interface ResultParameter {
  name: string;
  description: string;
  value?: any;
}

export interface ModalTriggerProps {
  openModal(): void;
}

export interface ComposedModalChildProps {
  closeModal(): void;
  forceCloseModal(): void;
}

export interface FormikSetFieldValue {
  (id: string, value: string | Array<string> | boolean | undefined): void;
}

export interface CreateWorkflowSummary {
  name: string;
  description: string;
  icon: string;
}

export interface Workflow {
  id: string;
  name: string;
  creationDate: string;
  status: WorkflowStatus;
  version: number;
  description: string;
  icon: string;
  labels?: Record<string, string>;
  annotations?: Record<string, object>;
  markdown?: string;
  params?: Array<{
    name: string;
    type: string;
    description?: string;
    defaultValue?: object;
  }>;
  tasks: Array<any>; //TODO: what should this type be
  changelog: {
    author: string;
    reason: string;
    date: string;
  };
  config: Array<DataDrivenInput>;
  triggers: {
    manual: {
      enable: boolean;
    };
    event: {
      enable: boolean;
      subject: string;
      type: string;
    };
    scheduler: {
      enable: boolean;
    };
    webhook: {
      enable: boolean;
    };
  };
  templateUpgradesAvailable: boolean;
  workspaces: Array<{
    name: string;
    type: string;
    optional: boolean;
    spec?: {
      accessMode?: string;
      className?: string;
      size?: number;
      mountPath?: string;
    };
  }>;
}

export enum WorkflowStatus {
  Active = "active",
  Inactive = "inactive",
}

export type WorkflowViewType = ObjectValuesToType<typeof WorkflowView>;
export type EdgeExecutionConditionType = ObjectValuesToType<typeof EdgeExecutionCondition>;

type PageableSort = {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
};

type Pageable<T> = {
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  sort: PageableSort;
  content: Array<T>;
};

export type PaginatedUserResponse = Pageable<FlowUser>;
export type PaginatedTeamResponse = Pageable<FlowTeam>;
export type PaginatedTaskTemplateResponse = Pageable<TaskTemplate>;
export type PaginatedWorkflowResponse = Pageable<Workflow>;
export type PaginatedSchedulesResponse = Pageable<ScheduleUnion>;

export type WorkflowNodeData = {
  name: string;
  templateRef: string;
  templateVersion: number;
  templateUpgradesAvailable: boolean;
  params: Array<{ name: string; value: string }>;
  results: Array<{ name: string; description: string }>;
};
export type WorkflowNode = Node<WorkflowNodeData>;
export type WorkflowNodeProps = NodeProps<WorkflowNodeData>;

export type WorkflowEdgeData = {
  decisionCondition: string;
  executionCondition: EdgeExecutionConditionType;
};
export type WorkflowEdge = Edge<WorkflowEdgeData>;
export type WorkflowEdgeProps = EdgeProps<WorkflowEdgeData>;

export interface WorkflowParameter {
  defaultValue: string;
  description: string;
  key: string;
  label: string;
  required: boolean;
  type: string;
}

export interface WorkflowEditor extends Workflow {
  edges: Array<WorkflowEdge>;
  nodes: Array<Node<WorkflowNodeData>>;
}

export enum ApprovalStatus {
  Approved = "approved",
  Rejected = "rejected",
  Submitted = "submitted",
}

export interface WorkflowExecutionStep {
  activityId: string;
  approval: {
    id: string;
    status: ApprovalStatus;
    instructions: string;
    audit: {
      approverId: string;
      approverName: string;
      approverEmail: string;
      actionDate: number;
      result: boolean;
      comments: string;
    };
  };
  duration: number;
  flowTaskStatus: RunStatus;
  id: string;
  order: number;
  startTime: string;
  taskId: string;
  taskName: string;
  taskType: string;
  preApproved: boolean;
  runWorkflowActivityId: string;
  runWorkflowId: string;
  runWorkflowActivityStatus: RunStatus;
  switchValue: string;
  outputs: {
    [key: string]: string;
  };
  error: {
    code: string;
    message: string;
  };
  results: Array<{
    name: string;
    description: string;
    value: string;
  }>;
}
export interface WorkflowExecution {
  creationDate: string;
  duration: number;
  id: string;
  status: RunStatus;
  workflowId: string;
  workflowRevisionid: string;
  workflowRevisionVersion: string;
  trigger: string;
  properties: Array<
    | {
        key: string;
        value: string;
      }
    | {
        key: string;
        value: null;
      }
  >;
  outputProperties: Array<
    | {
        key: string;
        value: string;
      }
    | {
        key: string;
        value: null;
      }
  >;
  steps: Array<WorkflowExecutionStep>;
  teamName: string;
  awaitingApproval: boolean;
  error: {
    code: string;
    message: string;
  };
  initiatedByUserName: string;
  scope: string;
}
export interface ChangeLogEntry {
  date: string;
  reason: string;
  author: string;
  version: number;
}

export type ChangeLog = Array<ChangeLogEntry>;

export interface TaskTemplate {
  id: string;
  name: string;
  displayName: string;
  description?: string;
  status: string;
  category: string;
  version: number;
  creationDate: string;
  labels?: Record<string, string>;
  icon: string;
  type: string;
  changelog: ChangeLog;
  verified: boolean;
  config: Array<DataDrivenInput>;
  spec: TaskTemplateSpec;
}

export interface TaskTemplateSpec {
  arguments?: Array<string>;
  command?: Array<string>;
  params?: any;
  envs?: any;
  image?: string;
  results?: Array<{ name: string; description: string }>;
  script?: number;
  workingDir?: string;
}

export type FlowTeamStatusType = ObjectValuesToType<typeof FlowTeamStatus>;

export interface FlowTeam {
  name: string;
  displayName: string;
  description?: string;
  creationDate: string;
  status: FlowTeamStatusType;
  externalRef?: string;
  labels?: Record<string, string>;
  quotas: FlowTeamQuotas;
  members: Array<Member>;
  settings?: unknown;
  parameters: Array<DataDrivenInput>;
  approverGroups: Array<ApproverGroup>;
}

// As part of the Profile
export interface FlowTeamSummary {
  name: string;
  displayName: string;
  description?: string;
  creationDate: string;
  status: FlowTeamStatus;
  externalRef?: string;
  labels?: Record<string, string>;
  insights: {
    workflows: number;
    members: number;
  };
}

export interface FlowTeamQuotas {
  maxWorkflowCount: number;
  maxWorkflowExecutionMonthly: number;
  maxWorkflowStorage: number;
  maxWorkflowExecutionTime: number;
  maxConcurrentWorkflows: number;
  currentRuns: number;
  currentWorkflowCount: number;
  currentConcurrentRuns: number;
  currentRunTotalDuration: number;
  currentRunMedianDuration: number;
  currentPersistentStorage: number;
  monthlyResetDate: string;
}

export interface PaginatedSort {
  direction: string;
  property: string;
  ignoreCase: boolean;
  nullHandling: string;
  descending: boolean;
  ascending: boolean;
}

export interface PaginatedResponse<RecordType> {
  totalPages: number;
  totalElements: number;
  last: boolean;
  sort: Array<PaginatedSort>;
  first: boolean;
  numberOfElements: number;
  size: number;
  number: number;
  content: Array<RecordType>;
}

export interface FlowUser extends User {
  id: string;
  email: string;
  name: string;
  type: PlatformRole;
  creationDate: string;
  lastLoginDate: string;
  status: UserStatus;
  labels?: Record<string, string>;
  settings?: FlowUserSettings;
}

export interface Member {
  id?: string;
  email?: string;
  role?: MemberRole;
}

export enum MemberRole {
  Owner = "owner",
  Editor = "editor",
  Reader = "reader",
}

export interface FlowUserSettings {
  hasConsented: boolean;
  isShowHelp: boolean | null;
  ifFirstVisit: boolean;
}

export interface Property {
  value: string | null;
  readOnly: boolean;
  id: string;
  description: string;
  key: string;
  label: string;
  type: string;
}

export interface PatchProperty {
  value?: string;
  readOnly?: boolean;
  id?: string;
  description?: string;
  key?: string;
  label?: string;
  type?: string;
}

export interface Token {
  id: string;
  name: string;
  type: TokenType;
  creationDate: string;
  expirationDate: string;
  principal: string;
  description: string;
  valid: boolean;
  permissions: Array<String>;
}

export type TokenType = "user" | "workflow" | "team" | "global";

export interface TokenRequest {
  expiryDate: string | number | null;
  description: string;
}

export interface ComboBoxItem {
  name: string;
  label?: string;
  value: string;
}

export interface WorkflowTemplate {
  name: string;
  displayName: string;
  icon: string;
  description: string;
  creationDate: string;
  markdown: string;
  version: Number;
  labels?: Record<string, string>;
  annotations?: Record<string, object>;
  params?: Array<{
    name: string;
    type: string;
    description?: string;
    defaultValue?: object;
  }>;
  tasks: Array<any>; //TODO: what shuold this be
  changelog: {
    author: string;
    reason: string;
    date: string;
  };
  config: Array<DataDrivenInput>;
}

export enum RunStatus {
  NotStarted = "notstarted",
  Ready = "ready",
  Running = "running",
  Waiting = "waiting",
  Succeeded = "succeeded",
  Failed = "failed",
  Invalid = "invalid",
  Skipped = "skipped",
  Cancelled = "cancelled",
  TimedOut = "timedout",
}

export interface FlowNavigationItemChild {
  activeClassName?: string;
  element?: React.ReactNode;
  onClick?: (e: React.SyntheticEvent) => any;
  href?: string;
  disabled?: boolean;
  large: boolean;
  link: string;
  name: string;
  renderIcon: SVGElement;
  to?: string;
}

export interface FlowNavigationItem {
  disabled: boolean;
  icon: string;
  name: string;
  link: string;
  type: "link" | "menu" | "divider";
  childLinks: Array<FlowNavigationItemChild>;
}

export type PlatformFeatureKey =
  | "consent.enabled"
  | "docs.enabled"
  | "metering.enabled"
  | "notifications.enabled"
  | "support.enabled"
  | "welcome.enabled";

export interface ContextConfig {
  features: {
    [k in PlatformFeatureKey]: boolean;
  };
  navigation: Array<{ name: string; url: string }>;
  platform: {
    appName?: string;
    baseEnvUrl: string;
    baseServicesUrl: string;
    communityUrl?: string;
    displayLogo: boolean;
    name: string;
    platformName: string;
    privateTeams: boolean;
    sendMail: boolean;
    signOutUrl: string;
    version: string;
  };
  platformMessage: {
    kind: string;
    message: string;
    title: string;
  };
}

export type FlowFeatureKey =
  | "activity"
  | "enable.verified.tasks.edit"
  | "global.parameters"
  | "insights"
  | "team.management"
  | "team.parameters"
  | "team.tasks"
  | "user.management"
  | "workflow.quotas"
  | "workflow.tokens"
  | "workflow.triggers";

export type FlowQuotaKey = "maxActivityStorageSize" | "maxWorkflowStorageSize";

export interface FlowFeatures {
  features: {
    [k in FlowFeatureKey]: boolean;
  };
  quotas: {
    [k in FlowQuotaKey]: string;
  };
}

//Schedule types
export type ScheduleStatus = "active" | "inactive" | "deleted" | "trigger_disabled" | "error";
export type ScheduleType = "runOnce" | "cron" | "advancedCron";

export interface Schedule {
  id: string;
  name: string;
  description?: string;
  labels?: Record<string, string>;
  nextScheduleDate: string;
  parameters?: { [k: string]: any };
  status: ScheduleStatus;
  type: ScheduleType;
  timezone: string;
  workflowRef: string;
  workflow?: Workflow;
}

export interface ScheduleDate extends Schedule {
  dateSchedule: string;
  type: "runOnce";
}

export interface ScheduleCron extends Schedule {
  cronSchedule: string;
  type: "cron" | "advancedCron";
}

export type ScheduleUnion = ScheduleDate | ScheduleCron;

export interface CalendarEntry {
  scheduleId: string;
  dates: Array<string>;
}

export interface CalendarEvent {
  start: Date;
  end: Date;
  title: string;
  resource: ScheduleUnion;
  onClick?: () => void;
}

export type CalendarDateRange = { start: string | Date; end: string | Date } | Date[];

export interface ScheduleManagerFormInputs {
  advancedCron: boolean;
  cronSchedule: string;
  dateTime: string;
  days: Array<DayOfWeekKey>;
  description: string;
  id: string;
  labels: Array<string>;
  name: string;
  type: ScheduleType;
  timezone: { label: string; value: string };
  time: string;
  workflowRef: string;
  [key: string]: any;
}

export type DayOfWeekKey = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";
export type DayOfWeekCronAbbreviation = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";

export type MultiSelectItem = {
  label: string;
  value: string;
};

export interface MultiSelectItems<Type = MultiSelectItem> {
  selectedItems: Array<Type>;
}

export type WorkflowEditorState = WorkflowEditor & { hasUnsavedUpdates?: boolean };

export type WorkflowEngineModeType = ObjectValuesToType<typeof WorkflowEngineMode>;
export type WorkflowPropertyActionType = ObjectValuesToType<typeof WorkflowPropertyAction>;
export type UserRoleType = ObjectValuesToType<typeof UserRole>;
export type NodeTypeType = ObjectValuesToType<typeof NodeType>;

export interface ConfigureWorkflowFormValues {
  description: string;
  storage: {
    workflowrun: {
      enabled: boolean;
      size: number;
      mountPath: string;
    };
    workflow: {
      enabled: boolean;
      size: number;
      mountPath: string;
    };
  };
  icon: string;
  name: string;
  timeout: number;
  retries: number;
  labels: Array<{ key: string; value: string }>;
  triggers: {
    manual: {
      enable: boolean;
    };
    event: {
      enable: boolean;
      type: string;
      subject: string;
    };
    scheduler: {
      enable: boolean;
    };
    webhook: {
      enable: boolean;
    };
  };
}
