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

	removeNewTask(taskID: any) {
		const index: number = taskListData.findIndex((task) => task.id === taskID);
		taskListData.splice(index, 1);
	}

	updateTask(taskID: any, newTaskData: Task) {
		const index: number = taskListData.findIndex((task) => task.id === taskID);
		taskListData.splice(index, 1, newTaskData);
	}

	updateTaskStatus(taskID: any) {
		const index: number = taskListData.findIndex((task) => task.id === taskID);
		taskListData[index].isCompleted = taskListData[index].isCompleted;
	}
}
