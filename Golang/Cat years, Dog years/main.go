package main

/*
## KATA:
	8 KYU - Cat years, Dog years

## Description:
	I have a cat and a dog.

	I got them at the same time as kitten/puppy. That was humanYears years ago.

	Return their respective ages now as [humanYears,catYears,dogYears]

## NOTES:
	humanYears >= 1
		humanYears are whole numbers only

	Cat Years
		15 cat years for first year
		+9 cat years for second year
		+4 cat years for each year after that

	Dog Years
		15 dog years for first year
		+9 dog years for second year
		+5 dog years for each year after that
*/

import (
	"fmt"
)

func main() {
	humanYear1 := 1
	humanYear2 := 2
	humanYear3 := 3

	fmt.Println(CalculateYears(humanYear1))
	fmt.Println(CalculateYears(humanYear2))
	fmt.Println(CalculateYears(humanYear3))
}

var dogYearMap = map[int]int{
	1: 15,
	2: 9,
	3: 5,
}

var catYearMap = map[int]int{
	1: 15,
	2: 9,
	3: 4,
}

func CalculateYears(years int) (result [3]int) {
	// dog year
	dogYear := 0
	for i := 1; i <= years; i++ {
		if i == 1 {
			dogYear += dogYearMap[1]
		}

		if i == 2 {
			dogYear += dogYearMap[2]
		}

		if i >= 3 {
			dogYear += dogYearMap[3]
		}
	}

	// cat year
	catYear := 0
	for i := 1; i <= years; i++ {
		if i == 1 {
			catYear += catYearMap[1]
		}

		if i == 2 {
			catYear += catYearMap[2]
		}

		if i >= 3 {
			catYear += catYearMap[3]
		}
	}

	return [3]int{years, catYear, dogYear}
}
