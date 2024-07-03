import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();

// Routes
// Http methods: GET, POST, PUT, PATCH, DELETE etc.
// API Endpoints: /users, /users/:id

app.get("/", (req, res, next) => {
	// throw new Error("Something went wrong");
	// const error = createHttpError(400, "Something went wrong");
	// throw error;
	res.json({ message: "Welcome to Ebook API's" });
});

// Global error handler
app.use(globalErrorHandler);

export default app;
