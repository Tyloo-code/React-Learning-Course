# 一、React基础

## 一、 React 简介

### 1. react 是什么？

React用于构建用户界面的JS库。是一个将数据渲染为HTML视图的开源JS库。

### 2. 为什么学？

1.原生JS操作DOM繁琐，效率低
2.使用JS直接操作DOM,浏览器会进行大量的重绘重排
3.原生JS没有组件化编码方案，代码复用低

### 3. react 的特点

1. 声明式编码
2. 组件化编码
3. React Native 编写原生应用
4. 高效（优秀的Diffing算法）

### 4. react 高效的原因

1. 采用组件化模式、声明式编码，提高开发效率及组件复用率。
2. 在React Native中可以使用React语法进行移动端开发。
3. 使用虚拟DOM+优秀的Diffing 算法，尽量减少与真实DOM的交互。

## 二、 React入门

### 1. react 基础入门

1. 先倒入三个包：
【先引入react.development.js，后引入react-dom.development.js】

```js
react.development.js      React核心库。
react-dom.development.js     提供操作DOM的react扩展库。
babel.min.js    解析JSX语法代码转为JS代码的库。
```

2. 创建一个容器

3. 创建虚拟DOM，渲染到容器中

```html
<body>
    <!-- 准备好容器 -->
    <div id="test">

    </div>
</body>
<!-- 引入依赖 ,引入的时候，必须就按照这个步骤-->
<script src="../js/react.development.js" type="text/javascript"></script>
<script src="../js/react-dom.development.js" type="text/javascript"></script>

<script src="../js/babel.min.js" type="text/javascript"></script>

<!--这里使用了babel用来解析jsx语法-->
<script type="text/babel">
        // 1.创建虚拟DOM
        const VDOM = <h1>Hello</h1>  //这个地方使用的是JSX语法，不需要加""
        // 2.渲染，如果有多个渲染同一个容器，后面的会将前面的覆盖掉
        ReactDOM.render(VDOM,document.getElementById("test"));        
</script>
</html>
```

这样，就会在页面中的这个div容器上添加这个h1.
![hello](/assets/1.png)

### 2.JSX基础语法

1.定义虚拟DOM，不能使用“”

2.标签中混入JS表达式的时候使用{}

3.样式的类名指定不要使用class，使用className

4.内敛样式要使用双大括号包裹

5.不能有多个根标签，只能有一个跟标签

6.标签必须闭合

7.如果小写字母开头，就将标签转化为html同名元素，如果html中无该标签对应的元素，就报错；如果是大写字母开头，react就去渲染对应的组件，如果没有就报错

>关于JS表达式和JS语句：
JS表达式：返回一个值，可以放在任何一个需要值的地方 a a+b demo(a) arr.map() function text(){} JS语句：if(){} for(){} while(){} swith(){} 不会返回一个值

实例如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .sss{
            color: red;
        }
    </style>
</head>
<body>
    <!-- 准备好容器 -->
    <div id="test">
        
    </div>
</body>
<!-- 引入依赖 ,引入的时候，必须就按照这个步骤-->
<script src="../js/react.development.js" type="text/javascript"></script>
<script src="../js/react-dom.development.js" type="text/javascript"></script>

<script src="../js/babel.min.js"></script>
<!--这里使用了js来创建虚拟DOM-->
<script type="text/babel">
        const MyId = "title";
        const MyData = "Cyk";
        // 1.创建虚拟DOM
        const VDOM = (
            <h1 id = {MyId.toLocaleUpperCase()}>
                <span className = "sss" style = {{fontSize:'50px'}}>sss</span>
            </h1>
        )
        // 2.渲染，如果有多个渲染同一个容器，后面的会将前面的覆盖掉
        ReactDOM.render(VDOM,document.getElementById("test"));
</script>

</html>
```

### 3. 两种创建虚拟DOM的方式

#### 1.使用JSX创建虚拟DOM

```js
 const VDOM = (
            <h1 id = {MyId.toLocaleUpperCase()}>
                <span className = "sss" style = {{fontSize:'50px'}}>sss</span>
            </h1>
        )
```

这个在上面的案例中已经演示过了 ，下面看看另外一种创建虚拟DOM的方式

#### 2.使用JS创建虚拟DOM

```js
// 1.创建虚拟DOM[在这使用了js的语法]React.createElement(标签,标签属性,内容)
const VDOM = React.createElement('h1',{id:"title"},"nihao")
```

使用JS和JSX都可以创建虚拟DOM，但是可以看出JS创建虚拟DOM比较繁琐，尤其是标签如果很多的情况下，所以还是比较推荐使用JSX来创建。

### 4.模块与组件、模块化与组件化的理解

#### 1. 模块

1. 理解：向外提供特定功能的js程序, 一般就是一个js文件
2. 为什么要拆成模块：随着业务逻辑增加，代码越来越多且复杂。
3. 作用：复用js, 简化js的编写, 提高js运行效率

#### 2. 组件

1. 理解：用来实现局部功能效果的代码和资源的集合(html/css/js/image等等)
2. 为什么要用组件： 一个界面的功能更复杂
3. 作用：复用编码, 简化项目编码, 提高运行效率

#### 3. 模块化

当应用的js都以模块来编写的, 这个应用就是一个模块化的应用

#### 4. 组件化

当应用是以多组件的方式实现, 这个应用就是一个组件化的应用

![component](/assets/2.png)

## 三、 React面向组件编程

### 1. 组件化

当应用是以多组件的方式实现，这个应用就是一个组件化的应用

>**注意**： 组件名称必须以大写字母开头。

>React 会将以小写字母开头的组件视为原生 DOM 标签。例如，< div />代表 HTML 的 div 标签，而< Weclome /> 则代表一个组件，并且需在作用域内使用 Welcome

>传递的参数，不能在组件中改动

### 2. 函数式组件

```js
//1.先创建函数，函数可以有参数，也可以没有，但是必须要有返回值 返回一个虚拟DOM
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
//2.进行渲染
ReactDOM.Render(<Welcom name = "ss" />,document.getElementById("div"));
```

结果：

![结果](/assets/3.png)
让我们来回顾一下这个例子中发生了什么：

1. 我们调用 `ReactDOM.render()` 函数，并传入 `<Welcome name="Sara" />` 作为参数。
2. React 调用 `Welcome` 组件，并将 `{name: 'Sara'}` 作为 props 传入。
3. `Welcome` 组件将 `Hello, Sara` 元素作为返回值。
4. React DOM 将 DOM 高效地更新为 `Hello, Sara`。

### 3. Class组件

```js
//必须继承React.Component
//然后重写Render()方法，该方法一定要有返回值，返回一个虚拟DOM
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
//渲染 【这个跟之前也是一样的】
ReactDOM.Render(<Welcom name = "ss" />,document.getElementById("div"));
```

### 4. 组件案例

下面，我们通过一个案例更好的理解组件：【只关注与核心代码】

我们发现组件是可以包含中使用的， 而且如果创建的数组，必须要代一个key。数组元素中使用的 key 在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的 key 值

```jsx
<script type="text/babel">
        //创建一个组件<li>
        function GetLi(props){      
            return <li>{props.value}</li>
        };

        // 1.创建类式组件<ul>
        class MyComponent extends React.Component{
            render(){
                console.log(this.props.arr);
                let com = this.props.arr.map((item,index)=>
                     //在这个地方包含了GetLi这个组件，【注意不能用{}】
                     //因为这个是一个列表，所以必须传递一个key【独一无二的Key】
                     //key 帮助 React 识别哪些元素改变了，比如被添加或删除。
                        <GetLi value={item} key = {index} />
                    );
                console.log(com);
                return <ul>{com}</ul>
            }
        }
        
        let num = [1,2,3,4]
        //2.渲染组件
        ReactDOM.render(<MyComponent  arr={num}/>,document.getElementById("test");
</script>
```

### 5. 使用React开发者工具调试
![开发者工具](/assets/4.png)

## 四、 组件实例的三大属性

### 1. state

我们都说React是一个状态机，体现是什么地方呢，就是体现在state上，通过与用户的交互，实现不同的状态，然后去渲染UI,这样就让用户的数据和界面保持一致了。state是组件的私有属性。

在React中，更新组件的state，结果就会重新渲染用户界面(不需要操作DOM),一句话就是说，用户的界面会随着状态的改变而改变。

state是组件对象最重要的属性，值是对象（可以包含多个key-value的组合）

#### 1. 案例

需求：页面显示【今天天气很炎热】，鼠标点击文字的时候，页面更改为【今天天气很凉爽】

核心代码如下：

```html
<body>
    <!-- 准备好容器 -->
    <div id="test">
        
    </div>
</body>
<!-- 引入依赖 ,引入的时候，必须就按照这个步骤-->
<script src="../js/react.development.js" type="text/javascript"></script>
<script src="../js/react-dom.development.js" type="text/javascript"></script>

<script src="../js/babel.min.js"></script>
<!--这里使用了js来创建虚拟DOM-->
<script type="text/babel">
        //1.创建组件
        class St extends React.Component{
            constructor(props){
                super(props);
                //先给state赋值
                this.state = {isHot:true,win:"ss"};
                //找到原型的dem，根据dem函数创建了一个dem1的函数，并且将实例对象的this赋值过去
                this.dem1 = this.dem.bind(this);
            }
            //render会调用1+n次【1就是初始化的时候调用的，n就是每一次修改state的时候调用的】
            render(){ //这个This也是实例对象
                //如果加dem()，就是将函数的回调值放入这个地方
                //this.dem这里面加入this，并不是调用，只不过是找到了dem这个函数，在调用的时候相当于直接调用，并不是实例对象的调用
                return <h1 onClick = {this.dem1}>今天天气很{this.state.isHot?"炎热":"凉爽"}</h1>    
            }
            //通过state的实例调用dem的时候，this就是实例对象
            dem(){
                const state =  this.state.isHot;
                 //状态中的属性不能直接进行更改，需要借助API
                // this.state.isHot = !isHot; 错误
                //必须使用setState对其进行修改，并且这是一个合并
                this.setState({isHot:!state});
            }
        }
        // 2.渲染，如果有多个渲染同一个容器，后面的会将前面的覆盖掉
        ReactDOM.render(<St />,document.getElementById("test"));
</script>
```

#### 2. 需要注意的

1.组件的构造函数，必须要传递一个props参数

2.特别关注this【重点】，类中所有的方法局部都开启了严格模式，如果直接进行调用，this就是undefined

3.想要改变state,需要使用setState进行修改，如果只是修改state的部分属性，则不会影响其他的属性，这个只是合并并不是覆盖。

#### 3. this.setState()

该方法接收两种参数：对象或函数。

* 对象：即想要修改的state
* 函数：接收两个函数，第一个函数接受两个参数，第一个是当前state，第二个是当前props，该函数返回一个对象，和直接传递对象参数是一样的，就是要修改的state；第二个函数参数是state改变后触发的回调

在此还需要注意的是，setState有**异步更新**和**同步更新**两种形式，那么什么时候会同步更新，什么时候会异步更新呢？

* React控制之外的事件中调用setState是同步更新的。比如原生js绑定的事件，setTimeout/setInterval等。

* 大部分开发中用到的都是React封装的事件，比如onChange、onClick、onTouchMove等，这些事件处理程序中的setState都是异步处理的。

```js
//1.创建组件
class St extends React.Component{
    //可以直接对其进行赋值
    state = {isHot:10};
    render(){ //这个This也是实例对象
        return <h1 onClick = {this.dem}>点击事件</h1> 
    }
//箭头函数 [自定义方法--->要用赋值语句的形式+箭头函数]
    dem = () =>{
        //修改isHot
        this.setState({ isHot: this.state.isHot + 1})
        console.log(this.state.isHot);
    }
}
```

上面的案例中预期setState使得isHot变成了11，输出也应该是11。然而在控制台打印的却是10，也就是并没有对其进行更新。这是因为异步的进行了处理，在输出的时候还没有对其进行处理。

```js
componentDidMount(){
    document.getElementById("test").addEventListener("click",()=>{
        this.setState({isHot: this.state.isHot + 1});
        console.log(this.state.isHot);
    })
}
```

但是通过这个原生JS的，可以发现，控制台打印的就是11，也就是已经对其进行了处理。也就是进行了同步的更新。

**React怎么调用同步或者异步的呢？**

在 React 的 setState 函数实现中，会根据一个变量 isBatchingUpdates 判断是直接更新 this.state 还是放到队列中延时更新，而 isBatchingUpdates 默认是 false，表示 setState 会同步更新 this.state；但是，有一个函数 batchedUpdates，该函数会把 isBatchingUpdates 修改为 true，而当 React 在调用事件处理函数之前就会先调用这个 batchedUpdates将isBatchingUpdates修改为true，这样由 React 控制的事件处理过程 setState 不会同步更新 this.state。

**如果是同步更新，每一个setState对调用一个render，并且如果多次调用setState会以最后调用的为准，前面的将会作废；如果是异步更新，多个setSate会统一调用一次render**

```js
dem = () =>{
    this.setState({
        isHot:  1,
        cont:444
    })
    this.setState({
    	isHot: this.state.isHot + 1

    })
    this.setState({
        isHot:  888,
        cont:888
    })
}
```

上面的最后会输出：isHot是888，cont是888

```js
 dem = () =>{
                
                this.setState({
                    isHot: this.state.isHot + 1,
                    
                })
                this.setState({
                    isHot: this.state.isHot + 1,
                    
                })
                this.setState({
                    isHot: this.state.isHot + 888
                })
            }
```

初始isHot为10，最后isHot输出为898，也就是前面两个都没有执行。

**注意！！这是异步更新才有的，如果同步更新，每一次都会调用render，这样每一次更新都会**


#### 4. 简化版本

1.state的赋值可以不再构造函数中进行

2.使用了箭头函数，将this进行了改变

```html
<body>
    <!-- 准备好容器 -->
    <div id="test">
        
    </div>
</body>
<!-- 引入依赖 ,引入的时候，必须就按照这个步骤-->
<script src="../js/react.development.js" type="text/javascript"></script>
<script src="../js/react-dom.development.js" type="text/javascript"></script>

<script src="../js/babel.min.js"></script>
<script type="text/babel">
        class St extends React.Component{
            //可以直接对其进行赋值
            state = {isHot:true};
            render(){ //这个This也是实例对象
                return <h1 onClick = {this.dem}>今天天气很{this.state.isHot?"炎热":"凉爽"}</h1>    
                //或者使用{()=>this.dem()也是可以的}
            }
            //箭头函数 [自定义方法--->要用赋值语句的形式+箭头函数]
            dem = () =>{
                console.log(this);
                const state =  this.state.isHot;
                this.setState({isHot:!state});
            }
        }
        ReactDOM.render(<St />,document.getElementById("test"));       
</script>
```

如果想要在调用方法的时候传递参数，有两个方法：

```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

上述两种方式是等价的，分别通过`箭头函数`和 `Function.prototype.bind` 来实现。

在这两种情况下，React 的事件对象 `e` 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 `bind` 的方式，事件对象以及更多的参数将会被隐式的进行传递。

### 2. props

Props主要用来传递数据，比如组件之间进行传值

#### 1. 基本使用

```html
<body>
    <div id = "div">

    </div>

</body>
<script type="text/babel">
    class Person extends React.Component{
        render(){
            return (
                <ul>
                    //接受数据并显示
                    <li>{this.props.name}</li>
                    <li>{this.props.age}</li>
                    <li>{this.props.sex}</li>
                </ul>
            )
        }
    }
    //传递数据
    ReactDOM.render(<Person name="tom" age = "41" sex="男"/>,document.getElementById("div"));
</script>
```

如果传递的数据是一个对象，可以更加简便的使用

```html
<script type="text/babel">
    class Person extends React.Component{
        render(){
            return (
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.age}</li>
                    <li>{this.props.sex}</li>
                </ul>
            )
        }
    }
    const p = {name:"张三",age:"18",sex:"女"}
   ReactDOM.render(<Person {...p}/>,document.getElementById("div"));
</script>
```

... 这个符号恐怕都不陌生，这个是一个展开运算符，主要用来展开数组，如下面这个例子：

```js
arr = [1,2,3];
arr1 = [4,5,6];
arr2 = [...arr,...arr1];  //arr2 = [1,2,,3,4,5,6]
```

但是他还有其他的用法：

1.复制一个对象给另一个对象{...对象名}。此时这两个对象并没有什么联系了

```js
const p1 = {name:"张三",age:"18",sex:"女"}
const p2 = {...p1};
p1.name = "sss";
console.log(p2)  //{name:"张三",age:"18",sex:"女"}
```

2.在复制的时候，合并其中的属性

```js
 const p1 = {name:"张三",age:"18",sex:"女"}
 const p2 = {...p1,name : "111",hua:"ss"};
 p1.name = "sss";
 console.log(p2)  //{name: "111", age: "18", sex: "女",hua:"ss"}
 ```

**注意！！ {...P}并不能展开一个对象**

**props传递一个对象，是因为`babel+react`使得{..p}可以展开对象，但是只有在标签中才能使用**

#### 2. 对于props限制

很多时候都想要传递的参数进行相应的限制，比如：限制传递参数的类型，参数的默认值等等

react对此提供了相应的解决方法：

* propTypes:类型检查，还可以限制不能为空
* defaultProps：默认值

```html
<script type="text/babel">
    class Person extends React.Component{
        render(){
            //props是只读的
            return (
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.age}</li>
                    <li>{this.props.sex}</li>
                </ul>
            )
        }
        //对组件的属性对其进行限制
        static propTypes = {
            name:PropTypes.string.isRequired, //限定name是string类型，并且必须要传递
            sex:PropTypes.string,  //限定sex是string类型
            speak:PropTypes.func   //限定speak是function类型
        }
        //指定默认的标签属性
        static defaultProps = {
            sex:"不男不女",
            age:18
        }    
    }
    //在js中可以使用{...p}来复制一个对象，但是这个地方并不是复制对象，而是babel+react通过展开运算符，展开了一个对象
    //但是只能在标签中进行使用
    //const p = {name:"张三",age:"18",sex:"女"}   {14}就代表的是数值
    //ReactDOM.render(<Person {...p}/>,document.getElementById("div"));
    ReactDOM.render(<Person name="sss" age = {14} speak="8"/>,document.getElementById("div"));
    
    function speak(){
        console.log("这个是一个函数")
    }
</script>
</html>
 ```

#### 3. 函数式组件的使用

函数在使用props的时候，是作为参数进行使用的(props)；

```js
function Person(props){
          return (
                <ul>
                    <li>{props.name}</li>
                    <li>{props.age}</li>
                    <li>{props.sex}</li>
                </ul>
            )
    }
```

### 3. Refs

Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素。

Refs主要提供了三种方式：

#### 1. 字符串形式

在想要获取到一个DOM节点，可以直接在这个节点上添加ref属性。利用该属性进行获取该节点的值。

案例：给需要的节点添加ref属性，此时该实例对象的refs上就会有这个值。就可以利用实例对象的refs获取已经添加节点的值

```jsx
<input ref="dian" type="text" placeholder="点击弹出" />

 inputBlur = () =>{
            alert(this.refs.shiqu.value);
        }
```

#### 2.回调形式

回调形式会在ref属性中添加一个回调函数。将该DOM作为参数传递过去。

如：ref里面就是一个回调函数，self就是该input标签。然后在将该DOM元素赋值给实例对象中的一个属性

```jsx
<input ref={self =>{ this.dian = self;console.log(self)}}  placeholder="点击弹出" />
```

![input](/assets/5.png)

也可以将函数提取出来，在ref中进行调用

```js
isRef = (self) =>{
            this.dian = self;
            console.log(self)
        }

<input ref={this.isRef} type="text" placeholder="点击弹出" />
```

#### 3.React.createRef()形式

React其实已经给我们提供了一个相应的API，他会自动的将该DOM元素放入实例对象中

如下：依旧先在DOM元素中添加一个ref元素

```jsx
{/*<input ref={this.容器名称} type="text" placeholder="点击弹出" />*/}
<input ref={this.MyRef} type="text" placeholder="点击弹出" />
<input ref={this.MyRef1} type="text" placeholder="点击弹出" />
```

通过API，创建React的容器，相当于省略了回调的中间环节。但是这个容器是专门专用的，所以每一个ref都需要创建这个。该API会将DOM元素赋值给实例对象的名称为容器名称的属性的current【这个current是固定的】

```jsx
{/*容器名称 = React.createRef()*/}
MyRef = React.createRef();
MyRef1 = React.createRef();
```

![input](/assets/6.png)

然后就可以使用了

```js
btnOnClick = () =>{
    //创建之后，将自身节点，传入current中
    console.log(this.MyRef.current.value);
}
```

**官方提示我们不要过度的使用ref，如果发生时间的元素刚好是需要操作的元素，就可以使用事件去替代。**

## 五、 React事件

React的事件是通过onXxx属性指定事件处理函数

​React使用的都是自定义的时间，而不是原生的事件

​React中的事件是通过事件委托方式处理的

​事件中必须返回的是函数

​通过event.target得到发生事件的Dom元素对象

比如：

先声明一个事件，然后在根据事件创建相应的函数，根据事件的event参数，将DOM元素获取到。

```js
<input onChange={this.saveName} type = "text" name ="username"/>

saveName = (event) =>{
            this.setState({name:event.target.value});
        }
```

### 1. 受控和非受控组件

先来说说受控组件：

使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。

```js
saveName = (event) =>{
    this.setState({name:event.target.value});
}

savePwd = (event) => {
    this.setState({pwd:event.target.value});
}

render() {
    return (
        <form action="http://www.baidu.com" onSubmit={this.login}>
            用户名：<input value={this.state.name} onChange={this.saveName} type = "text" />
            密码<input value={this.state.pwd} onChange={this.savePwd} type = "password"/>
            <button>登录</button>
        </form>
    )
}
```

由于在表单元素上设置了 value 属性，因此显示的值将始终为 `this.state.value`，这使得 React 的 state 成为唯一数据源。由于 `onchange` 在每次按键时都会执行并更新 React 的 state，因此显示的值将随着用户输入而更新。

对于受控组件来说，输入的值始终由 React 的 state 驱动。

非受控组件：

非受控组件其实就是表单元素的值不会更新state。输入数据都是现用现取的。

如下：下面并没有使用state来控制属性，使用的是事件来控制表单的属性值。

```js
class Login extends React.Component{

    login = (event) =>{
        event.preventDefault(); //阻止表单提交
            console.log(this.name.value);
            console.log(this.pwd.value);
        }
        render() {
            return (
                <form action="http://www.baidu.com" onSubmit={this.login}>
                用户名：<input ref = {self => this.name =self } type = "text" name ="username"/>
                密码：<input ref = {self => this.pwd =self } type = "password" name ="password"/>
                <button>登录</button>
                </form>
            )
    }
}
```

### 2. 高级函数(满足二选一条件)

1. 如果函数的参数是函数

2. 如果函数返回一个函数

### 3. 函数的珂里化

通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式

如下，我们将上面的案例简化，创建高级函数：

```jsx
 class Login extends React.Component{
 
        state = {name:"",pwd:""};
		
		//返回一个函数
        saveType = (type) =>{
            return (event) => {
                this.setState({[type]:event.target.value});
            }
        }

        //因为事件中必须是一个函数，所以返回的也是一个函数，这样就符合规范了
        render() {
            return (
                <form>
      				<input onChange = {this.saveType('name')} type = "text"/>
                    <button>登录</button>
                </form>
            )
        }
    }

    ReactDOM.render(<Login />,document.getElementById("div"));
```

## 六、生命周期

### 1. （旧）

组件从创建到死亡，会经过一些特定的阶段

​React组件中包含一系列钩子函数{生命周期回调函数}，会在特定的时刻调用

​我们在定义组件的时候，会在特定的声明周期回调函数中，做特定的工作

如下图是旧生命周期的结构图：

![old lifecycle](/assets/7.png)

我们通过一个案例更详细的了解这个生命周期：

```js
 class A extends React.Component{

        constructor(props){
            console.log("A --- constructor")
            super(props);
            this.state = {num:1}
        }

        add = () => {
            let {num} = this.state;
            this.setState({num:num+1});
            //强制更新
            //this.forceUpdate();
        }

       render(){
           console.log("A --- render");
            return (
                <div>
                    <h1>这个是第{this.state.num}个</h1>
                    <B name = {this.state.num}/>
                    <button onClick = {this.add}>点击加一</button>
                </div>
            )
       }

       //在render之前执行
       componentWillMount(){
            console.log("A --- componentWillMount");
       }

       //在render之后执行
       componentDidMount(){
        console.log("A --- componenetDidMount");
       }

       //更新操作 setState之后执行，判断是否可以更新（true可以，false不可以）
       shouldComponentUpdate(){
            console.log("A --- shouldComponentUpdate");
            return true;
       }
       // 组件将要更新之前
       componentWillUpdate(){
            console.log("A --- componentWillUpdate");
       }
       //组件更新之后，该函数可以接受相应的参数
       componentDidUpdate(){
            console.log("A --- componentDidUpdate");
       }

       //卸载组件之后
       componentWillUnmonut(){
            console.log("A --- componentWillUnmonut");
       }
     
   }
   class B extends React.Component{
       render(){
           return(   
                <div>
                    <h1>这个是B组件,传递过来的是：{this.props.name}</h1>
                </div>
           )
       }
       //父组件进行了更新，子组件先执行这个【注意，第一次传递数据的时候，并不执行】
       componentWillReceiveProps(){
        console.log("A --- componentWillReceiveProps");
       }
   }
    ReactDOM.render(<A   />,document.getElementById("div"));
```

我们在控制台看一下：

当我们刚刚打开控制台的时候，组件第一次加载：

![a](/assets/8.png)

当我们点击按钮更新sate的时候：

![b](/assets/9.png)

### 2. （新）

在最新的react版本中，有些生命周期钩子被抛弃了，在官网中是这样说的：

我们得到最重要的经验是，过时的组件生命周期往往会带来不安全的编码实践，具体函数如下：

* `componentWillMount`
* `componentWillReceiveProps`
* `componentWillUpdate`

这些生命周期方法经常被误解和滥用；此外，我们预计，在异步渲染中，它们潜在的误用问题可能更大。我们将在即将发布的版本中为这些生命周期添加 “UNSAFE_” 前缀。（这里的 “unsafe” 不是指安全性，而是表示使用这些生命周期的代码在 React 的未来版本中更有可能出现 bug，尤其是在启用异步渲染之后。）

由此可见，新版本中并不推荐持有这三个函数，取而代之的是带有`UNSAFE_ `前缀的三个函数，比如: `UNSAFE_ componentWillMount`。即便如此，其实React官方还是不推荐大家去使用，在以后版本中有可能会去除这几个函数。

如下图是新的生命周期：

![c](/assets/10.png)

从图上可以看出，新生命周期和旧生命周期的区别主要有：

1.抛弃了上面所说的三个钩子函数【其实还可以使用】

2.新添加了两个钩子函数

现在重点说一下，新添加的钩子函数

`static getDerivedStateFromProps(props, state)`

首先，该函数会调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用；该函数必须是静态的；给组件传递的数据（props）以及组件状态（state），会作为参数到这个函数中；该函数也必须有返回值，返回一个Null或者state对象。因为初始化和后续更新都会执行这个方法，因此在这个方法返回state对象，就相当于将原来的state进行了覆盖，所以倒是修改状态不起作用。

`getSnapshotBeforeUpdate(prevProps, prevState)`

`getSnapshotBeforeUpdate()` 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递`componentDidUpdate()`。

>补充一下：componentDidUpdate(prevProps, prevState, snapshot)

>该生命周期函数，可以有三个参数：原始传过来的参数，最开始的状态，getSnapshotBeforeUpdate传递的值

>关于更多关于生命周期的介绍，可以参考官方文档：

>https://zh-hans.reactjs.org/docs/react-component.html#render

以上就是两个新添加的钩子函数，但是在现实开发中可能并不常用这两个。

### 3. 案例

**在一个区域内，定时的输出以行话，如果内容大小超过了区域大小，就出现滚动条，但是内容不进行移动**
![gif](/assets/1.gif)

如上面的动图：区域内部的内容展现没有变化，但是可以看见滚动条在变化，也就是说上面依旧有内容在输出，只不过不在这个区域内部展现。

**实现：**

【一些css样式，就不在这展示了】

1. 首先我们先实现定时输出内容

我们可以使用state状态，改变新闻后面的值，但是为了同时显示这些内容，我们应该为state的属性定义一个数组。并在创建组件之后开启一个定时器，不断的进行更新state。更新渲染组件

```jsx
 class New extends React.Component{

        state = {num:[]};

        //在组件创建之后,开启一个定时任务
        componentDidMount(){
            setInterval(()=>{
                let {num} = this.state;
                const news = (num.length+1);
                this.setState({num:[news,...num]});
            },2000);
        }

        render(){
            return (

                <div ref = "list" className = "list">{
                    this.state.num.map((n,index)=>{
                    return <div className="news" key={index} >新闻{n}</div>
                    })
                }</div>
            )
        }
  }
  ReactDOM.render(<New />,document.getElementById("div"));
```

2. 接下来就是控制滚动条了

我们在组件渲染到DOM之前获取组件的高度，然后用组件渲染之后的高度减去之前的高度就是一条新的内容的高度，这样在不断的累加到滚动条位置上。

```js
getSnapshotBeforeUpdate(){
  return this.refs.list.scrollHeight;
}

componentDidUpdate(preProps,preState,height){
  this.refs.list.scrollTop += (this.refs.list.scrollHeight - height);
}
```

这样就实现了这个功能。

## 七、Diff算法

提到这个算法，就必须说一下关于Key的事情了。

其实每个组件中的每个标签都会有一个key,只不过有的必须显示的指定，有的可以隐藏。

如果生成的render出来后就不会改变里面的内容，那么你不需要指定key（不指定key时，React也会生成一个默认的标识）,或者将index作为key，只要key不重复即可。

但是如果你的标签是动态的，是有可能刷新的，就必须显示的指定key。必须上面案使用map进行便利的时候就必须指定Key:

```js
this.state.num.map((n,index)=>{
  return <div className="news" key={index} >新闻{n}</div>
})
```

这个地方虽然显示的指定了key，但是**官网并不推荐使用Index作为Key去使用**；

这样会很有可能会有效率上的问题

举个例子：

在一个组件中，我们先创建了两个对象，通过循环的方式放入< li>标签中，此时key使用的是index。

```js
person:[
    {id:1,name:"张三",age:18},
    {id:2,name:"李四",age:19}
]

this.state.person.map((preson,index)=>{
  return  <li key = {index}>{preson.name}</li>
})
```

如下图展现在页面中：

![1](/assets/11.png)

此时，我们想在点击按钮之后动态的添加一个对象，并且放入到li标签中，在重新渲染到页面中。

我们通过修改State来控制对象的添加。

```js
<button onClick={this.addObject}>点击增加对象</button>
addObject = () =>{
    let {person} = this.state;
    const p = {id:(person.length+1),name:"王五",age:20};
    this.setState({person:[p,...person]});
}
```

如下动图所示：

![1](/assets/2.gif)

这样看，虽然完成了功能。但是其实存在效率上的问题， 我们先来看一下两个前后组件状态的变化：

![1](/assets/12.png)

我们发现，组件第一个变成了王五，张三和李四都移下去了。因为我们使用Index作为Key，这三个标签的key也就发生了改变【张三原本的key是0，现在变成了1，李四的key原本是1，现在变成了2，王五变成了0】在组件更新状态重新渲染的时候，就出现了问题：

因为react是通过key来比较组件标签是否一致的，拿这个案例来说：

首先，状态更新导致组件标签更新，react根据Key，判断旧的虚拟DOM和新的虚拟DOM是否一致

key = 0 的时候 旧的虚拟DOM 内容是张三 新的虚拟DOM为王五 ，react认为内容改变，从而重新创建新的真实DOM.

key = 1 的时候 旧的虚拟DOM 内容是李四，新的虚拟DOM为张三，react认为内容改变，从而重新创建新的真实DOM

key = 2 的时候 旧的虚拟DOM没有，创建新的真实DOM

这样原本有两个虚拟DOM可以复用，但都没有进行复用，完完全全的都是新创建的；这就导致效率极大的降低。

其实这是因为我们将新创建的对象放在了首位，如果放在最后其实是没有问题的，但是因为官方并不推荐使用Index作为key值，我们推荐使用id作为key值。从而完全避免这样的情况。

**用index作为key可能会引发的问题**:

1. 若对数据进行:逆序添加、逆序删除等破坏顺序操作:
​ 会产生没有必要的真实DOM更新 界面效果没问题,但效率低。

2. 如果结构中还包含输入类的DOM:
​ 会产生错误DOM更新 界面有问题。

3. 注意! 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的。

**开发如何选择key?**

最好使用每一条数据的唯一标识作为key 比如id，手机号，身份证号

如果确定只是简单的展示数据，用Index也是可以的

**而这个判断key的比较规则就是Diff算法**

Diff算法其实就是react生成的新虚拟DOM和以前的旧虚拟DOM的比较规则：

* 如果旧的虚拟DOM中找到了与新虚拟DOM相同的key:
  - 如果内容没有变化，就直接只用之前旧的真实DOM
  - 如果内容发生了变化，就生成新的真实DOM
* 如果旧的虚拟DOM中没有找到了与新虚拟DOM相同的key:
  - 根据数据创建新的真实的DOM,随后渲染到页面上

# 二、React脚手架

react提供了一个用于创建react项目的脚手架库：create-react-app

## 一、使用create-react-app创建react应用

1.全局安装：npm i -g create-react-app

2.创建项目：create-react-app 项目名

在这一步，有可能会出现：

![不是内部命令](/assets/13.png)

这样可以直接使用：npx create-react-app 项目名

3.等待下载完成，进入项目文件夹，运行一下

比如，我这的项目名称是hello,就先进入hello文件夹

cd hello

npm start //启动这个项目

![启动成功](/assets/14.png)

这个时会自动的打开浏览器，展现这个项目：

![第一个脚手架项目](/assets/15.png)

## 二、项目的目录结构

我们先来看一下public这个目录下面的结构：

![public](/assets/16.png)

这里面最主要的还是这个Index.html文件：

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <!--%PUBLIC_URL%表示public文件夹的路径-->
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <!--用于开启理想视口，用于移动端页面的适配-->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!--用于配置浏览器地址栏的颜色（仅支持安卓手机浏览器）-->
    <meta name="theme-color" content="#000000" />
    <!--描述网页信息的-->
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <!--用于指定网页添加到手机主屏幕后的图标（仅仅支持ios）-->
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
 
    <!--应用加壳时候的配置文件 -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  
    <title>React App</title>
  </head>
  <body>
    <!-- 浏览器不支持JS的运行的时候展现 -->
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

src文件：

![src文件](/assets/17.png)

这里面其实最主要的就是App.js以及index.js，一个是组件，一个是将组件渲染到页面中的。

## 三、第一个脚手架应用

1.我们保持public中的Index.html不变

2.修改src下面的APP.js以及index.js文件

App.js: 【注意：创建好的组件一定要暴露出去】

```js
//创建外壳组件APP
import React from 'react'

class App extends React.Component{
    render(){
        return (
            <div>Hello word</div>
        )
    }
}

export default App
```

index.js: 【主要的作用其实就是将App这个组件渲染到页面上】

```js
//引入核心库
import React from 'react'
import ReactDOM from 'react-dom'
//引入组件
import App from './App'

ReactDOM.render(<App />,document.getElementById("root"))
```

这样在重新启动应用，就成功了。

![脚手架应用](/assets/18.png)

我们也不建议这样直接将内容放入App组件中，尽量还是用内部组件。

我们在顶一个Hello组件：

```js
import React,{Componet} from 'react'

export default class Hello extends Componet{
    render() {
        return (
            <h1>Hello</h1>
        )
    }
}
```

在App组件中，进行使用

```js
class App extends Component{
    render(){
        return (
            <div>
                <Hello />
            </div>
        )
    }
}
```
这样的结果和前面是一样的。

但是由于普通的Js和组件都是js，所一最好组件使用jsx去展示。

## 四、样式冲突

当组件逐渐增多起来的时候，我们发现，组件的样式也是越来越丰富，这样就很有可能产生两个组件中样式名称有可能会冲突，这样会根据引入App这个组件的先后顺序，后面的会覆盖前面的，

为了避免这样的样式冲突，我们采用下面的形式：

1.将css文件名修改： hello.css --- >hello.module.css

2.引入并使用的时候改变方式：

```js
import React,{Component}from 'react'
import hello from './hello.module.css'  //引入的时候给一个名称

export default class Hello extends Component{
    render() {
        return (
            <h1 className={hello.title}>Hello</h1>   //通过大括号进行调用
        )
    }
}
```

## 五、功能界面的组件化编码流程

1.拆分组件:拆分界面，抽取组件

2.实现静态组件

3.实现动态组件

* 动态的显示初始化数据
  - 数据类型
  - 数据名称
  - 保存在哪个组件
* 交互

**注意事项：**

1.拆分组件、实现静态组件。注意className、style的写法

2.动态初始化列表，如何确定将数据放在哪个组件的state中？

* 某个组件使用：放在自身的state中
* 某些组件使用：放在他们共同的父组件中【状态提升】

3.关于父子组件之间的通信

* 父组件给子组件传递数据：通过props传递
* 子组件给父组件传递数据：通过props传递，要求父组件提前给子组件传递一个函数

4.注意defaultChecked 和checked区别，defalutChecked只是在初始化的时候执行一次，checked没有这个限制，但是必须添加onChange方法类似的还有：defaultValue 和value

5.状态在哪里，操作状态的方法就在哪里

## 六、react ajax

React本身只关注与页面，并不包含发送ajax请求的代码，所以一般都是集成第三方的一些库，或者自己进行封装。

推荐使用axios。

在使用的过程中很有可能会出现跨域的问题，这样就应该配置代理。

所谓同源（即指在同一个域）就是两个页面具有相同的协议（protocol），主机（host）和端口号（port）， 当一个请求url的**协议**、**域名**、**端口**三者之间任意一个与当前页面url不同即为跨域 。

那么react通过代理解决跨域问题呢

**方法一**

>在package.json中追加如下配置

```js
"proxy":"请求的地址"      "proxy":"http://localhost:5000"  
```

说明：
1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）

**方法二**

1. 第一步：创建代理配置文件

>在src下创建配置文件：src/setupProxy.js

2. 编写setupProxy.js配置具体代理规则：

```js
const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
      target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
      changeOrigin: true, //控制服务器接收到的请求头中host字段的值
      /*
      	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
      	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
      	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
      */
      pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
    }),
    proxy('/api2', { 
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: {'^/api2': ''}
    })
  )
}
```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。

## 七、兄弟组件之间进行通信

这就要借助消息订阅和发布机制。

举个例子来说就是张三想要跟李四进行通信，张三就需要订阅一个消息【比如A消息】，李四想要给张三数据，就必须发布一个A消息，在发布的同时将数据放入消息中，因为张三订阅了名称为A的消息，此时就能接受到李四发布的消息，从而获取到数据。

这就有点类似于看报纸，甲想要知道每天都发生什么事情，于是订阅了每天日报，乙每天都会发布这个每天日报，因为甲订阅了，于是乙就会每天就给甲方推送，甲方从而获取数据。

**在消息订阅和发布中，我们可以使用PubSubJs进行通信：**

引入PubSubJs:

>import PubSub from 'pubsub-js'

订阅消息：

>PubSub.subscribe("getSate",(_,data)=>{
            console.log(data)
        })
PubSub.subscribe("订阅的消息名称",回调函数，第一个参数是消息名称，可以使用_来占位，第二个是传递的数据
        })

发布消息：
>PubSub.publish("getSate",{isFrist:false,isLoad:true})
PubSub.publish("订阅的消息名称",传递的数据)

## 八、async和await

async:

该关键字是放在函数之前的，使得函数成为一个异步函数，他最大的特点就是将函数回封装成Promise，也就是被他修饰的函数的返回值都是Promise对象。而这个Promise对象的状态则是由函数执行的返回值决定的。

如果返回的是一个非promise对象，该函数将返回一个成功的Promise，成功的值则是返回的值；

如果返回的是一个promise对象，则该函数返回的就是该promise对应的状态。

await

await右边是一个表达式，如果该表达式返回的是一个Promise对象，则左边接收的结果就是该Promise对象成功的结果，如果该Promise对象失败了，就必须使用try..catch来捕获。如果该表达式返回的是是一个不是promise对象，则左边接受的就是该表达式的返回值。

当 await 关键字与异步函数一起使用时，它的真正优势就变得明显了 —— **事实上， await 只在异步函数里面才起作用**。它可以放在任何异步的，基于 promise 的函数之前。它会暂停代码在该行上，直到 promise 完成，然后返回结果值。在暂停的同时，其他正在等待执行的代码就有机会执行了。

举个例子：

```js
 f1 = () =>{
        return new Promise((resolve,reject)=>{
            // resolve(1);
            reject("错误")
        })
    }

    async function test(){
        try{
           const p =  await f1();
           console.log(p)
        }catch(error){
            console.error(error)
        }
    }
    test();
```

## 九、fetch
以前发送请求，使用ajax或者axios，现在还可以使用fetch。这个是window自带的，和xhr是一个级别的。

可以查看这个文章，写的真的不错：

[fetch](http://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html)

# 三、React路由

## 一、SPA

单页Web应用(single page web application，SPA)。整个应用只有一个完整的页面。

点击页面中的链接不会刷新页面，只会做页面的局部更新。

数据都需要通过ajax请求获取,并在前端异步展现

## 二、什么是路由

一个路由其实就是一个映射关系（k:v）

key为路径，value可能是function 或者是 component

**后端路由：**

value是function，用来处理客户端提交的请求

注册路由：router.get(path,function(req,res))

工作过程：当node接收一个请求的时候，根据请求路径找到匹配的路由，调用路由中的函数来处理请求，返回响应的数据

**前端路由：**

浏览器端路由，value是Component，用于展示页面内容

注册路由：< Route path="/test" component={Test}>

工作过程：当浏览器的path变为/test的时候，当前路由组件就会变成Test组件

**前端路由的原理**

这个主要是依靠于history，也就是浏览器的历史记录。

浏览器上的记录其实就是一个栈，前进一次就是入栈，后退一次就是出栈。

并且历史记录上有一个监听的方法，可以时时刻刻监听记录的变化。从而判断是否改变路径

[History](https://developer.mozilla.org/zh-CN/docs/Web/API/History)

## 三、react-router-dom

react的路由有三类：

web【主要适用于前端】,native【主要适用于本地】,anywhere【任何地方】

在这主要使用web也就是这个标题 react-router-dom

**基本的使用：**

导航中的a标签改写成Link标签

< Link to="/路径" >xxx< /Link>

展示区写Route标签进行路径的匹配

< Route path = '/路径' component={组件名称}>

< App>最外侧包裹了一个< BrowserRouter>或者< HashRouter>

```jsx
<div className="list-group">
    <Link className="list-group-item"  to="/about">About</Link>
    <Link className="list-group-item"  to="/home">Home</Link>
</div>

<div className="panel-body">
    {/* 注册路由，也就是写对应的关系 */}
    <Route path="/about"component={About}/>
    <Route path="/home"component={Home}/>
</div>

index.js:
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,document.getElementById("root"))
```

那么使用Link代替a标签之后，在页面上会是什么呢，我们发现其实页面上也是把link转化为了a标签

**路由组件以及一般组件**

1.写法不一样

一般组件：< Demo>

路由组件：< Route path="/demo" component ={Demo}/>

2.存放的位置一般不同

一般组件：components

路由组件：pages

3.接收的内容【props】

一般组件：写组件标签的时候传递什么，就能收到什么

路由组件：接收到三个固定的属性【history,location,match】

```js
history:
    go: ƒ go(n)
    goBack: ƒ goBack()
    goForward: ƒ goForward()
    push: ƒ push(path, state)
    replace: ƒ replace(path, state)
location:
    pathname: "/about"
    search: ""
    state: undefined

match:
    params: {}
    path: "/about"
    url: "/about"
```

NavLink

因为Link不能够改变标签体，因此只适合用于一些写死的标签。而如果想要有一些点击的效果，使用NavLink.

如下代码，就写了ctiveClassName，当点击的时候就会触发这个class的样式

```jsx
{/*NavLink在点击的时候就会去找activeClassName="ss"所指定的class的值，如果不添加默认是active
 这是因为Link相当于是把标签写死了，不能去改变什么。*/}

<NavLink  ctiveClassName="ss" className="list-group-item"  to="/about">About</NavLink>
<NavLink className="list-group-item"  to="/home">Home</NavLink> 
```

​在使用的时候：直接写每个标签中不一样的部分就行，比如路径和名称

```jsx
{/*将NavLink进行封装，成为MyNavLink,通过props进行传参数，标签体内容props是特殊的一个属性，叫做children */}
<MyNavLink to = "/about" >About</MyNavLink>
```

## 四、样式错误

拿上面的案例来说：

这里面会有一个样式：

![public](/assets/19.png)

此时，加载该样式的路径为：

![public](/assets/20.png)

但是在写路由的时候，有的时候就会出现多级目录，

```jsx
<MyNavLink to = "/cyk/about" >About</MyNavLink>

<Route path="/cyk/about"component={About}/>
```

这个时候就在刷新页面，就会出现问题：

样式因为路径问题加载失败，此时页面返回public下面的Index.html

![public](/assets/21.png)

![public](/assets/22.png)

解决这个问题，有三个方法：

1.样式加载使用绝对位置

```jsx
 <link href="/css/bootstrap.css" rel="stylesheet"> 
```

2.使用 %PUBLIC_URL%

```jsx
 <link href="%PUBLIC_URL%/css/bootstrap.css" rel="stylesheet">
```

3.使用HashRouter

因为HashRouter会添加#，默认不会处理#后面的路径，所以也是可以解决的

## 五、模糊匹配和精准匹配

react默认是开启模糊匹配的。

比如：

```jsx
<MyNavLink to = "/home/a/b" >Home</MyNavLink>
```

此时该标签匹配的路由，分为三个部分 home a b；将会根据这个先后顺序匹配路由。

如下就可以匹配到相应的路由：

```jsx
<Route path="/home"component={Home}/>
```

但是如果是下面这个就会失败，也就是说他是根据路径一级一级查询的，可以包含前面那一部分，但并不是只包含部分就可以。

```jsx
<Route path="/a" component={Home}/>
```

当然也可以使用这个精确的匹配 exact={true}

如以下：这样就精确的匹配/home，则上面的/home/a/b就不行了

```jsx
<Route exact={true}  path="/home" component={Home}/>
或者
<Route exact path="/home" component={Home}/>
```

## 六、初始化路由

在配置好路由，最开始打开页面的时候，应该是不会匹配到任意一个组件。这个时候页面就显得极其不合适，此时应该默认的匹配到一个组件。

![public](/assets/3.gif)

此时就需要使用Redirect进行默认匹配了。如下的代码就是默认匹配/home路径所到的组件

```jsx
<Switch>
    <Route path="/about"component={About}/>
    {/* exact={true}：开启严格匹配的模式，路径必须一致 */}
    <Route   path="/home" component={Home}/>
    {/* Redirect:如果上面的都没有匹配到，就匹配到这个路径下面 */}
    <Redirect  to = "/home"/>
</Switch>
```

就可以做到如下的效果：

![public](/assets/4.gif)

## 七、嵌套路由

简单来说就是在一个路由组件中又使用了一个路由，就形成了嵌套路由。

举个例子来说：

我们在home这个路由组件中又添加两个组件：

```jsx
APP.jsx:
<Route   path="/home" component={Home}/>
Home.jsx:
<div>
    <ul className="nav nav-tabs">
    <li>
    	<MyNavLink to = "/home/news">News</MyNavLink>
    </li>
    <li>
    	<MyNavLink  to = "/home/message">Message</MyNavLink>
    </li>
    </ul>
    
    <Switch>
        <Route path = "/home/news" component={News} />
        <Route path = "/home/message" component={Message} />
        <Redirect to="/home/message"/>
    </Switch>
</div>
```

react中路由的注册是有顺序的，因此在匹配的时候也是按照这个顺序进行的，因此会先匹配父组件中的路由

比如上面的 /home/news的路由处理过程：

1.因为父组件home的路由是先注册的，因此在匹配的时候先去找home的路由，也就是根据/home/news先模糊匹配到/home

2.在去Home组件里面去匹配相应的路由，从而找到了/home/news进行匹配，因此找到了News组件。

但是如果开启精确匹配，就会在第一步的时候卡住，这个时候就走不下去了。**因此不要轻易的使用精确匹配**

## 八、路由传参

### 1. 传递 params 参数

![public](/assets/5.gif)

首先我们需要实现的效果是，点击消息列表，展示出消息的详细内容

这个案例实现的方法有三种，第一种就是传递 params 参数，由于我们所显示的数据都是从数据集中取出来的，因此我们需要有数据的传输给 Detail 组件

我们首先需要将详细内容的数据列表，保存在 DetailData 中，将消息列表保存在 Message 的 state 中。

我们可以通过将数据拼接在路由地址末尾来实现数据的传递

```jsx
 <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
```

如上，我们将消息列表的 id 和 title 写在了路由地址后面

>这里我们需要注意的是：需要采用模板字符串以及 $ 符的方式来进行数据的获取

在注册路由时，我们可以通过 `:数据名` 来接收数据

```jsx
<Route path="/home/message/detail/:id/:title" component={Detail} />
```

如上，使用了 `:id/:title` 成功的接收了由 Link 传递过来的 id 和 title 数据

这样我们既成功的实现了路由的跳转，又将需要获取的数据传递给了 Detail 组件

我们在 Detail 组件中打印 `this.props` 来查看当前接收的数据情况

![public](/assets/23.png)

我们可以发现，我们传递的数据被接收到了对象的 match 属性下的 params 中

因此我们可以在 Detail 组件中获取到又 Message 组件中传递来的 params 数据

并通过 params 数据中的 `id` 值，在详细内容的数据集中查找出指定 `id` 的详细内容

```jsx
const { id, title } = this.props.match.params
const findResult = DetailData.find((detailObj) => {
    return detailObj.id === id
})
```

最后渲染数据即可


### 2. 传递 search 参数

我们还可以采用传递 search 参数的方法来实现

首先我们先确定数据传输的方式

我们先在 Link 中采用 ? 符号的方式来表示后面的为可用数据

```jsx
<Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
```

采用 `search` 传递的方式，无需在 Route 中再次声明，可以在 Detail 组件中直接获取到

![public](/assets/24.png)

我们可以发现，我们的数据保存在了 `location` 对象下的 `search` 中，是一种字符串的形式保存的，我们可以引用一个库来进行转化 `querystring`

```js
import qs from 'querystring'
```

这个库是 React 中自带有的，它有两个方法，一个是 `parse` 一个是 `stringify`

我们可以采用 `parse` 方法，将字符串转化为键值对形式的对象

```js
const { search } = this.props.location
const { id, title } = qs.parse(search.slice(1))
```

这样我们就能成功的获取数据，并进行渲染

>tips：无需声明接收

### 3. 传递 state 参数

采用传递 state 参数的方法，是我觉得最完美的一种方法，因为它不会将数据携带到地址栏上，采用内部的状态来维护

```jsx
<Link to={{ pathname: '/home/message/detail', state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>
```

首先，我们需要在 Link 中注册跳转时，传递一个路由对象，包括一个 跳转地址名，一个 state 数据，这样我们就可以在 Detail 组件中获取到这个传递的 state 数据

>注意：采用这种方式传递，无需声明接收

我们可以在 Detail 组件中的 location 对象下的 state 中取出我们所传递的数据

```js
const { id, title } = this.props.location.state
```

![public](/assets/25.png)

直接使用即可~

解决清除缓存造成报错的问题，我们可以在获取不到数据的时候用空对象来替代，例如，

```js
const { id, title } = this.props.location.state || {}
```

当获取不到 `state` 时，则用空对象代替

>这里的 state 和状态里的 state 有所不同

## 九、React 路由跳转

### 1. push 与 replace 模式

默认情况下，开启的是 push 模式，也就是说，每次点击跳转，都会向栈中压入一个新的地址，在点击返回时，可以返回到上一个打开的地址，

![react-router-push](/assets/26.png)

就像上图一样，我们每次返回都会返回到上一次点击的地址中

当我们在读消息的时候，有时候我们可能会不喜欢这种繁琐的跳转，我们可以开启 replace 模式，这种模式与 push 模式不同，它会将当前地址替换成点击的地址，也就是**替换**了新的栈顶

我们只需要在需要开启的链接上加上 `replace` 即可

```JSX
<Link replace to={{ pathname: '/home/message/detail', state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>
```

![react-router-replace](/assets/27.png)

### 2. 编程式路由导航

我们可以采用绑定事件的方式实现路由的跳转，我们在按钮上绑定一个 onClick 事件，当事件触发时，我们执行一个回调 replaceShow

这个函数接收两个参数，用来仿制默认的跳转方式，第一个是点击的 id 第二个是标题

我们在回调中，调用 `this.props.location` 对象下的 replace 方法

```jsx
replaceShow = (id, title) => {
  this.props.history.replace(`/home/message/detail/${id}/${title}`)
}
```

同时我们可以借助 `this.props.history` 身上的 API 实现路由的跳转，例如 `go`、`goBack` 、`goForward`

### 3. withRouter

当我们需要在页面内部添加回退前进等按钮时，由于这些组件我们一般通过一般组件的方式去编写，因此我们会遇到一个问题，无法获得 history 对象，这正是因为我们采用的是一般组件造成的。

![dui](/assets/28.png)

只有路由组件才能获取到 history 对象

因此我们需要如何解决这个问题呢

我们可以利用 `react-router-dom` 对象下的 `withRouter` 函数来对我们导出的 `Header` 组件进行包装，这样我们就能获得一个拥有 `history` 对象的一般组件

我们需要对哪个组件包装就在哪个组件下引入

```jsx
// Header/index.jsx
import { withRouter } from 'react-router-dom'
// 在最后导出对象时，用 `withRouter` 函数对 index 进行包装
export default withRouter(index);
```

### 4. BrowserRouter 和 HashRouter 的区别

**它们的底层实现原理不一样**

对于 BrowserRouter 来说它使用的是 React 为它封装的 history API ，这里的 history 和浏览器中的 history 有所不同噢！通过操作这些 API 来实现路由的保存等操作，但是这些 API 是 H5 中提出的，因此不兼容 IE9 以下版本。

对于 HashRouter 而言，它实现的原理是通过 URL 的哈希值，但是这句话我不是很理解，用一个简单的解释就是

我们可以理解为是锚点跳转，因为锚点跳转会保存历史记录，从而让 HashRouter 有了相关的前进后退操作，HashRouter 不会将 `#` 符号后面的内容请求。兼容性更好！

**地址栏的表现形式不一样**

* `HashRouter` 的路径中包含 `#` ，例如 `localhost:3000/#/demo/test`

**刷新后路由 state 参数改变**

1. 在BrowserRouter 中，state 保存在history 对象中，刷新不会丢失
2. HashRouter 则刷新会丢失 state


# 四、antd 组件库的基本使用

## 一、Antd 组件基本使用

使用 `Antd` 组件非常的简单

引包 ----- 暴露 ---- 使用

首先我们通过组件库来实现一个简单的按钮

**第一步**

安装并引入 `antd` 包

使用命令下载这个组件库

```js
yarn add antd
```

在我们需要使用的文件下引入，我这里是在 `App.jsx` 内引入

```js
import { Button } from 'antd'
```

在引入的同时，暴露出要使用的组件名 `Button`

推荐去[官方文档](https://ant.design/components/button-cn/)查看，都会有代码解释

现在我们可以在 App 中使用 `Button` 组件

```jsx
<div>
    App..
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
</div>
```

我这里使用了几种按钮

但是就这样你会发现按钮少了样式

我们还需要引入 `antd` 的 CSS 文件

```less
@import '/node_modules/antd/dist/antd.less';
```

可以在 `node_modules` 文件中的 `antd` 目录下的 `dist` 文件夹中找到相应的样式文件，引入即可

即可成功引入 `antd` 组件

## 二、自定义主题颜色

由于这些组件采用的颜色，都是支付宝蓝，有时候我们不想要这样的颜色，想要用其他的配色，这当然是可以实现的，我们需要引用一些库和更改一些配置文件来实现

在视频中，老师讲解的是 `3.x` 版本中的实现方法，这种方法需要去暴露 React 中的配置文件，这种操作是不可返回的，一旦暴露就不可回收。我觉得这不是一个好方法~

在 `antd` 最新版中，引入了 `craco` 库，我们可以使用 `craco` 来实现自定义的效果

首先我们需要安装 `craco`

```js
yarn add @craco/craco
```

同时我们需要更改 `package.json` 中的启动文件

```js
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
  "eject": "react-scripts eject"
},
```

更改成 `craco` 执行

接下来我们需要在根目录下新建一个 `craco.config.js` 文件，用于配置自定义内容

```js
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': 'skyblue' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
```

其实它就是用来操作 `less` 文件的全局颜色

简单的说，`antd` 组件是采用 `less` 编写的，我们需要通过重新配置的方式去更改它的值

同时我们需要将我们先前的 `App.css` 文件更改为 `App.less` 文件，在当中引入我们的 `less` 文件

```less
@import '/node_modules/antd/dist/antd.less';
```

注意一定要**添加分号结尾**，这是一个非常容易犯的错误

![1](/assets/29.png)

可见，我们成功的将主题色修改成了红色

>antd ui组件库就记这么多，还有样式的按需引入没有记录，不太喜好暴露 React 配置文件...

# 五、redux 基本使用

## 一、什么情况使用 Redux ？

首先，我们先明晰 `Redux` 的作用 ，实现集中式状态管理。

`Redux` 适用于多交互、多数据源的场景。简单理解就是**复杂**

从组件角度去考虑的话，当我们有以下的应用场景时，我们可以尝试采用 `Redux` 来实现

1. 某个组件的状态需要共享时
2. 一个组件需要改变其他组件的状态时
3. 一个组件需要改变全局的状态时

除此之外，还有很多情况都需要使用 Redux 来实现（还没有学 hook，或许还有更好的方法）

![1](/assets/30.png)

这张图，非常形象的将纯 React 和 采用 Redux 的区别体现了出来

## 二、Redux 的工作流程

![1](/assets/31.png)

首先组件会在 Redux 中派发一个 `action` 方法，通过调用 `store.dispatch` 方法，将 `action` 对象派发给 `store` ，当 `store` 接收到 `action` 对象时，会将先前的 `state` 与传来的 `action` 一同发送给 `reducer` `，reducer` 在接收到数据后，进行数据的更改，返回一个新的状态给 `store` ，最后由 `store` 更改 `state`

![1](/assets/6.gif)

## 三、Redux 三个核心概念

### 1. store

`store` 是 Redux 的核心，可以理解为是 Redux 的数据中台，我们可以将任何我们想要存放的数据放在 `store` 中，在我们需要使用这些数据时，我们可以从中取出相应的数据。因此我们需要先创建一个 `store` ，在 Redux 中可以使用 `createStore` API 来创建一个 `store`

在生产中，我们需要在 `src` 目录下的 `redux` 文件夹中新增一个 `store.js` 文件，在这个文件中，创建一个 `store` 对象，并暴露它

因此我们需要从 `redux` 中暴露两个方法

```js
import {
    createStore,
    applyMiddleware
} from 'redux'
```

并引入为 count 组件服务的 reducer

```js
import countReducer from './count_reducer'
```

最后调用 `createStore` 方法来暴露 `store`

```js
export default createStore(countReducer, applyMiddleware(thunk))
```

在 `store` 对象下有一些常用的内置方法

获取当前时刻的 `store` ，我们可以采用 `getStore` 方法

```js
const state = store.getState();
```

在前面我们的流程图中，我们需要通过 `store` 中的 `dispatch` 方法来派生一个 `action` 对象给 `store`

```js
store.dispatch(`action对象`)
```

最后还有一个 `subscribe` 方法，这个方法可以帮助我们订阅 `store` 的改变，只要 `store` 发生改变，这个方法的回调就会执行

为了监听数据的更新，我们可以将 `subscribe` 方法绑定在组件挂载完毕生命周期函数上，但是这样，当我们的组件数量很多时，会比较的麻烦，因此我们可以直接将 `subscribe` 函数用来监听整个 `App` 组件的变化

```js
store.subscribe(() => {
    ReactDOM.render( < App /> , document.getElementById('root'))
})
```

### 2. action

`action` 是 `store` 中唯一的数据来源，一般来说，我们会通过调用 `store.dispatch` 将 action 传到 store

我们需要传递的 `action` 是一个对象，它必须要有一个 `type` 值

例如，这里我们暴露了一个用于返回一个 `action` 对象的方法

```js
export const createIncrementAction = data => ({
    type: INCREMENT,
    data
})
```

我们调用它时，会返回一个 `action` 对象

### 3. reducer

在 Reducer 中，我们需要指定状态的操作类型，要做怎样的数据更新，因此这个类型是必要的。

reducer 会根据 action 的指示，对 state 进行对应的操作，然后返回操作后的 state

如下，我们对接收的 action 中传来的 type 进行判断

```js
export default function countReducer(preState = initState, action) {
    const {
        type,
        data
    } = action;
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }
}
```

更改数据，返回新的状态

## 四、创建 constant 文件

在我们正常的编码中，有可能会出现拼写错误的情况，但是我们会发现，拼写错误了不一定会报错，因此就会比较难搞。

我们可以在 `redux` 目录下，创建一个 `constant` 文件，这个文件用于定义我们代码中常用的一些变量，例如

```js
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'
```

将这两个单词写在 `constant` 文件中，并对外暴露，当我们需要使用时，我们可以引入这个文件，并直接使用它的名称即可

直接使用 `INCREMENT` 即可

## 五、实现异步 action

一开始，我们直接调用一个异步函数，这虽然没有什么问题，但是难道 redux 就不可以实现了吗？

```js
incrementAsync = () => {
    const { value } = this.selectNumber
    const { count } = this.state;
    setTimeout(() => {
        this.setState({ count: count + value * 1 })
    }, 500);
}
```

我们可以先尝试将它封装到 `action` 对象中调用

```js
export const createIncrementAsyncAction = (data, time) => {
    // 无需引入 store ，在调用的时候是由 store 调用的
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}
```

当我们点击异步加操作时，我们会调用这个函数，在这个函数里接收一个延时加的时间，还有action所需的数据，和原先的区别只在于返回的时一个定时器函数

但是如果仅仅这样，很显然是会报错的，它默认需要接收一个对象

如果我们需要实现传入函数，那我们就需要告诉：你只需要默默的帮我执行以下这个函数就好！

这时我们就需要引入中间件，在原生的 `redux` 中暴露出 `applyMiddleware` 中间件执行函数，并引入 `redux-thunk` 中间件（需要手动下载）

```js
import thunk from 'redux-thunk'
```

通过第二个参数传递下去就可以了

```js
export default createStore(countReducer, applyMiddleware(thunk))
```

注意：异步 action 不是必须要写的，完全可以自己等待异步任务的结果后再去分发同步action

>采用 `react-thunk` 能让异步代码像同步代码一样执行，在 `redux` 中我们也是可以实现异步的，但是这样我们的代码中会有很多异步的细节，这不是我们想看到的，利用 `react-thunk` 之类的库，就能让我们只关心我们的业务

## 六、Redux 三大原则

理解好 Redux 有助于我们更好的理解接下来的 React -Redux

### 1. 第一个原则

**单向数据流**：整个 Redux 中，数据流向是单向的

UI 组件 ---> action ---> store ---> reducer ---> store

### 2. 第二个原则

**state 只读**：在 Redux 中不能通过直接改变 state ，来控制状态的改变，如果想要改变 state ，则需要触发一次 action。通过 action 执行 reducer

### 3. 第三个原则

**纯函数执行**：每一个reducer 都是一个纯函数，不会有任何副作用，返回是一个新的 state，state 改变会触发 store 中的 subscribe

# 六、React-Redux 基本使用

## 一、容器组件和 UI 组件

1. 所有的 UI 组件都需要有一个容器组件包裹
2. 容器组件来负责和 Redux 打交道，可以随意使用 Redux 的API
3. UI 组件无任何 Redux API
4. 容器组件用于处理逻辑，UI 组件只会负责渲染和交互，不处理逻辑

![1](/assets/32.png)

在我们的生产当中，我们可以直接将 UI 组件写在容器组件的代码文件当中，这样就无需多个文件

首先，我们在 src 目录下，创建一个 `containers` 文件夹，用于存放各种容器组件，在该文件夹内创建 `Count` 文件夹，即表示即将创建 Count 容器组件，再创建 `index.jsx` 编写代码

要实现容器组件和 UI 组件的连接，我们需要通过 `connect` 来实现

```js
// 引入UI组件
import CountUI from '../../components/Count'
// 引入 connect 连接UI组件
import {connect} from 'react-redux'
// 建立连接
export default connect()(CountUI)
```

## 二、Provider

由于我们的状态可能会被很多组件使用，所以 React-Redux 给我们提供了一个 Provider 组件，可以全局注入 redux 中的 store ，只需要把 Provider 注册在根部组件即可

例如，当以下组件都需要使用 store 时，我们需要这么做，但是这样徒增了工作量，很不便利

```js
<Count store={store}/>
{/* 示例 */}
<Demo1 store={store}/>
<Demo1 store={store}/>
<Demo1 store={store}/>
<Demo1 store={store}/>
<Demo1 store={store}/>
```

我们可以这么做：在 src 目录下的 `index.js` 文件中，引入 `Provider` ，直接用 `Provider` 标签包裹 `App` 组件，将 `store` 写在 `Provider` 中即可

```js
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

这样我们在 `App.jsx` 文件中，组件无需手写指定 `store` ，即可使用 `store`

## 三、connect

在前面我们看到的 react-redux 原理图时，我们会发现容器组件需要给 UI 组件传递状态和方法，并且是通过 `props` 来传递，看起来很简单。但是，我们会发现容器组件中似乎没有我们平常传递 `props` 的情形

这时候就需要继续研究一下容器组件中的唯一一个函数 `connect`

connect 方法是一个连接器，用于连接容器组件和 UI 组件，它第一次执行时，接收4个参数，这些参数都是**可选**的，它执行的执行的结果还是一个函数，第二次执行接收一个 UI 组件

第一次执行时的四个参数：`mapStateToProps` 、`mapDispatchToProps` 、`mergeProps`、`options`

### mapStateToProps

```js
const mapStateToProps = state => ({ count: state })
```

它接收 `state` 作为参数，并且返回一个对象，这个对象标识着 UI 组件的同名参数，

返回的对象中的 key 就作为传递给 UI 组件 props 的 key，value 就作为 props 的 value

如上面的代码，我们可以在 UI 组件中直接通过 props 来读取 `count` 值

```js
<h1>当前求和为：{this.props.count}</h1>
```

这样我们就打通了 UI 组件和容器组件间的状态传递，那如何传递方法呢？

### mapDispatchToProps

connect 接受的第二个参数是 `mapDispatchToProps` 它是用于建立 UI 组件的参数到 `store.dispacth` 方法的映射

我们可以把参数写成对象形式，在这里面定义 action 执行的方法，例如 jia 执行什么函数，`jian` 执行什么函数？

我们都可以在这个参数中定义，如下定义了几个方法对应的操作函数

```js
{
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction
}
```

写到这里其实 `connect` 已经比较完善了，但是你可以仔细想想 `redux` 的工作流程

![1](/assets/31.png)

似乎少了点什么，我们在这里调用了函数，创建了 `action` 对象，但是好像 `store` 并没有执行 `dispatch` ，那是不是断了呢？执行不了呢？

其实这里 `react-redux` 已经帮我们做了优化，当调用 `actionCreator` 的时候，会立即发送 `action` 给 `store` 而不用手动的 `dispatch`

* 自动调用 dispatch

## 四、完整开发

首先我们在 `containers` 文件夹中，直接编写我们的容器组件，无需编写 UI 组件

先打 `rcc` 打出指定代码段，然后暴露出 `connect` 方法

```js
import { connect } from 'react-redux'
```

从 `action` 文件中暴露创建 `action` 的方法

```js
import {createIncrementAction} from '../../redux/count_action'
```

编写 UI 组件，简单写个 demo，绑定 props 和方法

```js
return (
    <div>
        <h2>当前求和为：{this.props.count}</h2>
        <button onClick={this.add}>点我加1</button>
    </div>
);
```

调用 `connect` 包装暴露 UI 组件

```js
export default connect(
    state => ({ count: state }),// 状态
    { jia: createIncrementAction } // 方法
)(Count);
```

第一次执行的参数就直接传递 `state` 和一个指定 `action` 的对象

# 七、数据共享

## 一、编写 Person 组件

>上面的 Count 组件，已经在前面几篇写过了，但是我没有记录详细的实现过程，只是做了一些小小的总结（我摸鱼了）

不管如何，我们先来实现一个 Person 组件吧

首先我们需要在 `containers` 文件夹下编写 Person 组件的**容器组件**

如何编写一个容器组件呢？（上一篇也讲过了）

首先我们需要编写 `index.jsx` 文件，在这个文件里面编写 Person 组件的 UI **组件**，并使用 `connect` 函数将它包装，**映射它的状态和方法**

### 编写 UI 组件架构

```js
<div>
    <h2>我是 Person 组件,上方组件求和为:{this.props.countAll}</h2>
    <input ref={c => this.nameNode = c} type="text" placeholder="输入名字" />
    <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄" />
    <button onClick={this.addPerson}>添加</button>
    <ul>
        {
            this.props.persons.map((p) => {
                return <li key={p.id}> {p.name}--{p.age}</li>
            })
        }
    </ul>
</div>
```

我们可以看到这里采用了 `ref` 来获取到当前事件触发的节点，并通过 `this.addPerson` 的方式给按钮绑定了一个点击事件

### 编写点击事件回调

```js
addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = { id: nanoid(), name, age }
    this.props.add(personObj)
    this.nameNode.value = ''
    this.ageNode.value = ''
}
```

在这里我们需要处理输入框中的数据，并且将这些数据用于创建一个 `action` 对象，传递给 `store` 进行状态的更新

在这里我们需要回顾的是，这里我们使用了一个 `nanoid` 库，这个库我们之前也有使用过

**下载，引入，暴露**

```js
import { nanoid } from 'nanoid'
```

暴露的 `nanoid` 是一个函数，我们每一次调用时，都会返回一个不重复的数，用于确保 `id` 的唯一性，同时在后面的 `map` 遍历的过程中，我们将 `id` 作为了 `key` 值，这样也确保了 `key` 的唯一性，关于 `key` 的作用，可以看看 `diffing` 算法的文章

### 状态管理

在这里我们需要非常熟练的采用 `this.props.add` 的方式来更新状态

那么它是如何实现状态更新的呢？我们来看看

在我们调用 `connect` 函数时，我们第一次调用时传入的第二个参数，就是用于传递方法的，我们传递了一个 `add` 方法

```js
export default connect(
    state => ({ persons: state.person, countAll: state.count }),//映射状态
    { add: createAddPersonAction }
)(Person);
```

它的原词是：**mapDispatchToProps**

我的理解是，传入的东西会被映射映射成 `props` 对象下的方法，这也是我们能够在 `props` 下访问到 `add` 方法的原因

>对于这一块 `connect` ，我们必须要能够形成自己的理解，这里非常的重要，它实现了数据的交互，不至于一个组件，而是全部组件

### 我是如何理解的呢？

>想象一个 store 仓库，在我们这个案例当中，Count 组件需要存放 count 值在 store 中，Person 组件需要存放新增用户对象在 store 中，我们要把这两个数据存放在一个对象当中。当某个组件需要使用 store 中的值时，可以通过 connect 中的两个参数来获取，例如这里我们需要使用到 Count 组件的值，可以通过 `.count` 来从 store 中取值。

也就是说，所有的值都存放在 store 当中，通过点运算符来获取，所有的操作 store 的方法都需要通过 action 来实现。**当前组件需要使用的数据都需要在 connect 中暴露**

## 二、编写 reducer

首先，我们需要明确 reducer 的作用，它是用来干什么的？

**根据操作类型来指定状态的更新**

也就是说当我们点击了**添加按钮**后，会将输入框中的数据整合成一个对象，作为当前 action 对象的 data 传递给 reducer

我们可以看看我们编写的 action 文件，和我们想的一样

```js
import { ADD_PERSON } from "../constant";
// 创建一个人的action 对象
export const createAddPersonAction = (personObj) => ({
  type: ADD_PERSON,
  data: personObj,
});
```

当 reducer 接收到 action 对象时，会对 type 进行判断

```js
export default function personReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data,...preState]
    default:
      return preState
  }
}
```

一般都采用 `switch` 来编写

**这里有个值得注意的地方是**，这个 `personReducer` 函数是一个纯函数，什么是纯函数呢？这个是高阶函数部分的知识了，**纯函数是一个不改变参数的函数，也就是说，传入的参数是不能被改变的**。

为什么要提这个呢？在我们 return 时，有时候会想通过**数组的 API** 来在数组前面塞一个值，不也可以吗？

但是我们要采用 `unshirt` 方法，这个方法是会改变原数组的，也就是我们传入的参数会被改变，因此这样的方法是不可行的！

## 三、打通数据共享

写到这里，或许已经写完了，但是有些细节还是需要注意一下

采用 Redux 来进行组件的数据交互真的挺方便。

我们可以在 Count 组件中引入 Person 组件存在 store 中的状态。

```js
export default connect(state => ({ count: state.count, personNum: state.person.length }),
    {
       ...
    }
)(Count)
```

在这里我们将 store 中的 person 数组的长度暴露出来这样 Count 组件就可以直接通过 props 来使用了

同样的我们也可以在 Person 组件中使用 Count 组件的值

从而实现了我们的这个 Demo

## 四、最终优化

1. 利用对象的简写方法，将键名和键值同名，从而只写一个名即可

2. 合并 reducer ，我们可以将多个 reducer文件 写在一个 index 文件当中，需要采用 combineReducers 来合并

# 八、React 扩展

## 1. setState

### setState更新状态的2种写法

```
	(1). setState(stateChange, [callback])------对象式的setState
            1.stateChange为状态改变对象(该对象可以体现出状态的更改)
            2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用
					
	(2). setState(updater, [callback])------函数式的setState
            1.updater为返回stateChange对象的函数。
            2.updater可以接收到state和props。
            4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。
总结:
		1.对象式的setState是函数式的setState的简写方式(语法糖)
		2.使用原则：
				(1).如果新状态不依赖于原状态 ===> 使用对象方式
				(2).如果新状态依赖于原状态 ===> 使用函数方式
				(3).如果需要在setState()执行后获取最新的状态数据, 
					要在第二个callback函数中读取
```



------



## 2. lazyLoad

### 路由组件的lazyLoad

```js
	//1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
	const Login = lazy(()=>import('@/pages/Login'))
	
	//2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
	<Suspense fallback={<h1>loading.....</h1>}>
        <Switch>
            <Route path="/xxx" component={Xxxx}/>
            <Redirect to="/login"/>
        </Switch>
    </Suspense>
```



------



## 3. Hooks

#### 1. React Hook/Hooks是什么?

```
(1). Hook是React 16.8.0版本增加的新特性/新语法
(2). 可以让你在函数组件中使用 state 以及其他的 React 特性
```

#### 2. 三个常用的Hook

```
(1). State Hook: React.useState()
(2). Effect Hook: React.useEffect()
(3). Ref Hook: React.useRef()
```

#### 3. State Hook

```
(1). State Hook让函数组件也可以有state状态, 并进行状态数据的读写操作
(2). 语法: const [xxx, setXxx] = React.useState(initValue)  
(3). useState()说明:
        参数: 第一次初始化指定的值在内部作缓存
        返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
(4). setXxx()2种写法:
        setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
        setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值
```

#### 4. Effect Hook

```
(1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
(2). React中的副作用操作:
        发ajax请求数据获取
        设置订阅 / 启动定时器
        手动更改真实DOM
(3). 语法和说明: 
        useEffect(() => { 
          // 在此可以执行任何带副作用操作
          return () => { // 在组件卸载前执行
            // 在此做一些收尾工作, 比如清除定时器/取消订阅等
          }
        }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
    
(4). 可以把 useEffect Hook 看做如下三个函数的组合
        componentDidMount()
        componentDidUpdate()
    	componentWillUnmount() 
```

#### 5. Ref Hook

```
(1). Ref Hook可以在函数组件中存储/查找组件内的标签或任意其它数据
(2). 语法: const refContainer = useRef()
(3). 作用:保存标签对象,功能与React.createRef()一样
```



------



## 4. Fragment

### 使用

	<Fragment><Fragment>
	<></>

### 作用

> 可以不用必须有一个真实的DOM根标签了



<hr/>

## 5. Context

### 理解

> 一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信

### 使用

```js
1) 创建Context容器对象：
	const XxxContext = React.createContext()  
	
2) 渲染子组时，外面包裹xxxContext.Provider, 通过value属性给后代组件传递数据：
	<xxxContext.Provider value={数据}>
		子组件
    </xxxContext.Provider>
    
3) 后代组件读取数据：

	//第一种方式:仅适用于类组件 
	  static contextType = xxxContext  // 声明接收context
	  this.context // 读取context中的value数据
	  
	//第二种方式: 函数组件与类组件都可以
	  <xxxContext.Consumer>
	    {
	      value => ( // value就是context中的value数据
	        要显示的内容
	      )
	    }
	  </xxxContext.Consumer>
```

### 注意

	在应用开发中一般不用context, 一般都用它的封装react插件



<hr/>


## 6. 组件优化

### Component的2个问题 

> 1. 只要执行setState(),即使不改变状态数据, 组件也会重新render() ==> 效率低
>
> 2. 只当前组件重新render(), 就会自动重新render子组件，纵使子组件没有用到父组件的任何数据 ==> 效率低

### 效率高的做法

>  只有当组件的state或props数据发生改变时才重新render()

### 原因

>  Component中的shouldComponentUpdate()总是返回true

### 解决

	办法1: 
		重写shouldComponentUpdate()方法
		比较新旧state或props数据, 如果有变化才返回true, 如果没有返回false
	办法2:  
		使用PureComponent
		PureComponent重写了shouldComponentUpdate(), 只有state或props数据有变化才返回true
		注意: 
			只是进行state和props数据的浅比较, 如果只是数据对象内部数据变了, 返回false  
			不要直接修改state数据, 而是要产生新数据
	项目中一般使用PureComponent来优化



<hr/>


## 7. render props

### 如何向组件内部动态传入带内容的结构(标签)?

	Vue中: 
		使用slot技术, 也就是通过组件标签体传入结构  <A><B/></A>
	React中:
		使用children props: 通过组件标签体传入结构
		使用render props: 通过组件标签属性传入结构,而且可以携带数据，一般用render函数属性

### children props

	<A>
	  <B>xxxx</B>
	</A>
	{this.props.children}
	问题: 如果B组件需要A组件内的数据, ==> 做不到 

### render props

	<A render={(data) => <C data={data}></C>}></A>
	A组件: {this.props.render(内部state数据)}
	C组件: 读取A组件传入的数据显示 {this.props.data} 



<hr/>

## 8. 错误边界

#### 理解：

错误边界(Error boundary)：用来捕获后代组件错误，渲染出备用页面

#### 特点：

只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误

##### 使用方式：

getDerivedStateFromError配合componentDidCatch

```js
// 生命周期函数，一旦后台组件报错，就会触发
static getDerivedStateFromError(error) {
    console.log(error);
    // 在render之前触发
    // 返回新的state
    return {
        hasError: true,
    };
}

componentDidCatch(error, info) {
    // 统计页面的错误。发送请求发送到后台去
    console.log(error, info);
}
```
## 9. 组件通信方式总结

#### 组件间的关系：

- 父子组件
- 兄弟组件（非嵌套组件）
- 祖孙组件（跨级组件）

#### 几种通信方式：

		1.props：
			(1).children props
			(2).render props
		2.消息订阅-发布：
			pubs-sub、event等等
		3.集中式管理：
			redux、dva等等
		4.conText:
			生产者-消费者模式

#### 比较好的搭配方式：
		父子组件：props
		兄弟组件：消息订阅-发布、集中式管理
		祖孙组件(跨级组件)：消息订阅-发布、集中式管理、conText(开发用的少，封装插件用的多)


# 九、React核心 -- React-Hooks

## 一、 hooks 存在的意义

1. hooks 之间的状态是独立的，有自己独立的上下文，不会出现混淆状态的情况

2. 让函数有了状态管理

3. 解决了 组件树不直观、类组件难维护、逻辑不易复用的问题

4. 避免函数重复执行的副作用

## 二、应用场景

1. 利用 hooks 取代生命周期函数
2. 让组件有了状态
3. 组件辅助函数
4. 处理发送请求
5. 存取数据
6. 做好性能优化

## 三、hooks API

从 `react` 中引入

### 1. useState

给函数组件添加状态

* 初始化以及更新组件状态

```js
const [count, setCount] = React.useState(0)
```

接收一个参数作为初始值，返回一个数组：第一个是状态变量，第二个是修改变量的函数

### 2. useEffect

副作用 hooks

* 给没有生命周期的组件，添加结束渲染的信号

注意：

* render 之后执行的 hooks

第一个参数接收一个函数，在组件更新的时候执行

第二个参数接收一个数组，用来表示需要追踪的变量，依赖列表，只有依赖更新的时候才会更新内容

第一个参数的返回值，返回一个函数，在 `useEffect` 执行之前，都会先执行里面返回的函数

一般用于添加销毁事件，这样就能保证只添加一个

```js
React.useEffect(() => {
    console.log('被调用了');
    return () => {
        console.log('我要被卸载了');
    }
}, [count])
```

### 3. useLayoutEffect

和 `useEffect` 很类似

它的作用是：在 DOM 更新完成之后执行某个操作

注意：
* 有 DOM 操作的副作用 hooks
* 在 DOM 更新之后执行

>执行时机在 `useEffect` 之前，其他都和 `useEffect` 都相同

`useEffect` 执行时机在 **render 之后**

`useLayoutEffect` 执行时机在 **DOM 更新之后**

### 4. useMemo

作用：让组件中的函数跟随状态更新

注意：优化函数组件中的功能函数

**为了避免由于其他状态更新导致的当前函数的被迫执行**

第一个参数接收一个函数，第二个参数为数组的依赖列表，返回一个值

```js
const getDoubleNum = useMemo(() => {
    console.log('ddd')
    return 2 * num
}, [num])
```

### 5. useCallback

作用：跟随状态更新执行

注意：
* 只有依赖项改变时才执行
* `useMemo( () => fn, deps)` 相当于 `useCallback(fn, deps)`

不同点：
1. `useCallback` **返回的是一个函数，不再是值**
2. `useCallback` `缓存的是一个函数，useMemo` 缓存的是一个值，**如果依赖不更新，返回的永远是缓存的那个函数**
3. 给子组件中传递 `props` 的时候，如果当前组件不更新，不会触发子组件的重新渲染

### 6. useRef

作用：长久保存数据

注意事项：
* 返回一个子元素索引，这个索引在整个生命周期中保持不变
* 对象发生改变时，不通知，属性变更不重新渲染

1. 保存一个值，在整个生命周期中维持不变
2. 重新赋值 `ref.current` 不会触发重新渲染
3. 相当于**创建一个额外的容器来存储数据**，我们可以在外部拿到这个值

当我们通过正常的方式去获取计时器的 `id` 是无法获取的，需要通过 `ref`

```js
useEffect(() => {
    ref.current = setInterval(() => {
        setNum(num => num + 1)
    }, 400)
}, [])
useEffect(() => {
    if (num > 10) {
        console.log('到十了');
        clearInterval(ref.current)
    }
}, [num])
```

### 7. useContext

作用：带着子组件渲染

注意：
* 上层数据发生改变，肯定会触发重新渲染

1. 我们需要引入 `useContext` 和 `createContext` 两个内容
2. 通过 `createContext` 创建一个 `Context` 句柄
3. 通过 `Provider` 确定数据共享范围
4. 通过 `value` 来分发数据
5. 在子组件中，通过 `useContext` 来获取数据

```js
import React, { useContext, createContext } from 'react'
const Context = createContext(null)
export default function Hook() {
    const [num, setNum] = React.useState(1)

    return (
        <h1>
            这是一个函数组件 - {num}
        // 确定范围
            <Context.Provider value={num}>
                <Item1 num={num} />
                <Item2 num={num} />
            </Context.Provider>
        </h1>
    )
}
function Item1() {
    const num = useContext(Context)
    return <div>子组件1  {num}</div>
}
function Item2() {
    const num = useContext(Context)
    return <div>子组件2 {num}</div>
}
```

### 8. useReducer

作用：去其他地方借资源

注意：函数组件的 Redux 的操作

1. 创建数据仓库 `store` 和管理者 `reducer`
2. 通过 `useReducer(store,dispatch)` 来获取 `state` 和 `dispatch`

```js
const store = {
    num: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case "":
            return
        default:
            return
    }
}
    const [state, dispatch] = useReducer(reducer, store)
```

通过 `dispatch` 去派发 `action`

### 9. 自定义 hooks

放在 `utils` 文件夹中，以 `use` 开头命名

例如：模拟数据请求的 Hooks
```js
import React, { useState, useEffect } from "react";
function useLoadData() {
  const [num, setNum] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      setNum(2);
    }, 1000);
  }, []);
  return [num, setNum];
}
export default useLoadData;
```

减少代码耦合

我们希望 reducer 能让每个组件来使用，我们自己写一个 hooks

自定义一个自己的 LocalReducer

```js
import React, { useReducer } from "react";
const store = { num: 1210 };
const reducer = (state, action) => {
  switch (action.type) {
    case "num":
      return { ...state, num: action.num };
    default:
      return { ...state };
  }
};
function useLocalReducer() {
  const [state, dispatch] = useReducer(reducer, store);
  return [state, dispatch];
}
export default useLocalReducer;
```

1. 引入 react 和自己需要的 hook
2. 创建自己的hook函数
3. 返回一个数组，数组中第一个内容是数据，第二个是修改数据的函数
4. 暴露自定义 hook 函数出去
5. 引入自己的业务组件
