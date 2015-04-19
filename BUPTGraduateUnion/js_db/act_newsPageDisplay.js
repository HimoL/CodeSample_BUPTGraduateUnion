function actPageDisplay(){
	var xmlHttp = httpReqCreate()                           
	var dburl = getDBURL()                               
	getList(xmlHttp,dburl,'getNewsList',1,displayNews,6)      
	getList(xmlHttp,dburl,'getNoticeList',1,displayNotice,10) 
}

function displayNews(){ 
    if (xmlHttp.readyState==4 && xmlHttp.status==200){ 
        var obj = eval( "(" + xmlHttp.responseText + ")" )       
	    for(var i = 0; i < 6 ; i++ ){                             
	        document.getElementById("news"+(i+1)).innerHTML=obj.info.news[i].title
	        document.getElementById("news"+(i+1)+"_img").src = obj.info.news[i].img	 
	        document.getElementById("news"+(i+1)+"_link").href +="?id="+obj.info.news[i].id+"&type=1"   
	    }	
     } 	
}

function displayNotice(){ 
    if (xmlHttp.readyState==4 && xmlHttp.status==200){ 
        var obj = eval( "(" + xmlHttp.responseText + ")" )
	    for(var i = 0; i < 10 ; i++ ){
	         document.getElementById("notice"+(i+1)).innerHTML=obj.info.notice[i].title
             var noticeTime = obj.info.notice[i].time
             var noticeTime2 = noticeTime.split(" ")
	         document.getElementById("notice"+(i+1)+"_time").innerHTML= noticeTime2[0]
	         document.getElementById("notice"+(i+1)).href +="?id="+obj.info.notice[i].id+"&type=2"  
    	}
    } 
}


