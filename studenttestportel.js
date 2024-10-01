import readline from 'readline-sync'; 


const student = [{
    rollNo: 101,
    name: "Avdhut",
    class: 8,
    gender: "Male",
    testScores: [
        { subName: "Math", marks: "" },
        { subName: "Science", marks: "" },
        { subName: "English", marks: "" }
    ],
    Total_Mark:"",
    Percentage:"",


},
{
    rollNo: 102,
    name: "rahul",
    class: 8,
    gender: "Male",
    testScores: [
        { subName: "Math", marks: "" },
        { subName: "Science", marks: "" },
        { subName: "English", marks: "" }
    ],
    Total_Mark:"",
    Percentage:"",

},
{
    rollNo: 104,
    name: "Avi",
    class: 8,
    gender: "Male",
    testScores: [
        { subName: "Math", marks: "" },
        { subName: "Science", marks: "" },
        { subName: "English", marks: "" }
    ],
    Total_Mark:"",
    Percentage:"",

},{
    rollNo: 105,
    name: "sham",
    class: 9,
    gender: "Male",
    testScores: [
        { subName: "Math", marks: "" },
        { subName: "Science", marks: "" },
        { subName: "English", marks: "" }
    ],
    Total_Mark:"",
    Percentage:"",

},{
    rollNo: 106,
    name: "sham",
    class: 9,
    gender: "Male",
    testScores: [
        { subName: "Math", marks: "" },
        { subName: "Science", marks: "" },
        { subName: "English", marks: "" }
    ],
    Total_Mark:"",
    Percentage:"",

},{
    rollNo: 107,
    name: "sham",
    class: 9,
    gender: "Male",
    testScores: [
        { subName: "Math", marks: "" },
        { subName: "Science", marks: "" },
        { subName: "English", marks: "" }
    ],
    Total_Mark:"",
    Percentage:"",

}

];

displayMenu();
function displayMenu() {
    console.log(`**** Display Menu ****\n
        1) Take a Test \n
        2) Generate Result \n
        3) View all students Result \n
        4) View Class Result \n
        5) Detail Analysis of Result\n
        6) Exit`);

    const userIp = readline.question("Enter your option: ");

    if (userIp == 1) {
        handleTakeTest();
    } else if (userIp == 2) {
        handleGenerateResult();
    } else if (userIp == 3) {
        handleViewResult();
    } else if (userIp == 4) {
        handleClassResult();
    }else if (userIp == 5) {
        handleDetailResult();
    }else if (userIp == 6) {
        console.log("Exiting the program. Goodbye!");
        return; 
    } else {
        console.log("Wrong input. Please try again.");
        displayMenu(); 
    }
}

function handleTakeTest() {
    console.log("Taking the test...");
    for (const st of student) {
    st.testScores.forEach(score => {
        
        score.marks = Math.floor(Math.random() * 101);
        console.log(`${score.subName}: ${score.marks}`);
    });
}

    console.log("Test completed!");
    displayMenu(); 
}


function handleGenerateResult() {
    console.log("Generating result...");
    let totalMarks;
    let averageScore;
    for (let st of student){
     totalMarks = st.testScores.reduce((sum, score) => {
        return sum + (parseFloat(score.marks) || 0); // Ensure marks are treated as numbers
    }, 0); 
    
    
    averageScore = totalMarks / st.testScores.length;

    st.Total_Mark = totalMarks.toString();
    st.Percentage=averageScore.toFixed(2);

    console.log(`Total Marks: of ${st.name} is  ${totalMarks}`);
    console.log(`Average Score: ${averageScore.toFixed(2)}\n\n`);

    }
    
    //console.log(`Total Marks: ${totalMarks}`);
    //console.log(`Average Score: ${averageScore.toFixed(2)}`); // Format to 2 decimal places

    displayMenu(); 
}


function handleViewResult() {
    console.log("Viewing result...");
    let totalMarks;
    let averageScore;
    for (let st of student){

   
    console.log(`\nStudent Information:
        +------+--------------------+----------------+--------+------------+-------------+
        | Roll |        Name        |      Class     | Gender | Percentage | Total Marks |
        +------+--------------------+----------------+--------+------------+-------------+
        | ${st.rollNo}  |  ${st.name.padEnd(18)}|     ${st.class}          | ${st.gender.padEnd(6)} |   ${st.Percentage}    |      ${st.Total_Mark}   |
        +------+--------------------+----------------+--------+------------+-------------+`);

    
    console.log(`\nTest Scores:
        +--------------------+-------+
        | Subject            | Marks |
        +--------------------+-------+`);

    st.testScores.forEach(score => {
        console.log(`       | ${score.subName.padEnd(18)} | ${score.marks.toString().padStart(5)} |`);
        });

        console.log(`       +--------------------+-------+`);

    }
    displayMenu(); 
 
}


function handleClassResult(){
    const a=parseInt(readline.question("Enter class: "));
    let mark=0;
    let count=0;
    let total=0;


    for(let st of student){
        if(st.class==a){
            count++;
            total = st.testScores.reduce((sum, score) => {
                return sum + (parseFloat(score.marks) || 0);
         },0);
        }else{
        continue;
        }
        mark=mark+total;
    }
    //count=count*3;
    console.log("Average Total_Marks of student class",a," is= ",Math.floor(mark/count))
    count=count*300;
    const averageScore = (mark / count) * 100 ;
    console.log("Average percentage of class ",a, " is- ",averageScore.toFixed(2),"%");

    displayMenu();
}

function handleDetailResult() {
    const Classdata = {};  

    for (let st of student) {
        
        if (!Classdata[st.class]) {
            Classdata[st.class] = {
                students: 0,
                totalMarks: 0,
                totalPercentage: 0,
                overallGrade: "",
                failedStudents: 0,
                passedStudents: 0
            };
        }

        
        Classdata[st.class].students += 1;

       
        Classdata[st.class].totalMarks += parseFloat(st.Total_Mark);
        Classdata[st.class].totalPercentage += parseFloat(st.Percentage);

        
        if (parseFloat(st.Percentage) <= 35) {
            Classdata[st.class].failedStudents += 1;
        } else {
            Classdata[st.class].passedStudents += 1;
        }
    }

   
    for (let classKey in Classdata) {
        let classData = Classdata[classKey];

        classData.AvgMarks = (classData.totalMarks / classData.students).toFixed(2);
        classData.AvgPercentage = (classData.totalPercentage / classData.students).toFixed(2);

        classData.failedStudentsPercentage = ((classData.failedStudents / classData.students) * 100).toFixed(2);
        classData.passedStudentsPercentage = ((classData.passedStudents / classData.students) * 100).toFixed(2);

        
        classData.overallGrade = getOverallGrade(classData.AvgPercentage);
    }

    
    function getOverallGrade(avgPercentage) {
        avgPercentage = parseFloat(avgPercentage);
        if (avgPercentage >= 90) {
            return "A";
        } else if (avgPercentage >= 80) {
            return "B";
        } else if (avgPercentage >= 70) {
            return "C";
        } else if (avgPercentage >= 60) {
            return "D";
        } else if (avgPercentage >= 50) {
            return "E";
        } else if (avgPercentage >= 40) {
            return "F";
        } else {
            return "FAIL";
        }
    }

    
    console.log(`
        +---------+------------------+---------+--------------+--------------+---------------+---------+---------------+---------+
        | Class   |  Total Students  |Avg Marks|Avg Percentage|Overall Grade |Failed Students|Failed % |Passed Students|Passed % |
        +---------+------------------+---------+--------------+--------------+---------------+---------+---------------+---------+`);

    for (let classKey in Classdata) {
        let classData = Classdata[classKey];
        console.log(`        |  ${classKey}      |         ${classData.students}        | ${classData.AvgMarks}  |     ${classData.AvgPercentage}    |      ${classData.overallGrade}       |    ${classData.failedStudents}          |   ${classData.failedStudentsPercentage}  |       ${classData.passedStudents}       |   ${classData.passedStudentsPercentage} |`);
    }

    console.log(`        +---------+------------------+---------+--------------+--------------+---------------+---------+---------------+---------+
    `);

    displayMenu();
}
