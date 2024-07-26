import Joi from "joi";
import {
  findAllUsers,
  findUser,
  updateUser,
  deleteUser,
  userCreate,
} from "../services/users.service.js";

export const getAllUsers = async (req, res) => {
  try {
    const { ok, values, message, status } = await findAllUsers();

    if (!ok) res.status(status).json(message);
    else res.status(status).json(values);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const id = req.params.id;

    const { ok, values, message, status } = await findUser(id);

    if (!ok) res.status(status).json(message);
    else res.status(status).json(values);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: error.message });
  }
};

export const putUser = async (req, res) => {
  try {
    const id = req.params.id;

    const { ok, values, message, status } = await updateUser(id, req.body);

    if (!ok) res.status(status).json(message);
    else res.status(status).json(values);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: error.message });
  }
};

export const delUser = async (req, res) => {
  try {
    const id = req.params.id;

    const { ok, values, message, status } = await deleteUser(id);

    if (!ok) res.status(status).json(message);
    else res.status(status).json(message);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userSchema = Joi.object({
      name: Joi.string().min(4).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(5).max(30).required(),
    });

    const { error } = userSchema.validate({ name, email, password });

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { ok, values, message, status } = await userCreate({
      name,
      email,
      password,
    });

    if (!ok) res.status(status).json(message);
    else res.status(status).json(values);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: error.message });
  }
};
