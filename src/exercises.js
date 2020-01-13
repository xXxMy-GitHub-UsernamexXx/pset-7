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
                for (var i = 0; i < n - 1; i++) {
                        let placeholderA = values[i];
                        newValues.push(placeholderA);
                }

                for (var j = n; j > 0; j--) {
                        let placeholderB = values[values.length - j];
                        newValues.push(placeholderB);
                }

                return newValues
        }
}

function difference(numbers) {
  // write your code here
}

function max(number) {
  // write your code here
}

function middle(values) {
  // write your code here
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
