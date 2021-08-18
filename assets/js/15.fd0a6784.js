(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{515:function(v,_,t){"use strict";t.r(_);var a=t(3),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"mysql锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql锁"}},[v._v("#")]),v._v(" Mysql锁")]),v._v(" "),t("h3",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[v._v("#")]),v._v(" 介绍")]),v._v(" "),t("ul",[t("li",[v._v("按照锁的粒度来说，mysql主要包含三种类型的锁机制")])]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("全局锁")]),v._v("：锁的是整个database，由mysql的sql layer层实现的")]),v._v(" "),t("p",[t("strong",[v._v("表级锁")]),v._v("：锁的是某张表，由mysql的sql layer层实现的")]),v._v(" "),t("p",[t("strong",[v._v("行锁")]),v._v("：锁的是某行数据，也可能锁定行之间的间隙。有某些存储引擎实现，比如INNODB")])]),v._v(" "),t("ul",[t("li",[v._v("按照锁的功能来说分为："),t("strong",[v._v("共享读锁和排他写锁")])]),v._v(" "),t("li",[v._v("按照锁的实现方式分为："),t("strong",[v._v("悲观锁和乐观锁")]),v._v("（使用某一版本列或者唯一列进行逻辑控制）")]),v._v(" "),t("li",[v._v("表级锁和行级锁的区别：")])]),v._v(" "),t("blockquote",[t("p",[v._v("表级锁：开销小，加锁快，不会出现死锁，锁定粒度大，发生锁冲突的概率最高，并发度最低")]),v._v(" "),t("p",[v._v("行级锁：开销大，加锁慢，会出现死锁，锁定粒度最小，发生锁冲突的概率最低，并发度最高")])]),v._v(" "),t("h3",{attrs:{id:"表级锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表级锁"}},[v._v("#")]),v._v(" 表级锁")]),v._v(" "),t("p",[t("strong",[v._v("由mysql sql layer层实现")])]),v._v(" "),t("ul",[t("li",[v._v("Mysql的 表级锁有两种")])]),v._v(" "),t("blockquote",[t("p",[v._v("一种是表锁")]),v._v(" "),t("p",[v._v("一种是元数据锁(meta data lock mdl)")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("表锁有两种表现形式")]),v._v(" "),t("blockquote",[t("p",[v._v("表共享读锁:(table read lock)")]),v._v(" "),t("p",[v._v("表独占写锁:(table write lock)")])])]),v._v(" "),t("li",[t("p",[v._v("手动加锁")]),v._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("lock table 表名 read/write \n")])])])]),v._v(" "),t("li",[t("p",[v._v("查看锁情况")]),v._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("show open tables\n")])])])]),v._v(" "),t("li",[t("p",[v._v("删除锁")]),v._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("unlock tables\n")])])])])]),v._v(" "),t("h3",{attrs:{id:"mdl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mdl"}},[v._v("#")]),v._v(" MDL")]),v._v(" "),t("p",[t("strong",[v._v("元数据锁")])]),v._v(" "),t("blockquote",[t("p",[v._v("MDL不需要显式使用,在访问一个表的时候会被自动加上,MDL的作用是,保证读写的正确性,你可以想象,如果一个查询正在遍历一个表中的数据,而执行期间另一个线程对这个表结构做了变更,删除了一列,那么查询线程拿到的结果跟表结构对不上,肯定是不行的")]),v._v(" "),t("p",[v._v("因此,在mysql5.5版本中引入了MDL,当对一个表做增删改查操作的时候,加MDL读锁,当要对表做结构变更操作的时候,加MDL写锁")]),v._v(" "),t("ul",[t("li",[v._v("读锁之间不互斥,因此你可以有多个线程同时对一张表增删改查")]),v._v(" "),t("li",[v._v("读写锁之间,写锁之间是互斥的,用来保证变更表结构操作的安全性,因此,如果有两个线程要同时给一个表加字段,其中一个要等另一个执行完才能开始执行")])])]),v._v(" "),t("h3",{attrs:{id:"行级锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#行级锁"}},[v._v("#")]),v._v(" 行级锁")]),v._v(" "),t("blockquote",[t("p",[v._v("Mysql的行级锁,是由存储引擎来实现的,利用存储引擎锁住索引项来实现的")])]),v._v(" "),t("ul",[t("li",[t("p",[v._v("INNODB的行级锁,按照锁定的范围来说,分为三种:")]),v._v(" "),t("blockquote",[t("p",[v._v("记录锁(Record Locks):锁定索引中一条记录")]),v._v(" "),t("p",[v._v("间隙锁(Gap Locks):要么锁住索引记录中间的值,要不锁住第一个索引记录前面的值或者最后一个索引记录后面的值")]),v._v(" "),t("p",[v._v("Next-key Locks:是索引记录上的记录锁和索引之间的间隙锁的组合")])])]),v._v(" "),t("li",[t("p",[v._v("INNODB的行锁,按照功能来说,分为两种:RR")]),v._v(" "),t("blockquote",[t("p",[v._v("共享锁:允许一个事务去读一行,阻止其他事务获得相同数据集的排它锁")]),v._v(" "),t("p",[v._v("排它锁:允许获得排他锁的事务更新数据,阻止其他事务取得相同数据集的共享读锁和排他写锁")])])])]),v._v(" "),t("p",[v._v("对于UPDATE, DELETE和INSERT语句,INNODB会自动给涉及数据集加排它锁")]),v._v(" "),t("p",[v._v("对于普通的SELECT语句,INNODB不会加任何锁")]),v._v(" "),t("p",[t("strong",[v._v("手动加共享锁:")])]),v._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("select * from table_name where .... LOCK IN SHARE MODE\n")])])]),t("p",[t("strong",[v._v("手动加排它锁:")])]),v._v(" "),t("div",{staticClass:"language-mysql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("select * from table_name where ... FOR UPDATE\n")])])]),t("ul",[t("li",[t("p",[v._v("INNODB也实现了表级锁,也就是意向锁,意向锁是mysql内部使用,不需要用户干预\\")]),v._v(" "),t("blockquote",[t("p",[v._v("意向共享锁(IS):事务打算给数据行加行共享锁,事务在给一个数据行加共享锁前必须先取得该表的IS锁")]),v._v(" "),t("p",[v._v("意向排它锁(IX):事务打算给数据行加行排它锁,事务在给一个数据行加排它锁前必须先取得该表的IX锁")])])]),v._v(" "),t("li",[t("p",[v._v("意向锁和行锁可以共存,意向锁的主要作用是为了全表更新数据时的性能提升,否则在全表更新数据时,需要先检索该表是否某些记录上面有行锁")])])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th"),v._v(" "),t("th",[v._v("共享锁(s)")]),v._v(" "),t("th",[v._v("排他锁(X)")]),v._v(" "),t("th",[v._v("意向共享锁(IS)")]),v._v(" "),t("th",[v._v("意向排它锁(IX)")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("共享锁(s)")]),v._v(" "),t("td",[v._v("兼容")]),v._v(" "),t("td",[v._v("冲突")]),v._v(" "),t("td",[v._v("兼容")]),v._v(" "),t("td",[v._v("冲突")])]),v._v(" "),t("tr",[t("td",[v._v("排他锁(X)")]),v._v(" "),t("td",[v._v("冲突")]),v._v(" "),t("td",[v._v("冲突")]),v._v(" "),t("td",[v._v("冲突")]),v._v(" "),t("td",[v._v("冲突")])]),v._v(" "),t("tr",[t("td",[v._v("意向共享锁(IS)")]),v._v(" "),t("td",[v._v("兼容")]),v._v(" "),t("td",[v._v("冲突")]),v._v(" "),t("td",[v._v("兼容")]),v._v(" "),t("td",[v._v("兼容")])]),v._v(" "),t("tr",[t("td",[v._v("意向排它锁(IX)")]),v._v(" "),t("td",[v._v("冲突")]),v._v(" "),t("td",[v._v("冲突")]),v._v(" "),t("td",[v._v("兼容")]),v._v(" "),t("td",[v._v("兼容")])])])]),v._v(" "),t("ul",[t("li",[v._v("INNODB行锁是通过给索引上的索引项加锁来实现的,因此INNODB这种行锁实现特点意味着:只有通过索引条件检索的数据,INNODB才是用行级锁,否则,INNODB将使用表锁")])])])}),[],!1,null,null,null);_.default=s.exports}}]);