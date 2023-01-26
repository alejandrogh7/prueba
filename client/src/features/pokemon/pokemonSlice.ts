import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {
  fetchPokemons,
  fetchPokemon,
  fetchPokemonSortName,
  fetchPokemonSortHeight,
  fetchPokemonSortWeight,
  fetchPokemonSortExperience,
  fetchPokemonType,
  fetchPokemonName,
  fetchPokemonHeight,
  fetchPokemonWeight,
  fetchPokemonMove,
  fetchPokemonExperience,
} from "./pokemonAPI";
import { PokemonInterface } from "./pokemon.interface";

export interface PokemonState {
  pokemons: { data: PokemonInterface[] | null; status: number };
  pokemon: { data: PokemonInterface | null; status: number };
}

const initialState: PokemonState = {
  pokemons: { data: null, status: 0 },
  pokemon: { data: null, status: 0 },
};

//~ ACTIONS ~
export const pokemonsAsync = createAsyncThunk(
  "pokemon/fetchPokemons",
  async () => {
    const response = await fetchPokemons();
    return response;
  }
);

export const pokemonAsync = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (id: string) => {
    const response = await fetchPokemon(id);
    return response;
  }
);

export const pokemonTypeAsync = createAsyncThunk(
  "pokemon/pokemonType",
  async (type: string) => {
    const response = await fetchPokemonType(type);
    return response;
  }
);

export const pokemonNameAsync = createAsyncThunk(
  "pokemon/pokemonName",
  async (name: string) => {
    const response = await fetchPokemonName(name);
    return response;
  }
);

export const pokemonHeightAsync = createAsyncThunk(
  "pokemon/pokemonHeight",
  async (height: string) => {
    const response = await fetchPokemonHeight(height);
    return response;
  }
);

export const pokemonWeightAsync = createAsyncThunk(
  "pokemon/pokemonWeight",
  async (weight: string) => {
    const response = await fetchPokemonWeight(weight);
    return response;
  }
);

export const pokemonMoveAsync = createAsyncThunk(
  "pokemon/pokemonMove",
  async (move: string) => {
    const response = await fetchPokemonMove(move);
    return response;
  }
);

export const pokemonExperienceAsync = createAsyncThunk(
  "pokemon/pokemonExperience",
  async (experience: string) => {
    const response = await fetchPokemonExperience(experience);
    return response;
  }
);

export const pokemonSortNameAsync = createAsyncThunk(
  "pokemon/sortName",
  async (name: string) => {
    const response = await fetchPokemonSortName(name);
    return response;
  }
);

export const pokemonSortHeightAsync = createAsyncThunk(
  "pokemon/sortHeight",
  async (height: string) => {
    const response = await fetchPokemonSortHeight(height);
    return response;
  }
);

export const pokemonSortWeightAsync = createAsyncThunk(
  "pokemon/sortWeight",
  async (weight: string) => {
    const response = await fetchPokemonSortWeight(weight);
    return response;
  }
);

export const pokemonSortExperienceAsync = createAsyncThunk(
  "pokemon/sortExperience",
  async (experience: string) => {
    const response = await fetchPokemonSortExperience(experience);
    return response;
  }
);

//~ REDUCER ~
export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    clearPokemons: (state) => {
      state.pokemons.data = null;
      state.pokemons.status = 0;
    },
    clearPokemon: (state) => {
      state.pokemon.data = null;
      state.pokemon.status = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(pokemonsAsync.pending, (state) => {
        state.pokemons.data = null;
        state.pokemons.status = 0;
      })
      .addCase(pokemonsAsync.rejected, (state) => {
        state.pokemons.data = null;
        state.pokemons.status = 0;
      })
      .addCase(pokemonsAsync.fulfilled, (state, action) => {
        state.pokemons.data = action.payload.data;
        state.pokemons.status = action.payload.status;
      });

    builder
      .addCase(pokemonAsync.pending, (state) => {
        state.pokemon.data = null;
        state.pokemon.status = 0;
      })
      .addCase(pokemonAsync.rejected, (state) => {
        state.pokemon.data = null;
        state.pokemon.status = 0;
      })
      .addCase(pokemonAsync.fulfilled, (state, action) => {
        state.pokemon.data = action.payload.data;
        state.pokemon.status = action.payload.status;
      });

    builder
      .addCase(pokemonTypeAsync.pending, (state) => {
        state.pokemons.data = null;
        state.pokemons.status = 0;
      })
      .addCase(pokemonTypeAsync.rejected, (state) => {
        state.pokemons.data = null;
        state.pokemons.status = 0;
      })
      .addCase(pokemonTypeAsync.fulfilled, (state, action) => {
        state.pokemons.data = action.payload.data;
        state.pokemons.status = action.payload.status;
      });

    builder
      .addCase(pokemonNameAsync.pending, (state) => {
        state.pokemons.data = null;
        state.pokemons.status = 0;
      })
      .addCase(pokemonNameAsync.rejected, (state) => {
        state.pokemons.data = null;
        state.pokemons.status = 0;
      })
      .addCase(pokemonNameAsync.fulfilled, (state, action) => {
        state.pokemons.data = action.payload.data;
        state.pokemons.status = action.payload.status;
      });

    builder
      .addCase(pokemonHeightAsync.pending, (state) => {
        state.pokemons.data = null;
        state.pokemons.status = 0;
      })
      .addCase(pokemonHeightAsync.rejected, (state) => {
        state.pokemons.data = null;
        state.pokemons.status = 0;
      })
      .addCase(pokemonHeightAsync.fulfilled, (state, action) => {
        state.pokemons.data = action.payload.data;
        state.pokemons.status = action.payload.status;
      });

    builder
      .addCase(pokemonWeightAsync.pending, (state) => {
        state.pokemons.data = null;
        state.pokemons.status = 0;
      })
      .addCase(pokemonWeightAsync.rejected, (state) => {
        state.pokemons.data = null;
        state.pokemons.status = 0;
      })
      .addCase(pokemonWeightAsync.fulfilled, (state, action) => {
        state.pokemons.data = action.payload.data;
        state.pokemons.status = action.payload.status;
      });

    builder
      .addCase(pokemonMoveAsync.pending, (state) => {
        state.pokemons.data = null;
        state.pokemons.status = 0;
      })
      .addCase(pokemonMoveAsync.rejected, (state) => {
        state.pokemons.data = null;
        state.pokemons.status = 0;
      })
      .addCase(pokemonMoveAsync.fulfilled, (state, action) => {
        state.pokemons.data = action.payload.data;
        state.pokemons.status = action.payload.status;
      });

    builder
      .addCase(pokemonExperienceAsync.pending, (state) => {
        state.pokemons.data = null;
        state.pokemons.status = 0;
      })
      .addCase(pokemonExperienceAsync.rejected, (state) => {
        state.pokemons.data = null;
        state.pokemons.status = 0;
      })
      .addCase(pokemonExperienceAsync.fulfilled, (state, action) => {
        state.pokemons.data = action.payload.data;
        state.pokemons.status = action.payload.status;
      });

    builder
      .addCase(pokemonSortNameAsync.pending, (state) => {
        state.pokemons.data = null;
        state.pokemons.status = 0;
      })
      .addCase(pokemonSortNameAsync.rejected, (state) => {
        state.pokemons.data = null;
        state.pokemons.status = 0;
      })
      .addCase(pokemonSortNameAsync.fulfilled, (state, action) => {
        state.pokemons.data = action.payload.data;
        state.pokemons.status = action.payload.status;
      });

    builder
      .addCase(pokemonSortHeightAsync.pending, (state) => {
        state.pokemons.data = null;
        state.pokemons.status = 0;
      })
      .addCase(pokemonSortHeightAsync.rejected, (state) => {
        state.pokemons.data = null;
        state.pokemons.status = 0;
      })
      .addCase(pokemonSortHeightAsync.fulfilled, (state, action) => {
        state.pokemons.data = action.payload.data;
        state.pokemons.status = action.payload.status;
      });

    builder
      .addCase(pokemonSortWeightAsync.pending, (state) => {
        state.pokemons.data = null;
        state.pokemons.status = 0;
      })
      .addCase(pokemonSortWeightAsync.rejected, (state) => {
        state.pokemons.data = null;
        state.pokemons.status = 0;
      })
      .addCase(pokemonSortWeightAsync.fulfilled, (state, action) => {
        state.pokemons.data = action.payload.data;
        state.pokemons.status = action.payload.status;
      });

    builder
      .addCase(pokemonSortExperienceAsync.pending, (state) => {
        state.pokemons.data = null;
        state.pokemons.status = 0;
      })
      .addCase(pokemonSortExperienceAsync.rejected, (state) => {
        state.pokemons.data = null;
        state.pokemons.status = 0;
      })
      .addCase(pokemonSortExperienceAsync.fulfilled, (state, action) => {
        state.pokemons.data = action.payload.data;
        state.pokemons.status = action.payload.status;
      });
  },
});

export const { clearPokemon, clearPokemons } = pokemonSlice.actions;

export const selectPokemons = (state: RootState) => state.pokemons.pokemons;

export const selectPokemon = (state: RootState) => state.pokemons.pokemon;

export default pokemonSlice.reducer;
