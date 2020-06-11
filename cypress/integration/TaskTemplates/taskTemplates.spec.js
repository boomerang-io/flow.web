import { startApiServer } from "../../../src/apiServer";
import { appLink } from "../../../src/config/appConfig";

let server;

beforeEach(() => {
    server = startApiServer({ environment: "test" });
});

afterEach(() => {
    server.shutdown();
});

describe("TaskTemplates", function () {
    beforeEach(() => {
        cy.visit(appLink.taskTemplates());
    });

    it("Select a task", function () {
        cy.get('[data-cy=task-templates-search]').type("artifactory download");
        cy.contains('Artifactory (1)').click()
        cy.contains('Artifactory File Download').click()
        cy.url().should("include", "/5bd9b4115a5df954ad5ad8db");
    });

});