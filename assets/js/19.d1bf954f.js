(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{562:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_16-事务-mybatis内部的事务控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-事务-mybatis内部的事务控制"}},[s._v("#")]),s._v(" 16. 事务-MyBatis内部的事务控制")]),s._v(" "),a("p",[s._v("前面两章，我们把 MyBatis 中的缓存机制都详细的过了一遍，接下来的两章，我们着眼于事务部分。对于一个 Dao 层框架来讲，事务是永远避不开的话题。MyBatis 本身不是像 Hibernate 那样重度封装 jdbc 以实现近乎于全自动的框架，MyBatis 本身不算很重，所以对事务部分下的功夫相对不算很多。本章我们先看一下 MyBatis 本身的内部是如何搞定事务控制的，下一章再深入源码层面探究 MyBatis 是如何封装事务模块的。")]),s._v(" "),a("h2",{attrs:{id:"_0-工程搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-工程搭建"}},[s._v("#")]),s._v(" 0. 工程搭建")]),s._v(" "),a("p",[s._v("这部分的工程搭建与第 14 章完全一致，可直接用之前准备好的基础环境测试。")]),s._v(" "),a("p",[s._v("最终搭建好的依然是长这个样子：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6fd4ce224af24ba5a23162e4dc2c2724~tplv-k3u1fbpfcp-watermark.awebp",alt:"16. 工程结构.png"}})]),s._v(" "),a("h2",{attrs:{id:"_1-回顾事务控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-回顾事务控制"}},[s._v("#")]),s._v(" 1. 回顾事务控制")]),s._v(" "),a("p",[s._v("先回顾一下基本概念吧，事务的概念咱都很清楚了，简单地说，事务就是"),a("strong",[s._v("一组逻辑操作的组合")]),s._v("，它们执行的结果要么全部成功，要么全部失败。")]),s._v(" "),a("p",[s._v("事务有 4 个特性：")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("原子性")]),s._v("：一个事务就是一个不可再分解的单位，事务中的操作要么全部做，要么全部不做。原子性强调的是事务的"),a("strong",[s._v("整体")])]),s._v(" "),a("li",[a("strong",[s._v("一致性")]),s._v("：事务执行后，所有的数据都应该保持一致状态。一致性强调的是数据的"),a("strong",[s._v("完整")])]),s._v(" "),a("li",[a("strong",[s._v("隔离性")]),s._v("：多个数据库操作并发执行时，一个请求的事务操作不能被其它操作干扰，多个并发事务执行之间要相互隔离。隔离性强调的是"),a("strong",[s._v("并发")]),s._v("的隔离")]),s._v(" "),a("li",[a("strong",[s._v("持久性")]),s._v("：事务执行完成后，它对数据的影响是永久性的。持久性强调的是操作的"),a("strong",[s._v("结果")])])]),s._v(" "),a("p",[s._v("针对数据库的并发操作，可能会出现一些事务的并发问题。事务并发操作中会出现三种问题：")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("脏读")]),s._v("：一个事务读到了另一个事务没有提交的数据")])]),s._v(" "),a("li",[a("p",[s._v("不可重复读")]),s._v(" "),a("p",[s._v("：一个事务读到了另一个事务已提交修改的数据")]),s._v(" "),a("ul",[a("li",[s._v("对同一行数据查询两次，结果不一致")])])]),s._v(" "),a("li",[a("p",[s._v("幻读")]),s._v(" "),a("p",[s._v("：一个事务读到了另一个事务已提交新增的数据")]),s._v(" "),a("ul",[a("li",[s._v("对同一张表查询两次，出现新增的行，导致结果不一致")])])])]),s._v(" "),a("p",[s._v("针对上述三个问题，由此引出了事务的隔离级别：")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("read uncommitted")]),s._v(" 读未提交 —— 不解决任何问题")]),s._v(" "),a("li",[a("strong",[s._v("read committed")]),s._v(" 读已提交 —— 解决脏读")]),s._v(" "),a("li",[a("strong",[s._v("repeatable read")]),s._v(" 可重复读 —— 解决脏读、不可重复读")]),s._v(" "),a("li",[a("strong",[s._v("serializable")]),s._v(" 可串行化 —— 解决脏读、不可重复读、幻读")])]),s._v(" "),a("p",[s._v("四种隔离级别，自上而下级别逐级增高，但并发性能逐级降低。MySQL 中默认的事务隔离级别是 "),a("strong",[s._v("repeatable read")]),s._v(" ，Oracle 、PostgresSQL 的默认事务隔离级别是 "),a("strong",[s._v("read committed")]),s._v(" 。")]),s._v(" "),a("p",[s._v("对于 jdbc 的事务操作而言，无非就是"),a("strong",[s._v("开启事务、提交事务、回滚事务")]),s._v("三个操作罢了，既然用了 MyBatis ，那这些操作肯定是 MyBatis 帮我们做了而已。")]),s._v(" "),a("h2",{attrs:{id:"_2-快速回顾mybatis的事务控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-快速回顾mybatis的事务控制"}},[s._v("#")]),s._v(" 2. 快速回顾MyBatis的事务控制")]),s._v(" "),a("p",[s._v("其实在之前的很多案例中，我们都有意或者无意的使用到了 MyBatis 的事务控制，比方说之前写的新增、更新、删除数据：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SqlSession")]),s._v(" sqlSession "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sqlSessionFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("openSession")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DepartmentMapper")]),s._v(" departmentMapper "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sqlSession"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getMapper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DepartmentMapper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Department")]),s._v(" department "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" departmentMapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"11c8cdec37e041cf8476c86d46a42dd3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    department"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"测测试试"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    departmentMapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("updateById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("department"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    departmentMapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("deleteById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"11c8cdec37e041cf8476c86d46a42dd3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    sqlSession"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    sqlSession"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("而这种写法能得以生效，主要是因为 MyBatis 全局配置文件中配置了事务管理器：")]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("environments")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("default")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("development"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("environment")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("development"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 配置了事务管理器 --\x3e")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("transactionManager")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("JDBC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dataSource")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("POOLED"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("property")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("driver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("com.mysql.jdbc.Driver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("property")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("jdbc:mysql://localhost:3306/mybatis?characterEncoding=utf-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("property")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("property")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("123456"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dataSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("environments")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("这个事务管理器，之前在第 6 章中我们没有提及，所以本章我们来提一下。")]),s._v(" "),a("h3",{attrs:{id:"_2-1-事务管理器的类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-事务管理器的类型"}},[s._v("#")]),s._v(" 2.1 事务管理器的类型")]),s._v(" "),a("p",[s._v("在 MyBatis 中有两种事务管理器：")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("JDBC")]),s._v(" – 这个配置直接使用了 JDBC 的提交和回滚方法，它依赖从数据源获得的连接来管理事务作用域。")]),s._v(" "),a("li",[a("strong",[s._v("MANAGED")]),s._v(" – 使用外置的事务管理器（如 WebLogic 、JBOSS 等），这种情况下几乎不作任何操作，只预留了是否关闭连接的配置")])]),s._v(" "),a("p",[s._v("前一种就是我们一直在用的，相信各位走过这么十几章了也应该觉得，事务管理器就应该是这样才对的，但 MyBatis 还考虑到一些特殊的情况，所以他还准备了事务管理器外置的这么一种设计。不过由于这种情况实在太太太太太罕见了，所以我们也不去探究 "),a("strong",[s._v("MANAGED")]),s._v(" 类型了。")]),s._v(" "),a("p",[s._v("除此之外，MyBatis 还提供了对 SpringFramework 的支持，有关这部分内容，我们放在整合 SpringFramework 的章节再讲解。")]),s._v(" "),a("h3",{attrs:{id:"_2-2-sqlsession控制事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-sqlsession控制事务"}},[s._v("#")]),s._v(" 2.2 SqlSession控制事务")]),s._v(" "),a("p",[s._v("咱们目前的重点还是基于 jdbc 的事务控制哈，MyBatis 框架帮我们做了事务控制，而最终落实的操作上还是 "),a("code",[s._v("SqlSession")]),s._v(" 上的几个方法，以及由 "),a("code",[s._v("SqlSessionFactory")]),s._v(" 创建 "),a("code",[s._v("SqlSession")]),s._v(" 上：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SqlSession")]),s._v(" sqlSession "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sqlSessionFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("openSession")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SqlSession")]),s._v(" sqlSessionAutoCommit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sqlSessionFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("openSession")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("注意看细节，"),a("code",[s._v("openSession")]),s._v(" 方法有一个重载的可以传入 boolean 参数的方法，这个参数最终会落实到原生 jdbc 操作的如下语句：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Connection")]),s._v(" connection "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DriverManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getConnection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    connection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setAutoCommit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("autoCommit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如果在开启新的 "),a("code",[s._v("SqlSession")]),s._v(" 时，传入的 "),a("code",[s._v("autoCommit")]),s._v(" 为 "),a("strong",[s._v("true")]),s._v(" ，那就意味着该 "),a("code",[s._v("SqlSession")]),s._v(" 不参与任何事务操作了，具体我们可以简单测试一下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("OpenSessionAutoCommitApplication")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exception")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("InputStream")]),s._v(" xml "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Resources")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getResourceAsStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mybatis-config.xml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SqlSessionFactory")]),s._v(" sqlSessionFactory "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SqlSessionFactoryBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("xml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SqlSession")]),s._v(" sqlSession "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sqlSessionFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("openSession")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注意此处先传入false")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SqlSession")]),s._v(" sqlSession2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sqlSessionFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("openSession")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DepartmentMapper")]),s._v(" departmentMapper "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sqlSession"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getMapper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DepartmentMapper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DepartmentMapper")]),s._v(" departmentMapper2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sqlSession2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getMapper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DepartmentMapper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Department")]),s._v(" department "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" departmentMapper2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"53e3803ebbf4f97968e0253e5ad4cc83"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 刚查出来的数据中，name为"测试产品部"')]),s._v("\n        department"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"测试部部"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        departmentMapper2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("department"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Department")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" departmentList "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" departmentMapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        departmentList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        \n        sqlSession"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        sqlSession2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("close")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("如上述代码所示，"),a("code",[s._v("sqlSession")]),s._v(" 是带事务的，根据 MySQL 的默认事务隔离级别 "),a("strong",[s._v("repeatable read")]),s._v(" ，它应该读不到其它事务修改的数据，而此 "),a("code",[s._v("sqlSession2")]),s._v(" 传入了 "),a("strong",[s._v("false")]),s._v(" ，代表着它也开启了事务，那下面 "),a("code",[s._v("departmentMapper2")]),s._v(" 更新部门信息时， "),a("code",[s._v("departmentMapper")]),s._v(" 查出来的数据就应该是修改之前的 “测试产品部” 。我们运行 "),a("code",[s._v("main")]),s._v(" 方法，观察控制台的数据打印：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Department{id='00000000000000000000000000000000', name='全部部门', tel='-'}\nDepartment{id='18ec781fbefd727923b0d35740b177ab', name='开发部', tel='123'}\nDepartment{id='53e3803ebbf4f97968e0253e5ad4cc83', name='测试产品部', tel='789'}\nDepartment{id='ee0e342201004c1721e69a99ac0dc0df', name='运维部', tel='456'}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("果然是可重复读，"),a("code",[s._v("sqlSession2")]),s._v(" 的事务中修改没有丝毫干扰到 "),a("code",[s._v("sqlSession")]),s._v(" 。")]),s._v(" "),a("p",[s._v("接下来，我们把上面 "),a("code",[s._v("sqlSession2")]),s._v(" 的开启中，参数改为 "),a("strong",[s._v("true")]),s._v(" ，这样就意味着查询也好、修改也好，都不在事务中操作了，这次我们再观察运行结果：（已提前把数据库的数据改回了 “测试产品部” ）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Department{id='00000000000000000000000000000000', name='全部部门', tel='-'}\nDepartment{id='18ec781fbefd727923b0d35740b177ab', name='开发部', tel='123'}\nDepartment{id='53e3803ebbf4f97968e0253e5ad4cc83', name='测试部部', tel='789'}\nDepartment{id='ee0e342201004c1721e69a99ac0dc0df', name='运维部', tel='456'}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("可见这样操作之后，"),a("code",[s._v("sqlSession")]),s._v(" 可以查询到修改之后的数据了。")]),s._v(" "),a("p",[s._v("至于剩下的 "),a("code",[s._v("commit")]),s._v(" 和 "),a("code",[s._v("rollback")]),s._v(" 方法，实在是老生常谈了，小册也就不多啰嗦了。")]),s._v(" "),a("p",[s._v("【本章的内容相对简单，重在回顾事务相关的一些概念和设计。下一章我们就深入到底层，研究一下 MyBatis 是如何封装事务这一层不算复杂的 API 】")])])}),[],!1,null,null,null);t.default=e.exports}}]);