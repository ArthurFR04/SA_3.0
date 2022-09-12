
import swal from 'sweetalert';

// export let PostID = (id) => {

//     localStorage.setItem('PostId', JSON.stringify(id))

//     window.location.href = '/Post'
// }



export let PostSearch = (id) => {

    fetch(`https://sa-3-back.herokuapp.com/api/postagem/${id}`, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((json) => {
            // console.log(json);
            if (json.data === 'Postagem não encontrada') {

                swal({
                    title: 'Postagem não encontrada',
                    text: 'Infelizmente não conseguimos localizar esta postagem',
                    icon: 'warning',
                })
            }
            else {
                localStorage.setItem('PostInfos', JSON.stringify(json.data))
                window.location.href = '/Post'
            }
        })
}