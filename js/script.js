$(document).ready(function () {
    /* ===========================
             wow 
       =========================== */
    function wowActivator() {
        var wow = new WOW({
            offset: 0
        });
        wow.init();
    }
    wowActivator();
    /* ===========================
             nav-bar 
       =========================== */
    $("#open-menu").click(function () {
        var isExpanded = $(this).attr('aria-expanded');
        $(this).find('.fa-bars, .fa-bars').toggleClass('all');
        if (isExpanded === 'false') {
            $(this)
                .find('[data-fa-i2svg]')
                .toggleClass('fa-xmark')
                .toggleClass('fa-bars');
            $('body').css('position', 'static');
        } else {
            $(this)
                .find('[data-fa-i2svg]')
                .toggleClass('fa-bars')
                .toggleClass('fa-xmark');
            $('body').css({
                'position': 'fixed',
                'width': '100%',
                'height': '100%'
            });
        }
    })

    /* ===========================
                btn-nav-2 
           =========================== */
    const done = document.querySelectorAll('.btn-nav-2');
    done.forEach(function (el) {
        el.addEventListener('click', function () {

            const b = el.children[1];
            if (b.style.display === "block") {
                b.style.display = "block";
                $(this)
                    .find('[data-fa-i2svg]')
                    .toggleClass('fa-angle-down')
                    .toggleClass('fa-angle-up');
            } else {
                b.style.display = "block";
                $(this)
                    .find('[data-fa-i2svg]')
                    .toggleClass('fa-angle-down')
                    .toggleClass('fa-angle-up');
            }
        });
    });
    // window.addEventListener("scroll", function () {
    //     const navbar = document.querySelectorAll(".abo");

    //     for (let i = 0; i < navbar.length; i++) {
    //         if (window.scrollY > 50) {
    //             navbar[i].classList.add("nave");
    //         } else {
    //             navbar[i].classList.remove("nave");
    //         }
    //     }
    //     const lin = document.querySelectorAll(".abo .nav-item a.nav-link");
    //     for (let n = 0; n < lin.length; n++) {
    //         if (window.scrollY > 50) {
    //             lin[n].classList.add("bac");
    //         } else {
    //             lin[n].classList.remove("bac");
    //         }
    //     }
    //     const but = document.querySelectorAll(".abo .btn-nav");
    //     for (let n = 0; n < but.length; n++) {
    //         if (window.scrollY > 50) {
    //             but[n].classList.add("meg");
    //         } else {
    //             but[n].classList.remove("meg");
    //         }
    //     }
    //     const ico = document.querySelectorAll(".abo .btn-nav svg");
    //     for (let n = 0; n < ico.length; n++) {
    //         if (window.scrollY > 50) {
    //             ico[n].classList.add("rang");
    //         } else {
    //             ico[n].classList.remove("rang");
    //         }
    //     }
    // });
    const navLinks = document.querySelectorAll('nav a');

    // Function to handle link click
    function handleLinkClick(e) {
        // Remove active class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to clicked link
        e.target.classList.add('active');
    }

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

    // Optional: Set initial active link based on current URL
    const currentURL = window.location.href;
    navLinks.forEach(link => {
        if (link.href === currentURL) {
            link.classList.add('active');
        }
    });
});
