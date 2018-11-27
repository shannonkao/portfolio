var _image_path = "img/";
var _image_list = ["bus-1.png", "roadtrip-bison.png", "deer.png",
                   "bus-2.png", "vast.png", "fatt-mystery.png",
                   "doorway.png", "motel.png", "fatt-sun.png",
                   "roadtrip-golem.png", "roadtrip-baishe.png", "roadtrip-jackal.png",
                   "lake.png", "city-1.png", "city-2.png"];
var _col_count;

$(document).ready(function() {
   layout_images();
   window.addEventListener('resize', layout_images);
    
    $('#header-contact').on({
        'mouseenter': function() {
            $('#header-contact-link').addClass('hide');
            $('#header-icons').removeClass('hide');
        },'mouseleave': function() {
            $('#header-contact-link').removeClass('hide');
            $('#header-icons').addClass('hide');
        }
    });
});

var col_count = function() {
    return window.innerWidth < 900 ? 2 : 3;
}

var layout_images = function() {
    var new_count = col_count();

    if (new_count != _col_count) {
        _col_count = new_count;

        var waterfall = $("#waterfall");
        waterfall.empty();

        for (var i = 0; i < _col_count; i++) {
            var col = waterfall.append($('<div>', {class: "col"}));
        }

        for (var i = 0, c = 0; i < _image_list.length; i++, c++) {
            c = c % _col_count;
            if (_image_list[i] != "") {
                var img_cont = $('<div>', {class: "img-cont"});
                img_cont.append($('<img>', {src: _image_path + _image_list[i]}));
                $(".col").eq(c).append(img_cont);
            }
        }
    }
}