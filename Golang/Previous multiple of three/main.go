package main

/*
## KATA:
7 KYU - Previous multiple of three

## Description:
Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

Examples
1      => null
25     => null
36     => 36
1244   => 12
952406 => 9
*/

import (
	"fmt"
	"reflect"
)

func main() {
	n1 := 36
	expected1 := 36
	result1 := PrevMultOfThree(n1)

	if !reflect.DeepEqual(result1, expected1) {
		fmt.Printf("Test 1 failed. Expected=%v, Result=%v\n", expected1, result1)
	}

	fmt.Println("All tests passed.")
}

func PrevMultOfThree(n int) interface{} {
	if len(fmt.Sprint(n)) == 1 && n%3 != 0 {
		return nil
	}

	if n%3 == 0 {
		return n
	}

	return PrevMultOfThree(n / 10)
}
