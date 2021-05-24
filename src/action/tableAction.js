import {
  DATA_REMOVE,
  DATA_REMOVE_ARRAY,
  DATA_REMOVE_NON_ARRAY,
  DATA_SAVE_FAIL,
  DATA_SAVE_REQ,
  DATA_SAVE_SUCCESS,
} from '../constant/tableConst';
import Cookies from 'js-cookie';

export const beforeTable = (data) => async (dispatch, getState) => {
  try {
    // dispatch({ type: DATA_SAVE_REQ });
    // console.log(data);
    dispatch({ type: DATA_SAVE_SUCCESS, payload: data });
    const {
      beforeTable: { beforetableJson },
    } = getState();
    // console.log(beforeTable);
    Cookies.set('beForesave', JSON.stringify(beforetableJson));
  } catch (error) {
    dispatch({ type: DATA_SAVE_FAIL, payload: error.message });
  }
};

export const dataRemove = (data) => async (dispatch, getState) => {
  // console.log(data);
  dispatch({ type: DATA_REMOVE, payload: data });
  const {
    beforeTable: { beforetableJson },
  } = getState();
  Cookies.set('beForesave', JSON.stringify(beforetableJson));
};

//delete selected rows
export const DeleteSelected = (data) => async (dispatch, getState) => {
  const {
    beforeTable: { beforetableJson },
  } = getState();
  let array1 = beforetableJson.filter((val) => !data.includes(val));
  // console.log(array1);
  dispatch({ type: DATA_REMOVE_ARRAY, payload: array1 });

  Cookies.set('beForesave', JSON.stringify(array1));
};

//non selected
export const DeleteNonSelected = (data) => async (dispatch, getState) => {
  const {
    beforeTable: { beforetableJson },
  } = getState();
  let array1 = beforetableJson.filter((x) => {
    return data.some((i) => x.docId === i.docId);
  });
  dispatch({ type: DATA_REMOVE_NON_ARRAY, payload: array1 });
  Cookies.set('beForesave', JSON.stringify(array1));
};
