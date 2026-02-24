## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
getElementById: It selects one element and also returns a single element. It uses the 'id' of an element.
JS code: document.getElementById("box");

getElementsByClassName: It selects multiple elements and it returns a HTMLCollection which is live. It uses the 'class name' of the elements.
JS code: document.getElementsByClassName("box");

querySelector: It selects the first matching element and it returns the a single element. It uses any CSS selector of an element.
JS code: document.querySelector(".box");

querySelectorAll: It selects all matching elements and it returns a NodeList which is static. It uses the 'class name' of the elements.
JS code : document.querySelectorAll(".box");


## How do you create and insert a new element into the DOM?
Ans:
Step-1: Select the parent
const parent = document.getElementById("container");
Step-2: Create an element
const div = document.createElement("div");
Step-3: Add content
div.innerHTML = "<b>Hello World</b>";
Step-3: Append to the parent
parent.appendChild(div);


## What is Event Bubbling? And how does it work?
Ans:
Event Bubbling: Event Bubbling means when an event happens on a child element, it first runs on that element, then moves up to its parent, then its parent, and it continues the process — up to the document.

When we click an element, the event goes through 3 phases:
- [Capturing phase (top to down)]
- [Target phase (the actual clicked element)]
- [Bubbling phase (bottom to up)]


## What is Event Delegation in JavaScript? Why is it useful?
Ans:
Event Delegation: Event Delegation is a technique where a parent element manages events for its child elements using event bubbling, making code more efficient and scalable.

When a child element is clicked, the event bubbles up to the parent. The parent can detect which child triggered the event and respond accordingly.

It is useful for:
- [Instead of using more event listeners to many elements, we can use only one. This reduces memory usage.]
- [If new elements are added later, we don’t need to add new event listeners to them.]
- [It reduces repetition of writing codes and makes the code easier to manage.]


## What is the difference between preventDefault() and stopPropagation() methods?
Ans:
The methods preventDefault() and stopPropagation(), they both are event methods in JS.

preventDefault(): It stops the default behavior of an element. It also prevents the default browser behavior.
Example: Prevent a form from submitting.

stopPropagation(): It stops the event from bubbling to parent elements. But it does not prevent the default browser behavior.
