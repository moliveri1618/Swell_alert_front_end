import React from "react";
import GeographyChart from "../../components/GeographyChart";
import { Box } from "@mui/material";
import Header from "../../components/Header";
const VisitedCountries = () => {
  return (
    <Box m="20px" height="75vh" p="2px">
      <Header title="Visited Countries" subtitle="Evertytime a spot will be selected in the Spot List section, the related contry will appear here" />
      <GeographyChart />
    </Box>
  );
};

export default VisitedCountries;
