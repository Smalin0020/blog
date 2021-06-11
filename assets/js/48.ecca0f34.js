(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{612:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jest"),a("OutboundLink")],1),t._v(" 是 Facebook 推出的一种 "),a("a",{attrs:{href:"https://zh.wikipedia.org/zh-hans/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unit Testing"),a("OutboundLink")],1),t._v(" 工具，当然还有很多其他类似的单元测试库，比如 "),a("code",[t._v("mocha")]),t._v(" "),a("code",[t._v("ava")]),t._v(" 等等")]),t._v(" "),a("p",[t._v("写的好的单元测试可以帮助你提升开发效率以及代码质量，并对项目的维护有莫大的帮助，例如重构。")]),t._v(" "),a("h2",{attrs:{id:"应该测试你的程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应该测试你的程序"}},[t._v("#")]),t._v(" 应该测试你的程序")]),t._v(" "),a("p",[t._v("其实每一个项目都应该使用单元测试，单元测试可以很好的保证你的代码"),a("strong",[t._v("不会欺骗你")]),t._v("。")]),t._v(" "),a("p",[t._v("世界上"),a("strong",[t._v("没有")]),t._v("任何一个完美的程序，也"),a("strong",[t._v("更不会")]),t._v("有完美的人可以写出没有任何问题的代码。")]),t._v(" "),a("h2",{attrs:{id:"配置单元测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置单元测试"}},[t._v("#")]),t._v(" 配置单元测试")]),t._v(" "),a("h3",{attrs:{id:"安装-jest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-jest"}},[t._v("#")]),t._v(" 安装 Jest")]),t._v(" "),a("p",[t._v("我们使用 "),a("code",[t._v("yarn")]),t._v(" 来安装 "),a("code",[t._v("Jest")]),t._v(" 包")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D jest\n")])])]),a("p",[t._v("在 "),a("code",[t._v("package.json")]),t._v(" 文件中加入测试命令")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jest"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("之后只需要在 "),a("code",[t._v("Command Line")]),t._v(" 中输入 "),a("code",[t._v("yarn test")]),t._v(" 即可开启测试")]),t._v(" "),a("h3",{attrs:{id:"配置时遇到的麻烦"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置时遇到的麻烦"}},[t._v("#")]),t._v(" 配置时遇到的麻烦")]),t._v(" "),a("p",[t._v("在我配置 Jest 时遇到了几个麻烦，让我的测试代码运行不起来，总结一下这几个小问题。")]),t._v(" "),a("ol",[a("li",[t._v("运行 Jest 测试代码时出现 "),a("code",[t._v("Cannot use import statement outside a module")])])]),t._v(" "),a("p",[t._v("不能在其他模块使用 import 语句")]),t._v(" "),a("p",[t._v("出现这个问题的主要原因在于 "),a("code",[t._v("Webpack")]),t._v(" 编译时并未转换 "),a("code",[t._v("Jest")]),t._v("，导致测试代码不识别 "),a("code",[t._v("ES6")]),t._v(" 语法，需要配置一下 Jest 的 transform 字段")]),t._v(" "),a("p",[t._v("JS 代码，需要安装 babel-jest 包来转换代码")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("transform"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"^.+\\\\.js?(x)?$"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-jest"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("TS 代码，需要额外安装一个 "),a("code",[t._v("ts-jest")]),t._v(" 包来解析")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("transform"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"^.+\\\\.(ts|tsx|js)$"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ts-jest"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在项目中配置了别名。但是 "),a("code",[t._v("Jest")]),t._v(" 并不认识别名")])]),t._v(" "),a("p",[t._v("这个问题大概都会遇到吧，几乎在项目中都会有 Webpack 来做别名处理，解决那种"),a("strong",[t._v("点点")]),t._v("引用方式，例如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 点点表示法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SomeComponent "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../../../../components/SomeComponent'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 别名表示法")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @ 代表 src/ 目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SomeComponent "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/SomeComponent'")]),t._v("\n")])])]),a("p",[t._v("在 "),a("code",[t._v("jest.config.js")]),t._v(" 文件中配置 "),a("code",[t._v("moduleNameMapper")]),t._v(" 字段即可")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  moduleNameMapper"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/(.*)$'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<rootDir>/src/$1'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("用来匹配 "),a("code",[t._v("@/")]),t._v(" 都指向到 根目录/src/前文中(.*)`匹配的分组")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("未忽略 "),a("code",[t._v("node_modules")]),t._v(" 文件夹下的代码")])]),t._v(" "),a("p",[t._v("一般来说这个是默认的，Jest 默认会忽略 "),a("code",[t._v("node_modules")]),t._v(" 文件夹下的文件和代码")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("无法识别 "),a("code",[t._v("css")]),t._v(" "),a("code",[t._v("scss")]),t._v(" 等样式文件")])]),t._v(" "),a("p",[t._v("在我们组件当中大部分都会有 "),a("code",[t._v("css")]),t._v(" 或者 "),a("code",[t._v("scss")]),t._v(" 等文件，但是 Jest 并无法处理这类文件，此时需要将此类样式文件都 "),a("code",[t._v("Mock")]),t._v(" 掉")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  moduleNameMapper"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\.(css|scss)$'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<rootDir>/__mocks__/styleMock.js'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("<rootDir>/__mocks__/styleMock.js")]),t._v(" 文件代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[t._v("如果要使用 "),a("code",[t._v("Enzyme")]),t._v(" 辅助库的话，需要额外配置一下")])]),t._v(" "),a("p",[t._v("配置 "),a("code",[t._v("setupFiles")]),t._v(" 字段，该字段的含义是在初始化运行单元测试时，需要执行的文件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  setupFiles"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<rootDir>/__mocks__/enzymeMock.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("<rootDir>/__mocks__/enzymeMock.js")]),t._v(" 文件代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Enzyme "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'enzyme'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Adapter "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'enzyme-adapter-react-16'")]),t._v("\n\nEnzyme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" adapter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Adapter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("其他配置可以"),a("a",{attrs:{href:"https://jestjs.io/docs/configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考官网的配置文档"),a("OutboundLink")],1),t._v("来进行进一步的配置")]),t._v(" "),a("h2",{attrs:{id:"如何做好单元测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何做好单元测试"}},[t._v("#")]),t._v(" 如何做好单元测试")]),t._v(" "),a("h3",{attrs:{id:"一个好的单元测试应该遵循下面三个步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个好的单元测试应该遵循下面三个步骤"}},[t._v("#")]),t._v(" 一个好的单元测试应该遵循下面三个步骤")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// production code")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("computeSumFromObject")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// testing code")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'should return 5 when adding object a with value 2 and b with value 3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// given - 准备数据")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// when - 调用被测函数")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("computeSumFromObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// then - 断言结果")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("code",[t._v("Given")]),t._v(" -> "),a("code",[t._v("When")]),t._v(" -> "),a("code",[t._v("Then")])]),t._v(" "),a("p",[t._v("准备输入数据、调用被测函数、断言输出结果。")]),t._v(" "),a("h3",{attrs:{id:"一个好的测试可以为我们带来什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个好的测试可以为我们带来什么"}},[t._v("#")]),t._v(" 一个好的测试可以为我们带来什么")]),t._v(" "),a("ul",[a("li",[t._v("安全重构已有代码 -> 当你在重构当前代码时，完全不必担心会损坏其功能")]),t._v(" "),a("li",[t._v("保存业务原有逻辑 -> 只要 PM 没有改动需求，这个需求就应该是这样的，如果测试代码出了问题，那么一定是你出了问题")]),t._v(" "),a("li",[t._v("快速回归 -> 当我们在开发业务的时候，例如在原有功能上添加新的功能，那么新开发的功能不会影响之前业务的逻辑，如果测试代码出了问题，那么一定是你的问题")])]),t._v(" "),a("h3",{attrs:{id:"测试覆盖率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试覆盖率"}},[t._v("#")]),t._v(" 测试覆盖率")]),t._v(" "),a("p",[t._v("在真实的项目开发当中，我们其实并不会对项目中所有的代码进行测试。本来单元测试带来的收益是你在走独木桥时，他将是你的安全带。但是如果你将所有的代码都写了单元测试，那么我觉得你是把全身的安全带都绑上了，只露了一只眼睛，你的开发工作将举步难行，下面来说说单元测试应该覆盖哪些，不应该覆盖哪些")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("组件类型/测试内容")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("分支渲染逻辑")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("事件调用")]),t._v(" "),a("th",{staticStyle:{"text-align":"right"}},[t._v("纯 UI")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("展示型组件")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("✅")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("❌")])]),t._v(" "),a("tr",[a("td",[t._v("容器型组件")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("✅")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("❌")])]),t._v(" "),a("tr",[a("td",[t._v("通用 UI 组件")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("✅")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("❌")])]),t._v(" "),a("tr",[a("td",[t._v("功能型组件")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✅")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("✅")]),t._v(" "),a("td",{staticStyle:{"text-align":"right"}},[t._v("❌")])])])]),t._v(" "),a("p",[t._v("总结一句话就是，所有的功能型代码，"),a("strong",[t._v("都需要")]),t._v("进行单元测试，但是像 UI 以及 "),a("code",[t._v("css")]),t._v(" 等样式代码，就不要进行不必要的测试了，意义其实并不大，除非你要写像 "),a("code",[t._v("Ant Design")]),t._v(" 这类的 UI 库，在日常的业务场景下是完全没有必要。")]),t._v(" "),a("p",[t._v("在表格中 ✅ 的，建议是在 "),a("strong",[t._v("100%")]),t._v(" 的覆盖率")]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jest"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/testing-recipes.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 测试技巧"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/linesh-simplicity/linesh-simplicity.github.io/issues/200",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 单元测试策略及落地"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("单元测试-维基百科"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);