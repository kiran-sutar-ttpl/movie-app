import { useState } from "react";
import { validateStrongPassword } from "../../businesslogic/RegexValidation/RegexValidation";

const useDialog = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSubmitDialog = () => {
    console.log(
      "Password details:",
      formFields.map(({ label, value }) => ({ label, value }))
    );
  };

  const handleInputChange = (name, value) => {
    const isValidPassword = validateStrongPassword(value);

    setFormFields((prevFormFields) =>
      prevFormFields.map((field) => {
        if (field.name === name) {
          if (
            name === "new password" &&
            value ===
              prevFormFields.find((f) => f.name === "current password").value
          ) {
            return {
              ...field,
              value,
              error: true,
              helperText: "Current password and new password are the same.",
            };
          }

          return {
            ...field,
            value,
            error: name !== "current password" && !isValidPassword,
            helperText:
              name !== "current password" && isValidPassword
                ? ""
                : "Password must be strong"
          };
        } else {
          return field;
        }
      })
    );
  };

  const [formFields, setFormFields] = useState([
    {
      label: "Current Password",
      name: "current password",
      type: "password",
      value: "",
      onChange: (e) => handleInputChange("current password", e.target.value),
      error: false,
      helperText: "",
    },
    {
      label: "New Password",
      name: "new password",
      type: "password",
      value: "",
      onChange: (e) => handleInputChange("new password", e.target.value),
      error: false,
      helperText: "",
    },
    {
      label: "Confirm Password",
      name: "confirm password",
      type: "password",
      value: "",
      onChange: (e) => handleInputChange("confirm password", e.target.value),
      error: false,
      helperText: "",
    },
  ]);

  return {
    openDialog,
    handleOpenDialog,
    handleCloseDialog,
    handleSubmitDialog,
    formFields,
  };
};

export default useDialog;
