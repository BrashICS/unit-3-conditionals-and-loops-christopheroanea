# Unit 3 - Conditionals and Loops

## 3.7 - For

##### ICS3 - Mr. Brash 🐿️

<img src="../images/cs.png" width="100px">

<table>
<tr>
<th>3.7 - In this Lesson:</th>
<th>Unit 3 - Conditionals & Loops</th>
</tr>
<tr>
<td td valign="top" style="height: 100px;padding-right:50px">

- [For](#lesson)
- [Examples](#examples)
- [Practice Time!](#practice-time)
    - [Part 1](#part-1---is_number)
    - [Part 2](#part-2---validate)
    - [Part 3](#part-3---guess)
    
</td>
<td td valign="top" style="height: 100px;padding-right:50px">

- [README](../../README.md)
- [3.1 - If](../1%20-%20Conditionals/1%20-%20IF.md)
- [3.2 - Else-If](../1%20-%20Conditionals/2%20-%20Else-If.md)
- [3.3 - Else](../1%20-%20Conditionals/3%20-%20Else.md)
- [3.4 - While](./4%20-%20While.md)
- [3.5 - Interlude: `Strings`](./5%20-%20Interlude_Strings.md)
- [3.6 - Do...While](./6%20-%20Do-While.md)
- [3.7 - For](./7%20-%20For.md)

</td></tr></table>

---

### Lesson:

# DRAFT!

### Review
The while loop works on a condition (or multiple conditions)
```JS
while ((x <= 5) && (paused == false)) {   
  // do something
}
```

A **_lot_** of the time, it involves a counting variable - doing the loop a certain **number of times**
```JS
while (count < 100) {
  // do something
}
```
**_But_** many programmers forget to modify the counting variable, causing an infinite loop!

### Enter: [The For Loop](https://cs.brash.ca/unit-3/loops/for-loop)

[<img src="https://gist.github.com/assets/25152375/0305903d-ae6c-4fd4-a281-88d6e611a264" width="450px">](https://cs.brash.ca/unit-3/loops/for-loop)


If you know you'll be _counting_ - maybe going through a string or list - you could use the **[for loop](https://cs.brash.ca/unit-3/loops/for-loop)**. 

### It contains three parts, separated by _mandatory_ semicolons:
```JS
for (part1; part2; part3) { 
  // Your code
}
```
- `part1` is the declaration of any indexer or counting variable. Example: `let i = 0;`
- `part2` is _exactly_ like the `while` condition. Example: `i < 10;` (which means _while_ `i` is less than 10)
- `part3` is what will happen to the indexer on each loop iteration. Example: `i++` (increase `i` by 1) or maybe `i += 3` (add 3 to `i`) on each iteration

### You can increment / decrement by whatever amount you need.
```JS
for (let i = 100; i > 0; i--) {
  // Count down from 100 to 1
}

for (let j = 10; j <= 30; j += 2) {
  // Count up by 2's from 10 to 30
}

for (let x = 93; x > 51; x -= 5) {
  // Count down by 5's from 93 to 51
}
```

### Examples:

Print from 0% to 100% going up by 2.5%
```JS
for (let p = 0; p <= 100; p += 2.5) {
  console.log(p + "%");
}

// Output:
0%
2.5%
5%
...
97.5%
100%
```

Print the alphabet on one line using the character codes:
```JS
let alpha = "";

for (let letter = 65; letter < 91; letter++) {
  alpha += String.fromCharCode(letter);
}

console.log(alpha);
// Prints ABCDEFGHIJKLMNOPQRSTUVWXYZ
```

## Your Tasks:

[Return to the lesson](#34---for-loops)

Make a new coding file called `3.3 - For Loops.js`. Complete the following in that file. Assume the function parameters are proper numbers (no need for error-checking).

#### Part 1 - Printing to the _console_:
1. Write the function `countUp(start, stop)` that prints from `start` to `stop` (inclusive) on the console. **Example:**
  ```JS
  > countUp(5, 8)
  5
  6
  7
  8
  ```
2. Write the function `countDown(start, stop)` that prints _down_ from `start` to `stop` on the console. **Example:**
  ```JS
  > countDown(10, 6)
  10
  9
  7
  6
  ```

#### Part 2 - _Returning_ a value
1. Write the function `sum(n)` which _returns_ the sum (addition) from 1 to `n`. Use a for-loop to complete it.<br>**For Example:** `sum(7)` returns 28 (because 1+2+3+4+5+6+7 = 28)<br><br>
   
2. Write the function `count4(begin, end)` that _returns_ **how many** numbers are _divisible by 4_ from `begin` to `end` (inclusive). Use a for-loop to complete it.<br>**For Example:** `count4(5, 43)` returns 9 (because 8, 12, 16, 20, 24, 28, 32, 36, 40)<br><br>
   
3. Write the function `sum_divisible(n, x)` which _returns_ the sum (addition) of the values from 0 to `n` that are _divisible_ by `x`.<br>**For Example:** `sum_divisible(32, 6)` returns 90 (because 6+12+18+24+30 = 90)


<br><br>


