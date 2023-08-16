const tasktemplate = {
  "content": [
      {
          "name": "execute-advanced-http-call",
          "displayName": "Execute Advanced HTTP Call",
          "type": "template",
          "version": 4,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Execute an Advanced HTTP Call",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2022-05-13T08:49:42.733+00:00"
          },
          "category": "Utilities",
          "spec": {
              "arguments": [
                  "http",
                  "execute"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "method",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "header",
                      "type": "string",
                      "description": "Start a new line for each header",
                      "defaultValue": ""
                  },
                  {
                      "name": "contentType",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "body",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "allowUntrustedCerts",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "outputFilePath",
                      "type": "string",
                      "description": "If provided, the result parameter is not filled",
                      "defaultValue": ""
                  },
                  {
                      "name": "successcodes",
                      "type": "string",
                      "description": "If left empty, success will be considered: 2xx",
                      "defaultValue": "1xx,2xx"
                  },
                  {
                      "name": "errorcodes",
                      "type": "string",
                      "description": "No retry calls are done for these HTTP status codes",
                      "defaultValue": ""
                  },
                  {
                      "name": "retrycodes",
                      "type": "string",
                      "description": "HTTP response codes for which the task will retry the call",
                      "defaultValue": "502,503"
                  },
                  {
                      "name": "retrydelay",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "retrynumber",
                      "type": "string",
                      "description": "",
                      "defaultValue": "3"
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "HTTP execution response content",
                      "name": "response"
                  },
                  {
                      "description": "The received HTTP status code",
                      "name": "statusCode"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "URL",
                  "type": "url",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "method",
                  "description": "",
                  "label": "Method",
                  "type": "select",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": [
                      {
                          "key": "GET",
                          "value": "GET"
                      },
                      {
                          "key": "HEAD",
                          "value": "HEAD"
                      },
                      {
                          "key": "PUT",
                          "value": "PUT"
                      },
                      {
                          "key": "POST",
                          "value": "POST"
                      },
                      {
                          "key": "PATCH",
                          "value": "PATCH"
                      },
                      {
                          "key": "OPTIONS",
                          "value": "OPTIONS"
                      },
                      {
                          "key": "DELETE",
                          "value": "DELETE"
                      }
                  ],
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "header",
                  "description": "Start a new line for each header",
                  "label": "Headers",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Headers to add to the request, such as Authorization"
              },
              {
                  "key": "contentType",
                  "description": "",
                  "label": "Content Type",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "body",
                  "description": "",
                  "label": "Body",
                  "type": "texteditor",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "allowUntrustedCerts",
                  "description": "",
                  "label": "Allow Untrusted SSL Certs",
                  "type": "boolean",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "outputFilePath",
                  "description": "If provided, the result parameter is not filled",
                  "label": "Response File Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "File path to store the output response"
              },
              {
                  "key": "successcodes",
                  "description": "If left empty, success will be considered: 2xx",
                  "label": "HTTP response codes for successful execution",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "1xx,2xx",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "errorcodes",
                  "description": "No retry calls are done for these HTTP status codes",
                  "label": "HTTP response codes for failure",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "e.g. 5xx,404",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "HTTP response codes which marks the call as failed"
              },
              {
                  "key": "retrycodes",
                  "description": "HTTP response codes for which the task will retry the call",
                  "label": "HTTP response codes for execution retry",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "502,503",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "HTTP response codes for retry"
              },
              {
                  "key": "retrydelay",
                  "description": "",
                  "label": "Number of milliseconds to wait until the next retry",
                  "type": "number",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "e.g. 200",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Cool down between retries in millis (100, 300000)"
              },
              {
                  "key": "retrynumber",
                  "description": "",
                  "label": "Number of retries",
                  "type": "number",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "3",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Number of retries to be attempted, between (1, 9)"
              }
          ],
          "icon": "API/HTTP call"
      },
      {
          "name": "set-workflow-result-status",
          "displayName": "Set Workflow Result Status",
          "type": "setwfstatus",
          "version": 1,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Override Workflow Execution Status",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e8a6c6cd0827100011c2a35",
              "reason": "",
              "date": "2020-04-30T22:53:23.337+00:00"
          },
          "category": "Workflow",
          "spec": {
              "arguments": [
                  "setwfstatus"
              ],
              "command": [],
              "params": [
                  {
                      "name": "status",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "status",
                  "description": "",
                  "label": "Status",
                  "type": "select",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": [
                      {
                          "key": "completed",
                          "value": "Success"
                      },
                      {
                          "key": "failure",
                          "value": "Failed"
                      }
                  ],
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              }
          ],
          "icon": "Edit"
      },
      {
          "name": "run-custom-task",
          "displayName": "Run Custom Task",
          "type": "custom",
          "version": 1,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Run a trusted custom container as a task",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e736fb0a97b78000125ebe3",
              "reason": "Testing ",
              "date": "2020-09-25T21:11:01.767+00:00"
          },
          "category": "Workflow",
          "spec": {
              "arguments": [
                  "."
              ],
              "command": [],
              "params": [
                  {
                      "name": "image",
                      "type": "string",
                      "description": "Can be identified by a container image reference. i.e. registry / namespace / repository:tag",
                      "defaultValue": ""
                  },
                  {
                      "name": "command",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "arguments",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "shellScript",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "image",
                  "description": "Can be identified by a container image reference. i.e. registry / namespace / repository:tag",
                  "label": "Image",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "e.g. docker.io/docker/whalesay",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Enter a valid container image reference"
              },
              {
                  "key": "command",
                  "description": "",
                  "label": "Command",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "e.g. cowsay",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "New line delimited container command. You can access environment variables using $(variable) notation."
              },
              {
                  "key": "arguments",
                  "description": "",
                  "label": "Arguments",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "e.g. hello world",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "New line delimited container arguments. You can access environment variables using $(variable) notation."
              },
              {
                  "key": "shellScript",
                  "description": "",
                  "label": "Script",
                  "type": "texteditor::shell",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              }
          ],
          "icon": "Code"
      },
      {
          "name": "send-platform-notification",
          "displayName": "Send Platform Notification",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Send platform notification to user or team",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5fc9c3163727f831e8946186",
              "reason": "Added new URL input parameter",
              "date": "2021-06-25T04:36:52.164+00:00"
          },
          "category": "IBM Services Essentials",
          "spec": {
              "arguments": [
                  "ibmessentials",
                  "sendNotification"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": "https://ess-core-services-notifications/notifications/submit"
                  },
                  {
                      "name": "type",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "target",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "title",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "message",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": "",
              "results": [],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "https://ess-core-services-notifications/notifications/submit",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Endpoint to the internal platform service"
              },
              {
                  "key": "type",
                  "description": "",
                  "label": "Target",
                  "type": "select",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": [
                      {
                          "key": "user",
                          "value": "user"
                      },
                      {
                          "key": "group",
                          "value": "group"
                      }
                  ],
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "target",
                  "description": "",
                  "label": "User or Group",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "title",
                  "description": "",
                  "label": "Title",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "message",
                  "description": "",
                  "label": "Message",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              }
          ],
          "icon": "Message"
      },
      {
          "name": "send-platform-email",
          "displayName": "Send Platform Email",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Send Email to Member with Subject and Message",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5fc9c3163727f831e8946186",
              "reason": "Added new URL endpoint",
              "date": "2021-06-25T04:36:19.511+00:00"
          },
          "category": "IBM Services Essentials",
          "spec": {
              "arguments": [
                  "ibmessentials",
                  "sendMailToMember"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": "http://ess-core-services-messaging/messaging/mail/event"
                  },
                  {
                      "name": "to",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "subject",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "message",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": "",
              "results": [],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "http://ess-core-services-messaging/messaging/mail/event",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Endpoint to the internal platform service"
              },
              {
                  "key": "to",
                  "description": "",
                  "label": "To",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "subject",
                  "description": "",
                  "label": "Subject",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "message",
                  "description": "",
                  "label": "Message",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              }
          ],
          "icon": "Message"
      },
      {
          "name": "find-repositories-in-org",
          "displayName": "Find Repositories in Org",
          "type": "template",
          "version": 3,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Find Repositories in a GitHub organization",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-25T09:38:04.792+00:00"
          },
          "category": "GitHub",
          "spec": {
              "arguments": [
                  "github",
                  "findReposInOrg"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "org",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "visibility",
                      "type": "string",
                      "description": "Specifies the types of repositories you want returned",
                      "defaultValue": "all"
                  },
                  {
                      "name": "skipRepos",
                      "type": "string",
                      "description": "Newline delimited list",
                      "defaultValue": null
                  },
                  {
                      "name": "numToRetrieve",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "outputFilePath",
                      "type": "string",
                      "description": "If provided, the result parameter is not filled",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "Filtered repositories list",
                      "name": "repositories"
                  },
                  {
                      "description": "Filtered list based repositories",
                      "name": "repositoriesPrettyPrint"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "token",
                  "description": "",
                  "label": "Token",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "org",
                  "description": "",
                  "label": "Org",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "visibility",
                  "description": "Specifies the types of repositories you want returned",
                  "label": "Visibility",
                  "type": "select",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": [
                      {
                          "key": "all",
                          "value": "all"
                      },
                      {
                          "key": "public",
                          "value": "public"
                      },
                      {
                          "key": "private",
                          "value": "private"
                      },
                      {
                          "key": "forks",
                          "value": "forks"
                      },
                      {
                          "key": "sources",
                          "value": "sources"
                      },
                      {
                          "key": "member",
                          "value": "member"
                      },
                      {
                          "key": "internal",
                          "value": "internal"
                      }
                  ],
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "all",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "skipRepos",
                  "description": "Newline delimited list",
                  "label": "Repositories to Skip",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "numToRetrieve",
                  "description": "",
                  "label": "Number of Repositories to Retrieve",
                  "type": "number",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "Default: 30",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "outputFilePath",
                  "description": "If provided, the result parameter is not filled",
                  "label": "Response File Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "File path to store the output response"
              }
          ],
          "icon": "API/HTTP call"
      },
      {
          "name": "execute-shell",
          "displayName": "Execute Shell",
          "type": "script",
          "version": 2,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Execute a shell script",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e71f175756f7e000192eb6c",
              "reason": "",
              "date": "2021-03-31T23:43:57.797+00:00"
          },
          "category": "Utilities",
          "spec": {
              "arguments": [
                  "shell",
                  "execute"
              ],
              "command": [],
              "params": [
                  {
                      "name": "path",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "shell",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "script",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "path",
                  "description": "",
                  "label": "Directory Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "shell",
                  "description": "",
                  "label": "Shell Interpreter",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "script",
                  "description": "",
                  "label": "Shell Script",
                  "type": "texteditor::shell",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              }
          ],
          "icon": "Terminal"
      },
      {
          "name": "manual-approval",
          "displayName": "Manual Approval",
          "type": "approval",
          "version": 1,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Pauses workflow until approval is actioned.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-18T04:45:17.830+00:00"
          },
          "category": "Workflow",
          "spec": {
              "arguments": [
                  "approval"
              ],
              "command": [],
              "params": [],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "The status of the approval task, can be approved or rejected.",
                      "name": "approvalStatus"
                  },
                  {
                      "description": "Date and time of the action",
                      "name": "approvalDate"
                  },
                  {
                      "description": "Username of the approver",
                      "name": "approvalUserName"
                  },
                  {
                      "description": "Email address of the approver",
                      "name": "approvalUserEmail"
                  },
                  {
                      "description": "Additional comments added by the approver",
                      "name": "approvalComments"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [],
          "icon": "Edit"
      },
      {
          "name": "read-file-to-parameter",
          "displayName": "Read File to Parameter",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Read file and add contents to tasks result parameter",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-15T16:04:06.822+00:00"
          },
          "category": "File Utilities",
          "spec": {
              "arguments": [
                  "file",
                  "readFileToProperty"
              ],
              "command": [],
              "params": [
                  {
                      "name": "path",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "File content as a result parameter",
                      "name": "content"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "path",
                  "description": "",
                  "label": "File Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              }
          ],
          "icon": "Search"
      },
      {
          "name": "find-slack-member-by-email",
          "displayName": "Find Slack Member By Email",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Find a Slack user based on the provided email address using a Slack application through Bot tokens. For further reading on the underlying API see https://api.slack.com/methods/users.lookupByEmail",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-15T17:09:46.299+00:00"
          },
          "category": "Communication with Slack",
          "spec": {
              "arguments": [
                  "slack",
                  "lookUpUser"
              ],
              "command": [],
              "params": [
                  {
                      "name": "token",
                      "type": "string",
                      "description": "Token is associated with the slack app tied to a workspace",
                      "defaultValue": ""
                  },
                  {
                      "name": "emailAddress",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "The slack user id",
                      "name": "slackUserId"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "token",
                  "description": "Token is associated with the slack app tied to a workspace",
                  "label": "Authentication API Token",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. xxxx-xxxxxxxxx-xxxx",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The token is associated with the slack application"
              },
              {
                  "key": "emailAddress",
                  "description": "",
                  "label": "Email Address",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. spengler@ghostbusters.example.com",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "An email belonging to a user in the workspace"
              }
          ],
          "icon": "Search"
      },
      {
          "name": "sleep",
          "displayName": "Sleep",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Sleep for specified duration in milliseconds",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608ca23d70bfa94ac91f8eef",
              "reason": "",
              "date": "2021-05-15T01:53:29.735+00:00"
          },
          "category": "Utilities",
          "spec": {
              "arguments": [
                  "system",
                  "sleep"
              ],
              "command": [],
              "params": [
                  {
                      "name": "duration",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "duration",
                  "description": "",
                  "label": "Duration",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              }
          ],
          "icon": "Power on/off"
      },
      {
          "name": "check-file-contains-string",
          "displayName": "Check File Contains String",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Check file contains string.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e71f175756f7e000192eb6c",
              "reason": "",
              "date": "2021-03-31T23:46:16.007+00:00"
          },
          "category": "File Utilities",
          "spec": {
              "arguments": [
                  "file",
                  "checkFileContainsString"
              ],
              "command": [],
              "params": [
                  {
                      "name": "path",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "expression",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "flags",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "failIfNotFound",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "path",
                  "description": "",
                  "label": "Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "expression",
                  "description": "",
                  "label": "Regular Expression",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "flags",
                  "description": "",
                  "label": "Flags",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "failIfNotFound",
                  "description": "",
                  "label": "Fail If Not Found",
                  "type": "boolean",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              }
          ],
          "icon": "Search"
      },
      {
          "name": "artifactory-file-upload",
          "displayName": "Artifactory File Upload",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Upload file to Artifactory",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e71f175756f7e000192eb6c",
              "reason": "",
              "date": "2021-03-31T23:44:49.840+00:00"
          },
          "category": "Artifactory",
          "spec": {
              "arguments": [
                  "artifactory",
                  "uploadFile"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "file",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "username",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "password",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "apiKey",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "artifactory.url/folder/test.txt",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "File will be uploaded at the specified path. Include file name"
              },
              {
                  "key": "file",
                  "description": "",
                  "label": "File",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "/data/test.txt",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Specify the desired file in it's absolute path"
              },
              {
                  "key": "username",
                  "description": "",
                  "label": "Username",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "password",
                  "description": "",
                  "label": "Password",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "apiKey",
                  "description": "",
                  "label": "API Key",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              }
          ],
          "icon": "Upload"
      },
      {
          "name": "artifactory-file-download",
          "displayName": "Artifactory File Download",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Artifactory File Download",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e71f175756f7e000192eb6c",
              "reason": "",
              "date": "2021-03-31T23:44:42.104+00:00"
          },
          "category": "Artifactory",
          "spec": {
              "arguments": [
                  "artifactory",
                  "downloadFile"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "username",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "password",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "destinationPath",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "apiKey",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "username",
                  "description": "",
                  "label": "Username",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "password",
                  "description": "",
                  "label": "Password",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "destinationPath",
                  "description": "",
                  "label": "Destination Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "apiKey",
                  "description": "",
                  "label": "API Key",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              }
          ],
          "icon": "Download"
      },
      {
          "name": "replace-string-in-file",
          "displayName": "Replace String in File",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Replace String in File.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e71f175756f7e000192eb6c",
              "reason": "",
              "date": "2021-03-31T23:46:57.432+00:00"
          },
          "category": "File Utilities",
          "spec": {
              "arguments": [
                  "file",
                  "replaceStringInFile"
              ],
              "command": [],
              "params": [
                  {
                      "name": "path",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "expression",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "replaceString",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "flags",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "failIfNotFound",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "path",
                  "description": "",
                  "label": "Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "expression",
                  "description": "",
                  "label": "Regular Expression",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "replaceString",
                  "description": "",
                  "label": "Replacement String",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "flags",
                  "description": "",
                  "label": "Flags",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "failIfNotFound",
                  "description": "",
                  "label": "Fail If Not Found",
                  "type": "boolean",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              }
          ],
          "icon": "Edit"
      },
      {
          "name": "read-parameters-from-file",
          "displayName": "Read Parameters from File",
          "type": "template",
          "version": 1,
          "status": "inactive",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Read parameters from file",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e71f175756f7e000192eb6c",
              "reason": "",
              "date": "2021-03-31T23:47:13.803+00:00"
          },
          "category": "File Utilities",
          "spec": {
              "arguments": [
                  "file",
                  "readPropertiesFromFile"
              ],
              "command": [],
              "params": [
                  {
                      "name": "path",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "delimiter",
                      "type": "string",
                      "description": "Defaults to = if blank.",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "path",
                  "description": "",
                  "label": "File Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "delimiter",
                  "description": "Defaults to = if blank.",
                  "label": "Delimiter",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              }
          ],
          "icon": "Search"
      },
      {
          "name": "create-file",
          "displayName": "Create File",
          "type": "template",
          "version": 3,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Create file in worker.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e71f175756f7e000192eb6c",
              "reason": "",
              "date": "2021-03-31T23:46:32.143+00:00"
          },
          "category": "File Utilities",
          "spec": {
              "arguments": [
                  "file",
                  "createFile"
              ],
              "command": [],
              "params": [
                  {
                      "name": "path",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "content",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "createDir",
                      "type": "string",
                      "description": "",
                      "defaultValue": "false"
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "path",
                  "description": "",
                  "label": "File Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "content",
                  "description": "",
                  "label": "File Content",
                  "type": "texteditor",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "createDir",
                  "description": "",
                  "label": "Creation Directories",
                  "type": "boolean",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "false",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Recursively create path as needed"
              }
          ],
          "icon": "Add"
      },
      {
          "name": "check-file-or-folder-exists",
          "displayName": "Check File or Folder Exists",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Check file or folder exists and fail if not found.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e71f175756f7e000192eb6c",
              "reason": "",
              "date": "2021-03-31T23:46:24.773+00:00"
          },
          "category": "File Utilities",
          "spec": {
              "arguments": [
                  "file",
                  "checkFileOrFolderExists"
              ],
              "command": [],
              "params": [
                  {
                      "name": "path",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "expression",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "path",
                  "description": "",
                  "label": "Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "expression",
                  "description": "",
                  "label": "Regular Expression",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              }
          ],
          "icon": "Search"
      },
      {
          "name": "make-repositories-private",
          "displayName": "Make Repositories Private",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Make Repositories Private.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e8a6c6cd0827100011c2a35",
              "reason": "",
              "date": "2020-04-30T22:50:28.351+00:00"
          },
          "category": "GitHub",
          "spec": {
              "arguments": [
                  "github",
                  "makeReposInOrgPrivate"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "org",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "repos",
                      "type": "string",
                      "description": "New line delimited list.",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "token",
                  "description": "",
                  "label": "Token",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "org",
                  "description": "",
                  "label": "Org",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "repos",
                  "description": "New line delimited list.",
                  "label": "Repositories",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              }
          ],
          "icon": "Automated task"
      },
      {
          "name": "upload-slack-file-with-message",
          "displayName": "Upload Slack File with Message",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Upload a message to Slack using a Slack application through Bot tokens. For further reading on the underlying API see https://api.slack.com/methods/files.upload",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e79e5ae2e0ee000015cacde",
              "reason": "",
              "date": "2021-03-22T10:00:29.629+00:00"
          },
          "category": "Communication with Slack",
          "spec": {
              "arguments": [
                  "slack",
                  "uploadFileMessage"
              ],
              "command": [],
              "params": [
                  {
                      "name": "token",
                      "type": "string",
                      "description": "Token is associated with the slack app tied to a workspace",
                      "defaultValue": ""
                  },
                  {
                      "name": "channel",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "message",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "fileName",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "fileContent",
                      "type": "string",
                      "description": "If omitting this parameter, you must provide a File Path",
                      "defaultValue": ""
                  },
                  {
                      "name": "encoded",
                      "type": "string",
                      "description": "Enable if File Content provided is base64 encoded ",
                      "defaultValue": "false"
                  },
                  {
                      "name": "filePath",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "fileTitle",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "token",
                  "description": "Token is associated with the slack app tied to a workspace",
                  "label": "Token",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "xxxx-xxxxxxxxx-xxxx",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "channel",
                  "description": "",
                  "label": "Channel",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "#channel-name",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "message",
                  "description": "",
                  "label": "Message",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "Your message here.",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "fileName",
                  "description": "",
                  "label": "File Name",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "foo.txt",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Filename of file."
              },
              {
                  "key": "fileContent",
                  "description": "If omitting this parameter, you must provide a File Path",
                  "label": "File Content",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "File contents via a POST variable"
              },
              {
                  "key": "encoded",
                  "description": "Enable if File Content provided is base64 encoded ",
                  "label": "Decode File Content",
                  "type": "boolean",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "false",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "filePath",
                  "description": "",
                  "label": "File Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "/workflow/your_file.txt",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Full path to desired file"
              },
              {
                  "key": "fileTitle",
                  "description": "",
                  "label": "File Title",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "My File",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Title of file."
              }
          ],
          "icon": "Upload"
      },
      {
          "name": "send-slack-message-with-file-contents",
          "displayName": "Send Slack Message with File Contents",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Send slack message with file contents via webhook\n",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e71f175756f7e000192eb6c",
              "reason": "",
              "date": "2021-03-19T23:34:29.466+00:00"
          },
          "category": "Communication with Slack",
          "spec": {
              "arguments": [
                  "slack",
                  "sendFileMessage"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "Found within your webhook integration settings",
                      "defaultValue": ""
                  },
                  {
                      "name": "channel",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "icon",
                      "type": "string",
                      "description": "If left blank, defaults to :boomerang:",
                      "defaultValue": ""
                  },
                  {
                      "name": "username",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "message",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "content",
                      "type": "string",
                      "description": "File can be base64 encoded",
                      "defaultValue": ""
                  },
                  {
                      "name": "encoded",
                      "type": "string",
                      "description": "Enable if File Content provided is base64 encoded ",
                      "defaultValue": "false"
                  },
                  {
                      "name": "context",
                      "type": "string",
                      "description": "A helpful footer",
                      "defaultValue": ""
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "url",
                  "description": "Found within your webhook integration settings",
                  "label": "Webhook URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "https://hooks.slack.com/services/...",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "channel",
                  "description": "",
                  "label": "Channel",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "#channel-name",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "icon",
                  "description": "If left blank, defaults to :boomerang:",
                  "label": "Icon",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": ":boomerang:",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "username",
                  "description": "",
                  "label": "Username",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "Test-Bot",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Name displayed as the sender of the slack message"
              },
              {
                  "key": "message",
                  "description": "",
                  "label": "Message",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "Your message here.",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "content",
                  "description": "File can be base64 encoded",
                  "label": "File Content",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "encoded",
                  "description": "Enable if File Content provided is base64 encoded ",
                  "label": "Decode File Content",
                  "type": "boolean",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "false",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "context",
                  "description": "A helpful footer",
                  "label": "Context",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "Context for use...",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              }
          ],
          "icon": "Message"
      },
      {
          "name": "send-simple-slack-message",
          "displayName": "Send Simple Slack Message",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Easily configurable slack webhook message. To provide additional parameters, please see our Custom Slack Message task.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e71f175756f7e000192eb6c",
              "reason": "",
              "date": "2021-03-19T23:34:20.884+00:00"
          },
          "category": "Communication with Slack",
          "spec": {
              "arguments": [
                  "slack",
                  "sendSimpleMessage"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "Found within your webhook integration settings",
                      "defaultValue": ""
                  },
                  {
                      "name": "channel",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "icon",
                      "type": "string",
                      "description": "If left blank, defaults to :boomerang:",
                      "defaultValue": ""
                  },
                  {
                      "name": "username",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "message",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "url",
                  "description": "Found within your webhook integration settings",
                  "label": "Webhook URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "https://hooks.slack.com/services/...",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "channel",
                  "description": "",
                  "label": "Channel",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "#channel-name",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "icon",
                  "description": "If left blank, defaults to :boomerang:",
                  "label": "Icon",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": ":boomerang:",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "username",
                  "description": "",
                  "label": "Username",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "Test-Bot",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Name displayed as the sender of the slack message"
              },
              {
                  "key": "message",
                  "description": "",
                  "label": "Message",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "Your message here.",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              }
          ],
          "icon": "Message"
      },
      {
          "name": "send-custom-slack-message",
          "displayName": "Send Custom Slack Message",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Send custom JSON payload to a specified Slack webhook URL. For more information on the underlying Slack API and potential configurations: https://api.slack.com/messaging/webhooks",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e71f175756f7e000192eb6c",
              "reason": "",
              "date": "2021-03-19T23:34:09.258+00:00"
          },
          "category": "Communication with Slack",
          "spec": {
              "arguments": [
                  "slack",
                  "sendCustomMessage"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "Found within your webhook integration settings",
                      "defaultValue": ""
                  },
                  {
                      "name": "message",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "url",
                  "description": "Found within your webhook integration settings",
                  "label": "URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "https://hooks.slack.com/services/...",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "message",
                  "description": "",
                  "label": "Message Payload",
                  "type": "texteditor",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "{ \"text\": \"My Slack message.\" }",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              }
          ],
          "icon": "Message"
      },
      {
          "name": "run-workflow",
          "displayName": "Run Workflow",
          "type": "runworkflow",
          "version": 1,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "This task runs the selected workflow separately. It only triggers the workflow, it does not wait for completion. Additionally you can pass in parameters to the workflow if they have been defined.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e8a6c6cd0827100011c2a35",
              "reason": "",
              "date": "2020-04-30T22:53:23.337+00:00"
          },
          "category": "Workflow",
          "spec": {
              "arguments": [
                  "runworkflow"
              ],
              "command": [],
              "params": [],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [],
          "icon": "Automated task"
      },
      {
          "name": "set-result-parameter",
          "displayName": "Set Result Parameter",
          "type": "setwfproperty",
          "version": 1,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Set a Result Parameter on the Workflow. These are then available in the workflows activity.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e8a6c6cd0827100011c2a35",
              "reason": "",
              "date": "2020-04-30T22:53:23.337+00:00"
          },
          "category": "Workflow",
          "spec": {
              "arguments": [
                  "setwfproperty"
              ],
              "command": [],
              "params": [
                  {
                      "name": "output",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "value",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "output",
                  "description": "",
                  "label": "Name",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Only alphanumeric, underscore, dash, and period characters allowed"
              },
              {
                  "key": "value",
                  "description": "",
                  "label": "Value",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              }
          ],
          "icon": "Edit"
      },
      {
          "name": "release-lock",
          "displayName": "Release Lock",
          "type": "releaselock",
          "version": 1,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "This task releases a lock with the specified name.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e8a6c6cd0827100011c2a35",
              "reason": "",
              "date": "2020-04-30T22:53:23.337+00:00"
          },
          "category": "Workflow",
          "spec": {
              "arguments": [
                  "lock"
              ],
              "command": [],
              "params": [
                  {
                      "name": "key",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "key",
                  "description": "",
                  "label": "Lock Name",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "A value to identify as the lock."
              }
          ],
          "icon": "Edit"
      },
      {
          "name": "acquire-lock",
          "displayName": "Acquire Lock",
          "type": "acquirelock",
          "version": 1,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "This task attempts to obtain a lock with the specified name. If no other workflow in the team is using a lock with that name, a lock with that name and is created. If another workflow in the team is using a lock with the specified name, the current workflow waits until the lock is available.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e8a6c6cd0827100011c2a35",
              "reason": "",
              "date": "2020-04-30T22:53:23.337+00:00"
          },
          "category": "Workflow",
          "spec": {
              "arguments": [
                  "lock"
              ],
              "command": [],
              "params": [
                  {
                      "name": "key",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "timeout",
                      "type": "string",
                      "description": "",
                      "defaultValue": "300"
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "key",
                  "description": "",
                  "label": "Lock Name",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "A value to identify the lock."
              },
              {
                  "key": "timeout",
                  "description": "",
                  "label": "Timeout",
                  "type": "number",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "300",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Duration before lock expires in seconds"
              }
          ],
          "icon": "Edit"
      },
      {
          "name": "manual-task",
          "displayName": "Manual Task",
          "type": "manual)",
          "version": 1,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Pauses workflow until manual task is actioned.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e8a6c6cd0827100011c2a35",
              "reason": "",
              "date": "2020-04-30T22:53:23.337+00:00"
          },
          "category": "Workflow",
          "spec": {
              "arguments": [
                  "approval"
              ],
              "command": [],
              "params": [
                  {
                      "name": "instructions",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "instructions",
                  "description": "",
                  "label": "Instructions",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Steps for end user to follow to perform manual task."
              }
          ],
          "icon": "Validate"
      },
      {
          "name": "wait-for-event",
          "displayName": "Wait For Event",
          "type": "eventwait",
          "version": 1,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Wait for an event from an external system to resume workflow execution. The event can be a webhook or a Cloud Event.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "category": "Workflow",
          "spec": {
              "arguments": [],
              "command": [],
              "params": [
                  {
                      "name": "topic",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "topic",
                  "description": "",
                  "label": "Topic",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              }
          ],
          "icon": "Power on/off"
      },
      {
          "name": "get-incidents",
          "displayName": "Get Incidents",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Get Incidents from ServiceNow with optional State",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e8a6c6cd0827100011c2a35",
              "reason": "",
              "date": "2020-04-30T22:54:03.745+00:00"
          },
          "category": "ServiceNow",
          "spec": {
              "arguments": [
                  "servicenow",
                  "getIncidents"
              ],
              "command": [],
              "params": [
                  {
                      "name": "instance",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "username",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "password",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "state",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "tag",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "instance",
                  "description": "",
                  "label": "Instance ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "username",
                  "description": "",
                  "label": "Username",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "password",
                  "description": "",
                  "label": "Password",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "state",
                  "description": "",
                  "label": "Incident State",
                  "type": "select",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": [
                      {
                          "key": "New",
                          "value": "New"
                      },
                      {
                          "key": "In Progress",
                          "value": "In Progress"
                      },
                      {
                          "key": "On Hold",
                          "value": "On Hold"
                      },
                      {
                          "key": "Resolved",
                          "value": "Resolved"
                      },
                      {
                          "key": "Closed",
                          "value": "Closed"
                      },
                      {
                          "key": "Canceled",
                          "value": "Canceled"
                      }
                  ],
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "tag",
                  "description": "",
                  "label": "Tag or Label",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              }
          ],
          "icon": "API/HTTP call"
      },
      {
          "name": "switch",
          "displayName": "Switch",
          "type": "decision)",
          "version": 1,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Create a Switch Component",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e8a6c6cd0827100011c2a35",
              "reason": "",
              "date": "2020-04-30T22:53:23.337+00:00"
          },
          "category": "Workflow",
          "spec": {
              "arguments": [
                  "switch"
              ],
              "command": [],
              "params": [
                  {
                      "name": "value",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "value",
                  "description": "",
                  "label": "Value",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              }
          ],
          "icon": "Switch"
      },
      {
          "name": "update-incidents",
          "displayName": "Update Incidents",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2020-01-09T00:01:00.000+00:00",
          "verified": true,
          "description": "Update Incidents from ServiceNow",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e8a6c6cd0827100011c2a35",
              "reason": "",
              "date": "2020-04-30T22:52:40.641+00:00"
          },
          "category": "ServiceNow",
          "spec": {
              "arguments": [
                  "servicenow",
                  "updateIncidents"
              ],
              "command": [],
              "params": [
                  {
                      "name": "instance",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "username",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "password",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "state",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "incidents",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "instance",
                  "description": "",
                  "label": "Instance ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "username",
                  "description": "",
                  "label": "Username",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "password",
                  "description": "",
                  "label": "Password",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "state",
                  "description": "",
                  "label": "Incident State",
                  "type": "select",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": [
                      {
                          "key": "New",
                          "value": "New"
                      },
                      {
                          "key": "In Progress",
                          "value": "In Progress"
                      },
                      {
                          "key": "On Hold",
                          "value": "On Hold"
                      },
                      {
                          "key": "Resolved",
                          "value": "Resolved"
                      },
                      {
                          "key": "Closed",
                          "value": "Closed"
                      },
                      {
                          "key": "Canceled",
                          "value": "Canceled"
                      }
                  ],
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "incidents",
                  "description": "",
                  "label": "Incidents List",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              }
          ],
          "icon": "Automated task"
      },
      {
          "name": "jsonpath-to-parameter",
          "displayName": "JSONPath To Parameter",
          "type": "template",
          "version": 3,
          "status": "active",
          "creationDate": "2020-04-30T22:43:20.543+00:00",
          "verified": true,
          "description": "Takes the first value returned by a valid JSONPath expression and sets as an output property",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-16T06:43:57.124+00:00"
          },
          "category": "Utilities",
          "spec": {
              "arguments": [
                  "system",
                  "jsonPathToProperty"
              ],
              "command": [],
              "params": [
                  {
                      "name": "json",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "query",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "The value based on the applied expression",
                      "name": "evaluation"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "json",
                  "description": "",
                  "label": "Json",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Json object to query"
              },
              {
                  "key": "query",
                  "description": "",
                  "label": "Query Expression",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "e.g. $.store.book",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "A valid JSON path expression"
              }
          ],
          "icon": "Filter"
      },
      {
          "name": "find-issues-and-remove",
          "displayName": "Find Issues and Remove",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2020-04-30T22:54:58.469+00:00",
          "verified": true,
          "description": "Finds github issues and removes with optional days since activity and labels",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e831153d0827100011c29f6",
              "reason": "Initial version of the task",
              "date": "2020-04-30T23:03:49.743+00:00"
          },
          "category": "GitHub",
          "spec": {
              "arguments": [
                  "github",
                  "findIssuesInOrgAndRemove"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "org",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "repo",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "daysSinceActivity",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "label",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": null,
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "API Endpoint",
                  "type": "url",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "e.g. https://github.com/api/v3",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "token",
                  "description": "",
                  "label": "API Token",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "org",
                  "description": "",
                  "label": "Owner",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Owner or Organization"
              },
              {
                  "key": "repo",
                  "description": "",
                  "label": "Repository",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "daysSinceActivity",
                  "description": "",
                  "label": "Days Since Activity",
                  "type": "number",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "label",
                  "description": "",
                  "label": "Issue Label",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "e.g. stale",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "A label to filter the issues by"
              }
          ],
          "icon": "Automated task"
      },
      {
          "name": "find-issues-and-label",
          "displayName": "Find Issues and Label",
          "type": "template",
          "version": 3,
          "status": "active",
          "creationDate": "2020-04-30T23:06:18.142+00:00",
          "verified": true,
          "description": "Finds issues in a repository based on time since last activity and adds a label and a comment. This is useful for marking issues inactive or reminding users to update an issue.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5ecd2d1d0eb5f000012d0895",
              "reason": "Added an ignore label for issues that will not be returned in the search and therefore not labeled.\t(Copying Tyson's updated version from Live to get the rest of the envs level)",
              "date": "2020-08-25T15:01:51.006+00:00"
          },
          "category": "GitHub",
          "spec": {
              "arguments": [
                  "github",
                  "findInactiveIssuesInOrgAndLabel"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "org",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "repo",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "daysSinceActivity",
                      "type": "string",
                      "description": "",
                      "defaultValue": "30"
                  },
                  {
                      "name": "label",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "ignoreLabel",
                      "type": "string",
                      "description": "",
                      "defaultValue": "ignore"
                  }
              ],
              "envs": null,
              "image": null,
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "API Endpoint",
                  "type": "url",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. https://github.com/api/v3",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "token",
                  "description": "",
                  "label": "API Token",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "org",
                  "description": "",
                  "label": "Owner",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Owner or Organization"
              },
              {
                  "key": "repo",
                  "description": "",
                  "label": "Repository",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "daysSinceActivity",
                  "description": "",
                  "label": "Days Since Activity",
                  "type": "number",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "30",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "label",
                  "description": "",
                  "label": "Label",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Label to add to issue"
              },
              {
                  "key": "ignoreLabel",
                  "description": "",
                  "label": "Ignore Label",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "ignore",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Issues with this label will be ignored"
              }
          ],
          "icon": "Automated task"
      },
      {
          "name": "send-twilio-sms",
          "displayName": "Send Twilio SMS",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2020-06-30T01:58:09.297+00:00",
          "verified": true,
          "description": "Sends a text message using Twilio SMS",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608ca23d70bfa94ac91f8eef",
              "reason": "",
              "date": "2021-05-15T01:52:48.818+00:00"
          },
          "category": "Communication",
          "spec": {
              "arguments": [
                  "twilio",
                  "sendSMS"
              ],
              "command": [],
              "params": [
                  {
                      "name": "accountSid",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "from",
                      "type": "string",
                      "description": "This will be one of your Twilio phone numbers",
                      "defaultValue": ""
                  },
                  {
                      "name": "to",
                      "type": "string",
                      "description": "The mobile number for the message to go to",
                      "defaultValue": ""
                  },
                  {
                      "name": "message",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "accountSid",
                  "description": "",
                  "label": "Account Sid",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Located on your Twilio project dashboard"
              },
              {
                  "key": "token",
                  "description": "",
                  "label": "Auth Token",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Located on your Twilio project dashboard"
              },
              {
                  "key": "from",
                  "description": "This will be one of your Twilio phone numbers",
                  "label": "From",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Must include + and a country code, e.g., +1"
              },
              {
                  "key": "to",
                  "description": "The mobile number for the message to go to",
                  "label": "To",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Must include + and a country code, e.g., +1"
              },
              {
                  "key": "message",
                  "description": "",
                  "label": "Message",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              }
          ],
          "icon": "Message"
      },
      {
          "name": "send-email-with-sendgrid",
          "displayName": "Send Email with Sendgrid",
          "type": "template",
          "version": 3,
          "status": "active",
          "creationDate": "2020-10-13T16:53:52.235+00:00",
          "verified": true,
          "description": "Using your Sendgrid API Key, send a basic email.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e71f175756f7e000192eb6c",
              "reason": "",
              "date": "2021-03-31T23:43:08.392+00:00"
          },
          "category": "Communication",
          "spec": {
              "arguments": [
                  "mail",
                  "sendEmailWithSendgrid"
              ],
              "command": [],
              "params": [
                  {
                      "name": "apiKey",
                      "type": "string",
                      "description": "If you have a Sendgrid account, you will be able to find or create an API key via their UI",
                      "defaultValue": ""
                  },
                  {
                      "name": "to",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "from",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "cc",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "bcc",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "replyTo",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "subject",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "contentType",
                      "type": "string",
                      "description": "Email content type, can be Text or HTML.",
                      "defaultValue": null
                  },
                  {
                      "name": "bodyContent",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "attachments",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "apiKey",
                  "description": "If you have a Sendgrid account, you will be able to find or create an API key via their UI",
                  "label": "API Key",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "to",
                  "description": "",
                  "label": "To",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "from",
                  "description": "",
                  "label": "From",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "cc",
                  "description": "",
                  "label": "CC",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "bcc",
                  "description": "",
                  "label": "BCC",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "replyTo",
                  "description": "",
                  "label": "Reply to",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "subject",
                  "description": "",
                  "label": "Subject",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "contentType",
                  "description": "Email content type, can be Text or HTML.",
                  "label": "Content Type",
                  "type": "select",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": [
                      {
                          "key": "Text",
                          "value": "Text"
                      },
                      {
                          "key": "HTML",
                          "value": "HTML"
                      }
                  ],
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "bodyContent",
                  "description": "",
                  "label": "Body Content",
                  "type": "texteditor",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "attachments",
                  "description": "",
                  "label": "Attachments",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "i.e. /path/to/attachment.pdf",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "List of files to be used for attachment "
              }
          ],
          "icon": "Message"
      },
      {
          "name": "run-scheduled-workflow",
          "displayName": "Run Scheduled Workflow",
          "type": "runscheduledworkflow",
          "version": 1,
          "status": "active",
          "creationDate": "2021-01-10T00:01:00.000+00:00",
          "verified": true,
          "description": "This task runs the selected workflow one time in the future. It only schedules the workflow, it does not wait for it to execute. Additionally you can pass in workflow parameters if they have been defined.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e8a6c6cd0827100011c2a35",
              "reason": "",
              "date": "2021-01-10T22:53:23.337+00:00"
          },
          "category": "Workflow",
          "spec": {
              "arguments": [
                  "runscheduledworkflow"
              ],
              "command": [],
              "params": [],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [],
          "icon": "Automated task"
      },
      {
          "name": "replace-tokens-in-files",
          "displayName": "Replace Tokens in Files",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2021-01-15T06:14:56.408+00:00",
          "verified": true,
          "description": "Replace parameters between tokens. The default start and end delimiters allow you to replace parameters defined following the parameter reference syntax.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-18T05:08:08.704+00:00"
          },
          "category": "File Utilities",
          "spec": {
              "arguments": [
                  "file",
                  "replaceTokensInFile"
              ],
              "command": [],
              "params": [
                  {
                      "name": "path",
                      "type": "string",
                      "description": "",
                      "defaultValue": "$(params.deploy-kubernetes-path)"
                  },
                  {
                      "name": "files",
                      "type": "string",
                      "description": "",
                      "defaultValue": "$(params.deploy-kubernetes-file)"
                  },
                  {
                      "name": "tokenStartDelimiter",
                      "type": "string",
                      "description": "",
                      "defaultValue": "\\$\\(params\\."
                  },
                  {
                      "name": "tokenEndDelimiter",
                      "type": "string",
                      "description": "",
                      "defaultValue": "\\)"
                  },
                  {
                      "name": "allParams",
                      "type": "string",
                      "description": "",
                      "defaultValue": "$(allParams)"
                  },
                  {
                      "name": "failIfNotFound",
                      "type": "string",
                      "description": "",
                      "defaultValue": "false"
                  }
              ],
              "envs": [],
              "image": null,
              "results": [
                  {
                      "description": "List of files where the token was replaced",
                      "name": "files"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "path",
                  "description": "",
                  "label": "File Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "$(params.deploy-kubernetes-path)",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "files",
                  "description": "",
                  "label": "Files",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "$(params.deploy-kubernetes-file)",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "tokenStartDelimiter",
                  "description": "",
                  "label": "Start Delimiter",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "\\$\\(params\\.",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Enter regex string, escaping special characters."
              },
              {
                  "key": "tokenEndDelimiter",
                  "description": "",
                  "label": "End Delimiter",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "\\)",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Enter regex string, escaping special characters."
              },
              {
                  "key": "allParams",
                  "description": "",
                  "label": "Replacement Values",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "key=value",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "$(allParams)",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "New line delimited key value pairs"
              },
              {
                  "key": "failIfNotFound",
                  "description": "",
                  "label": "Fail If Not Found",
                  "type": "boolean",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "false",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              }
          ],
          "icon": "Edit"
      },
      {
          "name": "send-email-with-sendgrid-template",
          "displayName": "Send Email with Sendgrid Template",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2021-02-22T10:24:02.958+00:00",
          "verified": true,
          "description": "Using your Sendgrid API Key, send a Dynamic Template email using a template ID and dynamic data.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e71f175756f7e000192eb6c",
              "reason": "",
              "date": "2021-02-23T08:00:53.339+00:00"
          },
          "category": "Communication",
          "spec": {
              "arguments": [
                  "mail",
                  "sendEmailWithSendgridTemplate"
              ],
              "command": [],
              "params": [
                  {
                      "name": "apiKey",
                      "type": "string",
                      "description": "If you have a Sendgrid account, you will be able to find or create an API key via their UI",
                      "defaultValue": "youll-come-a-waltzing-maltilda-with-me"
                  },
                  {
                      "name": "to",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "from",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "cc",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "bcc",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "replyTo",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "subject",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "templateId",
                      "type": "string",
                      "description": "Template information can be found in the Sendgrid UI",
                      "defaultValue": "youll-come-a-waltzing-maltilda-with-me"
                  },
                  {
                      "name": "dynamicTemplateData",
                      "type": "string",
                      "description": "Specify when using a template Id",
                      "defaultValue": null
                  },
                  {
                      "name": "attachments",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "apiKey",
                  "description": "If you have a Sendgrid account, you will be able to find or create an API key via their UI",
                  "label": "API Key",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "bmrgadmin",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "youll-come-a-waltzing-maltilda-with-me",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "to",
                  "description": "",
                  "label": "To",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "from",
                  "description": "",
                  "label": "From",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "cc",
                  "description": "",
                  "label": "CC",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "bcc",
                  "description": "",
                  "label": "BCC",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "replyTo",
                  "description": "",
                  "label": "Reply to",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "subject",
                  "description": "",
                  "label": "Subject",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "templateId",
                  "description": "Template information can be found in the Sendgrid UI",
                  "label": "Template Id",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "bmrgadmin",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "youll-come-a-waltzing-maltilda-with-me",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "dynamicTemplateData",
                  "description": "Specify when using a template Id",
                  "label": "Dynamic Template Data",
                  "type": "texteditor::javascript",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "attachments",
                  "description": "",
                  "label": "Attachments",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "i.e. /path/to/attachment.pdf",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "List of files to be used for attachment "
              }
          ],
          "icon": "Message"
      },
      {
          "name": "add-user-to-box-folder",
          "displayName": "Add User To Box Folder",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-03-04T13:00:43.348+00:00",
          "verified": true,
          "description": "Adds an user to the specified Box folder.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2022-05-19T15:31:20.144+00:00"
          },
          "category": "Box",
          "spec": {
              "arguments": [
                  "-props",
                  "box",
                  "join",
                  "folderId",
                  "email"
              ],
              "command": [],
              "params": [
                  {
                      "name": "folderId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "email",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "enterpriseId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientSecret",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "publicKeyId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "privateKey",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "passphrase",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "role",
                      "type": "string",
                      "description": "The user's box role for the provided folder. If not provided, the default role of EDITOR is set.",
                      "defaultValue": ""
                  },
                  {
                      "name": "notify",
                      "type": "string",
                      "description": "Specifies if the user should receive email notification. If not specified, the default value is true.",
                      "defaultValue": "true"
                  },
                  {
                      "name": "viewPath",
                      "type": "string",
                      "description": "Allows the invitee to see the entire ancestral path to the associated folder. The user will not gain privileges in any ancestral folder. If not specified, the default value is false.",
                      "defaultValue": "false"
                  }
              ],
              "envs": [],
              "image": "boomerangio/box-service:0.0.18",
              "results": [
                  {
                      "description": "The status of the invite",
                      "name": "status"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "folderId",
                  "description": "",
                  "label": "Folder Id",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box folder id"
              },
              {
                  "key": "email",
                  "description": "",
                  "label": "Email",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The email of the user we want to add to the folder"
              },
              {
                  "key": "enterpriseId",
                  "description": "",
                  "label": "Authentication - Enterprise ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box enterprise id"
              },
              {
                  "key": "clientId",
                  "description": "",
                  "label": "Authentication - Client ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box client id"
              },
              {
                  "key": "clientSecret",
                  "description": "",
                  "label": "Authentication - Client Secret",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box client secret"
              },
              {
                  "key": "publicKeyId",
                  "description": "",
                  "label": "Authentication - Public Key ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box public key id"
              },
              {
                  "key": "privateKey",
                  "description": "",
                  "label": "Authentication - Private Key",
                  "type": "texteditor::text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box private key"
              },
              {
                  "key": "passphrase",
                  "description": "",
                  "label": "Authentication - Private Key Password",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box passphrase"
              },
              {
                  "key": "role",
                  "description": "The user's box role for the provided folder. If not provided, the default role of EDITOR is set.",
                  "label": "Box User Role",
                  "type": "select",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": [
                      {
                          "key": "EDITOR",
                          "value": "EDITOR"
                      },
                      {
                          "key": "VIEWER",
                          "value": "VIEWER"
                      },
                      {
                          "key": "PREVIEWER",
                          "value": "PREVIEWER"
                      },
                      {
                          "key": "UPLOADER",
                          "value": "UPLOADER"
                      },
                      {
                          "key": "PREVIEWER_UPLOADER",
                          "value": "PREVIEWER_UPLOADER"
                      },
                      {
                          "key": "VIEWER_UPLOADER",
                          "value": "VIEWER_UPLOADER"
                      },
                      {
                          "key": "CO_OWNER",
                          "value": "CO_OWNER"
                      },
                      {
                          "key": "OWNER",
                          "value": "OWNER"
                      }
                  ],
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The user's box role"
              },
              {
                  "key": "notify",
                  "description": "Specifies if the user should receive email notification. If not specified, the default value is true.",
                  "label": "Notify By Email",
                  "type": "boolean",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "true",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Send email notification"
              },
              {
                  "key": "viewPath",
                  "description": "Allows the invitee to see the entire ancestral path to the associated folder. The user will not gain privileges in any ancestral folder. If not specified, the default value is false.",
                  "label": "Can View Path",
                  "type": "boolean",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "false",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Allow invitee to see the entire ancestral path"
              }
          ],
          "icon": "Add"
      },
      {
          "name": "create-support-center-ticket",
          "displayName": "Create Support Center Ticket",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-03-11T19:19:13.996+00:00",
          "verified": true,
          "description": "Creates a support center ticket. Should be used when you got a problem, found a bug or just need some help",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-15T17:18:17.606+00:00"
          },
          "category": "IBM Services Essentials",
          "spec": {
              "arguments": [
                  "ibmessentials",
                  "createSupportCenterTicket"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "accessToken",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "ownerId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "teamId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "catalogServiceId",
                      "type": "string",
                      "description": "Does this ticket relate to a specific Catalog item?",
                      "defaultValue": null
                  },
                  {
                      "name": "subject",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "description",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "type",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  }
              ],
              "envs": [],
              "image": "",
              "results": [],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "Support Center URL",
                  "type": "url",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "accessToken",
                  "description": "",
                  "label": "Access Token",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "ownerId",
                  "description": "",
                  "label": "Ticket Owner Id",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The owner id of the ticket"
              },
              {
                  "key": "teamId",
                  "description": "",
                  "label": "Team Id",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Set the team id the ticket is related to"
              },
              {
                  "key": "catalogServiceId",
                  "description": "Does this ticket relate to a specific Catalog item?",
                  "label": "Catalog item",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "subject",
                  "description": "",
                  "label": "Subject",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "What's this ticket about?"
              },
              {
                  "key": "description",
                  "description": "",
                  "label": "Description",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Give us all the details"
              },
              {
                  "key": "type",
                  "description": "",
                  "label": "Ticket Type",
                  "type": "select",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": [
                      {
                          "key": "issue",
                          "value": "issue"
                      },
                      {
                          "key": "query",
                          "value": "query"
                      }
                  ],
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              }
          ],
          "icon": "Message"
      },
      {
          "name": "create-slack-channel",
          "displayName": "Create Slack Channel",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-03-16T14:25:35.751+00:00",
          "verified": true,
          "description": "Create a Slack channel using a Slack application through Bot tokens. For further reading on the underlying API see https://api.slack.com/methods/conversations.create",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-15T17:08:49.253+00:00"
          },
          "category": "Communication with Slack",
          "spec": {
              "arguments": [
                  "slack",
                  "createChannel"
              ],
              "command": [],
              "params": [
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "name",
                      "type": "string",
                      "description": "Channel names may only contain lowercase letters, numbers, hyphens, and underscores, and must be 80 characters or less.",
                      "defaultValue": ""
                  },
                  {
                      "name": "isPrivate",
                      "type": "string",
                      "description": "",
                      "defaultValue": "false"
                  },
                  {
                      "name": "team",
                      "type": "string",
                      "description": "Required if organisation token is used",
                      "defaultValue": ""
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "The newly created slack channel",
                      "name": "response"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "token",
                  "description": "",
                  "label": "Authentication API Token",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. xxxx-xxxxxxxxx-xxxx",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The token is associated with the slack application"
              },
              {
                  "key": "name",
                  "description": "Channel names may only contain lowercase letters, numbers, hyphens, and underscores, and must be 80 characters or less.",
                  "label": "Channel Name",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Name of the public or private channel to create"
              },
              {
                  "key": "isPrivate",
                  "description": "",
                  "label": "Private Channel",
                  "type": "boolean",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "false",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "team",
                  "description": "Required if organisation token is used",
                  "label": "Team",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Encoded team id to create the channel in"
              }
          ],
          "icon": "Add"
      },
      {
          "name": "remove-member-from-channel",
          "displayName": "Remove Member from Channel",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-03-16T14:37:23.706+00:00",
          "verified": true,
          "description": "Removes a user from Slack conversation using a Slack application through Bot tokens. For further reading on the underlying API see https://api.slack.com/methods/conversations.kick",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-15T17:11:43.632+00:00"
          },
          "category": "Communication with Slack",
          "spec": {
              "arguments": [
                  "slack",
                  "removeChannelMember"
              ],
              "command": [],
              "params": [
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "channel",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "user",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "The result of the removal action",
                      "name": "response"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "token",
                  "description": "",
                  "label": "Authentication API Token",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. xxxx-xxxxxxxxx-xxxx",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The token is associated with the slack application"
              },
              {
                  "key": "channel",
                  "description": "",
                  "label": "Channel",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "ID of conversation to remove user from."
              },
              {
                  "key": "user",
                  "description": "",
                  "label": "User",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. W1234567890",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "User ID to be removed"
              }
          ],
          "icon": "Delete"
      },
      {
          "name": "invite-members-to-channel",
          "displayName": "Invite Members to Channel",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-03-16T14:46:57.024+00:00",
          "verified": true,
          "description": "Invite Slack users to a conversation using a Slack application through Bot tokens. For further reading on the underlying API see https://api.slack.com/methods/conversations.invite",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-15T17:11:26.542+00:00"
          },
          "category": "Communication with Slack",
          "spec": {
              "arguments": [
                  "slack",
                  "inviteChannelMembers"
              ],
              "command": [],
              "params": [
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "channel",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "users",
                      "type": "string",
                      "description": "Up to 1000 users may be listed",
                      "defaultValue": ""
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "Details of the extended invitation",
                      "name": "response"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "token",
                  "description": "",
                  "label": "Authentication API Token",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. xxxx-xxxxxxxxx-xxxx",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The token is associated with the slack application"
              },
              {
                  "key": "channel",
                  "description": "",
                  "label": "Channel",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. C1234567890",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The ID of the channel to invite user(s) to"
              },
              {
                  "key": "users",
                  "description": "Up to 1000 users may be listed",
                  "label": "Users",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. W1234567890,U2345678901,U3456789012",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "A comma separated list of user IDs"
              }
          ],
          "icon": "Automated task"
      },
      {
          "name": "find-slack-member-by-id",
          "displayName": "Find Slack Member By Id",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-03-16T14:54:07.226+00:00",
          "verified": true,
          "description": "Find a Slack user based on the provided user id using a Slack application through Bot tokens. For further reading on the underlying API see https://api.slack.com/methods/users.info",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-15T17:09:58.182+00:00"
          },
          "category": "Communication with Slack",
          "spec": {
              "arguments": [
                  "slack",
                  "getUser"
              ],
              "command": [],
              "params": [
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "user",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "Slack user details",
                      "name": "response"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "token",
                  "description": "",
                  "label": "Authentication API Token",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. xxxx-xxxxxxxxx-xxxx",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The token is associated with the slack application"
              },
              {
                  "key": "user",
                  "description": "",
                  "label": "User",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. W1234567890",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "User id to get info on"
              }
          ],
          "icon": "Search"
      },
      {
          "name": "get-slack-channels",
          "displayName": "Get Slack Channels",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-03-16T14:59:09.271+00:00",
          "verified": true,
          "description": "Retrieves the Slack channels using a Slack application through Bot tokens. For further reading on the underlying API see https://api.slack.com/methods/conversations.list",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-15T17:11:10.137+00:00"
          },
          "category": "Communication with Slack",
          "spec": {
              "arguments": [
                  "slack",
                  "getChannels"
              ],
              "command": [],
              "params": [
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "team",
                      "type": "string",
                      "description": "Required if token belongs to org-wide app",
                      "defaultValue": ""
                  },
                  {
                      "name": "types",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "List of limited channel-like conversation objects",
                      "name": "response"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "token",
                  "description": "",
                  "label": "Authentication API Token",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. xxxx-xxxxxxxxx-xxxx",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The token is associated with the slack application"
              },
              {
                  "key": "team",
                  "description": "Required if token belongs to org-wide app",
                  "label": "Team",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Encoded team id to list channels in"
              },
              {
                  "key": "types",
                  "description": "",
                  "label": " Channel Types",
                  "type": "select",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": [
                      {
                          "key": "public_channel",
                          "value": "public_channel"
                      },
                      {
                          "key": "private_channel",
                          "value": "private_channel"
                      },
                      {
                          "key": "mpim",
                          "value": "mpim"
                      },
                      {
                          "key": "im",
                          "value": "im"
                      }
                  ],
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Channel types: private, public, mpim, im"
              }
          ],
          "icon": "API/HTTP call"
      },
      {
          "name": "get-slack-channel-members",
          "displayName": "Get Slack Channel Members",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-03-16T15:14:46.062+00:00",
          "verified": true,
          "description": "Retrieve the Slack channel members using a Slack application through Bot tokens. For further reading on the underlying API see https://api.slack.com/methods/conversations.members",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-15T17:10:32.085+00:00"
          },
          "category": "Communication with Slack",
          "spec": {
              "arguments": [
                  "slack",
                  "getChannelMembers"
              ],
              "command": [],
              "params": [
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "channel",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "The list of the channel's member ids",
                      "name": "response"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "token",
                  "description": "",
                  "label": "Authentication API Token",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. xxxx-xxxxxxxxx-xxxx",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The token is associated with the slack application"
              },
              {
                  "key": "channel",
                  "description": "",
                  "label": "Channel",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. C1234567890",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Conversation ID to learn more about"
              }
          ],
          "icon": "API/HTTP call"
      },
      {
          "name": "get-slack-channel-info",
          "displayName": "Get Slack Channel Info",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-03-16T16:02:26.116+00:00",
          "verified": true,
          "description": "Retrieves the Slack channel information using a Slack application through Bot tokens. For further reading on the underlying API see https://api.slack.com/methods/conversations.info",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-15T17:10:16.902+00:00"
          },
          "category": "Communication with Slack",
          "spec": {
              "arguments": [
                  "slack",
                  "getChannelInfo"
              ],
              "command": [],
              "params": [
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "channel",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "Slack channel details",
                      "name": "response"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "token",
                  "description": "",
                  "label": "Authentication API Token",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. xxxx-xxxxxxxxx-xxxx",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The token is associated with the slack application"
              },
              {
                  "key": "channel",
                  "description": "",
                  "label": "Channel",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. C1234567890",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Conversation ID to learn more about"
              }
          ],
          "icon": "Message"
      },
      {
          "name": "delete-slack-channel",
          "displayName": "Delete Slack Channel",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-03-16T16:10:26.379+00:00",
          "verified": true,
          "description": "Archives a Slack conversation using a Slack application through Bot tokens. For further reading on the underlying API see https://api.slack.com/methods/conversations.archive",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-15T17:09:27.252+00:00"
          },
          "category": "Communication with Slack",
          "spec": {
              "arguments": [
                  "slack",
                  "deleteChannel"
              ],
              "command": [],
              "params": [
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "channel",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "Status of the delete slack channel action",
                      "name": "response"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "token",
                  "description": "",
                  "label": "Authentication API Token",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. xxxx-xxxxxxxxx-xxxx",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The token is associated with the slack application"
              },
              {
                  "key": "channel",
                  "description": "",
                  "label": "Channel ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. C1234567890",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "ID of conversation to archive"
              }
          ],
          "icon": "Delete"
      },
      {
          "name": "list-box-folders",
          "displayName": "List Box Folders",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-03-19T15:30:25.049+00:00",
          "verified": true,
          "description": "Retrieves and lists an user's Box folders.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2022-05-19T15:31:52.739+00:00"
          },
          "category": "Box",
          "spec": {
              "arguments": [
                  "-props",
                  "box",
                  "list"
              ],
              "command": [],
              "params": [
                  {
                      "name": "enterpriseId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientSecret",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "publicKeyId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "privateKey",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "passphrase",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "outputFilePath",
                      "type": "string",
                      "description": "If provided, the result parameter is not filled",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": "boomerangio/box-service:0.0.18",
              "results": [
                  {
                      "description": "The status of the list box folders action",
                      "name": "status"
                  },
                  {
                      "description": "The retrieved Box folders information",
                      "name": "folders"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "enterpriseId",
                  "description": "",
                  "label": "Authentication - Enterprise ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box entreprise id"
              },
              {
                  "key": "clientId",
                  "description": "",
                  "label": "Authentication - Client ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box client id"
              },
              {
                  "key": "clientSecret",
                  "description": "",
                  "label": "Authentication - Client Secret",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box client secret"
              },
              {
                  "key": "publicKeyId",
                  "description": "",
                  "label": "Authentication - Public Key ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box public key"
              },
              {
                  "key": "privateKey",
                  "description": "",
                  "label": "Authentication - Private Key",
                  "type": "texteditor::text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box private key"
              },
              {
                  "key": "passphrase",
                  "description": "",
                  "label": "Authentication - Private Key Password",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box passphrase"
              },
              {
                  "key": "outputFilePath",
                  "description": "If provided, the result parameter is not filled",
                  "label": "Response File Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "File path to store the output response"
              }
          ],
          "icon": "API/HTTP call"
      },
      {
          "name": "add-box-folder",
          "displayName": "Add Box Folder",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-03-22T09:29:41.643+00:00",
          "verified": true,
          "description": "Adds a Box folder with the specified name. If no parent folder is provided, then the Box root folder is used.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2022-05-19T15:30:46.501+00:00"
          },
          "category": "Box",
          "spec": {
              "arguments": [
                  "-props",
                  "box",
                  "add",
                  "folderName"
              ],
              "command": [],
              "params": [
                  {
                      "name": "enterpriseId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientSecret",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "publicKeyId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "privateKey",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "passphrase",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "folderName",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "parentFolderId",
                      "type": "string",
                      "description": "The Box folder id of the parent folder. If not specified, the Box root folder is used. ",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": "boomerangio/box-service:0.0.18",
              "results": [
                  {
                      "description": "The status of the call",
                      "name": "status"
                  },
                  {
                      "description": "Id of the newly added Box folder",
                      "name": "id"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "enterpriseId",
                  "description": "",
                  "label": "Authentication - Enterprise ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box enterprise id"
              },
              {
                  "key": "clientId",
                  "description": "",
                  "label": "Authentication - Client ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box client id"
              },
              {
                  "key": "clientSecret",
                  "description": "",
                  "label": "Authentication - Client Secret",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box client secret"
              },
              {
                  "key": "publicKeyId",
                  "description": "",
                  "label": "Authentication - Public Key ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box public key id"
              },
              {
                  "key": "privateKey",
                  "description": "",
                  "label": "Authentication - Private Key",
                  "type": "texteditor::text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box private key"
              },
              {
                  "key": "passphrase",
                  "description": "",
                  "label": "Authentication - Private Key Password",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box passphrase"
              },
              {
                  "key": "folderName",
                  "description": "",
                  "label": "Folder Name",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "New folder's name"
              },
              {
                  "key": "parentFolderId",
                  "description": "The Box folder id of the parent folder. If not specified, the Box root folder is used. ",
                  "label": "Parent Folder ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The id of the parent folder"
              }
          ],
          "icon": "Add"
      },
      {
          "name": "remove-user-from-box-folder",
          "displayName": "Remove User From Box Folder",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-03-22T10:01:23.084+00:00",
          "verified": true,
          "description": "Removes an user from a Box folder.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2022-05-19T15:32:11.594+00:00"
          },
          "category": "Box",
          "spec": {
              "arguments": [
                  "-props",
                  "box",
                  "leave",
                  "folderId",
                  "email"
              ],
              "command": [],
              "params": [
                  {
                      "name": "enterpriseId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientSecret",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "publicKeyId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "privateKey",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "passphrase",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "folderId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "email",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": "boomerangio/box-service:0.0.18",
              "results": [
                  {
                      "description": "The status of the remove user from box folder action",
                      "name": "status"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "enterpriseId",
                  "description": "",
                  "label": "Authentication - Enterprise ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box enterprise id"
              },
              {
                  "key": "clientId",
                  "description": "",
                  "label": "Authentication - Client ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box client id"
              },
              {
                  "key": "clientSecret",
                  "description": "",
                  "label": "Authentication - Client Secret",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box client secret"
              },
              {
                  "key": "publicKeyId",
                  "description": "",
                  "label": "Authentication - Public Key ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box public key id"
              },
              {
                  "key": "privateKey",
                  "description": "",
                  "label": "Authentication - Private Key",
                  "type": "texteditor::text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box private key"
              },
              {
                  "key": "passphrase",
                  "description": "",
                  "label": "Authentication - Private Key Password",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box passphrase"
              },
              {
                  "key": "folderId",
                  "description": "",
                  "label": "Folder ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The id of the desired Box folder"
              },
              {
                  "key": "email",
                  "description": "",
                  "label": "User's email",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The email of the user we want to be removed"
              }
          ],
          "icon": "Delete"
      },
      {
          "name": "remove-box-folder",
          "displayName": "Remove Box Folder",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-03-22T10:42:56.178+00:00",
          "verified": true,
          "description": "Removes a Box folder.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2022-05-19T15:32:02.523+00:00"
          },
          "category": "Box",
          "spec": {
              "arguments": [
                  "-props",
                  "box",
                  "remove",
                  "folderId"
              ],
              "command": [],
              "params": [
                  {
                      "name": "enterpriseId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientSecret",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "publicKeyId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "privateKey",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "passphrase",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "folderId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  }
              ],
              "envs": [],
              "image": "boomerangio/box-service:0.0.18",
              "results": [
                  {
                      "description": "The status of the remove box folder action",
                      "name": "status"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "enterpriseId",
                  "description": "",
                  "label": "Authentication - Enterprise ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box enterprise id"
              },
              {
                  "key": "clientId",
                  "description": "",
                  "label": "Autentication - Client ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box client id"
              },
              {
                  "key": "clientSecret",
                  "description": "",
                  "label": "Authentication - Client Secret",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box client secret"
              },
              {
                  "key": "publicKeyId",
                  "description": "",
                  "label": "Authentication - Public Key ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box public key id"
              },
              {
                  "key": "privateKey",
                  "description": "",
                  "label": "Authentication - Private Key",
                  "type": "texteditor::text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box private key"
              },
              {
                  "key": "passphrase",
                  "description": "",
                  "label": "Authentication - Private Key Password",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box passphrase"
              },
              {
                  "key": "folderId",
                  "description": "",
                  "label": "Folder ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The id of the Box folder we want removed"
              }
          ],
          "icon": "Delete"
      },
      {
          "name": "upload-file-to-box",
          "displayName": "Upload File To Box",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-03-22T11:40:19.164+00:00",
          "verified": true,
          "description": "Uploads the file at the specified path to the desired Box folder.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2022-05-19T15:29:46.121+00:00"
          },
          "category": "Box",
          "spec": {
              "arguments": [
                  "-props",
                  "box",
                  "upload",
                  "folderId",
                  "file"
              ],
              "command": [],
              "params": [
                  {
                      "name": "enterpriseId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientSecret",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "publicKeyId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "privateKey",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "passphrase",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "folderId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "file",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  }
              ],
              "envs": [],
              "image": "boomerangio/box-service:0.0.18",
              "results": [
                  {
                      "description": "The status of he upload file to box action",
                      "name": "status"
                  },
                  {
                      "description": "The id of the newly uploaded file into Box",
                      "name": "id"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "enterpriseId",
                  "description": "",
                  "label": "Authentication - Enterprise ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box enterprise id"
              },
              {
                  "key": "clientId",
                  "description": "",
                  "label": "Authentication - Client ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box client id"
              },
              {
                  "key": "clientSecret",
                  "description": "",
                  "label": "Authentication - Client Secret",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box client secret"
              },
              {
                  "key": "publicKeyId",
                  "description": "",
                  "label": "Authentication - Public Key ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box public key id"
              },
              {
                  "key": "privateKey",
                  "description": "",
                  "label": "Authentication - Private Key",
                  "type": "texteditor::text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box private key"
              },
              {
                  "key": "passphrase",
                  "description": "",
                  "label": "Authentication - Private Key Password",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box passphrase"
              },
              {
                  "key": "folderId",
                  "description": "",
                  "label": "Folder ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The id of the box folder to upload into"
              },
              {
                  "key": "file",
                  "description": "",
                  "label": "Path To File",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "/workflow/to_upload.txt",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Full path to desired file"
              }
          ],
          "icon": "Upload"
      },
      {
          "name": "download-file-from-box",
          "displayName": "Download File From Box",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-03-22T11:51:50.347+00:00",
          "verified": true,
          "description": "Downloads a file from Box to the provided path.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2022-05-19T15:31:31.991+00:00"
          },
          "category": "Box",
          "spec": {
              "arguments": [
                  "-props",
                  "box",
                  "download",
                  "fileId",
                  "file"
              ],
              "command": [],
              "params": [
                  {
                      "name": "enterpriseId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientSecret",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "publicKeyId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "privateKey",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "passphrase",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "fileId",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "file",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": "boomerangio/box-service:0.0.18",
              "results": [
                  {
                      "description": "The status of the download action",
                      "name": "status"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "enterpriseId",
                  "description": "",
                  "label": "Authentication - Enterprise ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box enterprise id"
              },
              {
                  "key": "clientId",
                  "description": "",
                  "label": "Authentication - Client ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box client id"
              },
              {
                  "key": "clientSecret",
                  "description": "",
                  "label": "Authentication - Client Secret",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box client secret"
              },
              {
                  "key": "publicKeyId",
                  "description": "",
                  "label": "Authentication - Public Key ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box public key id"
              },
              {
                  "key": "privateKey",
                  "description": "",
                  "label": "Authnetication - Private Key",
                  "type": "texteditor::text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box private key"
              },
              {
                  "key": "passphrase",
                  "description": "",
                  "label": "Authentication - Private Key Password",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box passphrase"
              },
              {
                  "key": "fileId",
                  "description": "",
                  "label": "File ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box id of the desired file"
              },
              {
                  "key": "file",
                  "description": "",
                  "label": "Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "/workflow/downloded_file.txt",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Full path of downloaded file"
              }
          ],
          "icon": "Download"
      },
      {
          "name": "get-box-folder-info",
          "displayName": "Get Box Folder Info",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-03-22T12:01:37.233+00:00",
          "verified": true,
          "description": "Gets the details of a Box folder.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2022-05-19T15:31:42.560+00:00"
          },
          "category": "Box",
          "spec": {
              "arguments": [
                  "-props",
                  "box",
                  "info",
                  "folderId"
              ],
              "command": [],
              "params": [
                  {
                      "name": "enterpriseId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientSecret",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "publicKeyId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "privateKey",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "passphrase",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "folderId",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "outputFilePath",
                      "type": "string",
                      "description": "If provided, the result parameter is not filled",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": "boomerangio/box-service:0.0.18",
              "results": [
                  {
                      "description": "The status of the get box info action",
                      "name": "status"
                  },
                  {
                      "description": "The folder information",
                      "name": "folder"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "enterpriseId",
                  "description": "",
                  "label": "Authentication - Enterprise ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box entreprise id"
              },
              {
                  "key": "clientId",
                  "description": "",
                  "label": "Authentication - Client ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box client id"
              },
              {
                  "key": "clientSecret",
                  "description": "",
                  "label": "Authentication - Client Secret",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box client secret"
              },
              {
                  "key": "publicKeyId",
                  "description": "",
                  "label": "Authentication - Public Key ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box public key id"
              },
              {
                  "key": "privateKey",
                  "description": "",
                  "label": "Authnetication - Private Key",
                  "type": "texteditor::text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box private key"
              },
              {
                  "key": "passphrase",
                  "description": "",
                  "label": "Authentication - Private Key Password",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Box passphrase"
              },
              {
                  "key": "folderId",
                  "description": "",
                  "label": "Folder ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The id of the desired Box folder"
              },
              {
                  "key": "outputFilePath",
                  "description": "If provided, the result parameter is not filled",
                  "label": "Response File Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "File path to store the output response"
              }
          ],
          "icon": "Message"
      },
      {
          "name": "get-all-organizations",
          "displayName": "Get All Organizations",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-03-24T13:08:31.431+00:00",
          "verified": true,
          "description": "Lists all Github organizations, in the order that they were created on GitHub. For further reading on the underlying API see https://docs.github.com/rest/reference/orgs/#list-organizations",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-15T17:15:10.659+00:00"
          },
          "category": "GitHub",
          "spec": {
              "arguments": [
                  "github",
                  "listAllOrganizations"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": "youll-come-a-waltzing-maltilda-with-me"
                  },
                  {
                      "name": "since",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "maxNoOrg",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "List of the organizations",
                      "name": "organizations"
                  }
              ],
              "script": "ls -la /tekton/results/",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. https://github.ibm.com/api/v3",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Github API end-point"
              },
              {
                  "key": "token",
                  "description": "",
                  "label": "Github Access Token",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "bmrgadmin",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "youll-come-a-waltzing-maltilda-with-me",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Personal access tokens"
              },
              {
                  "key": "since",
                  "description": "",
                  "label": "First organization ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "maxNoOrg",
                  "description": "",
                  "label": "Number of organizations",
                  "type": "number",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The maximum returned number of organizations"
              }
          ],
          "icon": "API/HTTP call"
      },
      {
          "name": "get-organization-info",
          "displayName": "Get Organization Info",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2021-03-24T13:21:04.542+00:00",
          "verified": true,
          "description": "Retrieves the details of a Github organization. For further reading on the underlying API see https://docs.github.com/en/rest/reference/orgs#get-an-organization",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-25T09:39:32.254+00:00"
          },
          "category": "GitHub",
          "spec": {
              "arguments": [
                  "github",
                  "getOrganization"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": "youll-come-a-waltzing-maltilda-with-me"
                  },
                  {
                      "name": "organizationName",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "outputFilePath",
                      "type": "string",
                      "description": "If provided, the result parameter is not filled",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "Github organization details",
                      "name": "organization"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. https://github.ibm.com/api/v3",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Github API end-point"
              },
              {
                  "key": "token",
                  "description": "",
                  "label": "Github Access Token",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "bmrgadmin",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "youll-come-a-waltzing-maltilda-with-me",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Personal access tokens"
              },
              {
                  "key": "organizationName",
                  "description": "",
                  "label": "Organization Name",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "outputFilePath",
                  "description": "If provided, the result parameter is not filled",
                  "label": "Response File Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "File path to store the output response"
              }
          ],
          "icon": "API/HTTP call"
      },
      {
          "name": "get-all-teams-in-organization",
          "displayName": "Get All Teams in Organization",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2021-03-24T13:32:48.238+00:00",
          "verified": true,
          "description": "Lists all teams in an organization that are visible to the authenticated token. For further reading on the underlying API see https://docs.github.com/en/rest/reference/teams#list-teams",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-25T09:38:45.964+00:00"
          },
          "category": "GitHub",
          "spec": {
              "arguments": [
                  "github",
                  "findTeamsInOrg"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": "youll-come-a-waltzing-maltilda-with-me"
                  },
                  {
                      "name": "organizationName",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "pageNumber",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "teamsPerPage",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "outputFilePath",
                      "type": "string",
                      "description": "If provided, the result parameter is not filled",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "List of teams in the organization",
                      "name": "teams"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. https://github.ibm.com/api/v3",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Github API end-point"
              },
              {
                  "key": "token",
                  "description": "",
                  "label": "Github Access Token",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "bmrgadmin",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "youll-come-a-waltzing-maltilda-with-me",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Personal access tokens"
              },
              {
                  "key": "organizationName",
                  "description": "",
                  "label": "Organization Name",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "pageNumber",
                  "description": "",
                  "label": "Page Number",
                  "type": "number",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "teamsPerPage",
                  "description": "",
                  "label": "Number of teams per page",
                  "type": "number",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "outputFilePath",
                  "description": "If provided, the result parameter is not filled",
                  "label": "Response File Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "File path to store the output response"
              }
          ],
          "icon": "API/HTTP call"
      },
      {
          "name": "get-team-in-organization",
          "displayName": "Get Team In Organization",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2021-03-24T13:37:23.232+00:00",
          "verified": true,
          "description": "Retrieves the details of a team from a Github organization given the team name. For further reading on the underlying API see https://docs.github.com/en/rest/reference/teams#list-teams",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-25T09:39:49.422+00:00"
          },
          "category": "GitHub",
          "spec": {
              "arguments": [
                  "github",
                  "getTeamInOrgByName"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": "youll-come-a-waltzing-maltilda-with-me"
                  },
                  {
                      "name": "organizationName",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "teamName",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "outputFilePath",
                      "type": "string",
                      "description": "If provided, the result parameter is not filled",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "Github team details",
                      "name": "team"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. https://github.ibm.com/api/v3",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Github API end-point"
              },
              {
                  "key": "token",
                  "description": "",
                  "label": "Github Access Token",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "bmrgadmin",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "youll-come-a-waltzing-maltilda-with-me",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Personal access tokens"
              },
              {
                  "key": "organizationName",
                  "description": "",
                  "label": "Organization Name",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "teamName",
                  "description": "",
                  "label": "Team Name",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "outputFilePath",
                  "description": "If provided, the result parameter is not filled",
                  "label": "Response File Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "File path to store the output response"
              }
          ],
          "icon": "API/HTTP call"
      },
      {
          "name": "remove-member-from-team",
          "displayName": "Remove Member from Team",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-03-24T13:40:58.891+00:00",
          "verified": true,
          "description": "Remove a member from a team within the organization. For further reading on the underlying API see https://docs.github.com/en/rest/reference/teams#remove-team-membership-for-a-user",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e71f175756f7e000192eb6c",
              "reason": "",
              "date": "2021-03-29T23:50:07.967+00:00"
          },
          "category": "GitHub",
          "spec": {
              "arguments": [
                  "github",
                  "removeMemberFromTeamInOrg"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": "youll-come-a-waltzing-maltilda-with-me"
                  },
                  {
                      "name": "organizationName",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "teamName",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "userEmail",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. https://github.ibm.com/api/v3",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Github API end-point"
              },
              {
                  "key": "token",
                  "description": "",
                  "label": "Github Access Token",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "bmrgadmin",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "youll-come-a-waltzing-maltilda-with-me",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Personal access tokens"
              },
              {
                  "key": "organizationName",
                  "description": "",
                  "label": "Organization Name",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "teamName",
                  "description": "",
                  "label": "Team Name",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "userEmail",
                  "description": "",
                  "label": "User Email Address",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              }
          ],
          "icon": "Delete"
      },
      {
          "name": "delete-team-from-organization",
          "displayName": "Delete Team from Organization",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-03-24T13:40:58.891+00:00",
          "verified": true,
          "description": "Deletes a Github team from a Github organization based on the teamName parameter. For further reading on the underlying API see https://docs.github.com/rest/reference/teams/#delete-a-team",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "5e71f175756f7e000192eb6c",
              "reason": "",
              "date": "2021-03-29T23:49:25.366+00:00"
          },
          "category": "GitHub",
          "spec": {
              "arguments": [
                  "github",
                  "deleteTeamByNameInOrg"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": "youll-come-a-waltzing-maltilda-with-me"
                  },
                  {
                      "name": "organizationName",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "teamName",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. https://github.ibm.com/api/v3",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Github API end-point"
              },
              {
                  "key": "token",
                  "description": "",
                  "label": "Github Access Token",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "bmrgadmin",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "youll-come-a-waltzing-maltilda-with-me",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Personal access tokens"
              },
              {
                  "key": "organizationName",
                  "description": "",
                  "label": "Organization Name",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "teamName",
                  "description": "",
                  "label": "Team Name",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              }
          ],
          "icon": "Delete"
      },
      {
          "name": "create-team-in-organization",
          "displayName": "Create Team in Organization",
          "type": "template",
          "version": 3,
          "status": "active",
          "creationDate": "2021-03-24T13:44:44.514+00:00",
          "verified": true,
          "description": "Creates a Github team in the organization identified by the organizationName parameter. For further reading on the underlying API see https://docs.github.com/en/rest/reference/teams#create-a-team",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-25T09:37:45.256+00:00"
          },
          "category": "GitHub",
          "spec": {
              "arguments": [
                  "github",
                  "createTeamInOrg"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": "youll-come-a-waltzing-maltilda-with-me"
                  },
                  {
                      "name": "organizationName",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "teamName",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "description",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "maintainers",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "repositoryNames",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "privacy",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "permission",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "parentTeamId",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "outputFilePath",
                      "type": "string",
                      "description": "If provided, the result parameter is not filled",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "The newly created team",
                      "name": "team"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. https://github.ibm.com/api/v3",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Github API end-point"
              },
              {
                  "key": "token",
                  "description": "",
                  "label": "Github Access Token",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "bmrgadmin",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "youll-come-a-waltzing-maltilda-with-me",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Personal access tokens"
              },
              {
                  "key": "organizationName",
                  "description": "",
                  "label": "Organization Name",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "teamName",
                  "description": "",
                  "label": "Team Name",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "description",
                  "description": "",
                  "label": "Team Description",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "maintainers",
                  "description": "",
                  "label": "Maintainers",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "List of IDs for org members to become maintainers"
              },
              {
                  "key": "repositoryNames",
                  "description": "",
                  "label": "Repository Names",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The full name of repositories to add the team to"
              },
              {
                  "key": "privacy",
                  "description": "",
                  "label": "Level of privacy",
                  "type": "select",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": [
                      {
                          "key": "secret",
                          "value": "secret"
                      },
                      {
                          "key": "closed",
                          "value": "closed"
                      }
                  ],
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Level of privacy this team should have"
              },
              {
                  "key": "permission",
                  "description": "",
                  "label": "Repository team's default permissions",
                  "type": "select",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": [
                      {
                          "key": "pull",
                          "value": "pull"
                      },
                      {
                          "key": "push",
                          "value": "push"
                      },
                      {
                          "key": "admin",
                          "value": "admin"
                      }
                  ],
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "parentTeamId",
                  "description": "",
                  "label": "The ID of a team to set as the parent team",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "outputFilePath",
                  "description": "If provided, the result parameter is not filled",
                  "label": "Response File Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "File path to store the output response"
              }
          ],
          "icon": "Add"
      },
      {
          "name": "invite-member-to-team",
          "displayName": "Invite Member to Team",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2021-03-24T14:28:39.504+00:00",
          "verified": true,
          "description": "Invite a Github member to be a team member in the organization. For further reading on the underlying API see https://docs.github.com/en/rest/reference/teams#add-or-update-team-membership-for-a-user",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-25T09:40:18.548+00:00"
          },
          "category": "GitHub",
          "spec": {
              "arguments": [
                  "github",
                  "inviteMemberToTeamInOrg"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": "youll-come-a-waltzing-maltilda-with-me"
                  },
                  {
                      "name": "organizationName",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "teamName",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "userEmail",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "role",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "outputFilePath",
                      "type": "string",
                      "description": "If provided, the result parameter is not filled",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "Result containing the url, role and state of the action",
                      "name": "result"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. https://github.ibm.com/api/v3",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Github API end-point"
              },
              {
                  "key": "token",
                  "description": "",
                  "label": "Github Access Token",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "bmrgadmin",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "youll-come-a-waltzing-maltilda-with-me",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Personal access tokens"
              },
              {
                  "key": "organizationName",
                  "description": "",
                  "label": "Organization Name",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "teamName",
                  "description": "",
                  "label": "Team Name",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "userEmail",
                  "description": "",
                  "label": "User Email Address",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "role",
                  "description": "",
                  "label": "User Role",
                  "type": "select",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": [
                      {
                          "key": "maintainer",
                          "value": "maintainer"
                      },
                      {
                          "key": "member",
                          "value": "member"
                      }
                  ],
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The role that this user should have in the team"
              },
              {
                  "key": "outputFilePath",
                  "description": "If provided, the result parameter is not filled",
                  "label": "Response File Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "File path to store the output response"
              }
          ],
          "icon": "Add"
      },
      {
          "name": "invite-user-to-organization",
          "displayName": "Invite User to Organization",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2021-03-24T14:46:18.032+00:00",
          "verified": true,
          "description": "Invite an User to the member list of a Github organization. For further reading on the underlying API see https://docs.github.com/en/rest/reference/orgs#set-organization-membership-for-a-user",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-25T09:40:44.590+00:00"
          },
          "category": "GitHub",
          "spec": {
              "arguments": [
                  "github",
                  "inviteMemberToOrg"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": "youll-come-a-waltzing-maltilda-with-me"
                  },
                  {
                      "name": "organizationName",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "userEmail",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "role",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "outputFilePath",
                      "type": "string",
                      "description": "If provided, the result parameter is not filled",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "Result containing the details and outcome of the action",
                      "name": "result"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. https://github.ibm.com/api/v3",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Github API end-point"
              },
              {
                  "key": "token",
                  "description": "",
                  "label": "Github Access Token",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "bmrgadmin",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "youll-come-a-waltzing-maltilda-with-me",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Personal access tokens"
              },
              {
                  "key": "organizationName",
                  "description": "",
                  "label": "Organization Name",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "userEmail",
                  "description": "",
                  "label": "User Email Address",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "role",
                  "description": "",
                  "label": "User Role",
                  "type": "select",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": [
                      {
                          "key": "admin",
                          "value": "admin"
                      },
                      {
                          "key": "member",
                          "value": "member"
                      }
                  ],
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The role to give the user in the organization"
              },
              {
                  "key": "outputFilePath",
                  "description": "If provided, the result parameter is not filled",
                  "label": "Response File Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "File path to store the output response"
              }
          ],
          "icon": "Add"
      },
      {
          "name": "invite-collaborator-to-project",
          "displayName": "Invite Collaborator to Project",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-04-01T15:42:26.439+00:00",
          "verified": true,
          "description": "Invites a Github user identified vie email to collaborate to a repository. For further reading on the underlying API see https://docs.github.com/en/rest/reference/repos#add-a-repository-collaborator",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-15T17:16:43.197+00:00"
          },
          "category": "GitHub",
          "spec": {
              "arguments": [
                  "github",
                  "inviteCollaboratorToProject"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": "youll-come-a-waltzing-maltilda-with-me"
                  },
                  {
                      "name": "repoURL",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "userEmail",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "permission",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": "",
              "results": [],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. https://github.ibm.com/api/v3",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Github API end-point"
              },
              {
                  "key": "token",
                  "description": "",
                  "label": "Github Access Token",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "bmrgadmin",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "youll-come-a-waltzing-maltilda-with-me",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Personal access tokens"
              },
              {
                  "key": "repoURL",
                  "description": "",
                  "label": "Repository URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. https://github.ibm.com/org-name/repo-name",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The Github repository url to add the collaborator"
              },
              {
                  "key": "userEmail",
                  "description": "",
                  "label": "Collaborator Email Address",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "permission",
                  "description": "",
                  "label": "Permission",
                  "type": "select",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": [
                      {
                          "key": "pull",
                          "value": "pull"
                      },
                      {
                          "key": "push",
                          "value": "push"
                      },
                      {
                          "key": "admin",
                          "value": "admin"
                      },
                      {
                          "key": "maintain",
                          "value": "maintain"
                      },
                      {
                          "key": "triage",
                          "value": "triage"
                      }
                  ],
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The permission to grant the collaborator"
              }
          ],
          "icon": "Add"
      },
      {
          "name": "remove-collaborator-from-project",
          "displayName": "Remove Collaborator From Project",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-04-01T15:53:47.643+00:00",
          "verified": true,
          "description": "Removes a Github Collaborator from a repository. For further reading on the underlying API see https://docs.github.com/en/rest/reference/repos#remove-a-repository-collaborator",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-15T17:17:33.173+00:00"
          },
          "category": "GitHub",
          "spec": {
              "arguments": [
                  "github",
                  "removeCollaboratorFromProject"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": "youll-come-a-waltzing-maltilda-with-me"
                  },
                  {
                      "name": "repoURL",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "userEmail",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": "",
              "results": [],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. https://github.ibm.com/api/v3",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Github API end-point"
              },
              {
                  "key": "token",
                  "description": "",
                  "label": "Github Access Token",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "bmrgadmin",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "youll-come-a-waltzing-maltilda-with-me",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Personal access tokens"
              },
              {
                  "key": "repoURL",
                  "description": "",
                  "label": "Repository URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. https://github.ibm.com/org-name/repo-name",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The Github repository url from where to remove"
              },
              {
                  "key": "userEmail",
                  "description": "",
                  "label": "Collaborator Email Address",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              }
          ],
          "icon": "Delete"
      },
      {
          "name": "get-github-repository",
          "displayName": "Get Github Repository",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2021-04-07T15:11:41.595+00:00",
          "verified": true,
          "description": "Get the Gihub repository details based on the Github URL. For further reading on the underlying API see https://docs.github.com/en/rest/reference/repos#get-a-repository",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-25T09:39:09.095+00:00"
          },
          "category": "GitHub",
          "spec": {
              "arguments": [
                  "github",
                  "getRepositoryFromRepoURL"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "repoURL",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "outputFilePath",
                      "type": "string",
                      "description": "If provided, the result parameter is not filled",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "Github repository details",
                      "name": "result"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. https://github.ibm.com/api/v3",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Github API end-point"
              },
              {
                  "key": "token",
                  "description": "",
                  "label": "Github Access Token",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Personal access tokens"
              },
              {
                  "key": "repoURL",
                  "description": "",
                  "label": "Repository URL",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. https://github.ibm.com/org-name/repo-name",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The Github repository url to get the details for"
              },
              {
                  "key": "outputFilePath",
                  "description": "If provided, the result parameter is not filled",
                  "label": "Response File Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "File path to store the output response"
              }
          ],
          "icon": "API/HTTP call"
      },
      {
          "name": "run-python-script",
          "displayName": "Run Python Script",
          "type": "script",
          "version": 2,
          "status": "active",
          "creationDate": "2021-04-16T12:01:47.277+00:00",
          "verified": true,
          "description": "Execute a Python script. The returned result of the script is returned as the result value of the task.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-15T17:30:20.043+00:00"
          },
          "category": "Utilities",
          "spec": {
              "arguments": [
                  "none"
              ],
              "command": [],
              "params": [
                  {
                      "name": "pythonVersion",
                      "type": "string",
                      "description": "Select the Python version to execute your script.",
                      "defaultValue": null
                  },
                  {
                      "name": "pythonPackages",
                      "type": "string",
                      "description": "Enter a list of packages to install before executing your script. Follow the \"requirement specifier format\".",
                      "defaultValue": null
                  },
                  {
                      "name": "pythonArguments",
                      "type": "string",
                      "description": "Additional command line arguments provided to your script when this is executed.",
                      "defaultValue": null
                  },
                  {
                      "name": "pythonScript",
                      "type": "string",
                      "description": "Enter the Python script you want to execute. The execution result of the script is set as the exit value of the task.",
                      "defaultValue": null
                  },
                  {
                      "name": "outputFilePath",
                      "type": "string",
                      "description": "If not provided, the output will be written to standard `/tekton/results/output`.",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": "boomerangio/worker-python:0.0.3",
              "results": [
                  {
                      "description": "Python script standard output standard and error content.",
                      "name": "output"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "pythonVersion",
                  "description": "Select the Python version to execute your script.",
                  "label": "Python Version",
                  "type": "select",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": [
                      {
                          "key": "Python 2 (version 2.7.16)",
                          "value": "Python 2 (version 2.7.16)"
                      },
                      {
                          "key": "Python 3 (version 3.9.5)",
                          "value": "Python 3 (version 3.9.5)"
                      }
                  ],
                  "required": true,
                  "placeholder": "Select Python version...",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": true,
                  "hiddenValue": null,
                  "helperText": "Python 3 or Python 2 only."
              },
              {
                  "key": "pythonPackages",
                  "description": "Enter a list of packages to install before executing your script. Follow the \"requirement specifier format\".",
                  "label": "Additional Python Packages",
                  "type": "texteditor::text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "e.g.: SomePackageILike >= 4.20.69",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "\"Requirement specifier format\": www.ibm.biz/BdfMmj"
              },
              {
                  "key": "pythonArguments",
                  "description": "Additional command line arguments provided to your script when this is executed.",
                  "label": "Python Arguments",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "e.g.: --my_string=\"Much wow!\" --my_int=420",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Command line arguments."
              },
              {
                  "key": "pythonScript",
                  "description": "Enter the Python script you want to execute. The execution result of the script is set as the exit value of the task.",
                  "label": "Python Script",
                  "type": "texteditor",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g.: print(\"Very Python, so amaze!\")",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Python script to execute."
              },
              {
                  "key": "outputFilePath",
                  "description": "If not provided, the output will be written to standard `/tekton/results/output`.",
                  "label": "Output file path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "e.g.: /my_app/output.txt",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "File path where the script output will be written."
              }
          ],
          "icon": "Launch"
      },
      {
          "name": "file-jsonpath-to-parameter",
          "displayName": "File JSONPath To Parameter",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2021-06-10T14:58:05.686+00:00",
          "verified": true,
          "description": "Takes the first value from the file content returned by a valid JSONPath expression and sets as an output property",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2021-06-15T17:19:50.888+00:00"
          },
          "category": "Utilities",
          "spec": {
              "arguments": [
                  "system",
                  "jsonFilePathToProperty"
              ],
              "command": [],
              "params": [
                  {
                      "name": "filePath",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "query",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "The value based on the applied expression",
                      "name": "evaluation"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "filePath",
                  "description": "",
                  "label": "File Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "File content to query"
              },
              {
                  "key": "query",
                  "description": "",
                  "label": "Query Expression",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "e.g. $.store.book",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "A valid JSON path expression"
              }
          ],
          "icon": "Filter"
      },
      {
          "name": "send-email-with-postmark-template",
          "displayName": "Send Email with Postmark Template",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2021-08-28T00:56:11.475+00:00",
          "verified": true,
          "description": "Send an email from a template using a template ID and variables.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "614415021950a72949b00efb",
              "reason": "Added new optional message stream field.",
              "date": "2021-11-17T00:06:37.929+00:00"
          },
          "category": "Communication",
          "spec": {
              "arguments": [
                  "mail",
                  "sendPostmarkEmailWithTemplate"
              ],
              "command": [],
              "params": [
                  {
                      "name": "token",
                      "type": "string",
                      "description": "If you have a Postmark account, you will be able to find or create an API token via their Server UI",
                      "defaultValue": ""
                  },
                  {
                      "name": "to",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "from",
                      "type": "string",
                      "description": "sender@example.com or \"Boomerang Joe <sender@example.com>\"",
                      "defaultValue": ""
                  },
                  {
                      "name": "templateId",
                      "type": "string",
                      "description": "Required if TemplateAlias is not specified.",
                      "defaultValue": ""
                  },
                  {
                      "name": "templateAlias",
                      "type": "string",
                      "description": "Required if TemplateID is not specified.",
                      "defaultValue": null
                  },
                  {
                      "name": "templateModel",
                      "type": "string",
                      "description": "You can find sample variables in the Postmark Template UI",
                      "defaultValue": null
                  },
                  {
                      "name": "tag",
                      "type": "string",
                      "description": "Categorize outgoing emails and get detailed statistics",
                      "defaultValue": ""
                  },
                  {
                      "name": "messageStream",
                      "type": "string",
                      "description": "",
                      "defaultValue": "outbound"
                  }
              ],
              "envs": [],
              "image": "",
              "results": [
                  {
                      "description": "Recipient email address",
                      "name": "To"
                  },
                  {
                      "description": "Timestamp",
                      "name": "SubmittedAt"
                  },
                  {
                      "description": "ID of message",
                      "name": "MessageID"
                  },
                  {
                      "description": "See Postmark API Error Codes",
                      "name": "ErrorCode"
                  },
                  {
                      "description": "Response message",
                      "name": "Message"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "token",
                  "description": "If you have a Postmark account, you will be able to find or create an API token via their Server UI",
                  "label": "API Token",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "to",
                  "description": "",
                  "label": "To",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Supports up to 50 recipients. Comma delimited."
              },
              {
                  "key": "from",
                  "description": "sender@example.com or \"Boomerang Joe <sender@example.com>\"",
                  "label": "From",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Email address or with name information"
              },
              {
                  "key": "templateId",
                  "description": "Required if TemplateAlias is not specified.",
                  "label": "Template Id",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "templateAlias",
                  "description": "Required if TemplateID is not specified.",
                  "label": "Template Alias",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              },
              {
                  "key": "templateModel",
                  "description": "You can find sample variables in the Postmark Template UI",
                  "label": "Template Variables",
                  "type": "texteditor::javascript",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "tag",
                  "description": "Categorize outgoing emails and get detailed statistics",
                  "label": "Tag",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "messageStream",
                  "description": "",
                  "label": "Message Stream",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "outbound",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Message Stream ID that's used for sending"
              }
          ],
          "icon": "Message"
      },
      {
          "name": "add-issue-to-project",
          "displayName": "Add Issue to Project",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2021-10-21T00:26:30.030+00:00",
          "verified": true,
          "description": "Adds a GitHub issue to a GitHub Issue Project",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "614415021950a72949b00efb",
              "reason": "",
              "date": "2021-10-21T04:34:44.582+00:00"
          },
          "category": "GitHub",
          "spec": {
              "arguments": [
                  "github",
                  "addIssueToProject"
              ],
              "command": [],
              "params": [
                  {
                      "name": "token",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "projectId",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "issueId",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": null,
              "results": [],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "token",
                  "description": "",
                  "label": "Token",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "GitHub Personal Access Token"
              },
              {
                  "key": "projectId",
                  "description": "",
                  "label": "Project ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The unique Node ID"
              },
              {
                  "key": "issueId",
                  "description": "",
                  "label": "Issue ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Unique Node ID"
              }
          ],
          "icon": "Add"
      },
      {
          "name": "get-data",
          "displayName": "Get Data",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2021-10-28T08:52:31.561+00:00",
          "verified": true,
          "description": "Get the cell data in the specified range from a Google spreadsheet.\nThe supported range notations are A1 notation and R1C1 notation.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "admin@flowabl.io",
              "reason": "Consolidated and refactored authentication to remove three fields. ",
              "date": "2022-04-20T09:13:45.242+00:00"
          },
          "category": "Google Sheets",
          "spec": {
              "arguments": [
                  "googlesheets",
                  "getData"
              ],
              "command": [],
              "params": [
                  {
                      "name": "privateKey",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "clientEmail",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "spreadsheetId",
                      "type": "string",
                      "description": "You can find the spreadsheet ID in a Google Sheets URL:  https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0",
                      "defaultValue": null
                  },
                  {
                      "name": "ranges",
                      "type": "string",
                      "description": "Supports A1 notation: https://developers.google.com/sheets/api/guides/concepts#expandable-1 and R1C1 notation: https://developers.google.com/sheets/api/guides/concepts#expandable-2",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": null,
              "results": [
                  {
                      "description": "The list of row cell data from the provided ranges",
                      "name": "rows"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "privateKey",
                  "description": "",
                  "label": "Private Key",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's private key"
              },
              {
                  "key": "clientEmail",
                  "description": "",
                  "label": "Client Email",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's client email"
              },
              {
                  "key": "spreadsheetId",
                  "description": "You can find the spreadsheet ID in a Google Sheets URL:  https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0",
                  "label": "Spreadsheet ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The ID of the desired spreadsheet"
              },
              {
                  "key": "ranges",
                  "description": "Supports A1 notation: https://developers.google.com/sheets/api/guides/concepts#expandable-1 and R1C1 notation: https://developers.google.com/sheets/api/guides/concepts#expandable-2",
                  "label": "Data Ranges",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "Sheet1!6:7,Sheet2",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The desired data ranges separated by comma"
              }
          ],
          "icon": "API/HTTP call"
      },
      {
          "name": "add-sheet",
          "displayName": "Add Sheet",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2021-10-28T12:23:29.333+00:00",
          "verified": true,
          "description": "Add new sheet to a Google spreadsheet.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "admin@flowabl.io",
              "reason": "Consolidated and refactored authentication to remove three fields. ",
              "date": "2022-04-20T09:12:45.033+00:00"
          },
          "category": "Google Sheets",
          "spec": {
              "arguments": [
                  "googlesheets",
                  "addSheet"
              ],
              "command": [],
              "params": [
                  {
                      "name": "privateKey",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientEmail",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "spreadsheetId",
                      "type": "string",
                      "description": "You can find the spreadsheet ID in a Google Sheets URL:  https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=sheetId",
                      "defaultValue": ""
                  },
                  {
                      "name": "title",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  }
              ],
              "envs": [],
              "image": null,
              "results": [],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "privateKey",
                  "description": "",
                  "label": "Private Key",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's private key"
              },
              {
                  "key": "clientEmail",
                  "description": "",
                  "label": "Client Email",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's client email"
              },
              {
                  "key": "spreadsheetId",
                  "description": "You can find the spreadsheet ID in a Google Sheets URL:  https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=sheetId",
                  "label": "Spreadsheet ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The ID of the desired spreadsheet"
              },
              {
                  "key": "title",
                  "description": "",
                  "label": "Sheet Title",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The title of the new sheet"
              }
          ],
          "icon": "Add"
      },
      {
          "name": "append-data",
          "displayName": "Append Data",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2021-10-28T12:28:30.895+00:00",
          "verified": true,
          "description": "Append data to an existing Google spreadsheet.\nThe supported range notations are A1 notation and R1C1 notation.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "admin@flowabl.io",
              "reason": "Consolidated and refactored authentication to remove three fields.",
              "date": "2022-04-20T09:10:40.080+00:00"
          },
          "category": "Google Sheets",
          "spec": {
              "arguments": [
                  "googlesheets",
                  "append"
              ],
              "command": [],
              "params": [
                  {
                      "name": "privateKey",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientEmail",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "spreadsheetId",
                      "type": "string",
                      "description": "You can find the spreadsheet ID in a Google Sheets URL:  https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=sheetId",
                      "defaultValue": ""
                  },
                  {
                      "name": "range",
                      "type": "string",
                      "description": "The input range is used to search for existing data and find a \"table\" within that range. Values will be appended to the next row of the table, starting with the first column of the table.",
                      "defaultValue": ""
                  },
                  {
                      "name": "values",
                      "type": "string",
                      "description": "Split each data row with an endline and each cell value with a semicolon",
                      "defaultValue": ""
                  }
              ],
              "envs": [],
              "image": null,
              "results": [
                  {
                      "description": "Append information",
                      "name": "response"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "privateKey",
                  "description": "",
                  "label": "Private Key",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's private key"
              },
              {
                  "key": "clientEmail",
                  "description": "",
                  "label": "Client Email",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's client email"
              },
              {
                  "key": "spreadsheetId",
                  "description": "You can find the spreadsheet ID in a Google Sheets URL:  https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=sheetId",
                  "label": "Spreadsheet ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The ID of the desired spreadsheet"
              },
              {
                  "key": "range",
                  "description": "The input range is used to search for existing data and find a \"table\" within that range. Values will be appended to the next row of the table, starting with the first column of the table.",
                  "label": "Data Range",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "Sheet1!6:7",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The desired data range"
              },
              {
                  "key": "values",
                  "description": "Split each data row with an endline and each cell value with a semicolon",
                  "label": "Cell Data",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "Val1;Val2;Val3",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Input data"
              }
          ],
          "icon": "Add"
      },
      {
          "name": "clear-data",
          "displayName": "Clear Data",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2021-10-28T12:35:00.875+00:00",
          "verified": true,
          "description": "Clear the cell data in the specified range from a Google spreadsheet.\nThe supported range notations are A1 notation and R1C1 notation.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "admin@flowabl.io",
              "reason": "Consolidated and refactored authentication to remove three fields.",
              "date": "2022-04-20T09:11:05.837+00:00"
          },
          "category": "Google Sheets",
          "spec": {
              "arguments": [
                  "googlesheets",
                  "clearData"
              ],
              "command": [],
              "params": [
                  {
                      "name": "privateKey",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientEmail",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "spreadsheetId",
                      "type": "string",
                      "description": "You can find the spreadsheet ID in a Google Sheets URL:  https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=sheetId",
                      "defaultValue": ""
                  },
                  {
                      "name": "ranges",
                      "type": "string",
                      "description": "Supports A1 notation: https://developers.google.com/sheets/api/guides/concepts#expandable-1 and R1C1 notation: https://developers.google.com/sheets/api/guides/concepts#expandable-2",
                      "defaultValue": ""
                  }
              ],
              "envs": [],
              "image": null,
              "results": [],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "privateKey",
                  "description": "",
                  "label": "Private Key",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's private key"
              },
              {
                  "key": "clientEmail",
                  "description": "",
                  "label": "Client Email",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's client email"
              },
              {
                  "key": "spreadsheetId",
                  "description": "You can find the spreadsheet ID in a Google Sheets URL:  https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=sheetId",
                  "label": "Spreadsheet ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The ID of the desired spreadsheet"
              },
              {
                  "key": "ranges",
                  "description": "Supports A1 notation: https://developers.google.com/sheets/api/guides/concepts#expandable-1 and R1C1 notation: https://developers.google.com/sheets/api/guides/concepts#expandable-2",
                  "label": "Data Ranges",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "Sheet1!6:7,Sheet2",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The data ranges to clear separated by a comma"
              }
          ],
          "icon": "Delete"
      },
      {
          "name": "copy-sheet-to-another-spreadsheet",
          "displayName": "Copy Sheet To Another Spreadsheet",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2021-10-28T12:39:26.873+00:00",
          "verified": true,
          "description": "Copy a sheet from a spreadsheet to another.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "admin@flowabl.io",
              "reason": "Consolidated and refactored authentication to remove three fields.",
              "date": "2022-04-20T09:12:13.938+00:00"
          },
          "category": "Google Sheets",
          "spec": {
              "arguments": [
                  "googlesheets",
                  "copySheetTo"
              ],
              "command": [],
              "params": [
                  {
                      "name": "privateKey",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientEmail",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "fromSpreadsheetId",
                      "type": "string",
                      "description": "You can find the spreadsheet ID in a Google Sheets URL:  https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=sheetId",
                      "defaultValue": ""
                  },
                  {
                      "name": "toSpreadsheetId",
                      "type": "string",
                      "description": "You can find the spreadsheet ID in a Google Sheets URL:  https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=sheetId",
                      "defaultValue": ""
                  },
                  {
                      "name": "sheetId",
                      "type": "string",
                      "description": "You can find the sheet ID in a Google Sheets URL:  https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=sheetId",
                      "defaultValue": ""
                  }
              ],
              "envs": [],
              "image": null,
              "results": [],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "privateKey",
                  "description": "",
                  "label": "Private Key",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's private key"
              },
              {
                  "key": "clientEmail",
                  "description": "",
                  "label": "Client Email",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's client email"
              },
              {
                  "key": "fromSpreadsheetId",
                  "description": "You can find the spreadsheet ID in a Google Sheets URL:  https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=sheetId",
                  "label": "Source Spreadsheet ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The ID of the spreadsheet containing the sheet"
              },
              {
                  "key": "toSpreadsheetId",
                  "description": "You can find the spreadsheet ID in a Google Sheets URL:  https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=sheetId",
                  "label": "Destination Spreadsheet ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The ID of the spreadsheet where we copy the sheet"
              },
              {
                  "key": "sheetId",
                  "description": "You can find the sheet ID in a Google Sheets URL:  https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=sheetId",
                  "label": "Sheet ID",
                  "type": "number",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The ID of the sheet we want to copy"
              }
          ],
          "icon": "API/HTTP call"
      },
      {
          "name": "create-spreadsheet",
          "displayName": "Create Spreadsheet",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2021-10-28T12:44:03.569+00:00",
          "verified": true,
          "description": "Create a new Google Spreadsheet with the provided name.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "admin@flowabl.io",
              "reason": "Consolidated and refactored authentication to remove three fields. ",
              "date": "2022-04-20T09:13:23.994+00:00"
          },
          "category": "Google Sheets",
          "spec": {
              "arguments": [
                  "googlesheets",
                  "create"
              ],
              "command": [],
              "params": [
                  {
                      "name": "privateKey",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientEmail",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "title",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  }
              ],
              "envs": [],
              "image": null,
              "results": [
                  {
                      "description": "Newly created spreadsheet information",
                      "name": "spreadsheet"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "privateKey",
                  "description": "",
                  "label": "Private Key",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's private key"
              },
              {
                  "key": "clientEmail",
                  "description": "",
                  "label": "Client Email",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's client email"
              },
              {
                  "key": "title",
                  "description": "",
                  "label": "Spreadsheet Title",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The new spreadsheet's title"
              }
          ],
          "icon": "Add"
      },
      {
          "name": "delete-sheet",
          "displayName": "Delete Sheet",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2021-10-28T12:56:06.049+00:00",
          "verified": true,
          "description": "Delete a sheet from a Google spreadsheet.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "admin@flowabl.io",
              "reason": "Consolidated and refactored authentication to remove three fields. ",
              "date": "2022-04-20T09:13:36.966+00:00"
          },
          "category": "Google Sheets",
          "spec": {
              "arguments": [
                  "googlesheets",
                  "deleteSheet"
              ],
              "command": [],
              "params": [
                  {
                      "name": "privateKey",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientEmail",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "spreadsheetId",
                      "type": "string",
                      "description": "You can find the spreadsheet ID in a Google Sheets URL:  https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=sheetId",
                      "defaultValue": ""
                  },
                  {
                      "name": "sheetId",
                      "type": "string",
                      "description": "You can find the sheet ID in a Google Sheets URL:  https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=sheetId",
                      "defaultValue": ""
                  }
              ],
              "envs": [],
              "image": null,
              "results": [],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "privateKey",
                  "description": "",
                  "label": "Private Key",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's private key"
              },
              {
                  "key": "clientEmail",
                  "description": "",
                  "label": "Client Email",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's client email"
              },
              {
                  "key": "spreadsheetId",
                  "description": "You can find the spreadsheet ID in a Google Sheets URL:  https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=sheetId",
                  "label": "Spreadsheet ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The ID of the desired spreadsheet"
              },
              {
                  "key": "sheetId",
                  "description": "You can find the sheet ID in a Google Sheets URL:  https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=sheetId",
                  "label": "Sheet ID",
                  "type": "number",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The ID of the sheet to delete"
              }
          ],
          "icon": "Delete"
      },
      {
          "name": "update-data",
          "displayName": "Update Data",
          "type": "template",
          "version": 2,
          "status": "active",
          "creationDate": "2021-10-28T12:59:52.700+00:00",
          "verified": true,
          "description": "Update cell data from a Google spreadsheet.\nThe supported range notations are A1 notation and R1C1 notation.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "admin@flowabl.io",
              "reason": "Consolidated and refactored authentication to remove three fields. ",
              "date": "2022-04-20T09:14:02.023+00:00"
          },
          "category": "Google Sheets",
          "spec": {
              "arguments": [
                  "googlesheets",
                  "update"
              ],
              "command": [],
              "params": [
                  {
                      "name": "privateKey",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientEmail",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "spreadsheetId",
                      "type": "string",
                      "description": "You can find the spreadsheet ID in a Google Sheets URL:  https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=sheetId",
                      "defaultValue": ""
                  },
                  {
                      "name": "range",
                      "type": "string",
                      "description": "Supports A1 notation: https://developers.google.com/sheets/api/guides/concepts#expandable-1 and R1C1 notation: https://developers.google.com/sheets/api/guides/concepts#expandable-2",
                      "defaultValue": ""
                  },
                  {
                      "name": "values",
                      "type": "string",
                      "description": "Split each data row with an endline and each cell value with a semicolon",
                      "defaultValue": ""
                  }
              ],
              "envs": [],
              "image": null,
              "results": [
                  {
                      "description": "Update information",
                      "name": "response"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "privateKey",
                  "description": "",
                  "label": "Private Key",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's private key"
              },
              {
                  "key": "clientEmail",
                  "description": "",
                  "label": "Client Email",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's client email"
              },
              {
                  "key": "spreadsheetId",
                  "description": "You can find the spreadsheet ID in a Google Sheets URL:  https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=sheetId",
                  "label": "Spreadsheet ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The ID of the desired spreadsheet"
              },
              {
                  "key": "range",
                  "description": "Supports A1 notation: https://developers.google.com/sheets/api/guides/concepts#expandable-1 and R1C1 notation: https://developers.google.com/sheets/api/guides/concepts#expandable-2",
                  "label": "Data Range",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "Sheet1!1:3",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The desired data range"
              },
              {
                  "key": "values",
                  "description": "Split each data row with an endline and each cell value with a semicolon",
                  "label": "Cell Data",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "Val1;Val2;Val3",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Input data"
              }
          ],
          "icon": "Edit"
      },
      {
          "name": "execute-basic-http-call",
          "displayName": "Execute Basic HTTP Call",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2022-01-26T13:33:23.236+00:00",
          "verified": true,
          "description": "Execute a Basic HTTP Call",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2022-01-27T16:25:13.252+00:00"
          },
          "category": "Utilities",
          "spec": {
              "arguments": [
                  "http",
                  "execute"
              ],
              "command": [],
              "params": [
                  {
                      "name": "url",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "method",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "header",
                      "type": "string",
                      "description": "Start a new line for each header",
                      "defaultValue": null
                  },
                  {
                      "name": "contentType",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "body",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "allowUntrustedCerts",
                      "type": "string",
                      "description": "",
                      "defaultValue": "false"
                  },
                  {
                      "name": "outputFilePath",
                      "type": "string",
                      "description": "If provided, the result parameter is not filled",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": null,
              "results": [
                  {
                      "description": "HTTP execution response content",
                      "name": "response"
                  },
                  {
                      "description": "The received HTTP status code",
                      "name": "statusCode"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "url",
                  "description": "",
                  "label": "URL",
                  "type": "url",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "method",
                  "description": "",
                  "label": "Method",
                  "type": "select",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": [
                      {
                          "key": "GET",
                          "value": "GET"
                      },
                      {
                          "key": "HEAD",
                          "value": "HEAD"
                      },
                      {
                          "key": "PUT",
                          "value": "PUT"
                      },
                      {
                          "key": "POST",
                          "value": "POST"
                      },
                      {
                          "key": "PATCH",
                          "value": "PATCH"
                      },
                      {
                          "key": "OPTIONS",
                          "value": "OPTIONS"
                      },
                      {
                          "key": "DELETE",
                          "value": "DELETE"
                      }
                  ],
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "header",
                  "description": "Start a new line for each header",
                  "label": "Headers",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Headers to add to the request, such as Authorizati"
              },
              {
                  "key": "contentType",
                  "description": "",
                  "label": "Content Type",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "body",
                  "description": "",
                  "label": "Body",
                  "type": "texteditor",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "allowUntrustedCerts",
                  "description": "",
                  "label": "Allow Untrusted SSL Certs",
                  "type": "boolean",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "false",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "outputFilePath",
                  "description": "If provided, the result parameter is not filled",
                  "label": "Response File Path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "File path to store the output response"
              }
          ],
          "icon": "API/HTTP call"
      },
      {
          "name": "mongodb-query-execution",
          "displayName": "MongoDB Query Execution",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2022-01-27T13:58:58.698+00:00",
          "verified": true,
          "description": "Executes a provided query against a mongo databases endpoint.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "608fb6fb70bfa94ac91f90cb",
              "reason": "",
              "date": "2022-03-15T09:22:08.896+00:00"
          },
          "category": "Utilities",
          "spec": {
              "arguments": [],
              "command": [],
              "params": [
                  {
                      "name": "host",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "port",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "database",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "username",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "password",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "tlsenabled",
                      "type": "string",
                      "description": "",
                      "defaultValue": "false"
                  },
                  {
                      "name": "authenticationMechanism",
                      "type": "string",
                      "description": "",
                      "defaultValue": "DEFAULT"
                  },
                  {
                      "name": "query",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "ouputfile",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  }
              ],
              "envs": [],
              "image": "rtsp/mongosh",
              "results": [],
              "script": "mkdir $(dirname \"$(params.ouputfile)\")\nread -r FIXEDQUERY <<'EOF'\n    $(params.query)\nEOF\nmongosh mongodb://$(params.host):$(params.port)/$(params.database)?tls=$(params.tlsenabled) --username=$(params.username) --password=$(params.password) --eval=\"$FIXEDQUERY\" --authenticationMechanism=$(params.authenticationMechanism) --quiet > $(params.ouputfile)",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "host",
                  "description": "",
                  "label": "MongoDB database host",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "A valid, reachable mongo db endpoint"
              },
              {
                  "key": "port",
                  "description": "",
                  "label": "MongoDB database port",
                  "type": "number",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. 27017",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "database",
                  "description": "",
                  "label": "Database name",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The database name used in the connection string"
              },
              {
                  "key": "username",
                  "description": "",
                  "label": "Database username",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The username to use for running the query"
              },
              {
                  "key": "password",
                  "description": "",
                  "label": "Database password",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "tlsenabled",
                  "description": "",
                  "label": "TLS enabled",
                  "type": "boolean",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "false",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "authenticationMechanism",
                  "description": "",
                  "label": "Authentication mechanism",
                  "type": "select",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": [
                      {
                          "key": "MONGODB-AWS",
                          "value": "MONGODB-AWS"
                      },
                      {
                          "key": "MONGODB-CR",
                          "value": "MONGODB-CR"
                      },
                      {
                          "key": "DEFAULT",
                          "value": "DEFAULT"
                      },
                      {
                          "key": "GSSAPI",
                          "value": "GSSAPI"
                      },
                      {
                          "key": "PLAIN",
                          "value": "PLAIN"
                      },
                      {
                          "key": "SCRAM-SHA-1",
                          "value": "SCRAM-SHA-1"
                      },
                      {
                          "key": "SCRAM-SHA-256",
                          "value": "SCRAM-SHA-256"
                      },
                      {
                          "key": "MONGODB-X509",
                          "value": "MONGODB-X509"
                      }
                  ],
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "DEFAULT",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "query",
                  "description": "",
                  "label": "Query",
                  "type": "texteditor::javascript",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "e.g. db.collection.find({})",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "ouputfile",
                  "description": "",
                  "label": "Response file path",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "File path to store the query's output response"
              }
          ],
          "icon": "Launch"
      },
      {
          "name": "copy-file",
          "displayName": "Copy File",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2022-04-20T09:28:02.838+00:00",
          "verified": false,
          "description": "Creates a copy of a file. Folders cannot be copied.\n\nThe file will be owned by the Service Account used. We recommend providing a shared parent folder or adding new permissions after the copy.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "admin@flowabl.io",
              "reason": "",
              "date": "2022-04-20T11:16:25.202+00:00"
          },
          "category": "Google Drive",
          "spec": {
              "arguments": [
                  "googledrive",
                  "copyFile"
              ],
              "command": [],
              "params": [
                  {
                      "name": "privateKey",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientEmail",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "fileId",
                      "type": "string",
                      "description": "The ID of the file.",
                      "defaultValue": ""
                  },
                  {
                      "name": "parents",
                      "type": "string",
                      "description": "The IDs of the parent folders which contain the file. If not specified the file will be placed directly in the user's My Drive folder.",
                      "defaultValue": ""
                  },
                  {
                      "name": "fileName",
                      "type": "string",
                      "description": "If not specified the file will end up being being prefixed with 'Copy of' and then the current name.",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": null,
              "results": [
                  {
                      "description": "The ID of the file.",
                      "name": "id"
                  },
                  {
                      "description": "The name of the file.",
                      "name": "name"
                  },
                  {
                      "description": "The IDs of the parent folders which contain the file.",
                      "name": "parents"
                  },
                  {
                      "description": "The time at which the file was created",
                      "name": "createdTime"
                  },
                  {
                      "description": "The last time the file was modified by anyone",
                      "name": "modifiedTime"
                  },
                  {
                      "description": "The owner of this file.",
                      "name": "owners"
                  },
                  {
                      "description": "The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.",
                      "name": "permissions"
                  },
                  {
                      "description": "Whether the file is shared",
                      "name": "shared"
                  },
                  {
                      "description": "A link for opening the file in a relevant Google editor or viewer in a browser.",
                      "name": "webViewLink"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "privateKey",
                  "description": "",
                  "label": "Private Key",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's private key"
              },
              {
                  "key": "clientEmail",
                  "description": "",
                  "label": "Client Email",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's client email"
              },
              {
                  "key": "fileId",
                  "description": "The ID of the file.",
                  "label": "File ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              },
              {
                  "key": "parents",
                  "description": "The IDs of the parent folders which contain the file. If not specified the file will be placed directly in the user's My Drive folder.",
                  "label": "Parent Folders",
                  "type": "textarea",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "New line delimited list of folder IDs"
              },
              {
                  "key": "fileName",
                  "description": "If not specified the file will end up being being prefixed with 'Copy of' and then the current name.",
                  "label": "New Name",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The name to set on the copied file"
              }
          ],
          "icon": "Add"
      },
      {
          "name": "delete-file",
          "displayName": "Delete File",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2022-04-20T09:28:02.838+00:00",
          "verified": false,
          "description": "Deletes a file.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "admin@flowabl.io",
              "reason": "",
              "date": "2022-04-20T22:56:02.562+00:00"
          },
          "category": "Google Drive",
          "spec": {
              "arguments": [
                  "googledrive",
                  "deleteFile"
              ],
              "command": [],
              "params": [
                  {
                      "name": "privateKey",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientEmail",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "fileId",
                      "type": "string",
                      "description": "The ID of the file.",
                      "defaultValue": ""
                  }
              ],
              "envs": [],
              "image": null,
              "results": [],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "privateKey",
                  "description": "",
                  "label": "Private Key",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's private key"
              },
              {
                  "key": "clientEmail",
                  "description": "",
                  "label": "Client Email",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's client email"
              },
              {
                  "key": "fileId",
                  "description": "The ID of the file.",
                  "label": "File ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              }
          ],
          "icon": "Delete"
      },
      {
          "name": "list-file-permissions",
          "displayName": "List File Permissions",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2022-04-20T09:28:02.838+00:00",
          "verified": false,
          "description": "List a file's permissions.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "admin@flowabl.io",
              "reason": "",
              "date": "2022-04-20T22:53:14.956+00:00"
          },
          "category": "Google Drive",
          "spec": {
              "arguments": [
                  "googledrive",
                  "listFilePermissions"
              ],
              "command": [],
              "params": [
                  {
                      "name": "privateKey",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientEmail",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "fileId",
                      "type": "string",
                      "description": "The ID of the file.",
                      "defaultValue": ""
                  }
              ],
              "envs": [],
              "image": null,
              "results": [
                  {
                      "description": "The resulting array of permissions associated with the file",
                      "name": "permissions"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "privateKey",
                  "description": "",
                  "label": "Private Key",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's private key"
              },
              {
                  "key": "clientEmail",
                  "description": "",
                  "label": "Client Email",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's client email"
              },
              {
                  "key": "fileId",
                  "description": "The ID of the file.",
                  "label": "File ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": ""
              }
          ],
          "icon": "Filter"
      },
      {
          "name": "list-files",
          "displayName": "List Files",
          "type": "template",
          "version": 1,
          "status": "active",
          "creationDate": "2022-04-20T09:28:02.838+00:00",
          "verified": false,
          "description": "Lists or searches files.\n\nThis method returns all files by default, including deleted files. Use the 'trashed=false' query parameter to filter trashed files from the results.",
          "labels": {},
          "annotations": {
              "boomerang.io/generation": "3",
              "boomerang.io/kind": "TaskTemplate"
          },
          "changelog": {
              "author": "admin@flowabl.io",
              "reason": "",
              "date": "2022-04-20T22:53:24.071+00:00"
          },
          "category": "Google Drive",
          "spec": {
              "arguments": [
                  "googledrive",
                  "listFiles"
              ],
              "command": [],
              "params": [
                  {
                      "name": "privateKey",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "clientEmail",
                      "type": "string",
                      "description": "",
                      "defaultValue": ""
                  },
                  {
                      "name": "query",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  },
                  {
                      "name": "corpora",
                      "type": "string",
                      "description": "Supported groupings are: 'user', 'drive', 'domain', and 'allDrives' (A combination of 'user' and 'drive' for all drives where the user is a member).",
                      "defaultValue": null
                  },
                  {
                      "name": "driveId",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": [],
              "image": null,
              "results": [
                  {
                      "description": "An array of file objects based on the listing query.",
                      "name": "results"
                  }
              ],
              "script": "",
              "workingDir": ""
          },
          "config": [
              {
                  "key": "privateKey",
                  "description": "",
                  "label": "Private Key",
                  "type": "password",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's private key"
              },
              {
                  "key": "clientEmail",
                  "description": "",
                  "label": "Client Email",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": true,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": "",
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "The service account's client email"
              },
              {
                  "key": "query",
                  "description": "",
                  "label": "Query",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "A query for filtering the file results"
              },
              {
                  "key": "corpora",
                  "description": "Supported groupings are: 'user', 'drive', 'domain', and 'allDrives' (A combination of 'user' and 'drive' for all drives where the user is a member).",
                  "label": "Corpora",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "user",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "Groupings of files to which the query applies."
              },
              {
                  "key": "driveId",
                  "description": "",
                  "label": "Drive ID",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": false,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": "ID of the shared drive to search."
              }
          ],
          "icon": "Search"
      },
      {
          "name": "sleep",
          "displayName": "Sleep",
          "type": "sleep",
          "version": 1,
          "status": "active",
          "creationDate": "2023-03-28T02:25:28.044+00:00",
          "verified": true,
          "description": "Sleep for specified duration in milliseconds",
          "labels": {},
          "annotations": {
              "boomerang.io/kind": "TaskTemplate",
              "boomerang.io/generation": "4"
          },
          "changelog": {
              "author": "608ca23d70bfa94ac91f8eef",
              "reason": "",
              "date": "2021-05-15T01:53:29.735+00:00"
          },
          "category": "Utilities",
          "spec": {
              "arguments": [
                  "system",
                  "sleep"
              ],
              "command": [],
              "params": [
                  {
                      "name": "duration",
                      "type": "string",
                      "description": "",
                      "defaultValue": null
                  }
              ],
              "envs": null,
              "image": "",
              "results": null,
              "script": null,
              "workingDir": null
          },
          "config": [
              {
                  "key": "duration",
                  "description": "",
                  "label": "Duration",
                  "type": "text",
                  "minValueLength": null,
                  "maxValueLength": null,
                  "options": null,
                  "required": null,
                  "placeholder": "",
                  "language": null,
                  "disabled": null,
                  "defaultValue": null,
                  "value": null,
                  "values": null,
                  "readOnly": false,
                  "hiddenValue": null,
                  "helperText": null
              }
          ],
          "icon": "Power on/off"
      }
  ],
  "number": 0,
  "size": 88,
  "totalElements": 88,
  "pageable": {
      "sort": {
          "unsorted": true,
          "sorted": false,
          "empty": true
      },
      "pageNumber": 0,
      "pageSize": 88,
      "offset": 0,
      "paged": true,
      "unpaged": false
  },
  "last": true,
  "totalPages": 1,
  "sort": {
      "unsorted": true,
      "sorted": false,
      "empty": true
  },
  "first": true,
  "numberOfElements": 88,
  "empty": false
};

export default tasktemplate;
