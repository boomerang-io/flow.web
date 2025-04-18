import { useHistory, useLocation } from "react-router-dom";
import { useQuery } from "Hooks";
import { Loading } from "@carbon/react";
import CreateWorkflow from "Components/CreateWorkflow";
import EmptyState from "Components/EmptyState";
import ErrorDragon from "Components/ErrorDragon";
import WorkflowCard from "Components/WorkflowCard";
import WorkflowsHeader from "Components/WorkflowsHeader";
import queryString from "query-string";
import { serviceUrl } from "Config/servicesConfig";
import { WorkflowView } from "Constants";
import { Workflow } from "Types";
import styles from "./TemplateWorkflows.module.scss";

export default function TemplateWorkflows() {
  const history = useHistory();
  const location = useLocation();
  let { query: searchQuery = "" } = queryString.parse(location.search, {
    arrayFormat: "comma",
  });
  const {
    data: templatesWorkflowData,
    error: errorTemplatesWorkflow,
    isLoading: isLoadingTemplatesWorkflow,
  } = useQuery(serviceUrl.template.getWorkflowTemplates());

  let safeQuery = "";
  if (Array.isArray(searchQuery)) {
    safeQuery = searchQuery.join().toLowerCase();
  } else if (searchQuery) {
    safeQuery = searchQuery.toLowerCase();
  }

  const handleUpdateFilter = (query: { [key: string]: any }) => {
    const queryStr = `?${queryString.stringify(
      { ...queryString.parse(location.search, { arrayFormat: "comma" }), ...query },
      { arrayFormat: "comma", skipEmptyString: true }
    )}`;

    history.push({ search: queryStr });
  };

  const filteredWorkflows =
    templatesWorkflowData?.content?.filter((workflow: any) => workflow.name.toLowerCase().includes(safeQuery)) ?? [];

  return (
    <>
      <div className={styles.container}>
        <WorkflowsHeader
          title="Template Workflows"
          subtitle="Define reuseable Workflows available to all teams as Templates."
          handleUpdateFilter={handleUpdateFilter}
          searchQuery={searchQuery}
          workflowList={templatesWorkflowData?.content ? templatesWorkflowData.content : []}
          viewType={WorkflowView.Template}
        />
        <div aria-label="Team Workflows" className={styles.content} role="region">
          <section className={styles.sectionContainer}>
            <RenderTemplates
              isLoading={isLoadingTemplatesWorkflow}
              error={errorTemplatesWorkflow}
              workflows={templatesWorkflowData}
              filteredWorkflows={filteredWorkflows}
              searchQuery={searchQuery}
            />
          </section>
        </div>
      </div>
    </>
  );
}

type TemplatesProps = {
  isLoading: boolean;
  error: any;
  workflows: Workflow[];
  filteredWorkflows: Workflow[];
  searchQuery: string | string[] | null;
};

const RenderTemplates = ({ isLoading, error, workflows, filteredWorkflows, searchQuery }: TemplatesProps) => {
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorDragon />;
  }

  if (!filteredWorkflows || (filteredWorkflows?.length === 0 && searchQuery !== "")) {
    return <EmptyState />;
  }
  return (
    <div className={styles.workflows}>
      {filteredWorkflows.map((workflow) => (
        <WorkflowCard key={workflow.id} workflow={workflow} quotas={null} viewType={WorkflowView.Template} />
      ))}
      {<CreateWorkflow hasReachedWorkflowLimit={false} workflows={workflows} viewType={WorkflowView.Template} />}
    </div>
  );
};
