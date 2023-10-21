import axios from "axios";

const register = async (username, accountId) => {
  console.log("check");
  try {
    const apidata = await axios.post(
      "http://localhost:3001/api/v1/auth/register",
      {
        username: username,
        accountId: accountId,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export { register };
