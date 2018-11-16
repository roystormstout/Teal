var send = $('#send_btn');
send.click(sendText);
$('#msg').keydown(function(event){
    console.log("dsdsd");
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        event.preventDefault();
        sendText(event);
    }
});

var upload = $('#upload_btn');
upload.click(sendPic);
function sendPic(event) {
    var node = $('<div></div>');
    node.addClass("message").addClass("container").addClass("user");
    var box = $('<div></div>');
    box.addClass("container").addClass("rounded").addClass("shadow-sm").addClass("msg_box");
    var child = $('<img>');
    child.attr('src', "../resource/smiley_face.jpg").attr('height',128).attr('width',128).attr('alt',"pic");
    box.append(child);
    node.append(box);
    var secondChild = $('<img>').addClass("rounded-circle");
    secondChild.attr('src', "../resource/allen_profile.jpg").attr('height',32).attr('width',32).attr('alt',"user");
    node.append(secondChild);
    $('#msg').val("");
    $('#chatBox').append(node);

    setTimeout(function () {
        var resp_secondChild = $('<img>').addClass("rounded-circle");
        resp_secondChild.attr('src', "../resource/threapist.jpg").attr('height',32).attr('width',32).attr('alt',"user");
        var resp_node = $('<div></div>');
        resp_node.addClass("message").addClass("container").addClass("doc");
        var resp_box = $('<div></div>');
        resp_box.addClass("container").addClass("rounded").addClass("shadow-sm").addClass("msg_box");
        var resp_child = $('<span></span>');
        resp_child.text('Glad to see you are feeling better!');
        resp_box.append(resp_child);
        resp_node.append(resp_secondChild);
        resp_node.append(resp_box);
        $('#chatBox').append(resp_node);

    }, 1000);


}
function sendText(event) {
    var textMsg = $('#msg').val();
    if (textMsg === ""){
        console.log("input cannot be empty");
        return;
    }
    var node = $('<div></div>');
    node.addClass("message").addClass("container").addClass("user");
    var box = $('<div></div>');
    box.addClass("container").addClass("rounded").addClass("shadow-sm").addClass("msg_box");
    var child = $('<span></span>');
    child.text(textMsg);
    box.append(child);
    node.append(box);
    var secondChild = $('<img>').addClass("rounded-circle");
    secondChild.attr('src', "../resource/allen_profile.jpg").attr('height',32).attr('width',32).attr('alt',"user");
    node.append(secondChild);
    $('#msg').val("");
    $('#chatBox').append(node);

    setTimeout(function () {
        var resp_secondChild = $('<img>').addClass("rounded-circle");
        resp_secondChild.attr('src', "../resource/threapist.jpg").attr('height',32).attr('width',32).attr('alt',"user");
        var resp_node = $('<div></div>');
        resp_node.addClass("message").addClass("container").addClass("doc");
        var resp_box = $('<div></div>');
        resp_box.addClass("container").addClass("rounded").addClass("shadow-sm").addClass("msg_box");
        var resp_child = $('<span></span>');
        resp_child.text('Glad to hear that you are less stressed out after chatting with me!');
        resp_box.append(resp_child);
        resp_node.append(resp_secondChild);
        resp_node.append(resp_box);
        $('#chatBox').append(resp_node);

    }, 1000);

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