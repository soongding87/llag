import axios from "axios";
const mongoose = require("mongoose");

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/signin");

  dispatch({ type: "fetch_user", payload: res.data.session });
};
