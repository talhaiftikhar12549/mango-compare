import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCategory: {
        value: "recents",
        label: "Recent Posts",
    },
    selectedCommunity: {
        value: "",
        label: "All",
    }
};

export const forumsSlice = createSlice({
    name: "forums",
    initialState,
    reducers: {
        selectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
            console.log("payload by selecting a category", action.payload);
        },

        selectedCommunity: (state, action) => {
            state.selectedCommunity = action.payload;
        },
    },
});

export const {
    selectedCategory,
    selectedCommunity
} = forumsSlice.actions;

export default forumsSlice.reducer;
