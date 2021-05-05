function NewSalary(){
    const Salary = document.getElementById("Salary").value;
    let TotalSalary1 = Math.floor((Salary*(8/100))); //calculate the percentage of the salary
    let TotalSalary2= Math.floor((Salary*(5/100))); //calculate the percentage of the salary
    let total = parseFloat(Salary) + parseFloat(TotalSalary1); // Add the salary to get the new salary inputted by employer
    let total2 = parseFloat(Salary) + parseFloat(TotalSalary2); // Add the salary to get the new salary inputted by employer
    document.getElementById("New").innerHTML = "The new 8% salary increase is: " + total; // Display the results
    document.getElementById("TotalSalary2").innerHTML = "The new 5% salary increase is: " + total2; // Display the results
}
function clearSalary(){
    document.getElementById("Salary").value = ""; // clear the value inputted by the user
}