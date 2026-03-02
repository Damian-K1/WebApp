function checkAgePrime() {
    let input = document.getElementById("birthYear").value; // Grab input from the text field

    if (!input || isNaN(input) || input < 1900 || input > new Date().getFullYear()) { //Check if input is present, a number, and within a reasonable range
        alert("Please enter a valid birth year (1900 or later, and not in the future).");
        return;
    }

    let age =calculateAge(input);

    if (isPrime(age)) {
        alert("Your age is " + age + " and it is a prime number.");
    } else {
        alert("Your age is " + age + " and it is not a prime number.");
    }
}

function calculateAge(birthYear) {
    let currentYear = new Date().getFullYear(); // Get the current year
    let age = currentYear - birthYear; // Calculate age by subtracting birth year from current year
    return age;
}

function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // If num is divisible by any number between 2 and its square root, it's not prime
    }
    return true; // If num gets here it is prime
}

