const strong = document.getElementsByTagName("strong");
function highlight() {
    //Write your code here
	for(let str of strong){
		str.style.color = "green"
	}
}


function return_normal() {
    //Write your code here
	for(let str of strong){
		str.style.color = "black"
	}
    
}
