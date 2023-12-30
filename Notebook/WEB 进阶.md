#   1 (July 15) WEB 基础知识



## 1 URL

- schema :  相当于url的类型，通常用来表示访问协议，HTTP 

- userinfo ： 访问资源的用户信息

- host ： 资源所在主机，可选

- port： 可选，不填则使用协议默认端口

- path ： 资源所在路径

- query ： 网页传参

- Fragment： 指定资源中的某个片段，网页中的锚，可选

  

## 2 URL常见形式

后段服务连接数据库，有赖于数据库的服务器地址、端口、用户、密码等信息，这些信息可以组成一个URL，所谓的数据库连接串：

- HTTP. 
- HTTPS
- FTP
- Mailto / Tel

举例：认识网页报错的代码对应的东西和内容

## 3 HTTP Methods

- GET   请求指定页面信息，返回实体主体
- HEAD      返回的响应 中没有具体的内容，用于获取报头
- POST    （GET和POST安全系数不一样）post更加安全一些，数据被包含在请求体中
- PUT    客户端向服务器传送的数据取代指定饿文档内容
- DELETE
- OPTIONS    描述目标资源的通信选项
- TRACE
- PATCH

## 4 浏览器输入URL地址后会发生什么*

- URL解析     输入的URL地址解析
- DNS解析： 解析IP地址发送给DNS域名服务器
- TCP连接建立 ： **三次握手**
- 浏览器发送HTTP请求： 使用（GET、POST）
- 服务器响应： 响应状态码，响应头，响应体
- 响应处理： 根据响应头中的信息判断响应内容的类型，并将响应体中的数据进行解析和处理
- **渲染页面**： 收到响应后，浏览器会解析HTML，根据CSS和JACASCRIPT等资源进行页面的渲染和呈现
- **下载资源：** 解析HTML时，如果发现引用啦其他资源则4次挥手
- **执行脚步：**如果页面包含<u>Javascript</u>代码，则会执行这些脚本，实现交互、动态效果和数据处理等功能
- **页面展示：**浏览器解析后的页面内容进行布局、绘制最终展示给用户

## 5 WEB应用基础知识

![image-20230715115012607](/Users/skyrim/Library/Application Support/typora-user-images/image-20230715115012607.png)

- 用到**Javascript,python,java**

![image-20230715115426684](/Users/skyrim/UNSW /WEB进阶/:Users:skyrim:Library:Application Support:typora-user-images:image-20230715115426684.png)

- Requirement Analysis : 需求分析，确定，产品经理来确定
- Planning : 确定开发涉及的开发人员
- Software design :
- Software development : 
  - Waterfulll mode : 逐步完成开发，开发周期长
  - Agile Model : 针对特定需求进行开发迭代，开发周期短 （澳洲大部分公司用Agilr Model）**<u>自行阅读相关文章</u>**
- Testing : 手动和自动测试
- Deployment :  应用的过程，手动或者CSCD

### 作业：

1. 看文章
2. 了解如何看URL，输入URL之后会发生什么东西
3. HTML ，CSS，JS的相关东西
4. 下载mobgodb server ,nvm







# Lecture 2  July 18



### HTML & CSS &WEB



### 1.Web 访问方式

HTML+CSS+JS

- HTML : Content Structure 
- CSS : 
- JS
- JS

### 2.HTML 常用语法 

#### 2.1标签和属性

##### HTML的各类标签用途：

###### 1.div\span\p\pre\code\（用于文章的段落，代码，分割不同的块）

**\div\:**     

 The `<div>` tag defines a division or a section in an HTML document.

The `<div>` tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.

The `<div>` tag is easily styled by using the class or id attribute.

**Example:**

<div>This is some text in a div element.</div>

**\span\\** :

The `<span>` tag is much like the `div` element, but <div> is a block-level element and `<span>` is an inline element.（span不同于div是 div是block级别的元素，span是inline级别的元素。

**Example:**

<p>My mother has <span style="color:blue">blue</span> eyes.</p>



**\p\\**  : 

The tag defines a paragraph. （定义一个段落经常用到）

Browsers automatically add a single blank line before and after each `<p>` element.

**Example** :

<p>This is some text in a paragraph.</p> 

**\pre\\**:

Text in a `<pre>` element is displayed in a fixed-width font, and the text preserves both spaces and line breaks. The text will be displayed exactly as written in the HTML source code. （看举例）

**Example:**

<pre> Text in a pre element is displayed in a fixed-width font, and it preserves both      spaces and line breaks </pre>

 **\code\\**:

The `<code>` tag is used to define a piece of computer code. The content inside is displayed in the browser's default monospace font. 

**Tip:** This tag is not deprecated. However, it is possible to achieve richer effect by using CSS (see example below). （插入代码）

**Example:**

<p>The HTML <code>button</code> tag defines a clickable button.</p>  <p>The CSS <code>background-color</code> property defines the background color of an element.</p>





###### 2.\header\main\section\nav\article\aside\footer\\address\  （用于定义文章结构，部分、整体，地址，旁边内容等东西）

**\header\\**:

**Note:** You can have several `<header>` elements in one HTML document. However, `<header>` cannot be placed within a <footer>, <address> or another `<header>`element. （标题名称，不能被footer和address和其他有标题元素的东西替代）

**Example:**

<article>
 <header>
  <h1>A heading here</h1>
  <p>Posted by John Doe</p>
  <p>Some additional information here</p>
 </header>
 <p>Lorem Ipsum dolor set amet....</p>
</article>

**\main\\:**

The content inside the `<main>` element should be **unique** to the document. It should **not contain any content that is repeated across documents such as sidebars**, navigation links, copyright information, site logos, and search forms.（main只能被用于一个文章中的一段）

**Example:**

<main>   <h1>Most Popular Browsers</h1>   <p>Chrome, Firefox, and Edge are the most used browsers today.</p>    <article>     <h2>Google Chrome</h2>     <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>   </article>    <article>     <h2>Mozilla Firefox</h2>     <p>Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p>   </article>    <article>     <h2>Microsoft Edge</h2>     <p>Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer.</p>   </article> </main>

**\section\\:**

The `<section>` tag defines a section in a document. （定义一个文件中的不同部分的内容）

**Example:**

Here are two sections below:

<section>
<h2>WWF History</h2>
<p>The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.</p>
</section>

<section>
<h2>WWF's Symbol</h2>
<p>The Panda has become the symbol of WWF. The well-known panda logo of WWF originated from a panda named Chi Chi that was transferred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
</section>

**\nav\\:**

The `<nav>` tag defines a set of navigation links. （定义一组链接）

**Example:**

<nav>
 <a href="/html/">HTML</a> |
 <a href="/css/">CSS</a> |
 <a href="/js/">JavaScript</a> |
 <a href="/python/">Python</a>
</nav>

**\article\\:**

The `<article>` tag **specifies independent**, self-contained content. （一段独立的段落）

An article should make sense on its own and it should be possible to distribute it **independently from the rest of the site.**

**Example:**

<article> <h2>Google Chrome</h2> <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p> </article>  <article> <h2>Mozilla Firefox</h2> <p>Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p> </article>  <article> <h2>Microsoft Edge</h2> <p>Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer.</p> </article>

**\aside\\:**

The `<aside>` tag defines some content aside from the content **it is placed in.**

The aside content should be indirectly **related to the surrounding content.**

**Tip:** The `<aside>` content is often placed **as a sidebar in a document.**。（将一段文字放置在文章段落的一侧）

**Note:** The `<aside>` element does not render as anything special in a browser. However, you can use CSS to style the `<aside> `element (see example below).

**Example:**

<p>My family and I visited The Epcot center this summer. The weather was nice, and Epcot was amazing! I had a great summer together with my family!</p>  <aside> <h4>Epcot Center</h4> <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p> </aside>

**\footer\\:**

The `<footer>` tag defines a footer for **a document or section. ** （给一个文件或者一部分定义footer）

A `<footer>` element typically **contains:**

- authorship information
- copyright information
- contact information
- sitemap
- back to top links
- related documents

**Example:**

<footer>
 <p>Author: Hege Refsnes</p>
 <p><a href="mailto:hege@example.com">hege@example.com</a></p>
</footer>



**\address\\:**

The text in the `<address>` element usually renders in *italic,* and browsers will always add a line break before and after the `<address>` element.  （地址信息都是斜体的）

**Example:**

<address>
Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br> 
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address>



###### 3.\em\strong\sub\sup\abbr\mark\cite\time （主要用于文章中的特殊上下标和引用、时间、符号、文本加粗等细节）

  **\em\\:**

The `<em>` tag is used to **define emphasized text.** The content inside is typically displayed in *italic*. （给文字斜体）

**Example:**

<p>You <em>have</em> to hurry up!</p>  <p>We <em>cannot</em> live like this.</p>

 **\strong\\:**

The `<strong>` tag is used to define text with **strong importance.** The content inside is typically displayed in **bold**. （加粗文字）

**Example:**

<strong>This text is important!</strong>

 **\sub\\:**

The `<sub>` tag defines subscript text. Subscript text **appears half a character** below the normal line and is sometimes rendered in a smaller font. **Subscript** text can be used for chemical formulas, like H2O.

**Tip:** Use tag to define superscripted text. （给一个文字加下标）

**Example:**

<p>This text contains <sub>subscript</sub> text.</p>

 **\sup\\:**

The `<sup>` tag defines superscript text. Superscript text appears half a character **above the normal line**, and is sometimes rendered in a smaller font. Superscript text can be used for footnotes, l**ike WWW[1]. ** （相当于给一个文字加上标）

**Example:**

<p>This text contains <sup>superscript</sup> text.</p>



 **\abbr\\:**

**Tip:** Use the global `title` attribute to show the description for the abbreviation/acronym when you **mouse over the element.**

**Example:**

<p><dfn><abbr title="Cascading Style Sheets">CSS</abbr> </dfn> is a language that describes the style of an HTML document.</p>

 **\mark\\:**

The `<mark>` tag defines text that **should be marked or highlighted.**（被marked 的元素都是高亮的）

**Example:**

<p>Do not forget to buy <mark>milk</mark> today.</p>

 **\cite\\:**

**Note:** A person's name is not the title of a work. （引用一个人名，通常是斜体的）

The text in the `<cite>` element **usually renders in *italic*.**

**Example:**

<p><cite>The Scream</cite> by Edward Munch. Painted in 1893.</p>

 **\time\\:**

The `<time>` tag **defines a specific time (or datetime).**（定义一个确切的时间）

**Example:**

<p>Open from <time>10:00</time> to <time>21:00</time> every weekday.</p>  <p>I have a date on <time datetime="2008-02-14 20:00">Valentines day</time>.</p>



###### 4.\ul\ol\li\dl\dd\dt\（主要用于列记事本的东西）

######  

**\ul\\:**

The `<ul>` tag defines an **unordered (bulleted) list.**

Use the `<ul>` tag together with the `<li>`tag to create unordered lists.

**Example:**

<ul>
 <li>Coffee</li>
 <li>Tea</li>
 <li>Milk</li>
</ul>

**\ol\\:**

The `<ol>` tag defines **an ordered list.** An ordered list can be numerical or alphabetical.

**Example:**

<ol>   <li>Coffee</li>   <li>Tea</li>   <li>Milk</li> </ol>  <ol start="50">   <li>Coffee</li>   <li>Tea</li>   <li>Milk</li> </ol>

**\li\\:**

The `<li>` tag defines a list item.

The `<li>` tag is used inside ordered lists`<ol>`, unordered lists `<ul>`and in menu lists `<menu>`.

**Example:**

<ol>  
  <li>Coffee</li>   
  <li>Tea</li>  
  <li>Milk</li> </ol> 
<ul>  
  <li>Coffee</li> 
  <li>Tea</li>  
  <li>Milk</li> </ul>

**\dl\\:**

The `<dl>` tag defines a **description list.** （定义一个列表）

**Example:**

<dl>
 <dt>Coffee</dt>
 <dd>Black hot drink</dd>
 <dt>Milk</dt>
 <dd>White cold drink</dd>
</dl>

**\dd\\:**

The `<dd>` tag is used to describe **a term/name in a description list.**（相当于列表中的文字）

**Example:**

<dl>
 <dt>Coffee</dt>
 <dd>Black hot drink</dd>
 <dt>Milk</dt>
 <dd>White cold drink</dd>
</dl>

**\dt\\:**

The `<dt>` tag defines a term/name in a description list ，相当于列表中的小标题

**Example:**

<dl>
 <dt>Coffee</dt>
 <dd>Black hot drink</dd>
 <dt>Milk</dt>
 <dd>White cold drink</dd>
</dl>

###### 5.\caption\table\thead\tbody\th\td\tr\tfoot\  （主要用于表格的书写）



**\caption\\:**

The `<caption>` tag defines a table caption. 相当于表格中的一列的标题

**Example:**

<table>  
  <caption>Monthly savings</caption>  
  <tr>     
    <th>Month</th>    
    <th>Savings</th>  
  </tr>   <tr>   
  <td>January</td>    
  <td>$100</td> 
  </tr>
</table>

**\table\\:**

The `<table>` tag defines an HTML table.

An HTML table consists of one `<table>` element and one or more , consits of `<tr>,<th>` and `<td>` elements.

**Example:**

例如上面的例子

**\thead\:**

The `<thead>` tag is used to group header content in an HTML table.  (用于定义table的头部标题元素Month 和Savings)

**Example:**

<table>   
  <thead>    
    <tr>      
      <th>Month</th>   
      <th>Savings</th>   
    </tr>  
  </thead> 
  <tbody>   
    <tr>    
      <td>January</td>  
      <td>$100</td>   
    </tr>   
    <tr>      
    <td>February</td>  
      <td>$80</td>    
    </tr>  
  </tbody>  
  <tfoot>   
    <tr>     
      <td>Sum</td>  
      <td>$180</td>  
    </tr>  
  </tfoot> </table>

**\tbody\\:**

The `<tbody>` tag is used to group the body content in an HTML table. （用于定义表格当中的每个标题对应的子元素和所含内容）

**Example:**

同上

**\th\\:**

The `<th>` tag defines a header cell in an HTML table.   （在表格的header中加入文字内容要用<th>框起来）

**Example:**

同上的months 和Savings写的时候两边夹住<th>

**\td\\:**

The `<td>` tag defines a standard data cell in an HTML table. (如果一个表格没有标题，则代表这个表格中的不同元素)

**Example:**

<table>  
  <tr>    
    <td>Cell A</td>    
    <td>Cell B</td>  
  </tr>  
  <tr>    
    <td>Cell C</td>   
    <td>Cell D</td>  
  </tr>
</table>

**\tr\\:**

The `<tr>` tag defines a row in an HTML table. （一个<tr>标签下可以包含多个<th> 和<td>标签里包含的内容）

**Example:**

<table>   
  <thead>    
    <tr>      
      <th>Month</th>   
      <th>Savings</th>   
    </tr>  
  </thead> 
  <tbody>   
    <tr>    
      <td>January</td>  
      <td>$100</td>   
    </tr>   
    <tr>      
    <td>February</td>  
      <td>$80</td>    
    </tr>  
  </tbody>  
  <tfoot>   
    <tr>     
      <td>Sum</td>  
      <td>$180</td>  
    </tr>  
  </tfoot> </table>

书写每一行元素则在最前面先加上<tr>代表是一行的内容

**\tfoot\\:**

The `<tfoot>` tag is used to group footer content in an HTML table.

**Note:** The `<tfoot>` element must have one or more tags inside. （tfoot 必须里面包含至少一个以上的标签）

**Example:**

见上面的表格元素大于一个的时候都有tfoot



###### 6.\form\input\textarea\select\option\optgroup\progress\detailist\button\label\ 

(此类标签主要用于制作需要用户输入的区域和交互式的一些按钮，进度条等等)

**\form\\:**

The `<form>` tag is used to create an HTML form for user input.

The `<form>` element can contain one or more of the following form elements:   （form 创建后能让用户输入一些东西配合input等标签使用）

**Example:**

<form action="/action_page.php" method="get">
 <label for="fname">First name:</label>
 <input type="text" id="fname" name="fname"><br><br>
 <label for="lname">Last name:</label>
 <input type="text" id="lname" name="lname"><br><br>
 <input type="submit" value="Submit">
</form>

**\input\\:**

The `<input>` tag specifies an input field where the user can enter data. （input标签后用户可以输入内容）

**Example:**

例子看上面一个东西

**\textarea\\:**

The `<textarea>` tag defines a multi-line text input control. 

（定义一段能多行输入的文字框）

**Example:**

<label for="w3review">Review of W3Schools:</label>

<textarea id="w3review" name="w3review" rows="4" cols="50">
At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies. 
</textarea>

**\select\\:**

The `<select>` element is used to create a drop-down list. （选择器与option配合使用可以选择不同的东西）

**Example:**

<label for="cars">Choose a car:</label>

<select name="cars" id="cars">
 <option value="volvo">Volvo</option>
 <option value="saab">Saab</option>
 <option value="mercedes">Mercedes</option>
 <option value="audi">Audi</option>
</select>

**\option\\:**

（option的用法如上面例子中的，加在多个元素两侧作为select内部的

**Example:**

**\optgroup\\:**

The `<optgroup>` tag is used to group related options in a <select> element (drop-down list).

**Example:**

If you have a long list of options, groups of related options are easier to handle for a user.

**\progress\\:**

The `<progress>` tag represents the completion progress of a task.

(进程模块用于代表一项任务的进度，经常与label标签一起使用)

**Example:**

<label for="file">Downloading progress:</label>
<progress id="file" value="32" max="100"> 32% </progress>

**\detailist\\:**

The `<datalist>` tag specifies a list of pre-defined options for an <input> element.

**Example:**

<h1>The datalist element</h1>

<form action="/action_page.php" method="get">
  <label for="browser">Choose your browser from the list:</label>
  <input list="browsers" name="browser" id="browser">
  <datalist id="browsers">
    <option value="Edge">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>
  <input type="submit">
</form>

<p><strong>Note:</strong> The datalist tag is not supported in Safari 12.0 (or earlier).</p>

(detailist可以用于对要输入的元素进行选择，并配合submit按钮提交)



**\button\\:**

The `<button>` tag defines a clickable button. （定义一个点击的按钮）

**Example:**

<button type="button">Click Me!</button>

Button 用于定义一个按钮可以被点击

**\label\\:**

The `<label>` tag defines a label for several elements:

（标签可以定义不同的元素）

**Example:**

<form action="/action_page.php">
 <input type="radio" id="html" name="fav_language" value="HTML">
 <label for="html">HTML</label><br>
 <input type="radio" id="css" name="fav_language" value="CSS">
 <label for="css">CSS</label><br>
 <input type="radio" id="javascript" name="fav_language"value="JavaScript">
 <label for="javascript">JavaScript</label><br><br>
 <input type="submit" value="Submit">
</form>

###### 7.\img\audio\video\figure\figcaption\embed\object

（此类标签用于图片、视频、对象的一些插入）

**\img\\:**

插入图片用的

**Example:**

<img src="img_girl.jpg" alt="Girl in a jacket" width="500"height="600">

**\audio\\:**

插入音频

**Example:**

<audio controls>   <source src="horse.ogg" type="audio/ogg">   <source src="horse.mp3" type="audio/mpeg">   Your browser does not support the audio tag. </audio>

**\video\\:**

插入视频用的

**Example:**

<video width="320" height="240" controls>   <source src="movie.mp4" type="video/mp4">   <source src="movie.ogg" type="video/ogg">   Your browser does not support the video tag. </video>

**\figure\\:**

The `<figure>` tag specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.

**Example:**

<figure>   <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">   <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption> </figure>



**\figcaption\\:**

The `<figcaption>` element can be placed as the first or last child of the <figure> element.

**Example:**

**\embed\\:**

The `<embed>` tag defines a container for an external resource, such as a web page, a picture, a media player, or a plug-in application 

（embed 标签可以用来定义一个插入的网页、图片、媒体播放器或者一个小程序）

**Example:**

<embed type="image/jpg" src="pic_trulli.jpg" width="300"height="200">

**\object\\:**

The `<object>` tag defines a container for an external resource. （对象标签用于定义external 的资源）

The external resource can be a web page, a picture, a media player, or a plug-in application. 

**Example:**

<object data="pic_trulli.jpg" width="300" height="200"></object>



###### 8.\alt\href\scr\width\height\style\id\class\title\Placeholder\

（此类标签用于对文章宽度、高度、样式、标题的修改）





# Tutorial 1 July 20



```
GET.    :  school/umel/semesters/s2/courses/it/codes/8000
GET ALL : schools/semesters/courses/code
CREATE : 
UPDATE
DELETE
QUERY : Query: AI,Business,Database fg
```

Instagram resources:

**Ins:** 

[**https://img.icons8.com/?size=512&id=32323&format=png**](https://img.icons8.com/?size=512&id=32323&format=png)

**Search:** 

[**https://img.icons8.com/?size=2x&id=132&format=png**](https://img.icons8.com/?size=2x&id=132&format=png)

**Avatar**

[**https://img.icons8.com/?size=512&id=13042&format=png**](https://img.icons8.com/?size=512&id=13042&format=png)

[**https://img.icons8.com/?size=2x&id=UxhvsTk41ftA&format=png**](https://img.icons8.com/?size=2x&id=UxhvsTk41ftA&format=png)

[**https://img.icons8.com/?size=2x&id=dxHnyxU0iDkL&format=png**](https://img.icons8.com/?size=2x&id=dxHnyxU0iDkL&format=png)

[**https://img.icons8.com/?size=2x&id=dxHnyxU0iDkL&format=png**](https://img.icons8.com/?size=2x&id=dxHnyxU0iDkL&format=png)

[**https://img.icons8.com/?size=2x&id=20750&format=png**](https://img.icons8.com/?size=2x&id=20750&format=png)

**Random pic:**

[**https://source.unsplash.com/featured/300x200**](https://source.unsplash.com/featured/300x200)

**Heart:**

[**https://img.icons8.com/?size=2x&id=87&format=png**](https://img.icons8.com/?size=2x&id=87&format=png)

**Comment:**

[**https://img.icons8.com/?size=2x&id=143&format=png**](https://img.icons8.com/?size=2x&id=143&format=png)

**Send:**

[**https://img.icons8.com/?size=2x&id=2837&format=png**](https://img.icons8.com/?size=2x&id=2837&format=png)

**Tag:**

[**https://img.icons8.com/?size=2x&id=119&format=png**](https://img.icons8.com/?size=2x&id=119&format=png)



# Lecture 3 CSS July 22



## 1.CSS介绍

- colors
- backgrounds
- Font sizes
- layouts

### 1.1CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明:

![image-20230827220606460](/Users/skyrim/Library/Application Support/typora-user-images/image-20230827220606460.png)

以下代码为举例：
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
<style>
body {background-color:yellow;}
h1   {font-size:36pt;}
h2   {color:blue;}
p    {margin-left:50px;}
</style>
</head>
### 1.2 CSS 的选择器

- #### ID选择器

使用 **#** 标识selector，语法格式：**#S{...}**（S为选择器名）。

例：**id**为**name**的标签会匹配下面的样式

```css
<style>
#name{
  color:red;
}
</style>
<!--下面文字是红色的-->
<p id="name">red text</p>
```

- #### Class选择器

使用 **.** 标识selector，语法格式：**.S{...}**（S为选择器名）。

**例：****class**属性值为**value**的标签会匹配下面的样式

```css
<style>
.value{
  text-align:center;
}
</style>
<!--下面的文字是居中对齐的-->
<p class="value">center text</p>
```

- #### Element 选择器

使用：又叫标签选择器，使用标签名作为selector名，语法格式：**S{...}**（S为选择器名）。

例：所有的**p标签**都会匹配以下的样式

```css
<style>
p{
  font-style:italic;
}
</style>
<!--下面的文字是斜体的-->
<p style="font-style:italic">italic text</p>
```

- #### Attribute选择器

- #### Package selector

指定目标选择器必须处在某个选择器对应的元素内部，语法格式：**A B{...}**（A、B为HTML元素/标签，表示对处于A中的B标签有效）。

例：以下**div内**的p标签和div外的p标签分别匹配不同的样式

```css
<style>
p{
  color:red;
}
div p{
  color:yellow;
}
</style>
<p>red text</p><!--文字是红色的-->
<div>
  <p>yellow text</p><!--文字是黄色的-->
</div>
```



- #### Sub-selector 

指定目标选择器必须处在某个选择器对应的元素内部，两者区别在于PS允许"子标签"甚至"孙子标签"及嵌套更深的标签匹配相应的样式，而SS强制指定目标选择器作为 包含选择器对应的标签 内部的标签，语法格式**：A>B{...}**（A、B为HTML元素/标签）。

例：以下**div内的p标签**匹配样式，div内的**table内的p不匹配**

```css
<style>
div>p{
  color:red;
}
</style>
<div>
  <p>red text</p><!--文字是红色的-->
  <table>
    <tr>
      <td>
        <p>no red text;</p><!--文字是非红色的-->
      </td>
    </tr>
  </table>
</div>
```





## 2.CSS的三种插入方式：

- internal Stylesheet (推荐)

**Example:**

```html
<html>
  <head>
    <style>
      h2{
        font-size:20px;
      }
    </style>
  </head>
  <body>
    <h2>
      CSS formating rules
    </h2>
    
  </body>
</html>
```

- Inline style

**Example:**

```html
<html>
  <head>
    <style>
      h2{
        font-size:20px;
      }
    </style>
  </head>
  <body>
    <h2 style="font-size: 30px;">
      CSS formating rules
    </h2>
    
  </body>
</html>
```



- External Stylesheet

## 3.CSS Style rules

一个CSS的规则由以下组成：

- 一个选择器，它选择元素，这（些）元素是你想应用这些最新的属性 值于其上的元素。
- 一组 属性 ，属性的值更新了HTML的内容的显示方式。

## 4.CSS 盒子模型

![image-20230828141904644](/Users/skyrim/Library/Application Support/typora-user-images/image-20230828141904644.png)



## 5.CSS display and visibility

- Display is generally **block ,inline, none**
  - Block elements sit on top of each other
  - Inline elements only move downward when ther is not enough space
  - Display of noe removes an element
- Visibility
  - Hidden elements are not visible but reserve space

## 6.CSS Specificity

- An inline style is worth 1000
- An ID is worth 100
- An attribute, class or pseudo-class is worth 10
- A single element or pseudo-element is worth 1

# Tutorial 2 CSS

## 1.CSS Properties

```css
div {
  display: block;
  display: inline-block;
  display: inline;
  display: none;
}
```

- ### Block

一个块可以调整宽度和高度，Enven ther is enough space, it do not sit next to each other

- ###  Inline

斜体或者粗体的元素但是不能控制宽度和高度，多半都是文字

- ### Inline-Block

一个块里面装着文字，可以调整文字的粗细和斜体也能调整整个块的宽度和高度

### 1.2 Width and Height

- px
- em
- rem    (Root em. Same measurement as em, but makes life much easier without the inheritance problem)
- %.     (Defines the height/width in percent of the containing block)
- auto  (This is default. The browser calculates the height and width)
- vw,vh
- Max-width,min-width,max-height,min-height

### 1.3 Margin and Padding

- ###  Margin 

Margin是盒子模型的最外层

在HTML中，`margin` 是一个CSS属性，用于设置元素周围的外边距。这个外边距是元素边框外的空间，可以用来控制元素与其它元素之间的距离。`margin` 的值可以是固定的像素值，比如 `10px`，也可以是百分比值，如 `5%`。`margin` 可以分别设置元素的上、右、下、左四个方向的外边距，也可以统一设置。

例如：
- `margin: 20px;` 会在元素的所有四边设置20像素的外边距。
- `margin: 5px 10px;` 会在元素的上下设置5像素，左右设置10像素的外边距。
- `margin: 5px 10px 15px 20px;` 会分别在元素的上、右、下、左边设置5像素、10像素、15像素、20像素的外边距。

使用 `margin`，开发者可以控制页面布局的空间分布，使页面看起来更加整洁和美观。

25px  50px 75px 100px 

- Top 25px
- right 50px
- bottom 75px
- Left 100px

25px 50px 75px

- Top 25px
- right and left 50px 
- bottom 75px

25px 50px

- top and bottom 25px
- Right and left 50px

25px

- All four margins are 25px

- ### Padding

在HTML和CSS中，`padding` 是一个用来设置元素内边距的属性。内边距是指元素的内容与其边框之间的空间。通过调整 `padding`，你可以控制元素内容与边框的距离，影响元素的视觉布局和大小。

`padding` 的值可以是像素（如 `10px`）、百分比（如 `5%`）或其他CSS单位。与 `margin` 类似，`padding` 也可以针对元素的上、右、下、左四个方向分别设置，或者统一设置。

例如：
- `padding: 20px;` 会在元素的所有四边内侧设置20像素的内边距。
- `padding: 5px 10px;` 会在元素的上下设置5像素，左右设置10像素的内边距。
- `padding: 5px 10px 15px 20px;` 会分别在元素的上、右、下、左边内侧设置5像素、10像素、15像素、20像素的内边距。

`padding` 对页面布局至关重要，因为它不仅影响元素的视觉效果，还影响元素的实际大小。增加 `padding` 会使元素看起来更大，而不改变内容的大小。这对于改善用户界面的可读性和舒适性非常有帮助。

```html
<style>
p
{
	background-color:yellow;
}
p.padding  /* 下面是对页边距设定手动填充的padding样式*/
{
	padding-top:25px;
	padding-bottom:25px;
	padding-right:50px;
	padding-left:50px;
}
</style>
```

Padding : 10px 5px

- Top and bottom are 10px
- right and left are 5px

Padding: 10px 5px 15px

- top is 10px
- right and left are 5px
- Bottom is 15px

- ### Border

![image-20230828152429024](/Users/skyrim/Library/Application Support/typora-user-images/image-20230828152429024.png)

```css
<head>
<style>
div {
  background-color: lightgrey;
  width: 500px;
  border: 19px solid green;
  padding: 20px;
  margin: 20px;
}
</style>
</head>
<body>

<h2>Demonstrating the Box Model</h2>

<p>The CSS box model is essentially a box that wraps around every HTML element. It consists of: borders, padding, margins, and the actual content.</p>

<div>This text is the content of the box. We have added a 50px padding, 20px margin and a 15px green border. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

</body>
```

Example: 下面的例子是上面代码实现得到的效果

![image-20230828152614259](/Users/skyrim/Library/Application Support/typora-user-images/image-20230828152614259.png)

- **Color**

<body>

<h1 style="background-color:Tomato;">Tomato</h1>
<h1 style="background-color:Orange;">Orange</h1>
<h1 style="background-color:DodgerBlue;">DodgerBlue</h1>
<h1 style="background-color:MediumSeaGreen;">MediumSeaGreen</h1>
<h1 style="background-color:Gray;">Gray</h1>
<h1 style="background-color:SlateBlue;">SlateBlue</h1>
<h1 style="background-color:Violet;">Violet</h1>
<h1 style="background-color:LightGray;">LightGray</h1>

</body>

还能对段落的背景颜色进行修改：

<body>

<h1 style="background-color:DodgerBlue;">Hello World</h1>

<p style="background-color:Tomato;">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
</p>
</body>

也能对文字的颜色进行修改：

<h1 style="color:Tomato;">Hello World</h1>
<p style="color:DodgerBlue;">Lorem ipsum...</p>
<p style="color:MediumSeaGreen;">Ut wisi enim...</p>



- **Position**

There are five different position values:

- `static ` :该关键字指定元素使用正常的布局行为，即元素在文档常规流中当 前的布局 位置。此时 top, right, bottom, left 和 z-index 属性无效。
- `relative `:该关键字下，元素先放置在未添加定位时的位置，再在不改变页 面布局的 前提下调整元素位置（因此会在此元素未添加定位时所在位置留 下空白）
- `fixed`:不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport） 的位置来 指定元素位置。元素的位置在屏幕滚动时不会改变。
- `absolute`
- `sticky`： A sticky element toggles between `relative` and `fixed`, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed)

### 1.4 Flexbox

- Container:The flex container becomes flexible by setting the `display` property to `flex`:

  `Flex-direction:` 

  `Flex-wrap:`

  `Flex-flow:`

  `Align-items:`

  `Align-content:`

#### Flex-direction:

```css
.flex-container {
  display: flex;
  flex-direction: column;
}
```

从左向右stack排列元素

```css
.flex-container {
  display: flex;
  flex-direction: column-reverse;
}
```

将最左边的元素反转 比如： 1 2 3 （ y ） 变成： 3 2 1 

```css
.flex-container {
  display: flex;
  flex-direction: row;
}
```

从左向右水平排列元素 ： 1 2 3 （x) 

```css
.flex-container {
  display: flex;
  flex-direction: row-reverse;
}
```

从右向左 ： 3 2 1 (x)

#### Flex-wrap:

`flex-wrap` 是 CSS 中用于控制 Flex 布局容器内的子元素如何换行的属性。它决定了子元素是否允许在容器的主轴上换行以适应容器的尺寸

Flex-wrap : 

1 2 3

4 5 6

7 8 9

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
```

Wrap-reverse:

`wrap-reverse`：与 `wrap` 类似，但子元素会从容器的反方向开始排列，即从最后一行开始。

7 8 9 

4 5 6

1 2 3

```css
.flex-container {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

#### Flex-flow:

`flex-flow` 是 CSS 中的一个属性，它用于同时设置 `flex-direction`（Flex 容器主轴的方向）和 `flex-wrap`（子元素如何换行）这两个 Flex 布局相关的属性。它可以将这两个属性组合在一起，方便地控制 Flex 布局容器的布局方式。

#### Justify-content:

The `justify-content` property is used to align the flex items: 

Center: 水平对齐flex-flow 的内容：

```css
.flex-container {
  display: flex;
  justify-content: center;
}
```

Flex-start:

默认从flex内容开始的地方放置items

```css
.flex-container {
  display: flex;
  justify-content: flex-start;
}
```

Flex-end:
The `flex-end` value aligns the flex items at the end of the container:

从容器结束的位置开始排列元素

```css
.flex-container {
  display: flex;
  justify-content: flex-end;
}
```

Space-between:

displays the flex items with space between the lines:

```css
.flex-container {
  display: flex;
  justify-content: space-between;
}
```

Space-around:

displays the flex items with space before, between, and after the lines:

```css
.flex-container {
  display: flex;
  justify-content: space-around;
}
```

#### Align-items:

Center:

The `center` value aligns the flex items in the middle of the container:

将容器内的元素全部放置在center的位置

```css
.flex-container {
  display: flex;
  height: 200px;
  align-items: center;
}
```

#### Align-content:

Flex-start:

displays the flex lines at the start of the container:

```css
.flex-container {
  display: flex;
  height: 600px;
  flex-wrap: wrap;
  align-content: flex-start;
}
```

Flex-end:

displays the flex lines at the end of the container: 

```css
.flex-container {
  display: flex;
  height: 600px;
  flex-wrap: wrap;
  align-content: flex-end;
}
```



# Javascript 学习



# Node.js 基础知识介绍

## 1.Node.js 中的JavaScript运行环境

- 浏览器是JavaScript的前端运行环境
- Node.JS是其后端运行环境
- Node.js 无法调用DOM和BOM等浏览器内置API

### 1.1介绍

Node.js是一个开源的JavaScript运行时环境，用于服务器端编程。它允许开发者使用JavaScript语言来构建高性能、可伸缩的网络应用程序和服务。Node.js的特点包括以下几点：

1. 事件驱动：Node.js基于事件驱动的编程模型，使得开发者可以轻松处理大量并发连接，而不需要线程管理。这使得Node.js在构建实时应用程序、聊天应用、在线游戏和其他需要高并发性能的应用方面表现出色。
2. 非阻塞I/O：Node.js使用非阻塞I/O操作，这意味着它可以在执行I/O操作时继续处理其他任务，而不会阻塞整个应用程序。这有助于提高应用程序的响应性能。
3. 跨平台：Node.js可以在多个操作系统上运行，包括Windows、macOS和各种Linux发行版，因此具有很强的跨平台特性。
4. 包管理工具：Node.js附带了npm（Node Package Manager），这是一个强大的包管理工具，可以帮助开发者轻松地安装、管理和分享JavaScript模块和库。
5. 生态系统丰富：Node.js拥有一个庞大的生态系统，包括许多第三方模块和库，可以用于各种用途，从Web开发到数据处理和物联网应用。

Node.js最初由Ryan Dahl创建，并于2009年首次发布。它的出现改变了服务器端编程的方式，将JavaScript从浏览器中解放出来，使其能够在服务器端执行。因此，Node.js被广泛用于构建各种类型的应用程序，包括Web服务器、API服务器、实时应用程序和后端服务。

### 1.2 学习路径

Javascript学习路径：

JavaScript 基础语法+浏览器内置API+第三方库

Node.js 学习路径：

JavaScript 基础语法+Node.js 的内置API（fs path http) +第三方库(express mysql)
