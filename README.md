## DESIGN LINK: https://www.figma.com/proto/HkBk2C2679WTzlfDuCNaQ5/Wolt-design?node-id=69%3A2&scaling=contain
## LIVE WEBSITE LINK: ---

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

Feel free to clone the code if you get something out of it and look at the designs etc. You can see the website running by following the live website link. The code here is exactly what is running there, apart from the .env file that is missing here, of course.
