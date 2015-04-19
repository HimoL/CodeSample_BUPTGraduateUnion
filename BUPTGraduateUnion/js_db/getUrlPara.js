//Get parameters from URL
function getUrlPara(){   
	var currentURL = window.location.href
    var args = currentURL.split("?")
	
    if(args.length<2){
	  alert("No para!") 
      return ""
    }
    else{
      var str = args[1]
      var str2 = str.split("&")   
      var paraArray = new Array()
      var para = ""
	  
	  for(var i = 0 ;i < str2.length ; i ++){
		var s = str2[i].split("=")
		paraArray[s[0]] = (s[1])
	  }
      return paraArray        
	}
}