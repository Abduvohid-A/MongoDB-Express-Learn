import {findAllUsers, findUser,
    updateUser, deleteUser, createUser
} from "../services/users.service.js";


export const getAllUsers = async (req, res) => {
    try {
        const {ok, values, message, status  } = await findAllUsers();
        if (!ok) res.status(status).json(message);
        else  res.status(status).json(values);
    } catch (error) {
        res.status(500).json({error : error.message});
    };
};

export const getUser = async (req, res) => {
    try {
        const {ok, values, message, status  } = await findUser();
        if (!ok) res.status(status).json(message);
        else  res.status(status).json(values);
    } catch (error) {
        res.status(500).json({error : error.message});
    };
};

export const putUser = async (req, res) => {
    try {
        const {ok, values, message, status  } = await updateUser();
        if (!ok) res.status(status).json(message);
        else  res.status(status).json(values);
    } catch (error) {
        res.status(500).json({error : error.message});
    };
};

export const delUser = async (req, res) => {
    try {
        const {ok, values, message, status  } = await deleteUser();
        if (!ok) res.status(status).json(message);
        else  res.status(status).json(values);
    } catch (error) {
        res.status(500).json({error : error.message});
    };
};

export const createUser = async (req, res) => {
    try {
        const {ok, values, message, status  } = await createUser();
        if (!ok) res.status(status).json(message);
        else  res.status(status).json(values);
    } catch (error) {
        res.status(500).json({error : error.message});
    };
};