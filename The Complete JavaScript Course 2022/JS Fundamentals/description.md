
#### Strings and Template Literals



```js
const firstName = 'Joo';
const birthYear = 1990;
const year = 2022;
const job = 'designer';
const myIntro = "I'm " + firstName + ", a " + (year - birthYear) + ' year old ' + job + "!";
```

```js
const firstName = 'Joo';
const birthYear = 1990;
const year = 2022;
const job = 'designer';
const myIntro = `I'm ${firstName}, a ${year - birthYear} year old, ${job}!`
```
