var onGoing = true;
showOngoing();
$("#ongoing").click(showOngoing);
$("#completed").click(showCompleted);

function showOngoing(event){
    $(".ongoing").show();
    $("#refresh-btn").show();
    $(".completed").hide();
    onGoing = true;
}

function showCompleted(event){
    $(".ongoing").hide();
    $("#refresh-btn").hide();
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

$("#new_task").hide();
$("#new_alert").hide();
$("#no_alert").hide();
$("#refresh-btn").click(showTask);
function showTask(event){
    var task_ = $("#new_task");
        if(task_.is(":hidden")) {
            task_.show();
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