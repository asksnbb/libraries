(function ($) {
    $.fn.lazyRate = function (options) {

        var settings = $.extend({
            delay: 200 //default (in ms)
        }, options);

        var sleepValue = 0;

        return this.each(function () {
            //console.log(this.id);
            var realSrc = $(this).data("src"); //the value of the real image, we want to display
            var id = this.id; //the id of the image - needed to use setTimeout (which does not understand "this")
            setTimeout(
                function () {
                    $("#" + id).attr("src", realSrc); //replace the src with the value from data-src (to load the image)
                }, sleepValue);
            sleepValue = sleepValue + settings.delay; //increase the delay for each loop, as the setTimeout returns right away
        });
    };

}(jQuery));
