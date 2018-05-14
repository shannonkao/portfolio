var _image_path = "img/";
var _image_list = ["bottle.gif", "deer.png", 
                   "vast.png", "roadtrip-bison.png", 
                   "fatt-mystery.png", "fatt-sun.png",
                   "doorway.png", "roadtrip-baishe.png", 
                   "bulb-1.png", "forged.png",
                   "tea.png", "bulb-2.png",
                   "motel.png", "lake.png",
                   "city-1.png", "city-2.png"];

var _col_count = 2;

$(document).ready(function() {
    var waterfall = $("#waterfall");
    
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
    
    $('#header-contact').on({
        'mouseenter': function() {
            console.log("mouseenter")
            $('#header-contact-link').addClass('hide');
            $('#header-icons').removeClass('hide');
        },'mouseleave': function() {
            $('#header-contact-link').removeClass('hide');
            $('#header-icons').addClass('hide');
        }
    });
});
