import React from "react";
import { useTranslation } from "react-i18next";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import CardComponent from "./cardComponent";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesList } from "../../store/moviesData/moviesSaga";

function MovieTable({ addMovieButtonHandle, handleEdit, screenWidth }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { moviesData = {} } = useSelector((state) => state.movies) || {};
  const { page, totalSize, data = [] } = moviesData || {};

  const handlePageChange = (newPage) => {
    dispatch(fetchMoviesList({ page: newPage }));
  };

  return (
    <>
      <div className="d-flex space-between paddin-bottom-24px">
        <p className="white-color my-movies-title margin-none">
          {t("my_movies")}{" "}
          <span onClick={() => addMovieButtonHandle(true)}>
            <AddCircleOutlineOutlinedIcon className="font-for-add-movies" />
          </span>
        </p>
        <span className="logout-text margin-none d-flex">
          {screenWidth > 1024 ? <p>{t("logout")} </p> : null}
          <LogoutOutlinedIcon
            onClick={() => {
              navigate("/login");
              localStorage.clear();
            }}
            className="logout-icon curson-pointer"
          />
        </span>
      </div>
      <Grid container spacing={2} className="overflow-for-table">
        {data?.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <CardComponent
              key={index}
              id={item?.id}
              name={item?.title}
              year={item?.publishingYear}
              handleEdit={handleEdit}
              poster={item?.preview}
              item={item}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <p
            className="curson-pointer logout-text"
            onClick={() => {
              if (Number(page) > 1) handlePageChange(Number(page) - 1);
            }}
          >
            {t("prev")}
          </p>
        </Grid>
        <Grid item xs={8} className="table-pagination logout-text">
          {" "}
          {Array.from(
            { length: Math.ceil(Number(totalSize) / 8) },
            (_, index) => (
              <p
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                disabled={index + 1 === Number(page)}
                className={index + 1 === Number(page) ? 'page-active' : 'page-inactive'}
              >
                {index + 1}
              </p>
            )
          )}
        </Grid>
        <Grid item xs={2}>
          <p
            className="curson-pointer logout-text"
            onClick={() => {
              if (Number(page) < Math.ceil(Number(totalSize) / 8))
                handlePageChange(Number(page) + 1);
            }}
          >
            {t("next")}
          </p>
        </Grid>
      </Grid>
    </>
  );
}

export default MovieTable;
