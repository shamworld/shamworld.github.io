(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{332:function(t,s,v){"use strict";v.r(s);var r=v(12),_=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[t._v("#")]),t._v(" DNS")]),t._v(" "),s("h2",{attrs:{id:"什么是dns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是dns"}},[t._v("#")]),t._v(" 什么是DNS")]),t._v(" "),s("p",[t._v('简单的来说输入就是你在浏览器窗口 "www.baidu.com" 域名时，会有一个叫做 '),s("strong",[t._v("DNS服务器")]),t._v(" 的计算机自动把我们输入的域名翻译成相应的IP地址，然后调出IP地址对应的网页")]),t._v(" "),s("p",[t._v("它的基本工作原理如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/http/dns.png",alt:"dns"}})]),t._v(" "),s("h2",{attrs:{id:"dns解析顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns解析顺序"}},[t._v("#")]),t._v(" DNS解析顺序")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("浏览器缓存")]),t._v("：当用户通过浏览器访问某域名时，浏览器首先会在自己的缓存中查找是否有该域名对应的IP地址（若曾经访问过该域名且没有清空缓存便存在")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("系统缓存")]),t._v("：当浏览器缓存中无域名对应IP则会自动检查用户计算机系统Hosts文件DNS缓存是否有该域名对应IP；")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("路由器缓存")]),t._v("：当浏览器及系统缓存中均无域名对应IP则进入路由器缓存中检查，以上三步均为客服端的DNS缓存；")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("ISP（互联网服务提供商）DNS缓存")]),t._v("：当在用户客服端查找不到域名对应IP地址，则将进入ISP DNS缓存中进行查询。比如你用的是电信的网络，则会进入电信的DNS缓存服务器中进行查找；")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("根域名服务器")]),t._v("：当以上均未完成，则进入根服务器进行查询。全球仅有13台根域名服务器，1个主根域名服务器，其余12为辅根域名服务器。根域名收到请求后会查看区域文件记录，若无则将其管辖范围内顶级域名（如.com）服务器IP告诉本地DNS服务器；")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("顶级域名服务器")]),t._v("：顶级域名服务器收到请求后查看区域文件记录，若无则将其管辖范围内主域名服务器的IP地址告诉本地DNS服务器；")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("主域名服务器")]),t._v("：主域名服务器接受到请求后查询自己的缓存，如果没有则进入下一级域名服务器进行查找，并重复该步骤直至找到正确纪录；")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("保存结果至缓存")]),t._v("：本地域名服务器把返回的结果保存到缓存，以备下一次使用，同时将该结果反馈给客户端，客户端通过这个IP地址与web服务器建立链接。")])])]),t._v(" "),s("h2",{attrs:{id:"dns预解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns预解析"}},[t._v("#")]),t._v(" DNS预解析")]),t._v(" "),s("p",[s("strong",[t._v("DNS Prefetch")]),t._v("，即DNS预获取，是前端优化的一部分。一般来说，在前端优化中与 DNS 有关的有两点：一个是减少DNS的请求次数，另一个就是进行DNS预获取 。")]),t._v(" "),s("p",[t._v("现在大多数新浏览器已经针对DNS解析进行了优化，典型的一次DNS解析需要耗费 20-120 毫秒，减少DNS解析时间和次数是个很好的优化方式。DNS Prefetching 是让具有此属性的域名不需要用户点击链接就在后台解析，而域名解析和内容载入是串行的网络操作，所以这个方式能 减少用户的等待时间，提升用户体验 。")]),t._v(" "),s("h2",{attrs:{id:"预解析实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预解析实现"}},[t._v("#")]),t._v(" 预解析实现")]),t._v(" "),s("ol",[s("li",[t._v("用meta信息来告知浏览器, 当前页面要做DNS预解析:"),s("meta",{attrs:{"http-equiv":"x-dns-prefetch-control",content:"on"}})]),t._v(" "),s("li",[t._v("在页面header中使用link标签来强制对DNS预解析: "),s("link",{attrs:{rel:"dns-prefetch",href:"http://bdimg.share.baidu.com"}})])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("dns-prefetch需慎用，多页面重复DNS预解析会增加重复DNS查询次数。\nDNS预解析主要是用于网站前端页面优化")])])])}),[],!1,null,null,null);s.default=_.exports}}]);