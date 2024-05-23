import { Router } from "express";
import {
    getAllUsers, getUser,
    putUser, delUser, createUser
} from "../controllers/user.controller.js";

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", putUser);
router.delete("/:id", delUser);
router.post("/", createUser);


export default router;