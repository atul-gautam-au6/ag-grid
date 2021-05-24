import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { beforeTable } from '../../action/tableAction';
import GridExample from './finalTable';
import BeforeTable from './formtable';
import { DeleteNonSelected, DeleteSelected } from '../../action/tableAction';

import './style.css';

const TableIndex = () => {
  const { beforetableJson } = useSelector((state) => state.beforeTable);
  const [selectRow, setSelectRow] = useState([]);
  const [state, setState] = useState({
    docId: '',
    Id: '',
    Name: '',
    Email: '',
    Gender: '',
    DOB: '',
    Country: '',
    City: '',
  });
  const dispatch = useDispatch();
  const handleSubmit = async () => {
    setState({
      docId: shortid.generate(),
      Id: '',
      Name: '',
      Email: '',
      Gender: '',
      DOB: '',
      Country: '',
      City: '',
    });

    dispatch(beforeTable(state));
  };

  //selected row deleted
  const handleDeleteSelectedRow = () => {
    // console.log(selectRow.map((i) => i.docId));
    dispatch(DeleteSelected(selectRow));
    setSelectRow([]);
  };

  //delete non seletect row
  const deleteNonSelectedRow = () => {
    dispatch(DeleteNonSelected(selectRow));
    beforetableJson.length > selectRow.length && setSelectRow([]);
  };

  // /submit handler

  const handleSubmitData = () => {
    beforetableJson.forEach((element) => {
      if (
        element.Name.length > 2 &&
        element.Id.length > 0 &&
        element.Email.length > 0 &&
        element.Gender.length > 0 &&
        element.DOB.length > 0 &&
        element.Country.length > 0 &&
        element.City.length > 0
      ) {
        window.alert('submitted');
      } else {
        window.alert('Every fields are Required..!');
      }
    });
  };

  return (
    <>
      <div className="container" style={{ marginTop: '5px' }}>
        <Button
          onClick={() => handleSubmit()}
          className="button"
          variant="outline-primary"
        >
          Add Row
        </Button>{' '}
        <Button
          onClick={() => handleDeleteSelectedRow()}
          className="button"
          variant="outline-primary"
        >
          Delete Selected Rows
        </Button>{' '}
        <Button
          onClick={() => deleteNonSelectedRow()}
          className="button"
          variant="outline-primary"
        >
          Delete Non Selected Rows
        </Button>{' '}
        <Button
          onClick={() => handleSubmitData()}
          className="button"
          variant="outline-primary"
        >
          Submit
        </Button>{' '}
      </div>
      <BeforeTable selectedRow={(e) => setSelectRow(e.data)} />
      <GridExample />
    </>
  );
};

export default TableIndex;
