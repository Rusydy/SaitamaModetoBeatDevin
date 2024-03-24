package main

/*
## KATA:
  7 KYU - Recursion 101

## Description:
	In this Kata, you will be given two positive integers a and b and your task will be to apply the following operations:
		i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);
		ii) If a ≥ 2*b, set a = a - 2*b, and repeat step (i). Otherwise, go to step (iii);
		iii) If b ≥ 2*a, set b = b - 2*a, and repeat step (i). Otherwise, return [a,b].
*/

import (
	"fmt"
	"reflect"
)

func main() {
	a1 := 6
	b1 := 19
	expected1 := []int{6, 7}
	result1 := Solve(a1, b1)

	if !reflect.DeepEqual(result1, expected1) {
		fmt.Printf("Failed: expected %v, got %v\n", expected1, result1)
	}

	fmt.Println("All Test PASSED!")
}

func Solve(a, b int) []int {
	if a == 0 || b == 0 {
		return []int{a, b}
	}

	if a >= 2*b {
		a = a - 2*b
		return Solve(a, b)
	}

	if b >= 2*a {
		b = b - 2*a
		return Solve(a, b)
	}

	return []int{a, b}
}
