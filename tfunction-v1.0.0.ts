/*｜by Akawatav｜tfunction｜v1.0.0｜関数追加するだけ｜*/
const getRandom = function (min:number, max:number) {
  return (max > min) ? Math.floor( Math.random() * (max + 1 - min)) + min : NaN
}
const division = function(number1:number,number2:number) {
Math.floor(number1 / number2)
}
const percent = (num1:number,num2:number) => num1 / 100 * num2
const get = {
    byid: (name:String) => document.getElementById(name),
    byclass: (name:String) => document.getElementsByClassName(name),
    bytag: (name:String) => document.getElementsByTagName(name),
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    hour: new Date().getHours(),
    minutes: new Date().getMinutes(),
    sec: new Date().getSeconds(),
    mllsec: new Date().getMilliseconds(),
    day: ['日','月','火','水','木','金','土'][new Date().getDay()],
    pi: 3.1415926535897932384626433832795028841971693993,
    triangle: (height:number,base:number) => height * base / 2,
    square: (height:number,width:number) => height * width,
    circle: (radius:number) => (radius ** 2) * get.pi,
    queryall: (name:String) => document.querySelectorAll(name),
    query: (name:String) => document.querySelector(name)
}
const query = {
    single: (name:String) => document.querySelector(name),
    all: (name:String) => document.querySelectorAll(name)
}
const log = (log:any) => console.log(log)
const root = {
    square: (num:number):number => num ** 0.5,
    cube: (num:number):number => num ** (1/3)
}
const portion = {
    integer: (num:number):number => Math.trunc(num),
    decimal: (num:number):number => (num > -1) ? parseFloat('0.' + ('' + num).split('.')[1]) : parseFloat('-0.' + ('' + num).split('.')[1])
}
const jfunction = {
    version:"v1.0.5",
    function:[
      "jfunction",
      "get",
      "getRandom",
      "log",
      "division",
      "query",
      "root",
      "portion",
      "percent",
      "$",
      "wait",
      "changesgin",
      "Absolute",
      "minus",
      "factorial",
      "parse",
      "pass",
      "customselector",
      "repeat",
      "define"
      ],
    number:19
}
const $ = jfunction
 const wait = function (milliseconds:number) {
   let start = new Date().getTime()
   let end = 0
   while ( (end-start) < milliseconds) {
     end = new Date().getTime()
   }
   return this
 }
const changesgin = (num:number) => num * -1
const Absolute = (num:number) => (0>num) ? num * -1 : num
const minus = (num:number) =>  (0>num) ? num : num * -1
const factorial = {
 none: (n:number) => (n === 0) ? 1 : n * factorial.none(n-1),
 double : (n:number) => (2 ** (n/2)) * factorial.none(n/2)
}
const parse = (str:String) => (str == 'true') ? true : false
const pass = function(){return this}
const customselector = (value:String) => (value2:String) => {
  switch (value2.toLowerCase()){
    case "id":
    case "byid":
      return get.byid(value)
      break
      
    case "class":
    case "byclass":
      return get.byclass(value)
      break
      
    case "tag":
    case "bytag":
      return get.bytag(value)
      break
      
    default:
      return null
      break
  }
}
const repeat = function (callback:function,num:number) {
  if(typeof num == "number") {
    if(num > 0) {
      for (let i = 0; i < num; i++) {
        callback()
      }
    }
  }  
  return this
}
const define = (name:String, value:any) => {
  Object.defineProperty(window, name, {
    value: value,
    writable: false
  })
}
wait().done = (callback:function) => callback()
const gettype = obj => {
  if (typeof obj === "undefined") {
    return "undefined"
  } else if (obj === null) {
    return "null"
  } else {
    const className = Object.prototype.toString.call(obj)
    const matches = className.match(/^[objects(.*)]$/)
    if (matches.length > 0) {
      return matches[1]
    } else {
      return className
    }
  }
}