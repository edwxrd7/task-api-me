import prisma from '../config/db.js';

export async function findAll() {
  return prisma.task.findMany();
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}

// Get tasks, completed, or not, or all
export async function getTasks(completedT) {
  return prisma.task.findMany({ where: { completed: completedT } });
}
