import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { dataRemove, DeleteSelected } from '../../action/tableAction';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker';
// import 'jquery-ui-dist/jqueru-ui.css';

const BeforeTable = ({ selectedRow }) => {
  const { beforetableJson } = useSelector((state) => state.beforeTable);
  const dispatch = useDispatch();
  // console.log(beforeTable);
  const handleDelete = (params) => {
    dispatch(dataRemove(params.value));
  };

  const columnDefs = [
    {
      headerName: 'Id',
      field: 'Id',
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },
    {
      headerName: 'Name',
      field: 'Name',
      cellStyle: (params) =>
        // console.log(params.value, params.value.length, params.value.length < 2),
        params.value.length < 2
          ? { background: 'yellow' }
          : { background: 'transparent' },
    },
    { headerName: 'Email', field: 'Email' },
    { headerName: 'Gender', field: 'Gender' },
    { headerName: 'DOB', field: 'DOB', cellEditor: 'datePicker' },
    { headerName: 'Country', field: 'Country' },
    { headerName: 'City', field: 'City' },

    {
      headerName: '',
      field: 'docId',
      editable: 'false',
      cellRendererFramework: (parmas) => (
        <div>
          <Button onClick={() => handleDelete(parmas)}>Delete</Button>
        </div>
      ),
    },
  ];
  let gripApi;
  const onGridReady = (params) => {
    gripApi = params.api;
  };

  const countryCellRenderer = (params) => params.value.name;
  const rowSelectionType = 'multiple';
  //function will trigger once selection changed
  const onSelectionChanged = (event) => {
    // console.log(event.api.getSelectedRows());
    selectedRow({
      data: event.api.getSelectedRows(),
    });
    // dispatch(DeleteSelected(event.api.getSelectedRows()));
  };

  function getDatePicker() {
    // function to act as a class
    function Datepicker() {}

    // gets called once before the renderer is used
    Datepicker.prototype.init = function (params) {
      // create the cell
      this.eInput = document.createElement('input');
      this.eInput.value = params.value;
      this.eInput.classList.add('ag-input');
      this.eInput.style.height = '100%';

      // https://jqueryui.com/datepicker/
      $(this.eInput).datepicker({
        dateFormat: 'dd/mm/yy',
      });
    };

    // gets called once when grid ready to insert the element
    Datepicker.prototype.getGui = function () {
      return this.eInput;
    };

    // focus and select can be done after the gui is attached
    Datepicker.prototype.afterGuiAttached = function () {
      this.eInput.focus();
      this.eInput.select();
    };

    // returns the new value after editing
    Datepicker.prototype.getValue = function () {
      return this.eInput.value;
    };

    // any cleanup we need to be done here
    Datepicker.prototype.destroy = function () {
      // but this example is simple, no cleanup, we could
      // even leave this method out as it's optional
    };

    // if true, then this editor will appear in a popup
    Datepicker.prototype.isPopup = function () {
      // and we could leave this method out also, false is the default
      return false;
    };

    return Datepicker;
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body position-relative">
            <div className="ag-theme-alpine" style={{ height: '550px' }}>
              <AgGridReact
                columnDefs={columnDefs}
                rowData={beforetableJson}
                defaultColDef={{
                  editable: true,
                  flex: 1,
                  minWidth: 100,
                }}
                onGridReady={onGridReady}
                rowSelection={rowSelectionType}
                onSelectionChanged={onSelectionChanged}
                rowMultiSelectWithClick="true"
                components={{
                  datePicker: getDatePicker(),
                }}
              ></AgGridReact>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BeforeTable;
