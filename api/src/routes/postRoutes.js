const router = require("express").Router();

const {
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getOnePost,
  uploadImagePost,
} = require("../controller/PostsControllers");

const { checkRole, verifyFn } = require("../middleware/verify");
const { uploadImage } = require("../middleware/image");

router.post("/img", verifyFn, checkRole, uploadImage, uploadImagePost);
// router.put('/img', verifyFn, checkRole, uploadImage)
// router.delete('/img/:img_id',verifyFn, checkRole)

router.post("/post", verifyFn, checkRole, createPost);
router.put("/updatepost/:post_id", verifyFn, checkRole, updatePost);
router.delete("/post/:post_id", verifyFn, checkRole, deletePost);
router.get("/post", getAllPosts);
router.get("/post/:post_id", getOnePost);

module.exports = router;
