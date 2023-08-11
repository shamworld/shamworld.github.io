(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{333:function(t,s,v){"use strict";v.r(s);var a=v(12),_=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"http简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http简介"}},[t._v("#")]),t._v(" HTTP简介")]),t._v(" "),s("p",[t._v("HTTP协议是Hyper Text Transfer Protocol(超文本传输协议) 的缩写,是用于从万维网 (WWW:World Wide Web) 服务器传输超文本到本地浏览器的传送协议。")]),t._v(" "),s("p",[t._v("HTTP是一个基于TCP/IP通信协议来传递数据 (HTML 文件, 图片文件, 查询结果等)。")]),t._v(" "),s("p",[t._v("HTTP是一个属于应用层的面向对象的协议，由于其简捷、快速的方式，适用于分布式超媒体信息系统。它于1990年提出，经过几年的使用与发展，得到不断地完善和扩展。目前在WWW中使用的是HTTP/1.0的第六版，HTTP/1.1的规范化工作正在进行之中，而且HTTP-NG(Next Generation of HTTP)的建议已经提出。")]),t._v(" "),s("p",[t._v("HTTP协议是由从客户机到服务器的请求(Request)和从服务器到客户机的响应(response)进行约束和规范")]),t._v(" "),s("p",[s("img",{attrs:{src:"/http/2964446-5a35e17f298a48e1.jpg",alt:"http-response.jpg"}})]),t._v(" "),s("h2",{attrs:{id:"了解-tcp-ip-协议栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#了解-tcp-ip-协议栈"}},[t._v("#")]),t._v(" 了解 TCP/IP 协议栈")]),t._v(" "),s("h3",{attrs:{id:"应用层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用层"}},[t._v("#")]),t._v(" 应用层")]),t._v(" "),s("p",[t._v("为用户提供各种需要的服务器,例如 :HTTP、FTP、DNS、SMTP等.")]),t._v(" "),s("h3",{attrs:{id:"传输层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传输层"}},[t._v("#")]),t._v(" 传输层")]),t._v(" "),s("ul",[s("li",[t._v("为应用层实体提供端到端的通信功能，保证数据包的顺序传送及数据的完整性。")]),t._v(" "),s("li",[t._v("该层定义了两个主要的协议：传输控制协议（TCP）和用户数据报协议（UDP).")])]),t._v(" "),s("h3",{attrs:{id:"网络层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络层"}},[t._v("#")]),t._v(" 网络层")]),t._v(" "),s("p",[t._v("主要解决主机到主机的通信问题. IP 协议是网际互联层最重要的协议")]),t._v(" "),s("h3",{attrs:{id:"网络接口层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络接口层"}},[t._v("#")]),t._v(" 网络接口层")]),t._v(" "),s("p",[t._v("负责监视数据在主机和网络之间的交换。")]),t._v(" "),s("h2",{attrs:{id:"http-工作原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-工作原理"}},[t._v("#")]),t._v(" HTTP 工作原理")]),t._v(" "),s("p",[t._v("一次HTTP操作称为一个事务，其工作过程可分为四步:")]),t._v(" "),s("p",[s("strong",[t._v("客户端连接到Web服务器")])]),t._v(" "),s("p",[t._v("首先客户机与服务器需要建立连接。只要单击某个超级链接，HTTP的工作开始。")]),t._v(" "),s("p",[s("strong",[t._v("发送HTTP请求")]),t._v("\n建立连接后，客户机发送一个请求给服务器，请求方式的格式为：统一资源标识符(URL)、协议版本号,后边是MIME信息包括请求修饰符、客户机信息和可能的内容")]),t._v(" "),s("p",[s("strong",[t._v("服务器接受请求并返回HTTP响应")]),t._v("\n服务器接到请求后，给予相应的响应信息，其格式为一个状态行，包括信息的协议版本号、一个成功或错误的代码，后边是MIME信息包括服务器信息、实体信息和可能的内容。")]),t._v(" "),s("p",[s("strong",[t._v("客户端浏览器解析HTML内容")])]),t._v(" "),s("p",[t._v("客户端接收服务器所返回的信息通过浏览器显示在用户的显示屏上，然后客户机与服务器断开连接。")]),t._v(" "),s("blockquote",[s("p",[t._v("如果在以上过程中的某一步出现错误，那么产生错误的信息将返回到客户端，有显示屏输出。对于用户来说，这些过程是由HTTP自己完成的，用户只要用鼠标点击，等待信息显示就可以了。")])]),t._v(" "),s("h2",{attrs:{id:"url-和-uri"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url-和-uri"}},[t._v("#")]),t._v(" URL 和 URI")]),t._v(" "),s("p",[t._v("每个web 服务器资源都有一个名字,服务器资源名称被称为 "),s("strong",[t._v("统一资源标识符")]),t._v(",如 web 服务器上一个图片资源的 URI:")]),t._v(" "),s("p",[t._v("http://www.joes-hardware.com/specials/saw-blade.gif")]),t._v(" "),s("p",[t._v("URI 有两种形式,分别称为 "),s("strong",[t._v("URL")]),t._v(" 和 "),s("strong",[t._v("URN")])]),t._v(" "),s("h3",{attrs:{id:"url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[t._v("#")]),t._v(" URl")]),t._v(" "),s("p",[s("strong",[t._v("统一资源定位符 (URL)")]),t._v(" 是资源标识符最常见的形式。URL 描述了一台特定服务器 上某资源的特定位置。它们可以明确说明如何从一个精确、固定的位置获取资源")]),t._v(" "),s("p",[t._v("URL 说明了协议,服务器和本地资源")]),t._v(" "),s("p",[t._v("大部分 URL 都遵循一种标准格式，这种格式包含三个部分")]),t._v(" "),s("ul",[s("li",[t._v("URL的第一部分被称为 方案,说明了访问资源所使用的的协议类型. 这部分通常就是 "),s("strong",[t._v("HTTP")]),t._v(" 协议(http://)")]),t._v(" "),s("li",[t._v("第二部分给出了服务器的因特网地址(如,www.joes-hardware.com)")]),t._v(" "),s("li",[t._v("其余部分指定了 Web  服务器上的某个资源(如,/imgage/asw.gif)")])]),t._v(" "),s("p",[t._v("现在,几乎所有的 URI 都是 URL")]),t._v(" "),s("h3",{attrs:{id:"urn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#urn"}},[t._v("#")]),t._v(" URN")]),t._v(" "),s("p",[t._v("URI 的第二种形式就是统一资源名(URN). URN是作为特定内容的唯一名称使用的,与目前的资源所在地无关. 通过 URN,还可以用同一个名字通过多种网络协议来访问资源")]),t._v(" "),s("h2",{attrs:{id:"http之请求消息request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http之请求消息request"}},[t._v("#")]),t._v(" HTTP之请求消息Request")]),t._v(" "),s("p",[t._v("客户端发送一个HTTP请求到服务器的请求消息包括以下格式：")]),t._v(" "),s("p",[s("strong",[t._v("请求行（request line）、请求头部（header）、空行和请求数据四个部分组成。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/http/2964446-fdfb1a8fce8de946.png",alt:"request.png"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/http/1593338564964-2c0a992a-55e8-4b87-bb3e-0c7f45c41b25.png",alt:"re.png"}})]),t._v(" "),s("p",[s("strong",[t._v("空行")]),t._v("\n很重要，用来区分开 "),s("strong",[t._v("头部")]),t._v(" 和 "),s("strong",[t._v("实体")]),t._v("。")]),t._v(" "),s("p",[t._v("问: 如果说在头部中间故意加一个空行会怎么样?\n那么空行后的内容全部被视为实体。")]),t._v(" "),s("p",[s("strong",[t._v("实体")]),t._v("\n就是具体的数据了，也就是body部分。请求报文对应请求体, 响应报文对应响应体。")]),t._v(" "),s("p",[t._v("头部字段的格式:")]),t._v(" "),s("ul",[s("li",[t._v("字段名不区分大小写")]),t._v(" "),s("li",[t._v("字段名不允许出现空格，不可以出现下划线 "),s("font",{attrs:{color:"#ff502c"}},[t._v("_")])],1),t._v(" "),s("li",[t._v("字段名后面必须紧接着 "),s("font",{attrs:{color:"#ff502c"}},[t._v(":")])],1)]),t._v(" "),s("h2",{attrs:{id:"http之响应消息response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http之响应消息response"}},[t._v("#")]),t._v(" HTTP之响应消息Response")]),t._v(" "),s("p",[s("img",{attrs:{src:"/http/1593338592086-eb720aac-dd35-419e-adea-1d203b148248.png",alt:"response.png"}})]),t._v(" "),s("h2",{attrs:{id:"请求方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求方法"}},[t._v("#")]),t._v(" 请求方法")]),t._v(" "),s("ul",[s("li",[t._v("GET 请求获取Request-URI所标识的资源")]),t._v(" "),s("li",[t._v("POST  在Request-URI所标识的资源后附加新的数据")]),t._v(" "),s("li",[t._v("HEAD 请求获取由Request-URI所标识的资源的响应消息报头")]),t._v(" "),s("li",[t._v("PUT 请求服务器存储一个资源，并用Request-URI作为其标识")]),t._v(" "),s("li",[t._v("DELETE 请求服务器删除Request-URI所标识的资源")]),t._v(" "),s("li",[t._v("TRACE 请求服务器回送收到的请求信息，主要用于测试或诊断")]),t._v(" "),s("li",[t._v("CONNECT HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。")]),t._v(" "),s("li",[t._v("OPTIONS 请求查询服务器的性能，或者查询与资源相关的选项和需求")])]),t._v(" "),s("h2",{attrs:{id:"http状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http状态码"}},[t._v("#")]),t._v(" HTTP状态码")]),t._v(" "),s("p",[s("strong",[t._v("状态代码有三位数字组成，第一个数字定义了响应的类别，共分五种类别:")])]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("1xx：指示信息--表示请求已接收，继续处理")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("2xx：成功--表示请求已被成功接收、理解、接受")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("3xx：重定向--要完成请求必须进行更进一步的操作")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("4xx：客户端错误--请求有语法错误或请求无法实现")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("5xx：服务器端错误--服务器未能实现合法的请求")])])])]),t._v(" "),s("p",[s("strong",[t._v("常见状态码：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("状态码")]),t._v(" "),s("th",[t._v("解释")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("200 OK")]),t._v(" "),s("td",[t._v("客户端请求成功")])]),t._v(" "),s("tr",[s("td",[t._v("304 Not Modified")]),t._v(" "),s("td",[t._v("当协商缓存命中时会返回这个状态码")])]),t._v(" "),s("tr",[s("td",[t._v("400 Bad Request")]),t._v(" "),s("td",[t._v("客户端请求有语法错误，不能被服务器所理解")])]),t._v(" "),s("tr",[s("td",[t._v("401 Unauthorized")]),t._v(" "),s("td",[t._v("请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用")])]),t._v(" "),s("tr",[s("td",[t._v("403 Forbidden")]),t._v(" "),s("td",[t._v("服务器收到请求，但是拒绝提供服务")])]),t._v(" "),s("tr",[s("td",[t._v("404 Not Found")]),t._v(" "),s("td",[t._v("请求资源不存在，eg：输入了错误的URL")])]),t._v(" "),s("tr",[s("td",[t._v("500 Internal Server Error")]),t._v(" "),s("td",[t._v("服务器发生不可预期的错误")])]),t._v(" "),s("tr",[s("td",[t._v("503 Server Unavailable")]),t._v(" "),s("td",[t._v("服务器当前不能处理客户端的请求，一段时间后可能恢复正常")])])])]),t._v(" "),s("p",[t._v("更多状态码  "),s("a",{attrs:{href:"https://www.runoob.com/http/http-status-codes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("状态码"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"get-和-post-有什么区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-和-post-有什么区别"}},[t._v("#")]),t._v(" GET 和 POST 有什么区别?")]),t._v(" "),s("p",[t._v("差别如下:")]),t._v(" "),s("ul",[s("li",[t._v("从缓存的角度，GET 请求会被浏览器主动缓存下来，留下历史记录，而 POST 默认不会")]),t._v(" "),s("li",[t._v("从编码的角度，GET 只能进行 URL 编码，只能接收 ASCII 字符，而 POST 没有限制")]),t._v(" "),s("li",[t._v("从参数的角度，GET 一般放在 URL 中，因此不安全，POST 放在请求体中，更适合传输敏感信息。")]),t._v(" "),s("li",[t._v("从幂等性的角度，GET是幂等的，而POST不是。(幂等表示执行相同的操作，结果也是相同的)")]),t._v(" "),s("li",[t._v("从TCP的角度，GET 请求会把请求报文一次性发出去，而 POST 会分为两个 TCP 数据包，首先发 header 部分，如果服务器响应 100(continue), 然后发 body 部分。(火狐浏览器除外，它的 POST 请求只发一个 TCP 包)")])]),t._v(" "),s("h2",{attrs:{id:"常用的请求报头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用的请求报头"}},[t._v("#")]),t._v(" 常用的请求报头")]),t._v(" "),s("p",[s("strong",[t._v("Accept")])]),t._v(" "),s("p",[t._v("对于Accept系列字段的介绍分为四个部分: 数据格式、压缩方式、支持语言和字符集。")]),t._v(" "),s("h3",{attrs:{id:"数据格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据格式"}},[t._v("#")]),t._v(" 数据格式")]),t._v(" "),s("p",[t._v("HTTP 从MIME type取了一部分来标记报文 body 部分的数据类型，这些类型体现在 "),s("strong",[t._v("Content-Type")]),t._v(" 这个字段，当然这是针对于发送端而言，接收端想要收到特定类型的数据，也可以用Accept字段。")]),t._v(" "),s("p",[t._v("具体而言，这两个字段的取值可以分为下面几类:")]),t._v(" "),s("ul",[s("li",[t._v("text： text/html, text/plain, text/css 等")]),t._v(" "),s("li",[t._v("image: image/gif, image/jpeg, image/png 等")]),t._v(" "),s("li",[t._v("audio/video: audio/mpeg, video/mp4 等")]),t._v(" "),s("li",[t._v("application: application/json, application/javascript, application/pdf, application/octet-stream")])]),t._v(" "),s("h3",{attrs:{id:"压缩方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#压缩方式"}},[t._v("#")]),t._v(" 压缩方式")]),t._v(" "),s("p",[t._v("一般这些数据都是会进行编码压缩的，采取什么样的压缩方式就体现在了发送方的 "),s("strong",[t._v("Content-Encoding")]),t._v(" 字段上， 同样的，接收什么样的压缩方式体现在了接受方的Accept-Encoding字段上。这个字段的取值有下面几种：")]),t._v(" "),s("ul",[s("li",[t._v("gzip: 当今最流行的压缩格式")]),t._v(" "),s("li",[t._v("deflate: 另外一种著名的压缩格式")]),t._v(" "),s("li",[t._v("br: 一种专门为 HTTP 发明的压缩算法")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送端")]),t._v("\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" gzip\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收端")]),t._v("\nAccept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" gzip\n\n")])])]),s("p",[s("strong",[t._v("支持语言")])]),t._v(" "),s("p",[t._v("对于发送方而言，还有一个 "),s("strong",[t._v("Content-Language")]),t._v(" 字段，在需要实现国际化的方案当中，可以用来指定支持的语言，在接受方对应的字段为 "),s("strong",[t._v("Accept-Language")]),t._v("。如:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送端")]),t._v("\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Language"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" zh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" zh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" en\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收端")]),t._v("\nAccept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Language"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" zh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" zh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" en\n\n")])])]),s("p",[s("strong",[t._v("字符集")]),t._v("\n一个比较特殊的字段, 在接收端对应为 "),s("strong",[t._v("Accept-Charset")]),t._v(",指定可以接受的字符集，而在发送端并没有对应的Content-Charset, 而是直接放在了Content-Type中，以charset属性指定。如")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送端")]),t._v("\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" charset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收端")]),t._v("\nAccept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Charset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" charset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n\n")])])]),s("p",[s("img",{attrs:{src:"/http/1610635883263.jpg",alt:"Accept.png"}})]),t._v(" "),s("p",[s("strong",[t._v("Authorization")])]),t._v(" "),s("p",[t._v("Authorization 请求报头域主要用于证明客户端有权查看某个资源。当浏览器访问一个页面时，如果收到服务器的响应代码为 "),s("strong",[t._v("401(未授权)")]),t._v(",可以发送一个包含 "),s("strong",[t._v("Authorization")]),t._v(" 请求报头域的请求，要求服务器对其进行验证。")]),t._v(" "),s("p",[s("strong",[t._v("HOST")])]),t._v(" "),s("p",[t._v("Host请求报头域主要用于指定被请求资源的Internet主机和端口号，它通常从HTTP URL中提取出来的，发送请求时，该报头域是必需的。")]),t._v(" "),s("p",[s("strong",[t._v("User-Agen")])]),t._v(" "),s("p",[t._v("User-Agent 请求报头域允许客户端将它的操作系统、浏览器和其它属性告诉服务器")]),t._v(" "),s("h2",{attrs:{id:"常见的响应报头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见的响应报头"}},[t._v("#")]),t._v(" 常见的响应报头")]),t._v(" "),s("p",[s("strong",[t._v("Location")]),t._v("\n响应报头域用于重定向接受者到一个新的位置。Location响应报头域常用在更换域名的时候。")]),t._v(" "),s("p",[s("strong",[t._v("Server")]),t._v("\nServer响应报头域包含了服务器用来处理请求的软件信息。与UserAgent请求报头域是相对应的")]),t._v(" "),s("p",[s("strong",[t._v("WWW-Authenticate")]),t._v("\nWWW-Authenticate响应报头域必须被包含在401（未授权的）响应消息中，客户端收到401响应消息时候，并发送Authorization报头域请求服务器对其进行验证时，服务端响应报头就包含该报头域")]),t._v(" "),s("h2",{attrs:{id:"常用的实体报头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用的实体报头"}},[t._v("#")]),t._v(" 常用的实体报头")]),t._v(" "),s("p",[t._v("请求和响应消息都可以传送一个实体。一个实体由实体报头域和实体正文组成，但并不是说实体报头域和实体正文要在一起发送，可以只发送实体报头域。实体报头定义了关于实体正文(eg：有无实体正文)和请求所标识的资源的元信息")]),t._v(" "),s("p",[s("strong",[t._v("Content-Encoding")]),t._v("\n实体报头域被用作媒体类型的修饰符，它的值指示了已经被应用到实体正文的附加内容的编码，因而要获得Content-Type报头域中所引用的媒体类型，必须采用相应的解码机制。")]),t._v(" "),s("p",[s("strong",[t._v("Content-Language")]),t._v("\n实体报头域描述了资源所用的自然语言")]),t._v(" "),s("p",[s("strong",[t._v("Content-Length")]),t._v("\n实体报头域用于指明实体正文的长度，以字节方式存储的十进制数字来表示。")]),t._v(" "),s("p",[s("strong",[t._v("Content-Type")]),t._v("\n实体报头域用语指明发送给接收者的实体正文的媒体类型。")]),t._v(" "),s("p",[s("strong",[t._v("Last-Modified")]),t._v("\n实体报头域用于指示资源的最后修改日期和时间。")]),t._v(" "),s("p",[s("strong",[t._v("Expires")]),t._v("\n实体报头域给出响应过期的日期和时间")]),t._v(" "),s("h2",{attrs:{id:"cookies与session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookies与session"}},[t._v("#")]),t._v(" cookies与session")]),t._v(" "),s("p",[s("strong",[t._v("Cookies")]),t._v("\nCookies是保存在客户端的小段文本，随客户端点每一个请求发送该url下的所有cookies到服务器端。")]),t._v(" "),s("p",[s("strong",[t._v("Session")]),t._v("\nSession则保存在服务器端，通过唯一的值sessionID来区别每一个用户。SessionID随每个连接请求发送到服务器，服务器根据sessionID来识别客户端，再通过session 的key获取session值。")]),t._v(" "),s("h2",{attrs:{id:"cookie-session的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-session的使用"}},[t._v("#")]),t._v(" Cookie,Session的使用")]),t._v(" "),s("ul",[s("li",[t._v("Cookie：客户端将服务器设置的Cookie返回到服务器;")]),t._v(" "),s("li",[t._v("Set-Cookie：服务器向客户端设置Cookie")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/http/1593338627300-36924d4c-d307-40de-a203-c7c4b7060eb6.png",alt:"cookie"}})]),t._v(" "),s("p",[t._v("服务器在响应消息中用Set-Cookie头将Cookie的内容回送给客户端，客户端在新的请求中将相同的内容携带在Cookie头中发送给服务器。从而实现会话的保持")]),t._v(" "),s("p",[t._v("Session 使用")]),t._v(" "),s("ul",[s("li",[t._v("使用Cookie来实现")]),t._v(" "),s("li",[t._v("使用URL回显来实现")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/http/1593338653518-737d8717-5aff-4c60-b3ab-d10b2d5d4daa.png",alt:"session"}})])])}),[],!1,null,null,null);s.default=_.exports}}]);