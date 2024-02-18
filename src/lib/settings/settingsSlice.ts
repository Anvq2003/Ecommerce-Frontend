import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store/index";

export interface ISettingsState {
  language: string;
  dictionary: string;
}

const initialState: ISettingsState = {
  language: "en",
  dictionary: "",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    initializeSettings(_, action: { payload: ISettingsState }) {
      return action.payload;
    },
    setLanguage(state, action) {
      state.language = action.payload;
    },
    setDictionary(state, action) {
      state.dictionary = action.payload;
    },
  },
});

export const selectLanguage = (state: RootState) => state.settings.language;
export const selectDictionary = (state: RootState) => state.settings.dictionary;

export const { setLanguage, setDictionary, initializeSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
