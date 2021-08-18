(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{519:function(a,t,s){"use strict";s.r(t);var r=s(3),_=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"mysql存储引擎原理拆解以及设计深度剖析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql存储引擎原理拆解以及设计深度剖析"}},[a._v("#")]),a._v(" Mysql存储引擎原理拆解以及设计深度剖析")]),a._v(" "),s("h3",{attrs:{id:"mysql记录存储"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql记录存储"}},[a._v("#")]),a._v(" Mysql记录存储")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5CDell%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210531152317899.png",alt:"image-20210531152317899"}})]),a._v(" "),s("h4",{attrs:{id:"页头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页头"}},[a._v("#")]),a._v(" 页头")]),a._v(" "),s("ul",[s("li",[a._v("最大虚记录：比页内最大主键还大")]),a._v(" "),s("li",[a._v("最小虚记录：比页内最小主键还小")])]),a._v(" "),s("h4",{attrs:{id:"记录堆"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#记录堆"}},[a._v("#")]),a._v(" 记录堆")]),a._v(" "),s("ul",[s("li",[a._v("行记录存储去，分为有效记录和已删除记录两种")])]),a._v(" "),s("h4",{attrs:{id:"自由空间链表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自由空间链表"}},[a._v("#")]),a._v(" 自由空间链表")]),a._v(" "),s("ul",[s("li",[a._v("已删除记录组成的链表")])]),a._v(" "),s("h4",{attrs:{id:"未分配空间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#未分配空间"}},[a._v("#")]),a._v(" 未分配空间")]),a._v(" "),s("ul",[s("li",[a._v("页面未使用的存储空间")])]),a._v(" "),s("h4",{attrs:{id:"页尾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页尾"}},[a._v("#")]),a._v(" 页尾")]),a._v(" "),s("ul",[s("li",[a._v("页面最后部分，占8个字节，主要存储页面的效验信息")])]),a._v(" "),s("h3",{attrs:{id:"页面记录维护"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面记录维护"}},[a._v("#")]),a._v(" 页面记录维护")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5CDell%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210531152613075.png",alt:"image-20210531152613075"}})]),a._v(" "),s("h4",{attrs:{id:"顺序保证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#顺序保证"}},[a._v("#")]),a._v(" 顺序保证")]),a._v(" "),s("ul",[s("li",[a._v("物理有序")])]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5CDell%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210531152738388.png",alt:"image-20210531152738388"}})]),a._v(" "),s("ul",[s("li",[a._v("逻辑有序(使用)")])]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5CDell%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210531152811093.png",alt:"image-20210531152811093"}})]),a._v(" "),s("h4",{attrs:{id:"插入策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插入策略"}},[a._v("#")]),a._v(" 插入策略")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("自由空间链表")]),a._v(" "),s("p",[a._v("优先使用已删除记录的空间")])]),a._v(" "),s("li",[s("p",[a._v("未使用空间")])])]),a._v(" "),s("h4",{attrs:{id:"页内查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页内查询"}},[a._v("#")]),a._v(" 页内查询")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5CDell%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210531153108354.png",alt:"image-20210531153108354"}})]),a._v(" "),s("ul",[s("li",[s("p",[a._v("遍历")])]),a._v(" "),s("li",[s("p",[a._v("二分查找")]),a._v(" "),s("p",[a._v("前提记录大小一样才能使用，因为存储的记录都是不定长的，所以无法根据size做偏移")])])]),a._v(" "),s("h4",{attrs:{id:"slot-槽位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slot-槽位"}},[a._v("#")]),a._v(" Slot（槽位）")]),a._v(" "),s("ul",[s("li",[a._v("是一块连续的内存")]),a._v(" "),s("li",[a._v("每个slot大小一样")]),a._v(" "),s("li",[a._v("可以根据Key的分布计算出N个槽位，每个槽位指向一条记录")])]),a._v(" "),s("h2",{attrs:{id:"mysql-innodb存储引擎内存管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-innodb存储引擎内存管理"}},[a._v("#")]),a._v(" Mysql INNODB存储引擎内存管理")]),a._v(" "),s("h3",{attrs:{id:"innodb内存管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#innodb内存管理"}},[a._v("#")]),a._v(" INNODB内存管理")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5CDell%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210531153133681.png",alt:"image-20210531153133681"}})]),a._v(" "),s("h3",{attrs:{id:"innodb内存管理-技术点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#innodb内存管理-技术点"}},[a._v("#")]),a._v(" INNODB内存管理——技术点")]),a._v(" "),s("h4",{attrs:{id:"内存池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存池"}},[a._v("#")]),a._v(" 内存池")]),a._v(" "),s("p",[a._v("预分配出来的内存空间")]),a._v(" "),s("h4",{attrs:{id:"内存页面管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存页面管理"}},[a._v("#")]),a._v(" 内存页面管理")]),a._v(" "),s("ul",[s("li",[a._v("页面映射")]),a._v(" "),s("li",[a._v("页面数据管理")])]),a._v(" "),s("h4",{attrs:{id:"数据淘汰"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据淘汰"}},[a._v("#")]),a._v(" 数据淘汰")]),a._v(" "),s("ul",[s("li",[a._v("内存也都被使用")]),a._v(" "),s("li",[a._v("需要加在新数据")])]),a._v(" "),s("h3",{attrs:{id:"innodb内存管理-页面管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#innodb内存管理-页面管理"}},[a._v("#")]),a._v(" INNODB内存管理——页面管理")]),a._v(" "),s("h4",{attrs:{id:"空闲页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#空闲页"}},[a._v("#")]),a._v(" 空闲页")]),a._v(" "),s("h4",{attrs:{id:"数据页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据页"}},[a._v("#")]),a._v(" 数据页")]),a._v(" "),s("h4",{attrs:{id:"脏页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脏页"}},[a._v("#")]),a._v(" 脏页")]),a._v(" "),s("h3",{attrs:{id:"innodb内存管理-页面淘汰"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#innodb内存管理-页面淘汰"}},[a._v("#")]),a._v(" INNODB内存管理——页面淘汰")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5CDell%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210531153344412.png",alt:"image-20210531153344412"}})]),a._v(" "),s("p",[a._v("思考：全表扫描对内存的影响？")]),a._v(" "),s("p",[a._v("解决问题：避免热数据被淘汰")]),a._v(" "),s("p",[a._v("思路：")]),a._v(" "),s("ul",[s("li",[a._v("访问时间+频率（Redis）")]),a._v(" "),s("li",[a._v("两个LRU表")])]),a._v(" "),s("h3",{attrs:{id:"mysql内存管理-lru"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql内存管理-lru"}},[a._v("#")]),a._v(" Mysql内存管理——LRU")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5CDell%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210531153458539.png",alt:"image-20210531153458539"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5CDell%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210531153635007.png",alt:"image-20210531153635007"}})]),a._v(" "),s("p",[a._v("Midpoint：保证new和old的比例是5:3")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5CDell%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210531153726427.png",alt:"image-20210531153726427"}})]),a._v(" "),s("h4",{attrs:{id:"页面装载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面装载"}},[a._v("#")]),a._v(" 页面装载")]),a._v(" "),s("p",[a._v("装载策略")]),a._v(" "),s("p",[a._v("Free list取 > LRU中淘汰 > LRU Flush")]),a._v(" "),s("p",[a._v("先从空闲页中取，如果空闲页中没有，就去LRU_old尾部开始淘汰，如果发现尾部的还在使用，无法淘汰，就向前找，如果整个old里面都不能被淘汰，开始将脏页刷入磁盘，之后进行淘汰")]),a._v(" "),s("h4",{attrs:{id:"页面淘汰"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面淘汰"}},[a._v("#")]),a._v(" 页面淘汰")]),a._v(" "),s("ul",[s("li",[a._v("LRU尾部淘汰")]),a._v(" "),s("li",[a._v("Flush LRU淘汰")])]),a._v(" "),s("p",[a._v("思考：LRU链表中将第一个脏页刷盘并“释放”是放到LRU尾部还是直接放FreeList？")]),a._v(" "),s("p",[a._v("5.2以前值放到尾部，之后是直接放到FreeList")]),a._v(" "),s("h4",{attrs:{id:"位置移动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#位置移动"}},[a._v("#")]),a._v(" 位置移动")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5CDell%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210531153827001.png",alt:"image-20210531153827001"}})]),a._v(" "),s("ul",[s("li",[s("p",[a._v("old到new")]),a._v(" "),s("p",[a._v("innodb_old_blocks_time")]),a._v(" "),s("p",[a._v("old区存活时间，大于此值，有机会进入new区")]),a._v(" "),s("p",[a._v("机会是指超过存活时间又被再次访问")])]),a._v(" "),s("li",[s("p",[a._v("new到old")]),a._v(" "),s("p",[a._v("始终保持Midpoint处在new和old5：3的位置")])])]),a._v(" "),s("h4",{attrs:{id:"lru-new的操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lru-new的操作"}},[a._v("#")]),a._v(" LRU_new的操作")]),a._v(" "),s("p",[a._v("Mysql设计思路:减少移动的次数")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5CDell%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210531154003202.png",alt:"image-20210531154003202"}})]),a._v(" "),s("h2",{attrs:{id:"mysql事务实现原理拆解以及设计深度解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql事务实现原理拆解以及设计深度解析"}},[a._v("#")]),a._v(" Mysql事务实现原理拆解以及设计深度解析")]),a._v(" "),s("h3",{attrs:{id:"mysql事务基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql事务基本概念"}},[a._v("#")]),a._v(" Mysql事务基本概念")]),a._v(" "),s("h4",{attrs:{id:"事务特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务特性"}},[a._v("#")]),a._v(" 事务特性")]),a._v(" "),s("ul",[s("li",[a._v("A（原子性）：全部成功或全部失败")]),a._v(" "),s("li",[a._v("I（隔离性）：并行事务之间互不干扰")]),a._v(" "),s("li",[a._v("D（持久性）：事务提交后，永久生效")]),a._v(" "),s("li",[a._v("C（一致性）：通过AID保证")])]),a._v(" "),s("h4",{attrs:{id:"并发问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发问题"}},[a._v("#")]),a._v(" 并发问题")]),a._v(" "),s("ul",[s("li",[a._v("脏读：读取到未提交的数据")]),a._v(" "),s("li",[a._v("不可重复读：两次读取结果不同")]),a._v(" "),s("li",[a._v("幻读：select操作得到的结果所表征的数据状态无法支撑后续的业务操作")])]),a._v(" "),s("h4",{attrs:{id:"隔离级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#隔离级别"}},[a._v("#")]),a._v(" 隔离级别")]),a._v(" "),s("ul",[s("li",[a._v("读未提交：最低隔离级别，会读取到其他事务未提交的数据；（脏读）")]),a._v(" "),s("li",[a._v("读已提交：事务过程中可以读取到其他事务已提交的数据；（不可重复读）")]),a._v(" "),s("li",[a._v("可重复读：每次读取相同结果集，不管其他事务是否提交；（幻读）")]),a._v(" "),s("li",[a._v("串行化：事务排队，隔离级别最高，性能最差；")])]),a._v(" "),s("h3",{attrs:{id:"mysql事务实现原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql事务实现原理"}},[a._v("#")]),a._v(" Mysql事务实现原理")]),a._v(" "),s("h4",{attrs:{id:"mvcc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mvcc"}},[a._v("#")]),a._v(" MVCC")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("多版本并发控制")])]),a._v(" "),s("li",[s("p",[a._v("解决读-写冲突")])]),a._v(" "),s("li",[s("p",[a._v("隐藏列")]),a._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5CDell%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210531154118423.png",alt:"image-20210531154118423"}})])])]),a._v(" "),s("h4",{attrs:{id:"undo-log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#undo-log"}},[a._v("#")]),a._v(" undo log")]),a._v(" "),s("ul",[s("li",[a._v("回滚日志")]),a._v(" "),s("li",[a._v("保证事务原子性")]),a._v(" "),s("li",[a._v("实现数据多版本")]),a._v(" "),s("li",[a._v("delete undo log ：用于回滚，提交即清理")]),a._v(" "),s("li",[a._v("update undo log：用于回滚，同时实现快照读，不能随便删除")])]),a._v(" "),s("h4",{attrs:{id:"redo-log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redo-log"}},[a._v("#")]),a._v(" redo log")]),a._v(" "),s("h2",{attrs:{id:"mysql锁实现原理拆解以及设计深度剖析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql锁实现原理拆解以及设计深度剖析"}},[a._v("#")]),a._v(" Mysql锁实现原理拆解以及设计深度剖析")]),a._v(" "),s("h3",{attrs:{id:"锁粒度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#锁粒度"}},[a._v("#")]),a._v(" 锁粒度")]),a._v(" "),s("h4",{attrs:{id:"行级锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行级锁"}},[a._v("#")]),a._v(" 行级锁")]),a._v(" "),s("ul",[s("li",[a._v("作用在索引上")]),a._v(" "),s("li",[a._v("聚簇索引&二级索引")])]),a._v(" "),s("h4",{attrs:{id:"间隙锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#间隙锁"}},[a._v("#")]),a._v(" 间隙锁")]),a._v(" "),s("ul",[s("li",[a._v("解决可重复读模式下的幻读问题")]),a._v(" "),s("li",[a._v("GAP锁不是加载记录上")]),a._v(" "),s("li",[a._v("GAP锁锁住的位置,是两条记录之间的GAP")]),a._v(" "),s("li",[a._v("保证两次当前读返回一致的记录")])]),a._v(" "),s("h4",{attrs:{id:"表级锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表级锁"}},[a._v("#")]),a._v(" 表级锁")]),a._v(" "),s("ul",[s("li",[a._v("全表扫描")])]),a._v(" "),s("h3",{attrs:{id:"类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[a._v("#")]),a._v(" 类型")]),a._v(" "),s("h4",{attrs:{id:"共享锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#共享锁"}},[a._v("#")]),a._v(" 共享锁")]),a._v(" "),s("ul",[s("li",[a._v("读锁，可以同时被多个事务获取，组织其他事务对记录的修改")])]),a._v(" "),s("h4",{attrs:{id:"排他锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#排他锁"}},[a._v("#")]),a._v(" 排他锁")]),a._v(" "),s("ul",[s("li",[a._v("写锁，只能被一个事务获取，允许获得锁的事务修改数据")])])])}),[],!1,null,null,null);t.default=_.exports}}]);