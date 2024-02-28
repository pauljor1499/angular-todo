export class Task {
	id: number = 0;
	name: string = '';

	constructor(taskID: number, taskData: string) {
		this.id = taskID;
		this.name = taskData;
	}
}
