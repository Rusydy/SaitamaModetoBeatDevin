package main

/*
KATA:
7 KYU - Enumerable Magic #20 - Cascading Subsets

Description:
Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]

As you can see, the lists are cascading; ie, they overlap, but never out of order.
*/

import (
	"fmt"
	"reflect"
)

func main() {

	arr := []int{3, 5, 8, 13}
	result1 := EachCons(arr, 1)
	expected1 := [][]int{{3}, {5}, {8}, {13}}

	if !reflect.DeepEqual(result1, expected1) {
		fmt.Printf("Test 1 failed. Expected=%v, Result=%v\n", expected1, result1)
	}

	result2 := EachCons(arr, 2)
	expected2 := [][]int{{3, 5}, {5, 8}, {8, 13}}

	if !reflect.DeepEqual(result2, expected2) {
		fmt.Printf("Test 2 failed. Expected=%v, Result=%v\n", expected2, result2)
	}

	fmt.Println("All tests done.")
}

func EachCons(arr []int, n int) (res [][]int) {
	for i := 0; i <= len(arr)-n; i++ {
		res = append(res, arr[i:i+n])
	}
	return res
}
