//this 指向问题

//1.window
function sayHi(){
    console.log(this)
    console.log('Hello!'+ this.name)
}
// sayHi()  window

//2.通过对象方法调用，this指向父级
var whh = {
    fname: '王',
    lname:'花花',
    fullName: function(){
        console.log(this)   // ===>function
      console.log(this.fname + this.lname)  
    }
}

console.log(whh.fullName())

//3.构造函数  
function Fullname(name){   
    console.log('构造函数===>'+ this)
    console.log('Hi,'+ name + '我是'+this.name)
}
var lsd = {
    name: '李大师'
}

lsd.full_name = Fullname;

console.log(lsd.full_name('王大锤'))

/* Fullname.call(lsd)
Fullname.apply(lsd) */

