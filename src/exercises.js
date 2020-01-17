function commonEnd(a, b) {
        if (!a || a.length === 0 || !b || b.length === 0) {
                return false;
        }

        const aLast = a.length - 1;
        const bLast = b.length - 1;

        if (a[0] === b[0]) {
                return true;
        } else if (a[aLast] === b[bLast]) {
                return true;
        } else {
                return false;
        }
}

function endsMeet(values, n) {
        const newValues = [];

        if (!values || (values.length < n) || !n || n <= 0 || isNaN(Number(n))) {
                return newValues;
        } else {
                for (var i = 0; i < n; i++) {
                        let placeholderA = values[i];
                        newValues.push(placeholderA);
                }
                for (var j = n; j > 0; j--) {
                        let placeholderB = values[values.length - j];
                        newValues.push(placeholderB);
                }

                return newValues;
        }
}

function difference(numbers) {
        const placeholderArray = [];
        let highestNumber;
        let lowestNumber;
        let finished = null;

        if (!numbers || (numbers.length === 0)) {
                return undefined;
        } else {
                numbers.forEach((numberA) => {
                        let indexPlaceholder = isNaN(Number(numberA)) ? true : false;
                        placeholderArray.push(indexPlaceholder);
                });
                for (var i = 0; i < placeholderArray.length; i++) {
                        if (placeholderArray[i] == true) {
                                return undefined;
                                finished = true;
                                break;
                        }
                }

                if (numbers[0] > numbers[1]) {
                        highestNumber = numbers[0];
                        lowestNumber = numbers[1];
                } else if (numbers[0] < numbers[1]) {
                        highestNumber = numbers[1];
                        lowestNumber = numbers[0];
                } else if (numbers.length = 1) {
                        highestNumber = numbers[0];
                        lowestNumber = numbers[0];
                }
                if (finished !== true) {
                        numbers.forEach((numberB) => {
                                if (numberB > highestNumber) {
                                        highestNumber = numberB;
                                } else if (numberB < lowestNumber) {
                                        lowestNumber = numberB;
                                }
                        });

                        return (highestNumber - lowestNumber);
                }
        }
}

function max(number) {
  // write your code here
}

function middle(values) {
        let output = [];
        let completion = false;

        if (!values || values.length < 3) {
                completion = true;
                return output;
        }

        if ((values.length % 2) === 0) {
                completion = true;
                return output;
        }

        if (completion == false) {
                values.forEach((value) => {
                        valueA = Number(value);
                });

                for (var i = 0; i < values.length - 1; i++) {
                        if (isNaN(values[i])) {
                                return output;
                                completion = true;
                                break;
                        }
                }
        }

        if (completion == false) {
                let valuesEnd = values.length - 1;
                let valuesMiddle = valuesEnd / 2;
                let minusOne = valuesMiddle - 1;
                let plusOne = valuesMiddle + 1;

                output.push((values[minusOne]), (values[valuesMiddle]), (values[plusOne]));

                return output;
        }
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
        console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
