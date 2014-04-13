
QUIZ
 
My screenshot from my codeschool profile is linked to my Github  page. 
 
Explain which tabs support the following actions and how.
 
Realtime editing of HTML and CSS
 
The Elements tab. This tab breaks out HTML on the left and has a "Styles" subtap on the right which shows CSS.
 
Javascript Debugging
 
The Sources and Console tabs are Dev Tool's primary resources for debugging Javascript. The Sources tab allows one to do specific tasks while running the code, like pausing on exceptions and disabling breakpoints. The Console tab is a means of "testing" one's theories on what parts of the code might be causing specific errors (e.g. by printing values to the console).
 
Performance Optimization - 
 
The network tab. All assets / elements are broken out here and specific information on their performance is listed, inluding method of retrieving, time to get (if applicable) and size. Additionally, adding the Page Speed element to the Chrome toolbar is useful in this respect. 
 
What's the quick key for your OS to spawn the Dev Tools inspector?
 
I was not sure how to interpret this question. Command-Option I is the shortcut to open Dev Tools (equivalent of going to three horizontal lines on top right of browser and using drop down from there).
 
Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
 
What is the current background color for the page? (Surprisingly, it's not just black!)
 
#0b0f11 is indeed not blac and is R: 11, G: 15, B: 17.
 
Tweak the background color to white.
 
Complete.
 
Tweak the height of the side bar that contains the logo. Shrink it down to 85px.
 
Complete.
 
Roll over the navigation links. When you hover over them, they dissapear. Let's change the hover color to black instead.
 
Complete (Used a:hover functionality on Dev Tools).
 
Now take a screenshot of your new (and maybe not so improved) design. It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
Upload your own image to the web using an image hosting service. It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
 
Complete; the image is now linked via my Github page. 
 
For the postmachina website, why can't you tweak the color of the text "The most important things are not things"? Please explain.
 
The font characteristics are inherited from body#home. I believe the inheritance may possibly govern me being able to tweak the color of the text, but I am not exactly sure why.
 
Go to www.ticketswizard.com and analyze the page.
 
What is the largest image on the website?
 
The largest image appears to be LVx-xkvaJ0b.png, as it was the largest when you sort by size on the Networks tab. The image is the Facebook like image. 
 
Explain how you would find out this information, and list the URL of offending image here and how big it is.
 
One would find this image via the Network tab on Dev Tools and then sorting by size. Although this image has a small size and is available from the cache, its URL is via Facebook and is as follows:https://fbstatic-a.akamaihd.net/rsrc.php/v2/y1/r/LVx-xkvaJ0b.png. This link and Dev Tools only shows the image by 30x72, which indicates to me I am doing something wrong here.
 
Test the www.ticketswizard.com website with google's PageSpeed Insights. (You can also download the chrome plugin). What is the lowest hanging fruit to optimize the website? How many kilobytes of data can be eliminated?
 
It appears to be optimizing images and leveraging browser caching. Optimizing images could eliminate 885.9 KiB of data (39%). 
