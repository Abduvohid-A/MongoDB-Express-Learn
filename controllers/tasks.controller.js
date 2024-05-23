import {
    findAllTasks, findTask,
    updateTask, deleteTask, taskCreate
} from "../services/tasks.service.js";


export const getAllTasks = async (req, res) => {
    try {
        const { ok, values, message, status } = await findAllTasks();
        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

export const getTask = async (req, res) => {
    try {
        const id = req.params.id;
        const { ok, values, message, status } = await findTask(id);
        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

export const putTask = async (req, res) => {
    try {
        const id = req.params.id;
        const { ok, values, message, status } = await updateTask(id, req.body);
        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

export const delTask = async (req, res) => {
    try {
        const id = req.params.id;
        const { ok, values, message, status } = await deleteTask(id);
        if (!ok) res.status(status).json(message);
        else res.status(status).json(message);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

export const createTask = async (req, res) => {
    try {
        const { ok, values, message, status } = await taskCreate(req.body);
        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};