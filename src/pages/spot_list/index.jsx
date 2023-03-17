import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

const SpotList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "Id", width: 100 },
    { field: "registrarId", headerName: "Registrar Id", width: 100 },
    {
      field: "name",
      headerName: "Name",
      cellClassName: "name-column--cell",
      width: 200,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      width: 100,
    },
    { field: "phone", headerName: "Phone Number", width: 100 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "address", headerName: "Address", width: 250 },
    { field: "city", headerName: "City", width: 100 },
    { field: "zipCode", headerName: "Zip Code", width: 100 },
  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (rowData) => {
    console.log(rowData);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Spot List" subtitle="List of all your favourite spots" />
      </Box>
      <Box
        m="8px 0 0 0"
        width="100%"
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          onRowClick={(rowData) => handleClickOpen(rowData)}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <div>
          <Button variant="contained" onClick={handleClickOpen}>
            Open alert dialog
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={handleClose} >
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Box>
      {/* <div>
          <Button variant="outlined" onClick={handleClickOpen}>
            Open alert dialog
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={handleClose} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
      </div> */}
    </Box>
  );
};

export default SpotList;
