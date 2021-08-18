(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{513:function(v,_,t){"use strict";t.r(_);var r=t(3),a=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"jvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm"}},[v._v("#")]),v._v(" JVM")]),v._v(" "),t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[v._v("#")]),v._v(" 介绍")]),v._v(" "),t("blockquote",[t("p",[v._v("类的生命周期:装载->链接(验证、准备、解析)->初始化->使用->卸载")])]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("装载")]),v._v(":")]),v._v(" "),t("ol",[t("li",[v._v("字节码文件 > 字节流 > 类加载器")]),v._v(" "),t("li",[v._v("将字节流所代表的静态存储结构转化为方法区的运行时数据结构")]),v._v(" "),t("li",[v._v("在堆中生成一个代表加载进来类的java.lang.Class对象,作为方法区的数据访问的入口")])]),v._v(" "),t("p",[t("strong",[v._v("链接")]),v._v(":")]),v._v(" "),t("p",[v._v("验证:文件是否正确")]),v._v(" "),t("p",[v._v("准备:为类变量分配内存,并初始化为当前类型的默认值")]),v._v(" "),t("p",[v._v("解析:符号引用转换为直接引用")])]),v._v(" "),t("h2",{attrs:{id:"垃圾回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收"}},[v._v("#")]),v._v(" 垃圾回收")]),v._v(" "),t("blockquote",[t("p",[v._v("引用计数法")]),v._v(" "),t("p",[v._v("缺点:循环引用造成内存泄露最终导致内存溢出")]),v._v(" "),t("p",[v._v("可达性分析算法")]),v._v(" "),t("p",[v._v("可作为GC root的根的有局部变量表中的元素,静态变量,常量,JNI")])]),v._v(" "),t("p",[t("strong",[v._v("垃圾收集算法")])]),v._v(" "),t("blockquote",[t("p",[v._v("标记/清除算法:")]),v._v(" "),t("ol",[t("li",[v._v("内存不连续")]),v._v(" "),t("li",[v._v("递归遍历全堆的对象,效率低")])]),v._v(" "),t("p",[v._v("复制算法:")]),v._v(" "),t("p",[v._v("标记整理算法")])]),v._v(" "),t("p",[t("strong",[v._v("垃圾收集器")])]),v._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5CDell%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210719124544694.png",alt:"image-20210719124544694"}})]),v._v(" "),t("blockquote",[t("p",[v._v("young:复制算法")]),v._v(" "),t("p",[v._v("old/tenured:标记整理算法/标记清除算法")])]),v._v(" "),t("blockquote",[t("p",[t("strong",[v._v("新生代")])]),v._v(" "),t("p",[t("strong",[v._v("serial")]),v._v(":最基本的 jdk1.3之前唯一新生代垃圾收集器,复制算法,单线程")]),v._v(" "),t("p",[t("strong",[v._v("parNew")]),v._v(":关注停顿时间,并行")]),v._v(" "),t("p",[t("strong",[v._v("parallel Scavenge")]),v._v(":关注吞吐量,并行")]),v._v(" "),t("p",[t("strong",[v._v("老年代")])]),v._v(" "),t("p",[t("strong",[v._v("serial old")]),v._v(":标记整理算法,单线程")]),v._v(" "),t("p",[t("strong",[v._v("parallel old")]),v._v(":关注吞吐量,并行")]),v._v(" "),t("p",[t("strong",[v._v("CMS")]),v._v(":部分并发")]),v._v(" "),t("p",[t("strong",[v._v("G1")])])])])}),[],!1,null,null,null);_.default=a.exports}}]);