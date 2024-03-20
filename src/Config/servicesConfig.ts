/*
* This file contains all the service URLs and configurations.
* 
* The model is to have a serviceUrl object that contains all the service URLs and a resolver object that holds all the queries and mutations.
*
* This depends on the /server to mount the environment variables that are the root prefixes.
*/
//@ts-nocheck
import axios from "axios";
import { Envs, HttpMethod } from "Constants";

// Set defaults, change them if Cypress is NOT defined
export let CORE_SERVICE_ENV_URL = "/api";

if (import.meta.env.MODE === Envs.Prod && window._SERVER_DATA) {
  CORE_SERVICE_ENV_URL = window._SERVER_DATA.CORE_SERVICE_ENV_URL;
}

export const PRODUCT_SERVICE_ENV_URL =
  import.meta.env.MODE === Envs.Prod && window._SERVER_DATA ? window._SERVER_DATA.PRODUCT_SERVICE_ENV_URL : "/api";


export const BASE_URL = `${PRODUCT_SERVICE_ENV_URL}`;
export const BASE_CORE_URL = CORE_SERVICE_ENV_URL;
export const BASE_CORE_USERS_URL = `${CORE_SERVICE_ENV_URL}/users`;

type IdArg = {
  id: string
}

type NameArg = {
  name: string
}

type WorkflowIdArg = {
  workflowId: string;
}

type TeamArg = {
  team: string
}

type VersionArg = {
  version: string | number
}

type ReplaceArg = {
  replace: boolean
}

type QueryArg = {
  query: string
}

export const serviceUrl = {
  deleteCancelWorkflow: ({ runId }) => `${BASE_URL}/workflowrun/${runId}/cancel`,
  deleteToken: ({ tokenId }) => `${BASE_URL}/token/${tokenId}`,
  deleteSchedule: ({ scheduleId }) => `${BASE_URL}/schedule/${scheduleId}`,
  deleteTeamMembers: ({ team }: TeamArg) => `${BASE_URL}/team/${team}/members`,
  leaveTeam: ({ team }: TeamArg) => `${BASE_URL}/team/${team}/leave`,
  getWorkflowRunCount: ({ query }: QueryArg) => `${BASE_URL}/workflowrun/count${query ? "?" + query : ""}`,
  getWorkflowRuns: ({ query }: QueryArg) => `${BASE_URL}/workflowrun/query${query ? "?" + query : ""}`,
  getFeatureFlags: () => `${BASE_URL}/features`,
  getNavigation: ({ query }: QueryArg) => `${BASE_URL}/navigation${query}`,
  getGlobalParameters: () => `${BASE_URL}/global-params`,
  getGlobalParameter: ({ key }: IdArg) => `${BASE_URL}/global-params/${key}`,
  getGlobalTokens: () => `${BASE_URL}/tokens/global-tokens`,
  getInsights: ({ query }: QueryArg) => `${BASE_URL}/insights${query ? "?" + query : ""}`,
  getManageTeamsCreate: () => `${BASE_URL}/manage/teams`,
  getManageTeamLabels: ({ team }: TeamArg) => `${BASE_URL}/team/${team}/labels`,
  getContext: () => `${BASE_URL}/context`,
  getSchedules: ({ query }: QueryArg) => `${BASE_URL}/schedule/query${query ? "?" + query : ""}`,
  getSchedule: ({ scheduleId }) => `${BASE_URL}/schedule/${scheduleId}`,
  getSchedulesCalendars: ({ query }: QueryArg) => `${BASE_URL}/schedule/calendars${query ? "?" + query : ""}`,
  // getScheduleCalendar: ({ scheduleId, query }) =>
  //   `${BASE_URL}/schedule/${scheduleId}/calendar${query ? "?" + query : ""}`,
  getScheduleCronValidation: ({ expression }) => `${BASE_URL}/schedule/validate/cron?cron=${expression}`,
  getTeams: ({ query }: QueryArg) => `${BASE_URL}/team/query${query ? "?" + query : ""}`,
  deleteTeamQuotas: ({ team }: TeamArg) => `${BASE_URL}/team/${team}/quotas`,
  getTeamQuotaDefaults: () => `${BASE_URL}/team/quotas/default`,
  getTokens: ({ query }) => `${BASE_URL}/token/query${query ? "?" + query : ""}`,
  getUsers: ({ query }: QueryArg) => `${BASE_URL}/user/query${query ? "?" + query : ""}`,
  getUser: ({ userId }) => `${BASE_URL}/user/${userId}`,
  deleteUser: ({ userId }) => `${BASE_URL}/user/${userId}`,
  getUserProfile: () => `${BASE_URL}/user/profile`,
  getUserProfileImage: ({ userEmail }) => `${BASE_CORE_USERS_URL}/image/${userEmail}`,
  getIntegrations: ({ team }: TeamArg) => `${BASE_URL}/integration${team ? "?team=" + team : ""}`,
  getTaskrunLog: ({ id }: IdArg) =>
  `${BASE_URL}/taskrun/${id}/log`,
  getWorkflowRun: ({ id }: IdArg) => `${BASE_URL}/workflowrun/${id}`,
  getWorkflowSchedules: ({ workflowId }: WorkflowIdArg) => `${BASE_URL}/workflow/${workflowId}/schedules`,
  getWorkflowSchedulesCalendar: ({ workflowId, query }: WorkflowIdArg & QueryArg) =>
    `${BASE_URL}/workflow/${workflowId}/schedules/calendar${query ? "?" + query : ""}`,
  putSchedule: () => `${BASE_URL}/schedule`,
  postSchedule: ({ team }: TeamArg) => `${BASE_URL}/schedule?team=${team}`,
  postToken: () => `${BASE_URL}/token`,
  postTeamValidateName: () => `${BASE_URL}/team/validate-name`,
  postTeam: () => `${BASE_URL}/team`,
  // postImportWorkflow: ({ query }) => `${BASE_URL}/workflow/import?${query}`,
  putActivationApp: () => `${BASE_URL}/activate`,
  postTeamQuotasReset: ({ team }: TeamArg) => `${BASE_URL}/teams/${team}/quotas/reset`,
  resourceTeam: ({ team }: TeamArg) => `${BASE_URL}/team/${team}`,
  resourceApproverGroups: ({ team, groupId }) =>
    `${BASE_URL}/team/${team}/approvers${groupId ? "/" + groupId : ""}`,
  resourceSettings: () => `${BASE_URL}/settings`,
  resourceTeamParameters: ({ team }) => `${BASE_URL}/team/${team}/parameters`,
  getWorkflowTemplates: () => `${BASE_URL}/workflowtemplate/query`,
  resourceTrigger: () => `${BASE_URL}/trigger`,
  getGitHubAppInstallation: ({ id }: IdArg) => `${BASE_URL}/integration/github/installation${id ? "?id=" + id : ""}`,
  getGitHubAppInstallationForTeam: ({ team }: TeamArg) => `${BASE_URL}/integration/github/installation${team ? "?team=" + team : ""}`,
  postGitHubAppLink: () => `${BASE_URL}/integration/github/link`,
  postGitHubAppUnlink: () => `${BASE_URL}/integration/github/unlink`,
  "task": {
    // deleteArchiveTaskTemplate: ({ id }) => `${BASE_URL}/task/${id}`,
    queryTasks: ({ query }: QueryArg) => `${BASE_URL}/task/query${query ? "?" + query : ""}`,
    getTask: ({ name, version }: NameArg & Partial<VersionArg>) =>
      `${BASE_URL}/task/${name}${version ? `?version=${version}` : ""}`,
    getTaskChangelog: ({ name }: NameArg) =>
      `${BASE_URL}/task/${name}/changelog`,
    putTask: ({ replace }: ReplaceArg) => `${BASE_URL}/task?replace=${replace ? replace : false}`,
    postValidateYaml: () => `${BASE_URL}/task/validate`,
  },
  "action": {
    getActionsSummary: ({ query }: QueryArg) => `${BASE_URL}/action/summary${query ? "?" + query : ""}`,
    getActions: ({ query }: QueryArg) => `${BASE_URL}/action/query${query ? "?" + query : ""}`,
    putAction: () => `${BASE_URL}/action`,
  },
  "team": {
    "task": {
      // deleteArchiveTaskTemplate: ({ id }) => `${BASE_URL}/task/${id}`,
      queryTasks: ({ team, query }: TeamArg & QueryArg) => `${BASE_URL}/team/${team}/task/query${query ? "?" + query : ""}`,
      getTask: ({ team, name, version }: TeamArg & NameArg & Partial<VersionArg>) =>
        `${BASE_URL}/team/${team}/task/${name}${version ? `?version=${version}` : ""}`,
      getTaskChangelog: ({ team, name }: TeamArg & NameArg) =>
        `${BASE_URL}/team/${team}/task/${name}/changelog`,
      putTask: ({ team, replace}: TeamArg & ReplaceArg) => `${BASE_URL}/team/${team}/task?replace=${replace ? replace : false}`,
      postValidateYaml: () => `${BASE_URL}/team/${team}/task/validate`,
    },
    "workflow": {
      getWorkflow: ({ team, id, version }: TeamArg & IdArg & Partial<VersionArg>) => `${BASE_URL}/team/${team}/workflow/${id}${version ? `?version=${version}` : ""}`,
      getWorkflows: ({ team, query }: TeamArg & Partial<QueryArg>) => `${BASE_URL}/team/${team}/workflow/query${query ? "?" + query : ""}`,
      getWorkflowCompose: ({ team, id, version }: TeamArg & IdArg & Partial<VersionArg>) => `${BASE_URL}/team/${team}/workflow/${id}/compose${version ? `?version=${version}` : ""}`,
      getWorkflowChangelog: ({ team, id }: TeamArg & IdArg) =>
        `${BASE_URL}/team/${team}/workflow/${id}/changelog`,
      postCreateWorkflow: ({ team }: TeamArg) => `${BASE_URL}/team/${team}/workflow`,
      postDuplicateWorkflow: ({ team, workflowId }: TeamArg & WorkflowIdArg) => `${BASE_URL}/team/${team}/workflow/${workflowId}/duplicate`,
      postSubmitWorkflow: ({ team, workflowId }: TeamArg & WorkflowIdArg) => `${BASE_URL}/team/${team}/workflow/${workflowId}/submit`,
      getAvailableParameters: ({ team, workflowId }: TeamArg & WorkflowIdArg) => `${BASE_URL}/team/${team}/workflow/${workflowId}/available-parameters`,
      putApplyWorkflow: ({ team, workflowId }: TeamArg & WorkflowIdArg) => `${BASE_URL}/team/${team}/workflow/${workflowId}/compose`,
    }
  }
};

export const resolver = {
  query: (url) => () => axios.get(url).then((response) => response.data),
  queryYaml: (url) => () => axios.get(url, {
    headers: {
      "accept": "application/x-yaml",
    },
  }).then((response) => response.data),
  postMutation: (request) => axios.post(request),
  patchMutation: (request) => axios.patch(request),
  putMutation: (request) => axios.put(request),
  deleteApproverGroup: ({ team, groupId }) => axios.delete(serviceUrl.resourceApproverGroups({ team, groupId })),
  // deleteArchiveTaskTemplate: ({ id }) => axios.delete(serviceUrl.deleteArchiveTaskTemplate({ id })),
  deleteCancelWorkflow: ({ runId }) => axios.delete(serviceUrl.deleteCancelWorkflow({ runId })),
  deleteGlobalParameter: ({ key }) => axios.delete(serviceUrl.getGlobalParameter({ key })),
  deleteTeamMembers: ({ team, body }) => axios.delete(serviceUrl.deleteTeamMembers({ team }), body),
  deleteTeamParameters: ({ team, body }) =>
    axios.delete(serviceUrl.resourceTeamParameters({ team }), body),
  deleteWorkflow: ({ team, id }) => axios.delete(serviceUrl.team.workflow.getWorkflow({ team, id })),
  leaveTeam: ({ team }) => axios.delete(serviceUrl.leaveTeam({ team })),
  deleteSchedule: ({ scheduleId }) => axios.delete(serviceUrl.deleteSchedule({ scheduleId })),
  deleteTeam: ({ team }: TeamArg) => axios.delete(serviceUrl.resourceTeam({ team })),
  deleteToken: ({ tokenId }) => axios.delete(serviceUrl.deleteToken({ tokenId })),
  deleteUser: ({ userId }) => axios.delete(serviceUrl.deleteUser({ userId })),
  patchGlobalParameter: ({ key, body }) =>
    axios({ url: serviceUrl.getGlobalParameter({ key }), data: body, method: HttpMethod.Patch }),
  patchTeam: ({ team, body }) => axios.patch(serviceUrl.resourceTeam({ team }), body),
  patchManageTeamLabels: ({ team, body }) => axios.patch(serviceUrl.getManageTeamLabels({ team }), body),
  patchProfile: ({ body }) =>
    axios({ url: serviceUrl.getUserProfile(), data: body, method: HttpMethod.Patch }),
  patchManageUser: ({ body, userId }) =>
    axios({ url: serviceUrl.getUser({ userId }), data: body, method: HttpMethod.Patch }),
  putSchedule: ({ body }) => axios.put(serviceUrl.putSchedule(), body),
  postTeam: ({ body }) => axios.post(serviceUrl.postTeam(), body),
  postTeamValidateName: ({ body }) => axios.post(serviceUrl.postTeamValidateName(), body),
  postValidateYaml: ({ body }) =>
    axios({
      method: HttpMethod.Post,
      url: serviceUrl.task.postValidateYaml(),
      data: body,
      headers: {
        "content-type": "application/x-yaml",
      },
    }),
  patchTeamParameter: ({ team, key, body }) =>
    axios({
      url: serviceUrl.getTeamParameter({ team, key }),
      data: body,
      method: HttpMethod.Patch,
    }),
  postApproverGroupRequest: ({ body, team }) =>
    axios({
      url: serviceUrl.resourceApproverGroups({ team }),
      data: body,
      method: HttpMethod.Post,
    }),
  postCreateTemplate: ({ body }) => axios.post(serviceUrl.getWorkflowTemplates(), body),
  postCreateWorkflow: ({ team, body }) => axios.post(serviceUrl.team.workflow.postCreateWorkflow({ team }), body),
  postDuplicateWorkflow: ({ team, workflowId }) => axios.post(serviceUrl.postDuplicateWorkflow({ team, workflowId })),
  postTemplateWorkflow: ({ workflowId, body }) => axios.post(serviceUrl.postDuplicateWorkflow({ workflowId }), body),
  postToken: ({ body }) => axios({ url: serviceUrl.postToken(), data: body, method: HttpMethod.Post }),
  putApplyTaskTemplate: ({ replace, body }) =>
    axios({ url: serviceUrl.task.putTask({ replace }), data: body, method: HttpMethod.Put }),
  putApplyTeamTaskTemplate: ({ replace, team, body }) =>
      axios({ url: serviceUrl.team.task.putTask({ replace, team }), data: body, method: HttpMethod.Put }),
  putApplyTaskTemplateYaml: ({ replace, body }) =>
    axios({
      url: serviceUrl.task.putTask({ replace }),
      data: body,
      method: HttpMethod.Put,
      headers: { "content-type": "application/x-yaml" },
    }),
    putApplyTeamTaskTemplateYaml: ({ replace, team, body }) =>
      axios({
        url: serviceUrl.team.task.putTask({ replace, team }),
        data: body,
        method: HttpMethod.Put,
        headers: { "content-type": "application/x-yaml" },
      }),
  postCreateTeam: ({ body }) =>
    axios({ url: serviceUrl.getManageTeamsCreate(), body, method: HttpMethod.Post }),
  putApplyWorkflow: ({ team, workflowId, body }) =>
    axios.put<Workflow, Workflow>(serviceUrl.team.workflow.putApplyWorkflow({ team, workflowId }), body),
  postSubmitWorkflow: ({ team, workflowId, body }) =>
    axios.post(
      serviceUrl.postSubmitWorkflow({team, workflowId}),
      body,
    ),
  postGlobalParameter: ({ body }) =>
    axios({ url: serviceUrl.getGlobalParameters(), data: body, method: HttpMethod.Post }),
  postSchedule: ({ team, body }) => axios.post(serviceUrl.postSchedule({ team }), body),
  postTeamParameter: ({ team, body }) =>
    axios({ url: serviceUrl.resourceTeamParameters({ team }), data: body, method: HttpMethod.Post }),
  putActivationApp: ({ body }) =>
    axios({
      method: HttpMethod.Put,
      url: serviceUrl.putActivationApp(),
      data: body,
      validateStatus: (status) => status >= 200 && status < 300,
    }),
  putApproverGroupRequest: ({ body, team }) =>
    axios({
      url: serviceUrl.resourceApproverGroups({ team }),
      data: body,
      method: HttpMethod.Put,
    }),
  putPlatformSettings: ({ body }) => axios.put(serviceUrl.resourceSettings(), body),
  putRestoreTaskTemplate: ({ id }: IdArg) => axios.put(serviceUrl.putRestoreTaskTemplate({ id })),
  patchUpdateTeam: ({ team, body }) => axios.patch(serviceUrl.resourceTeam({ team }), body),
  deleteTeamQuotas: ({ team }) =>
    axios({ url: serviceUrl.deleteTeamQuotas({ team }), method: HttpMethod.Delete }),
  putAction: ({ body }) =>
    axios({ url: serviceUrl.action.putAction(), data: body, method: HttpMethod.Put }),
  postGitHubAppLink: ({ body }) => axios.post(serviceUrl.postGitHubAppLink(), body),
  postGitHubAppUnlink: ({ body }) => axios.post(serviceUrl.postGitHubAppUnlink(), body),
};
