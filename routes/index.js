import express from "express";
const router = express.Router();

import { verifyAndDecrypt } from "../middlewares/authentication.middleware.js";

import { login } from "../controllers/login.controller.js";
import { signup } from "../controllers/signup.controller.js";
import { addFavouriteVideo,isFavouriteVideo } from "../controllers/favouriteVideo.controller.js";
import { findUser } from "../controllers/findUser.controller.js";
import { getFriends, friendRequestApproval, sendFriendRequest } from "../controllers/friends.controller.js";
import { getNotification } from "../controllers/notifcation.controller.js";
import { addUserHistory, getUserHistory } from "../controllers/userHistory.controller.js";
import { getVideos, sendVideoInvite } from "../controllers/video.controller.js";

router.post("/login",login);
router.post("signup",signup);
router.post("/favorites/videos",verifyAndDecrypt,addFavouriteVideo);
router.get("/favorites/videos",verifyAndDecrypt,isFavouriteVideo);
router.get("user",verifyAndDecrypt,findUser);
router.get("friends",verifyAndDecrypt,getFriends);
router.put("friends",verifyAndDecrypt,friendRequestApproval);
router.post("friends",verifyAndDecrypt,sendFriendRequest);
router.get("notification",verifyAndDecrypt,getNotification);
router.post("history",verifyAndDecrypt,addUserHistory);
router.get("history",verifyAndDecrypt,getUserHistory);
router.get("videos",verifyAndDecrypt,getVideos);
router.post("video-invite",verifyAndDecrypt,sendVideoInvite);

const ENVIRONMENT = process.env.Workspace; // Environment name from environment variables

// Define a route for the root endpoint to indicate that the server is running
router.get("/", async (req, res) => {
  return res.status(200).json(`${ENVIRONMENT} server running!`);
});

export default router;