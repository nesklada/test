export default function wow() {
    var wow = new WOW(
        {
            boxClass: 'js_animate',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
        }
    );

    wow.init();
}