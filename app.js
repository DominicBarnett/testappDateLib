import D from '@cabbagesoup/datelib';

// Function to run tests
function runTests() {
    console.log("Testing D Class...\n");

    // Test 1: Create a new date
    const date1 = new D(2023, 9, 8); // October 8, 2023 (month is 0-indexed)
    console.log("Test 1: Create Date");
    console.log("Year:", date1.year); // Expected: 2023
    console.log("Month:", date1.month); // Expected: October
    console.log("Date:", date1.date); // Expected: 8
    console.log("Day:", date1.day); // Expected: Sunday
    console.log("Formatted (Y M D):", date1.format('Y M D')); // Expected: 2023 October 08
    console.log("When:", date1.when()); // Will vary based on current date
    console.log();

    // Test 2: Create another date
    const date2 = new D(2000, 0, 1); // January 1, 2000
    console.log("Test 2: Create Another Date");
    console.log("Year:", date2.year); // Expected: 2000
    console.log("Ordinals (#):", date2.format('#')); // Expected: 1st
    console.log("When:", date2.when()); // Will vary based on current date
    console.log();

    // Test 3: Create a date in the past
    const date3 = new D(1990, 5, 15); // June 15, 1990
    console.log("Test 3: Create Past Date");
    console.log("When:", date3.when()); // Expected: e.g., "34 years ago" (based on the current year)
    console.log();

    // Test 4: Create a date in the future
    const date4 = new D(2025, 1, 20); // February 20, 2025
    console.log("Test 4: Create Future Date");
    console.log("When:", date4.when()); // Expected: e.g., "1 year from now" (based on the current year)
    console.log();

    // Test 5: Edge Cases
    const today = new D(); // Current date
    console.log("Test 5: Today's Date");
    console.log("When:", today.when()); // Expected: "today"
    console.log();
}

// Run the tests
runTests();
