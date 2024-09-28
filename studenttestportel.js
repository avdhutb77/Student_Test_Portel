import readline from 'readline-sync'; 


const student = {
    rollNo: 101,
    name: "John Doe",
    class: "10th Grade",
    gender: "Male",
    testScores: [
        { subName: "Math", marks: "" },
        { subName: "Science", marks: "" },
        { subName: "English", marks: "" }
    ],

    // Method to add test score
    addTestScore: function (subName, marks) {
        this.testScores.push({ subName: subName, marks: marks });
    }
};

function displayMenu() {
    console.log(`**** Display Menu ****\n
        1) Take a Test \n
        2) Generate Result \n
        3) View Result \n
        4) Exit`);

    const userIp = readline.question("Enter your option: ");

    if (userIp == 1) {
        handleTakeTest();
    } else if (userIp == 2) {
        handleGenerateResult();
    } else if (userIp == 3) {
        handleViewResult();
    } else if (userIp == 4) {
        console.log("Exiting the program. Goodbye!");
        return; 
    } else {
        console.log("Wrong input. Please try again.");
        displayMenu(); 
    }
}