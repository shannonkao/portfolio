var _image_path = "img/";
var _image_list = ["vast.png", "roadtrip-bison.png", 
                   "fatt-mystery.png", "fatt-sun.png",
                   "tea-1.png", "doorway.png",
                   "tea-2.png", "forged.png",
                   "city-1.png", "city-2.png"];

var _col_count = 2;

$(document).ready(function() {
    $('#header-icons').hide();
    
    var waterfall = $("#waterfall");
    
    for (var i = 0; i < _col_count; i++) {
        var col = waterfall.append($('<div>', {class: "col"}));
    }

    for (var i = 0, c = 0; i < _image_list.length; i++, c++) {
        c = c % _col_count;
        var img_cont = $('<div>', {class: "img-cont"});
        img_cont.append($('<img>', {src: _image_path + _image_list[i]}));
        $(".col").eq(c).append(img_cont);
    }
    
    $('#header-contact').on({
        'mouseenter': function() {
            console.log("mouseenter")
            $('#header-contact-link').fadeTo('normal', 0);
            $('#header-icons').fadeTo('normal', 1);
        },'mouseleave': function() {
            $('#header-contact-link').fadeTo('normal', 1);
            $('#header-icons').fadeTo('normal', 0);
        }
    });
});
