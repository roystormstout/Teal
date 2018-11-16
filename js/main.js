

var onGoing = true;
if(sessionStorage.getItem("mood") == null) {
    sessionStorage.setItem("mood", "41");
    sessionStorage.setItem("latest", "1:37 usage of aggressive vocabulary detected +5 ");
}
else{
    var saved_mood = sessionStorage.getItem("mood");
    $("#moodbar").text(saved_mood);
    $("#moodbar").attr("aria-valuenow", saved_mood);
    $("#moodbar").attr("style", "width:"+saved_mood+"%");
    $("#last_update").text(sessionStorage.getItem("latest"));
}

var wearable = true;
var social = true;
if(localStorage.getItem("wearable") == null) {
    localStorage.setItem("wearable", "true");
    $('#wearableSwitch').prop('checked', true);
} else if (localStorage.getItem("wearable") == "false") {
    wearable = false;
} else {
    $('#wearableSwitch').prop('checked', true);
}

if(localStorage.getItem("social") == null) {
    localStorage.setItem("social", "true");
    $('#socialSwitch').prop('checked', true);
} else if (localStorage.getItem("social") == "false") {
    social = false;
} else {
    $('#socialSwitch').prop('checked', true);
}

$('#wearableSwitch').click(toggleWearable);
function toggleWearable(event) {
    if(wearable){
        wearable = false;
        localStorage.setItem("wearable", "false");
    } else {
        wearable = true;
        localStorage.setItem("wearable", "true");
    }
}

$('#socialSwitch').click(toggleSocial);
function toggleSocial(event) {
    if(social){
        social = false;
        localStorage.setItem("social", "false");
    } else {
        social = true;
        localStorage.setItem("social", "true");
    }
}



$(".task").hover(function(){
    $(this).toggleClass("shadow-sm");
    $(this).toggleClass("shadow-lg");
});


window.setInterval(function(){
    if(wearable) {
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes();
        var change_num = Math.floor(Math.random() * 7) - 4;
        var new_num = (parseInt(sessionStorage.getItem("mood")) + change_num);
        if (new_num < 0)
            new_num = 0;
        if (new_num > 100)
            new_num = 100;
        var new_mood = new_num.toString();
        $("#moodbar").text(new_mood);
        $("#moodbar").attr("aria-valuenow", new_mood);
        $("#moodbar").attr("style", "width:" + new_mood + "%");
        if (change_num > 0) {
            $("#second_last_update").text(sessionStorage.getItem("latest"));
            sessionStorage.setItem("latest", time + " wearable device detected anxiety +" + change_num.toString());
            $("#last_update").text(time + " wearable device detected anxiety +" + change_num.toString());
        }
        else {
            $("#second_last_update").text(sessionStorage.getItem("latest"));
            sessionStorage.setItem("latest", time + " your heartbeat is stabilizing " + change_num.toString());
            $("#last_update").text(time + " your heartbeat is stabilizing " + change_num.toString());
        }
        sessionStorage.setItem("mood", new_mood);
    }
}, 30000);

window.setInterval(function(){
    if(social) {
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes();
        var change_num = Math.floor(Math.random() * 3) + 1;
        var new_num = (parseInt(sessionStorage.getItem("mood")) + change_num);
        if (new_num < 0)
            new_num = 0;
        if (new_num > 100)
            new_num = 100;
        var new_mood = new_num.toString();
        $("#moodbar").text(new_mood);
        $("#moodbar").attr("aria-valuenow", new_mood);
        $("#moodbar").attr("style", "width:" + new_mood + "%");
        $("#second_last_update").text(sessionStorage.getItem("latest"));
        sessionStorage.setItem("latest", time + " social media aggressive behavior detected +" + change_num.toString());
        $("#last_update").text(time + " social media aggressive behavior detected +" + change_num.toString());
        sessionStorage.setItem("mood", new_mood);
    }
}, 47000);

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
    $("#ongoing").removeClass('inactive_btn');
    $("#completed").addClass('inactive_btn');
    onGoing = true;
}

function showCompleted(event){
    $(".ongoing.vis").hide();
    $("#refresh-btn").hide();
    $(".completed").show();
    $("#ongoing").addClass('inactive_btn');
    $("#completed").removeClass('inactive_btn');
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
    var tar_type = button.data('type')
    var tar_description = button.data('description')
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text(tar_session+": "+ tar_type)
    modal.find('#session-date').text("Time: "+ tar_date)
    if(tar_session=="Upcoming Session")
        modal.find('#session-description').text("Description: "+ tar_description)
    else
        modal.find('#session-description').text("Feedback: "+ tar_description)
})



var isChatOpen = false;
var chatBtn =$('#chat_btn');
chatBtn.click(openChat);



function openChat(event){
    if(isChatOpen) {
        isChatOpen = false;
        chatBtn.children('i').text('chat');

        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes();
        var change_num = Math.floor(Math.random() * 5) - 12;
        var new_num= (parseInt(sessionStorage.getItem("mood")) + change_num);
        if(new_num < 0)
            new_num = 0;
        if(new_num> 100)
            new_num = 100;
        var new_mood = new_num.toString();
        $("#moodbar").text(new_mood);
        $("#moodbar").attr("aria-valuenow", new_mood);
        $("#moodbar").attr("style", "width:"+new_mood+"%");
        $("#second_last_update").text(sessionStorage.getItem("latest"));
        sessionStorage.setItem("latest",time + " quick chatting with therapist " + change_num.toString());
        $("#last_update").text(time + " quick chatting with therapist " + change_num.toString());
        sessionStorage.setItem("mood",new_mood);

        // minus points from mood bar

    } else {
        isChatOpen = true;
        chatBtn.children('i').text('close');
    }

}


$(".add_task").click(confirmDate);


function confirmDate(event){
    var date_str = $(this).attr("data-date");
    var time_str = $(this).attr("data-time");
    var node = $('<li></li>');
    node.attr('data-toggle',"modal").attr("data-target","#exampleModal").attr("data-pass","Upcoming Session")
        .attr("data-type", "Appointment").attr("data-date",date_str+", 2018, "+time_str)
        .attr("data-description","Regular session with Dr.Dow.");
    node.addClass("vis").addClass("rounded_large").addClass("list-group-item").addClass("row").addClass("ongoing")
        .addClass("task").addClass("card").addClass("flex-md-row").addClass("mb-3").addClass("shadow-sm");
    var child = $('<div></div>');
    child.addClass("d-flex").addClass("w-100").addClass("p-2").addClass("d-flex").addClass("flex-column");
    var header = $('<h6></h6>');
    header.text("Appointment");
    var date = $('<h5></h5>').addClass("mb-1");
    date.text(date_str+", 2018");
    var time = $('<p></p>');
    time.text(time_str);
    child.append(header);
    child.append(date);
    child.append(time);
    node.append(child);
    $('#taskList').append(node);
    if(onGoing){
    } else {
        showCompleted();
    }
    var resp_secondChild = $('<img>').addClass("rounded-circle");
    resp_secondChild.attr('src', "../resource/threapist.jpg").attr('height',32).attr('width',32).attr('alt',"user");
    var resp_node = $('<div></div>');
    resp_node.addClass("message").addClass("container").addClass("doc");
    var resp_box = $('<div></div>');
    resp_box.addClass("container").addClass("rounded").addClass("shadow-sm").addClass("msg_box");
    var resp_child = $('<span></span>');
    resp_child.text('See you then!');
    resp_box.append(resp_child);
    resp_node.append(resp_secondChild);
    resp_node.append(resp_box);
    $('#chatBox').append(resp_node);
    $(this).hide();
    localStorage.setItem(date_str+time_str,"true");

}

$(".add_task").each(function(event) {
    var date_str = $(this).attr("data-date");
    var time_str = $(this).attr("data-time");
    if(localStorage.getItem(date_str+time_str) == "true"){
        confirmDate.call(this,event)
    }
});