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
}
