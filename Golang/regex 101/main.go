// Have the function StringChallenge(strArr) take the strArr parameter being passed, which will only contain a single element, and return the string true if it is a valid number that contains only digits with properly placed decimals and commas, otherwise return the string false. For example: if strArr is ["1,093,222.04"] then your program should return the string true, but if the input were ["1,093,22.04"] then your program should return the string false. The input may contain characters other than digits.
// Examples
// Input: []string {"0.232567"}
// Output: true
// Input: []string {"2,567.00.2"}
// Output: false

package main

import (
	"fmt"
	"reflect"
	"regexp"
)

func main() {

	input1 := []string{"0.232567"}
	expectedOutput1 := "true"
	output1 := StringChallenge(input1)

	if !reflect.DeepEqual(output1, expectedOutput1) {
		fmt.Printf("Test 1 failed. Expected %v but received %v\n", expectedOutput1, output1)
	} else {
		fmt.Println("Test 1 succeeded")
	}

	input2 := []string{"2,567.00.2"}
	expectedOutput2 := "false"
	output2 := StringChallenge(input2)

	if !reflect.DeepEqual(output2, expectedOutput2) {
		fmt.Printf("Test 2 failed. Expected %v but received %v\n", expectedOutput2, output2)
	} else {
		fmt.Println("Test 2 succeeded")
	}
}

func StringChallenge(strArr []string) string {
	validNumber := regexp.MustCompile(`^\d{1,3}(,\d{3})*(\.\d+)?$`)
	if validNumber.MatchString(strArr[0]) {
		return "true"
	}

	return "false"
}
