import React from "react";
import GeographyChart from "../../components/GeographyChart";
import { Box } from "@mui/material";
import Header from "../../components/Header";
const SpotGeoLocation = () => {
  return (
    <Box m="20px" height="75vh" p="2px">
      <Header title="Spot geo location" subtitle="Find all the spots on the map" />
      <GeographyChart />
    </Box>
  );
};

export default SpotGeoLocation;
