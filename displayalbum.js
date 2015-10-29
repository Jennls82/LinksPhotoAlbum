function readyDAdiv(album) {
 console.log("DivRTG");
 
 
 //var user = $(“#loggedInInterface”).data(“user”); 
    cycle();

    function cycle() {
        console.log("in fxn cycle");
        var albumphotos = album.photos; 
        console.log("album " + album);//undefined
       // var albumphotos = album.photo;
       var i = 0;
       var stopper = false;
        
 var myvar = setInterval(displaycycle, 2000); 
       
        $("#picArea").click(function() {
            clearInterval(myvar);
        });
        // var i = 0;
        function displaycycle() {
            var disPic = albumphotos[i];//now this "0" is undefined
            $("#phototitle").html(disPic.phototitle);
            $("#picArea").html("<img src='" + disPic.photopath + "' class='images'>");
            $("#captionText").html(disPic.photocaption);
            if(++i == albumphotos.length) {
                i = 0;
            } 
       }

        // console.log("in fxn Cycle");
        // while (++i < albumphotos.length) {
        //     disPic = albumphotos[i];
        //     $("#phototitle").html(disPic.phototitle);
        //     $("#picArea").html("<img src='" + disPic.photopath + "' class='images' data-i='" + i + "'>");
        //     $("#captionText").html(disPic.photocaption);
        //     timeout();
        // }
    //    cycle();
    }//end cycle fxn
  
  
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
};



