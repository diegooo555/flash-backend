
import Task from '../models/task.model.js';

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({
            user: req.user.id,
        }).populate('user');
        res.json(tasks);
    } catch (error) {
        console.log(error);
    }
};

export const createTask = async (req, res) => {
    try {
        const { title, description, dateStart, dateEnd, color } = req.body;

        const newTask = new Task({
            title,
            description,
            dateStart: dateStart,
            dateEnd: dateEnd,
            color:  color,
            user: req.user.id,
        });
    
        const saveTask = await newTask.save();
        res.json(saveTask);
    } catch (error) {
        console.log(error);
    }
};

export const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).populate('user');
        if(!task) return res.status(404).json({message: "Task not found"});
        res.json({task});
    } catch (error) {
        console.log(error);
    }
};

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task) return res.status(404).json({message: "Task not found"});
        res.sendStatus(204);
    } catch (error) {
        console.log(error);
    }
};

export const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if(!task) return res.status(404).json({message: "Task not found"});
        res.json({task});
    } catch (error) {
        console.log(error);
    }
};