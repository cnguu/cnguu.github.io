(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{535:function(a,s,t){"use strict";t.r(s);var e=t(37),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[t("code",[a._v("Ubuntu18.04")]),a._v(" 默认安装了两个版本 "),t("code",[a._v("Python2.7")]),a._v(" 和 "),t("code",[a._v("Python3.6")])]),a._v(" "),t("h3",{attrs:{id:"查看可用二进制文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看可用二进制文件"}},[a._v("#")]),a._v(" 查看可用二进制文件")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" /usr/bin/python*\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#过程"}},[a._v("#")]),a._v(" 过程")]),a._v(" "),t("p",[a._v("使用 "),t("code",[a._v("update-alternatives")]),a._v(" 来更改全局 "),t("code",[a._v("Python")]),a._v(" 版本")]),a._v(" "),t("h3",{attrs:{id:"查看所有可用版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看所有可用版本"}},[a._v("#")]),a._v(" 查看所有可用版本")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ update-alternatives --list python\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("如果出现报错："),t("code",[a._v("update-alternatives: error: no alternatives for python")])]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ update-alternatives --install /usr/bin/python python /usr/bin/python2.7 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n$ update-alternatives --install /usr/bin/python python /usr/bin/python3.6 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("blockquote",[t("p",[a._v("命令最后的数字 "),t("code",[a._v("1")]),a._v(" 和 "),t("code",[a._v("2")]),a._v(" 表示优先级，现在默认使用 "),t("code",[a._v("2")])])]),a._v(" "),t("h3",{attrs:{id:"选择版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选择版本"}},[a._v("#")]),a._v(" 选择版本")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ update-alternatives --config python\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[a._v("#")]),a._v(" 验证")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ python --version\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);