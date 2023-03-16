import React from 'react'
import BarChart from '../../components/BarChart'
import { Box } from '@mui/material';
import Header from '../../components/Header';
// import { useTheme } from '@mui/material';
// import { tokens } from '../../theme';
const DataAnalyzer = () => {
    // const theme = useTheme()
    // const colors = tokens(theme.palette.mode)
    return (
        <Box m="20px" height="75vh">
            <Header title="Spot data analyzer" subtitle="Keep track of surfing quality for each spot" />
            <BarChart />
        </Box>
    )
}

export default DataAnalyzer