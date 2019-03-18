**How to run the application:**
This application is developed in WebStorm 2018.3.4. and the client
side is developed in react version 16.8.4. When designing the 
application react-bootstrap is used for buttons etc. 

Due to the application containing both a server and a client,
they are running on different ports. But by using a proxy on the 
client side this solved the problem. 

To run the application the API must first be setup. When it is running the API will run on port 
3000. To start the client you must open a new terminal window, 
go into the client repository and run 'node start'.
This will start the client on port 5000, by using a proxy the API 
will run on the same port. 

Therefore the application is and will be available on 
'http:localhost:5000'.

**Features completed/attempted:**
- A view that displays the list of restaurants.
- A detailed view for each restaurant that displays more information 
about the selected restaurant.
- Search for a restaurant by using name as input in search bar.
- Sort list of restaurants by name in alphabetical order.
- Sort list of restaurants by rating in ascending order. 

**Short explanation of design decisions**
The web application have two views, one containing the list and one 
showing information about a selected restaurant. The information 
displayed is selected based on my own interest on what I want to 
know when looking up a restaurant. The list can be sorted, by either 
name or rating, by clicking on the column names. To select a 
restaurant just press the button "select".

The design is simple and it is easy for an user to navigate through
the application. Not too much colors which distracts the eye. 
When selecting a restaurant the information is shown in a table 
with a beige-ish background, to make the information stand out 
from other components of the view. 

**Possible improvements and bugs**
Possible improvements would be that the user should be able to
filter restaurants, for example on price levels, and show the 
location on for example a mapview. 

One bug is that when going from a selected restaurant and back to 
the listview, and then pressing back again it will go to an empty page. 
To go to the restaurant information page the user must update the browser manualy. 
