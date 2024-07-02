import express from "express";

const app = express();

// Routes
// Http methods: GET, POST, PUT, PATCH, DELETE etc.
// API Endpoints: /users, /users/:id

app.get("/", (req, res, next) => {
	res.json({message: "Welcome to Ebook API's"});
});

export default app;
