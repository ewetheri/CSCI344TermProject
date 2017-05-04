# CSCI344TermProject

Abyss Scoreboard created by Eric Wetherill, Ivan Seng, and Michael Seils.

HOW TO USE:
1) Navigate to the "Game" page.
2) Download the executable file provided by the link.
3) Run Abyss.exe (must be on a Windows machine).
4) Have fun! Scores are recorded at the end of each play session.
5) View scores by navigating to the "Scoreboard" page.
6) Additionally, the Home and About pages provide information about the game, the website, and the members of the development team.

Abyss Scoreboard was created as a final project for UNC Asheville's CSCI 344 web development course in Spring 2017. Is was created to display competency in a wide variety of web technologies (HTML/CSS, JavaScript, AngularJS, MongoDB)
            
Abyss is a 2D platformer game with roguelike and RPG elements created as a project for UNC Asheville's CSCI 373 game programming course in Spring 2017. It was made in Unreal Engine 4 using C++. Additional tools as well as an additional build of the game were created alongside this project in GML.

Special thanks to Michael Luney, Dylan Cromer, and Matthew Peek for their contributions to Abyss.


Work Log:

-Encountered several issues when porting the web game to HTML5. Unreal Engine's HTML5 port is still experimental and frequently causes game-breaking errors that don't occur in other builds. This was ultimately solved by rebuilding the entire game in a different engine that would be downloaded by the user as an executable capable of connecting to the database remotely. The downside to this solution is that only a Windows build will be available. Game Maker: Studio was chosen as the new engine for it's quick development cycle and reliable HTTP/JSON handling. (4/26/2017 - 5/3/2017)


Ivan - My task was to create the server, which would communicate between MongoDB and Mike and Eric's game. I also worked on client.js, which loaded scores onto the scoreboard. The data needed to be sorted, and two routes had to be created for requests: one for the top ten scores, and one for all the scores in the database. Two major problems arose, as logged below: 

-JSON data being read in from the new game is in an unusual format. It is unclear whether this is an issue stemming from the game's output of the database's input. An example of the JSON format is as follows:
{ '{ "name": "bob12", "level": 3.000000, "date": "11\/21\/17", "score": 64.000000, "floor": 9.000000 }': '' }
The desired JSON object was being treated as the key of a key/value pair. Mongoose was not parsing the data correctly, so I converted it to a string and parsed it directly, slicing off the undesired outer edges and removing unwanted backslashes that were mysteriously being generated. (5/2/2017)

-The data from MongoDB was loading but not being rendered on the scoreboard page. It would render after two button clicks. The solution to this problem was the $scope.$apply() function, which causes bindings to update (4/28/2017)
