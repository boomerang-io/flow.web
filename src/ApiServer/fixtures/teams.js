const teams = {
  content: [
    {
      externalREf: "5e73782ee04d700001a00249",
      id: "5e7cccb94bbc6e0001c51773",
      status: "inactive",
      creationDate: "2023-05-03T03:18:27.350Z",
      name: "WDC2 ISE Dev",
      description: "Flow Team for WDC2 ISE Dev",
      quotas: {
        maxWorkflowCount: 10,
        maxWorkflowExecutionMonthly: 100,
        maxWorkflowStorage: 5,
        maxWorkflowExecutionTime: 30,
        maxConcurrentWorkflows: 4,
        currentWorkflowCount: 1,
        currentConcurrentWorkflows: 0,
        currentWorkflowExecutionMonthly: 10,
        currentAverageExecutionTime: 2,
        monthlyResetDate: "August 1, 2020",
        currentWorkflowsPersistentStorage: 0,
      },
        parameters: [
          {
            required: null,
            placeholder: null,
            language: null,
            disabled: null,
            defaultValue: null,
            value: '"testing"',
            values: null,
            readOnly: false,
            id: "db40c671-b7e7-437e-8fc2-8df390cf724d",
            description: "changed description",
            key: "test key",
            label: "test label",
            type: "text",
            min: null,
            max: null,
            options: null,
            helperText: null,
          },
        ],
      users: [
        {
          id: "kg3p380ad09662744c240e47",
          email: "mdroy@us.ibm.com",
          name: "Marcus Roy",
          isFirstVisit: true,
          type: "admin",
          firstLoginDate: "2020-07-21T15:35:25.369+00:00",
          lastLoginDate: "2020-07-21T15:35:25.369+00:00",
          flowTeams: ["5e7cccb94bbc6e0001c51773"],
          status: "active",
        },
        {
          id: "5f17380ad09662744c240e47",
          email: "trbula@us.ibm.com",
          name: "Tim Bula",
          isFirstVisit: true,
          type: "admin",
          firstLoginDate: "2020-07-21T15:35:25.369+00:00",
          lastLoginDate: "2020-07-21T15:35:25.369+00:00",
          flowTeams: ["5e7cccb94bbc6e0001c51773"],
          status: "active",
        },
      ],
      approverGroups: [],
    },
    {
      externalRef: "5e73782ee04d700001a00249",
      id: "6e7cccb94bbc6e0001c51773",
      status: "active",
      name: "WDC2 ISE QA",
      description: "Flow Team for WDC2 ISE QA",
      creationDate: "2023-05-03T03:18:27.350Z",
      quotas: {
        maxWorkflowCount: 10,
        maxWorkflowExecutionMonthly: 100,
        maxWorkflowStorage: 5,
        maxWorkflowExecutionTime: 30,
        maxConcurrentWorkflows: 4,
        currentWorkflowCount: 1,
        currentConcurrentWorkflows: 0,
        currentWorkflowExecutionMonthly: 10,
        currentAverageExecutionTime: 2,
        monthlyResetDate: "August 1, 2020",
        currentWorkflowsPersistentStorage: 0,
      },
      parameters: [
        {
          required: null,
          placeholder: null,
          language: null,
          disabled: null,
          defaultValue: null,
          value: '"testing"',
          values: null,
          readOnly: false,
          id: "db40c671-b7e7-437e-8fc2-8df390cf724d",
          description: "changed description",
          key: "test key",
          label: "test label",
          type: "text",
          min: null,
          max: null,
          options: null,
          helperText: null,
        },
      ],
      users: [
        {
          id: "kg3p380ad09662744c240e47",
          email: "mdroy@us.ibm.com",
          name: "Marcus Roy",
          isFirstVisit: true,
          type: "admin",
          firstLoginDate: "2020-07-21T15:35:25.369+00:00",
          lastLoginDate: "2020-07-21T15:35:25.369+00:00",
          flowTeams: ["5e7cccb94bbc6e0001c51773"],
          status: "active",
        },
      ],
      approverGroups: [],
    },
    {
      id: "5e3a35ad8c222700018ccd39",
      name: "IBM Services Engineering",
      description: "Flow Team for IBM Services Engineering",
      creationDate: "2023-05-04T03:18:27.350Z",
      status: "active",
      quotas: {
        maxWorkflowCount: 10,
        maxWorkflowExecutionMonthly: 100,
        maxWorkflowStorage: 5,
        maxWorkflowExecutionTime: 30,
        maxConcurrentWorkflows: 4,
        currentWorkflowCount: 1,
        currentConcurrentWorkflows: 0,
        currentWorkflowExecutionMonthly: 10,
        currentAverageExecutionTime: 2,
        monthlyResetDate: "August 1, 2020",
        currentWorkflowsPersistentStorage: 0,
      },
      users: [],
      parameters: [],
      approverGroups: [],
    },
    {
      externalRef: "5c41596cf32aa30001e9d443",
      id: "5e3a35ad8c222700018ccd38",
      name: "IBM Services Essentials",
      creationDate: "2023-05-04T03:18:27.350Z",
      status: "active",
      quotas: {
        maxWorkflowCount: 10,
        maxWorkflowExecutionMonthly: 100,
        maxWorkflowStorage: 5,
        maxWorkflowExecutionTime: 30,
        maxConcurrentWorkflows: 4,
        currentWorkflowCount: 9,
        currentConcurrentWorkflows: 100,
        currentWorkflowExecutionMonthly: 99,
        currentAverageExecutionTime: 2,
        monthlymonthlyResetDate: "August 1, 2020",
        currentWorkflowsPersistentStorage: 0,
      },
      users: [],
      parameters: [],
      approverGroups: [],
    },
  ],
  number: 0,
  size: 4,
  totalElements: 4,
  pageable: "INSTANCE",
  last: true,
  totalPages: 1,
  sort: {
      sorted: false,
      empty: true,
      unsorted: true
  },
  first: true,
  numberOfElements: 4,
  empty: false
};

export default teams;
