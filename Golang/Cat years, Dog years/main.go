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
	switch years {
	case 1:
		result = [3]int{1, catYearMap[1], dogYearMap[1]}
	case 2:
		catYears := catYearMap[1] + catYearMap[2]
		dogYears := dogYearMap[1] + dogYearMap[2]

		result = [3]int{2, catYears, dogYears}
	default:
		catYears := catYearMap[1] + catYearMap[2] + (catYearMap[3] * (years - 2))
		dogYears := dogYearMap[1] + dogYearMap[2] + (dogYearMap[3] * (years - 2))

		result = [3]int{years, catYears, dogYears}
	}
	return result
}
