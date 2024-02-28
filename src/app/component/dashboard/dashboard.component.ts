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
	constructor(private taskListService: CrudService) { }


	tasks: Task[] = [];
	newTodo: Task = new Task(this.tasks.length, '');

	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		this.getAllTasks()
	}

	getAllTasks(): void {
		this.tasks = this.taskListService.getAllTasks();
	}

	addTodo() {
		// if (this.newTodo.trim() !== '') {
		// 	this.todos.push(this.newTodo);
		// 	this.newTodo = ''; // Clear input after adding todo
		// }
	}

	removeTodo(index: number) {
		// this.todos.splice(index, 1);
	}

}
