import React, { useRef } from "react";
import { InlineNotification } from "@carbon/react";
import { Button, ModalBody, ModalFooter } from "@carbon/react";
import { Loading, TextArea, TextInput, TooltipHover } from "@boomerang-io/carbon-addons-boomerang-react";
import workflowIcons from "Assets/workflowIcons";
import classNames from "classnames/bind";
import { Formik } from "formik";
import capitalize from "lodash/capitalize";
import * as Yup from "yup";
import { FlowTeam, CreateWorkflowSummary, WorkflowViewType } from "Types";
import styles from "./createWorkflow.module.scss";

let classnames = classNames.bind(styles);

interface CreateWorkflowContentProps {
  closeModal: () => void;
  createError: object;
  createWorkflow: (workflowSummary: CreateWorkflowSummary) => Promise<void>;
  isLoading: boolean;
  team?: FlowTeam;
  existingWorkflowNames: string[];
  teamQuotasEnabled: boolean;
  viewType: WorkflowViewType;
}

const CreateWorkflowContent: React.FC<CreateWorkflowContentProps> = ({
  closeModal,
  createError,
  createWorkflow,
  isLoading,
  team,
  existingWorkflowNames,
  teamQuotasEnabled,
  viewType,
}) => {
  const formikRef = useRef<any>();
  const hasReachedWorkflowLimit = team ? team.quotas.maxWorkflowCount <= team.quotas.currentWorkflowCount : false;
  const createWorkflowsDisabled = teamQuotasEnabled && hasReachedWorkflowLimit;

  const handleSubmit = (values: any) => {
    const requestBody = {
      name: values.name,
      description: values.description,
      icon: values.icon,
    };
    createWorkflow(requestBody);
  };

  return (
    <Formik
      innerRef={formikRef}
      initialErrors={{ name: "Name is required" }}
      initialValues={{
        name: "",
        description: "",
        icon: workflowIcons[2].name,
      }}
      onSubmit={handleSubmit}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .required("Name is required")
          .max(64, "Name must not be greater than 64 characters")
          .notOneOf(existingWorkflowNames, "This name already exists"),
        description: Yup.string().max(250, "Description must not be greater than 250 characters"),
      })}
    >
      {(props) => {
        const { values, touched, errors, isValid, handleChange, handleBlur, handleSubmit, setFieldValue } = props;

        return (
          <>
            {isLoading && <Loading />}
            <ModalBody aria-label="inputs" className={styles.formBody}>
              <TextInput
                id="name"
                labelText="Name"
                placeholder="e.g. My Amazing Workflow"
                helperText="Enter a unique name for your workflow"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                invalid={Boolean(errors.name && touched.name)}
                invalidText={errors.name}
              />
              <TextArea
                id="description"
                labelText="Description (optional)"
                onBlur={handleBlur}
                onChange={handleChange}
                invalid={Boolean(errors.description && touched.description)}
                invalidText={errors.description}
                style={{ resize: "none", width: "100%" }}
                value={values.description}
              />
              <h2 className={styles.iconsTitle}>Pick an icon (any icon)</h2>
              <div className={styles.icons}>
                {workflowIcons.map(({ name, Icon }: any, index) => (
                  <TooltipHover direction="top" tooltipText={capitalize(name)}>
                    <label
                      key={index}
                      className={classnames(styles.icon, {
                        [styles.activeIcon]: values.icon === name,
                      })}
                    >
                      <input
                        type="radio"
                        value={name}
                        readOnly
                        onClick={() => setFieldValue("icon", name)}
                        checked={values.icon === name}
                      />
                      <Icon key={`${name}-${index}`} alt={`${name} icon`} />
                    </label>
                  </TooltipHover>
                ))}
              </div>
              {createError && (
                <InlineNotification
                  lowContrast
                  kind="error"
                  title="Something's Wrong"
                  subtitle={`Request to create ${viewType} failed`}
                />
              )}
              {createWorkflowsDisabled && (
                <InlineNotification
                  lowContrast
                  kind="error"
                  title="Quotas exceeded"
                  subtitle="You cannot create new workflows for this team."
                />
              )}
            </ModalBody>
            <ModalFooter>
              <Button kind="secondary" onClick={closeModal} type="button">
                Cancel
              </Button>
              <Button
                data-testid="workflows-create-workflow-submit"
                disabled={!isValid || isLoading || createWorkflowsDisabled}
                onClick={handleSubmit}
              >
                {isLoading ? "Creating..." : "Create"}
              </Button>
            </ModalFooter>
          </>
        );
      }}
    </Formik>
  );
};

export default CreateWorkflowContent;
