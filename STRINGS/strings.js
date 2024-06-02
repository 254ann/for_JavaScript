    // // QUESTION 1
    // 1.valueOf()
    // The valueOf() method of String returns the primitive value of a String object as a string data type. 

    // 2.slice()
    // You can extract a substring from a string using the slice() method.
    // syntax:
    // slice(indexStart)
    // slice(indexStart, indexEnd)

    // 3.split()
    // The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
    // syntax: split(separator)
    // split(separator, limit)
    // the index at which to start extracting
    // the index at which to stop extracting. This is exclusive, meaning that the character at this index is not included in the extracted substring.

    // 4.replace()
    // You can replace one substring inside a string with another substring using the replace() method.
    // provide two parameters — the string we want to replace, and the string we want to replace it with.
    // If you want to change all occurrences, you can use replaceAll()

    // 5.repeat()
    // The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.

    // 6.sub()
    // The sub() method of String values creates a string that embeds this string in a <sub> element (<sub>str</sub>), which causes this string to be displayed as subscript.
    // syntax:
    // sub()
    // 7.sup()
    // The sup() method of String values creates a string that embeds this string in a <sup> element (<sup>str</sup>), which causes this string to be displayed as superscript.
    // syntax:
    // sup()

    // QUESTION 2
let myString = prompt("enter a string of your choice:")
function palindrome(str) {
    let processedString = str.split("").reverse().join("");
    if(myString==processedString){
        console.log(`${processedString}, is a pallindrome`);
    }
    else{
        console.log(`${processedString}, is not a pallindrome`);
    }


}
   
console.log(palindrome(myString));
