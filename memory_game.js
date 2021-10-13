var started = "no";
var turn = 0;
var adding = Math.floor(Math.random()*4);
var arrow = ['←', '↑', '→', '↓'];
var remember = [adding];
var remember_ = [arrow[adding]];
$("#start_btn").click( function() {
    $("#toggle_start").text("Start remembering!");
    $("#question").text(remember_);
    $("#start_btn").attr("disabled", true);
    started = "ready";
});
$("html").keyup(function() {
    if( started == "ready" ) {
        $("#question").text("");
        $("#toggle_start").text("Remembering...");
        started = "doing";
    }
});
$("html").keyup(function(event) {
    if ( event.which == (remember[turn] + 37) && started == "doing" && turn == (remember.length - 1)) {
        started = "ready";
        turn = 0;
        adding = Math.floor(Math.random()*4);
        remember.push(adding);
        remember_.push(arrow[adding]);
        $("#toggle_start").text("Start remembering!");
        $("#question").text(remember_);
        $("#answer").text("");
    }
    else if ( event.which == (remember[turn] + 37) && started == "doing" ) {
        $("#answer").text($("#answer").text() + remember_[turn]);
        turn += 1;
    }
    else if ( started == "doing" && event.which != 37 && event.which != 38 && event.which != 39 && event.which != 40 ) {
        alert("방향키만 눌러주세요!");
    }
    else if ( started == "doing" ) {
        alert("아쉽습니다. 총 외운 갯수는 " + (remember.length - 1) + "개입니다.");
        $("#toggle_start").text("Need Reset");
        started = "no";
    }
});
$("#reset_btn").click(function() {
    started = "no";
    turn = 0;
    adding = Math.floor(Math.random()*4);
    remember = [adding];
    remember_ = [arrow[adding]];
    $("#start_btn").attr("disabled", false);
    $("#toggle_start").text("");
    $("#question").text("");
    $("#answer").text("");
});