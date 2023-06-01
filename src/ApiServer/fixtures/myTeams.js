const myTeams = { 
  content: [{
      id: "5e3a35ad8c222700018ccd39",
      name: "IBM Services Engineering",
      description: "Flow Team for IBM Services Engineering",
      creationDate: "2023-05-04T03:18:27.350Z",
      status: "active",
      // workflows: [
      //   {
      //     properties: [
      //       {
      //         required: true,
      //         placeholder: null,
      //         language: null,
      //         disabled: null,
      //         defaultValue: "",
      //         value: null,
      //         values: null,
      //         readOnly: false,
      //         description: "Tenant ID from the platform.",
      //         key: "tenant",
      //         label: "Tenant ID",
      //         type: "text",
      //         min: null,
      //         max: null,
      //         options: null,
      //         helperText: null,
      //       },
      //     ],
      //     description: "",
      //     flowTeamId: "5e3a35ad8c222700018ccd39",
      //     icon: "bot",
      //     id: "5eb2c4085a92d80001a16d87",
      //     name: "ML Train – Bot Efficiency",
      //     shortDescription: "Train and store ML model for Bot Efficiency.",
      //     status: "active",
      //     triggers: {
      //       scheduler: { enable: false, schedule: "", timezone: "", advancedCron: false },
      //       webhook: { enable: false, token: "" },
      //       event: { enable: false, topic: "" },
      //     },
      //     enablePersistentStorage: true,
      //     enableACCIntegration: false,
      //     revisionCount: 2,
      //     templateUpgradesAvailable: false,
      //   },
      //   {
      //     properties: [
      //       {
      //         required: true,
      //         placeholder: null,
      //         language: null,
      //         disabled: null,
      //         defaultValue: "",
      //         value: null,
      //         values: null,
      //         readOnly: false,
      //         jsonPath: null,
      //         description: "",
      //         key: "system.component.name",
      //         label: "Component Name",
      //         type: "text",
      //         minValueLength: null,
      //         maxValueLength: null,
      //         options: null,
      //         helperText: null,
      //       },
      //     ],
      //     description: "",
      //     flowTeamId: "5e3a35ad8c222700018ccd39",
      //     icon: "cloud upload",
      //     id: "5e877e944bbc6e0001c51e6e",
      //     name: "Java - Deploy",
      //     shortDescription: "",
      //     status: "active",
      //     triggers: {
      //       manual: {
      //         enable: true,
      //         token: null,
      //         topic: null,
      //       },
      //       scheduler: {
      //         enable: false,
      //         schedule: "",
      //         timezone: "",
      //         advancedCron: false,
      //       },
      //       webhook: {
      //         enable: true,
      //         token: "test",
      //         topic: null,
      //       },
      //       dockerhub: {
      //         enable: false,
      //         token: null,
      //         topic: null,
      //       },
      //       slack: {
      //         enable: false,
      //         token: null,
      //         topic: null,
      //       },
      //       custom: {
      //         enable: false,
      //         token: null,
      //         topic: null,
      //       },
      //     },
      //     tokens: [],
      //     enablePersistentStorage: false,
      //     scope: "team",
      //     revisionCount: 8,
      //     templateUpgradesAvailable: false,
      //   },
      //   {
      //     properties: [
      //       {
      //         required: true,
      //         placeholder: null,
      //         language: null,
      //         disabled: null,
      //         defaultValue: "red",
      //         value: null,
      //         values: null,
      //         readOnly: false,
      //         jsonPath: null,
      //         description: "what color is it",
      //         key: "color",
      //         label: "Color",
      //         type: "select",
      //         minValueLength: null,
      //         maxValueLength: null,
      //         options: [
      //           {
      //             key: "red",
      //             value: "red",
      //           },
      //           {
      //             key: "green",
      //             value: "green",
      //           },
      //           {
      //             key: "blue",
      //             value: "blue",
      //           },
      //         ],
      //         helperText: null,
      //       },
      //       {
      //         required: true,
      //         placeholder: null,
      //         language: null,
      //         disabled: null,
      //         defaultValue: 1,
      //         value: null,
      //         values: null,
      //         readOnly: false,
      //         jsonPath: null,
      //         description: "Testing",
      //         key: "asdfasdf",
      //         label: "asdfasdf",
      //         type: "number",
      //         minValueLength: null,
      //         maxValueLength: null,
      //         options: null,
      //         helperText: null,
      //       },
      //     ],
      //     description: "Java - Build",
      //     flowTeamId: "5e3a35ad8c222700018ccd39",
      //     icon: "delivery",
      //     id: "5e877d1f4bbc6e0001c51e12",
      //     name: "Java - Build",
      //     shortDescription: "Java - Build",
      //     status: "active",
      //     triggers: {
      //       manual: {
      //         enable: true,
      //         token: null,
      //         topic: null,
      //       },
      //       scheduler: {
      //         enable: false,
      //         schedule: "",
      //         timezone: "",
      //         advancedCron: false,
      //       },
      //       webhook: {
      //         enable: true,
      //         token: "test",
      //         topic: null,
      //       },
      //       dockerhub: {
      //         enable: false,
      //         token: null,
      //         topic: null,
      //       },
      //       slack: {
      //         enable: false,
      //         token: null,
      //         topic: null,
      //       },
      //       custom: {
      //         enable: false,
      //         token: null,
      //         topic: null,
      //       },
      //     },
      //     tokens: [],
      //     enablePersistentStorage: false,
      //     scope: "system",
      //     revisionCount: 16,
      //     templateUpgradesAvailable: true,
      //   },
      // ],
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
      users: [
        {
          id: "61d38d133aa9034ded32cae6",
          email: "admin@flowabl.io",
          name: "admin@flowabl.io"
        },
        {
          id: "61d5db083aa9034ded32cae7",
          email: "boomrng@us.ibm.com",
          name: "Boomerang Joe"
        },
        {
          id: "61ddfb07c5d30f5de052426b",
          email: "marcus.d.roy@gmail.com",
          name: "marcus.d.roy@gmail.com"
        }],
      parameters: [],
      approverGroups: [],
    },
    {
      externalRef: "5c41596cf32aa30001e9d443",
      id: "5e3a35ad8c222700018ccd38",
      name: "IBM Services Essentials",
      creationDate: "2023-05-04T03:18:27.350Z",
      status: "active",
      // workflows: [
      //   {
      //     properties: [
      //       {
      //         required: true,
      //         placeholder: null,
      //         language: null,
      //         disabled: null,
      //         defaultValue: "",
      //         value: null,
      //         values: null,
      //         readOnly: false,
      //         description: "Tenant ID from the platform.",
      //         key: "tenant.name",
      //         label: "Tenant ID",
      //         type: "text",
      //         min: null,
      //         max: null,
      //         options: null,
      //         helperText: null,
      //       },
      //       {
      //         required: true,
      //         placeholder: null,
      //         language: null,
      //         disabled: null,
      //         defaultValue: "testuser@ibm.com",
      //         value: null,
      //         values: null,
      //         readOnly: false,
      //         description: "The username used for Artifactory authentication.",
      //         key: "artifactory.username",
      //         label: "Artifactory Username",
      //         type: "text",
      //         min: null,
      //         max: null,
      //         options: null,
      //         helperText: null,
      //       },
      //       {
      //         required: true,
      //         placeholder: null,
      //         language: null,
      //         disabled: null,
      //         defaultValue: "test",
      //         value: null,
      //         values: null,
      //         readOnly: false,
      //         description: "The API key used for Artifactory authentication",
      //         key: "artifactory.api_key",
      //         label: "Artifactory API Key",
      //         type: "password",
      //         min: null,
      //         max: null,
      //         options: null,
      //         helperText: null,
      //       },
      //       {
      //         required: false,
      //         placeholder: null,
      //         language: null,
      //         disabled: null,
      //         defaultValue: "",
      //         value: null,
      //         values: null,
      //         readOnly: false,
      //         description: "The host of the database to connect.",
      //         key: "db.host",
      //         label: "Database Host",
      //         type: "text",
      //         min: null,
      //         max: null,
      //         options: null,
      //         helperText: null,
      //       },
      //       {
      //         required: false,
      //         placeholder: null,
      //         language: null,
      //         disabled: null,
      //         defaultValue: null,
      //         value: null,
      //         values: null,
      //         readOnly: false,
      //         description: "The port of the database to connect.",
      //         key: "db.port",
      //         label: "Database Port",
      //         type: "number",
      //         min: null,
      //         max: null,
      //         options: null,
      //         helperText: null,
      //       },
      //       {
      //         required: false,
      //         placeholder: null,
      //         language: null,
      //         disabled: null,
      //         defaultValue: "",
      //         value: null,
      //         values: null,
      //         readOnly: false,
      //         description: "The username used for database connection.",
      //         key: "db.username",
      //         label: "Database Username",
      //         type: "text",
      //         min: null,
      //         max: null,
      //         options: null,
      //         helperText: null,
      //       },
      //       {
      //         required: false,
      //         placeholder: null,
      //         language: null,
      //         disabled: null,
      //         defaultValue: null,
      //         value: null,
      //         values: null,
      //         readOnly: false,
      //         description: "The password used for database connection.",
      //         key: "db.password",
      //         label: "Database Password",
      //         type: "password",
      //         min: null,
      //         max: null,
      //         options: null,
      //         helperText: null,
      //       },
      //     ],
      //     description: "",
      //     flowTeamId: "5e3a35ad8c222700018ccd39",
      //     icon: "clean",
      //     id: "5eb2c4085a92d80001a16d87",
      //     name: "Essentials Training – Bot Efficiency",
      //     shortDescription: "Train and store ML model for Bot Efficiency.",
      //     status: "active",
      //     triggers: {
      //       scheduler: { enable: false, schedule: "", timezone: "", advancedCron: false },
      //       webhook: { enable: false, token: "" },
      //       event: { enable: false, topic: "" },
      //     },
      //     enablePersistentStorage: true,
      //     enableACCIntegration: false,
      //     revisionCount: 2,
      //     templateUpgradesAvailable: false,
      //   },
      // ],
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
      users: [
        {
          id: "61d38d133aa9034ded32cae6",
          email: "admin@flowabl.io",
          name: "admin@flowabl.io"
        },
        {
          id: "61d5db083aa9034ded32cae7",
          email: "boomrng@us.ibm.com",
          name: "Boomerang Joe"
        },
        {
          id: "61ddfb07c5d30f5de052426b",
          email: "marcus.d.roy@gmail.com",
          name: "marcus.d.roy@gmail.com"
        }],
      parameters: [],
      approverGroups: [],
    },],
  number: 0,
  size: 2,
  totalElements: 2,
  pageable: "INSTANCE",
  last: true,
  totalPages: 1,
  sort: {
      sorted: false,
      empty: true,
      unsorted: true
  },
  first: true,
  numberOfElements: 2,
  empty: false
};

export default myTeams;
