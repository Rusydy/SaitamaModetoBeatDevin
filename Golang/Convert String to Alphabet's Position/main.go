package main

import (
	"fmt"
	"strings"
)

/*
Have the function StringChallenge(str) take the str parameter and encode the message according to the following rule: encode every letter into its corresponding numbered position in the alphabet. Symbols and spaces will also be used in the input. For example: if str is "af5c a#!" then your program should return 1653 1#!.
Examples
Input: "hello 45"
Output: 85121215 45
Input: "jaj-a"
Output: 10110-1

*/

func main() {

	input := "hello 45"
	outputExpected := "85121215 45"
	outputActual := StringChallenge(input)

	if outputExpected != outputActual {
		fmt.Println("FAILED, expected:", outputExpected, "actual:", outputActual)
	} else {
		fmt.Println("PASSED")
	}

	input2 := "jaj-a"
	outputExpected2 := "10110-1"
	outputActual2 := StringChallenge(input2)

	if outputExpected2 != outputActual2 {
		fmt.Println("FAILED, expected:", outputExpected2, "actual:", outputActual2)
	} else {
		fmt.Println("PASSED")
	}
}

func StringChallenge(str string) string {
	var result strings.Builder
	for _, char := range str {
		if strings.Contains("abcdefghijklmnopqrstuvwxyz", strings.ToLower(string(char))) {
			result.WriteString(fmt.Sprint(getPosition(string(char))))
		} else {
			result.WriteString(string(char))
		}
	}
	return result.String()
}

func getPosition(char string) int {
	alphabet := "abcdefghijklmnopqrstuvwxyz"
	for i, c := range alphabet {
		if string(c) == strings.ToLower(char) {
			return i + 1
		}
	}
	return 0
}
