import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks() {
  return taskRepository.findAll();
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}

export async function getTasks(completed) {
  if (completed === undefined) {
    return getAllTasks();
  } else {
    return taskRepository.getTasks(completed);
  }
}
