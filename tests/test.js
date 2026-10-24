function addNumbers(a, b) { return a + b; }

function runTests() {
    console.log('Running tests...');
    const result1 = addNumbers(2, 3);
    if (result1 === 5) { console.log('PASS Test 1: addNumbers(2, 3) = 5'); }
    else { console.log('FAIL Test 1: expected 5, got', result1); process.exit(1); }

    const result2 = addNumbers(-1, 1);
    if (result2 === 0) { console.log('PASS Test 2: addNumbers(-1, 1) = 0'); }
    else { console.log('FAIL Test 2: expected 0, got', result2); process.exit(1); }

    console.log('All tests passed!');
}
runTests();
