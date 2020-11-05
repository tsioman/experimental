Hello world 

1. preact (as external library from cdn)

```html
<script type="module">
  import {h, Component, render} from 'https://unpkg.com/preact?module';
  const app = h('h1', null, 'Hello World!');
  render(app, document.body);
</script>
```
https://unpkg.com/preact@10.5.5/dist/preact.module.js?module 4.3 kB


2. preact (+webpack+babel)

```javascript 
import { h, render } from "preact";
render(<h1>Hello World!</h1>, document.body);
```

webpack 5.4.0 compiled successfully in 713 ms

index.js 9,1 kB (9 095 байт)
index.js.map 25,3 kB (25 278 байт)

3. react (+webpack+babel)

```javascript 
import React from "react";
import { render } from "react-dom";
render(<h1>Hello World!</h1>, document.getElementById("root"));
```
webpack 5.4.0 compiled successfully in 2874 ms

index.js 128,5 kB (128 504 байта)
index.js.map 319,4 kB (319 367 байт)
