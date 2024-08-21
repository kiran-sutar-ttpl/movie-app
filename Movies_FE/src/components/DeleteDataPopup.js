import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";

const DeleteDataPopup = ({
  open,
  onClose,
  okButton = "",
  cancelButton = "",
  onClickOk,
  onClickCancel,
  alertMessage,
  icon,
  confirmationMessage,
  style,
  okBtnColor = "error",
}) => (
  <div className="delete-data-popup">
    <Dialog open={open} onClose={onClose}>
      <div style={{ ...style }}>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {icon}
          {/* {confirmationMessage ? <h3 style={{ textAlign: 'center' }}>{confirmationMessage}</h3  > : <h2> </h2>} */}
          <DialogContentText sx={{ textAlign: "center" }}>
            {alertMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "space-around",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          {onClickCancel && (
            <Button
              variant="contained"
              className="cancel-button alert-modal"
              sx={{ mb: 1, p: 1.5 }}
              onClick={onClickCancel}
              // {...(buttonProps?.btntxt && buttonProps.btntxt)}
            >
              {cancelButton}
            </Button>
          )}
          <Button
            variant="contained"
            className="submit-button"
            sx={{ mb: 1, p: 1.5 }}
            onClick={onClickOk}
          >
            {okButton}
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  </div>
);

export default DeleteDataPopup;
