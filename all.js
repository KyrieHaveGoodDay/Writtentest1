$('.loadBox , .adminName').fadeOut(0)

let mainAccount = 'admin'
let mainPassword = 'Admin&8181'


$('#check').click((e) => {
    e.preventDefault();
    $('.loadBox').fadeIn(0)
    let account = $('#account').val();
    let password = $('#password').val();
    if (account === mainAccount && password === mainPassword) {
        $('.load-wrapp').fadeOut(500)
        setTimeout(() => {
            $('.loadBox h1').fadeIn(500)
            setTimeout(() => {
                location.href = 'index.html?' + account + ''
            }, 1000)
        }, 700)

    } else {
        $('.loadBox').fadeOut(500)
        console.log('error');
        $('.error').fadeIn(0)
    }
})



function show() {
    //URL
    var url = location.href;
    var temp = url.split("?");
    var vars = temp[1].split("&");
    showName(vars[0])
}


function showName(name) {
    $('#name').text(name)
    $('.loginBtn').fadeOut(0)
    $('.adminName').fadeIn(0)

}