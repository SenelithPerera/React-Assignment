import { Grid } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";


export default class SimpleTable extends React.Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    const data = this.props;
    console.log(data)
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xl={12} lg={12} md={12} sm={12}>
          <Paper style={{ width: '100%', overflowX: 'auto', overflowY: 'auto' }}>
            <Table
              style={{ width: '100%', height: '100%', }}
            >
              <TableHead>
                <TableRow >
                  {data.tabelHead.map((row, index) => {
                    return (
                      <TableCell key={index}>{row}</TableCell>
                    )
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.tableDate.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.questions}</TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.states}</TableCell>
                    <TableCell>{row.License}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.Display}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}