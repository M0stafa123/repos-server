import express from "express";
import usersRoute from "./src/routes/users";
import reposRoute from "./src/routes/repost";
const router = express.Router();

router.use("/users", usersRoute);
router.use("/repos", reposRoute);

export default router;
