import React from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as Yup from "yup";
import cx from "classnames";
import { ModalFlowForm, TextInput, TextArea, ComboBox } from "@boomerang/carbon-addons-boomerang-react";
import { Button, ModalBody, ModalFooter, Loading } from "carbon-components-react";
import taskTemplateIcons from "Assets/taskTemplateIcons";
import styles from "./addTaskTemplateForm.module.scss";

AddTaskTemplateForm.propTypes = {
  closeModal: PropTypes.func,
  handleSelectMode: PropTypes.func,
  currentComponent: PropTypes.object,
  formData: PropTypes.object
};

// const categories = [
//   {value:"github" , label: "GitHub"},
//   {value:"boomerang" , label: "Boomerang"},
//   {value:"artifactory" , label: "Artifactory"},
//   {value:"utilities" , label: "Utilities"}
// ];

function AddTaskTemplateForm({ closeModal, taskTemplates, isLoading, handleAddTaskTemplate }) {
  let taskTemplateNames = taskTemplates.map(taskTemplate => taskTemplate.name);
  let taskTemplateKeys = taskTemplates.map(taskTemplate => taskTemplate.key);

  const handleSubmit = async values => {
    let newRevisionConfig = {
      version: 1,
      image: values.icon, 
      arguments: values.arguments.trim().split(/\s{1,}/),
      command: values.command,
      config: []
    };
    const body =  
    {
      name: values.name,
      description: values.description,
      category: values.category,
      key: values.key,
      currentVersion: 1,
      revisions:[newRevisionConfig],
      nodeType: "templateTask"
    };
    await handleAddTaskTemplate({body, closeModal});
  };
  return (
    <Formik
      initialValues={{
        name: "",
        category: "",
        // category: categories[0],
        icon: taskTemplateIcons[0].name,
        description: "",
        arguments: "",
        command: ""
      }}
      validationSchema={Yup.object().shape({
        key: Yup.string()
          .required("Enter a Key")
          .notOneOf(
            taskTemplateKeys,
            "Enter a unique value for key"
          ),
        name: Yup.string()
          .required("Enter a name")
          .notOneOf(
            taskTemplateNames,
            "Enter a unique value for component name"
          ),
        category: Yup.string()
          .required("Enter a category"),
        description: Yup.string()
          .lowercase()
          .min(4, "The description must be at least 4 characters")
          .max(200, "The description must be less than 60 characters")
          .required("Enter a desccription"),
        arguments: Yup.string()
        // .required("Enter some arguments")
        ,
        command: Yup.string()
        // .required("Enter a command")
      })}
      onSubmit={handleSubmit}
      initialErrors={[{name:"Name required"}]}
    >
      { props => {
        const { handleSubmit, isValid, values, errors, touched, handleChange, setFieldValue, handleBlur } = props;
        return (
          <ModalFlowForm onSubmit={handleSubmit}>
            <ModalBody>
              {isLoading && <Loading />}
              <TextInput
                id="key"
                labelText="Key"
                placeholder="Key"
                name="key"
                value={values.key}
                onBlur={handleBlur}
                onChange={handleChange}
                invalid={errors.key && touched.key}
                invalidText={errors.key}
              />
              <TextInput
                id="name"
                invalid={errors.name && touched.name}
                invalidText={errors.name}
                labelText="Name"
                helperText="Must be unique"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Name"
                value={values.name}
              />
              <TextInput
                id="category"
                invalid={errors.category && touched.category}
                invalidText={errors.category}
                labelText="Category"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Category"
                value={values.category}
              />
              {/* <ComboBox
                id="category"
                helperText="Choose which category it falls under"
                invalid={errors.category && touched.category}
                invalidText={errors.category}
                onBlur={handleBlur}
                items={categories}
                initialSelectedItem={values.category}
                onChange={({ selectedItem }) => setFieldValue("category", selectedItem)}
                className={styles.teamsDropdown}
              /> */}
              <TextInput
                id="arguments"
                labelText="Arguments"
                helperText="Type the argument with spaces - e.g., slack message mail"
                placeholder="Arguments"
                name="arguments"
                value={values.arguments}
                onBlur={handleBlur}
                onChange={handleChange}
                invalid={errors.arguments && touched.arguments}
                invalidText={errors.arguments}
              />
              <TextInput
                id="command"
                labelText="Comand"
                helperText="Helper text for command"
                placeholder="Command"
                name="command"
                value={values.command}
                onBlur={handleBlur}
                onChange={handleChange}
                invalid={errors.command && touched.command}
                invalidText={errors.command}
              />
              <p className={styles.iconTitle}>Icon</p>
              <p className={styles.iconSubtitle}>Choose the icon that best fits this task</p>
              <div className={styles.iconsWrapper}>
                {taskTemplateIcons.map((image, index) => (
                  <label
                    className={cx(styles.iconLabel, {
                      [styles.active]: values.icon === image.name
                    })}
                    key={`icon-number-${index}`}
                  >
                    <input
                      id={image.taskTemplateNames}
                      readOnly
                      checked={values.icon === image.name}
                      onClick={() => setFieldValue("icon", image.name)}
                      value={image.name}
                      type="radio"
                    />
                    <image.src key={`${image.name}-${index}`} alt={`${image.name} icon`} className={styles.icon} />
                  </label>
                ))}
              </div>
              <TextArea
                id="description"
                invalid={errors.description && touched.description}
                invalidText={errors.description}
                labelText="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Description"
                value={values.description}
              />
            </ModalBody>
            <ModalFooter>
              <Button kind="secondary" onClick={closeModal} type="button">
                Cancel
              </Button>
              <Button disabled={!isValid || isLoading} type="submit">
                {!isLoading ? "Create" : "...Creating"}
              </Button>
            </ModalFooter>
          </ModalFlowForm>
        );
      }}
    </Formik>
  );
}

export default AddTaskTemplateForm;
