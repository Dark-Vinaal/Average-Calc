function calculateAverage() {
    let count = parseInt(prompt("How many numbers do you want to calculate the average for?"));
    if (isNaN(count) || count <= 0) {
        document.getElementById("result").innerHTML = "Please enter a valid positive number.";
        return;
    }
    let sum = 0;
    for (let i = 1; i <= count; i++) {
        let num = parseFloat(prompt(`Enter number ${i}:`));
        if (isNaN(num)) {
            alert("Invalid input! Please enter a number.");
            i--;
            continue;
        }
        sum += num;
    }
    let average = sum / count;
    document.getElementById("result").innerHTML = `<h2>Average: ${average.toFixed(2)}</h2>`;
}
