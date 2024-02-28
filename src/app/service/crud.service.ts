import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { taskListData } from '../model/taskListData';

@Injectable({
	providedIn: 'root',
})
export class CrudService {
	constructor() { }

	getAllTasks(): Task[] {
		return taskListData;
	}

	addNewTask(taskData: Task) {
		taskListData.push(taskData)
	}

	removeNewTask(taskID: number) {
		const index: number = taskListData.findIndex((task) => task.id === taskID);
		taskListData.splice(index, 1);
	}

	updateTask(taskID: number, newTaskData: Task) {
		const index: number = taskListData.findIndex((task) => task.id === taskID);
		taskListData.splice(index, 1, newTaskData);
	}

	updateTaskStatus(taskID: number) {
		const index: number = taskListData.findIndex((task) => task.id === taskID);
		taskListData[index].isCompleted = taskListData[index].isCompleted;
	}
}
