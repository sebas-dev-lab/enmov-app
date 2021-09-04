const router = require("express").Router();

const {
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getOnePost,
  uploadImagePost,
} = require("../controller/PostsControllers");

const {
  updateReview,
  deleteReview,
  createReview,
} = require("../controller/reviewControllers");

const { checkRole, verifyFn } = require("../middleware/verify");
const { uploadImage } = require("../middleware/image");

// Image
router.post("/img", verifyFn, checkRole, uploadImage, uploadImagePost);
// router.put('/img', verifyFn, checkRole, uploadImage)
// router.delete('/img/:img_id',verifyFn, checkRole)

// Post
router.post("/post", verifyFn, checkRole, createPost);
router.put("/post/update/:post_id", verifyFn, checkRole, updatePost);
router.delete("/post/:post_id", verifyFn, checkRole, deletePost);
router.get("/post", getAllPosts);
router.get("/post/:post_id", getOnePost);

// Review
router.post("/post/review/:post_id", verifyFn, createReview);
router.put("/post/review/:post_id/:review_id", verifyFn, updateReview);
router.delete("/post/review/:post_id/:review_id", verifyFn, deleteReview);
module.exports = router;
