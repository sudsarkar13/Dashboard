/* eslint-disable @typescript-eslint/no-unused-vars */
import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import userRouter from "./user/userRouter";

const app = express();
app.use(express.json());

// Routes
// Http methods: GET, POST, PUT, PATCH, DELETE etc.
// API Endpoints: /users, /users/:id

app.get("/", (req, res, next) => {
	// throw new Error("Something went wrong");
	// const error = createHttpError(400, "Something went wrong");
	// throw error;
	res.json({ message: "Welcome to Ebook API's" });
});

app.use("/api/users", userRouter);

// Global error handler
app.use(globalErrorHandler);

export default app;
