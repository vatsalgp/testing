import { saveComment } from "actions";

describe("saveComment", () => {

    const newComment = "New Comment";
    let newAction;

    beforeEach(() => newAction = saveComment(newComment));

    it("has correct type", () => expect(newAction.type).toEqual("SAVE_COMMENT"));
    it("has correct payload", () => expect(newAction.payload).toEqual(newComment));

});