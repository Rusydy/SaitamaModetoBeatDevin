package main

/*
Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
  [
		[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ],
	]

output:
    '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'

Array's length > 2.

More details here: https://en.wikipedia.org/wiki/Comma-separated_values

Note: you shouldn't escape the \n, it should work as a new line.
*/

import (
	"fmt"
	"reflect"
)

func main() {

	arr := [][]int{
		{0, 1, 2, 3, 45},
		{10, 11, 12, 13, 14},
		{20, 21, 22, 23, 24},
		{30, 31, 32, 33, 34},
	}
	result1 := ToCsvText(arr)
	expected1 := "0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34"

	if !reflect.DeepEqual(result1, expected1) {
		fmt.Printf("Test 1 failed. Expected=%v Result=%v\n", expected1, result1)
	}

	fmt.Println("All tests done.")
}

func ToCsvText(array [][]int) (result string) {
	for i := 0; i < len(array); i++ {
		for j := 0; j < len(array[i]); j++ {
			if j == len(array[i])-1 {
				result += fmt.Sprintf("%d\n", array[i][j])
				continue
			}

			result += fmt.Sprintf("%d,", array[i][j])
		}
	}

	return result[:len(result)-1]
}
