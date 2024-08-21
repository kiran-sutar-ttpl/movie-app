import React, { useRef, useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { useTranslation } from "react-i18next";

const ImageUploader = ({ file, setFile, isEdit = false }) => {
  const { t } = useTranslation();
  const fileInputRef = useRef(null);

  const [isCustomPreview, setIsCustomPreview] = useState(false);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDraggingOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsCustomPreview(true);
    const uploadedFiles = Array.from(event.dataTransfer.files);

    if (
      uploadedFiles.length === 1 &&
      ["image/png", "image/jpeg"].includes(uploadedFiles[0].type)
    ) {
      setFile(uploadedFiles[0]);
    } else {
      alert("Please drop a single valid image file (PNG or JPEG).");
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="max-height-draggable">
      <div
        onDrop={handleDrop}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className="upload-draggable-text max-height-draggable"
        onClick={handleClick}
      >
        {!file && (
          <>
            <LoginIcon className="upload-icons white-color" />
            <p className="white-color">{t("drop_an_image_here")}</p>
          </>
        )}
        {file && (
          <div>
            <img
              src={isEdit && !isCustomPreview ? `data:image/png;base64,${file}` : URL.createObjectURL(file)}
              alt="Preview"
              className="image-preview"
            />
          </div>
        )}
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          style={{ display: 'none' }}
          onChange={(e) => {
            const file = e.target.files
            if (
              file.length === 1 &&
              ["image/png", "image/jpeg"].includes(file[0].type)
            ) {
              setFile(file[0]);
            } else {
              alert("Please drop a single valid image file (PNG or JPEG).");
            }
          }}
        />
      </div>
    </div>
  );
};

export default ImageUploader;
