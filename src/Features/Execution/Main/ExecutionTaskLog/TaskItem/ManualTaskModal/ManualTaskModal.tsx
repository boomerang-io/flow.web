import React from "react";
import { useQueryClient, useMutation } from "react-query";
import ReactMarkdown from "react-markdown";
import { Button, InlineNotification, ModalBody, ModalFooter } from "@carbon/react";
import { Loading, ModalForm, notify, ToastNotification } from "@boomerang-io/carbon-addons-boomerang-react";
import { serviceUrl, resolver } from "Config/servicesConfig";
import "Styles/markdown.css";

type Props = {
  approvalId: string;
  executionId: string;
  closeModal: () => void;
  instructions: string;
};

// TODO: update to load info about the approval
function TaskApprovalModal({ approvalId, executionId, closeModal, instructions }: Props) {
  const queryClient = useQueryClient();

  const {
    mutateAsync: approvalMutator,
    isLoading: approvalsIsLoading,
    error: approvalsError,
  } = useMutation(resolver.putWorkflowAction, {
    onSuccess: () => {
      queryClient.invalidateQueries(serviceUrl.getWorkflowExecution({ executionId }));
    },
  });

  const handleSubmit = async (approvalValue: boolean) => {
    const body = {
      id: approvalId,
      approved: approvalValue,
    };
    try {
      await approvalMutator({ body });
      notify(
        <ToastNotification
          kind="success"
          title="Manual Task"
          subtitle={"Successfully submitted manual task completion request"}
        />,
      );
      closeModal();
    } catch (err) {
      // noop
    }
  };

  return (
    <ModalForm>
      {approvalsIsLoading && <Loading />}
      <ModalBody>
        <ReactMarkdown className="markdown-body" children={instructions} />
        {Boolean(approvalsError) && (
          <InlineNotification
            style={{ marginBottom: "0.5rem" }}
            lowContrast
            kind="error"
            title={"Manual Task Failed"}
            subtitle={"Something's Wrong"}
          />
        )}
      </ModalBody>
      <ModalFooter>
        <Button kind="secondary" type="button" onClick={closeModal}>
          Cancel
        </Button>
        <Button disabled={approvalsIsLoading} type="submit" kind="danger" onClick={() => handleSubmit(false)}>
          Complete Unsuccessfully
        </Button>
        <Button disabled={approvalsIsLoading} type="submit" onClick={() => handleSubmit(true)}>
          Complete Successfully
        </Button>
      </ModalFooter>
    </ModalForm>
  );
}

export default TaskApprovalModal;
