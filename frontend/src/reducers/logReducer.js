export default function(state = null, action) {
  switch (action.type) {
    case "login_user":
      return action.payload || false;
    default:
      return state;
  }
}
