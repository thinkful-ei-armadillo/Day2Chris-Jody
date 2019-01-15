'use strict';
function max(numbers) {
    let nowMax = numbers[0];
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] > nowMax) {
            nowMax = numbers[i];
        }
        i++;
    }
    return nowMax;
}
