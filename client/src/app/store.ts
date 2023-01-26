import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import pokemonReducer from "../features/pokemon/pokemonSlice";
import pokemonTypesReducer from "../features/pokemonTypes/pokemonTypesSlice";
import pokemonMovesReducer from "../features/pokemonMoves/pokemonMovesSlice";

export const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
    types: pokemonTypesReducer,
    moves: pokemonMovesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
