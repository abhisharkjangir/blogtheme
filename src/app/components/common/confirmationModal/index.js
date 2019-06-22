import React from "react";
import Modal from "react-responsive-modal";
import "./confirmationModal.scss";
import Button from "../button";

const ConfirmationModal = ({
  isOpen,
  negativeBtnLabel = "No",
  positiveBtnLabel = "Yes",
  title = "Confirmation",
  message,
  onClose,
  item
}) => {
  return (
    <Modal
      open={isOpen}
      showCloseIcon={false}
      onClose={() => onClose(false)}
      classNames={{
        transitionEnter: "transitionEnter",
        transitionEnterActive: "transitionEnterActive",
        transitionExit: "transitionExitActive",
        transitionExitActive: "transitionExitActive"
      }}
    >
      <div className="confirmation-modal">
        <div className="modal-header">{title}</div>
        <div className="modal-body">{message}</div>
        <div className="modal-footer">
          <Button
            variations="size-xs"
            onClick={() => onClose(true, item)}
            label={positiveBtnLabel}
          />
          <Button
            variations="size-xs"
            onClick={() => onClose(false, item)}
            label={negativeBtnLabel}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
