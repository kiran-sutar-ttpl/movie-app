import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { GridDeleteForeverIcon, GridMoreVertIcon } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import DeleteDataPopup from "../../components/DeleteDataPopup";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../store/moviesData/moviesSaga";

export default function CardComponent({ name, year, poster, handleEdit, id, item }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleClose = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleOptionClick = (item, isEdit) => {
    setAnchorEl(null);
    if (isEdit) {
      handleEdit(item, true);
    } else {
      setSelectedItem(item);
      setIsDelete(!isDelete);
    }
  };

  const deleteHandler = () => {
    dispatch(deleteMovie(selectedItem));
    setIsDelete(!isDelete);
  };


  return (
      
     <Card className="card-element">
    <CardMedia
        component="img"
        height="194"
        image={`data:image/png;base64,${poster}`}
        alt="image"
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Tooltip title={name} arrow>
              <Typography className="card-movie-title text-overflow-ellipses">
                {name || ""}
              </Typography>
            </Tooltip>
            <Tooltip title={year} arrow>
              <Typography className="card-movie-year text-overflow-ellipses">
                {year || ""}
              </Typography>
            </Tooltip>
          </Grid>
          <Grid item xs={2}>
            <IconButton
              aria-label="settings"
              className="white-color"
              onClick={handleClose}
            >
              <GridMoreVertIcon />
            </IconButton>
            <div>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
              >
                <MenuItem
                  onClick={() =>
                    handleOptionClick(item, true)
                  }
                >
                  {t("edit")}
                </MenuItem>
                <MenuItem
                  onClick={() => handleOptionClick(item)}
                >
                  {t("delete")}
                </MenuItem>
              </Menu>
            </div>
          </Grid>
        </Grid>
      </CardContent>
      <DeleteDataPopup
        open={isDelete}
        icon={<GridDeleteForeverIcon />}
        alertMessage={t("alert_message")}
        okButton={t("delete")}
        cancelButton={t("cancel")}
        onClickCancel={() => setIsDelete(!isDelete)}
        onClickOk={deleteHandler}
      /> 
    </Card>
  );
}
