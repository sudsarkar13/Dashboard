import express from "express";
import { createBook } from "./bookController";
import multer from "multer";
import path from "node:path";
import authenticate from "../middlewares/authenticate";

const bookRouter = express.Router();
const upload = multer({
  dest: path.resolve(__dirname, "../../public/temp/data/uploads"),
  limits: { fileSize: 5e7 }, // nearly 50 MB
});
// Routes
// /api/books
bookRouter.post(
  "/",
  authenticate,
  upload.fields([
    { name: "coverImage", maxCount: 1 },
    { name: "file", maxCount: 1 },
  ]),
  createBook,
);
export default bookRouter;
