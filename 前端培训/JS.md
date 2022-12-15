**输出**
window.alert()
document.write()
element.innerHTML=""
console.log()

**变量定义**
var let(块作用) const(必须初始化)

**基本数据类型（值类型）**：String 字符串、Number 数值、BigInt 大型数值、Boolean 布尔值、Null 空值、Undefined 未定义、Symbol。
**引用数据类型（引用类型）**：Object 对象。
新变量类型：new 类型
清空：null 或 undefined
null 和 undefined 的值相等，但类型不等
typeof查询类型
转换为字符串String(x) x.toString()

**对象**
定义：var 对象名称={name：value，……}；
访问属性：对象名称.name  或者  对象["name"]
value可以是函数，注意访问时有无()的区别

**函数**
定义：function 函数名(参数){代码}

**事件**
onchange	 HTML 元素改变
onclick	     用户点击 HTML 元素
onmouseover	 鼠标指针移动到指定的元素上时发生
onmouseout	 用户从一个 HTML 元素上移开鼠标时发生
onkeydown	 用户按下键盘按键
onload	     浏览器已完成页面的加载
<元素 事件='JS'>

**字符串**
定义 索引
转义字符来使用引号\'
长度.length
字符串方法
charAt()	            返回指定索引位置的字符
charCodeAt()	        返回指定索引位置字符的 Unicode 值
concat()	            连接两个或多个字符串，返回连接后的字符串
fromCharCode()	        将 Unicode 转换为字符串
indexOf()	            返回字符串中检索指定字符第一次出现的位置
lastIndexOf()	        返回字符串中检索指定字符最后一次出现的位置
localeCompare()	        用本地特定的顺序来比较两个字符串
match()	                找到一个或多个正则表达式的匹配
replace()	            替换与正则表达式匹配的子串
search()	            检索与正则表达式相匹配的值
slice()	                提取字符串的片断，并在新的字符串中返回被提取的部分
split()	                把字符串分割为子字符串数组
substr()	            从起始索引号提取字符串中指定数目的字符
substring()	            提取字符串中两个指定的索引号之间的字符
toLocaleLowerCase()	    根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射
toLocaleUpperCase()	    根据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射
toLowerCase()	        把字符串转换为小写
toString()	            返回字符串对象值
toUpperCase()	        把字符串转换为大写
trim()	                移除字符串首尾空白
valueOf()	            返回某个字符串对象的原始值

**运算**
+	加法    字符串+数字=字符串
-	减法
*	乘法
/	除法
%	取模（余数）
++	自增    x=++y>>x=6,y=6   x=y++>>x=5,y=6
--	自减
=	x=y
+=	x+=y <=> x=x+y
-=	x-=y <=> x=x-y
*=	x*=y <=> x=x*y
/=	x/=y <=> x=x/y
%=	x%=y <=> x=x%y

if语句
if (条件1){代码}
else if (条件2){代码}
else{代码}

switch语句
switch(n)
{
    case 1:执行代码块 1
        break;
    case 2:执行代码块 2
        break;
    default:
        与 case 1 和 case 2 不同时执行的代码
}

for语句
for (语句1;语句2;语句3)   也可以是：属性名 in 对象
{
    循环体;
}
for前初始化则语句1可省
循环体中有相应代码则语句3可省

while/do while
while (条件)
{
    需要执行的代码
}
do
{
    需要执行的代码
}
while (条件);

break/continue

**正则表达式**
主要用于search() 和 replace()  也可以直接用字符串
格式：/正则表达式主体/修饰符
修饰符
i	执行对大小写不敏感的匹配。
g	执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
m	执行多行匹配。
正则表达式
[]用于查找某个范围内的字符：
[abc]	查找方括号之间的任何字符。
[0-9]	查找任何从 0 至 9 的数字。
(x|y)	查找任何以 | 分隔的选项。
元字符是拥有特殊含义的字符：
元字符
. 匹配除换行符以外的任意字符
\w  匹配字母或数字或下划线或汉字 等价于 '[^A-Za-z0-9_]'。
\s  匹配任意的空白符
\d  匹配数字
\b  匹配单词的开始或结束
^   匹配字符串的开始
$   匹配字符串的结束
\uxxxx	查找以十六进制数 xxxx 规定的 Unicode 字符。
\w  能不能匹配汉字要视你的操作系统和你的应用环境而定
量词
n+	匹配任何包含至少一个 n 的字符串。
n*	匹配任何包含零个或多个 n 的字符串。
n?	匹配任何包含零个或一个 n 的字符串。
正则表达式.test() 检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回 true，否则返回 false。
正则表达式.exec() 检索字符串中的正则表达式的匹配。该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。
/^\w+$/.test(str);  数字、字母、下划线

----------------------------------------------------------------------------------------------------------------------------------------
错误
try throw catch finally
try 语句允许我们定义在执行时进行错误测试的代码块。
throw 语句允许我们创建或抛出异常。
catch 语句允许我们定义当 try 代码块发生错误时，所执行的代码块。
finally 语句不论之前的 try 和 catch 中是否产生异常都会执行该代码块。

try {
    ...    //异常的抛出
} catch(e) {
    ...    //异常的捕获与处理
} finally {
    ...    //结束处理
}
例如：
function myFunction() {
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try { 
        if(x == "")  throw "值为空";
        if(isNaN(x)) throw "不是数字";
        x = Number(x);
        if(x < 5)    throw "太小";
        if(x > 10)   throw "太大";
    }
    catch(err) {
        message.innerHTML = "错误: " + err;
    }
}

声明提升 x=5;var x;
严格模式 "use strict"

浮点型数据使用注意事项
0.1+0.2=0.30000000000000004

表单
表单验证
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("需要输入名字。");
        return false;
    }
}
<form name="myForm" action="demo_form.php" onsubmit="return validateForm()" method="post">
名字: <input type="text" name="fname">
<input type="submit" value="提交">
</form>
验证输入的数字

验证 API
checkValidity()	如果 input 元素中的数据是合法的返回 true，否则返回 false。
setCustomValidity()	设置 input 元素的 validationMessage 属性，用于自定义错误提示信息的方法。

表单自动验证:required 属性
checkValidity() 方法
<input id="id1" type="number" min="100" max="300" required>
<button onclick="myFunction()">验证</button>
<p id="demo"></p>
<script>
function myFunction() {
    var inpObj = document.getElementById("id1");
    if (inpObj.checkValidity() == false) {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }
}
</script>

Validity 属性
属性	         描述
customError	     设置为 true, 如果设置了自定义的 validity 信息。
patternMismatch	 设置为 true, 如果元素的值不匹配它的模式属性。
rangeOverflow	 设置为 true, 如果元素的值大于设置的最大值。
rangeUnderflow	 设置为 true, 如果元素的值小于它的最小值。
stepMismatch	 设置为 true, 如果元素的值不是按照规定的 step 属性设置。
tooLong	         设置为 true, 如果元素的值超过了 maxLength 属性设置的长度。
typeMismatch	 设置为 true, 如果元素的值不是预期相匹配的类型。
valueMissing	 设置为 true，如果元素 (required 属性) 没有值。
valid	         设置为 true，如果元素的值是合法的。

setCustomValidity()	使用方式：
<p>输入数字并点击验证按钮：</p>
<input type="number" id="nu" max="300" min="100" required>
<button type="button" onclick="myFunction()">点我</button>
<p>如果输入数字100-300以外，会提示错误信息。</p>
<p id="demo"></p>
<script>
setCustomValidity('') 
setCustomValidity(null) 
setCustomValidity(undefined)
function myFunction() {
  var x = document.getElementById("nu");
  x.setCustomValidity("");//使用前先取消自定义，否则下次点击checkValidity总返false
  if (x.checkValidity() == false) {
    x.setCustomValidity("错误");
    document.getElementById("demo").innerHTML = x.validationMessage;
  }
  else {
    x.setCustomValidity("正确");
    document.getElementById("demo").innerHTML = x.validationMessage;
  }
}
</script>

this 关键字
在方法中，this 表示该方法所属的对象。
如果单独使用，this 表示全局对象。
在函数中，this 表示全局对象。
在函数中，在严格模式下，this 是未定义的(undefined)。
在事件中，this 表示接收事件的元素。
类似 call() 和 apply() 方法可以将 this 引用到任何对象。
call()/apply():
call(object,argument1,argument2,...)
apply(object,[array])
<script>
var person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person2 = {
  firstName:"John",
  lastName: "Doe",
}
var x = person1.fullName.call(person2); 
document.getElementById("demo").innerHTML = x; 
</script>

JSON
JSON 实例
{"sites":[
    {"name":"Runoob", "url":"www.runoob.com"}, 
    {"name":"Google", "url":"www.google.com"},
    {"name":"Taobao", "url":"www.taobao.com"}
]}
JavaScript使用JSON
var text = '{ "sites" : [' +
    '{ "name":"Runoob" , "url":"www.runoob.com" },' +
    '{ "name":"Google" , "url":"www.google.com" },' +
    '{ "name":"Taobao" , "url":"www.taobao.com" } ]}';    
obj = JSON.parse(text);

JSON.parse()	用于将一个 JSON 字符串转换为 JavaScript 对象。
JSON.stringify()	用于将 JavaScript 值转换为 JSON 字符串。

javascript:void
void 是 JavaScript 中非常重要的关键字，该操作符指定要计算一个表达式但是不返回值。
void func()
javascript:void func()

异步编程
回调函数就是一个函数，它是在我们启动一个异步任务的时候就告诉它：等你完成了这个任务之后要干什么。
setTimeout 就是一个消耗时间较长（3 秒）的过程，它的第一个参数是个回调函数，第二个参数是毫秒数。

Promise：优雅地书写复杂的异步任务。
构造 Promise
现在我们新建一个 Promise 对象：
new Promise(function (resolve, reject) {
    // 要做的事情...
});

比较：
(I)
setTimeout(function () {
    console.log("First");
    setTimeout(function () {
        console.log("Second");
        setTimeout(function () {
            console.log("Third");
        }, 3000);
    }, 4000);
}, 1000);
(II)
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("First");
        resolve();
    }, 1000);
}).then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Second");
            resolve();
        }, 4000);
    });
}).then(function () {
    setTimeout(function () {
        console.log("Third");
    }, 3000);
});
其中调用 resolve 代表一切正常，reject 是出现异常时所调用的
Promise 类有 .then() .catch() 和 .finally() 三个方法
异步函数 async function 中可以使用 await 指令
[返回值]=await 表达式
async function asyncFunc() {
    await print(1000, "First");
    await print(4000, "Second");
    await print(3000, "Third");
}
asyncFunc();

自调用函数
(function() {
    function body...
}());
或
(function() {
    function body...
})();
或
+function() {
    function body...
}();

箭头函数
(参数1, 参数2, …, 参数N) => { 函数声明 }

闭包
闭包是一种保护私有变量的机制，在函数执行时形成私有的作用域，保护里面的私有变量不受外界干扰。
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})(); 
add();
add();
add();

类
class ClassName {
  constructor(argument1,argument2) { this.name1=argument1;this.name2=argument2; }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
类的继承
// 基类
class father {
    // 函数
};
//派生类
class son extends father {
    // 函数
};
super(argument) 方法引用父类的构造方法

getter和setter获取与设置属性
class ClassName {
  constructor(name) {
    this._name = name;
  }
  set name(x) {
    this.name = x;
  }
  get name() {
    return this._name;
  }
}

静态方法 类中定义类中调用
ClassName.methodName 调用静态方法
static method(){}


