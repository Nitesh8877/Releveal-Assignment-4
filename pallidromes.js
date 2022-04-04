

function Palindrome(nums){

    var n=nums;
    var rev=0;
    while(n!=0){
        let rem=parseInt(n%10);
        rev=rev*10+rem;
        n=parseInt(n/10);
    }

    if(rev==nums){
        console.log(nums+" This Number Is Palindrome");
    }else{
        console.log(nums+" This Number is Not Palindrome");
    }
}


for(let i=1;i<=50;i++){
    if(Palindrome(i)==1){
        console.log(i);
    }
}