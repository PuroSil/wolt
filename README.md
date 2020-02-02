#DESIGN LINK: https://www.figma.com/proto/HkBk2C2679WTzlfDuCNaQ5/Wolt-design?node-id=69%3A2&scaling=contain

Front:

Build a web page that shows all fifty restaurants. You can freely decide which fields to utilize from restaurants objects, so no need to put all the data visible. However, please use at least three fields.

There are no restrictions on design, so restaurants can be displayed vertically, horizontally, on a grid or however you decide. Aim for clear and responsive design.

In addition of rendering restaurants, create a possibility to sort restaurants alphabetically in ascending and descending order, e.g. by adding a sort-button on the top of the list.

Below is an example how the user interface could look like:


Back:

Create a REST API endpoint that allows searching restaurants. API needs to accept three parameters:

    q: query string. Full or partial match for the string is searched from name, description and tags fields. A minimum length for the query string is one character.
    lat: latitude coordinate (customer's location)
    lon : longitude coordinate (customer's location)

API should return restaurant (objects) which match the given query string and are closer than 3 kilometers from coordinates.

Example query:

/restaurants/search?q=sushi&lat=60.17045&lon=24.93147

This search would return restaurants (in JSON format) which contain a word sushi and are closer than 3km to the point [60.17045, 24.93147].

Please do not use any on-disk database (MySQL, PostgreSQL, ...) or ElasticSearch in this assignment. The task can be completed without them.


Bonus task: Blurhash

Restaurant data also includes a field called blurhash. As a bonus task you can figure out what this field is and use it:

    In frontend task you can render the blurhash data
    In backend task you can e.g. validate that blurhash-field is correct when loading data from restaurant.json

There are some ready-made libraries for manipulating blurhash values. Feel free use those or create your own one.

Bonus task is completely optional and it doesn't affect how we review assignments. It exists only for fun! grinning
Instructions

    Write the assignment using either TypeScript / JavaScript, Python, Scala, Kotlin or Java
    Feel free to use any 3rd party framework / library, however try to minimize external dependencies. React is popular in Wolt, so would be great if you can use that in frontend version of this task.


Few tips

    Everyone in Wolt loves clean code
    Everyone in Wolt also loves good tests
    Try to figure out what is the essential part in this task. Focus on that first.
    Don't forget README.md with clear instructions how to get the project up and running
