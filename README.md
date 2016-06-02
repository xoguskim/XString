# XString

Javascript string utiltity library extension


# How to use

1. import xogus.xstring.js javascript file to your html

  ```html
  <html>
  <head>
  <script src="xogus.xstring.js"></script>
  </head>
  ...
  ```
2. call extended methods of String object

  ```javascript
  var originalString = '1234567';
  var ellipsiedString = originalString.ellipsis(4);
  ```

# API References

1. String.ellipsis
  
  ellipsis string value.

  ```javascript
  var originalString = 'abcdefghijk';
  var ellipsiedString6 = originalString.ellipsis(6);  // abcde…
  var ellipsiedString7 = originalString.ellipsis(7);  // abcdef…
  var ellipsiedString8 = originalString.ellipsis(8);  // abc … jk
  var ellipsiedString9 = originalString.ellipsis(9);  // abc … ijk
  ```

2. String.isCSSColorValue
  
  check whether a string value is a CSS color value format or not.
  this method check below

  1. hexa decimal html color code expression with '#' character. for example #fff, #11ffdd

  2. rgb/rgba expression. for example rgb(100, 0, 20), rgba(100, 0, 20, 0.3)

  3. color names defined on [CSS Color Module Level 3](https://www.w3.org/TR/css3-color/). for example white, lightgray

  ```javascript
  var iscolor1 = '#12abef'.isCSSColorValue();  // true
  var iscolor2 = '#fff'.isCSSColorValue();  // true
  var iscolor3 = '#f'.isCSSColorValue();  // false
  var iscolor4 = '#zzzzzz'.isCSSColorValue();  // false
  var iscolor5 = 'rgb(255, 0, 0)'.isCSSColorValue();  // true
  var iscolor6 = 'rgba(255, 0, 0, 0.5)'.isCSSColorValue();  // true
  var iscolor7 = 'rgb(5255, 0, 0)'.isCSSColorValue();  // false
  var iscolor8 = 'rgba(255, 0, 0)'.isCSSColorValue();  // false
  var iscolor9 = 'white'.isCSSColorValue();  // true
  var iscolor10 = 'transparent'.isCSSColorValue();  // true
  var iscolor11 = 'myfavoritcolor'.isCSSColorValue();  // false
  ```
