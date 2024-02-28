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

	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
	}

	getAllTasks(): void {
		this.tasks = this.taskListService.getAllTasks();
	}

}
