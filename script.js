flag = true;
$(document).ready(function () {
    $('.nav-bar').click(function () {
        if (flag) {
            $('.icon-change').removeClass('fa-bars')
            $('.icon-change').addClass('fa-window-close')
            $('.drop-down').css({ 'display': 'flex' })
            flag = false;
        } else {
            $('.icon-change').removeClass('fa-window-close')
            $('.icon-change').addClass('fa-bars')
            $('.drop-down').css({ 'display': 'none' })
            flag = true;
        }
    })
    var px_10000 = window.matchMedia(`(max-width:1000px)`)
    if (px_10000.matches) {
        $(`.dropdown-icons`).detach()
    }
})

