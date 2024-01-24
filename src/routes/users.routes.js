import { Router } from "express";

export const usersRoutes = Router();

usersRoutes.post("/", (req, res) => {
  const { name, email, phone_number, password } = req.body;

  res.json({ name, email, phone_number, password });
});
