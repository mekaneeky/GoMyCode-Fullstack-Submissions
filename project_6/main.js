/*
Description: 
Given two sets of elements, find the sum of all distinct elements from the set. In other words, find the sum of all elements which are present in either of the given set. 
Example:
Set 1 : [3, 1, 7, 9], Set 2: [2, 4, 1, 9, 3]
Output: 13 (distinct elements - 4, 7, 2 )
Give two Solution to this problem, using a different type of data structures each time.
Now, given two sets of integers, write also two algorithms to print the sum of overlapping elements in two sets. The elements in each set are unique or there are no duplicates within a set.
Example:
Set 1: [12, 13, 6, 10]
Set 2: [13, 10, 16, 15]
Sum of overlapping elements: 46
Explanation: Common elements are 10, 13

Instructions
Problem 1, Solution 1 with an array.
Initialize sum = 0. Compare each element of set one with the second set and if element is not present then add that element to sum. Then do the vice versa to add elements from the second set. 
Problem 1, Solution 2 with an hash table.
Insert all the elements from both the sets with the element as key and its count (in both arrays).
Now iterate through the constructed map and sum all the elements with count = 1.
Problem 2, same approaches with little modifications.

*/

var set_1 = [3, 1, 7, 9];
var set_2 = [2, 4, 1, 9, 3];

//making it as explicit as possible
// this is slower than hashtable however
function solution_1(set_1, set_2) {
    sum = 0;

    for (i of set_1) {
        i_is_in_j = false;
        for (j of set_2 ) {
            if (i == j){
                i_is_in_j = true;
            }
        }
        if (!i_is_in_j) {
            sum += i;
        }
    }
    
    for (j of set_2) {
        j_is_in_i = false;
        for (i of set_1 ) {
            if (i == j){
                j_is_in_i = true;
            }
        }
        if (!j_is_in_i) {
            sum += j;
        }
    }

    return sum;
}



function solution_2(set_1, set_2) {

    count_obj = {};
    for (i of set_1) {
        if (count_obj[i] === undefined ) {
            count_obj[i] = 1;
        } else {
            count_obj[i] += 1;
        }
    }

    for (j of set_2) {
        if (count_obj[j] === undefined) {
            count_obj[j] = 1;
        } else {
            count_obj[j] += 1;
        }
    }
    sum = 0;
    for (const [number, count] of Object.entries(count_obj)) {
        if (count == 1) {
            sum += parseInt(number);

        } 
    }
    return sum
}