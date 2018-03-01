particlesJS.load('particles-js', 'assets/js/particles/particles.json');

const brand = document.getElementById("img-logo");

const setPaddingBody = function() {
    /*
    const body = document.querySelector("#img-logo");
    const particles = document.querySelector("#particles");
    const footer = document.querySelector(".page__footer");
    const top = document.querySelector(".masthead");
    const height = window.innerHeight - footer.clientHeight - top.clientHeight;
    body.style.height = `${height}px`
    particles.style.height = body.style.height;
    */
}

window.addEventListener("resize", setPaddingBody);
//window.addEventListener("load", setPaddingBody);

window.addEventListener("scroll", function() {

})

setPaddingBody()