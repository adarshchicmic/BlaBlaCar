import {createSlice} from '@reduxjs/toolkit';
import {COMMON_CONSTS} from '../../shared/Constants/Constants';
interface InitialState {
  search: any;
}
export const initialState: Partial<InitialState> = {
  search: [],
};

function isObjectUnique(array, object) {
  for (var i = 0; i < array?.length; i++) {
    if (JSON.stringify(array[i]) === JSON.stringify(object)) {
      return false; // Object already exists in the array
    }
  }
  return true; // Object is unique
}

const searchSlice: any = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      const {search} = action.payload;
      isObjectUnique(state.search, search) &&
      (search?.leavingFrom !== COMMON_CONSTS.LEAVING_FROM ||
        search?.goingTo !== COMMON_CONSTS.GOING_TO)
        ? state.search.unshift(search)
        : null;
    },
    destroy: state => {
      state.search = [];
    },
  },
});
export const {updateSearch, destroy} = searchSlice.actions;
export default searchSlice;
