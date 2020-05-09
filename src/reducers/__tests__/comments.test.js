import commentsReducer from "reducers/comments";

it("handles actions of type SAVE_COMMENT", () => {
    const newComment = "New Comment";

    const NewAction = {
        type: "SAVE_COMMENT",
        payload: newComment
    };

    const newState = commentsReducer([], NewAction);

    expect(newState).toEqual([newComment]);
});

it("handles actions of unknown type ", () => {
    const newState = commentsReducer([], {});

    expect(newState).toEqual([]);
});