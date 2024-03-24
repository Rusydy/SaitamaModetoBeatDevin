package main

/*
## KATA:
	8 KYU - Expressions Matter

## Description:
	Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, () In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
*/

import (
	"fmt"
	"sort"
)

func main() {
	testOne := []int{1, 2, 3}

	fmt.Println(ExpressionMatter(testOne[0], testOne[1], testOne[2]))

	testTwo := []int{1, 1, 1}

	fmt.Println(ExpressionMatter(testTwo[0], testTwo[1], testTwo[2]))

	testThree := []int{1, 6, 1}

	fmt.Println(ExpressionMatter(testThree[0], testThree[1], testThree[2]))
}

func ExpressionMatter(a int, b int, c int) int {
	list := []int{a * (b + c), a * b * c, a + b + c, (a + b) * c}
	sort.Ints(list)

	return list[len(list)-1]
}
