import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { PokemonMovesInterface } from "./pokemonMoves.interface";
import { fetchMoves } from "./pokemonMovesAPI";

export interface MoveState {
  moves: { data: PokemonMovesInterface[] | null; status: number };
  move: { data: PokemonMovesInterface | null; status: number };
}

const initialState: MoveState = {
  moves: { data: null, status: 0 },
  move: { data: null, status: 0 },
};

export const movesAsync = createAsyncThunk("moves/fetchMoves", async () => {
  const response = await fetchMoves();
  return response;
});

export const movesSlice = createSlice({
  name: "moves",
  initialState,
  reducers: {
    clearMoves: (state) => {
      state.moves.data = null;
      state.moves.status = 0;
    },
    clearMove: (state) => {
      state.move.data = null;
      state.move.status = 0;
    },
    setMove: (state, action: PayloadAction<PokemonMovesInterface>) => {
      state.move.data = action.payload;
      state.move.status = 200;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(movesAsync.pending, (state) => {
        state.moves.data = null;
        state.moves.status = 0;
      })
      .addCase(movesAsync.rejected, (state) => {
        state.moves.data = null;
        state.moves.status = 0;
      })
      .addCase(movesAsync.fulfilled, (state, action) => {
        state.moves.data = action.payload.data;
        state.moves.status = action.payload.status;
      });
  },
});

export const { clearMove, clearMoves, setMove } = movesSlice.actions;

export const selectMoves = (state: RootState) => state.moves.moves;

export const selectMove = (state: RootState) => state.moves.move;

export default movesSlice.reducer;
