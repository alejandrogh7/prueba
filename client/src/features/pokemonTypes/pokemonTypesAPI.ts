import axios from "axios";

export const fetchTypes = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/type`,
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  return { data: response.data, status: response.status };
};
