import React from 'react';
import { DataGridPro, GridRowsProp, GridColDef } from '@mui/x-data-grid-pro';
import PropTypes from 'prop-types';
import { MenuUnstyledProps } from '@mui/base';

interface MyObject {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company: string;
  address: string;
  city: string;
  postalZip: string;
  region: string;
  country: string;
}

interface RowData {
  id: number;
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  col6: string;
  col7: string;
  col8: string;
  col9: string;
  col10: string;
}

type MyState = {
  error?: any,
  isLoaded: boolean,
  rows: GridRowsProp,
  columns: GridColDef[],
}

type MyProps = {

}

export class MyComponent extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      rows: [],
      columns: [],
    };
  }

  componentDidMount() {
    fetch("data.json")
      .then(res => res.json())
      .then(
        (data) => {
          const tmp: RowData[] = [];
          data.forEach((item: MyObject) => {
            //console.log(item.firstName);
            tmp.push({
              id: item.id, 
              col1: item.firstName,
              col2: item.lastName,
              col3: item.phone,
              col4: item.email,
              col5: item.company,
              col6: item.address,
              col7: item.city,
              col8: item.postalZip,
              col9: item.region,
              col10: item.country
            });
          });

          const rows: GridRowsProp = tmp;
          const cols: GridColDef[] = [
            { field: 'col1', headerName: 'First Name', width: 150 },
            { field: 'col2', headerName: 'Last Name', width: 150 },
            { field: 'col3', headerName: 'Phone', width: 150 },
            { field: 'col4', headerName: 'Email', width: 150 },
            { field: 'col5', headerName: 'Company', width: 150 },
            { field: 'col6', headerName: 'Address', width: 150 },
            { field: 'col7', headerName: 'City', width: 150 },
            { field: 'col8', headerName: 'Zip', width: 150 },
            { field: 'col9', headerName: 'Region', width: 150 },
            { field: 'col10', headerName: 'Country', width: 150 },
          ];

          this.setState({
            isLoaded: true,
            rows: rows,
            columns: cols
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error: any) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, rows, columns } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div style={{ height: '100vh', width: '100%' }}>
          <DataGridPro rows={rows} columns={columns} />
        </div>
      );
    }
  }
}
