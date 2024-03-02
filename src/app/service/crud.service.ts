import { Injectable } from '@angular/core';
import { TaskModel } from '../model/task';
import { taskListData } from '../model/taskListData';

@Injectable({
	providedIn: 'root',
})
export class CrudService {
	constructor() { }

	getAllTasks(): TaskModel[] {
		return taskListData;
	}

	addNewTask(taskData: TaskModel) {
		taskListData.push(taskData)
	}

	removeNewTask(taskID: number) {
		const index: number = taskListData.findIndex((task) => task.id === taskID);
		taskListData.splice(index, 1);
	}

	updateTask(taskID: number, newTaskData: TaskModel) {
		const index: number = taskListData.findIndex((task) => task.id === taskID);
		taskListData.splice(index, 1, newTaskData);
	}

	updateTaskStatus(taskID: number) {
		const index: number = taskListData.findIndex((task) => task.id === taskID);
		taskListData[index].isCompleted = taskListData[index].isCompleted;
	}
}
