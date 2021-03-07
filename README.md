# MERN
This is a full stack application utilizing React, Redux, Express, Node, and typescript. 

# Resources
[Tutorial first part](https://www.youtube.com/watch?v=ngc9gnGgUdA)
[Tutorial second part](https://www.youtube.com/watch?v=aibtHnbeuio)
[HTTP Status Codes](https://www.restapitutorial.com/httpstatuscodes.html)
[SVG Background](https://www.svgbackgrounds.com/#slanted-gradient)
# BackEnd
Using MongoDB atlas
## Packages
    1. express - used for our server
    2. nodemon - Allows us to make changes without restarting our server
    3. cors - Cross Origin Resource Sharing
    4. mongoose - Used for our object data modeling
    5. dotenv - allows us to use .env file to hide our secrets 

# API

| *Name*        | *Method*      | *Path*             |
| -------------:|:-------------:| -----------------: |
| List          | GET           | /posts             |
| Retrieve      | GET           | /posts/id          |
| Update        | Patch         | /posts/id          |
| Update        | Patch         | /posts/id/likePost |
| Create        | POST          | /posts             |
| Delete        | DELETE        | /posts/id          |
| -------------:|:-------------:| -----------------: |
