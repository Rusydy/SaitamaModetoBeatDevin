package main

import (
	"fmt"
	"reflect"
	"unicode"
)

/*
Have the function StringChallenge(strArr) read the array of strings stored in strArr, which will contain two elements, the first will be a positive decimal number and the second element will be a binary number. Your goal is to determine how many digits in the binary number need to be changed to represent the decimal number correctly (either 0 change to 1 or vice versa). For example: if strArr is ["56", "011000"] then your program should return 1 because only 1 digit needs to change in the binary number (the first zero needs to become a 1) to correctly represent 56 in binary.
Examples
Input: []string {"5624", "0010111111001"}
Output: 2
Input: []string {"44", "111111"}
Output: 3

Challenge name: Convert Binary Number
*/
func main() {
	input1 := []string{"56", "011000"}
	output1 := StringChallenge(input1)
	outputExpected1 := "1"

	if !reflect.DeepEqual(output1, outputExpected1) {
		fmt.Printf("Test 1 failed, expected %v but received %v\n", outputExpected1, output1)
	} else {
		fmt.Println("Test 1 succeeded")
	}

	input2 := []string{"44", "111111"}
	output2 := StringChallenge(input2)
	outputExpected2 := "3"

	if !reflect.DeepEqual(output2, outputExpected2) {
		fmt.Printf("Test 2 failed, expected %v but received %v\n", outputExpected2, output2)
	} else {
		fmt.Println("Test 2 succeeded")
	}
}

func StringChallenge(strArr []string) string {
	decimal, binary := strArr[0], strArr[1]
	decimalInt := toInt(decimal)
	decimalBinary := fmt.Sprintf("%b", decimalInt)
	count := 0

	for i := 0; i < len(decimalBinary); i++ {
		if decimalBinary[i] != binary[i] {
			count++
		}
	}

	return fmt.Sprintf("%d", count)
}

func toInt(s string) int {
	negative := false
	if s[0] == '-' {
		negative = true
		s = s[1:]
	}

	result := 0
	for _, c := range s {
		if !unicode.IsDigit(c) {
			continue
		}
		result = result*10 + int(c-'0')
	}

	if negative {
		result = -result
	}

	return result
}
