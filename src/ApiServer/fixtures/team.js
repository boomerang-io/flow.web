const team = {
      id: "5e3a35ad8c222700018ccd39",
      name: "ibm-services-engineering",
      displayName: "IBM Services Engineering",
      description: "Flow Team for IBM Services Engineering",
      creationDate: "2023-05-04T03:18:27.350Z",
      status: "active",
      labels: {
        "key1": "value1",
        "key2": "value2",
        "key3": "value3",
      },
      quotas: {
        maxWorkflowCount: 10,
        maxWorkflowRunMonthly: 100,
        maxWorkflowStorage: 5,
        maxWorkflowRunTime: 30,
        maxConcurrentRuns: 4,
        currentWorkflowCount: 3,
        currentRuns: 10,
        currentConcurrentRuns: 0,
        currentRunMedianDuration: 2,
        currentRunTotalDuration: 20,
        monthlyResetDate: "August 1, 2020",
        currentTotalWorkflowStorage: 0,
      },
      members: [
        {
          id: "61d38d133aa9034ded32cae6",
          email: "admin@flowabl.io",
          name: "admin@flowabl.io",
          role: "Editor"
        },
        {
          id: "61d5db083aa9034ded32cae7",
          email: "boomrng@us.ibm.com",
          name: "Boomerang Joe",
          role: "Owner"
        },
        {
          id: "61ddfb07c5d30f5de052426b",
          email: "marcus.d.roy@gmail.com",
          name: "marcus.d.roy@gmail.com",
          role: "Owner"
        }],
      parameters: [
        {
            "key": "test",
            "description": "This is a test",
            "label": "Test",
            "type": "text",
            "minValueLength": null,
            "maxValueLength": null,
            "options": null,
            "required": null,
            "placeholder": null,
            "language": null,
            "disabled": null,
            "defaultValue": null,
            "value": "test value",
            "values": null,
            "readOnly": false,
            "hiddenValue": null,
            "helperText": null
        }],
      approverGroups: [
        {
            "id": "64c89095f12a60116b98e83e",
            "name": "Group 1",
            "creationDate": "2023-08-01T04:56:53.303+00:00",
            "approvers": [
                {
                    "id": "61d5db083aa9034ded32cae7",
                    "email": "boomrng@us.ibm.com",
                    "name": "Boomerang Joe",
                    "role": null
                },
                {
                    "id": "61d38d133aa9034ded32cae6",
                    "email": "admin@flowabl.io",
                    "name": "admin@flowabl.io",
                    "role": null
                }
            ]
        }
    ],
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
    }

export default team;
