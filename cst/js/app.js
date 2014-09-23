// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

var countdownDate = "1 January 2015 00:00:00";

$(function() {
    $("#countdown").countdown({
        date: countdownDate
    });


    var triggerBttn = $('a.trigger-overlay'),
        overlay = $('div.overlay'),
        closeBttn = $('button.overlay-close');
    transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
        'transition': 'transitionend'
    },
    transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
    support = {
        transitions: Modernizr.csstransitions
    };

    function toggleOverlay(target) {

        var $target = $('#' + target);

        if ($target.hasClass('open')) {
            $target.removeClass('open');
            $target.addClass('close');

            if (support.transitions) {
                console.log(transEndEventName)
                $target.one(transEndEventName, function(e) {

                    $target.removeClass('close');

                });
            } else {
                $target.removeClass('close');
            }
        } else if (!$target.hasClass('close')) {
            $target.addClass('open');
        }
    }
    //triggerBttn.addEventListener('click', toggleOverlay);
    triggerBttn.click(function() {

        toggleOverlay($(this).data('target'));
    });
    //closeBttn.addEventListener('click', toggleOverlay);
    closeBttn.click(function() {
        toggleOverlay($(this).parent('.overlay').attr('id'));
    });

});
