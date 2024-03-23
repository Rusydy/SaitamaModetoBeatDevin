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
)

func main() {
	textBefore := "abc"
	character := "z"
	fmt.Println(Contamination(textBefore, character)) // the return should be "zzz"
}

func Contamination(text, char string) string {
	if len(text) == 0 {
		return ""
	}

	return char + Contamination(text[1:], char)
}
