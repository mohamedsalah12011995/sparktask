export class Employee {

    constructor() {
       this.id = '';
       this.fullName_FL = '';
       this.fullName_SL = '';
       this.hiringDate = '';
       this.firstContractingSalary = '';
       this.position =  new  Sheard();
       this.department =  new  Sheard();
       this.employeeJobStatuses = [new EmployeeJobStatuses()];


    }



    id: string;
    fullName_FL: string;
    fullName_SL: string;
    hiringDate: string;
    firstContractingSalary: string;
    position: Sheard;
    department: Sheard;
    employeeJobStatuses: EmployeeJobStatuses[];

}



export class Sheard {

    constructor() {
       this.id = '';
       this.name_FL = 'Main Department';
       this.name_SL = 'Main Department';
    }
    id: string;
    name_FL: string ;
    name_SL: string ;
}

export class EmployeeJobStatuses {

    constructor() {
        this.id = '';
        this.status = 'STATUS_ACTIVE';
        this.type = 'STATUS_TYPE_CURRENT';
        this.terminationDate = '0001-01-01T00:00:00';
        this.suspendFromDate = '0001-01-01T00:00:00';
        this.suspendToDate = '0001-01-01T00:00:00';
    }
    id: string;
    status: string;
    type: string;
    terminationDate: string;
    suspendFromDate: string;
    suspendToDate: string;
}
