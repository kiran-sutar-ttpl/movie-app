import * as React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Card, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function DataTable() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 });
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "mobileNumber",
      headerName: "Mobile No.",
      type: "number",
      width: 130,
    },
    {
      field: "email",
      headerName: "Email",
      width: 160,
    },
    {
      field: "registered as",
      headerName: "Registered As",
      width: 160,
    },
    {
      field: "registered under",
      headerName: "Registered Under",
      width: 160,
    },

    {
      field: "address",
      headerName: "Address",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "country",
      headerName: "Country",
      width: 140,
    },
    {
      field: "state",
      headerName: "State",
      width: 140,
    },
    {
      field: "city",
      headerName: "City",
      width: 140,
    },
    {
      field: "postalcode",
      headerName: "Postal code",
      type: "number",
      width: 100,
    },
    {
      field: "delete",
      headerName: "Actions",
      sortable: false,
      width: 120,
      renderCell: (params) => (
        <IconButton>
          <MoreHorizIcon onClick={handleActions(params.row.id)} />
        </IconButton>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      role: "Admin",
      mobileNumber: "1234567890",
      country: "United States",
      state: "California",
      city: "Los Angeles",
      postalCode: "90001",
    },
    {
      id: 2,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      role: "Admin",
      mobileNumber: "1234567890",
      country: "United States",
      state: "California",
      city: "Los Angeles",
      postalCode: "90001",
    },
    {
      id: 3,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      role: "Admin",
      mobileNumber: "1234567890",
      country: "United States",
      state: "California",
      city: "Los Angeles",
      postalCode: "90001",
    },
  ];
  const handleActions = (id) => (event) => {
    const { clientX, clientY } = event;
    setCardPosition({
      top: clientY + window.scrollY,
      left: clientX + window.scrollX,
    });
    setIsCardOpen(!isCardOpen);
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Card style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 15]}
          checkboxSelection
        />
      </Card>
      {isCardOpen && (
        <div
          sx={{
            top: cardPosition.top,
            left: cardPosition.left,
            zIndex: 1000,
          }}
        >
        </div>
      )}
      
    </>
  );
}
