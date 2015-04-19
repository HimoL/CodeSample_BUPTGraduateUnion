<!DOCTYPE html >
<!--[if IE 7]>					<html class="ie7 no-js" lang="zh-CN">     <![endif]-->
<!--[if lte IE 8]>              <html class="ie8 no-js" lang="zh-CN">     <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> <html class="not-ie no-js" lang="zh-CN">  <!--<![endif]-->

<head>
    <meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	<title>NEWS</title>
	<link rel="stylesheet" type="text/css" href="css/css.css" >
	
	<!-- HTML5 Shiv -->
	<script type="text/javascript" src="js/modernizr.custom.js"></script>
    <script type="text/javascript" src="js_db/db_req.js"></script> 
    <script type="text/javascript" src="js_db/getUrlPara.js"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />   
</head>
<body class="style-1">
   <div class="wrap-header"></div>
     <div class="wrap">
<!-- - - - - - - - - - - - - - Header - - - - - - - - - - - - - - - - -->	
	
<?php
include 'header.php';
?>	
	
<!-- - - - - - - - - - - - - - - Container - - - - - - - - - - - - - - - - -->	
<!-- - - - - - - - - - - - -- - News Content - - - - - - - - - - - - - - - - -->	
	    <div class="text">
          <div class="paper"> 
	        <h2 id="news_title">News Tittle</h2>
	        <h6 class="paper-time" id="news_time">2013-12-01  00:00</h6>
            <span id="news_content">
	        <p>Content</p>
            <p>P1</p>
            <p>P2</p>
            <p>P3</p>
            <p>P4</p>
            <p>P5</p>
            </span>
         </div>
	   </div>
    
<script type="text/javascript" >
    var paraArray = getUrlPara();                                                               
    var xmlHttp = httpReqCreate()                                                               
    var dburl = getDBURL()                                                                      
    getItem(xmlHttp,dburl,"getContent", paraArray["id"], paraArray["type"] ,displayNewsContent)  

//Get news content from db using JSON
function displayNewsContent(){                                                                 
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200){ 
	    var obj = eval( "(" + xmlHttp.responseText + ")" )                                       
	    document.getElementById("news_title").innerHTML = obj.info.news[0].title              
        var newsTime = obj.info.news[0].time
        var newsTime2 = newsTime.split(" ")
	    document.getElementById("news_time").innerHTML = newsTime2[0]
	   	document.getElementById("news_content").innerHTML = obj.info.news[0].content
    }
}

</script>
	
<!-- - - - - - - - - - - - - - - footer - - - - - - - - - - - - - - - - -->
<?php
include 'footer.php';
?>
     
</div>
</body>
</html>
