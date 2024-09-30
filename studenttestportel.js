import readline from 'readline-sync'; 


const student = [{
    rollNo: 101,
    name: "Avdhut",
    class: 10,
    gender: "Male",
    testScores: [
        { subName: "Math", marks: "" },
        { subName: "Science", marks: "" },
        { subName: "English", marks: "" }
    ],

},
{
    rollNo: 102,
    name: "rahul",
    class: 10,
    gender: "Male",
    testScores: [
        { subName: "Math", marks: "" },
        { subName: "Science", marks: "" },
        { subName: "English", marks: "" }
    ],

},
{
    rollNo: 103,
    name: "Avi",
    class: 10,
    gender: "Male",
    testScores: [
        { subName: "Math", marks: "" },
        { subName: "Science", marks: "" },
        { subName: "English", marks: "" }
    ],

},{
    rollNo: 103,
    name: "sham",
    class: 9,
    gender: "Male",
    testScores: [
        { subName: "Math", marks: "" },
        { subName: "Science", marks: "" },
        { subName: "English", marks: "" }
    ],

}



];
displayMenu();

function displayMenu() {
    console.log(`**** Display Menu ****\n
        1) Take a Test \n
        2) Generate Result \n
        3) View Result \n
        4) View class Result \n
        5) Exit`);

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
+------+--------------------+----------------+--------+
| Roll |        Name        |      Class     | Gender |
+------+--------------------+----------------+--------+
| ${st.rollNo}  |  ${st.name.padEnd(18)}| ${st.class}             | ${st.gender.padEnd(6)} |
+------+--------------------+----------------+--------+`);

    
    console.log(`\nTest Scores:
+--------------------+-------+
| Subject            | Marks |
+--------------------+-------+`);

    st.testScores.forEach(score => {
        console.log(`| ${score.subName.padEnd(18)} | ${score.marks.toString().padStart(5)} |`);
    });

    console.log(`+--------------------+-------+`);

    
     
    }

    

    displayMenu();
}



function handleClassResult(){const a=parseInt(readline.question("Enter class: "));
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
    console.log("Average Total_Marks of student class",a," is= ",mark/count)
    count=count*300;
    const averageScore = (mark / count) * 100 ;
    console.log("Average percentage of class ",a, " is- ",averageScore.toFixed(2));

    displayMenu();
}