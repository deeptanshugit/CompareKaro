import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { formatKey } from "../../Helper/helper";

function ComparisonTable(props) {
  const keys = Object.keys(props.comparisonData[0]);

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Specification</TableCell>
              {props.comparisonData.map((item, index) => (
                <TableCell key={index}>{item.model}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {keys.map(
              (key) =>
                key !== "model" && (
                  <TableRow
                    key={key}
                    ref={(el) =>
                      (props.rowRefs.current[key.toLowerCase()] = el)
                    }
                  >
                    <TableCell>{formatKey(key)}</TableCell>
                    {props.comparisonData?.map((item, index) => (
                      <TableCell key={index}>{item[key]}</TableCell>
                    ))}
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ComparisonTable;
