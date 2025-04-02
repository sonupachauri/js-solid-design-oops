// # SRP: Single Responsibility Principle 
// calculateSalary function should belong to Managed Salary class

class ManagedEmployee{

    constructor() {
        this.name = "sonu pachauri";
      }

    getEmp(){

    }
    
    updateEmp(){

    }

    deleteEmp(){

    }

    calculateSalary(){

    }

}

class ManagedSalary{
    
}

const mngEmp = new ManagedEmployee();

console.log(mngEmp.name);