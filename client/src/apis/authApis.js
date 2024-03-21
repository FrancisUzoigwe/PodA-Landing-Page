import axios from "axios";

const url = "http://localhost:2345/api";

export const registerApi = async () => {
  try {
    const response = await axios.post(`${url}/send-email`);
    return response.data;
  } catch (error) {
    console.log("This is the error:", error?.message);
    throw error;
  }
};

export const verifyApi = async (userID) => {
  try {
    return await axios.patch(`${url}/${userID}/verify-account`).then((res) => {
      return res.data?.data;
    });
  } catch (error) {
    console.log(error?.message);
  }
};
