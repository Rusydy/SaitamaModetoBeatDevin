package main

/*
## KATA:
7 KYU - Shortest Word

## Description:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

import (
	"fmt"
	"reflect"
	"strings"
)

func main() {
	n1 := "bitcoin take over the world maybe who knows perhaps"
	expected1 := 3
	result1 := FindShort(n1)

	if !reflect.DeepEqual(result1, expected1) {
		fmt.Printf("Test 1 failed. Expected=%v, Result=%v\n", expected1, result1)
	}

	fmt.Println("All tests passed.")
}

func FindShort(s string) int {
	shortest := len(s)
	for _, word := range strings.Split(s, " ") {
		if len(word) < shortest {
			shortest = len(word)
		}
	}
	return shortest
}
