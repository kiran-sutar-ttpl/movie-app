import React, { useEffect, useState } from "react";
import EmptyMovieList from "./emptyMovieList";
import AddNewMovie from "./addNewMovie";
import MovieTable from "./movieTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesList } from "../../store/moviesData/moviesSaga";

export default function Dashboard({ screenWidth }) {
  const dispatch = useDispatch();
  const { moviesData = {} } = useSelector((state) => state.movies) || {};
  const { data = [] } = moviesData || {}

  const [isAddNewMovie, setIsAddNewMovie] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editObject, setEditObject] = useState({});

  useEffect(() => {
    dispatch(fetchMoviesList());
  }, [dispatch]);

  const addMovieButtonHandle = (value) => {
    setIsEdit(false);
    setIsAddNewMovie(value);
    setEditObject({});
  };

  const handleEdit = (obj, value) => {
    setIsEdit(value);
    setEditObject(obj);
  };

  return isEdit ? (
    <AddNewMovie
      isEdit={isEdit}
      addMovieButtonHandle={addMovieButtonHandle}
      editObject={editObject}
      screenWidth={screenWidth}
    />
  ) : data?.length === 0 && !isAddNewMovie ? (
    <EmptyMovieList addMovieButtonHandle={addMovieButtonHandle} />
  ) : isAddNewMovie ? (
    <AddNewMovie addMovieButtonHandle={addMovieButtonHandle} screenWidth={screenWidth} />
  ) : data?.length > 0 ? (
    <MovieTable
      addMovieButtonHandle={addMovieButtonHandle}
      handleEdit={handleEdit}
      screenWidth={screenWidth}
    />
  ) : (
    ""
  );
}
