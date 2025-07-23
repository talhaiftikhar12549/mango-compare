import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  mainData: [],
  filteredName: [],
  mPrice: [],
  resetButton: false,
  isDiscount: false,
  manjaroLowest: 0,
  wegovyLowest: 0,
  isPriceSort: "lp",
};

export const compareToolSlice = createSlice({
  name: "compareTool",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    mainDatagetter: (state, action) => {
      state.mainData = action.payload;
    },
    dosageFiltedDta: (state, action) => {
      const dosgFltrData = action.payload;
      state.mainData = dosgFltrData;
    },
    DosagName: (state, action) => {
      const dosgName = action.payload;
      state.filteredName = dosgName;
    },
    mVal: (state, action) => {
      const maxVal = action.payload;
      state.mPrice = maxVal;
    },
    resetter: (state) => {
      state.resetButton = true;
    },
    discountedFilter: (state, action) => {
      state.isDiscount = action.payload;
    },
    mLowPrice: (state, action) => {
      state.manjaroLowest = action.payload;
    },
    wLowPrice: (state, action) => {
      state.wegovyLowest = action.payload;
    },
    togglePriceSort: (state, action) => {
      state.isPriceSort = action.payload;
      console.log(
        "Toggling price sort",
        state.isPriceSort,
        "and",
        action.payload
      );
    },
  },
});

export const selectIsDiscount = (state) => state.compareTool.isDiscount;

export const {
  increment,
  mVal,
  decrement,
  incrementByAmount,
  mainDatagetter,
  dosageFiltedDta,
  DosagName,
  discountedFilter,
  mLowPrice,
  wLowPrice,
  togglePriceSort,
} = compareToolSlice.actions;

export default compareToolSlice.reducer;
