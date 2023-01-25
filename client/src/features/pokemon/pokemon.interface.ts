interface Ability {
  name: string;
}

interface GameIndices {
  game_index: number;
  version: {
    name: string;
  };
}

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

interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}

interface Types {
  name: string;
}

export interface PokemonInterface {
  abilities: Ability[];
  base_experience: number;
  game_indices: GameIndices[];
  height: number;
  weight: number;
  api_id: number;
  moves: Moves[];
  name: string;
  order: number;
  sprites: Sprites;
  stats: Stats[];
  types: Types[];
}
