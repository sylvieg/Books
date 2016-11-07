This project is a simple one testing the configuration AngularJS + express + node.js.
The purpose is to build a single page which does the following:
* a search box and a search button
* user should be able to enter a bibkey (example - ISBN:0451526538) in the search box or a list of bibkeys (example: ISBN:0385472579,LCCN:62019420)
* node.js should invoke https://openlibrary.org 
* angular should display some info of the returned books
![Screen shot](https://github.com/sylvieg/Books/blob/master/capture.jpg) 
----------------------------
Installation guide: 
1/ Install node.js and npm
version that have been used
node -v 6.9.1
npm -v 3.10.9

2/ Extract the data and install the dependencies
mkdir <Projetcb>
cd <Projectcb>
git clone https://github.com/sylvieg/Books .
npm install

3/ Start node.js
npm start

4/ In a brower type http://localhost:3000

----------------------------
The files are
* server.js: node configuation
* package.json: npm configuration to install dependencies/modules
* books.js: angular code
* index.html: main view

Some remarks:
* the code is using Angular1.
* I did not create a factory for the books as the code is very simple.
* The error management is not perfect.
