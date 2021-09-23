"use strict";
let arr = [2, 6, 7, 10, 11, 15, 18, 3, 23];
let arr1 = [3, 6, 33, 25, 15, 57, 77, 12, 9];
let arr2 = [...arr, ...arr1];
let stringA = ["sad", "wem", "wow", "rem", "jet"];

//a.Print odd numbers in an array

const odd = (array) => {
  var odd1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      odd1.push(arr[i]);
    }
  }
  return console.log(odd1);
};
odd(arr);

//b.Convert all the strings to title caps in a string array

const title = (stringArr) => {
  for (let i = 0; i < stringArr.length; i++) {
    stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1);
  }
  console.log(stringArr);
};
title(stringA);

//c.Sum of all numbers in an array

const sum = (array) => {
  var sumA = 0;
  for (let i = 0; i < array.length; i++) {
    if (Number(array[i])) {
      sumA += array[i];
    }
  }
  console.log(sumA);
};
sum(arr);

//d.Return all the prime numbers in an array

const prime = (array) => {
  const pr = array.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });

  console.log(pr);
};
prime(arr);

//e.Return all the palindromes in an array

const checkPalindrome = (str) => {
  var pr = [];
  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
    } else pr.push(str[i]);
  }

  console.log(pr);
};
checkPalindrome(stringA);
