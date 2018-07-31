(function ($) {
    'use strict';
    $(".touchpin").TouchSpin({
        min: 0,
        max: 5000000
    });
    
})(jQuery);

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image_holder')
                .attr('src', e.target.result)
                .width(500)
                .height(500);
        };

        reader.readAsDataURL(input.files[0]);
    }
}