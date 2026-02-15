function firstChar(text) {
  // your code here
	let text1 = text.trim()
	if(text1 ==""){
		return ""
	}
	let result = ""
	result = text1[0];
	return result 
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
