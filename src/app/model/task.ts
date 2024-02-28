export class Task {
	id: number = 0;
	name: string = '';
	isCompleted: boolean = false

	constructor(taskID: number, taskData: string, taskIsCompleted: boolean) {
		this.id = taskID;
		this.name = taskData;
		this.isCompleted = taskIsCompleted
	}
}
