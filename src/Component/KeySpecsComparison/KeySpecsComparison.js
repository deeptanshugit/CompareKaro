import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography, Box
} from '@mui/material';

const DynamicComparisonTable = ({ data }) => {
  console.log(data)
  if (!data || data.length === 0) return null;

  const titles = [...new Set(data.flatMap(d => d.specs.map(s => s.title)))];

  return (
    <TableContainer component={Paper} sx={{ maxWidth: "100%", mx: 'auto', mt: 4, borderRadius: 2 }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
            <TableCell>
              <Typography variant="subtitle1" fontWeight="bold">Key Highlights</Typography>
            </TableCell>
            {data.map((modelData) => (
              <TableCell key={modelData.model}>
                <Typography variant="subtitle1" fontWeight="bold" textTransform="capitalize">
                  {modelData.model}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {titles.map((title) => (
            <TableRow key={title}>
              <TableCell>{title}</TableCell>
              {data.map((modelData) => {
                const spec = modelData.specs.find(s => s.title === title);
                return (
                  <TableCell key={modelData.model + title}>
                    <Box display="flex" alignItems="center" gap={1}>
                      {/* {spec?.icon} */}
                      <Typography>{spec?.value || '-'}</Typography>
                    </Box>
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DynamicComparisonTable;
