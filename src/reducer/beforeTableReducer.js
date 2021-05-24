import {
  DATA_REMOVE,
  DATA_REMOVE_ARRAY,
  DATA_REMOVE_NON_ARRAY,
  DATA_SAVE_FAIL,
  DATA_SAVE_REQ,
  DATA_SAVE_SUCCESS,
} from '../constant/tableConst';

export const TAbleBefore = (state = { beforetableJson: [] }, action) => {
  switch (action.type) {
    case DATA_SAVE_SUCCESS:
      const item = action.payload;
      // console.log(state);
      const product = state.beforetableJson.find((x) => x.docId === item.docId);
      if (product) {
        return {
          beforetableJson: state.beforetableJson.map((x) =>
            x.docId === product.docId ? product : x
          ),
        };
      }
      return {
        loading: false,
        beforetableJson: [...state.beforetableJson, item],
      };
    case DATA_REMOVE:
      // console.log(
      //   state.beforetableJson.filter((x) => x.docId !== action.payload)
      // );
      return {
        loading: false,
        beforetableJson: state.beforetableJson.filter(
          (x) => x.docId !== action.payload
        ),
      };
    case DATA_REMOVE_ARRAY:
      return { loading: false, beforetableJson: action.payload };
    case DATA_REMOVE_NON_ARRAY:
      return { loading: false, beforetableJson: action.payload };
    case DATA_SAVE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
