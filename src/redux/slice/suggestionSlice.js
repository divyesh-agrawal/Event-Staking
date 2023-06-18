import { createSlice } from '@reduxjs/toolkit';

const initialSuggestions = [0, 1, 2];

/** Stores and Manages Index of the Suggestions Array */
const suggestionSlice = createSlice({
  name: 'suggestions',
  initialState: {
    suggestions: initialSuggestions,
  },
  reducers: {
    SuggestionsClear: (state, action) => ({
      ...state,
      suggestions: [
        ...state.suggestions.slice(0, action.payload),
        Math.max(...state.suggestions) + 1,
        ...state.suggestions.slice(action.payload + 1),
      ],
    }),
    SuggestionsClearAll: (state) => {
      const maxNumber = Math.max(...state.suggestions);
      const indices = state.suggestions.map(
        (_number, index) => maxNumber + index + 1
      );
      return {
        ...state,
        suggestions: [...indices],
      };
    },
    SuggestionsClearIndex: (state) => ({
      ...state,
      suggestions: [...initialSuggestions],
    }),
  },
});

export const { SuggestionsClear, SuggestionsClearAll, SuggestionsClearIndex } =
  suggestionSlice.actions;

export default suggestionSlice;
