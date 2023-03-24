// complete the given function

function palindrome(str){
	var start=0
	var end=str.length-1;
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
