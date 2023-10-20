import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Link, useHistory } from "react-router-dom";
import { InlineLoading } from "@carbon/react";
import { ComposedModal, ToastNotification, notify, TooltipHover } from "@boomerang-io/carbon-addons-boomerang-react";
import ModalContent from "./ModalContent";
import { formatErrorMessage } from "@boomerang-io/utils";
import { resolver } from "Config/servicesConfig";
import { CircleFill, CircleStroke, Popup } from "@carbon/react/icons";
import { ComposedModalChildProps, ModalTriggerProps } from "Types";
import styles from "./integrationCard.module.scss";

interface IntegrationCardProps {
  teamName: string;
  data: any;
  url: string;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({ teamName, data, url }) => {
  const queryClient = useQueryClient();
  const [errorMessage, seterrorMessage] = useState(null);

  const unlinkIntegrationMutator = useMutation(resolver.delteGitHubAppLink);

  const handleDisable = async (closeModal: () => void) => {
    try {
      await unlinkIntegrationMutator.mutateAsync({ body: { team: teamName, installationId: data.ref } });
      notify(
        <ToastNotification
          kind="success"
          title={`Disable Integration`}
          subtitle={`${data.name} successfully disabled`}
        />
      );
      queryClient.invalidateQueries(url);
      closeModal();
    } catch {
      notify(
        <ToastNotification
          kind="error"
          title="Something's Wrong"
          subtitle={`Request to disable ${data.name.toLowerCase()} failed`}
        />
      );
    }
  };

  /*
   * This function is used to handle the execution of a workflow. It only needs to work for WorkflowView.Workflow as Templates cant be executed
   */
  // TODO: besides GitHub, do different Integrations work in different ways. Are some a pop out and some internal?
  const handleEnable = async (closeModal: () => void) => {
    try {
      // // @ts-ignore:next-line
      // await executeWorkflowMutator({
      //   data: "",
      // });
      // notify(
      //   <ToastNotification
      //     kind="success"
      //     title={`Enable Integration}`}
      //     subtitle={`Successfully enabled ${data.name.toLowerCase()} integration`}
      //   />
      // );
      // queryClient.invalidateQueries(url);
      window.open(data.link, "_blank");
      closeModal();
    } catch (err) {
      seterrorMessage(
        formatErrorMessage({
          error: err,
          defaultMessage: "Enable integration failed",
        })
      );
      //no-op
    }
  };

  return (
    <ComposedModal
      composedModalProps={{ containerClassName: styles.modalContainer }}
      modalHeaderProps={{
        title: `Enable ${data.name} Integration`,
        subtitle: `${data.description}`,
      }}
      modalTrigger={({ openModal }: ModalTriggerProps) => (
        <Link
          to=""
          onClick={(e: React.SyntheticEvent) => {
            e.preventDefault();
            openModal();
          }}
        >
          <div className={styles.container}>
            <section className={styles.details}>
              <div className={styles.iconContainer}>
                <img className={styles.icon} alt={`${data.name}`} src={data.icon} />
              </div>
              <div className={styles.descriptionContainer}>
                <h1 title={data.name} className={styles.name} data-testid="card-title">
                  {data.name}
                </h1>
                <p title={data.description} className={styles.description}>
                  {data.description}
                </p>
              </div>
            </section>
            <Popup size={24} className={styles.cardIcon} />
            <section className={styles.launch}></section>
            {unlinkIntegrationMutator.isLoading ? (
              <InlineLoading
                description="Loading.."
                style={{ position: "absolute", left: "0.5rem", top: "0", width: "fit-content" }}
              />
            ) : (
              <div className={styles.status}>
                {data.status === "active" ? (
                  <TooltipHover direction="top" tooltipText="Active">
                    <CircleFill style={{ fill: "#009d9a", marginRight: "0.5rem" }} />
                  </TooltipHover>
                ) : (
                  <TooltipHover direction="top" tooltipText="Inactive">
                    <CircleStroke style={{ fill: "#393939", marginRight: "0.5rem" }} />
                  </TooltipHover>
                )}
              </div>
            )}
          </div>
        </Link>
      )}
    >
      {({ closeModal }: ComposedModalChildProps) => (
        <ModalContent
          closeModal={closeModal}
          error={unlinkIntegrationMutator.error}
          handleEnable={handleEnable}
          handleDisable={handleDisable}
          errorMessage={errorMessage}
          data={data}
        />
      )}
    </ComposedModal>
  );
};

{
  /* {Array.isArray(formattedProperties) && formattedProperties.length !== 0 ? (
          <ComposedModal
            modalHeaderProps={{
              title: `Workflow Parameters`,
              subtitle: `Provide parameter values for your Workflow`,
            }}
            modalTrigger={({ openModal }: ModalTriggerProps) => (
              <Button size="md" onClick={openModal}>
                Enable
              </Button>
            )}
          >
            {({ closeModal }: ComposedModalChildProps) => (
              <WorkflowInputModalContent
                closeModal={closeModal}
                executeError={executeError}
                executeWorkflow={handleExecuteWorkflow}
                isExecuting={isExecuting}
                inputs={formattedProperties}
              />
            )}
          </ComposedModal>
        ) : ( */
}

export default IntegrationCard;
