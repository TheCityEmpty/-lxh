# SVG 学习指南

`svg` 是一种矢量图标，最大的特点就是不管放多大都不会图片失真。`scg` 和 `canvas` 一样， 如果不设置宽高， 则默认是宽300， 高150。


## SVG 形状集合

### 公有属性

- stroke 描边颜色， 实例：stroke="red"
- stroke-width 描边宽度， 实例：stroke-width="2", 这里有个注意点：当你的描边宽度为2时， 那他实际就相当css 中1像素的边框，还有1像素它占据了实际内容的区域
- stroke-opacity 描边颜色透明度
- fill 填充颜色 ，实例：fill="#00AEEC"
- fill-opacity 填充颜色透明度
- opacity 整个图形的透明度
### `circle` 圆形

- cx 圆心点 x 位置
- cy 圆心点 y 位置
- r  圆半径

### `rect` 矩形

- x 左上角 x 位置
- y 左上角 y 位置
- width 宽度
- height 高度
- rx ,ry 圆角

### `ellipse` 椭圆

- cx 圆心点 x 位置
- cy 圆心点 y 位置
- rx x方向的半径
- ry y方向的半径

### `line` 直线 （需要指定 stroke 才能展示）

- x1, y1 起始点 （x, y）
- x2, y2 结束点 （x, y）

### `polygon` 多边形 （需要指定 stroke 或 fill 才能展示）
- points 多边形每个点的 （x, y），实例：points="30,50 40,80 70,100 100,300 30,50"
- fill-rule: nonzero（默认）| evenodd。 填充规则， 对于多边形任意两点连成的任意边之间 没有重叠， 则这两种填充规则没什么区别。如果有重叠， 则 `evenodd` 规则表现为 重叠部分被镂空。

### `path` 路径

- d 路径的指令



















