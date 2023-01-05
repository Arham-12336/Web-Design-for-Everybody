# Getting Started with your Lab Sandbox

**Important Note: This Lab Sandbox environment does not have open access to the internet. 
If you'd like to use any external assets to help with overall page functionality and design  
(ex: images, stylesheets, JavaScript files) please upload these files directly to the Lab Sandbox
 environment by dragging and dropping them from your desktop to your Visual Studio Code lab. 
 You can then use relative links from your html file content to access these assets for your site build.**

## How to download Bootstrap files?
In this course you'll be leveraging Bootstrap. Wherever bootstrap functionality required, you'll need 
to download the Bootstrap folder by clicking the download bootstrap button through this 
[Bootstrap link](https://bootstrapdocs.com/v3.0.0/docs/getting-started/). 
After extracting the files, go to the css folder and save the first file (i.e. Bootstrap with .css extension). 
Add this to your own project folders with name "bootstrap.css" by dragging and dropping this file 
from your local desktop into your in-browser VSCode Sandbox.

## How can I view my HTML files?

##Viewing your lab files & launching the VSCode live server
1)Click on Go Live icon at the bottom-right of your lab environment alongside the notification (bell) icon. 
2)You should see the server starting message -"Server is Started at port : 5500"
3)Click on the Browser Preview Icon from the left menu of the lab environment.
4)A browser preview window should open for you and on the address bar type the URL - localhost:5500/
5)You should see all your lab files in the browser preview window. 

**NOTE : Once you've launched the "Go Live" icon for the first time, you'll see this "Go Live" text change to
 indicate your port number which is live. If you'd like to stop your webpage and restart it again, you can 
 click on the Port number, which will close your server. You can restart again at any time by selecting "Go Live"**

###Viewing your lab files with the VSCode browser preview
1)Right-click on the HTML file you want to view and copy the RELATIVE PATH.
2)Click on the Browser Preview Icon from the left menu of the lab environment.
3)A browser preview window should open for you and on the address bar type the URL - localhost:8000/lab/<YOUR_RELATIVE_PATH>
4)Your file content will display.

###Viewing your files in the browser tab for full browser dev tools access: 
 You'll be able to preview your web content using the following path:
  https://<your lab id>.labs.coursera.org/lab/<YOUR_RELATIVE_FILE_PATH (in a new browser tab for full browser dev tools access).
 
 Input the following "https://<your lab id>.labs.coursera.org/lab/<YOUR_RELATIVE_FILE_PATH" in your URL browser toolbar, 
 replacing <your lab id> with the value you see from the top Lab iframe "Help" icon.

###Bootstrap and JQuery files
We have already provided you the bootstrap.min.js, bootstrap.min.css and jquery.min.js file. 
All you need to do is include these files in the HTML files wherever required.
For example: 
You can add jquery.min.js as below in your index.html file:
<script src="jquery.min.js"></script>

You can add a bootstrap.css file as below: 
<link rel="stylesheet"
		  type="text/css"
		  href="bootstrap.css"
	      />

Happy coding! 