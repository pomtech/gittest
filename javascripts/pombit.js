
$(document).keypress(function(e) {
    if(e.which == 13) {
        if($(".t2 a").hasClass("on") == true){
            $(".btnB .ty04 a")[0].click(); // 매수
        }
    }
});
