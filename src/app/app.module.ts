import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; //for input
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ModalComponent } from './component/commons/modal/modal.component';
import { TableComponent } from './component/commons/table/table.component';

@NgModule({
	declarations: [AppComponent, DashboardComponent, ModalComponent, TableComponent,],
	imports: [BrowserModule, AppRoutingModule, FormsModule,],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
