package main

import (
	"fmt"
	"reflect"
	"unicode"
)

/*
Have the function StringChallenge(str) take the str parameter being passed and return a new string where every character, aside from the space character, is replaced with its corresponding decimal character code. For example: if str is "dog" then your program should return the string 100111103 because d = 100, o = 111, g = 103.
Examples
Input: "hello world"
Output: 104101108108111 119111114108100
Input: "abc **"
Output: 979899 4242

challenge name: convert string to number
*/
func main() {
	input1 := "hello world"
	output1 := StringChallenge(input1)
	outputExpected1 := "104101108108111 119111114108100"

	if !reflect.DeepEqual(output1, outputExpected1) {
		fmt.Printf("Test 1 failed, expected %v but received %v\n", outputExpected1, output1)
	} else {
		fmt.Println("Test 1 succeeded")
	}

	input2 := "abc **"
	output2 := StringChallenge(input2)
	outputExpected2 := "979899 4242"

	if !reflect.DeepEqual(output2, outputExpected2) {
		fmt.Printf("Test 2 failed, expected %v but received %v\n", outputExpected2, output2)
	} else {
		fmt.Println("Test 2 succeeded")
	}
}

func StringChallenge(str string) string {
	var result string
	for _, char := range str {
		if unicode.IsSpace(char) {
			result += " "
		} else {
			result += fmt.Sprintf("%d", char)
		}
	}
	return result
}
