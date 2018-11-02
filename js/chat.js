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
function sendText(event) {
    var textMsg = $('#msg').val();
    if (textMsg === ""){
        console.log("input cannot be empty");
        return;
    }
    var node = $('<div></div>');
    node.addClass("message").addClass("container").addClass("user");
    var child = $('<span></span>');

    child.text(textMsg);
    node.append(child);
    $('#msg').val("");
    $('#chatBox').append(node);
}