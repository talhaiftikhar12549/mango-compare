import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  mainData: [],
  filteredName: 0,
}

export const compareToolSlice = createSlice({
  name: 'compareTool',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    mainDatagetter: (state, action) => {
      // state.value += action.payload
      state.mainData = action.payload;
      // const newdata = state.mainData
    },
    dosageFiltedDta: (state, action) => {
      const dosgFltrData = action.payload
      state.mainData = dosgFltrData
      console.log(state.mainData)
    },
    DosagName: (state, action) => { 
      const dosgName = action.payload
      state.filteredName = dosgName
      
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, mainDatagetter, dosageFiltedDta, DosagName } = compareToolSlice.actions

export default compareToolSlice.reducer