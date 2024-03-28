package main

import (
	"fmt"
	"reflect"
	"strings"
	"unicode"
)

/*
Have the function StringChallenge(str) take the str parameter being passed and determine if it passes as a valid password that follows the list of constraints:

1. It must have a capital letter.
2. It must contain at least one number.
3. It must contain a punctuation mark or mathematical symbol.
4. It cannot have the word "password" in the string.
5. It must be longer than 7 characters and shorter than 31 characters.

If all the above constraints are met within the string, the your program should return the string true, otherwise your program should return the string false. For example: if str is "apple!M7" then your program should return "true".
Examples
Input: "passWord123!!!!"
Output: false
Input: "turkey90AAA="
Output: true
*/

func main() {
	input1 := "passWord123!!!!"
	outputExpected1 := "false"
	output1 := StringChallenge(input1)

	if !reflect.DeepEqual(output1, outputExpected1) {
		fmt.Printf("Test 1 failed, expected %v but received %v\n", outputExpected1, output1)
	} else {
		fmt.Println("Test 1 succeeded")
	}

	input2 := "turkey90AAA="
	outputExpected2 := "true"
	output2 := StringChallenge(input2)

	if !reflect.DeepEqual(output2, outputExpected2) {
		fmt.Printf("Test 2 failed, expected %v but received %v\n", outputExpected2, output2)
	} else {
		fmt.Println("Test 2 succeeded")
	}
}

func StringChallenge(str string) string {
	if len(str) < 8 || len(str) > 30 {
		return "false"
	}

	if strings.Contains(strings.ToLower(str), "password") {
		return "false"
	}

	hasCapitalLetter := false
	hasNumber := false
	hasPunctuation := false

	for _, c := range str {
		if unicode.IsUpper(c) {
			hasCapitalLetter = true
		} else if unicode.IsNumber(c) {
			hasNumber = true
		} else if unicode.IsPunct(c) || unicode.IsSymbol(c) {
			hasPunctuation = true
		}
	}

	if hasCapitalLetter && hasNumber && hasPunctuation {
		return "true"
	}

	return "false"
}
