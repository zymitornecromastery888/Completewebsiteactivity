jQuery(function ($) {

    "use strict";

    // ===========================
    // Ripple Effect
    // ===========================
    if ($.fn.ripples) {
        $(".slider").ripples({
            dropRadius: 11,
            perturbance: 0.01
        });
    }

    // ===========================
    // Sticky Navbar
    // ===========================
    $(window).scroll(function () {

        if ($(this).scrollTop() >= 60) {
            $("nav").addClass("secondary");
        } else {
            $("nav").removeClass("secondary");
        }

    });

    // ===========================
    // Typing Effect
    // ===========================

    const data = [
        {
            prefix: "I Love ",
            highlight: "Coding."
        },
        {
            prefix: "I Love ",
            highlight: "Dota 2."
        },
        {
            prefix: "Welcome To ",
            highlight: "My Website."
        }
    ];

    const prefix = document.getElementById("prefix");
    const highlight = document.getElementById("highlight");

    let word = 0;
    let letter = 0;
    let deleting = false;

    function animate() {

        let p = data[word].prefix;
        let h = data[word].highlight;

        let full = p + h;

        if (!deleting) {

            letter++;

        } else {

            letter--;

        }

        let current = full.substring(0, letter);

        if (letter <= p.length) {

            prefix.textContent = current;
            highlight.textContent = "";

        } else {

            prefix.textContent = p;
            highlight.textContent = current.substring(p.length);

        }

        if (!deleting && letter === full.length) {

            deleting = true;

            setTimeout(animate, 1500);

            return;

        }

        if (deleting && letter === 0) {

            deleting = false;

            word++;

            if (word >= data.length) {

                word = 0;

            }

        }

        setTimeout(animate, deleting ? 40 : 80);

    }

    animate();

    jQuery(function ($) {

        "use strict";

        // ===========================
        // Ripple Effect - Fixed
        // ===========================
        if ($.fn.ripples) {
            $(".water").ripples({
                dropRadius: 11,
                perturbance: 0.01,
                interactive: true
            });

            // Add ripple to hero section
            $(".jumbotron").ripples({
                dropRadius: 15,
                perturbance: 0.02,
                interactive: true
            });
        }

        // ===========================
        // Sticky Navbar
        // ===========================
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 60) {
                $("nav").addClass("secondary");
            } else {
                $("nav").removeClass("secondary");
            }
        });

        // ===========================
        // Typing Effect
        // ===========================
        const data = [
            { prefix: "I Love ", highlight: "Coding." },
            { prefix: "I Love ", highlight: "Dota 2." },
            { prefix: "Welcome To ", highlight: "My Website." }
        ];

        const prefix = document.getElementById("prefix");
        const highlight = document.getElementById("highlight");

        let word = 0;
        let letter = 0;
        let deleting = false;

        function animate() {
            let p = data[word].prefix;
            let h = data[word].highlight;
            let full = p + h;

            if (!deleting) {
                letter++;
            } else {
                letter--;
            }

            let current = full.substring(0, letter);

            if (letter <= p.length) {
                prefix.textContent = current;
                highlight.textContent = "";
            } else {
                prefix.textContent = p;
                highlight.textContent = current.substring(p.length);
            }

            if (!deleting && letter === full.length) {
                deleting = true;
                setTimeout(animate, 1500);
                return;
            }

            if (deleting && letter === 0) {
                deleting = false;
                word++;
                if (word >= data.length) {
                    word = 0;
                }
            }

            setTimeout(animate, deleting ? 40 : 80);
        }

        animate();

    });



    $(window).scroll(function () {

        var top = $(window).scrollTop();

        if (top >= 60) {
            $("nav").addClass("secondary");
        }

        else if ($("nav").hasClass("secondary")) {
            $("nav").removeClass("secondary");
        }

    });


});

$("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        768: {

            items: 3
        }
    }
});
