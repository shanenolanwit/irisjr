
![Iris Junior](public/images/irisjunior.png?raw=true "Iris Junior")

# SERVER PERFORMANCE MONITOR

This is a bare bones real time server performance monitoring application based on [iris](https://github.com/DeanGaffney/iris). Instead of using a full stack grails/mysql/elasticsearch framework to provide a fully customisable performance monitoring solution, this application has been built using node/express and simply offers a real time view of your server/network performance.

* Node/Express - Node server generated using express
* Socket&#46;io - Used to propegate events from server to subscribers (client browsers)
* Billboard&#46;js - Used to provide charts with the ability to update in real time
* Bootstrap - Used for basic UI styling 

## Running the application
* Option One
    * Ensure you have **git**, **node**, **nodemon** and **npm** installed.
    * Clone the project
    * Run the command **npm start** or **node server.js**
    * Open the app in your browser (port 3000)
    * Use **postman** or **curl** or any script/app of your choice to post data to the application servers entry point. How you populate this data is up to you. One programmatic approach is to use the node [systeminformation](https://www.npmjs.com/package/systeminformation) library.

* Option Two
    * Docker instructions coming soon...

## Posting Data
Make a post request to the following url including a JSON body matching the following schema:

* URL : http://*[application_url]*:3000/aws
* Schema :
  `{"ip": "?",
"osName": "?", 
"uptime": "?", 
"cpuSpeedGHZ": "?",
"memTotal": "?", 
"memFree": "?",
"memUsed": "?", 
"cpuCurrentLoad": "?"}`

You should see the UI update in real time


![Iris Junior Preview](public/images/preview.PNG?raw=true "Iris Junior Preview")

  *Any questions please get in touch*


