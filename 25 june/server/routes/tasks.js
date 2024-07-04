const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

// Create Task
router.post('/', authMiddleware, async (req, res) => {
  const { title, description, dueDate, status } = req.body;
  try {
    const task = new Task({ title, description, dueDate, status, user: req.user.id });
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Read Tasks
router.get('/', authMiddleware, async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const tasks = await Task.find({ user: req.user.id })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    const count = await Task.countDocuments();
    res.json({ tasks, totalPages: Math.ceil(count / limit), currentPage: page });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Update Task
router.put('/:id', authMiddleware, async (req, res) => {
  const { title, description, dueDate, status } = req.body;
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    if (task.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });
    task.title = title || task.title;
    task.description = description || task.description;
    task.dueDate = dueDate || task.dueDate;
    task.status = status || task.status;
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Delete Task
router.delete('/:id', [authMiddleware, adminMiddleware], async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    await task.remove();
    res.json({ msg: 'Task removed' });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
