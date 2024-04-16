$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var btn_back = $("#back");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_back.click(function() {
        back();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function back() {
        window.history.back();
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }
});
