


function check(a){
    if(a!=4 && a!=0){
        do{
            var d = a%10;
            console.log("d",d);
            var d1 = a%1000;
            console.log("d1",d1);
            a= Math.floor(a/10);
            console.log("a:",a);
        }while((d===1 || d===4) && a!==4 && d1!==444);
        if(a!==0 || d!==0){
            return false;
        }
        return true;
    }else{
        return false;
    }
}

function myFunction(){
    var b = document.getElementById('number').value;
    var test=check(b);
    document.getElementById('demo').innerHTML = b + ":" + test;
}



