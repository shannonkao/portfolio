
var _image_list = ["yc/b_swamp.png","yc/b_fish.png", "yc/w_moon.png",
                    "yc/l_plants.jpg","yc/l_jellies.jpg","yc/stars.png",
                    "yc/v_sky.jpg", "yc/v_stars.jpg", "yc/w_trees.png",
                    "yc/yc-cover.png", "yc/door.png","yc/w_fish.png",];
                   
$(document).ready(function() {
   layout_images(_image_list);
    
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
