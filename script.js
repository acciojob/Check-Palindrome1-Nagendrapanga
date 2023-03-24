// complete the given function

function palindrome(str){
	let start=0,end=str.length-1;
	str = str.toLowerCase();
	while(start<=end){
		if(str.charAt(start)===str.chartAt(end)){
			start++;
			end--;
		}
		else{
			return false;
		}
	}
	return true;

}
module.exports = palindrome
