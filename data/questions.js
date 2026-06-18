const questions = {
Python: [
{ question: "Who developed Python?", options: ["James Gosling", "Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup"], answer: "Guido van Rossum" },
{ question: "Which keyword is used to define a function in Python?", options: ["function", "func", "def", "define"], answer: "def" },
{ question: "Which symbol is used for comments in Python?", options: ["//", "#", "/*", "--"], answer: "#" },
{ question: "What is the file extension of Python files?", options: [".java", ".html", ".py", ".js"], answer: ".py" },
{ question: "Which function displays output?", options: ["show()", "display()", "print()", "echo()"], answer: "print()" },
{ question: "Which function takes user input?", options: ["read()", "input()", "scan()", "get()"], answer: "input()" },
{ question: "Which data type stores True/False values?", options: ["bool", "int", "str", "float"], answer: "bool" },
{ question: "Python is a _____ language.", options: ["Compiled", "Interpreted", "Assembly", "Machine"], answer: "Interpreted" },
{ question: "Which keyword is used for conditions?", options: ["if", "when", "case", "select"], answer: "if" },
{ question: "Which loop is commonly used for iteration?", options: ["for", "repeat", "loop", "iterate"], answer: "for" },
{ question: "Which function returns length?", options: ["count()", "size()", "len()", "length()"], answer: "len()" },
{ question: "Which operator is used for exponentiation?", options: ["^", "**", "//", "%"], answer: "**" },
{ question: "Which collection is ordered and mutable?", options: ["Tuple", "Set", "List", "Dictionary"], answer: "List" },
{ question: "Which method adds an item to a list?", options: ["add()", "push()", "append()", "insert()"], answer: "append()" },
{ question: "Which keyword creates a class?", options: ["object", "class", "new", "define"], answer: "class" }
],

```
JavaScript: [
    { question: "Which company developed JavaScript?", options: ["Google", "Microsoft", "Netscape", "Apple"], answer: "Netscape" },
    { question: "Which keyword declares a variable?", options: ["var", "int", "string", "float"], answer: "var" },
    { question: "Which symbol is used for single-line comments?", options: ["#", "//", "<!--", "/*"], answer: "//" },
    { question: "Which method prints to the browser console?", options: ["console.print()", "console.log()", "print()", "log()"], answer: "console.log()" },
    { question: "JavaScript is mainly used for?", options: ["Database", "Web Interactivity", "Operating Systems", "Networking"], answer: "Web Interactivity" },
    { question: "Which keyword declares a constant?", options: ["var", "const", "let", "static"], answer: "const" },
    { question: "Which keyword declares a block-scoped variable?", options: ["var", "const", "let", "all"], answer: "let" },
    { question: "Which operator checks equality and type?", options: ["==", "=", "===", "!="], answer: "===" },
    { question: "Which method converts JSON to object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"], answer: "JSON.parse()" },
    { question: "Which method converts object to JSON string?", options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"], answer: "JSON.stringify()" },
    { question: "Which event occurs when a button is clicked?", options: ["onchange", "onclick", "onload", "onhover"], answer: "onclick" },
    { question: "JavaScript file extension is?", options: [".java", ".py", ".js", ".css"], answer: ".js" },
    { question: "Which function displays a popup message?", options: ["message()", "alert()", "popup()", "show()"], answer: "alert()" },
    { question: "Which method selects an element by ID?", options: ["getElementById()", "queryElement()", "findById()", "selectId()"], answer: "getElementById()" },
    { question: "Which loop runs while a condition is true?", options: ["for", "foreach", "while", "repeat"], answer: "while" }
],

CSS: [
    { question: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
    { question: "Which property changes text color?", options: ["font-color", "text-color", "color", "background-color"], answer: "color" },
    { question: "Which property changes background color?", options: ["bgcolor", "background-color", "color", "background"], answer: "background-color" },
    { question: "Which property controls text size?", options: ["font-style", "font-size", "text-size", "size"], answer: "font-size" },
    { question: "Which property makes text bold?", options: ["font-weight", "font-style", "text-bold", "weight"], answer: "font-weight" },
    { question: "Which property centers text?", options: ["text-align", "align", "center", "text-center"], answer: "text-align" },
    { question: "Which symbol starts a CSS class selector?", options: [".", "#", "*", "$"], answer: "." },
    { question: "Which symbol starts an ID selector?", options: [".", "#", "&", "*"], answer: "#" },
    { question: "Which property adds space inside an element?", options: ["margin", "padding", "spacing", "border"], answer: "padding" },
    { question: "Which property adds space outside an element?", options: ["padding", "margin", "spacing", "border"], answer: "margin" },
    { question: "Which property adds a border?", options: ["line", "outline", "border", "frame"], answer: "border" },
    { question: "Which display value creates a flex container?", options: ["block", "inline", "flex", "grid"], answer: "flex" },
    { question: "Which property rounds corners?", options: ["corner-radius", "border-radius", "radius", "round"], answer: "border-radius" },
    { question: "Which property adds shadow to a box?", options: ["shadow", "box-shadow", "element-shadow", "border-shadow"], answer: "box-shadow" },
    { question: "Which property controls element transparency?", options: ["visibility", "opacity", "transparent", "display"], answer: "opacity" }
],

HTML: [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Markup Language", "Home Text Markup Language"], answer: "Hyper Text Markup Language" },
    { question: "Which tag creates a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], answer: "<a>" },
    { question: "Which tag inserts an image?", options: ["<picture>", "<img>", "<image>", "<src>"], answer: "<img>" },
    { question: "Which tag creates a paragraph?", options: ["<para>", "<p>", "<paragraph>", "<text>"], answer: "<p>" },
    { question: "Which tag creates a heading?", options: ["<heading>", "<h1>", "<head>", "<title>"], answer: "<h1>" },
    { question: "Which tag creates a line break?", options: ["<break>", "<lb>", "<br>", "<newline>"], answer: "<br>" },
    { question: "Which tag creates an unordered list?", options: ["<ol>", "<ul>", "<li>", "<list>"], answer: "<ul>" },
    { question: "Which tag creates a list item?", options: ["<item>", "<li>", "<list>", "<ul>"], answer: "<li>" },
    { question: "Which tag is used for tables?", options: ["<tab>", "<table>", "<tbl>", "<data>"], answer: "<table>" },
    { question: "Which attribute specifies image source?", options: ["href", "src", "link", "path"], answer: "src" },
    { question: "Which tag contains page title?", options: ["<head>", "<title>", "<meta>", "<header>"], answer: "<title>" },
    { question: "Which tag contains visible page content?", options: ["<body>", "<head>", "<html>", "<main>"], answer: "<body>" },
    { question: "Which tag creates a form?", options: ["<input>", "<form>", "<field>", "<submit>"], answer: "<form>" },
    { question: "Which tag creates a text input?", options: ["<textbox>", "<input>", "<text>", "<field>"], answer: "<input>" },
    { question: "HTML files use which extension?", options: [".html", ".ht", ".web", ".page"], answer: ".html" }
],

"General Knowledge": [
    { question: "What is the capital of India?", options: ["Mumbai", "Chennai", "New Delhi", "Hyderabad"], answer: "New Delhi" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus", "Jupiter"], answer: "Mars" },
    { question: "How many continents are there?", options: ["5", "6", "7", "8"], answer: "7" },
    { question: "Which is the largest ocean?", options: ["Indian", "Atlantic", "Pacific", "Arctic"], answer: "Pacific" },
    { question: "Who is known as the Father of the Nation in India?", options: ["Nehru", "Gandhi", "Patel", "Bose"], answer: "Gandhi" },
    { question: "Which is the national animal of India?", options: ["Lion", "Tiger", "Elephant", "Peacock"], answer: "Tiger" },
    { question: "What is the currency of India?", options: ["Dollar", "Euro", "Rupee", "Yen"], answer: "Rupee" },
    { question: "Which gas do plants absorb?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" },
    { question: "Who invented the telephone?", options: ["Newton", "Bell", "Edison", "Tesla"], answer: "Bell" },
    { question: "Which is the largest planet?", options: ["Earth", "Mars", "Saturn", "Jupiter"], answer: "Jupiter" },
    { question: "How many days are there in a leap year?", options: ["365", "364", "366", "367"], answer: "366" },
    { question: "Which country is famous for the Eiffel Tower?", options: ["Italy", "France", "Germany", "Spain"], answer: "France" },
    { question: "What is the national bird of India?", options: ["Parrot", "Peacock", "Sparrow", "Crow"], answer: "Peacock" },
    { question: "Which festival is known as the Festival of Lights?", options: ["Holi", "Diwali", "Pongal", "Eid"], answer: "Diwali" },
    { question: "Which is the longest river in the world?", options: ["Amazon", "Ganga", "Nile", "Yangtze"], answer: "Nile" }
]
```

};

// Get questions by category
function getQuestionsByCategory(category) {
return questions[category] || [];
}
