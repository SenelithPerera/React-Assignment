import React from 'react';
import './App.css';
import DatatablePage from '../src/components/Table/table'
import Header from '../src/components/header-component/header'
import TextFieldComponent from '../src/components/text-field/textfield'
import { Grid, Paper } from '@material-ui/core';
import ButtonComponent from '../src/components/button-component/button';
const categoryJson = require('../src/Data/categories.json');
const licenseJson = require('../src/Data/license.json');
const statesJson = require('../src/Data/states');
const statusJson = require('../src/Data/status.json');
const displayJson = require('../src/Data/display.json');
const TableData = require('../src/Data/tableData.json')


export default class App extends React.Component {

  state = {
    tableData: TableData.tableData
  }

  render() {

    return (
      <div className="App">

        <Header />
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xl={12}>
            <div style={{ display: 'inline' }}>
              <TextFieldComponent type='text' widthSize="20vh" label="search by question" onChanging={this.readme.bind(this)} />
              <TextFieldComponent data={categoryJson} type='dropDown' label="All categories" value="OK" />
              <TextFieldComponent data={licenseJson} type='dropDown' label="License" value="OK" />
              <TextFieldComponent data={statesJson} type='dropDown' label="All States" value="Ok" />
              <TextFieldComponent data={statusJson} type='dropDown' label="status" value="Ok" />
              <TextFieldComponent data={displayJson} type='dropDown' label="Display" value="OK" />
              <ButtonComponent buttonText='search' />
            </div>

          </Grid>

          <DatatablePage tableDate={this.state.tableData} tabelHead={TableData.tableHead} />

        </Grid>


      </div>
    )

  }

  readme(event) {
    const value = event.target.value.toUpperCase();
    const tempvalue = TableData;
    var dataArray = [];
    if (value === null) {
      this.setState({ tableData: tempvalue });
    } else {
      TableData.tableData.map((data) => {
        if (data.questions.match(event.target.value.toUpperCase())) {

          dataArray.push(data)
          this.setState({ tableData: dataArray });
        }
      })
    }

  }
}



