import axios from "axios";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/signin");

  dispatch({ type: "fetch_user", payload: res.data });
};

export const loginUser = () => async dispatch => {
  const res = await axios.post("/api/signin");

  dispatch({ type: "login_user", payload: res.data });
};
