import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  const { completed } = req.query;

  let completedFilter;

  if (completed === undefined) {
    completedFilter = undefined;
  } else {
    completedFilter = completed === 'true';
  }
  const tasks = await taskService.getTasks(completedFilter);
  res.json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
