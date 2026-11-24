// External JS for 17-js-basics

function runSampleJs() {
    // 1. Variables
    let name = "Aniket";
    const maxMarks = 100;
    let myMarks = 85;

    // 2. Function with conditional (if-else)
    let result = "";
    if (myMarks >= 40) {
        result = "PASSED";
    } else {
        result = "FAILED";
    }

    // 3. Simple for-loop (printed to console)
    console.log("Counting 1 to 5 with for loop:");
    for (let i = 1; i <= 5; i++) {
        console.log("Count: " + i);
    }

    // Show output on page
    document.getElementById("demoOutput").innerText = 
        "Student: " + name + " | Score: " + myMarks + "/" + maxMarks + " | Result: " + result;
}
