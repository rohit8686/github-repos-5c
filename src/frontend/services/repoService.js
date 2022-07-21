import axios from "axios";

export const getRepoData = async (search) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${search}/repos`
    );
    return response.data;
  } catch (e) {
    console.log(e.message);
    return "User not found";
  }
};

export const getUserData = async (search) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${search}`);
    return response.data;
  } catch (e) {
    console.log(e.message);
    return "User not found";
  }
};
