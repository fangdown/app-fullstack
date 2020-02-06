常见问题：
jsx why? how?
1. 更快
2. 类型安全
3. 开发效率


总结：
1. webpack+babel编译时，替换jsx为React.createElement(type,props, ...children)

2. 所有React.createElement执行结束后得到一个js对象，它能够完整描述dom结构， 称之为vdom

3. ReactDOM.render(vdom, container)可以将vdom转换成dom，并追加到dom中，通过递归遍历vdom树， 根据vtype不同，执行不同逻辑，vtype为1生成原生元素，为2则需要将类组件实例化并执行其render将返回vdom初始化，为3 则将函数执行并执行vdom初始化

## 什么时候调用render
1. 属性更新（如父级属性）
2. setState动作

## vdom-diff

差异类型：
1. 替换原来的节点，例如把div换成了p，Comp1换成Comp2
2. 移动、删除、新增子节点， 例如ul中的多个子节点li中出现了顺序互换。
3. 修改了节点的属性，例如节点类名发生了变化。
4. 对于文本节点，文本内容可能会改变。


重排（reorder）操作：INSERT_MARKUP（插入）、MOVE_EXISTING（移动）和 REMOVE_NODE（删除）。
INSERT_MARKUP，新的 component 类型不在老集合里， 即是全新的节点，需要对新节点执行插入操作。
MOVE_EXISTING，在老集合有新 component 类型，且 element 是可更新的类型，
generateComponentChildren 已调用 receiveComponent，这种情况下 prevChild=nextChild，就需要做移
动操作，可以复用以前的 DOM 节点。
REMOVE_NODE，老 component 类型，在新集合里也有，但对应的 element 不同则不能直接复用和更新，
需要执行删除操作，或者老 component 不在新集合里的，也需要执行删除操作。
