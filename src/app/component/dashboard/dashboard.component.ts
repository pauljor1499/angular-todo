import { Component } from '@angular/core';
import { TaskModel } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	providers: [CrudService]
})
export class DashboardComponent {
	constructor(private taskListService: CrudService,) { }

	tasks: TaskModel[] = [];
	newTask: TaskModel = new TaskModel(0, '', false);
	selectedTask: TaskModel = new TaskModel(0, '', false);

	editIndex: number = -1;
	showModal: boolean = false;

	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		this.getAllTasks();
	}

	getAllTasks(): void {
		this.tasks = this.taskListService.getAllTasks();
	}

	addTodo() {
		if (this.newTask.name) {
			this.newTask.id = this.tasks.length;
			this.taskListService.addNewTask(this.newTask);
			this.newTask = new TaskModel(0, '', false); // clear input after adding todo
		}
	}

	removeTodo(taskID: number) {
		this.taskListService.removeNewTask(taskID);
	}

	editTodo(index: number) {
		this.selectedTask = new TaskModel(
			this.tasks[index].id,
			this.tasks[index].name,
			this.tasks[index].isCompleted
		)
		this.editIndex = index;
		this.displayModal();
	}

	updateTodo() {
		this.taskListService.updateTask(this.tasks[this.editIndex].id, this.selectedTask);
		this.closeModal();
	}

	checkStatus(index: number): boolean {
		return this.tasks[index].isCompleted;
	}

	toggleCompleted(taskID: number) {
		this.taskListService.updateTaskStatus(taskID);
	}

	displayModal() {
		this.showModal = true;
	}

	closeModal() {
		this.showModal = false;
		this.editIndex = -1;
	}



}
