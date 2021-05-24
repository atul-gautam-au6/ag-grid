import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
const GridExample = () => {
  const columnDefs = [
    { headerName: 'Id', field: 'Id', sortable: true, filter: true },
    { headerName: 'Name', field: 'Name', sortable: true, filter: true },
    { headerName: 'Email', field: 'Age', sortable: true, filter: true },
    { headerName: 'Gender', field: 'Address', sortable: true, filter: true },
    { headerName: 'DOB', field: 'City', sortable: true, filter: true },
    { headerName: 'Country', field: 'Salary', sortable: true, filter: true },
    { headerName: 'City', field: 'Salary', sortable: true, filter: true },
  ];
  const rowData = [
    {
      Id: '100',
      Name: 'Sanwar',
      Age: '25',
      Address: 'Jaipur',
      City: 'Jaipur',
      Salary: '500000',
      Department: 'IT',
    },
    {
      Id: '2',
      Name: 'Nisha',
      Age: '25',
      Address: 'C-Scheme',
      City: 'Jaipur',
      Salary: '500000',
      Department: 'IT',
    },
    {
      Id: '3',
      Name: 'David',
      Age: '25',
      Address: 'C-Scheme',
      City: 'Jaipur',
      Salary: '500000',
      Department: 'IT',
    },
    {
      Id: '4',
      Name: 'Sam',
      Age: '25',
      Address: 'C-Scheme',
      City: 'Jaipur',
      Salary: '500000',
      Department: 'IT',
    },
    {
      Id: '5',
      Name: 'Jyotsna',
      Age: '25',
      Address: 'C-Scheme',
      City: 'Mumbai',
      Salary: '500000',
      Department: 'IT',
    },
    {
      Id: '6',
      Name: 'Sid',
      Age: '25',
      Address: 'C-Scheme',
      City: 'Bangalore',
      Salary: '500000',
      Department: 'IT',
    },
    {
      Id: '7',
      Name: 'Chavi',
      Age: '25',
      Address: 'C-Scheme',
      City: 'Noida',
      Salary: '500000',
      Department: 'IT',
    },
    {
      Id: '8',
      Name: 'Nisha',
      Age: '25',
      Address: 'C-Scheme',
      City: 'Delhi',
      Salary: '500000',
      Department: 'IT',
    },
  ];

  return (
    <>
      <div className="row" style={{ marginTop: '10px' }}>
        <div className="col-sm-10 btn btn-info">Submitted Data</div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body position-relative">
              <div className="ag-theme-alpine" style={{ height: '550px' }}>
                <AgGridReact
                  columnDefs={columnDefs}
                  rowData={rowData}
                  pagination="true"
                  paginationPageSize="5"
                  floatingFilter="true"
                ></AgGridReact>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default GridExample;
