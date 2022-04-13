//1. If there are errors when the “Validate” button is clicked, then error messages (for all errors)
//with a class of “errors” appears in the div preceding the form.
//--Create error message function with these parameters targeting div

const errorMessagePlacement = (e) => {
    let placement = document.getElementsByClassName('.errors');
    for (placement of placements){
        document.target.appendChild
    }
}

//2. Errors are displayed as an unordered list in red text.
//--Create unorderedList function for errors
//--Style all errors and error messages in CSS

const addUnorderedListOfErrors = () => {
    let 
}



//3. Given  there are errors on the form when “Validate” is clicked, nothing happens.
//--Create nothingHappens function with for loop and if statement 



//4. If there are no errors when “Validate” is clicked, the form is submitted.
//--Create successfulSubmit function with for loop and if statement



//5. Given multiple forms on a page, when the “Validate” button is clicked for any form, only that
//form runs through validation.
//--Create validateButton function that targets current form only



//6. If a text field has a class of “required”, and nothing is entered or only white space is
//entered, when the form runs through validation an error message appears in the correct location
//that says: "Required fields must have a value that is not empty or whitespace”. 
//--Create error message function with these parameters targeting div



//7. If a text field does not have a class of “required”, and nothing is entered, when the form’s
//validation runs, no error message appears.



//8. If an input field has a class of “numeric” and non-numeric characters are entered, when
//validation runs, an error message appears in the correct location that says: "Numeric fields must
//be a series of numbers".
//--Create numericOnly function that only allows numeric characters
//--Include an if statement in which non-numeric characters return error message



//9. If a text field has a class of “required_size” with a minlength attribute and entered text is
//less than minlength, then an error message is displayed in the correct location that says:
//"Required_size field lengths must exactly match the minlength attribute of that field”.



//10. If an input field has a class of “username” and non-alphanumeric characters are used, when the
//form’s validation is run, an error message appears in the correct location that says: "Username
//fields must contain only alphanumeric characters".
//--Create userName function that only allows alphanumeric characters
//--Include an if statement in which non-alphanumeric characters return an error message



//11. Given an input field with a class of “username”, if text input is fewer than eight characters,
//when validation is run, an error message appears in the correct location that says: "Username
//fields must contain at least 8 characters”.
//--Create usernameRequirement function that requires >= 8 parameters
//--Include if statement in which < 8 characters returns error message



//12. If an input field with a class of “date” is given an entry that does not match XX/XX/XXXX
//format, then when validation is run an error message appears in the correct location that says:
//"Date fields must match the format of XX/XX/XXXX”.
//--Create dateFormat function 



//13. If an input field with a class of “phone” is given an entry that does not match XXX-XXX-XXXX
//format, then when validation is run an error message appears in the correct location that says:
//"Phone fields must match the format of XXX-XXX-XXXX". 



//14. Given an input of type "text" has a class of "password", and an entry that does not contain
//one of: (uppercase letter, lowercase letter, number, special character) has been entered into this
//input, when this form's validation runs, then an error appears in the correct location, and the
//error text says: "Password fields must contain one or more of each of the following types:
//uppercase letters, lowercase letters, numbers, special characters".



//15. Given an input of type "text" has a class of "alphabetic", and given a non-alphabetic character
//has been entered into this input, when this form's validation runs, then an error appears in the
//correct location, and the error text says "Alphabetic fields must be a series of alphabetic
//characters."



//14. Given an input of type "text" has multiple classes, when this form's validation runs, then all
//pertinent validation for this input is run:
//For example, if an input has alphabetic and required_size, then both the alphabetic validation and
//required_size validation would need to run.
