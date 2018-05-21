require.config({
    baseUrl: "/js/",
    paths: {
        //lib
        "jquery": "./lib/jquery-3.3.1.min",
        "handlebars": "./lib/handlebars-v4.0.11",
        "swiper": "./lib/swiper-4.1.6.min",
        "bscroll": "./lib/bscroll",
        "text": "./lib/text",
        "GetSlideDirection ": './lib/direction',
        //app
        "index": "app/index"

    }
});
require(["index"])