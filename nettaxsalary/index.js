// Function to calculate net salary
function calculateNetSalary() {
    let basicSalary;
    let benefits;

    // Prompt the user for basic salary until a valid number is entered
    while (isNaN(basicSalary) || basicSalary < 0) {
        basicSalary = parseFloat(prompt("Enter the basic salary:"));
        if (isNaN(basicSalary) || basicSalary < 0) {
            console.log("Please enter a valid positive number for basic salary.");
        }
    }

    // Prompt the user for benefits until a valid number is entered
    while (isNaN(benefits) || benefits < 0) {
        benefits = parseFloat(prompt("Enter the benefits:"));
        if (isNaN(benefits) || benefits < 0) {
            console.log("Please enter a valid positive number for benefits.");
        }
    }

    // Constants for tax, NHIF, and NSSF rates
    const taxRate = 0.3;
    const  nhifRate = 0.015;
    const nssfRate = 0.06;

    // Calculate deductions
    let payee = basicSalary * taxRate;
    let nhifDeductions = basicSalary * nhifRate;
    let nssfDeductions = basicSalary * nssfRate;

    // Calculate gross and net salary
    let grossSalary = basicSalary + benefits;
    let deductions = payee + nhifDeductions + nssfDeductions;
    let netSalary = grossSalary - deductions;

    // Display results using console.log()
    console.log("Gross Salary:", grossSalary.toFixed(2), "KES");
    console.log("Tax (PAYE):", payee.toFixed(2), "KES");
    console.log("NHIF Deductions:", nhifDeductions.toFixed(2), "KES");
    console.log("NSSF Deductions:", nssfDeductions.toFixed(2), "KES");
    console.log("Net Salary:", netSalary.toFixed(2), "KES");
}
