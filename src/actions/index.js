import axios from "axios";

const saveComment = comment => ({
    type: "SAVE_COMMENT",
    payload: comment
});

const limit = (arr, size) => arr.splice(Math.max(Math.floor(Math.random() * arr.length - size), 0), size);

const fetchComments = () => async dispatch => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
    const comments = response.data.map(comment => comment.name);
    dispatch({ type: "FETCH_COMMENTS", payload: limit(comments, 5) });
};

const changeAuth = () => ({ type: "CHANGE_AUTH" });

export { saveComment, fetchComments, changeAuth };