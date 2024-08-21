import React, { useEffect, useState } from "react";
import i18n from "i18next";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import LanguageIcon from "@mui/icons-material/Language";

function ChangeLang() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("lang") || "en"
  );

  useEffect(() => {
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("lang", selectedLang);
  }, [selectedLang]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLang = (l) => {
    setSelectedLang(l);
    handleClose();
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-end", color:'gray' }}>
      <IconButton
        aria-label="Language"
        aria-controls="language-menu"
        onClick={handleClick}
      >
        <LanguageIcon  sx={{color:'lightgray'}}fontSize="large"/>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => changeLang("en")}>English</MenuItem>
        <MenuItem onClick={() => changeLang("hi")}>Hindi</MenuItem>
        <MenuItem onClick={() => changeLang("de")}>German</MenuItem>
        <MenuItem onClick={() => changeLang("ru")}>Russian</MenuItem>
        <MenuItem onClick={() => changeLang("fr")}>French</MenuItem>
        <MenuItem onClick={() => changeLang("mr")}>Marathi</MenuItem>
      </Menu>
    </div>
  );
}

export default ChangeLang;
