import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { StoreModule } from '@ngrx/store'
import { reducer } from './reducer/employee.reducer';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component'
import { EmployeeService } from './app.service'

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      employee: reducer
    })
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
