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
    res.status(500).json({ error: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { ok, values, message, status } = await userCreate(req.body);
    if (!ok) res.status(status).json(message);
    else res.status(status).json(values);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
