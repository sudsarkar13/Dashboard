import axios from "axios";

const api = axios.create({
	// todo: move this variable to env
	baseURL: "http://localhost:3000",
	headers: {
		"Content-Type": "application/json",
	},
});

export const login = async (data: { email: string; password: string }) => {
	return api.post("/api/users/login", data);
};
