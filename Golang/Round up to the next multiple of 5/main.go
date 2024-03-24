package main

/*
KATA:
7 KYU - Round up to the next multiple of 5

Description:
Given an integer as input, can you round it to the next (meaning, "higher") 5?
*/

import (
	"fmt"
	"reflect"
)

func main() {
	n1 := 0
	expected1 := 0
	result1 := RoundToNext5(n1)

	if !reflect.DeepEqual(result1, expected1) {
		fmt.Printf("Test 1 failed. Expected=%v, Result=%v\n", expected1, result1)
	}

	n2 := 2
	expected2 := 5
	result2 := RoundToNext5(n2)

	if !reflect.DeepEqual(result2, expected2) {
		fmt.Printf("Test 2 failed. Expected=%v, Result=%v\n", expected2, result2)
	}

	fmt.Println("All tests passed.")
}

func RoundToNext5(n int) int {
	return n + (5-n%5)%5
}
