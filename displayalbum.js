function readyDAdiv(album) {
    cycle();

    function cycle() {
        var albumphotos = album.photos;
        var i = 0;
        var myvar = setInterval(displaycycle, 2000); 
        //if the pic or pause are clicked stop cycle();
        $("#picArea, #stop").click(function () {
            clearInterval(myvar);
        });
        // var i = 0;
        function displaycycle() {
            var disPic = albumphotos[i];
            $("#phototitle").html(disPic.phototitle);
            $("#picArea").data("photoNumber", i);
            $("#picArea").html("<img src='" + disPic.photopath + "' class='images' style='margin-left: 70px;'>");
            $("#captionText").html(disPic.photocaption);
            if (++i == albumphotos.length) {
                i = 0;
            }
        }
    }//end cycle fxn
    var stop = false;
    $('#cyclebutton').click(function () {
        stop = false;
        cycle();
    });

    $("#next").click(function cyclePicsF() {
        var albumphotos = album.photos;
        var i = $("#picArea").data("photoNumber");
        i++;
        if (i == albumphotos.length) {
            i = 0;
        }
        var disPic = albumphotos[i];
        $("#picArea").data("photoNumber", i);
        $("#phototitle").html(disPic.phototitle);
        $("#picArea").html("<img src='" + disPic.photopath + "' class='images' style='margin-left: 70px'>");
        $("#captionText").html(disPic.photocaption);

    });//end of cyclePicsF
    
    $("#back").click(function cyclePicsB() {
        var albumphotos = album.photos;
        var i = $("#picArea").data("photoNumber");
        i--;
        if (i == -1) {
            i = albumphotos.length-1;
        }
        var disPic = albumphotos[i];
        $("#picArea").data("photoNumber", i);
        $("#phototitle").html(disPic.phototitle);
        $("#picArea").html("<img src='" + disPic.photopath + "' class='images' style='margin-left: 70px'>");
        $("#captionText").html(disPic.photocaption);

    });
};



