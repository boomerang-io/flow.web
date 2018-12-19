import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as workflowActions } from "State/workflow";
import classnames from "classnames";
import AlertModalWrapper from "@boomerang/boomerang-components/lib/AlertModal";
import ConfirmModal from "@boomerang/boomerang-components/lib/ConfirmModal";
import Tooltip from "@boomerang/boomerang-components/lib/Tooltip";
import InputsModal from "./InputsModal";
import close from "Assets/svg/close_black.svg";
import pencil from "Assets/svg/pencil.svg";
import plus from "Assets/svg/plus.svg";
import INPUT_TYPES from "Constants/workflowInputTypes";
import "./styles.scss";

class Inputs extends Component {
  formatDefaultValue = value => {
    switch (typeof value) {
      case INPUT_TYPES.BOOLEAN:
        return value.toString();
      case INPUT_TYPES.SELECT:
        return value;
      default:
        return value;
    }
  };

  deleteInput = key => {
    this.props.workflowActions.deleteWorkflowInput({ key });
  };

  render() {
    const { inputs } = this.props;
    const inputsNames = inputs.map(input => input.key);
    return (
      <div className="c-workflow-inputs">
        <div className="b-workflow-inputs">
          {inputs.length > 0 &&
            inputs.map(input => (
              <div key={input.id} className={classnames("b-workflow-input", `--${input.type}`)}>
                <div className="b-workflow-input__name">{input.label}</div>
                <div className="b-workflow-input-field">
                  <div className="b-workflow-input-field__key">Key </div>
                  <div className="b-workflow-input-field__value">{input.key}</div>
                </div>
                <div className="b-workflow-input-field">
                  <div className="b-workflow-input-field__key">Description </div>
                  <div className="b-workflow-input-field__value">{input.description}</div>
                </div>
                <div className="b-workflow-input-field">
                  <div className="b-workflow-input-field__key">Type </div>
                  <div className="b-workflow-input-field__value">{input.type}</div>
                </div>
                <div className="b-workflow-input-field">
                  <div className="b-workflow-input-field__key">Default value </div>
                  <div className="b-workflow-input-field__value">{this.formatDefaultValue(input.defaultValue)}</div>
                </div>
                {input.validValues && (
                  <div className="b-workflow-input-field">
                    <div className="b-workflow-input-field__key">Valid values </div>
                    <div className="b-workflow-input-field__value">
                      {this.formatDefaultValue(input.validValues.join(", "))}
                    </div>
                  </div>
                )}
                <AlertModalWrapper
                  ModalTrigger={() => (
                    <>
                      <img
                        data-tip
                        data-for={`${input.id}`}
                        className="b-workflow-input__delete"
                        src={close}
                        alt="delete"
                      />
                      <Tooltip id={`${input.id}`} place="top" theme="bmrg-white">
                        Delete Input
                      </Tooltip>
                    </>
                  )}
                  modalContent={(closeModal, rest) => (
                    <ConfirmModal
                      closeModal={closeModal}
                      affirmativeAction={() => {
                        closeModal();
                        this.deleteInput(input.key);
                      }}
                      title="REMOVE THIS PROPERTY?"
                      subTitleTop="This input parameter will be deleted"
                      cancelText="NO"
                      affirmativeText="YES"
                      theme="bmrg-white"
                      {...rest}
                    />
                  )}
                />
                <InputsModal
                  isEdit
                  inputsNames={inputsNames.filter(inputName => inputName !== input.key)}
                  Button={() => (
                    <div className="b-workflow-input-edit">
                      Edit
                      <img className="b-workflow-input-edit__pencil" src={pencil} alt="Edit input" />
                    </div>
                  )}
                  input={input}
                />
              </div>
            ))}
          <InputsModal
            isEdit={false}
            inputsNames={inputsNames}
            Button={() => (
              <div className="b-workflow-input-create">
                <img className="b-workflow-input-create__plus" src={plus} alt="Create input" />
                Create New Property
              </div>
            )}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  inputs: state.workflow.data.properties
});

const mapDispatchToProps = dispatch => ({
  workflowActions: bindActionCreators(workflowActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inputs);
