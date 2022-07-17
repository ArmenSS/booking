/*
Template: Calendify - Responsive Bootstrap 4 Admin Dashboard Template
Author: iqonicthemes.in
Design and Developed by: iqonicthemes.in
NOTE: This file contains the styling for responsive Template.
*/

/*----------------------------------------------
Index Of Script
------------------------------------------------

:: Tooltip
:: Fixed Nav
:: Ripple Effect
:: Sidebar Widget
:: FullScreen
:: Page Loader
:: Counter
:: Progress Bar
:: Page Menu
:: Close  navbar Toggle
:: user toggle
:: Data tables
:: Form Validation
:: Active Class for Pricing Table
:: Flatpicker
:: Scrollbar
:: checkout
:: Datatables
:: image-upload
:: video
:: Button
:: Pricing tab

------------------------------------------------
Index Of Script
----------------------------------------------*/

(function (jQuery) {
    drawCalendar()

    "use strict";

    jQuery(document).ready(function () {

        /*---------------------------------------------------------------------
        Tooltip
        -----------------------------------------------------------------------*/
        jQuery('[data-toggle="popover"]').popover();
        jQuery('[data-toggle="tooltip"]').tooltip();

        /*---------------------------------------------------------------------
        Fixed Nav
        -----------------------------------------------------------------------*/

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 0) {
                $('.iq-top-navbar').addClass('fixed');
            } else {
                $('.iq-top-navbar').removeClass('fixed');
            }
        });

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 0) {
                $('.white-bg-menu').addClass('sticky-menu');
            } else {
                $('.white-bg-menu').removeClass('sticky-menu');
            }
        });

        /*---------------------------------------------------------------------
        Ripple Effect
        -----------------------------------------------------------------------*/
        jQuery(document).on('click', ".iq-waves-effect", function (e) {
            // Remove any old one
            jQuery('.ripple').remove();
            // Setup
            let posX = jQuery(this).offset().left,
                posY = jQuery(this).offset().top,
                buttonWidth = jQuery(this).width(),
                buttonHeight = jQuery(this).height();

            // Add the element
            jQuery(this).prepend("<span class='ripple'></span>");


            // Make it round!
            if (buttonWidth >= buttonHeight) {
                buttonHeight = buttonWidth;
            } else {
                buttonWidth = buttonHeight;
            }

            // Get the center of the element
            let x = e.pageX - posX - buttonWidth / 2;
            let y = e.pageY - posY - buttonHeight / 2;


            // Add the ripples CSS and start the animation
            jQuery(".ripple").css({
                width: buttonWidth,
                height: buttonHeight,
                top: y + 'px',
                left: x + 'px'
            }).addClass("rippleEffect");
        });

        /*---------------------------------------------------------------------
         Sidebar Widget
         -----------------------------------------------------------------------*/

        jQuery(document).on("click", '.iq-menu > li > a', function () {
            jQuery('.iq-menu > li > a').parent().removeClass('active');
            jQuery(this).parent().addClass('active');
        });

        // Active menu
        var parents = jQuery('li.active').parents('.iq-submenu.collapse');

        parents.addClass('show');


        parents.parents('li').addClass('active');
        jQuery('li.active > a[aria-expanded="false"]').attr('aria-expanded', 'true');

        /*---------------------------------------------------------------------
        FullScreen
        -----------------------------------------------------------------------*/
        jQuery(document).on('click', '.iq-full-screen', function () {
            let elem = jQuery(this);
            if (!document.fullscreenElement &&
                !document.mozFullScreenElement && // Mozilla
                !document.webkitFullscreenElement && // Webkit-Browser
                !document.msFullscreenElement) { // MS IE ab version 11

                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
            elem.find('i').toggleClass('ri-fullscreen-line').toggleClass('ri-fullscreen-exit-line');
        });


        /*---------------------------------------------------------------------
        Page Loader
        -----------------------------------------------------------------------*/
        jQuery("#load").fadeOut();
        jQuery("#loading").delay().fadeOut("");


        /*---------------------------------------------------------------------
        Counter
        -----------------------------------------------------------------------*/
        if (window.counterUp !== undefined) {
            const counterUp = window.counterUp["default"]
            const $counters = $(".counter");
            $counters.each(function (ignore, counter) {
                var waypoint = new Waypoint({
                    element: $(this),
                    handler: function () {
                        counterUp(counter, {
                            duration: 1000,
                            delay: 10
                        });
                        this.destroy();
                    },
                    offset: 'bottom-in-view',
                });
            });
        }


        /*---------------------------------------------------------------------
        Progress Bar
        -----------------------------------------------------------------------*/
        jQuery('.iq-progress-bar > span').each(function () {
            let progressBar = jQuery(this);
            let width = jQuery(this).data('percent');
            progressBar.css({
                'transition': 'width 2s'
            });

            setTimeout(function () {
                progressBar.appear(function () {
                    progressBar.css('width', width + '%');
                });
            }, 100);
        });

        jQuery('.progress-bar-vertical > span').each(function () {
            let progressBar = jQuery(this);
            let height = jQuery(this).data('percent');
            progressBar.css({
                'transition': 'height 2s'
            });
            setTimeout(function () {
                progressBar.appear(function () {
                    progressBar.css('height', height + '%');
                });
            }, 100);
        });


        /*---------------------------------------------------------------------
        Page Menu
        -----------------------------------------------------------------------*/
        jQuery(document).on('click', '.wrapper-menu', function () {
            jQuery(this).toggleClass('open');
        });

        jQuery(document).on('click', ".wrapper-menu", function () {
            jQuery("body").toggleClass("sidebar-main");
        });


        /*---------------------------------------------------------------------
        user toggle
        -----------------------------------------------------------------------*/
        jQuery(document).on('click', '.iq-user-toggle', function () {
            jQuery(this).parent().addClass('show-data');
        });

        jQuery(document).on('click', ".close-data", function () {
            jQuery('.iq-user-toggle').parent().removeClass('show-data');
        });
        jQuery(document).on("click", function (event) {
            var $trigger = jQuery(".iq-user-toggle");
            if ($trigger !== event.target && !$trigger.has(event.target).length) {
                jQuery(".iq-user-toggle").parent().removeClass('show-data');
            }
        });
        /*-------hide profile when scrolling--------*/
        jQuery(window).scroll(function () {
            let scroll = jQuery(window).scrollTop();
            if (scroll >= 10 && jQuery(".iq-user-toggle").parent().hasClass("show-data")) {
                jQuery(".iq-user-toggle").parent().removeClass("show-data");
            }
        });
        let Scrollbar = window.Scrollbar;
        if (jQuery('.data-scrollbar').length) {

            Scrollbar.init(document.querySelector('.data-scrollbar'), {continuousScrolling: false});
        }


        /*---------------------------------------------------------------------
        Form Validation
        -----------------------------------------------------------------------*/

        // Example starter JavaScript for disabling form submissions if there are invalid fields
        window.addEventListener('load', function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);

        /*---------------------------------------------------------------------
         Active Class for Pricing Table
         -----------------------------------------------------------------------*/
        jQuery("#my-table tr th").click(function () {
            jQuery('#my-table tr th').children().removeClass('active');
            jQuery(this).children().addClass('active');
            jQuery("#my-table td").each(function () {
                if (jQuery(this).hasClass('active')) {
                    jQuery(this).removeClass('active')
                }
            });
            var col = jQuery(this).index();
            jQuery("#my-table tr td:nth-child(" + parseInt(col + 1) + ")").addClass('active');
        });

        /*------------------------------------------------------------------
        Flatpicker
        * -----------------------------------------------------------------*/
        if (jQuery.fn.flatpickr !== undefined) {
            if (jQuery('.basicFlatpickr').length > 0) {
                jQuery('.basicFlatpickr').flatpickr();
            }

            if (jQuery('#inputTime').length > 0) {
                jQuery('#inputTime').flatpickr({
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: "H:i",
                });
            }
            if (jQuery('#inputDatetime').length > 0) {
                jQuery('#inputDatetime').flatpickr({
                    enableTime: true
                });
            }
            if (jQuery('#inputWeek').length > 0) {
                jQuery('#inputWeek').flatpickr({
                    weekNumbers: true
                });
            }
            if (jQuery('#inline-date').length > 0) {
                jQuery("#inline-date").flatpickr({
                    inline: true
                });
            }
            if (jQuery('#inline-date1').length > 0) {
                jQuery("#inline-date1").flatpickr({
                    inline: true
                });
            }
        }

        /*---------------------------------------------------------------------
        Scrollbar
        -----------------------------------------------------------------------*/

        jQuery(window).on("resize", function () {
            if (jQuery(this).width() <= 1299) {
                jQuery('#salon-scrollbar').addClass('data-scrollbar');
            } else {
                jQuery('#salon-scrollbar').removeClass('data-scrollbar');
            }
        }).trigger('resize');

        jQuery('.data-scrollbar').each(function () {
            var attr = $(this).attr('data-scroll');
            if (typeof attr !== typeof undefined && attr !== false) {
                let Scrollbar = window.Scrollbar;
                var a = jQuery(this).data('scroll');
                Scrollbar.init(document.querySelector('div[data-scroll= "' + a + '"]'));
            }
        });


        /*---------------------------------------------------------------------
          Datatables
       -----------------------------------------------------------------------*/
        if (jQuery('.data-tables').length) {
            $('.data-tables').DataTable();
        }

        if ($.fn.select2 !== undefined) {
            $("#single").select2({
                placeholder: "Select a Option",
                allowClear: true
            });
            $("#multiple").select2({
                placeholder: "Select a Multiple Option",
                allowClear: true
            });
            $("#multiple2").select2({
                placeholder: "Select a Multiple Option",
                allowClear: true
            });
        }

        /*---------------------------------------------------------------------
        Pricing tab
        -----------------------------------------------------------------------*/
        jQuery(window).on('scroll', function (e) {

            // Pricing Pill Tab
            var nav = jQuery('#pricing-pills-tab');
            if (nav.length) {
                var contentNav = nav.offset().top - window.outerHeight;
                if (jQuery(window).scrollTop() >= (contentNav)) {
                    e.preventDefault();
                    jQuery('#pricing-pills-tab li a').removeClass('active');
                    jQuery('#pricing-pills-tab li a[aria-selected=true]').addClass('active');
                }
            }
        });


        /*---------- */
        $(".dropdown-menu li a").click(function () {
            var selHtml = $(this).html();
            var selName = $.trim($(this).text())
            $(this).parents('.btn-group').find('.search-replace').html(selHtml);
            $(this).parents('.btn-group').find('.search-query').val(selName);
        });

        /*---------------------------------------------------------------------
        List and Grid
        -----------------------------------------------------------------------*/
        $('.list-grid-toggle').click(function () {
            var txt = $(".icon").hasClass('icon-grid') ? 'List' : 'Grid';
            $('.icon').toggleClass('icon-grid');
            $(".label").text(txt);
        })

        $('[data-toggle="pill"]').on('click', function () {
            const extra = $(this).attr('data-extra')
            if (extra !== undefined) {
                $('.tab-extra').removeClass('active')
                $(extra).addClass('active')
            }
        })

        $('[data-toggle="pill"]').on('click', function () {
            const extra = $(this).attr('data-extras')
            if (extra !== undefined) {
                $('.filter-extra').removeClass('active')
                $(extra).addClass('active')
            }
        })

        $('[data-placement="daterange"]').daterangepicker({
            opens: 'center'
        }, function (start, end, label) {
            console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
        });

        $('#view-event').on('click', function (e) {
            e.preventDefault()
            $('#view-btn').tab('show');
        })

        $(document).on('click', '[data-extra-toggle="copy"]', function (e) {
            e.preventDefault()
            $(this).attr("title", "Copied!").tooltip("_fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("_fixTitle");
            const input = $(this).data("input")
            copyToClipboard($(input).val())

        })

        $(document).on('click', '[data-extra-toggle="random-text"]', function (e) {
            e.preventDefault()
            const length = $(this).data('length')
            const input = $(this).data('input')
            const target = $(this).data('target')
            const value = random(length)
            $(input).val(value)
            $(target).html(value)
        })

        // Goto workflow page
        const urlParams = new URLSearchParams(window.location.search);
        const activeTab = '#' + urlParams.get('activeTab');
        if ($(activeTab).length > 0) {
            $(activeTab).tab('show')
        }


        function random(length) {
            let result = ''
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            const charactersLength = characters.length
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength))
            }
            return result
        }

        function copyToClipboard(value) {
            const elem = $("<input>")
            $("body").append(elem);
            elem.val(value).select();
            document.execCommand("copy");
            elem.remove();
        }

        $(document).on('change', '.card-change', function (e) {
            $(this).closest('.event-detail').find('.dropdown').addClass('d-none')
            $(this).closest('.event-detail').addClass('disabled')
            $(this).closest('.event-detail').find('.copy').addClass('d-none')
            $(this).closest('.event-detail').find('.turn-on').removeClass('d-none')
            $(this).closest('.event-detail').find('.card-change').prop('checked', true);
        })

        $(document).on('click', '.turn-on', function (e) {
            e.preventDefault()
            $(this).closest('.event-detail').find('.copy').removeClass('d-none')
            $(this).closest('.event-detail').find('.card-change').prop('checked', false);
            $(this).closest('.event-detail').removeClass('disabled')
            $(this).closest('.event-detail').find('.dropdown').removeClass('d-none')
            $(this).addClass('d-none')
        })
    });

    $("#submitSchedule").on('click', function () {
        let serializeArray = $('#scheduleForm').serializeArray();
        console.log("serializeArray", serializeArray);
        let valid = true;

        for (let i = 1; i < serializeArray.length; i++) {
            if (!serializeArray[i].value) {
                valid = false
                $("#modalTitle").append("Required fields are empty")
                setTimeout(() => {
                    $("#modalTitle").empty()
                }, 1000)
                break;
            }
        }
        if (valid) {
            $('#date-event').modal('toggle');
            const data = {
                "id": serializeArray[0].value,
                "name": serializeArray[1].value,
                "members": serializeArray[2].value,
                "startDate": serializeArray[4].value,
                "endDate": serializeArray[5].value
            }
            $.ajax({
                type: "POST",
                data: data,
                url: '/add',
                success: function (data) {
                    $("#scheduleForm").trigger('reset');
                    $('#calendar1').empty()
                    drawCalendar()
                }
            });
        }
    });


    function drawCalendar() {
        $.ajax({
            type: 'GET',
            url: '/schedule',
            success: function (data) {
                let list = data;
                let c = []
                for (let g = 0; g < list.length; g++) {
                    c.push({
                        title: list[g].name + ' members- ' + list[g].members,
                        // url: '/',
                        start: list[g].startDate,
                        end: list[g].endDate,
                        color: g % 2 === 0 ? '#fa0606' : '#B9FA06FF'
                    })
                }
                // calender 1 js
                var calendar1;
                if (jQuery('#calendar1').length) {
                    var calendarEl = document.getElementById('calendar1');
                    calendar1 = new FullCalendar.Calendar(calendarEl, {
                        selectable: true,
                        plugins: ["timeGrid", "dayGrid", "list", "interaction"],
                        timeZone: "UTC",
                        defaultView: "dayGridMonth",
                        contentHeight: "auto",
                        eventLimit: true,
                        dayMaxEvents: 4,
                        header: {
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                        },
                        dateClick: function (info) {

                            let date = info.dateStr.split("-").join("-");
                            let hours = new Date().getHours();
                            let minutes = new Date().getMinutes();
                            let b = date + 'T' + '00:00:00'
                            console.log("clickked", b)
                            $.ajax({
                                type: 'GET',
                                url: '/date?localDateTime=' + b,
                                success: function (data) {
                                    console.log(data)
                                    if (data) {
                                        $('#schedule-id').val(data.id)
                                        $('#schedule-title').val(data.name)
                                        $('#members-count').val(data.members);
                                        $('#schedule-end-date').val(data.endDate);
                                        $('#schedule-start-date').val(data.startDate)

                                        // $('#members-count').val(data.members);
                                    } else {
                                        $('#schedule-start-date').val(b)
                                        $('#schedule-end-date').val(b)

                                    }
                                    $('#date-event').modal('show')
                                    console.log("clickkeddata", data)
                                }
                            })

                        },
                        events: c

                    });
                    calendar1.render();
                    $(document).on("submit", "#submit-schedule", function (e) {
                        e.preventDefault()
                        const title = $(this).find('#schedule-title').val()
                        const startDate = moment(new Date($(this).find('#schedule-start-date').val()), 'YYYY-MM-DD').format('YYYY-MM-DD') + 'T05:30:00.000Z'
                        const endDate = moment(new Date($(this).find('#schedule-end-date').val()), 'YYYY-MM-DD').format('YYYY-MM-DD') + 'T05:30:00.000Z'
                        const color = $(this).find('#schedule-color').val()
                        console.log(startDate, endDate, color)
                        const event = {
                            title: title,
                            start: startDate || '2020-12-22T02:30:00',
                            end: endDate || '2020-12-12T14:30:00',
                            color: color || '#7858d7'
                        }
                        $(this).closest('#date-event').modal('hide')
                        calendar1.addEvent(event)
                    })
                }
            }
        });
    }


    // Enable all tooltips
    $('[data-toggle="tooltip"]').tooltip();
    // quill
    if (jQuery("#editor").length) {
        new Quill('#editor', {theme: 'snow'});
    }
    // With Tooltip
    if (jQuery("#quill-toolbar").length) {
        new Quill('#quill-toolbar', {
            modules: {toolbar: '#quill-tool'},
            placeholder: 'Compose an epic...',
            theme: 'snow'
        });
        // Can control programmatically too
        $('.ql-italic').mouseover();
        setTimeout(function () {
            $('.ql-italic').mouseout();
        }, 2500);
    }

    const readURL = function (input) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }


    $(".file-upload").on('change', function () {
        readURL(this);
    });

    $(".upload-button").on('click', function () {
        $(".file-upload").trigger('click');
    });

})(jQuery);
