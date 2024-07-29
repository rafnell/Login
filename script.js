$(document).ready(function() {
    $("#login-form").submit(function(event) {
        event.preventDefault();
        var username = $("#username").val();
        var password = $("#password").val();
        
        if (username === "Juancito" && password === "123456") {
            window.location.href = "principal.html";
        } else {
            $("#error-message").show();
        }
    });
});
