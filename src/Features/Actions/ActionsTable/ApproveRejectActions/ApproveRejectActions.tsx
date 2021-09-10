import React from "react";
import { queryCache, useMutation } from "react-query";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Button,
  ComposedModal,
  InlineNotification,
  Loading,
  ModalBody,
  ModalForm,
  ModalFooter,
  notify,
  TextArea,
  ToastNotification,
  TooltipHover,
} from "@boomerang-io/carbon-addons-boomerang-react";
import { ApprovalInputRequired } from "Constants";
import { resolver } from "Config/servicesConfig";
import { Action } from "Types";
import dateHelper from "Utils/dateHelper";
import { Warning16 } from "@carbon/icons-react";
import styles from "./ApproveRejectActions.module.scss";

const ModalType = {
  Single: "single",
  Approve: "approve",
  Reject: "reject",
};

type ApproveRejectActionsProps = {
  actions: Action[];
  isAlreadyApproved?: boolean;
  handleCloseModal?: (args?: any) => any;
  modalTrigger: (args: any) => any;
  onSuccessfulApprovalRejection: () => any;
  queryToRefetch: string;
  type: "single" | "approve" | "reject";
  userCanApprove?: boolean;
};

function ApproveRejectActions({
  actions,
  isAlreadyApproved = false,
  handleCloseModal,
  modalTrigger,
  queryToRefetch,
  onSuccessfulApprovalRejection,
  type,
  userCanApprove = true,
}: ApproveRejectActionsProps) {
  const cancelRequestRef = React.useRef<any>();

  let title = "Approve selected actions";
  let subtitle = `You have selected ${actions.length} action${
    actions.length > 1 ? "s" : ""
  } to approve. Check the details are correct, add optional comments, and then click Approve.`;

  if (type === ModalType.Single) {
    title = "Pending action details";
    subtitle = "";
  } else if (type === ModalType.Reject) {
    title = "Reject selected actions";
    subtitle = `You have selected ${actions.length} action${
      actions.length > 1 ? "s" : ""
    } to reject. Check the details are correct, add optional comments, and then click Reject.`;
  }

  return (
    <ComposedModal
      modalTrigger={modalTrigger}
      composedModalProps={{ containerClassName: styles.modalContainer, shouldCloseOnOverlayClick: false }}
      modalHeaderProps={{ title, subtitle }}
      onCloseModal={() => {
        if (cancelRequestRef.current) cancelRequestRef.current();
        handleCloseModal && handleCloseModal();
      }}
    >
      {(props: any) => (
        <Form
          actions={actions}
          cancelRequestRef={cancelRequestRef}
          isAlreadyApproved={isAlreadyApproved}
          onSuccessfulApprovalRejection={onSuccessfulApprovalRejection}
          queryToRefetch={queryToRefetch}
          type={type}
          userCanApprove={userCanApprove}
          {...props}
        />
      )}
    </ComposedModal>
  );
}

type FormProps = {
  actions: Action[];
  cancelRequestRef: any;
  closeModal: (args?: any) => void;
  isAlreadyApproved: boolean;
  onSuccessfulApprovalRejection: () => any;
  queryToRefetch: string;
  type: string;
  userCanApprove?: boolean;
};

function Form({
  actions,
  cancelRequestRef,
  closeModal,
  isAlreadyApproved,
  onSuccessfulApprovalRejection,
  queryToRefetch,
  type,
  userCanApprove,
}: FormProps) {
  const [approveLoading, setApproveLoading] = React.useState(false);
  const [rejectLoading, setRejectLoading] = React.useState(false);

  /** Update actions */
  const [actionsMutation, { isLoading: actionsIsLoading, isError: actionsPutError }] = useMutation(
    (args: { body: any }) => {
      const { promise, cancel } = resolver.putWorkflowAction(args);
      cancelRequestRef.current = cancel;
      return promise;
    }
  );

  const handleActions = ({
    approved,
    notificationSubtitle,
    notificationTitle,
    setLoading,
    values,
  }: any) => async () => {
    typeof setLoading === "function" && setLoading(true);
    let request: any = [];

    Object.keys(values).forEach((actionId) => {
      request.push({ ...values[actionId], id: actionId, approved });
    });

    try {
      await actionsMutation({ body: request });
      typeof setLoading === "function" && setLoading(false);
      onSuccessfulApprovalRejection();
      queryCache.invalidateQueries(queryToRefetch);
      notify(<ToastNotification kind="success" subtitle={notificationSubtitle} title={notificationTitle} />);
      closeModal();
    } catch (err) {
      typeof setLoading === "function" && setLoading(false);
      // noop
    }
  };

  let initialValues: any = {};
  let validationSchema: any = {};
  actions.forEach((action) => {
    initialValues[action.id] = { comment: "" };
    validationSchema[action.id] = Yup.object().shape({
      comment: Yup.string().nullable().max(200, "The comment must not have more than 200 characters"),
    });
  });

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={() => {}}
      validationSchema={Yup.object().shape(validationSchema)}
    >
      {(props) => {
        const { isValid, values } = props;

        return (
          <ModalForm>
            <ModalBody className={styles.modalBody}>
              {actionsIsLoading ? <Loading /> : null}
              {type === ModalType.Single ? (
                <SingleActionSection
                  action={actions[0]}
                  formikBag={props}
                  isAlreadyApproved={isAlreadyApproved}
                  userCanApprove={userCanApprove}
                />
              ) : (
                actions.map((action) => <ActionSection key={action.id} action={action} formikBag={props} />)
              )}
              {actionsPutError && (
                <InlineNotification
                  style={{ marginBottom: "0.5rem" }}
                  kind="error"
                  title={"Crikey! That didn't work."}
                  subtitle={"Try again"}
                />
              )}
            </ModalBody>
            {type === ModalType.Single && userCanApprove ? (
              <ModalFooter className={styles.threeOptionFooter}>
                <Button className={styles.threeOptionFooterCancel} kind="secondary" type="button" onClick={closeModal}>
                  Cancel
                </Button>
                <Button
                  disabled={!isValid || actionsIsLoading || isAlreadyApproved}
                  kind="danger"
                  onClick={handleActions({
                    approved: false,
                    notificationTitle: "Success!",
                    notificationSubtitle: "Request to reject action submitted",
                    setLoading: setRejectLoading,
                    values,
                  })}
                >
                  {!rejectLoading ? "Reject" : "Rejecting..."}
                </Button>
                <Button
                  disabled={!isValid || actionsIsLoading || isAlreadyApproved}
                  onClick={handleActions({
                    approved: true,
                    notificationTitle: "Success!",
                    notificationSubtitle: "Request to approve action submitted",
                    setLoading: setApproveLoading,
                    values,
                  })}
                >
                  {!approveLoading ? "Approve" : "Approving..."}
                </Button>
              </ModalFooter>
            ) : type === ModalType.Approve ? (
              <ModalFooter>
                <Button kind="secondary" type="button" onClick={closeModal}>
                  Cancel
                </Button>
                <Button
                  disabled={!isValid || actionsIsLoading}
                  onClick={handleActions({
                    approved: true,
                    notificationTitle: "Success!",
                    notificationSubtitle: `Request to approve ${actions.length} actions submitted.`,
                    values,
                  })}
                >
                  {!actionsIsLoading ? "Approve" : "Approving..."}
                </Button>
              </ModalFooter>
            ) : type === ModalType.Reject ? (
              <ModalFooter>
                <Button kind="secondary" type="button" onClick={closeModal}>
                  Cancel
                </Button>
                <Button
                  disabled={!isValid || actionsIsLoading}
                  kind="danger"
                  onClick={handleActions({
                    approved: false,
                    notificationTitle: "Success!",
                    notificationSubtitle: `Request to reject ${actions.length} actions submitted.`,
                    values,
                  })}
                >
                  {!actionsIsLoading ? "Reject" : "Rejecting..."}
                </Button>
              </ModalFooter>
            ) : null}
          </ModalForm>
        );
      }}
    </Formik>
  );
}

function ActionSection({ formikBag, action }: any) {
  const { id, teamName, workflowName } = action;
  const { values, touched, errors, handleChange, handleBlur } = formikBag;

  const DataSection = ({ className, label, value }: any) => (
    <dl className={className}>
      <dt className={styles.dataLabel}>{label}</dt>
      <dd className={styles.dataValue}>{value ?? "---"}</dd>
    </dl>
  );

  return (
    <section className={styles.action}>
      <DataSection className={styles.data} label="Team" value={teamName} />
      <DataSection className={styles.data} label="Workflow" value={workflowName} />
      <div className={styles.comment}>
        <TextArea
          id={`${id}.comment`}
          className={styles.commentArea}
          labelText="Comments (optional)"
          placeholder="Add some reasoning for your decision"
          value={values[id]?.comment}
          onChange={handleChange}
          onBlur={handleBlur}
          invalid={errors[id]?.comment && touched[id]?.comment}
          invalidText={errors[id]?.comment}
        />
        <p className={styles.commentLength}>{`${values[id]?.comment.length}/200`}</p>
      </div>
    </section>
  );
}

function SingleActionSection({ formikBag, action, isAlreadyApproved, userCanApprove }: any) {
  const {
    numberOfApprovals = 0,
    approvalsRequired = 0,
    creationDate,
    id,
    inputRequired,
    workflowName,
    teamName,
  } = action;
  const { values, touched, errors, handleChange, handleBlur } = formikBag;

  const DataSection = ({ className, label, value }: any) => (
    <dl className={className}>
      <dt className={styles.dataLabel}>{label}</dt>
      <dd className={styles.dataValue}>{value ?? "---"}</dd>
    </dl>
  );

  return (
    <section className={styles.action}>
      <DataSection className={styles.data} label="Team" value={teamName} />
      <DataSection className={styles.data} label="Workflow" value={workflowName} />
      <p className={styles.creationDate}>{`Submitted ${dateHelper.humanizedSimpleTimeAgo(creationDate)}`}</p>
      {userCanApprove ? (
        !isAlreadyApproved ? (
          <>
            <div className={styles.yourInput}>
              <p className={styles.singleLabel}>Your input</p>
              {inputRequired === ApprovalInputRequired.Required ? (
                <TooltipHover
                  direction="top"
                  tooltipText="You must make a decision in order for this component to proceed."
                >
                  <div className={styles.yourInputRequired}>
                    <p>Required</p>
                    <Warning16 className={styles.yourInputRequiredIcon} />
                  </div>
                </TooltipHover>
              ) : (
                <TooltipHover
                  direction="top"
                  tooltipText="Your input is not a required action, but will count towards the required total - other approver(s) can make the needed actions for this component to proceed."
                >
                  <p className={styles.yourInputOptional}>Optional</p>
                </TooltipHover>
              )}
              <p className={styles.singleHelperText}>
                You must make a decision in order for this component to proceed.
              </p>
            </div>
            <div className={styles.approvals}>
              <p className={styles.singleLabel}>Approvals</p>
              <p className={styles.approvalsRatio}>{`${numberOfApprovals}/${approvalsRequired} approvals`}</p>
              <p className={styles.singleHelperText}>
                Number of required approvals that have been received in order for this component to proceed.
              </p>
            </div>
            <div className={styles.comment}>
              <TextArea
                id={`${id}.comment`}
                className={styles.commentArea}
                labelText="Comments (optional)"
                placeholder="Add some reasoning for your decision"
                value={values[id]?.comment}
                onChange={handleChange}
                onBlur={handleBlur}
                invalid={errors[id]?.comment && touched[id]?.comment}
                invalidText={errors[id]?.comment}
              />
              <p className={styles.commentLength}>{`${values[id]?.comment.length}/200`}</p>
            </div>
          </>
        ) : (
          <div className={styles.yourInput}>
            <p className={styles.singleLabel}>Your input</p>
            <p className={styles.singleHelperText}>You already submitted your response for this action.</p>
          </div>
        )
      ) : null}
    </section>
  );
}

export default ApproveRejectActions;
