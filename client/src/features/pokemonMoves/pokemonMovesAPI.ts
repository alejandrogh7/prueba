import axios from "axios";

export const fetchMoves = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/move`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return { data: response.data.data, status: response.status };
};
