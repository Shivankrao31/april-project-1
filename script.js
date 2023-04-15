/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    const developers = arr.filter((employee) => employee.profession === "developer");
  const developerNames = developers.map((developer) => developer.name);
  console.log("Developers: ", developerNames);
  }

  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    const developers = [];
    arr.forEach((employee) => {
      if (employee.profession === "developer") {
        developers.push(employee);
      }
    });
    console.log("Developers: ", developers);
  }

  function addData() {
    //Write your code here, just console.log
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log("New Employee: ", newEmployee);
    console.log("Employees: ", arr);
  }

  
  function removeAdmin() {
    //Write your code here, just console.log
    const filteredEmployees = arr.filter((employee) => employee.profession !== "admin");
    arr.splice(0, arr.length, ...filteredEmployees);
    console.log("Employees: ", arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newEmployees = [
        { id: 5, name: "kajal", age: "21", profession: "designer" },
        { id: 6, name: "shivank", age: "23", profession: "developer" },
        { id: 7, name: "mohit", age: "21", profession: "manager" },
      ];
      const allEmployees = arr.concat(newEmployees);
      console.log("All Employees: ", allEmployees);
  }