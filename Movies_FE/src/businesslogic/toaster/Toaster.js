import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { handleToaster } from "../../store/reducers/toaster/ToasterSaga";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Toaster = () => {
  const toaster = useSelector((state) => state.toaster);
  const dispatch = useDispatch();
  const {
    open = false,
    onclose = () => {
      dispatch(handleToaster({ open: false }));
    },
    message,
    severity,
    anchorOrigin,
    autoHideDuration,
  } = toaster || {};
  
  const getSnackbarColor = (severity) => {
    switch (severity) {
      case "success":
        return "#4CAF50";
      case "error":
        return "#F44336";
      case "warning":
        return "#FFC107";
      default:
        return "#2196F3";
    }
  };

  return (
    <>
      {open && (
        <Snackbar
          open={open}
          autoHideDuration={autoHideDuration || 6000}
          onClose={() => onclose && onclose()}
          anchorOrigin={
            anchorOrigin || { vertical: "top", horizontal: "right" }
          }
        >
          <div>
            <Alert
              onClose={() => onclose && onclose()}
              severity={severity || "info"}
              style={{ backgroundColor: getSnackbarColor(severity) }}
            >
              {message}
            </Alert>
          </div>
        </Snackbar>
      )}
    </>
  );
};

export default Toaster;
