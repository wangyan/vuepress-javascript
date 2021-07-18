---
permalink: /type-conversions
---

# 类型转换

大多数情况下，运算符和函数会自动将赋予它们的值转换为正确的类型。

比如，`alert` 会自动将任何值都转换为字符串以进行显示。算术运算符会将值转换为数字。

在某些情况下，我们需要将值显式地转换为我们期望的类型。

::: tip 对象还未纳入讨论中

在本章中，我们不会讨论 object 类型。目前，我们将只学习原始类型。

之后，在我们学习完 object 类型后，我们会在 [object-toprimitive](/object-toprimitive) 一章中学习对象 — 原始值转换。

:::

## 字符串转换

当我们需要一个字符串形式的值时，就会进行字符串转换。

比如，`alert(value)` 将 `value` 转换为字符串类型，然后显示这个值。

我们也可以显式地调用 `String(value)` 来将 `value` 转换为字符串类型：

```js {4-5}
let value = true;
alert(typeof value); // boolean

value = String(value); // 现在，值是一个字符串形式的 "true"
alert(typeof value); // string
```

字符串转换最明显。`false` 变成 `"false"`，`null` 变成 `"null"` 等。

## 数字型转换

在算术函数和表达式中，会自动进行 number 类型转换。

比如，当把除法 `/` 用于非 number 类型：

```js
alert( "6" / "2" ); // 3, string 类型的值被自动转换成 number 类型后进行计算
```

我们也可以使用 `Number(value)` 显式地将这个 `value` 转换为 number 类型。

```js
let str = "123";
alert(typeof str); // string

let num = Number(str); // 变成 number 类型 123

alert(typeof num); // number
```

当我们从 string 类型源（如文本表单）中读取一个值，但期望输入一个数字时，通常需要进行显式转换。

如果该字符串不是一个有效的数字，转换的结果会是 `NaN`。例如：

```js
let age = Number("an arbitrary string instead of a number");

alert(age); // NaN，转换失败
```

number 类型转换规则：

| 值 | 变成…… |
| --- | --- |
| `undefined` | `NaN` |
| `null` | `0` |
|<code>true&nbsp;和&nbsp;false</code> | `1` and `0` |
| `string` | 去掉首尾空格后的纯数字字符串中含有的数字。如果剩余字符串为空，则转换结果为 `0`。否则，将会从剩余字符串中“读取”数字。当类型转换出现 error 时返回 `NaN`。 |

例子：

```js
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN（从字符串“读取”数字，读到 "z" 时出现错误）
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```

请注意 `null` 和 `undefined` 在这有点不同：`null` 变成数字 `0`，`undefined` 变成 `NaN`。

大多数数学运算符也执行这种转换，我们将在下一节中进行介绍。

## 布尔型转换

布尔（boolean）类型转换是最简单的一个。

它发生在逻辑运算中（稍后我们将进行条件判断和其他类似的东西），但是也可以通过调用 Boolean(value) 显式地进行转换。

转换规则如下：

- 直观上为“空”的值（如 `0`、空字符串、`null`、`undefined` 和 `NaN`）将变为 `false`。
- 其他值变成 `true`。

比如：

```js
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
```

::: warning 请注意：包含 0 的字符串 "0" 是 true

一些编程语言（比如 PHP）视 `"0"` 为 `false`。但在 JavaScript 中，非空的字符串总是 `true`。

```js
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // 空白，也是 true（任何非空字符串都是 true）
```

:::

## 总结

有三种常用的类型转换：转换为 string 类型、转换为 number 类型和转换为 boolean 类型。

**字符串转换** —— 转换发生在输出内容的时候，也可以通过 `String(value)` 进行显式转换。原始类型值的 string 类型转换通常是很明显的。

**数字型转换** —— 转换发生在进行算术操作时，也可以通过 `Number(value)` 进行显式转换。

数字型转换遵循以下规则：

| 值 |  变成…… |
|-------|-------------|
| `undefined` | `NaN` |
| `null` | `0` |
| <code>true&nbsp;/&nbsp;false</code> | `1 / 0` |
| `string` | “按原样读取”字符串，两端的空白会被忽略。空字符串变成 `0`。转换出错则输出 `NaN`。 |

**布尔型转换** —— 转换发生在进行逻辑操作时，也可以通过 `Boolean(value)` 进行显式转换。

布尔型转换遵循以下规则：

| 值 |  变成…… |
|-------|-------------|
| `0`, `null`, `undefined`, `NaN`, `""` | `false` |
| 其他值 | `true` |


上述的大多数规则都容易理解和记忆。人们通常会犯错误的值得注意的例子有以下几个：

- 对 `undefined` 进行数字型转换时，输出结果为 `NaN`，而非 `0`。
- 对 `"0"` 和只有空格的字符串（比如：`"   "`）进行布尔型转换时，输出结果为 `true`。

我们在本小节没有讲 object 类型的转换。在我们学习完更多关于 JavaScript 的基础知识后，我们会在专门介绍 object 的章节 [object-toprimitive](/object-toprimitive) 中详细讲解 object 类型转换。

## 任务

### 类型转换

下面这些表达式的结果是什么？

```js
"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
"  -9\n" + 5
"  -9\n" - 5
null + 1
undefined + 1
```

好好思考一下，把它们写下来然后和答案比较一下。

答案：

```js
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
7 / 0 = Infinity
" -9\n" + 5 = " -9\n5"
" -9\n" - 5 = -14
null + 1 = 1 // (3)
undefined + 1 = NaN // (4)
```

1. 字符串的加法 `"" + 1` 会将 `1` 转换为一个字符串：`"" + 1 = "1"`，然后我们得到了 `"1" + 0`，再次应用同样的规则。
2. 减法 `-` （就像大多数数学操作那样）只能用于数字，它会将空字符串 `""` 转换为 `0`。
3. `null` 经过数字化转换之后会变为 `0`。
4. `undefined` 经过数字化转换之后会变为 `NaN`。
