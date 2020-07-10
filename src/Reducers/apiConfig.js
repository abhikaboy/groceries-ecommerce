// import actions
const init = {
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHBzOi8vcnVubW9iaWxlYXBwcy5jb20vc2FsZXNfaW50aWcvZ3JvY2VycnlfYmFja2VuZC9hcGkvY3VzdG9tZXItbG9naW4iLCJpYXQiOjE1OTQwNTk0MjIsImV4cCI6MTU5NjY1MTQyMiwibmJmIjoxNTk0MDU5NDIyLCJqdGkiOiJ5VEJLT0Yza1o5MW56RGVpIn0.Rr5wXknyi6yInYBnVrXZpQUmap84a2qP5aCDx5_8XSg",
  shop_id: 1,
};
const apiConfig = (state = init, action = {}) => {
  switch (action.type) {
    case "lol":
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default apiConfig;
