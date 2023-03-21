import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { Checkbox } from '@material-ui/core';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";



const SpotList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  let checkbox_is_selected = false;
  
  const columns = [
    { field: "id", headerName: "Id", width: 100 },
    { field: "registrarId", headerName: "Registrar Id", width: 100 },
    { field: "name", headerName: "Name", cellClassName: "name-column--cell", width: 200 },
    { field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left", width: 100 },
    { field: "phone", headerName: "Phone Number", width: 100 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "address", headerName: "Address", width: 250 },
    { field: "city", headerName: "City", width: 100 },
    { field: "zipCode", headerName: "Zip Code", width: 100 },
    {
      field: "visited", headerName: "Visited", width: 100, renderCell: (params) => (
        <Checkbox
          checked={params.value}
          inputProps={{ 'aria-label': 'visited checkbox' }}
        />
      )
    }
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
        <Header title="Spot List" subtitle="Click on a row to see wave height/wave quality trend for the current year"/>
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
          onRowClick={(rowData, event) => {

            //if user click on checbox dont do nothing, otherwise open dialog
            if (event.target.getAttribute('aria-colindex') !== '10' && event.target.getAttribute('aria-colindex') !== null) {
              handleClickOpen(rowData);
            } else {
              console.log(rowData);
              //call api from here and change visited in db ....
            }
          }}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
              "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                  width: "100%",
                  maxWidth: "3000px",  // Set your width here
                  height: "100%",
                  maxHeight: "1000px",
                },
              },
            }}
          >
            <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            {/* <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
              </DialogContentText>
            </DialogContent> */}
            <Box m="20px" height="50vh" p="2px">
              <Header title="Line CHART" subtitle="simple line chart" />
              <LineChart />
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose} >
                  Agree
                </Button>
              </DialogActions>
            </Box>
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
