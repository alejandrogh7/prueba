interface Moves {
  move: { name: string };
  version_group_details: {
    level_learned_at: number;
  };
  move_learn_method: {
    name: string;
  };
}

interface Sprites {
  other: {
    dream_world: {
      front_default: string;
    };
  };
}

interface Types {
  name: string;
}

export interface PokemonInterface {
  _id: string;
  base_experience: number;
  height: number;
  weight: number;
  api_id: number;
  moves: Moves[];
  name: string;
  sprites: Sprites;
  types: Types[];
}
