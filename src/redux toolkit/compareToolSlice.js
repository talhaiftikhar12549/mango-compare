import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  mainData: [],
  filteredName: [],
  mPrice: [],
  resetButton: false,
  isDiscount: false,
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
      console.log("data getter in store", state.mainData);
    },
    dosageFiltedDta: (state, action) => {
      const dosgFltrData = action.payload;
      state.mainData = dosgFltrData;
      console.log("dosage filter data in store", state.mainData);
    },
    DosagName: (state, action) => {
      const dosgName = action.payload;
      state.filteredName = dosgName;
      console.log("dosage name in store", state.filteredName);
    },
    mVal: (state, action) => {
      const maxVal = action.payload;
      state.mPrice = maxVal
      console.log("max value in store", maxVal);
      console.log("max value in store varibale in store", state.mPrice );
    },
    resetter: (state) => {
      state.resetButton = true;
      console.log("reset button in store", state.resetButton);
    },
    discountedFilter: (state , action) => {
      console.log("discount price checkbox in store",action.payload)
    }

  },
});

export const {
  increment,
  mVal,
  decrement,
  incrementByAmount,
  mainDatagetter,
  dosageFiltedDta,
  DosagName,
  discountedFilter
} = compareToolSlice.actions;

export default compareToolSlice.reducer;
