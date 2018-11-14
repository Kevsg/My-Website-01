# My-Website-01
Website for database CU

1. Instruction on how to install

    1.1 open cmd and cd into client directory

    1.2 Run Command 'npm install'

    1.3 Install module as necessary

    1.4 Try running 'npm run serve' --> see if your localhost now show a website


    1.5 cd into server directory

    1.6 Run Command 'npm install'
    
    1.7 Install module as necessary
    
    1.8 Configure 'db.js' to your mysql database
    
    1.9 Try running 'npm start'


2. What is in this project


    2.1 You can check the route of the Frontend part in /client/src/router.js

    2.2 Try going to localhost:<port>/CRUDE

    2.3 You can see other route in the router.js



    2.4 For the backend part, also go to server/src/route.js

    2.5 In this file contain, the api call for the front end. The name should be self-explainatory



3. How to support this project



    3.1 Copy the CRUDE.vue and use it as a template to connect it to new table.

        3.1.1 You need to change to attribute and change the function call to use a different controller.

        3.1.2 Create a new controller which will call a different Api according to the table.

        3.1.3 Add the new component to Route.js



    3.2 Create the backend path.

        3.2.1 Create route to handle the request to a new Controller. The Controller name should be the <name of Table>Controller.js

        3.2.2 Use Parent controllers as a template and Change the query accordingly.

