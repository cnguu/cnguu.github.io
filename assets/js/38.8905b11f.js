(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{522:function(s,t,n){"use strict";n.r(t);var a=n(37),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"环境准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[s._v("#")]),s._v(" 环境准备")]),s._v(" "),n("ol",[n("li",[s._v("安装 "),n("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git"),n("OutboundLink")],1)]),s._v(" "),n("li",[s._v("安装 "),n("a",{attrs:{href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Node.js"),n("OutboundLink")],1),s._v("，版本 "),n("code",[s._v(">=8.6")])]),s._v(" "),n("li",[s._v("安装 "),n("a",{attrs:{href:"https://yarnpkg.com/zh-Hans/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Yarn"),n("OutboundLink")],1)]),s._v(" "),n("li",[s._v("注册 "),n("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub"),n("OutboundLink")],1)])]),s._v(" "),n("blockquote",[n("p",[s._v("如果使用 "),n("code",[s._v("Yarn")]),s._v(" 或者 "),n("code",[s._v("Npm")]),s._v(" 下载慢，使用以下命令全局加速")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npm.taobao.org\n\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npm.taobao.org --global\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" disturl https://npm.taobao.org/dist --global\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"仓库准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#仓库准备"}},[s._v("#")]),s._v(" 仓库准备")]),s._v(" "),n("blockquote",[n("p",[s._v("以下以账号 "),n("code",[s._v("cnguu")]),s._v(" 为例，注意替换为自己的账号")])]),s._v(" "),n("p",[s._v("为了方便，在 "),n("code",[s._v("GitHub")]),s._v(" 上新建两个仓库")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("vuepress-blog")]),s._v("（源码备份）")]),s._v(" "),n("li",[n("code",[s._v("cnguu.github.io")]),s._v("（博客部署）")])]),s._v(" "),n("h2",{attrs:{id:"开始使用-vuepress"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开始使用-vuepress"}},[s._v("#")]),s._v(" 开始使用 VuePress")]),s._v(" "),n("h3",{attrs:{id:"基础目录与文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础目录与文件"}},[s._v("#")]),s._v(" 基础目录与文件")]),s._v(" "),n("blockquote",[n("p",[s._v("新建文件夹："),n("code",[s._v("C:\\vuepress-blog")]),s._v("，表示为根目录")])]),s._v(" "),n("p",[s._v("在根目录中新建以下文件：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v(".gitattributes")]),s._v("（指定仓库主要语言）")]),s._v(" "),n("li",[n("code",[s._v(".gitignore")]),s._v("（Git 提交需要忽略的目录与文件）")]),s._v(" "),n("li",[n("code",[s._v("deploy.sh")]),s._v("（博客部署脚本）")]),s._v(" "),n("li",[n("code",[s._v("package.json")]),s._v("（项目配置）")]),s._v(" "),n("li",[n("code",[s._v("README.md")]),s._v("（仓库说明书）")])]),s._v(" "),n("p",[n("code",[s._v(".gitattributes")]),s._v(" 示例：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("*.sh linguist-language=Vue\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("code",[s._v(".gitignore")]),s._v(" 示例：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(".idea\n.DS_Store\n*.log\nnode_modules\ndist\nyarn.lock\npackage-lock.json\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[n("code",[s._v("deploy.sh")]),s._v(" 示例：")]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",[s._v("注意修改对应的配置")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env bash")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# VuePress 通用部署脚本")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Windows 无法执行 .sh 文件，需要安装 git 客户端")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Author: cnguu")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Email: www@cnguu.cn")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开始")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# package.json 中需要有这一句："build": "vuepress build docs"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" build\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 dist_temp 文件夹")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -fr dist_temp\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制 dist 文件夹到 dist_temp 文件夹")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -ir dist dist_temp\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制 README.md 文件到 dist_temp 文件夹")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -i README.md dist_temp\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入 dist_temp 目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" dist_temp\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建 CNAME 文件，并写入 gleehub.com 域名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" gleehub.com "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CNAME\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化仓库")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m deploy\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制推送到 cnguu.github.io 仓库的 master 分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f git@github.com:cnguu/cnguu.github.io.git master\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 多仓库部署开始 ------")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 CNAME")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rm CNAME")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建 CNAME 文件，并写入 www.gleehub.com 域名")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#echo www.gleehub.com > CNAME")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#git add -A")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#git commit -m deploy")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制推送到 cnguu.github.io 仓库的 master 分支")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#git push -f git@git.dev.tencent.com:cnguu/cnguu.coding.me.git master")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 多仓库部署结束 ------")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回上一级目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 dist_temp 文件夹")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -fr dist_temp\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 结束")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br")])]),n("p",[n("code",[s._v("package.json")]),s._v(" 示例：")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blog"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cnguu\'s blog"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"keywords"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cnguu"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gleehub"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blog"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"author"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cnguu"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"license"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Mozilla"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"private"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"repository"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"url"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git@github.com:cnguu/vuepress-blog.git"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"main"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"start"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"deploy"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./deploy.sh"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dependencies"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuepress"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.1.0"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("p",[n("code",[s._v("README.md")]),s._v(" 示例：")]),s._v(" "),n("div",{staticClass:"language-md line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[n("span",{pre:!0,attrs:{class:"token title important"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("#")]),s._v(" VuePress Blog")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),n("ul",[n("li",[s._v("在根目录下新建文件夹 "),n("code",[s._v("docs")]),s._v("（存放博文、静态资源和配置）")]),s._v(" "),n("li",[s._v("在 "),n("code",[s._v("docs")]),s._v(" 下新建任意名文件夹 "),n("code",[s._v("test")]),s._v("（一个文件夹代表一个分类，建议全英文名）")]),s._v(" "),n("li",[s._v("在 "),n("code",[s._v("docs")]),s._v(" 下新建文件夹 "),n("code",[s._v(".vuepress")]),s._v("（存放静态资源和配置）")]),s._v(" "),n("li",[s._v("在 "),n("code",[s._v(".vuepress")]),s._v(" 下新建文件夹 "),n("code",[s._v("public")]),s._v("（存放静态资源）")]),s._v(" "),n("li",[s._v("在 "),n("code",[s._v(".vuepress")]),s._v(" 下新建文件 "),n("code",[s._v("config.js")]),s._v("（站点配置文件）")])]),s._v(" "),n("div",{staticClass:"custom-block error"},[n("p",[s._v("注意备份：使用 Git 提交到源码备份仓库")])]),s._v(" "),n("h2",{attrs:{id:"部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" deploy\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"custom-block warning"},[n("p",[s._v("如果部署失败，可以手动输入部署脚本里的命令，或者使用自动化部署")])])])}),[],!1,null,null,null);t.default=e.exports}}]);