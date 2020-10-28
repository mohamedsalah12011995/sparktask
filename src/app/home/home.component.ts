import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { faCoffee , faPlus } from '@fortawesome/free-solid-svg-icons';
import { status , data } from '../../assets/Employees.json';
import { Employee } from '../model/employee';
import * as uuid from 'uuid';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: BsModalService) {}

  disabled = false;
  faCoffee = faCoffee;
  faPlus = faPlus;
  employees: any[] = [];

  page = 1;
  itemsPerPage = 10;

  modalRef: BsModalRef;
  employee: Employee = new Employee();

  typeFilter: any =
  [{
    id: '1',
    name: 'after'
  }, {
    id: '2',
    name: 'between'
  }, {
    id: '3',
    name: 'befor'
  }];

  type = {};
  startSalary = 0;
  endSalary = 0;

  ngOnInit(): void {
    this.employees = data.employees;
    console.log(this.employees);

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }




  getSalary(){

    if (this.type === 'after') 
        this.getSalaryAfter();
      
      else if (this.type === 'befor') 
        this.getSalaryBefor();
      
      else if (this.type === 'between') 
        this.getSalaryBefor();
      
      else 
        this.getEmployees();
      
  }

  getSalaryAfter(){
    this.employees = data.employees.filter(f => Number( f.firstContractingSalary) > this.startSalary);
  }

  getSalaryBetween(){
    this.employees = data.employees.filter(f => Number( f.firstContractingSalary) <= this.startSalary &&
    Number( f.firstContractingSalary) >= this.endSalary);
  }

  getSalaryBefor(){

    this.employees = data.employees.filter(f => Number( f.firstContractingSalary) < this.startSalary);
  }

  getEmployees(){
    this.employees = data.employees;
  }

  createEmployee(){
    // generate UUID
    this.employee.id = uuid.v4();
    this.employee.position.id = uuid.v4();
    this.employee.department.id = uuid.v4();
    this.employee.employeeJobStatuses.map(m => {
      m.id = uuid.v4();
    });
    this.page = this.employees.length / 10 + 1;
    data.employees.push(this.employee);
  }

  getItemsPerPage(itemsPerPage){
    this.itemsPerPage=itemsPerPage;
  }
}
