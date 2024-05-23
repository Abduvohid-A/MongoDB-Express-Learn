import {findAllTasks, findTask,
    updateTask, deleteTask, createTask
} from "../services/tasks.service.js";


export const getAllTasks = async (req, res) => {
    try {
        const {ok, values, message, status  } = await findAllTasks();
        if (!ok) res.status(status).json(message);
        else  res.status(status).json(values);
    } catch (error) {
        res.status(500).json({error : error.message});
    };
};

export const getTask = async (req, res) => {
    try {
        const {ok, values, message, status  } = await findTask();
        if (!ok) res.status(status).json(message);
        else  res.status(status).json(values);
    } catch (error) {
        res.status(500).json({error : error.message});
    };
};

export const putTask = async (req, res) => {
    try {
        const {ok, values, message, status  } = await updateTask();
        if (!ok) res.status(status).json(message);
        else  res.status(status).json(values);
    } catch (error) {
        res.status(500).json({error : error.message});
    };
};

export const delTask = async (req, res) => {
    try {
        const {ok, values, message, status  } = await deleteTask();
        if (!ok) res.status(status).json(message);
        else  res.status(status).json(values);
    } catch (error) {
        res.status(500).json({error : error.message});
    };
};

export const createTask = async (req, res) => {
    try {
        const {ok, values, message, status  } = await createTask();
        if (!ok) res.status(status).json(message);
        else  res.status(status).json(values);
    } catch (error) {
        res.status(500).json({error : error.message});
    };
};