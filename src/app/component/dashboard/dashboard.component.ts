import { Component } from '@angular/core';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	providers: [CrudService]
})
export class DashboardComponent {
	constructor(private taskListService: CrudService,) { }

	tasks: Task[] = [];
	newTask: Task = new Task(0, '', false);
	selectedTask: Task = new Task(0, '', false);

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
			this.newTask = new Task(0, '', false); // clear input after adding todo
		}
	}

	removeTodo(index: number) {
		this.taskListService.removeNewTask(this.tasks[index]);
	}

	editTodo(index: number) {
		this.selectedTask = new Task(
			index,
			this.tasks[index].name, false
		)
		this.editIndex = index;
		this.displayModal();
	}

	updateTodo() {
		this.taskListService.updateTask(this.editIndex, this.selectedTask);
		this.closeModal();
	}

	checkStatus(index: number): boolean {
		return this.tasks[index].isCompleted;
	}

	toggleCompleted(index: number) {
		this.taskListService.updateTaskStatus(index);
	}

	displayModal() {
		this.showModal = true;
	}

	closeModal() {
		this.showModal = false;
		this.editIndex = -1;
	}



}
