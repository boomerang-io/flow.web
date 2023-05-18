import React, { useState } from "react";
import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import {
  Button,
  FileUploaderDropContainer,
  FileUploaderItem,
  ModalBody,
  ModalFooter,
  InlineNotification,
} from "@carbon/react";
import { ComboBox, Loading, TextInput } from "@boomerang-io/carbon-addons-boomerang-react";
import { requiredWorkflowProps } from "./constants";
import { ErrorFilled } from "@carbon/react/icons";
import { FlowTeam, WorkflowExport } from "Types";
import styles from "./importWorkflowContent.module.scss";

const FILE_UPLOAD_MESSAGE = "Choose a file or drag one here";
const createInvalidTextMessage = (message: string | undefined) => `Whoops! ${message}. Please choose a different one.`;

function checkIsValidWorkflow(data: any) {
  // Only check if the .json file contain the required key data
  // This validate can be improved
  let isValid = true;
  requiredWorkflowProps.forEach((prop) => {
    if (!data.hasOwnProperty(prop)) {
      isValid = false;
    }
  });
  //Validate if workflow has the latest structure for dag
  if (!data.latestRevision?.dag?.tasks) {
    isValid = false;
  }
  return isValid;
}

interface ImportWorkflowContentProps {
  closeModal(): void;
  existingWorkflowNames: string[];
  isLoading: boolean;
  importError: any;
  importWorkflow: (workflowExport: WorkflowExport, closeModal: () => void, team: FlowTeam) => Promise<void>;
  team: FlowTeam;
  type: string;
}

interface FormProps {
  team: FlowTeam;
  name: string;
  summary: string;
  file: WorkflowExport | undefined;
}

const ImportWorkflowContent: React.FC<ImportWorkflowContentProps> = ({
  closeModal,
  existingWorkflowNames,
  isLoading,
  importError,
  importWorkflow,
  team,
  type,
}) => {
  /**
   * Return promise for reading file
   * @param file {File}
   * @return {Promise}
   */
  const readFile = (file: any, setFieldError: (field: string, errorMsg: string) => void): Promise<WorkflowExport> => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onerror = () => {
        reader.abort();
        setFieldError("file", "Problem parsing input file");
        reject(new DOMException("Problem parsing input file"));
      };
      reader.onload = () => {
        try {
          if (typeof reader.result === "string") {
            resolve(JSON.parse(reader.result));
          } else {
            setFieldError("file", "Something went wrong");
            throw new Error();
          }
        } catch (e) {
          setFieldError("file", "Problem parsing input file as JSON");
          reject(new DOMException("Problem parsing input file as JSON"));
          return;
        }
      };

      reader.readAsText(file);
    });
  };

  const handleSubmit = async (values: any) => {
    const fileData: WorkflowExport = values.file.contents;
    importWorkflow(
      {
        ...fileData,
        name: values.name,
        flowTeamId: team.id,
      },
      closeModal,
      values.selectedTeam
    );
  };

  return (
    <Formik
      initialValues={{
        name: "",
        summary: "",
        file: undefined,
      }}
      validateOnMount
      onSubmit={handleSubmit}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .required(`Please enter a name for your ${type}`)
          .max(64, "Name must not be greater than 64 characters")
          .notOneOf(
            existingWorkflowNames,
            `There’s already a ${type} with that name in this team, consider giving this one a different name.`
          ),
        summary: Yup.string().max(128, "Summary must not be greater than 128 characters"),
        file: Yup.mixed()
          .test(
            "fileSize",
            "File is larger than 1MiB",
            // If it's bigger than 1MiB will display the error (1048576 bytes = 1 mebibyte)
            (file) => (file?.size ? file.size < 1048576 : true)
          )
          .test("validFile", "File is invalid", async (file) => {
            let isValid = true;
            if (file) {
              try {
                isValid = checkIsValidWorkflow(file.contents);
              } catch (e) {
                console.error(e);
                isValid = false;
              }
            }

            // Need to return promise for yup to do async validation
            return Promise.resolve(isValid);
          }),
      })}
    >
      {(props: FormikProps<FormProps>) => {
        const {
          values,
          touched,
          errors,
          isValid,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          setFieldError,
        } = props;
        return (
          <>
            {isLoading && <Loading />}
            <ModalBody className={styles.body}>
              <p>{`Add a ${type} - Select the ${type} file you want to upload`}</p>
              <FileUploaderDropContainer
                accept={[".json"]}
                labelText={FILE_UPLOAD_MESSAGE}
                name={type}
                multiple={false}
                onAddFiles={async (
                  event: React.SyntheticEvent,
                  { addedFiles }: { addedFiles: { name: string; size: number }[] }
                ) => {
                  let contents = await readFile(addedFiles[0], setFieldError);
                  let fileInfo = {
                    contents,
                    size: addedFiles[0]?.size ?? 0,
                    name: addedFiles[0]?.name ?? "",
                  };
                  setFieldValue("file", fileInfo);
                  setFieldValue("name", contents?.name ?? "");
                  setFieldValue("description", contents?.description ?? "");
                }}
              />
              {values.file && (
                <FileUploaderItem
                  name={values.file.name}
                  status="edit"
                  onDelete={() => {
                    setFieldValue("file", undefined);
                  }}
                />
              )}
              {values.file || errors.file ? (
                Boolean(errors.file) ? (
                  <div className={styles.validMessage}>
                    <ErrorFilled aria-label="error-import-icon" className={styles.errorIcon} />
                    <p className={styles.message}>{createInvalidTextMessage(errors.file)}</p>
                  </div>
                ) : (
                  <div className={styles.confirmInfoForm}>
                    <TextInput
                      id="name"
                      labelText={`${type} Name`}
                      name="name"
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      invalid={Boolean(errors.name && touched.name)}
                      invalidText={errors.name}
                    />
                    <TextInput
                      id="summary"
                      labelText="Summary"
                      value={values.summary}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      invalid={Boolean(errors.summary && touched.summary)}
                      invalidText={errors.summary}
                    />
                  </div>
                )
              ) : null}
              {importError && (
                <InlineNotification
                  lowContrast
                  kind="error"
                  title="Something's Wrong"
                  subtitle={`Request to import ${type.toLowerCase()} failed`}
                />
              )}
            </ModalBody>
            <ModalFooter>
              <Button onClick={closeModal} kind="secondary">
                Cancel
              </Button>
              <Button disabled={!isValid || !Boolean(values.file)} kind="primary" onClick={handleSubmit}>
                {isLoading ? "Creating..." : "Create"}
              </Button>
            </ModalFooter>
          </>
        );
      }}
    </Formik>
  );
};

export default ImportWorkflowContent;
