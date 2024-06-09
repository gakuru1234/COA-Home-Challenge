const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function SubarrayWithSum(arr, target) {
    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

rl.question('Enter the array of integers separated by commas: ', (arrString) => {
    rl.question('Enter the target sum: ', (targetString) => {
        let arr = arrString.split(',').map(Number);
        let target = Number(targetString);

        let result = SubarrayWithSum(arr, target);
        console.log(result);

        rl.close();
    });
});
