import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { PokemonTypesInterface } from "./pokemonTypes.interface";
import { fetchTypes } from "./pokemonTypesAPI";

export interface TypeState {
  types: { data: PokemonTypesInterface[] | null; status: number };
  type: { data: PokemonTypesInterface | null; status: number };
}

const initialState: TypeState = {
  types: { data: null, status: 0 },
  type: { data: null, status: 0 },
};

export const typesAsync = createAsyncThunk("types/fetchTypes", async () => {
  const response = await fetchTypes();
  return response;
});

export const typesSlice = createSlice({
  name: "types",
  initialState,
  reducers: {
    clearTypes: (state) => {
      state.types.data = null;
      state.types.status = 0;
    },
    clearType: (state) => {
      state.type.data = null;
      state.type.status = 0;
    },
    setType: (state, action: PayloadAction<PokemonTypesInterface>) => {
      state.type.data = action.payload;
      state.type.status = 200;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(typesAsync.pending, (state) => {
        state.types.data = null;
        state.types.status = 0;
      })
      .addCase(typesAsync.rejected, (state) => {
        state.types.data = null;
        state.types.status = 0;
      })
      .addCase(typesAsync.fulfilled, (state, action) => {
        state.types.data = action.payload.data;
        state.types.status = action.payload.status;
      });
  },
});

export const { clearType, clearTypes, setType } = typesSlice.actions;

export const selectTypes = (state: RootState) => state.types.types;

export const selectType = (state: RootState) => state.types.type;

export default typesSlice.reducer;
