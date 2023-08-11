(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{411:function(t,e,n){"use strict";n.r(e);var a=n(12),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"webpack从入门到精通-二"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack从入门到精通-二"}},[t._v("#")]),t._v(" webpack从入门到精通(二)")]),t._v(" "),e("p",[t._v("从webpack从入门到精通(一)中我们知道了webpack的基本配置的相关信息，不过在第一步的操作中，每次生成新的文件，我们都要自己去引入，是不是觉得webpack不是应该自动，为啥还要我们手动，其实是因为我们还没有用到它的其他方法，下面就来介绍它的另外一个配置插件----plugins，是webpack的支柱功能。webpack自身也是构建于，你在webpack配置中用到的相同的插件系统上。")]),t._v(" "),e("p",[t._v("插件目的在于解决loader无法实现其他的事。")]),t._v(" "),e("p",[t._v("更多的插件可以去这个查看"),e("a",{attrs:{href:"https://www.webpackjs.com/plugins/",target:"_blank",rel:"noopener noreferrer"}},[t._v("插件链接"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("这里就那几个出来")]),t._v(" "),e("p",[t._v("我们要使用哪些插件就要对应的引入对应的插件 通过npm install 插件名字 -D可以引入对应的插件")]),t._v(" "),e("h2",{attrs:{id:"htmlwebpackplugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#htmlwebpackplugin"}},[t._v("#")]),t._v(" HtmlWebpackPlugin")]),t._v(" "),e("p",[t._v("介绍:简化了HMTL文件的创建，以便为你的webpack包提供服务。这对于在文件名中包含每次会随着编译而发生变化哈希的webpack bundle尤其有用。你可以让插件为你生成一个HTML文件")]),t._v(" "),e("p",[e("code",[t._v("npm i html-webpack-plugin -D")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/webpacks/1602490404560.jpg",alt:""}})]),t._v(" "),e("p",[t._v("接下来就是在我们刚才的webpack.config.js中引入对应的插件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const path = require('path'); //nodejs的语法，引入路径模块，为了输出的时候找绝对路径\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\n\nmodule.exports = {\n\tentry: {\n        one:'./js/index.js',\n        two:'./js/two.js'\n    }, //入口文件为main.js  \n    output: { //输出\n        //path.resolve为nodejs的固定语法，用于找到当前文件的绝对路径\n\t\tpath: path.resolve(__dirname, 'dist'), \n\t\tfilename: '[name].bundle.js' //输出的文件名\n    },\n    plugins:[\n        new HtmlWebpackPlugin(),\n    ]\n}\n")])])]),e("p",[t._v("然后我们重新运行webpack，我们就发行除了刚才生成的js文件以外，还多了一个HTML，默认名字都是index")]),t._v(" "),e("p",[e("img",{attrs:{src:"/webpacks/1602492654400.jpg",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"/webpacks/1602493057096.jpg",alt:""}})]),t._v(" "),e("p",[t._v("它会默认帮我们把刚才生成的js文件填写进去，这样旧不用每次打包后，自己再去引入。")]),t._v(" "),e("p",[t._v("基本配置，这个可以根据需要去配置:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const path = require('path'); //nodejs的语法，引入路径模块，为了输出的时候找绝对路径\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\nmodule.exports = {\n\t// entry: ['./js/index.js', './js/two.js', ],\n\tentry: {\n\t\tone: './js/index.js',\n\t\ttwo: ['./js/index.js', './js/two.js', ],\n\t}, //入口文件为main.js  \n\toutput: { //输出\n\t\tpath: path.resolve(__dirname, 'dist'), //path.resolve为nodejs的固定语法，用于找到当前文件的绝对路径\n\t\t// filename: 'bundle.js' ,//输出的文件名\n\t\tfilename: '[name].bundle.js' //可以以name/id/hash放在中括号里区分文件名\n\t},\n\tplugins: [new HtmlWebpackPlugin({\n\t\ttitle: '贪吃的猫',\n\t\t/*这个值对应html里的title值 配置该项，它并不会替换指定模板文件中的title元素的内容，除非html模板文件中使用了模板引擎语法来获取该配置项值， <title><%= htmlWebpackPlugin.options.title %></title>*/\n\t\ttemplate: path.join(__dirname, 'default_index.ejs'), //模板文件地址。可以自定义模板\n\t\tfilename: 'index.html', //文件名，默认为index.html（路径相对于output.path的值）   还可以为输出文件指定目录位置（例如'html/index.html'）\n\t\thash: false, //true|false，是否为所有注入的静态资源添加webpack每次编译产生的唯一hash值，添加hash形式如下所示：html <script type=\"text/javascript\" src=\"common.js?a3e1396b501cdd9041be\"><\/script>\n\t\t/* \n\t\t 允许插入到模板中的一些chunk，不配置此项默认会将entry中所有的thunk注入到模板中。在配置多个页面时，每个页面注入的thunk应该是不相同的，需要通过该配置为不同页面注入不同的thunk；\n\t\t chunks: 'all', 所有的都引入\n\t\t chunks: ['one'],  引入对应的JS 如果有多个相同的  可以通过 entry的 key : array 引入 如 \n\t\t entry: {\n\t\t \tone: './js/index.js',\n\t\t \ttwo: ['./js/index.js', './js/two.js', ],\n\t\t },\n\t\t */\n\t\tchunks: 'all', \n\t\texcludeChunks: [], //这个与chunks配置项正好相反，用来配置不允许注入的thunk。 \t\t\t\n\t\t\t\txhtml: false, //true|fasle, 默认false；是否渲染link为自闭合的标签，true则为自闭合标签\n\t\tinject: true, //向template或者templateContent中注入所有静态资源，不同的配置值注入的位置不经相同 1、true或者body：所有JavaScript资源插入到body元素的底部 2、head: 所有JavaScript资源插入到head元素中 3、false： 所有静态资源css和JavaScript都不会注入到模板文件中\n\t\tminify: { //html-webpack-plugin内部集成了html-minifier\n\t\t\tcollapseWhitespace: true, //压缩空格\n\t\t\tremoveAttributeQuotes: true, //移除引号\n\t\t\tremoveComments: true, //移除注释\n\t\t},\n\t})]\n}\n")])])]),e("p",[t._v("模板根据需求添加")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<meta charset="utf-8">\n\t\t<title>\n\t\t\t<title>\n\t\t\t\t<%= htmlWebpackPlugin.options.title %>\n\t\t\t</title>\n\t\t</title>\n\t\t<% for (var css in htmlWebpackPlugin.files.css) { %>\n\t\t<link href="<%=htmlWebpackPlugin.files.css[css] %>" rel="stylesheet">\n\t\t<% } %>\n\t</head>\n\t<body>\n \n\t</body>\n\t<script type="text/javascript">\n \n\t<\/script>\n\t<% for (var chunk in htmlWebpackPlugin.files.chunks) { %>\n\t<script type="text/javascript" src="<%=htmlWebpackPlugin.files.chunks[chunk].entry %>"><\/script>\n\t<% } %>\n</html>\n')])])]),e("p",[t._v("模板的建立可以让我们可以减少很多复用性的东西，我们也可以生成多个入口文件去匹配对应的入口，比如PC端的，移动端的，网页的等等")]),t._v(" "),e("p",[t._v("而当我们在使用上面的插件的时候，每次都要删除对应的文件来生成，这样每次操作也有点烦，这样我们就可以使用clean-webpack-plugin 来清除文件在生成对应的文件。")]),t._v(" "),e("h2",{attrs:{id:"clean-webpack-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#clean-webpack-plugin"}},[t._v("#")]),t._v(" clean-webpack-plugin")]),t._v(" "),e("p",[t._v("安装:")]),t._v(" "),e("p",[e("code",[t._v("npm install clean-webpack-plugin")])]),t._v(" "),e("p",[t._v("引入:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const path = require('path'); //nodejs的语法，引入路径模块，为了输出的时候找绝对路径\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\nconst { CleanWebpackPlugin } = require('clean-webpack-plugin'); //引入清除文件插件\nmodule.exports = {\n\t// entry: ['./js/index.js', './js/two.js', ],\n\tentry: {\n\t\tone: './js/index.js',\n\t\ttwo: ['./js/two.js', ],\n\t}, //入口文件为main.js  \n\toutput: { //输出\n\t\tpath: path.resolve(__dirname, 'dist'), //path.resolve为nodejs的固定语法，用于找到当前文件的绝对路径\n\t\t// filename: 'bundle.js' ,//输出的文件名\n\t\tfilename: '[name].bundle.js' //可以以name/id/hash放在中括号里区分文件名\n\t},\n\tplugins: [\n\t\tnew CleanWebpackPlugin(), //位置放在最上面，作用是先删除dist目录再创建新的dist目录。参数在npm官网上有 默认会去清除output.path里的路径，webpack的output.path目录中的所有文件将被删除一次，但是目录本身不会被删除\n\t\tnew HtmlWebpackPlugin({\n\t\t\ttitle: '贪吃的猫',\n\t\t\t/*这个值对应html里的title值 配置该项，它并不会替换指定模板文件中的title元素的内容，除非html模板文件中使用了模板引擎语法来获取该配置项值， <title><%= htmlWebpackPlugin.options.title %></title>*/\n\t\t\ttemplate: path.join(__dirname, 'default_index.ejs'), //模板文件地址。可以自定义模板\n\t\t\tfilename: 'index.html', //文件名，默认为index.html（路径相对于output.path的值）   还可以为输出文件指定目录位置（例如'html/index.html'）\n\t\t\thash: false, //true|false，是否为所有注入的静态资源添加webpack每次编译产生的唯一hash值，添加hash形式如下所示：html <script type=\"text/javascript\" src=\"common.js?a3e1396b501cdd9041be\"><\/script>\n\t\t\t/* \n\t\t\t 允许插入到模板中的一些chunk，不配置此项默认会将entry中所有的thunk注入到模板中。在配置多个页面时，每个页面注入的thunk应该是不相同的，需要通过该配置为不同页面注入不同的thunk；\n\t\t\t chunks: 'all', 所有的都引入\n\t\t\t chunks: ['one'],  引入对应的JS 如果有多个相同的  可以通过 entry的 key : array 引入 如 \n\t\t\t entry: {\n\t\t\t \tone: './js/index.js',\n\t\t\t \ttwo: ['./js/index.js', './js/two.js', ],\n\t\t\t },\n\t\t\t */\n\t\t\tchunks: 'all',\n\t\t\texcludeChunks: [], //这个与chunks配置项正好相反，用来配置不允许注入的thunk。 \t\t\t\n\t\t\txhtml: false, //true|fasle, 默认false；是否渲染link为自闭合的标签，true则为自闭合标签\n\t\t\tinject: true, //向template或者templateContent中注入所有静态资源，不同的配置值注入的位置不经相同 1、true或者body：所有JavaScript资源插入到body元素的底部 2、head: 所有JavaScript资源插入到head元素中 3、false： 所有静态资源css和JavaScript都不会注入到模板文件中\n\t\t\tminify: { //html-webpack-plugin内部集成了html-minifier\n\t\t\t\tcollapseWhitespace: true, //压缩空格\n\t\t\t\tremoveAttributeQuotes: true, //移除引号\n\t\t\t\tremoveComments: true, //移除注释\n\t\t\t},\n\t\t})\n\t]\n}\n\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);