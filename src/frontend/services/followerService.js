import axios from "axios";

export const getFollowersData = async (login) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${login}/followers`
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return "Error in fetching followers details";
  }
};

export const getFollowerRepos = async (user) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${user}/repos`
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return "Error in fetching followers repos";
  }
};
