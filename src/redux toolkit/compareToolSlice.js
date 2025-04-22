import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  mainData:[],
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
    
    dosageFiltedDta : (state, action) => {  
      const dosgFltrData = action.payload
      state.mainData = dosgFltrData
      console.log(state.mainData)
      
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, mainDatagetter, dosageFiltedDta } = compareToolSlice.actions

export default compareToolSlice.reducer