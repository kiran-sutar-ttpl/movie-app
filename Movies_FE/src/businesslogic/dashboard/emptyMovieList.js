import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function EmptyMovieList({ addMovieButtonHandle }) {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="white-color empty-list-title">{t("empty_movie_list")}</h1>
      <Button
        variant="contained"
        className="login-button"
        sx={{ mb: 1, p: 1.5 }}
        onClick={() => addMovieButtonHandle(true)}
      >
        {t("add_new_movie")}
      </Button>
    </>
  );
}
