function getDBURL(){    
  return "xinkeRequest.php"
}

//Get a list of news items
function getList(xmlHttp,url,pakName,page,funcname,num){        
  var JSONObject = {"pakName":pakName,"page":page,"num":num}
  var str = JSON.stringify(JSONObject)

  url = url+"?json="+str
  xmlHttp.open("GET",url,false)
  xmlHttp.onreadystatechange = funcname
  xmlHttp.send(null)
}

//Get single item of news
function getItem(xmlHttp,url,pakName,id,type,funcname){        
  var JSONObject = {"pakName":pakName,"id":id,"type":type}
  var str = JSON.stringify(JSONObject)

  url = url+"?json="+str
  xmlHttp.open("GET",url,false)
  xmlHttp.onreadystatechange = funcname
  xmlHttp.send(null)
}

function httpReqCreate()  {  
  xmlHttp = GetXmlHttpObject() 
  if (xmlHttp == null)
  {
    alert ("Browser does not support HTTP Request")
    return
  } 
  
  return xmlHttp
}

function GetXmlHttpObject(){
  var xmlHttp = null
  try
   {
 // Firefox, Opera 8.0+, Safari
     xmlHttp = new XMLHttpRequest()
   }
  catch (e)
   {
   // Internet Explorer
     try
     {
        xmlHttp = new ActiveXObject("Msxml2.XMLHTTP")
     }
     catch (e)
     {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP")
     }
  }
 
  return xmlHttp
}
