(function () {
    'use strict';

    const trigger = 50;

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll(".eltd-fixed-wrapper").forEach(area => {

            area.style.backgroundColor = "rgba(0, 0, 0, 0)"

            let lastKnownScrollPosition = 0;
            let ticking = false;
            let inScrolledState = false;

            function doSomething(scrollPos) {
                window.requestAnimationFrame(function () {
                    if (scrollPos >= trigger) {
                        area.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
                        inScrolledState = true
                    } else {
                        area.style.backgroundColor = "rgba(0, 0, 0, 0)"
                        inScrolledState = false
                    }
                    ticking = false;
                });
                ticking = true;
            }

            document.addEventListener('scroll', function (e) {
                lastKnownScrollPosition = window.scrollY;

                if (!ticking) {
                    if (lastKnownScrollPosition < trigger && inScrolledState) {
                        doSomething(lastKnownScrollPosition)
                    } else if (lastKnownScrollPosition >= trigger && !inScrolledState) {
                        doSomething(lastKnownScrollPosition)
                    }
                }
            });
        })
    })
})()
