export enum PlatformRole {
  Admin = "admin",
  User = "user",
  Operator = "operator",
}

export enum UserStatus {
  Active = "active",
  Inactive = "inactive",
}

export type DataDrivenInput = {
  id: string;
  defaultValue?: string;
  description?: string;
  key: string;
  label: string;
  options?: [{ key: string; value: string }];
  readOnly: boolean;
  required: boolean;
  value: string;
  values: [string] | [{ key: string; value: string }];
  type: string;
};

export interface ModalTriggerProps {
  openModal(): void;
}

export interface ComposedModalChildProps {
  closeModal(): void;
}

export declare function FormikSetFieldValue(id: string, value: string | [string] | boolean | undefined): void;

export interface WorkflowSummary {
  id: string;
  description: string;
  enableACCIntegration: boolean;
  enablePersistentStorage: boolean;
  icon: string;
  name: string;
  revisionCount: number;
  shortDescription: string;
  properties: [DataDrivenInput];
  triggers: {
    event: {
      enable: boolean;
      topic: string;
    };
    scheduler: {
      enable: boolean;
      schedule: string;
      timezone: boolean;
      advancedCron: boolean;
    };
    webhook: {
      enable: boolean;
      token: string;
    };
  };
}

export interface WorkflowRevision {
  changelog: ChangeLogItem;
  config: any;
  dag: any;
  id: string;
  templateUpgradesAvailable: boolean;
  version: number;
  workFlowId: string;
}

export interface WorkflowRevisionState extends WorkflowRevision {
  hasUnsavedUpdates: boolean;
}

export type ChangeLogItem = {
  date: string;
  reason: string;
  revisionId: string;
  userId: string;
  userName: string;
  version: number;
  workflowId: string;
};

export type ChangeLog = Array<ChangeLogItem>;

export interface TaskModel {
  id: string;
  icon: string;
  model: string;
  name: string;
  status: string;
}

export interface FlowTeam {
  higherLevelGroupId: string;
  id: string;
  name: string;
  workflows: WorkflowSummary[];
  users: FlowUser[];
  isActive: string;
}

export interface PaginatedSort {
  direction: string;
  property: string;
  ignoreCase: boolean;
  nullHandling: string;
  descending: boolean;
  ascending: boolean;
}

export interface PaginatedResponse<T> {
  totalPages: number;
  totalElements: number;
  last: boolean;
  sort: PaginatedSort[];
  first: boolean;
  numberOfElements: number;
  size: number;
  number: number;
  records: T[];
}

export interface FlowUser {
  id: string;
  email: string;
  name: string;
  ifFirstVisit: boolean;
  type: PlatformRole;
  firstLoginDate: string;
  lastLoginDate: string;
  flowTeams: FlowTeam[];
  status: UserStatus;
}
