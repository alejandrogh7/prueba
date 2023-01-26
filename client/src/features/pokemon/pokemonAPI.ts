import axios from "axios";

export const fetchPokemons = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/pokemon`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return { data: response.data.data, status: response.status };
};

export const fetchPokemon = async (id: number) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/pokemon/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return { data: response.data.data, status: response.status };
};

//~ FILTERS ~ SORTS ~
//~~ SORTS ~~
export const fetchPokemonSortName = async (name: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/pokemon?sort=${name}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return { data: response.data.data, status: response.status };
};

export const fetchPokemonSortHeight = async (height: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/pokemon?sort=${height}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return { data: response.data.data, status: response.status };
};

export const fetchPokemonSortWeight = async (weight: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/pokemon?sort=${weight}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return { data: response.data.data, status: response.status };
};

export const fetchPokemonSortExperience = async (experience: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/pokemon?sort=${experience}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return { data: response.data.data, status: response.status };
};

//~~ FILTERS ~~
export const fetchPokemonType = async (type: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/pokemon?type=${type}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return { data: response.data.data, status: response.status };
};

export const fetchPokemonHeight = async (height: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/pokemon?height=${height}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return { data: response.data.data, status: response.status };
};

export const fetchPokemonName = async (name: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/pokemon?name=${name}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return { data: response.data.data, status: response.status };
};

export const fetchPokemonWeight = async (weight: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/pokemon?weight=${weight}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return { data: response.data.data, status: response.status };
};

export const fetchPokemonExperience = async (experience: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/pokemon?experience=${experience}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return { data: response.data.data, status: response.status };
};

export const fetchPokemonMove = async (move: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/pokemon?move=${move}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return { data: response.data.data, status: response.status };
};
