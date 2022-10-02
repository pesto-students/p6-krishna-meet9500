1. What is the main functionality of the browser?
Web browsers are primarily used to display and access websites on the internet, as well as other content created with programming languages such as Hypertext Markup Language (HTML) and Extensible Markup Language (XML) (XML). Browsers convert Hypertext Transfer Protocol (HTTP) web pages and websites into human-readable content. They can also show other protocols and prefixes, such as secure HTTP (HTTPS), File Transfer Protocol (FTP), email handling (mailto:), and files (file:).
A web browser’s primary function is to render HTML, the code that is used to design or “mark up” web pages. When a browser loads a web page, it processes the HTML, which may contain text, links, and references to images and other items like CSS and JavaScript functions. The browser then renders these objects in the browser window after processing them.
Mosaic and Netscape Navigator were the first web browsers, and they were basic applications that rendered HTML, processed form input and supported bookmarks. Web browser standards have evolved in tandem with the evolution of websites. Browsers today are much more advanced, supporting various types of HTML (such as XHTML and HTML 5), dynamic JavaScript, and secure website encryption.

2.) High Level Components of a browsers
1. User Interface
It is an environment allowing users to use certain features like search bar, refresh button, menu, bookmarks, etc.
2. Browser Engine
The bridge connects the interface and the engine. It monitors the rendition engine while manipulating the inputs coming from multiple user interfaces.
3. Networking
The protocol provides an URL and manages all sorts of safety, privacy and communication.
In addition, the store network traffic gets saved in retrieved documents.
4. Data Storage
The cookies store information as the data store is an uniform layer that the browsers use. Storage processes like IndexedDB, WebSQL, localStorage, etc works well on browsers.
5. JavaScript Interpreter
It allows conversion of JavaScript code in a document and the executes it. Then the engine shows the translation on the screen to the users.

3.) Rendering engine and its use.
A rendering engine is software that draws text and images on the screen. The engine draws structured text from a document (often HTML), and formats it properly based on the given style declarations (often given in CSS). Examples of layout engines: Blink, Gecko, EdgeHTML, WebKit.
The four basic steps include:
1.The requested HTML page is parsed in chunks, including the external CSS files and in style elements, by the rendering engine. The HTML elements are then converted into DOM nodes to form a “content tree” or “DOM tree.”
2.Simultaneously, the browser also creates a render tree. This tree includes both the styling information as well as the visual instructions that define the order in which the elements will be displayed. The render tree ensures that the content is displayed in the desired order.
3.Further, the render tree goes through the layout process. When a render tree is created, the position or size values are not assigned. The entire process of calculating values for evaluating the desired position is called a layout process. In this process, every node is assigned the exact coordinates. This ensures that every node appears at an accurate position on the screen.
4.The final step is to paint the screen, wherein the render tree is traversed, and the renderer’s paint() method is invoked, which paints each node on the screen using the UI backend layer.

4.) Tree construction
While the DOM tree is being constructed, the browser constructs another tree, the render tree. This tree is of visual elements in the order in which they will be displayed. It is the visual representation of the document. The purpose of this tree is to enable painting the contents in their correct order. Firefox calls the elements in the render tree "frames". WebKit uses the term renderer or render object. A renderer knows how to lay out and paint itself and its children. Each renderer represents a rectangular area usually corresponding to a node's CSS box, as described by the CSS2 spec. It includes geometric information like width, height and position.

5.) Parsers (HTML, CSS, etc)
1.HTML parsers So we have HTML content at the beginning which goes through a process called tokenization, tokenization is a common process in almost every programming language where code is split into several tokens which are easier to understand while parsing. This is where the HTML's parser understands which is the start and which is the end of the tag, which tag it is and what is inside the tag. Now we know, html tag starts at the top and then the head tag starts before the html ends so we can figure out that the head is inside html and create a tree out of it. Thus we then get something called a parse tree. 
2.CSS parsers: WebKit uses Flex and Bison parser generators to create parsers automatically from the CSS grammar files. As you recall from the parser introduction, Bison creates a bottom up shift-reduce parser. Firefox uses a top down parser written manually. In both cases each CSS file is parsed into a StyleSheet object. Each object contains CSS rules. The CSS rule objects contain selector and declaration objects and other objects corresponding to CSS grammar.

6.)Order of script processing
The scripts in the Process pages are processed in the following order: Pre-Process page and Process page.
    Execution Stages.
    Activation.
    Generation.
    Processing.
    Completion.

7.)Layout and Painting. 
1.layout : The layout is where the elements are marked on the screen. The layout includes all the calculations and mathematics behind an element's position so it takes all the properties related to the position (height, width, position, top left right bottom, etc) from The Render Tree and places the elements on the screen
2.Painting: After Layout, a Paint happens. Paint takes properties like color, background-color, border-color, box-shadow, etc. to paint the screen with colors. After the paint, we see the content on the screen and the first time we see something other than a white screen is called 'First Paint'. The term First Paint is used in performance reports to show how long your website took to show something on the screen.
