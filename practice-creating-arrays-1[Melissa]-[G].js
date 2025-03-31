console.log('\u{1F389}');

let greetings = "Greetings:\nHello (English)\nHola (Spanish)\n\u{3053}\u{3093}\u{306B}\u{3061}\u{306F} (Japanese)";
console.log(greetings);

let favoriteSymbols = "My Favorite Symbols:\n1. Heart: \u{2764}\n2. Star: \u{2605}\n3. Checkmark \u{2713}";
console.log(favoriteSymbols);

let toDoList = "To-Do List: \n- Task Status\n- Clean Done\n- Code In Progress\n- Relax Pending";
console.log(toDoList);

let receipt = "Receipt: \nBook\tPrice\n1984\t$9.99\nDune\t$14.99\nTotal\t$24.98";
console.log(receipt);


// Practice 4 Escaping Quotations
// Task 1: Escaping Single Quotes
// Write a string that includes the text:
// It's my birthday!
// Your code should assign this string to a variable named singleQuoteString and log it to the console.

let singleQuoteString = "It's my birthday!";
console.log(singleQuoteString);

//Task 2: Escaping Double Quotes
//Write a string that includes the text:
//She said, "JavaScript is fun!"

let doubleQuoteString = 'She said, "JavaScript is fun!"';
console.log(doubleQuoteString);

//Task 3: Combining Single and Double Quotes
//Write a string that includes the text:
//He said, "It's time to learn JavaScript!"
//Your code should assign this string to a variable named combinedQuoteString and log it to the console.

let combinedQuoteString = 'He said, "It\'s time to learn JavaScript!"';
console.log(combinedQuoteString);
 
//Task 4: Escaping Both Single and Double Quotes
//Write a string that includes the text:
//The instructor said, "Don't forget to practice!"
//Your code should assign this string to a variable named bothQuoteString and log it to the console.

let bothQuoteString = 'The instructor said, "Don\'t forget to practice!"';
console.log(bothQuoteString);

// Practice 5: Template Literals
//Practice using template literals to:
//1. Embed variable values and expressions into strings
//2. Create multiline strings that include both static text and dynamic content

//Task 1: Greeting Message
//Write a program that creates a string using template literals to display the following message:
//Hello, my name is [Name] and I am [Age] years old.
//Replace [Name] and [Age] with values stored in variables.
//Assign the result to a variable named greeting and log it to the console.

let name = "Harry"; // Example name
let age = 30; // Example age
let greeting = `Hello, my name is ${name} and I am ${age} years old.`; // Using template literals to create the string

//Task 2: Multiline Shopping List
//Write a program that creates a multiline string using template literals to display:
//Shopping List:
//- Apples
//- Bread
//- Milk
//- Eggs
//Assign the result to a variable named shoppingList and log it to the console.

//Task 2: Multiline Shopping List
//Write a program that creates a multiline string using template literals to display:
//Shopping List:
//- Apples
//- Bread
//- Milk
//- Eggs
//Assign the result to a variable named shoppingList and log it to the console.

let shoppingList = `Shopping List:
- Apples
- Bread
- Milk
- Eggs`;

console.log(shoppingList);

//Task 3: Dynamic Invoice
//Write a program that creates a string using template literals to display:
//Invoice:
//Customer: [Customer Name]
//Product: [Product Name]
//Quantity: [Quantity]
//Total: $[Total Price]
//Replace placeholders (e.g., [Customer Name]) with variables.
//Calculate the total price as pricePerUnit * quantity.
//Assign the result to a variable named invoice and log it to the console.

let customerName = "Harry Potter"; // Example customer name
let productName = "iPad"; // Example product name
let quantity = 2; // Example quantity
let pricePerUnit = 800; // Example price per unit
let totalPrice = pricePerUnit * quantity; // Calculate total price
let invoice = `Invoice:
Customer: [${customerName}]
Product: [${productName}]
Quantity: [${quantity}]
Total: $${totalPrice}`; // Using template literals to create the string
console.log(invoice);


//Task 4: Expression Evaluation
//Write a program that creates a string using template literals to display:
//The result of 5 + 3 is 8.
//Use a variable or expression to calculate 5 + 3.
//Assign the result to a variable named expressionResult and log it to the console.

let result = 5 + 3; // Calculate the expression 5 + 3
let expressionResult = `The result of 5 + 3 is ${result}.`; // Using template literals to create the string
console.log(expressionResult); // Log the result to the console
console.log(typeof expressionResult); // Check the type of expressionResult to confirm it's a string