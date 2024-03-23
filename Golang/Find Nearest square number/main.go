package main

/*
## KATA:
	8 KYU - Find Nearest square number

## Description:
	Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

	For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

	If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.
*/

import (
	"fmt"
	"math"
)

func main() {
	num1 := 1   // nearest square number is 1
	num2 := 2   // nearest square number is 1
	num3 := 10  // nearest square number is 9
	num4 := 111 // nearest square number is 121

	fmt.Println(NearestSq(num1)) // Output: 1
	fmt.Println(NearestSq(num2)) // Output: 1
	fmt.Println(NearestSq(num3)) // Output: 9
	fmt.Println(NearestSq(num4)) // Output: 121
}

func NearestSq(n int) int {
	nextRoot := math.Ceil(math.Sqrt(float64(n)))
	prevRoot := math.Floor(math.Sqrt(float64(n)))

	nextSquare := int(nextRoot) * int(nextRoot)
	prevSquare := int(prevRoot) * int(prevRoot)

	if (nextSquare - n) < (n - prevSquare) {
		return nextSquare
	} else {
		return prevSquare
	}
}
