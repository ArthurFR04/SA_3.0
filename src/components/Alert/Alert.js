swal({
    icon: 'success',
    title: 'Login efetuado',
    text: 'Agora que você já se cadastrou com a gente, vamos para o login.',
    backgroundColor: `#000`,
    allowOutsideClick: false,
    // timer: 2500,
    timerProgressBar: true,
})


Swal.fire({
    icon: 'error',
    title: 'Login não efetuado',
    text: 'Para adicionar um produto ao carrinho, você primeiro deve efetuar o login.',
    backdrop: `#183442c4`,
})


Swal.fire({
    icon: 'success',
    title: 'Login efetuado',
    text: 'Agora você já pode aproveitar o site!',
    backdrop: `#183442c4`,
    allowOutsideClick: false,
    timer: 2500,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
        }, 100)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {

        let hist = JSON.parse(localStorage.getItem('histórico'))
        window.location.href = hist
    }
})


Swal.fire({
    icon: 'success',
    title: 'Compra Realizada!',
    backdrop: `#183442c4`,
    allowOutsideClick: false,
    timer: 2500,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
        }, 100)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
        window.location.href="index.html"
    }
})

Swal.fire({
    title: 'Você realmente deseja sair?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#E2781C',
    cancelButtonColor: '#6B8D8D',
    confirmButtonText: 'Sair',
    cancelButtonText: 'Cancelar',

}).then((result) => {

    if (result.isConfirmed) {
        localStorage.removeItem('Login');

        window.location.reload();
    }
})

Swal.fire({
    icon: 'question',
    title: 'Você precisa fazer o login para acessar o carrinho',
    text: 'Antes de a gente ir pro carrinho, precisamos do seu login.',
    backdrop: `#183442c4`,
    allowOutsideClick: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
        }, 100)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
        window.location.href="tela_login.html"
    }
})

Swal.fire ({
    icon: 'error',
    title: 'O carrinho está vazio',
    text: 'Não é possível finalizar a compra.',
    confirmButtonColor: '#6B8D8D',
})