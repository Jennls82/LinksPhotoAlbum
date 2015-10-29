(function readyDAdiv(album) {
 console.log("DivRTG");
 
 //var user = $(“#loggedInInterface”).data(“user”); 

    (function cycle() {
        console.log("in fxn cycle");
        var albumphotos = album;//.photo was here and undefined
        console.log("album " + album);//undefined
       // var albumphotos = album.photo;
        var i = 0;
        var disPic = albumphotos[i];//now this "0" is undefined
        $("#phototitle").html(disPic[i].phototitle);
        $("#picArea").html("<img src='" + disPic[i].photopath + "' class='images'>");
        $("#captionText").html(disPic[i].photocaption);


        console.log("in fxn Cycle");
        while (i < albumphotos.length) {
            i++;
            disPic = albumphotos[i];
            $("#phototitle").html(disPic[i].phototitle);
            $("#picArea").html("<img src='" + disPic[i].photopath + "' class='images' data-i='" + i + "'>");
            $("#captionText").html(disPic[i].photocaption);
        }
        cycle();
    })();//end cycle fxn
  
    var stop = false;
    $("stop").click(function () {
    stop = true;
    $("pause").hide();
    }); 
    
     $('#cyclebutton').click(function () {
     stop = false;
     cycle();
     $("cyclebutton").hide();
     });
  
//  //if next is selected stop cycle();
//  $("#next").click(function cyclePicsF(){
//      console.log("in fxn cyclePicsF");
//     var albumphotos = album.photos;   
//     var i = Number($("#picArea").data-i);
//     var disPic = albumphotos[i];
//         $("#phototitle").html(disPic[i].phototitle);
//         $("#picArea").html("<img src='" + disPic[i].photopath);
//         $("#captionText").html(disPic[i].photocaption);
        
//         if(i==0){
//             i=albumphotos.length;           
//          $("#phototitle").html(disPic[i].phototitle);
//          $("#picArea").html("<img src='" + disPic[i].photopath + "' class='images'>");
//          $("#captionText").html(disPic[i].photocaption);   
//      }
//     });
    
//  $("#previous").click(function cyclePicsB(){
//         console.log("in fxn B");
//      var albumphotos = album.photos;   
//      var i = Number($("#picArea").data-i);
//      var disPic = albumphotos[i];
//         $("#phototitle").html(disPic[i].phototitle);
//         $("#picArea").html("<img src='" + disPic[i].photopath + "' class='images'>");
//         $("#captionText").html(disPic[i].photocaption);
        
//         //current position
//         if(i==0){
//             i=albumphotos.length;           
//          $("#phototitle").html(disPic[i].phototitle);
//          $("#picArea").html("<img src='" + disPic[i].photopath + "' class='images'>");
//          $("#captionText").html(disPic[i].photocaption);   
//      }
//     });
})();



