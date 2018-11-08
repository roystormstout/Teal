var onGoing = true;
localStorage.setItem("mood","41");


window.setInterval(function(){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    var change_num = Math.floor(Math.random() * 15) - 7;
    var new_num= (parseInt(localStorage.getItem("mood")) + change_num);
    if(new_num < 0)
        new_num = 0;
    if(new_num> 100)
        new_num = 100;
    var new_mood = new_num.toString();
    $("#moodbar").text(new_mood);
    $("#moodbar").attr("aria-valuenow", new_mood);
    $("#moodbar").attr("style", "width:"+new_mood+"%");
    if(change_num > 0)
        $("#last_update").text(time+" wearable device detected anxiety "+ change_num.toString());
    else
        $("#last_update").text(time+" your heartbeat is stabilized "+ change_num.toString());
    localStorage.setItem("mood",new_mood);
}, 10000);

showOngoing();
$("#ongoing").click(showOngoing);
$("#completed").click(showCompleted);

$(function () {
    $('[data-toggle="popover"]').popover()
})
$(function () {
    $('.example-popover').popover({
        container: 'body'
    })
})
function showOngoing(event){
    $(".ongoing.vis").show();
    $("#refresh-btn").show();
    $(".completed").hide();
    $("#ongoing").toggleClass('inactive_btn');
    $("#completed").toggleClass('inactive_btn');
    onGoing = true;
}

function showCompleted(event){
    $(".ongoing.vis").hide();
    $("#refresh-btn").hide();
    $(".completed").show();
    $("#ongoing").toggleClass('inactive_btn');
    $("#completed").toggleClass('inactive_btn');
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

$("#new_task").hide();
$("#new_alert").hide();
$("#no_alert").hide();
$("#refresh-btn").click(showTask);
function showTask(event){
    var task_ = $("#new_task");
        if(task_.is(":hidden")) {
            task_.show();
            task_.toggleClass('vis');
            $("#new_alert").show().delay(2000).fadeOut();
        } else{
            $("#no_alert").show().delay(2000).fadeOut();
        }

}

$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var tar_date = button.data('date') // Extract info from data-* attributes
    var tar_session = button.data('pass')
    var tar_description = button.data('description')
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text(tar_session)
    modal.find('#session-date').text("Date: "+ tar_date)
    if(tar_session=="Upcoming Session")
        modal.find('#session-description').text("Description: "+ tar_description)
    else
        modal.find('#session-description').text("Feedback: "+ tar_description)
})