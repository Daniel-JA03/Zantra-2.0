
var Util = function(t) {
    "use strict";
    var e = t(".main-navigation")
      , i = function(t, e, i) {
        var n;
        return function() {
            var r = this
              , s = arguments
              , o = function() {
                n = null,
                i || t.apply(r, s)
            }
              , a = i && !n;
            clearTimeout(n),
            n = setTimeout(o, e),
            a && t.apply(r, s)
        }
    }
      , n = function() {
        t("img").on("dragstart", function(t) {
            t.preventDefault()
        })
    }
      , r = function() {
        t(document).on("click", "#all-works", function(i) {
            i.preventDefault(),
            e.addClass("is-hidden"),
            t("body").addClass("is-works-open overflow"),
            Util.sendGAEvent("Case Study", "Open Index Case Studies", !1)
        })
    }
      , s = function() {
        t(document).on("click", ".works-index-close", function(i) {
            i.preventDefault(),
            e.removeClass("is-hidden"),
            t("body").removeClass("is-works-open overflow")
        })
    }
      , o = function() {
        t(document).on("click", ".open-contact", function(e) {
            e.preventDefault(),
            t("body").addClass("is-contact-open"),
            Util.sendGAEvent("Contact", "Open Contact Section", !1),
            setTimeout(function() {
                t("body").addClass("overflow")
            }, 1200)
        })
    }
      , a = function() {
        t(document).on("click", ".close-contact", function(e) {
            e.preventDefault(),
            t("body").removeClass("is-contact-open"),
            setTimeout(function() {
                t("body").removeClass("overflow")
            }, 1200)
        })
    }
      , l = function() {
        t(document).on("click", ".case-study", function(t) {
            Util.sendGAEvent("Case Study", "Click on Home Case Study", t.currentTarget.id)
        })
    }
      , u = function() {
        var e = t(document).find("title").text()
          , i = "Be sure to checkout this before closing the internet :P";
        document.addEventListener("visibilitychange", function() {
            document.hidden ? t(document).find("title").text(i) : t(document).find("title").text(e)
        })
    }
      , h = function(t) {
        ga("set", "page", t),
        ga("send", "pageview")
    }
      , c = function(t, e, i) {
        i ? ga("send", "event", t, e, i) : ga("send", "event", t, e)
    }
      
    }
      , p = function() {
        o(),
        a(),
        r(),
        s(),
        n(),
        l()
    };
   
  Navigation = function(t) {
    "use strict";
    var e = function() {
        function e() {
            var e = t(window).scrollTop();
            i(e),
            s = e,
            r = !1
        }
        function i(t) {
            s - t > o ? (n.removeClass("is-hidden").addClass("view-in-scroll"),
            t < 20 && n.removeClass("view-in-scroll")) : t - s > o && t > a && n.addClass("is-hidden")
        }
        var n = t(".main-navigation")
          , r = !1
          , s = 0
          , o = 10
          , a = 150;
        t(window).on("scroll", function() {
            r || (r = !0,
            window.requestAnimationFrame ? requestAnimationFrame(e) : setTimeout(e, 250))
        })
    }
      , i = function() {
        t(document).on("click", "a[data-scroll]", function(e) {
            e.preventDefault();
            var i = t(this).attr("href")
              , n = t(i).offset().top;
            TweenLite.to(window, 1.2, {
                scrollTo: {
                    y: n
                },
                ease: Power4.easeInOut
            })
        })
    }
      , n = function() {
        var e = t(".no-single-work")
          , i = t(".in-single-work");
        t(".single-work").length || t(".privacy").length ? (e.addClass("hidden"),
        i.addClass("not-hidden")) : (e.removeClass("hidden"),
        i.removeClass("not-hidden"))
    }
      , r = function(t) {
        var e = t.find(".no-single-work")
          , i = t.find(".in-single-work");
        t.find(".single-work").length ? (e.addClass("hidden"),
        i.addClass("not-hidden")) : (e.removeClass("hidden"),
        i.removeClass("not-hidden"))
    }
      , s = function() {
        t(document).on("click", ".menu-trigger", function() {
            t("body").addClass("is-mobile-menu-open")
        }),
        t(document).on("click", ".close-trigger", function() {
            t("body").removeClass("is-mobile-menu-open")
        }),
        t(document).on("click", ".mobile-nav-links a", function() {
            t("body").removeClass("is-mobile-menu-open")
        })
    }
      , o = function() {
        e(),
        i(),
        n(),
        s()
    };
    return {
        init: o,
        manageChangePageNavLinks: r
    }
}(jQuery)
  , Form = function(t) {
    "use strict";
    var e = function(t) {
        return !!/[0-9\-\.\_a-z]+@[0-9\-\.a-z]+\.[a-z]+/.test(t)
    }
      , i = function() {
        var i = t("#contact-form")
          , n = t("#name")
          , r = t("#email")
          , s = t("#message")
          , o = i.find(".submit-button");
        i.find("input, textarea").on("keyup", function() {
            "" !== n.val() && "" !== r.val() && e(r.val()) && "" !== s.val() ? o.prop("disabled", !1) : o.prop("disabled", !0)
        })
    }
      , n = function() {
        var e = t("#contact-half")
          , i = t("#contact-form")
          , n = i.attr("action")
          , r = i.find(".submit-button")
          , s = t(".form-message");
        i.on("submit", function(o) {
            o.preventDefault();
            var a = i.serialize();
            Util.sendGAEvent("Contact", "Try Contact me", !1),
            e.addClass("is-form-processing"),
            t.ajax({
                type: "POST",
                url: n,
                data: a
            }).done(function(t) {
                s.text(t),
                setTimeout(function() {
                    e.removeClass("error").addClass("success")
                }, 2e3),
                setTimeout(function() {
                    e.removeClass("is-form-processing")
                }, 6e3),
                setTimeout(function() {
                    e.removeClass("success"),
                    r.prop("disabled", !0)
                }, 7e3),
                Util.sendGAEvent("Contact", "Contact Success", !1),
                i.find("input, textarea").val("")
            }).fail(function(t) {
                "" !== t.responseText ? s.text(t.responseText) : s.text("An error occured and your message could not be sent."),
                setTimeout(function() {
                    e.removeClass("success").addClass("error")
                }, 2e3),
                setTimeout(function() {
                    e.removeClass("is-form-processing")
                }, 6e3),
                setTimeout(function() {
                    e.removeClass("error")
                }, 7e3),
                Util.sendGAEvent("Contact", "Contact Error", !1)
            })
        })
    }
      , r = function() {
        n(),
        i()
    };
    return {
        init: r
    }
}(jQuery)
  , Cookie = function(t) {
    "use strict";
    var e = t(".cookie-banner")
      , i = e.find(".confirm-cookies")
      , n = function(t, e, i) {
        var n;
        if (i) {
            var r = new Date;
            r.setTime(r.getTime() + 24 * i * 60 * 60 * 1e3),
            n = "; expires=" + r.toGMTString()
        } else
            n = "";
        document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e) + n + "; path=/"
    }
      , r = function(t) {
        for (var e = encodeURIComponent(t) + "=", i = document.cookie.split(";"), n = 0; n < i.length; n++) {
            for (var r = i[n]; " " === r.charAt(0); )
                r = r.substring(1, r.length);
            if (0 === r.indexOf(e))
                return decodeURIComponent(r.substring(e.length, r.length))
        }
        return null
    }
      , s = function(t) {
        n(t, "", -1)
    }
      , o = function() {
        i.on("click", function(t) {
            t.preventDefault(),
            e.removeClass("is-banner-open"),
            n("banner", "active", 30)
        })
    };
    return {
        init: o,
        create: n,
        read: r,
        destroy: s
    }
}(jQuery)
  , AnimationManager = function(t) {
    "use strict";
    var e = function(e) {
        var i = t("#page-transition")
          , n = e.data("destination");
        i.removeClass("home cerasa lato la-francesca sportland").addClass(n)
    }
      , i = function() {
        t(document).on("click", "#change-theme", function(e) {
            e.preventDefault(),
            t("body").hasClass("bright-theme") ? (t("body").removeClass("bright-theme"),
            Cookie.create("theme", "default", 30)) : (t("body").addClass("bright-theme"),
            Cookie.create("theme", "bright", 30))
        })
    }
      , n = function() {
        "bright" == Cookie.read("theme") && t(".main-hero").length ? t("body").addClass("bright-theme") : t("body").removeClass("bright-theme")
    }
      , r = function() {
        var e = t(".main-navigation");
        e.addClass("is-loaded")
    }
      , s = function() {
        var e = t("#shapes-mask");
        e.length && e.addClass("is-loaded")
    }
      , o = function() {
        var e = t(".context-stripe-focus-area");
        e.length && (e.addClass("is-loaded"),
        Modernizr.mq("(min-width: 1024px)") && window.baffle(document.querySelectorAll(".stripe-baffle"), {
            characters: "█▓▒░█▓▒░█▓▒░<>/"
        }).start().reveal(1e3, 800))
    }
      , a = function() {
        var e = t(".text-loading-overlay");
        e.length && (e.addClass("is-reveal"),
        e.onCSSTransitionEnd(function() {
            e.removeAttr("style")
        }))
    }
      , l = function() {
        Modernizr.mq("(min-width: 1024px)") && new Vivus("logo-anim",{
            duration: 55
        })
    }
      , u = function() {
        if (t(".main-hero-subtitle").length) {
            var e = window.baffle(document.querySelector(".main-hero-subtitle"), {
                characters: "█▓▒░█▓▒░█▓▒░<>/"
            });
            Modernizr.mq("(min-width: 1024px)") && setTimeout(function() {
                e.start().reveal(700, 800)
            }, 200)
        }
    }
      , h = function(i, n) {
        e(i),
        setTimeout(function() {
            t("body").removeClass("is-works-open overflow is-mobile-menu-open")
        }, 1300)
    }
      , c = function(t, e) {
        e.restartCSSAnimations()
    }
      , f = function(e, i) {
        var n = t("#page-transition")
          , r = n.find(".page-transition-content")
          , s = t("#page-transition-after")
          , o = t(window).scrollTop();
        t("body").removeClass("bright-theme"),
        r.removeClass("is-hidden"),
        o > 0 ? TweenLite.to(window, .5, {
            scrollTo: {
                y: 0
            },
            ease: Power4.easeInOut,
            onComplete: function() {
                TweenLite.to(n, .95, {
                    x: "100%",
                    ease: Power4.easeInOut,
                    delay: .09,
                    onComplete: function() {
                        Navigation.manageChangePageNavLinks(i)
                    }
                })
            }
        }) : TweenLite.to(n, .95, {
            x: "100%",
            ease: Power4.easeInOut,
            delay: .09,
            onComplete: function() {
                Navigation.manageChangePageNavLinks(i)
            }
        }),
        TweenLite.to(s, .95, {
            x: "100%",
            ease: Power4.easeInOut
        }),
        setTimeout(function() {
            e.html(i)
        }, 1350)
    }
      , p = function(e, n) {
        function l() {
            null != Cookie.read("banner") ? p.removeClass("is-banner-open") : setTimeout(function() {
                p.addClass("is-banner-open")
            }, 1200)
        }
        var h = t("#page-transition")
          , c = h.find(".page-transition-content")
          , f = t("#page-transition-after")
          , p = n.find(".cookie-banner");
        setTimeout(function() {
            c.addClass("is-hidden")
        }, 2300),
        setTimeout(function() {
            TweenLite.to(h, 1, {
                x: "-100%",
                ease: Power4.easeInOut,
                onComplete: function() {
                    Util.init(),
                    Util.onPageVisibilityChange(),
                    Navigation.init(),
                    Form.init(),
                    Cookie.init(),
                    AnimationManager.init(),
                    i(),
                    t(".main-hero").length && AnimationManager.animateHeroShapes(),
                    u(),
                    r(),
                    a(),
                    s(),
                    o(),
                    l()
                }
            }),
            TweenLite.to(f, 1, {
                x: "-100%",
                ease: Power4.easeInOut,
                delay: .09
            })
        }, 2500)
    }
      , d = function() {
        function t(t) {
            i = t.pageX / o,
            n = t.pageY / o,
            e()
        }
        function e() {
            TweenLite.to(".layer1", r, {
                x: i,
                y: -n,
                ease: Power4.easeOut
            }),
            TweenLite.to(".layer2", s, {
                x: -i,
                y: n,
                ease: Power4.easeOut
            })
        }
        var i, n, r = 1, s = 2, o = 13, a = document.querySelector(".main-hero");
        a.addEventListener("mousemove", t, !1)
    }
      , m = function() {
        Modernizr.mq("(min-width: 1024px)") && t(".about-contact").cursometer({
            onUpdateSpeed: function(e) {
                t(".about-speed").html("SP: " + e)
            },
            updateSpeedRate: 20
        })
    }
      , R = function() {
        if (t(".main-404").length) {
            var e = function(t, e, i) {
                for (var n = 0, r = 0; r < t.length; r++)
                    t[r] = t[r].replace(/ /g, "&nbsp;"),
                    t[r] = "<pre>" + t[r] + "</pre>";
                i.innerHTML = t[0],
                n++,
                this.animation = setInterval(function() {
                    i.innerHTML = t[n],
                    n++,
                    n >= t.length && (n = 0)
                }, e),
                this.getCurrentFrame = function() {
                    return n
                }
            }
              , i = document.createElement("div")
              , n = document.createElement("div")
              , r = document.getElementById("happy-place");
            r.appendChild(i);
            var s = document.getElementById("go-home");
            s.appendChild(n),
            i.className = "happy",
            n.className = "go-home-anim";
            var o = [".(^-^)'", "-(^-^)-", "'(^-^).", "-(^o^)-", ".(^-^)'", "-(^-^)-", "'(^-^).", "-(^-^)-"]
              , a = (new e(o,100,i),
            ["[>    ]", "[>>   ]", "[>>>  ]", "[ >>> ]", "[  >>>]", "[   >>]", "[    >]", "[     ]"]);
            new e(a,50,n);
            e.prototype.stopAnimation = function() {
                clearInterval(this.animation)
            }
        }
    }
      , g = function() {
        function e() {
            c.addClass("is-hidden"),
            p.addClass("is-hidden")
        }
        function i() {
            u(),
            r(),
            a(),
            s(),
            o()
        }
        function h() {
            null != Cookie.read("banner") ? d.removeClass("is-banner-open") : setTimeout(function() {
                d.addClass("is-banner-open")
            }, 1200)
        }
        var c = t("#loader")
          , f = c.find(".loader-content")
          , p = t("#loader-after")
          , d = t(".cookie-banner");
        f.addClass("is-hidden"),
        t("body").addClass("loaded"),
        n(),
        TweenLite.to(p, .67, {
            x: "100%",
            ease: Power4.easeInOut,
            onComplete: function() {
                setTimeout(function() {
                    e(),
                    h(),
                    t("#logo-anim").length && l(),
                    setTimeout(function() {
                        i()
                    }, 300)
                }, 750)
            }
        })
    }
      , _ = function() {
        if (Modernizr.mq("(min-width: 1024px)")) {
            var e = t(".experiments-mask-reveal")
              , i = e.find("span:first")
              , n = e.find("span:last");
            t(".case-study").addClass("is-hidden"),
            t(".section-text-mask").addClass("is-hidden"),
            t(".single-work-intro-title").addClass("is-hidden"),
            t(".single-work-anim-text").addClass("is-hidden"),
            t(".single-work-first-anim-blocks").addClass("is-hidden"),
            t(".color-palette-container").addClass("is-hidden"),
            TweenLite.to(i, 0, {
                y: "0",
                ease: Power4.easeInOut
            }),
            TweenLite.to(n, 0, {
                y: "0",
                ease: Power4.easeInOut
            })
        }
    }
      , v = function() {
        if (Modernizr.mq("(min-width: 1024px)")) {
            var e = t(".experiments-mask-reveal")
              , i = e.find("span:first")
              , n = e.find("span:last");
            inView.offset(230),
            inView(".case-study").on("enter", function(e) {
                t(e).removeClass("is-hidden")
            }),
            inView(".section-text-mask").on("enter", function(e) {
                t(e).removeClass("is-hidden")
            }),
            inView(".single-work-anim-text").on("enter", function(e) {
                t(e).removeClass("is-hidden")
            }),
            inView(".single-work-first-anim-blocks").on("enter", function(e) {
                t(e).removeClass("is-hidden")
            }),
            inView(".color-palette-container").on("enter", function(e) {
                t(e).removeClass("is-hidden")
            }),
            inView(".experiments-mask-reveal").on("enter", function(t) {
                TweenLite.to(i, .6, {
                    y: "-100%",
                    ease: Power4.easeInOut
                }),
                TweenLite.to(n, .6, {
                    y: "-100%",
                    delay: .09,
                    ease: Power4.easeInOut
                })
            }),
            inView(".single-work-intro-title").on("enter", function(e) {
                t(e).removeClass("is-hidden")
            })
        }
    }
      , y = function() {
        m(),
        _(),
        v(),
        R(),
        i(),
        t(window).on("resize", function() {
            Util.debounce(m(), 100)
        })
    };
    return {
        init: y,
        startLoadAnimation: g,
        manageOnBefore: h,
        manageOnStart: c,
        manageOnReady: f,
        manageOnAfter: p,
        animateHeroShapes: d
    }
}(jQuery)
  , Application = function(t) {
    "use strict";
    var e = function() {
        document.documentElement.className = "js",
        t(document).on("ready", function() {
            Util.init(),
            Util.onPageVisibilityChange(),
            Util.addConsoleCopy(),
            Navigation.init(),
            Form.init(),
            Cookie.init(),
            AnimationManager.init(),
            t(".main-hero").length && AnimationManager.animateHeroShapes()
        }),
        t(window).on("load", function() {
            AnimationManager.startLoadAnimation()
        });
        var e = t("#page-wrap").smoothState({
            prefetch: !0,
            cacheLength: 4,
            blacklist: ".no-smoothState",
            scroll: !1,
            onBefore: function(t, e) {
                AnimationManager.manageOnBefore(t, e)
            },
            onStart: {
                duration: 250,
                render: function(t) {
                    AnimationManager.manageOnStart(t, e)
                }
            },
            onProgress: {
                duration: 250,
                render: function(t) {}
            },
            onReady: {
                duration: 0,
                render: function(t, e) {
                    AnimationManager.manageOnReady(t, e)
                }
            },
            onAfter: function(t, e) {
                AnimationManager.manageOnAfter(t, e),
                Util.sendGAPageView(t.smoothState().data("smoothState").href)
            }
        }).data("smoothState")
    };
    return {
        start: e
    }
}(jQuery);
Application.start();



/**-----------------------------------------------------------------------------
 * *Cambio de color al header
 */
const header = document.querySelector('#landing-header')
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.90,      // porcentaje de visibilidad
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const { isIntersecting } = entry
        if (isIntersecting) {
            const color = entry.target.getAttribute('data-header-color')
            header.style.color = color
        }
    })
}, observerOptions)

const sections = document.querySelectorAll(".landing-section")
sections.forEach((section) => observer.observe(section))


/**-----------------------------------------------------------------------------------------
 * * Cambiar el header al abrir un DROPDOWN
 */
const navMenu = document.getElementById("nav-menu");
const lanHeader = document.getElementById("landing-header");

navMenu.addEventListener("mouseenter", () => {
    lanHeader.style.backgroundColor = "white";
    lanHeader.style.color = "black"
});
lanHeader.addEventListener("mouseleave", () => {

    lanHeader.style.backgroundColor = "";
    lanHeader.style.color = "white";
});
