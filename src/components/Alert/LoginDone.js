import swal from 'sweetalert';


let LoginDone = () => {

    swal({
        title: "Login não efetuado",
        text: "Para acessar esta página você deve primeiro efetuar o login",
        icon: "warning",
        buttons: ["Cancelar", "Ir para o login"],
    })
        .then((goLogin) => {
            if (goLogin) {

                window.location.href = 'Login'

            } else {
                let Historic = JSON.parse(localStorage.getItem('Historic'))
                window.location.href = Historic.old === "" ? '/' : Historic.old
            }
        });

}

export default LoginDone