import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";

function ReusableDialog({ open, onClose, title, formFields, onSubmit }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      style={{ borderRadius: "20px" }}
    >
      <DialogTitle variant="contained">
        <h3 style={{ textAlign: "center" }}>{title}</h3>
      </DialogTitle>
      <DialogContent>
        <form>
          <Stack spacing={2} margin={1}>
            {formFields.map((field, index) => (
              <TextField
                key={index}
                required
                error={field.error}
                helperText={field.helperText}
                variant="outlined"
                label={field.label}
                name={field.name}
                type={field.type}
                value={field.value}
                onChange={field.onChange}
              />
            ))}
            <Button
              variant="contained"
              sx={{ padding: "15px" }}
              onClick={onSubmit}
            >
            Update Password
            </Button>
          </Stack>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ReusableDialog;
