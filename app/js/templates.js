angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('article.html','<header class="feature secondary"><nav class="skewright"><ul class="content"><li><figure><a ui-sref="home"><img ng-src="../../img/superiormotors.min.png" alt="superior motors logomark"/></a></figure></li><li><a ui-sref-active="active" ui-sref="kevin" class="button">chef</a></li><li><a ui-sref-active="active" ui-sref="articles" class="button">articles</a></li></ul></nav></header><article ng-controller="getPrisArticle" class="articles skewleft inside"><section class="content"><date>{{swankin[0].date | date:\'MMMM dd, y\' }}</date><h1>{{swankin[0].title}}</h1><div ng-bind-html="swankin[0].body"> </div><img ng-if="swankin[0].image !== \'\'" src="{{swankin[0].image}}"/></section></article>');
$templateCache.put('articles.html','<header class="feature secondary"><nav class="skewright"><ul class="content"><li><figure><a ui-sref="home"><img ng-src="../../img/superiormotors.min.png" alt="superior motors logomark"/></a></figure></li><li><a ui-sref-active="active" ui-sref="kevin" class="button">chef</a></li><li><a ui-sref-active="active" ui-sref="articles" class="button">articles</a></li></ul></nav></header><article class="articles skewleft"><section ng-controller="prisCtrl" class="content"><h1>articles</h1><article ng-repeat="article in articles | limitTo:20"><h2>{{article.title}}</h2><date>{{article.date | date:\'MMMM dd, y\' }}</date><p>{{article.body}} <a ui-sref="article({\'articleId\':\'{{article.link}}\'})">read more</a></p></article></section></article><footer class="red"><p>superior motors 2015 |<a href="https://www.kickstarter.com/projects/379429428/superior-motors-community-restaurant-and-farm-ecos"> kickstarter campaign</a></p></footer>');
$templateCache.put('events.html','<header class="feature secondary"><nav class="skewright"><ul class="content"><li><figure><a ui-sref="home"><img ng-src="../../img/superiormotors.min.png" alt="superior motors logomark"/></a></figure></li><li><a ui-sref-active="active" ui-sref="articles" class="button">articles</a></li></ul></nav></header><article class="skewleft kevin"><section class="content"><h1>Articles</h1></section></article><footer><p>superior motors 2015 |<a href="https://www.kickstarter.com/projects/379429428/superior-motors-community-restaurant-and-farm-ecos"> kickstarter campaign</a></p></footer>');
$templateCache.put('home.html','<header class="feature"><section class="content"><div class="svg-container"><img ng-src="../img/superiormotors-update.svg" alt="superior motors 15104" class="svg-content"/></div></section></header><article class="welcome skewleft"><section mainswipe="mainswipe" ng-controller="swipeCtrl" class="mainswipe"><aside class="next"><button href="#" ng-click="prevSlide()" class="arrow next-button">next</button></aside><div ng-style="figureStyle()" class="contain"><figure ng-style="activeStyle()" class="swipe-animation"><div ng-repeat="slide in slides" ng-style="imageStyle()" swipe="swipe"> <img ng-src="{{slide.image}}" nonDraggableImage="nonDraggableImage"/></div></figure></div><aside class="prev"><button href="#" ng-click="nextSlide()" class="arrow prev-button">prev</button></aside></section><section class="content"><h1>Superior Motors</h1><p>Thoughtfully prepared food drawing inspiration from Braddock, its people, its history and its perseverance. The cuisine will best represent the eclectic style which has become a trademark of <a ui-sref="kevin" class="inlineorange">Chef Kevin Sousa</a>.</p></section></article><article class="events skewright"><section ng-controller="prisCtrl" class="content"><h1>Articles</h1><article ng-repeat="article in articles | limitTo:3"><h2>{{article.title}}</h2><date>{{article.date | date:\'MMMM dd, y\' }}</date><p>{{article.body}}  <a ui-sref="article({\'articleId\':\'{{article.link}}\'})">read more</a></p></article></section><button ui-sref="articles" class="badge">view all articles</button></article><article class="farm skewright"><section class="content"><h1>braddock farms</h1><p>A walk from our doorstep.</p></section></article><article class="sourcing skewright"><section class="content"><h1>sourcing and resources</h1><p>Superior Motors will locally source the majority of produce and animals that we use. Taking full advantage of our partnership with <a href="http://www.growpittsburgh.org/" class="inlineorange">Grow Pittsburgh</a> and Braddock Farms, as well as a commercial, rooftop greenhouse with attached 4000 square foot raised bed garden. In addition we have an on site award winning apiary, community bread oven and housing \u2013 if needed for culinary, farming and educational interns and externs \u2013 as well as the growing list of guest instructors from around the country who would like to participate in this one of a kind project.</p></section></article><article class="training skewleft"><section class="content"><h1>job training program</h1><p>We will provide a job training program, unlike any in the region \u2013 free of charge. One which will introduce participants to the  urban agriculture and world class culinary/restaurant  experience and skills necessary to excel in these fields.</p></section></article>\n<article class="location skewright"><figure class="map"></figure><section class="content"><h1>location</h1><aside><h2 class="main"><a href="https://www.google.com/maps/place/1215+Braddock+Ave,+Braddock,+PA+15104/" class="linkbutton">1215 Braddock Ave </a></h2><p>Braddock, Pennsylvania</p></aside><p>Parking is available at our building. </p><p>Located at the former site of one of the first indoor Chevrolet dealerships in the country.</p></section></article><article class="social skewleft"><section class="content"><div ng-controller="twitterCtrl" class="twitter"><h1>social</h1><div ng-repeat="tweet in tweets | orderBy: date"><div ng-bind-html="tweet.body"></div></div><a href="https://twitter.com/SM15104" class="linkbutton">follow our twitter </a><a href="https://instagram.com/sousapgh/" class="linkbutton">follow our instagram</a></div></section></article><footer><p>superior motors 2015 |<a href="https://www.kickstarter.com/projects/379429428/superior-motors-community-restaurant-and-farm-ecos"> kickstarter campaign</a></p></footer>');
$templateCache.put('kevin.html','<header class="feature secondary"><nav class="skewright"><ul class="content"><li><figure><a ui-sref="home"><img ng-src="../../img/superiormotors.min.png" alt="superior motors logomark"/></a></figure></li><li><a ui-sref-active="active" ui-sref="kevin" class="button">chef</a></li><li><a ui-sref-active="active" ui-sref="articles" class="button">articles</a></li></ul></nav></header><article class="skewleft kevin"><section class="content"><h1>Kevin Sousa</h1><p> I grew up in McKees Rocks, Pennsylvania; quintessential blue\xAD-collar Pittsburgh. Two generations of my family operated a Mom and Pop restaurant in the downtown \xADshopping district. I grew up around food.</p><p> Even when we had little else, we had access to good food. When the regional economy collapsed, and the steel industry shed some 250,000 jobs, McKees Rocks suffered much in the same way Braddock did. When the jobs left town, the business district along with the restaurants weren\'t far behind.</p><p> After culinary school, I had the good fortune of working under great chefs who imparted a new respect for food and community. I also started to develop some of my own philosophies about restaurants. I started to notice that good, conscientious restaurants did more than just fill stomachs.</p><p> Good restaurants act on the opportunity to bring communities together in very unique and instinctual ways.</p><p> Everyone knows that good food has soul. However, I quickly discovered that not every restaurant has soul. </p><p> The seasons, food traditions - old and new, ingredients, solid technique and mentoring are core tenants of transformative cooking.</p><p> A great restaurant takes much more than one individual. A great restaurant needs a community that is willing to support and grow with it over time.</p><p> When I was first introduced to Braddock, I immediately felt a very deep connection to the town and imagined what the downtown must have looked like in its prime. The place just struck a chord that continues to resonate because of where and how I grew up.</p><section class="media"><h1>Media</h1><article><h1><a href="http://www.pittsburghmagazine.com/Best-of-the-Burgh-Blogs/The-412/January-2014/Kevin-Sousas-Superior-Motors-Breaks-a-Kickstarter-Record/"> \nKevin Sousa\u2019s Superior Motors Breaks a Kickstarter Record</a></h1><h2>Pittsburgh Magazine</h2></article><article><h1><a href="http://jobs.aol.com/articles/2014/10/07/how-kickstarters-most-funded-restaurant-is-transforming-a-town/">How Kickstarter\'s Most-Funded Restaurant Is Transforming a Town</a></h1><h2>Aol</h2></article><article><h1><a href="http://www.post-gazette.com/business/development/2014/12/07/Ambitious-Pittsburgh-chef-Kevin-Sousa-clears-his-business-plate-for-Braddock-project/stories/201411090015">Ambitious Pittsburgh chef Kevin Sousa clears his business plate for Braddock project</a></h1><h2>Pittsburgh Post-Gazette</h2></article><article><h1><a href="http://www.eater.com/2015/1/21/7861523/superior-motors-braddock-kevin-sousa">If You Build It, Will They Come?</a></h1><h2>Eater</h2></article><article><h1><a href="http://www.foodandwine.com/chefs/kevin-sousa">Chef Kevin Sousa</a></h1><h2>Food & Wine</h2></article></section></section></article><footer><p>superior motors 2015 |<a href="https://www.kickstarter.com/projects/379429428/superior-motors-community-restaurant-and-farm-ecos"> kickstarter campaign</a></p></footer>');}]);