import React from 'react'
import PieChart from '../../components/PieChart'
import { Box } from '@mui/material';
import Header from '../../components/Header';
// import { useTheme } from '@mui/material';
// import { tokens } from '../../theme';
const Bar = () => {
    // const theme = useTheme()
    // const colors = tokens(theme.palette.mode)
    return (
        <Box m="20px" height="75vh" p="2px">
            <Header title="BAR CHART" subtitle="simple bar chart" />
            <PieChart />
        </Box>
    )
}

export default Bar


//NEED PRO LICENSE !!!
// import * as React from 'react';
// import { useState, useEffect } from "react";
// import {
//   DataGridPro,
//   GridRowModel,
//   GridRowOrderChangeParams,
// } from '@mui/x-data-grid-pro';
// import { useDemoData } from '@mui/x-data-grid-generator';

// function updateRowPosition(initialIndex, newIndex, rows) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const rowsClone = [...rows];
//       const row = rowsClone.splice(initialIndex, 1)[0];
//       rowsClone.splice(newIndex, 0, row);
//       resolve(rowsClone);
//     }, Math.random() * 500 + 100); // simulate network latency
//   });
// }

// export default function RowOrderingGrid() {
//   const { data, loading: initialLoadingState } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 20,
//     maxColumns: 20,
//   });

//   const [rows, setRows] = useState(data.rows);
//   const [loading, setLoading] = useState(initialLoadingState);

//   useEffect(() => {
//     setRows(data.rows);
//   }, [data]);

//   useEffect(() => {
//     setLoading(initialLoadingState);
//   }, [initialLoadingState]);

//   const handleRowOrderChange = async (params) => {
//     setLoading(true);
//     const newRows = await updateRowPosition(
//       params.oldIndex,
//       params.targetIndex,
//       rows,
//     );

//     setRows(newRows);
//     setLoading(false);
//   };

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGridPro
//         {...data}
//         loading={loading}
//         rows={rows}
//         rowReordering
//         onRowOrderChange={handleRowOrderChange}
//       />
//     </div>
//   );
// }


