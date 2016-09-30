'use strict';

$(function() {
    $(".thumbnail img").click(function (event) {
        $(".hero img").prop("src", $(this).prop("src"));
    });
});