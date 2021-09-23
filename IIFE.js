"use strict";
let arr = [2, 6, 7, 10, 11, 15, 18, 3, 23];
let arr1 = [3, 6, 33, 25, 15, 57, 77, 12, 9];
let arr2 = [...arr, ...arr1];
let str = ["sad", "wem", "wow", "rem", "jet"];

//a. Print odd numbers in an array

(function () {
  var odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      odd.push(arr[i]);
    }
  }
  console.log(odd);
})();

//b.Convert all the strings to title caps in a string array

(function () {
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(str);
})();

//c.Sum of all numbers in an array

(function () {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i])) {
      sum += arr[i];
    }
  }
  console.log(sum);
})();

//d.Return all the prime numbers in an array

(function () {
  const pr = arr.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });

  console.log(pr);
})();

//e.Return all the palindromes in an array

(function () {
  var pr = [];
  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
    } else pr.push(str[i]);
  }
  console.log(pr);
})();

//f.Return median of two sorted arrays of same size

(function () {
  const median = (res) => {
    const mid = Math.floor(res.length / 2),
      nums = [...res].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };
  console.log(median([...arr, ...arr1]));
})();

//g.Remove duplicates from an array

(function () {
  const uniq = [...new Set(arr2)];
  console.log(uniq);
})();

//h.Rotate an array by k times

(function (array, numberOfShifts) {
  {
    let tmp = 0;
    const leng = array.length;
    numberOfShifts = numberOfShifts % leng;
    for (let i = 0; i < numberOfShifts; i++) {
      tmp = array.pop();
      array.unshift(tmp);
    }
    return console.log(array);
  }
})(arr1, 1);
