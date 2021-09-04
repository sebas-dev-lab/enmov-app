import { createNewPost } from "../redux/actions/post/write";

export const createNewPostPromise = (dispatch, content) => {
  let pr = new Promise((res, rej) => {
    try {
      res(dispatch(createNewPost(content)));
    } catch (e) {
      console.log(e);
      rej(false);
    }
  });

  return pr;
};
