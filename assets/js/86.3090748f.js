(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{569:function(s,a,t){"use strict";t.r(a);var e=t(37),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("WSL 默认安装在 C 盘，随着开发时间的增长，数据越来越多，子系统数据占用高达 60 GB，对于原本 100 GB 的 C 盘，不堪重负，终于只剩下不足 300 MB 的空间，随之而来的就是 PHPStorm 无法打开")]),s._v(" "),t("p",[s._v("为了解决这个问题，需要迁移 WSL 默认存储位置")]),s._v(" "),t("h2",{attrs:{id:"过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#过程"}},[s._v("#")]),s._v(" 过程")]),s._v(" "),t("ol",[t("li",[s._v("下载工具")])]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/DDoSolitary/LxRunOffline",target:"_blank",rel:"noopener noreferrer"}},[s._v("LxRunOffline"),t("OutboundLink")],1),s._v("：一个非常强大的管理子系统的工具")])]),s._v(" "),t("p",[s._v("下载并解压后，在解压目录中打开 PowerShell")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("查看已安装的子系统")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ./LxRunOffline.exe list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("查看子系统所在目录")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ./LxRunOffline.exe get-dir -n Ubuntu-18.04\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("新建目标目录并授权")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ icacls D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("wsl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("installed /grant "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cnguu:(OI)(CI)(F)"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("目标目录："),t("code",[s._v("D:\\wsl\\installed")])]),s._v(" "),t("li",[s._v("用户名："),t("code",[s._v("cnguu")])])]),s._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[s._v("迁移系统")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ ."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("LxRunOffline move -n Ubuntu-18.04 -d D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("wsl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("installed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Ubuntu-18.04\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("然后耐心等待一大堆 "),t("code",[s._v("Warning")]),s._v(" 的结束")]),s._v(" "),t("blockquote",[t("p",[s._v("如果报错："),t("code",[s._v('[ERROR] The distro "Ubuntu-18.04" has running processes and can\'t be operated.')])]),s._v(" "),t("p",[s._v("需要重启服务："),t("code",[s._v("LxssManager")]),s._v("（快捷键：同时按 "),t("code",[s._v("Win + x")]),s._v("，再按 "),t("code",[s._v("g")]),s._v("）")])]),s._v(" "),t("h2",{attrs:{id:"结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结果"}},[s._v("#")]),s._v(" 结果")]),s._v(" "),t("p",[s._v("C 盘满血复活（不知道是不是错觉，感觉读写文件速度快了很多）")])])}),[],!1,null,null,null);a.default=n.exports}}]);