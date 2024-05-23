import Task from "../models/tasks.models.js";


export const findAllTasks = async () => {
    try {
        const results = await Task.find();

        if (results.length === 0) {
            return { ok: false, values, message: "Tasks Not Found", status: 404 }
        };
        return { ok: true, values: results, message: "Successful", status: 200 };

    } catch (error) {
        console.log(error);
        return { ok: false, values, message: error.message, status: 500 }
    };
};

export const findTask = async (id) => {
    try {
        const results = await Task.find({_id : id});
        if (!results) {
            return { ok: false, values, message: "Tasks Not Found", status: 404 }
        };
        return { ok: true, values: results, message: "Successful", status: 200 };

    } catch (error) {
        console.log(error);
        return { ok: false, values, message: error.message, status: 500 }
    };
};

export const updateTask = async (id, task) => {
    try {
        const results = await Task.findOne({ _id : id});
        if (!results) {
            return { ok: false, values, message: "Tasks Not Found", status: 404 }
        };
        const updTask = await Task.findByIdAndUpdate(id, task);
        return { ok: true, values: updTask, message: "Successful", status: 200 };

    } catch (error) {
        console.log(error);
        return { ok: false, values, message: error.message, status: 500 }
    };
};

export const deleteTask = async (id) => {
    try {
        const results = await Task.findOne({ _id : id });
        if (!results) {
            return { ok: false, values, message: "Tasks Not Found", status: 404 }
        };
        await Task.findByIdAndDelete(id);
        return { ok: true, values, message: "Successful Deleted", status: 200 };

    } catch (error) {
        console.log(error);
        return { ok: false, values, message: error.message, status: 500 }
    };
};

export const taskCreate = async (newTask) => {
    try {
        const taskExist = await Task.findOne(newTask);
        if (taskExist) {
            return { ok: false, values, message: "Task already exist", status: 400 }
        };
        const taskData = new Task(newTask);
        const saveTask = await taskData.save();
        return { ok: true, values: saveTask, message: "Successful created", status: 201};

    } catch (error) {
        console.log(error);
        return { ok: false, values, message: error.message, status: 500 }
    };
};