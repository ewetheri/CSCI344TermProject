# CSCI344TermProject

Abyss Scoreboard created by Eric Wetherill, Ivan Seng, and Michael Seils.

HOW TO USE:
1) Navigate to the "Game" page
2) Download the executable
3) Run Abyss.exe (must be on a Windows machine)
4) Have fun! Scores are recorded at the end of each play session
5) View scores by navigating to the "Scoreboard" page

Abyss Scoreboard was created as a final project for UNC Asheville's CSCI 344 web development course in Spring 2017. Is was created to display competency in a wide variety of web technologies (HTML/CSS, JavaScript, AngularJS, MongoDB)
            
Abyss is a game created as a project for UNC Asheville's CSCI 373 game programming course in Spring 2017. It was made in Unreal Engine 4 using C++. Additional tools as well as an additional build of the game were created alongside this project in GML.

Special thanks to Michael Luney, Dylan Cromer, and Matthew Peek for their contributions to Abyss.


Work Log:
-Encountered several issues when porting the web game to HTML5. Unreal Engine's HTML5 port is still experimental and frequently causes game-breaking errors that don't occur in other builds. This was ultimately solved by rebuilding the entire game in a different engine that would be downloaded by the user as an executable capable of connecting to the database remotely. The downside to this solutoin is that only a Windows build will be available. Game Maker: Studio was chosen as the new engine for it's quick development cycle and reliable HTTP/JSON handling.
-JSON data being read in from the new game is in an unusual format. It is unclear whether this is an issue stemming from the game's output of the database's input. Regardless, measures were taken to make this unusual input usable despite its undesirable format.
