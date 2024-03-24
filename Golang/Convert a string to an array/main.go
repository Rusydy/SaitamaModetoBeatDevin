package main

/*
## KATA:
	8 KYU - Convert a string to an array

## Description:
	Write a function to split a string and convert it into an array of words. For example:
	"Robin Singh" should be converted to ["Robin", "Singh"].
*/

import (
	"fmt"
	"reflect"
	"strings"
)

func main() {
	test1 := "Robin Singh"
	expected1 := []string{"Robin", "Singh"}
	result1 := StringToArray(test1)

	if reflect.DeepEqual(result1, expected1) {
		fmt.Printf("Test 1 passed with result %v and expected %v\n", result1, expected1)
	}
}

func StringToArray(str string) []string {
	return strings.Fields(str)
}
