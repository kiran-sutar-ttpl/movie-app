import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ImageUploader from "./imageUploader";
import { Button, FormHelperText, Grid, OutlinedInput } from "@mui/material";
import { useDispatch } from "react-redux";
import { addMovie, editMovie } from "../../store/moviesData/moviesSaga";
import { regexPatterns } from "../RegexValidation/RegexPatterns";

export default function AddNewMovie({
  addMovieButtonHandle,
  editObject = {},
  screenWidth,
  isEdit = false,
}) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [file, setFile] = useState(editObject?.preview || null);

  const [obj, setObje] = useState({
    ...(editObject || { title: "", publishingYear: "", poster: null }),
  });

  const [isError, setIsError] = useState(false);

  const handleSubmit = () => {
    if (
      !obj?.title ||
      !obj?.publishingYear ||
      !regexPatterns.text.test(obj?.title) ||
      !regexPatterns.number.test(obj?.publishingYear)
    ) {
      setIsError(true);
    } else {
      if (isEdit) {
        dispatch(
          editMovie({
            body: {
              title: obj?.title,
              poster: file || obj?.poster,
              publishingYear: obj?.publishingYear,
            },
            id: obj?.id,
            addMovieButtonHandle: addMovieButtonHandle,
          })
        );
      } else {
        dispatch(
          addMovie({
            body: {
              title: obj?.title,
              poster: file,
              publishingYear: obj?.publishingYear,
            },
            addMovieButtonHandle: addMovieButtonHandle,
          })
        );
      }
    }
  };

  const onChangeHandler = (e, subField) => {
    setIsError(false);
    setObje({ ...obj, [subField]: e.target.value });
  };

  return (
    <>
      <h1 className="white-color create-new-movie">
        {t("create_a_new_movie")}
      </h1>
      <div className="d-flex div-padding below-width-div">
        <ImageUploader file={file} setFile={setFile} isEdit={isEdit} />
        <div className="width-100 padding-left-120 padding-none-mobile-device">
          <Grid container flexDirection={"column"} alignItems={"flex-start"}>
            <Grid
              className="grid-width"
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <OutlinedInput
                required
                fullWidth
                id="title"
                name={t("title")}
                autoComplete="title"
                placeholder={t("title")}
                className="normal-text title-text-input"
                onChange={(e) => onChangeHandler(e, "title")}
                value={obj?.title}
              />
              {((obj?.title && !regexPatterns.text.test(obj?.title)) ||
                (isError && !obj?.title)) && (
                <FormHelperText className="error-message">
                  {t("text_input")}
                </FormHelperText>
              )}
            </Grid>
            <Grid
              className="paddin-top-24px grid-width"
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              paddingTop={"20px"}
            >
              <OutlinedInput
                required
                fullWidth
                name={t("publishing_year")}
                id="publishing_year"
                autoComplete="publishing_year"
                placeholder={t("publishing_year")}
                className="normal-text publishing-year-input"
                onChange={(e) => onChangeHandler(e, "publishingYear")}
                value={obj?.publishingYear}
              />
              {((obj?.publishingYear &&
                !regexPatterns.number.test(obj?.publishingYear)) ||
                (isError && !obj?.publishingYear)) && (
                <FormHelperText className="error-message">
                  {t("year_number")}
                </FormHelperText>
              )}
            </Grid>
          </Grid>
          {screenWidth > 1023 ? (
            <Grid container spacing={1} className="buttons-container-grid">
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Button
                  variant="contained"
                  className="cancel-button"
                  sx={{ mb: 1, p: 1.5 }}
                  onClick={() => addMovieButtonHandle(false)}
                >
                  {t("cancel")}
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Button
                  variant="contained"
                  className="submit-button"
                  sx={{ mb: 1, p: 1.5 }}
                  onClick={handleSubmit}
                >
                  {t("submit")}
                </Button>
              </Grid>
            </Grid>
          ) : (
            ""
          )}
        </div>
      </div>
      {screenWidth < 1023 ? (
        <Grid container spacing={1} className="buttons-container-grid">
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Button
              variant="contained"
              className="cancel-button"
              sx={{ mb: 1, p: 1.5 }}
              onClick={() => addMovieButtonHandle(false)}
            >
              {t("cancel")}
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Button
              variant="contained"
              className="submit-button"
              sx={{ mb: 1, p: 1.5 }}
              onClick={handleSubmit}
            >
              {t("submit")}
            </Button>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
    </>
  );
}
