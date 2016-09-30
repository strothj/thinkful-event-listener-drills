'use strict';

$(function () {
    $("#number-chooser").submit(function (event) {
        event.preventDefault();
        var max = $("#number-choice").val();
        for (var i = 0; i <= max; i++) {
            console.log(i % 3);
            var text;
            if (i % 3 === 0 && i % 5 === 0) {
                text = "fizzbuzz";
            } else if (i % 3 === 0) {
                text = "fizz";
            } else if (i % 5 === 0) {
                text = "buzz";
            } else {
                text = i;
            }
            text = '<div class="fizz-buzz-item"><span>' + text + '</span></div>';
            $(".js-results").append(text);
        }
    });
});