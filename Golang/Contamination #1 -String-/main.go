package main

/*
## KATA:
	8 KYU - Contamination #1 -String-

## Description:
	An AI has infected a text with a character!!

	This text is now fully mutated to this character.

	If the text or the character are empty, return an empty string.
	There will never be a case when both are empty as nothing is going on!!

	Note: The character is a string of length 1 or an empty string.

	Example
	text before = "abc"
	character   = "z"
	text after  = "zzz"
*/

import (
	"fmt"
	"strings"
)

func main() {
	textBefore := "abc"
	character := "z"
	fmt.Println(Contamination(textBefore, character)) // the return should be "zzz"
}

func Contamination(text, char string) string {
	return strings.Repeat(char, len(text))
}

/*
Explanation:
- I use the Repeat function from the strings package to repeat the character as many times as the length of the text.
- The Repeat function takes two arguments, the first is the character to be repeated, and the second is the number of times the character is repeated.
- The number of times the character is repeated is the length of the text.
*/
