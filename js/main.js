var onGoing = true;
showOngoing();
$("#ongoing").click(showOngoing);
$("#completed").click(showCompleted);
function showOngoing(event){
    $(".ongoing").show();
    $(".completed").hide();
    onGoing = true;
}

function showCompleted(event){
    $(".ongoing").hide();
    $(".completed").show();
    onGoing = false;
}

$("button.finishbtn").click(toggleTask);
function toggleTask(event){
    console.log(this.closest("li").classList);
    $(this.closest("li")).toggleClass("ongoing");
    $(this.closest("li")).toggleClass("completed");
    if(onGoing){
        showOngoing();
    }
    else{
        showCompleted();
    }
}