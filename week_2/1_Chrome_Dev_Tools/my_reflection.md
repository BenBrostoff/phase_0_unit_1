# U1.W2: Chrome Dev Tools Challenge Reflection

* Describe the Document Object Model? What about it makes sense to you? What doesn't? What seems good and bad about it?

The DOM serves as a "object-oriented representation of a web page" (via the Mozilla foundation), wherein nearly everything is an object. The DOM represents web pages, which are documents. The DOM is the medium by which information in the document is displayed, stored and manipulated. 

Importantly, the DOM is not a programming language, but is the medium by which programming languages like Javascript interact with elements in the web page. The Mozilla Foundation notes that many programming languages go through the DOM, and that API (web or XML Page) = DOM + JS (scripting language). 

I suppose at a high level I understand that web pages are made accessible to scripts through the DOM, and every browser relies on the DOM to "translate" web pages. Events, properties and methods flow through the foundation the DOM has created and make these "work" on your browser.

What I don't quite understand is how and why different browers are "good" and "bad". For instance, I know some browsers cannot display HTML5 in its expected form. Why is this true and what does this have to do with the DOM? It seems as though the DOM is always changing, and I wonder how browsers "keep up". 

* How did using Chrome Web Tools to look at your site and a wordpress.com site compare?

I looked at code.flickr.com (a showcased Wordpress website) and compared to my site. Some obvious differences: the if, then statements specificing what to do if the website is viewed on different web browsers, the media "all" insertions in the stylesheet that presumably tell the site to use certain formats for applets, legends, labels, etc., the amount of class inheritences (way more in Wordpress than in my own), the use of "role" next to div classes, the use of id and classes in combination in the Wordpress site and the use of Javascript in the Wordpress site. The comparison left me with the impression that I have a significant amount of learning to do (as does mainly things in the Phase 0 DBC work). 

* Did you find Chrome Web Tools fun, helpful, or a pain to work with?

I found the Chrome Web Tools extremely useful because you can see your changes in real time when altering HTML and CSS. I had previously relied on the "View Page Source" to look at the design of websites, and Dev Tools obviously is far and away superior from an analysis perspective. I am still struggling with some of the Javascript functionality / debugging and Network tab, but I believe I will grasp the proper usage of these concepts over time. 


* Did you have an "aha" moments or were any concepts solidified?

I think I am getting slightly better at positioning multiple elements in line. I understand float:left and float:right will position an element as far as possible to the left or right, only "stopping" if another element listed before it in the HTML has the same designation. As shown below, I used Dev Tools on Jeul Wilkerson's site in part to come to this conclusion. 

* Did you find any resources on your own that helped you better understand a topic? If so, please list it.

A number of other DBC students have been posting on the Google+ community with interesting resources, as well as their own blogs. I refer to Stack Overflow a significant amount as a number of people seem to have had similar questions to me in the past. For example, when I was trying to figure out how to put three boxes in line (one for each week of the pre-work on my web page), I first looked at another student in DBC who had accomplished this feat (thanks Jeul Wilkerson) and also looked on Stack Overflow, which recommended I use the float: left command to my advantage.
