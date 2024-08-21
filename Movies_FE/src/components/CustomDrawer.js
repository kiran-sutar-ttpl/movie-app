import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Divider } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../businesslogic/styles/global.scss";
import { CustomAccordion } from "./CustomAccordion";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "../businesslogic/styles/global.scss"
import ReusableDialog from "./DialogBox/ReusableDialog";
import useDialog from "./DialogBox/UseDailog";

const CustomDrawer = ({ isOpen, onClose }) => {
  const {
    openDialog,
    handleOpenDialog,
    handleCloseDialog,
    handleSubmitDialog,
    formFields,
  } = useDialog();

  return (
    <Drawer anchor="right" open={isOpen} close={onClose}>
      <Box
        sx={{ width: "400px", height: "100%", overflowY: "auto" }}
        className="d-flex flex-column p-1"
      >
        <Box
          sx={{
            marginTop: "20px",
            padding: "16px",
            borderTop: "1px solid #ccc",
          }}
        >
          <Typography variant="body1"></Typography>
        </Box>
        <Box flex={1}>
          <Typography className="d-flex justify-center align-center flex-column">
            <AccountCircleIcon sx={{ fontSize: "100px", color: "lightgray" }} />
            <Typography variant="secondary">Prakash Devkar</Typography>
            <Typography>devkarp235@gmail.com</Typography>
            <Typography>1236547899</Typography>
          </Typography>
        </Box>
        <Divider sx={{ my: 1 }} />
        <Box flex={3} sx={{ overflowY: "auto" }}>
          <Typography variant="body1">
            <CustomAccordion
              id="panel1a"
              headerText="Address Details"
              user
              defaultExpanded
            />
            <CustomAccordion
              id="panel1a"
              headerText="Address Details"
              defaultExpanded
            />
          </Typography>
          <Box  className="d-flex justify-center align-center m-1">
          <Button sx={{width:'100%', padding:'10px'}}  variant="contained" onClick={handleOpenDialog}>Change Password</Button>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "auto",
          }}
        >
          <Typography
            variant="body1"
            color="gray"
            sx={{ cursor: "pointer" }}
            onClick={onClose}
          > 
            <ArrowRightIcon />
          </Typography>
        </Box>
        <ReusableDialog
        open={openDialog}
        onClose={handleCloseDialog}
        title="Change Password"
        formFields={formFields}
        onSubmit={handleCloseDialog}
      />
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
