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
        resp_child.text('We can schedule an appointment to disscus about your feelings!');
        resp_box.append(resp_child);
        resp_node.append(resp_secondChild);
        resp_node.append(resp_box);
        $('#chatBox').append(resp_node);

    }, 1000);

}