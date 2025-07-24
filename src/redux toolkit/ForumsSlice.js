import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCategory: {
        value: "recents",
        label: "Recent Posts",
    },
    selectedCommunity: {
        value: "",
        label: "All",
    },
    search: "",
};

export const forumsSlice = createSlice({
    name: "forums",
    initialState,
    reducers: {
        selectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },

        selectedCommunity: (state, action) => {
            state.selectedCommunity = action.payload;
        },

        search: (state, action) => {
            state.search = action.payload;
        },
    },
});

export const {
    selectedCategory,
    selectedCommunity,
    search
} = forumsSlice.actions;

export default forumsSlice.reducer;
