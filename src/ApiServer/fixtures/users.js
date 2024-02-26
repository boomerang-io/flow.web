const users = {
  content: [
    {
      id: "5f170b3df6ab327e302cb0a5",
      email: "trbula@us.ibm.com",
      name: "Tim Bula",
      isFirstVisit: true,
      type: "admin",
      firstLoginDate: "2020-07-21T15:35:25.369+00:00",
      lastLoginDate: "2020-07-21T15:35:25.369+00:00",
      labels:
        {
          "testing": "defaultContainer",
          "purpose": "test",
          "artifactoryusername": "Artifactory_Username",
          "blablablablablabla5eb2c4085a92d80001a16d875eb2c4085a92d80001a16d87": "test",
          "testing2": "defaultContainer",
          "testing3": "defaultContainer",
        },
      workflows: [
        {
          properties: [],
          description: "",
          flowTeamId: "5e3a35ad8c222700018ccd39",
          icon: "bot",
          id: "5eb2c4085a92d80001a16d87",
          name: "Personal - ML Train – Bot Efficiency",
          shortDescription: "Train and store ML model for Bot Efficiency.",
          status: "active",
          triggers: {},
          enablePersistentStorage: true,
          enableACCIntegration: false,
          revisionCount: 2,
          upgradesAvailable: false,
        },
        {
          properties: [],
          description: "Java - Build",
          flowTeamId: "5e3a35ad8c222700018ccd38",
          icon: "delivery",
          id: "5e877d1f4bbc6e0001c51e12",
          name: "Personal - Java - Build",
          shortDescription: "Java - Build",
          status: "active",
          triggers: {},
          tokens: [],
          enablePersistentStorage: false,
          scope: "system",
          revisionCount: 16,
          upgradesAvailable: true,
        },
      ],
      userTeams: [
        {
          higherLevelGroupId: "5c41596cf32aa30001e9d444",
          id: "5e3a35ad8c222700018ccd39",
          name: "IBM Services Engineering",
        },
        {
          higherLevelGroupId: "5c41596cf32aa30001e9d443",
          id: "5e3a35ad8c222700018ccd38",
          name: "IBM Services Essentials",
        },
      ],
      status: "active",
    },
    {
      id: "kg3p380ad09662744c240e47",
      email: "mdroy@us.ibm.com",
      name: "Marcus Roy",
      isFirstVisit: true,
      type: "admin",
      firstLoginDate: "2020-07-21T15:35:25.369+00:00",
      lastLoginDate: "2020-07-21T15:35:25.369+00:00",
      workflows: [
        {
          properties: [],
          description: "",
          flowTeamId: "5e3a35ad8c222700018ccd39",
          icon: "bot",
          id: "5eb2c4085a92d80001a16d87",
          name: "Personal - ML Train – Bot Efficiency",
          shortDescription: "Train and store ML model for Bot Efficiency.",
          status: "active",
          triggers: {},
          enablePersistentStorage: true,
          enableACCIntegration: false,
          revisionCount: 2,
          upgradesAvailable: false,
        },
      ],
      userTeams: [
        {
          higherLevelGroupId: "5c41596cf32aa30001e9d444",
          id: "5e3a35ad8c222700018ccd39",
          name: "IBM Services Engineering",
        },
      ],
      status: "active",
    },
    {
      id: "kg3p380ad09662744c240e12347",
      email: "test@ibm.com",
      name: "Test User",
      isFirstVisit: true,
      type: "admin",
      firstLoginDate: "2020-07-21T15:35:25.369+00:00",
      lastLoginDate: "2020-07-21T15:35:25.369+00:00",
      workflows: [],
      userTeams: [],
      status: "active",
    },
  ],
  number: 0,
  size: 3,
  totalElements: 3,
  pageable: "INSTANCE",
  last: true,
  totalPages: 1,
  sort: {
      sorted: false,
      empty: true,
      unsorted: true
  },
  first: true,
  numberOfElements: 3,
  empty: false
};

export default users;
