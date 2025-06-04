
# DOM-Manipulation

## 🔥 DOM SELECTORS & MANIPULATION in LWC ONLY

---

### ✅ `this.template.querySelector(selector)`  
Selects the first element inside your component's template matching the CSS selector.

```js
const el = this.template.querySelector('.my-class');
```

---

### ✅ `this.template.querySelectorAll(selector)`  
Selects all elements matching the selector inside your component template.  
Returns a **NodeList**, can be looped over with `forEach`.

```js
const els = this.template.querySelectorAll('button');  
els.forEach(btn => btn.style.color = 'red');  
```

---

## 2️⃣ ELEMENT PROPERTIES & METHODS you use in LWC

---

### ✅ `.textContent`  
Get or set the text inside an element.

```js
const para = this.template.querySelector('p');
para.textContent = 'New Text';
```

---

### ✅ `.innerHTML`  
Get or set HTML markup inside an element.

```js
const div = this.template.querySelector('.container');
div.innerHTML = '<b>Bold Text</b>';
```

---

### ✅ `.value`  
For form elements (`input`, `textarea`, `select`), get/set the value.

```js
const input = this.template.querySelector('input');
input.value = 'New input value';
```

---

### ✅ `.classList`  
It’s a special tool on an element that helps you add, remove, or toggle CSS classes without messing up other classes.

| Method                   | What it does                              | Example                          |
| ------------------------ | ----------------------------------------- | -------------------------------- |
| `.add('className')`      | Adds a class                              | `el.classList.add('highlight');` |
| `.remove('className')`   | Removes a class                           | `el.classList.remove('active');` |
| `.toggle('className')`   | Adds class if missing, removes if present | `el.classList.toggle('hidden');` |
| `.contains('className')` | Checks if class exists                    | `el.classList.contains('btn');`  |

Example:

```html
<div class="box"></div>
```

```js
const div = document.querySelector('.box');

div.classList.add('red');    // div now has classes: "box red"
div.classList.remove('box'); // div now has classes: "red"
div.classList.toggle('hidden'); // adds 'hidden' class
div.classList.toggle('hidden'); // removes 'hidden' class
```

---

### ✅ `.style`  
`style` lets you change inline CSS styles on an element directly using JavaScript.

Example:

```html
<p class="text">Hello World!</p>
```

```js
const p = document.querySelector('.text');
p.style.color = 'blue';         // Text becomes blue
p.style.fontWeight = 'bold';    // Text becomes bold
p.style.display = 'none';       // Hides the paragraph
```

---

### ✅ `.getAttribute()`, `.setAttribute()`, `.removeAttribute()`  
Work with element attributes:

```js
const img = this.template.querySelector('img');
const src = img.getAttribute('src');
img.setAttribute('alt', 'My Image');
img.removeAttribute('title');
```

---

### ✅ `.focus()`, `.click()`  
Programmatically focus or click elements:

```js
const input = this.template.querySelector('input');
input.focus();

const btn = this.template.querySelector('button');
btn.click();
```
