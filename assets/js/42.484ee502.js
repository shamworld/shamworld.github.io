(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{345:function(t,s,a){"use strict";a.r(s);var e=a(12),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"https和http2-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https和http2-0"}},[t._v("#")]),t._v(" HTTPS和HTTP2.0")]),t._v(" "),s("h2",{attrs:{id:"http介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http介绍"}},[t._v("#")]),t._v(" HTTP介绍")]),t._v(" "),s("h3",{attrs:{id:"基础概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础概念"}},[t._v("#")]),t._v(" 基础概念")]),t._v(" "),s("p",[t._v("HTTP协议(HyperText Transfer Protocol，超文本传输协议)是用于从WWW服务器传输超文本到本地浏览器的传送协议。")]),t._v(" "),s("p",[t._v("它可以使浏览器更加高效，使网络传输减少。它不仅保证计算机正确快速的传输超文本文档，还确定传输文档中的哪一部分，以及哪部分内容首先显示(如文本先于图形)等。")]),t._v(" "),s("h3",{attrs:{id:"版本历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#版本历史"}},[t._v("#")]),t._v(" 版本历史")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knowledge/1605261470353.jpg",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("HTTP/0.9")])]),t._v(" "),s("p",[t._v("已过时。只接受GET一种请求方法，没有在通讯中指定版本号，且不支持请求头。由于该版本不支持POST方法，因此客户端无法向服务器传递太多信息。")]),t._v(" "),s("ul",[s("li",[t._v("HTTP/1.0")])]),t._v(" "),s("p",[t._v("这是第一个在通讯中指定版本号的HTTP协议版本，至今仍被广泛采用，特别是在代理服务器中。")]),t._v(" "),s("ul",[s("li",[t._v("HTTP/1.1")])]),t._v(" "),s("p",[t._v("持久链接被默认采用，并能很好的配合代理服务器工作。还支持以管道方式在不同发送多个请求，以便降低线路负载，提高传输速度。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("HTTP/1.1相交于HTTP/1.0协议的区别主要体现在:")]),t._v(" "),s("ul",[s("li",[t._v("缓存处理")]),t._v(" "),s("li",[t._v("带宽优化及网络链接的使用")]),t._v(" "),s("li",[t._v("错误通知的管理")]),t._v(" "),s("li",[t._v("消息在网络中发送")]),t._v(" "),s("li",[t._v("互联网地址的维护")]),t._v(" "),s("li",[t._v("安全性及完整性")])])]),t._v(" "),s("li",[s("p",[t._v("HTTP/2")])])]),t._v(" "),s("p",[t._v("当前版本，于2015年5月作为互联网标准正式发布。")]),t._v(" "),s("h3",{attrs:{id:"http协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http协议"}},[t._v("#")]),t._v(" HTTP协议")]),t._v(" "),s("p",[s("strong",[t._v("URL与资源")])]),t._v(" "),s("p",[t._v("在TCP/IP模型中，所有的网络链接都要使用方案，方案定义使用什么协议，比如http,ftp,telnet。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("URI：统一资源标识符，包括URL和URN。")])]),t._v(" "),s("li",[s("p",[t._v("URL Uniform Resource Locator(统一资源定位符)，它实际上是一个资源标识符，但更具体的，它定位了资源的位置")])]),t._v(" "),s("li",[s("p",[t._v("URN Uniform Resource Name (统一资源命名)，作为特定内容的唯一名称使用的，与当前资源的所在地无关。使用URN，就可以将资源四处迁移，而不用担心迁移后无法访问。P2P下载中使用的磁力链接是URN的一种实现，它可以持久化的标识一个BT资源，资源分布式的存储在P2P网络中，无需中心服务器用户即可找到并下载它。")])])]),t._v(" "),s("h3",{attrs:{id:"工作流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工作流程"}},[t._v("#")]),t._v(" 工作流程")]),t._v(" "),s("h3",{attrs:{id:"协议栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#协议栈"}},[t._v("#")]),t._v(" 协议栈")]),t._v(" "),s("p",[t._v("HTTP在TCP/IP协议栈中的位置。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knowledge/4346114-00c113720527d2d4.png",alt:""}})]),t._v(" "),s("p",[t._v("HTTP是基于TCP/IP的应用，因此HTTP无须关系网络寻址，数据传输和拓扑结构")]),t._v(" "),s("p",[t._v("协议图")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knowledge/4346114-ec46ef44bfc36711.png",alt:""}})]),t._v(" "),s("p",[t._v("在HTTP1.0/1.1中，HTTP采用请求响应模型来处理HTTP事务 HTTP事务有一条请求命令和一个响应结果组成，它们通过HTTP报文进行数据传输")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knowledge/4346114-5a3d0af48288429d.jpg",alt:""}})]),t._v(" "),s("p",[t._v("HTTP的工作过程")]),t._v(" "),s("ul",[s("li",[t._v("客户端链接Web服务器")]),t._v(" "),s("li",[t._v("发送HTTP请求")]),t._v(" "),s("li",[t._v("服务器接受请求并返回HTTP响应")]),t._v(" "),s("li",[t._v("释放链接TCP链接")]),t._v(" "),s("li",[t._v("客户端浏览器解析HTML内容")])]),t._v(" "),s("h3",{attrs:{id:"状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),s("p",[t._v("HTTP状态码描述返回的请求结果。状态码以三位数字和原因短语组成，数字中的第一位指定了响应类别，后两位无分类。响应类型有一下5种")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("1XX（信息性状态码）：接收的请求正在处理\n2XX（成功状态码）：请求正常处理完毕\n3XX（重定向状态码）：需要进行附加操作以完成请求\n4XX（客户端错误状态码）：服务器无法处理请求\n5XX（服务器错误状态码）：服务器处理请求出错\n\n以下说明常用得分几种状态码：\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("204")]),t._v("：请求已被成功处理，但没有资源可返回（一般用于只需要从客户端发送请求至服务器端，而不需要对客户端发送新信息内容的情况下使用）\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("206")]),t._v("：表示客户端进行了范围请求，且服务器端成功处理了这部分请求。响应报文中包含Content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Range指定范围的实体内容\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),t._v("：永久性重定向。表示请求的资源已经被重新分配了"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URI")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("。如：请求http")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("user的"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URI")]),t._v("时忘记给最后加"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v("就会产生"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),t._v("的状态码\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("302")]),t._v("：临时性重定向。希望本次请求能够使用新的"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URI")]),t._v("请求。\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("303")]),t._v("：请求对应着一个新的"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URI")]),t._v("，应该使用"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v("请求重新请求。与"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("302")]),t._v("有着相同的功能，但明确表示应该使用"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v("请求\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("302")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("303")]),t._v("状态码很多浏览器都会将请求方法改为"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v("并删除报文内的主体，虽然标准规定"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("301")]),t._v("和"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("302")]),t._v("禁止改变请求方法，但实际使用时大多浏览器都这么做\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("304")]),t._v("：客户端发送附带条件的请求，服务器端允许请求访问资源，且服务器端的资源并未改变，可以使用客户端缓存。此状态码返回时不包含任何响应主体\n附带条件的请求表示请求头中包含："),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Match、"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("None"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Match、"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Modified"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Since、"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Range。"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Unmodified"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Since中任一个字段的请求\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("307")]),t._v("：临时重定向。与"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("302")]),t._v("有着相同的含义，但遵守浏览器标准，不会改为"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v("请求\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),t._v("：表示请求报文中存在语法错误，予以有误或者请求参数不正确\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("401")]),t._v("：表示请求需要有通过"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),t._v("认证呢过的认证信息，若之前请求过一次则表示用户认证失败，浏览器初次接收到"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("401")]),t._v("会弹出认证用的对话窗口\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("403")]),t._v("：表示请求资源的访问被服务器拒绝了，服务器如果想给出拒绝的理由可以在主体内容中对原因进行描述。\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v("：表示服务器上无法找到请求的资源，可以用在服务器拒绝请求又不想说明理由的场合\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("405")]),t._v("：表示服务器不支持使用该请求方法请求指定资源\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("412")]),t._v("：表示客户端附带条件的请求与资源的实体标记不匹配，服务器将不会执行请求\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("415")]),t._v("：表示请求传给服务器端的实体内容并不是服务器端所支持的媒体类型\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("417")]),t._v("：一般发生在客户端带有Expect请求头的时候期望服务器出现特定的行为而服务器无法理解时将返回"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("417")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v("：表示服务器在执行请求时发生了错误\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v("：表示服务器暂时处于超负载或正在进行停机维护，现在无法处理请求\n")])])]),s("h3",{attrs:{id:"请求的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求的方法"}},[t._v("#")]),t._v(" 请求的方法")]),t._v(" "),s("ul",[s("li",[t._v('HTTP/1.1协议中共定义了八种方法(有时候也叫"动作")，来表明Request-URL指定的资源不同的操作方式')]),t._v(" "),s("li",[t._v("HTTP1.0定义了三种请求方法:GET,POST和HEAD方法。")]),t._v(" "),s("li",[t._v("HTTP1.1新增了五种请求方法:OPTIONS, PUT, DELETE, TRACE 和 CONNECT 方法")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/knowledge/4346114-cd852368aefc84c1.png",alt:""}})]),t._v(" "),s("p",[t._v("1.OPTIONS")]),t._v(" "),s("p",[t._v("返回服务器针对特定资源所支持的HTTP请求方法，也可以利用向web服务器发生'*'的请求来测试服务器的功能性")]),t._v(" "),s("p",[t._v("2.HEAD")]),t._v(" "),s("p",[t._v("向服务器索与GET请求相一致的响应，只不过响应体将不会被返回。这一方法可以再不必传输整个响应内容的情况下，就可以获取包含在响应小消息头中的元信息。")]),t._v(" "),s("p",[t._v("3.GET")]),t._v(" "),s("p",[t._v("向特定的资源发出请求。注意：GET方法不应当被用于产生“副作用”的操作中，例如在Web Application中，其中一个原因是GET可能会被网络蜘蛛等随意访问。Loadrunner中对应get请求函数：web_link和web_url")]),t._v(" "),s("p",[t._v("4.POST")]),t._v(" "),s("p",[t._v("向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的建立和/或已有资源的修改。 Loadrunner中对应POST请求函数：web_submit_data,web_submit_form")]),t._v(" "),s("p",[t._v("5.PUT")]),t._v(" "),s("p",[t._v("向指定资源位置上传其最新内容")]),t._v(" "),s("p",[t._v("6.DELETE")]),t._v(" "),s("p",[t._v("请求服务器删除Request-URL所标识的资源")]),t._v(" "),s("p",[t._v("7.TRACE")]),t._v(" "),s("p",[t._v("回显服务器收到的请求，主要用于测试或诊断")]),t._v(" "),s("p",[t._v("8.CONNECT")]),t._v(" "),s("p",[t._v("HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。")]),t._v(" "),s("p",[s("strong",[t._v("注意:")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("方法名称是区分大小写的，当某个请求所针对的资源不支持对应的请求方法的时候，服务器应当返回状态码405(Mothod Not Allowed)；当服务器不认识或者不支持对应的请求方法时，应返回状态码501(Not Implemented)。")])]),t._v(" "),s("li",[s("p",[t._v("HTTP服务器至少应该实现GET和HEAD/POST方法，其他方法都是可选的，此外除上述方法，特定的HTTP服务器支持扩展自定义的方法。")])])]),t._v(" "),s("h3",{attrs:{id:"https基础知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https基础知识"}},[t._v("#")]),t._v(" HTTPS基础知识")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knowledge/4346114-eace082cb023752f.png",alt:""}})]),t._v(" "),s("p",[t._v("HTTPS协议=HTTP协议+SSL/TLS协议，在HTTPS数据传输的过程中，需要用SSL/TLSS对数据进行加密和解密，需要用HTTP对加密后的数据进行传输，由此可以看出HTTPS是由HTTP和SSL/TLS一起合作完成的。")]),t._v(" "),s("p",[t._v("SSL的全称是Secure Sockets Layer，即安全套接层协议，是为网络通信提供安全及数据完整性的一种安全协议。SSL协议在1994年被Netscape发明，后来各个浏览器均支持SSL，其最新的版本是3.0")]),t._v(" "),s("p",[t._v("TLS的全称是Transport Layer Security，即安全传输层协议，最新版本的TLS（Transport Layer Security，传输层安全协议）是IETF（Internet Engineering Task Force，Internet工程任务组）制定的一种新的协议，它建立在SSL 3.0协议规范之上，是SSL 3.0的后续版本。在TLS与SSL3.0之间存在着显著的差别，主要是它们所支持的加密算法不同，所以TLS与SSL3.0不能互操作。虽然TLS与SSL3.0在加密算法上不同，但是在我们理解HTTPS的过程中，我们可以把SSL和TLS看做是同一个协议。")]),t._v(" "),s("p",[t._v("HTTPS为了兼顾安全与效率，同时使用了对称加密和非对称加密。数据是被对称加密传输的，对称加密过程需要客户端的一个密钥，为了确保能把该密钥安全传输到服务器端，采用非对称加密对该密钥进行加密传输，总的来说，对数据进行对称加密，对称加密所要使用的密钥通过非对称加密传输。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knowledge/4346114-3627b1abb9708f45.png",alt:""}})]),t._v(" "),s("p",[t._v("HTTPS在传输的过程中会涉及到三个密钥：")]),t._v(" "),s("p",[t._v("服务器端的公钥和私钥，用来进行非对称加密")]),t._v(" "),s("p",[t._v("客户端生成的随机密钥，用来进行对称加密")]),t._v(" "),s("p",[t._v("一个HTTPS请求实际上包含了两次HTTP传输，可以细分为8步。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("客户端向服务器发起HTTPS请求，连接到服务器的443端口")])]),t._v(" "),s("li",[s("p",[t._v("服务器端有一个密钥对，即公钥和私钥，是用来进行非对称加密使用的，服务器端保存着私钥，不能将其泄露，公钥可以发送给任何人。")])]),t._v(" "),s("li",[s("p",[t._v("服务器将自己的公钥发送给客户端。")])]),t._v(" "),s("li",[s("p",[t._v("客户端收到服务器端的公钥之后，会对公钥进行检查，验证其合法性，如果发现发现公钥有问题，那么HTTPS传输就无法继续。严格的说，这里应该是验证服务器发送的数字证书的合法性，关于客户端如何验证数字证书的合法性，下文会进行说明。如果公钥合格，那么客户端会生成一个随机值，这个随机值就是用于进行对称加密的密钥，我们将该密钥称之为client key，即客户端密钥，这样在概念上和服务器端的密钥容易进行区分。然后用服务器的公钥对客户端密钥进行非对称加密，这样客户端密钥就变成密文了，至此，HTTPS中的第一次HTTP请求结束。")])]),t._v(" "),s("li",[s("p",[t._v("客户端会发起HTTPS中的第二个HTTP请求，将加密之后的客户端密钥发送给服务器。")])]),t._v(" "),s("li",[s("p",[t._v("服务器接收到客户端发来的密文之后，会用自己的私钥对其进行非对称解密，解密之后的明文就是客户端密钥，然后用客户端密钥对数据进行对称加密，这样数据就变成了密文。")])]),t._v(" "),s("li",[s("p",[t._v("然后服务器将加密后的密文发送给客户端。")])]),t._v(" "),s("li",[s("p",[t._v("客户端收到服务器发送来的密文，用客户端密钥对其进行对称解密，得到服务器发送的数据。这样HTTPS中的第二个HTTP请求结束，整个HTTPS传输完成。")])])]),t._v(" "),s("h2",{attrs:{id:"http2-0基础知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http2-0基础知识"}},[t._v("#")]),t._v(" Http2.0基础知识")]),t._v(" "),s("p",[t._v("提升web的性能，在与 HTTP/1.1 完全语义兼容的基础上，进一步减少了网络延迟")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knowledge/4346114-264f3334c579df5d.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"web性能对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web性能对比"}},[t._v("#")]),t._v(" web性能对比")]),t._v(" "),s("p",[t._v("HTTP/2: the Future of the Internet 这是 Akamai 公司建立的一个官方的演示，用以说明 HTTP/2 相比于之前的 HTTP/1.1 在性能上的大幅度提升。 同时请求 379 张图片，从Load time 的对比可以看出 HTTP/2 在速度上的优势。")]),t._v(" "),s("h3",{attrs:{id:"延时问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#延时问题"}},[t._v("#")]),t._v(" 延时问题")]),t._v(" "),s("p",[t._v("使用chrome的开发工具的操作时，可以明显发现Http1.0的延时问题比较。")]),t._v(" "),s("h3",{attrs:{id:"多路复用-multiplexing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多路复用-multiplexing"}},[t._v("#")]),t._v(" 多路复用 (Multiplexing)")]),t._v(" "),s("p",[t._v("多路复用允许同时通过单一的 HTTP/2 连接发起多重的请求-响应消息。")]),t._v(" "),s("p",[t._v("众所周知 ，在 HTTP/1.1 协议中 「浏览器客户端在同一时间，针对同一域名下的请求有一定数量限制。超过限制数目的请求会被阻塞」。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knowledge/4346114-c0db263960f86c56.jpg",alt:""}})]),t._v(" "),s("p",[t._v("HTTP/2 的多路复用(Multiplexing) 则允许同时通过单一的 HTTP/2 连接发起多重的请求-响应;因此 HTTP/2 可以很容易的去实现多流并行而不用依赖建立多个 TCP 连接，HTTP/2 把 HTTP 协议通信的基本单位缩小为一个一个的帧，这些帧对应着逻辑流中的消息。并行地在同一个 TCP 连接上;往往有效的解决了统一域名请求限制阻塞问题。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knowledge/4346114-fba06ef5056c0dd1.jpg",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"二进制分帧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二进制分帧"}},[t._v("#")]),t._v(" 二进制分帧")]),t._v(" "),s("p",[t._v("在二进制分帧层中， HTTP/2 会将所有传输的信息分割为更小的消息和帧（frame）,并对它们采用二进制格式的编码 ，其中 HTTP1.x 的首部信息会被封装到 HEADER frame，而相应的 Request Body 则封装到 DATA frame 里面。")]),t._v(" "),s("p",[t._v("++HTTP/2 通信都在一个连接上完成，这个连接可以承载任意数量的双向数据流++。")]),t._v(" "),s("p",[t._v("在过去， HTTP 性能优化的关键并不在于高带宽，而是低延迟。TCP 连接会随着时间进行自我「调谐」，起初会限制连接的最大速度，如果数据成功传输，会随着时间的推移提高传输的速度。这种调谐则被称为 TCP 慢启动。由于这种原因，让原本就具有突发性和短时性的 HTTP 连接变的十分低效。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knowledge/4346114-774cffb06565d3e3.jpg",alt:""}})]),t._v(" "),s("p",[t._v("总结：")]),t._v(" "),s("p",[t._v("单连接多资源的方式，减少服务端的链接压力,内存占用更少,连接吞吐量更大")]),t._v(" "),s("p",[t._v("由于 TCP 连接的减少而使网络拥塞状况得以改善，同时慢启动时间的减少,使拥塞和丢包恢复速度更快")]),t._v(" "),s("p",[t._v("首部压缩（Header Compression）")]),t._v(" "),s("p",[t._v("HTTP/1.1并不支持 HTTP 首部压缩，为此 SPDY 和 HTTP/2 应运而生， SPDY 使用的是通用的DEFLATE 算法，而 HTTP/2 则使用了专门为首部压缩而设计的 HPACK 算法。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knowledge/4346114-275c1764e9a330b5.jpg",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);