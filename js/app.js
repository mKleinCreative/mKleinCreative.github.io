document.addEventListener('mousemove', function (e) {
    let w = getComputedStyle(document.documentElement).width.slice(0, -2),
        h = getComputedStyle(document.documentElement).height.slice(0, -2),
        rx = (h / 2 - e.pageY) / 50,
        ry = (w / 2 - e.pageX) / 100;

    main.style.transform = 'rotateX(' + rx + 'deg) rotateY(' + -ry + 'deg)';
    mainImg.style.transform = 'translate3d(' + ry * 3 + 'px, ' + rx * 3 + 'px, 0)';
});
