import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { regexPatterns } from "../../RegexValidation/RegexPatterns";
import { useNavigate } from "react-router-dom";
import { postLoginUserWithCredentials } from "../../../store/reducers/login/loginSaga";
import { stopLoadingProcess } from "../../../store/reducers/loader/LoderSaga";

function LoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState(false);

  useEffect(() => {
    dispatch(stopLoadingProcess());
  }, [dispatch]);

  const handleEmailChange = (e, fieldName) => {
    const newEmail = e.target.value;
    fieldName(newEmail);
    setIsError(false);
  };

  const handleSubmit = () => {
    if (
      !userName ||
      !password ||
      isError ||
      (userName && !regexPatterns.email.test(userName)) ||
      (password && !regexPatterns.passCode.test(password))
    ) {
      setIsError(true);
      return null;
    }
    dispatch(
      postLoginUserWithCredentials({
        navigate: navigate,
        isLoading: true,
        loginCreds: { email: userName, password: password },
        isRememberMe: isRememberMe
      })
    );
  };

  return (
    <>
      <h1 className="white-color login-head">{t("Log_In")}</h1>
      <Grid
        container
        flexDirection={"column"}
        alignItems={"center"}
        paddingTop={"40px"}
      >
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <OutlinedInput
            required
            fullWidth
            id="email"
            name={t("email")}
            autoComplete="email"
            placeholder={t("email")}
            className={`${
              (userName && !regexPatterns.email.test(userName)) ||
              (isError && !userName)
                ? "error-input"
                : ""
            } normal-text`}
            onChange={(e) => handleEmailChange(e, setUserName)}
            value={userName}
            inputProps={{ autoComplete: "new-password" }}
          />
          {((userName && !regexPatterns.email.test(userName)) ||
            (isError && !userName)) && (
            <FormHelperText className="error-message">
              {t("invalid_email_address")}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} paddingTop={"20px"}>
          <OutlinedInput
            required
            fullWidth
            name={t("password")}
            type="password"
            id="password"
            autoComplete="new-password"
            placeholder={t("password")}
            className={`${
              (password && !regexPatterns.passCode.test(password)) ||
              (isError && !password)
                ? "error-input"
                : ""
            } normal-text`}
            onChange={(e) => handleEmailChange(e, setPassword)}
            value={password}
            inputProps={{ autoComplete: "new-password" }}
          />
          {((password && !regexPatterns.passCode.test(password)) ||
            (isError && !password)) && (
            <FormHelperText className="error-message">
              {t("password_must-be_strong")}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={12} className="d-flex">
          <FormControlLabel
            control={
              <Checkbox
                value="allowExtraEmails"
                color="primary"
                className={`d-flex paddin-top-24px ${isRememberMe ? "check-box-active" : ""}`}
                defaultChecked={isRememberMe}
                onChange={() => {
                  setIsRememberMe(!isRememberMe)
                }}
              />
            }
            label={
              <Typography
                variant="body2"
                color="text.secondary"
                className="d-flex remember-me"
              >
                {t("Remember_me")}
              </Typography>
            }
          />
        </Grid>
        <Button
          variant="contained"
          className="login-button paddin-top-24px"
          sx={{ mb: 1, p: 1.5 }}
          onClick={handleSubmit}
        >
          {t("Log_in_link")}
        </Button>
      </Grid>
    </>
  );
}

export default LoginPage;
