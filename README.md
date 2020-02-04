# FOOD COURIER APPLICATION

## DESIGN LINK: https://www.figma.com/proto/HkBk2C2679WTzlfDuCNaQ5/Wolt-design?node-id=69%3A2&scaling=contain
## LIVE WEBSITE LINK: https://food-courier.herokuapp.com/

### General Information
This project was based on the pre-assignment by Wolt, where you got to choose between doing the front or the back.

In the front, you had to use a json that had 50 restaurants and render those for the user and then, allow the user
to order the restaurants by name.

In the back, you were tasked to create an API call that took three query parameters. Search string, user longtitude and user latitude.
With these parameters, return from the prementioned restaurants that match the query and are within 3 kilometers radius of you. 
The minumum length of a query parameter for this query should be one.

So, with those in mind, I decided to do this all and then some. I created a design in my favourite tool right now, Figma, and used that
to build a basic front-end for the application with React. After that, I designed the API's of which I created three. One to add a restaurant to the database, one to get all of the restaurants and one to work with the prementioned query parameters. Instead of using a local file, I created
a mongoDB database using MongoDB Atlas that works well for these quick projects.

After I built the API's with the classic Node.js REST stack and tested them with insomnia, I integrated them to the already built front and wrote some basic Cypress tests to ensure it all works.

This was all done in the span of a week as I lacked time to work on this longer, so keeping that in mind, I'm pleased with how it functions now.
I could always expand this and add more and more functionalities and make this a full fledged and working application, but then I would be
working on this project for months to come. I would have loved to create a CI/CD pipeline as that is what I need to learn more about as well as make this a full fledged cloud application or used this project to dive deeper into Typescript, but time was limited.

### Installation
1. Clone the repository and use the npm install command to install the required dependencies for both client and server
2. Create a .env file that will hold the database information in a variable called DB_URL
3. Both front and back have npm start script to run the application
4. The application has been made to run on localhost in port 3000

### Usage
The application has 3 API endpoints, 2 of which are in use in the application at its current state.

- /getAllRestaurants 
  Will return all restaurants from the database.

- /getRestaurantsByName 
  Takes search string as a query paramameter and the users location (if given) and returns all restaurants that fit the query.
  It has been configured to return restaurants within 3000 meters, to change this, you need to change the value in the routes file that handles the query checks.

- /addRestarant
  Not in use but it can be used to add restaurants in the database through Insomnia, Postman etc.

The city search in the landing page has no functionality at the moment, as the database only has 50 restaurants that are all from Helsinki.
Search that is in the results page, does work, and uses the /getRestaurantsByName API endpoint.

### Todo
- Expand the city search to work
- Create more sorting options for the restaurants
- Transfer the application to use Typescript
- Expand testing
- Create a docker compose file
- Consider using Redux if the application expands

### Extra
Feel free to clone the repository, should you find it useful. If you have any questions, drop me a message!
