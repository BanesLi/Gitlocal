//回调函数简单运用

/* function call(){
    console.log('hello! ');
}

function callBack(){
    console.log('我是回调函数！')
}
call(callBack()) */

var arr =[2,4,6,8,10];

function sum(arr,callBack){
    for(var i=0; i<arr.length; i++){
        var item = arr[i];
        callBack(item)
    }
}

sum(arr,condition);
sum(arr,condition1);

function condition(item){
    if(item>2){
        console.log(item)
    }
}
function condition1(item){
    if(item>8){
        console.log(item)
    }
}