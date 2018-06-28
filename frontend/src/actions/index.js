import axios from "axios";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/login");

  dispatch({ type: "fetch_user", payload: res.data });
};

export const loginUser = () => async dispatch => {
  const res = await axios.post("/api/login");

  dispatch({ type: "login_user", payload: res.data });
};
