package main

/*
KATA: 8 KYU - Wilson primesa
Description:
	Wilson primes satisfy the following condition. Let P represent a prime number.

	Then,
	```
	((P-1)! + 1) / (P * P)
	should give a whole number.
	```

	Your task is to create a function that returns true if the given number is a Wilson prime.
*/

import (
	"fmt"
)

func main() {
	num := 11
	fmt.Println(AmIWilson(num))
}

func AmIWilson(n int) bool {
	if n == 5 || n == 13 || n == 563 {
		return true
	}

	return false
}
