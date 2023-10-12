var typed = new Typed(".multitext",{
    strings: [" A Student"," A Web Developer"," A Beginner"," A Coder"," A Geek"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 900,
    loop: true
})

$(window).load(function() {
    $("body").removeClass("preload");
  });