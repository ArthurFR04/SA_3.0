import React from 'react';

import styles from './CommentsStyle.module.css';

import { IoAddCircle } from "react-icons/io5";

import OtherProfileScreen from '../../pages/Profile/OtherProfileScreen'


let PostID

let AllComentarios = []

let AllUsers = []



let UsersFetch = () => {

    fetch(`https://sa-3-back.herokuapp.com/api/usuario`, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((json) => {
            AllUsers = json.data

            filtrar()
        })
}


let CommentsFetch = () => {

    fetch('https://sa-3-back.herokuapp.com/api/comentario', {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((json) => {
            AllComentarios = json.data

            UsersFetch()
        })
}





let filtrar = () => {

    document.getElementById('frontComments').innerHTML = ''

    for (let i = 0; i < AllComentarios.length; i++) {

        if (AllComentarios[i].postagenId === PostID) {    // Só renderiza os comentários que possuem o idPostagem correspondende ao da página

            for (let j = 0; j < AllUsers.length; j++) {

                if (AllUsers[j].id === AllComentarios[i].usuarioId) {    // Só renderiza os comentários que possuem o idPostagem correspondende ao da página

                    imprimirComments(i, j)
                }
            }

        }
    }
}





let imprimirComments = (comenPos, userPos) => {

    let commentDate = `
        ${AllComentarios[comenPos].dt_comentario.slice(8,10)}   /
        ${AllComentarios[comenPos].dt_comentario.slice(5,7)}   /
        ${AllComentarios[comenPos].dt_comentario.slice(0,4)}
    `

    document.getElementById('frontComments').innerHTML += `
                    <div id='${AllComentarios[comenPos].id}' className={styles.individual} style="
                            position: relative;
                            box-sizing:border-box;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            width: 96%;
                            min-height: 150px;
                            margin-bottom: 3%;
                            border-radius: 20px;
                            box-shadow: 2px 5px 8px #a5a5a5;
                            background-color: rgb(234, 234, 234);
                    ">
                        <div className={styles.userInfos} style="
                                box-sizing: border-box;
                                position: relative;
                                display: flex;
                                flex-direction: row;
                                justify-content: center;
                                align-items: center;
                                width: 100%;
                                height: 50%;
                                margin-top: 10px;
                        ">
                                <div className={styles.fotoPerfil} style="
                                        box-sizing:border-box;
                                        width: 10%;
                                        height: auto;
                                        display: none;
                                ">
                                    Foto
                                </div>
                            <div className={styles.headerComentario} style="
                                    box-sizing:border-box;
                                    width: 80%;
                                    height: 100%;
                            ">
                                <h3 
                                    className={styles.nomes} 
                                    style="
                                        box-sizing: border-box;
                                        width: 100%;
                                        padding-right: 4%;
                                        margin-top: 10px;
                                        margin-bottom: 0;
                                    "
                                    onClick={<OtherProfileScreen id="${AllUsers[userPos].id}"}
                                />
                                    ${AllUsers[userPos].nome} ${AllUsers[userPos].sobrenome}
                                </h3>
                                <div className={styles.infoPostComment} style="
                                        display: flex;
                                        flex-direction: row;
                                        justify-content: space-between;
                                ">

                                    <h4 className={styles.email} style="
                                            margin: 0;
                                            margin-top: 10px;
                                            color: gray
                                    ">
                                        ${AllUsers[userPos].email}
                                    </h4>
                                    <h4 className={styles.data} style="
                                            margin: 0;
                                            margin-top: 10px;
                                            color: gray
                                    ">
                                        ${commentDate}
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className={styles.texto} style="
                            width: 88%;
                            height: 50%;
                            margin: 2%
                        ">
                            ${AllComentarios[comenPos].conteudo}
                        </div>

                    </div>
                `
}

let showNewComment = () => {
    document.getElementById('NewComment').style.display = 'flex'
}

let comentar = () => {
    console.log('começando a comentar');
    let Login = JSON.parse(localStorage.getItem('Login'))

    let today = new Date(),
    Hoje = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

    let conteudo = document.getElementById('TextAreaNewComment').value

    fetch('https://sa-3-back.herokuapp.com/api/comentario', {
        method: 'POST',
        body: JSON.stringify({
            usuarioId: Login.id,
            dt_comentario: Hoje,
            conteudo: conteudo,
            postagenId: PostID
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .catch((error) => {
            console.log(error)
        })
        .then((response) => response.json())
        .then((json) => {

            let comJson = json
            document.getElementById('TextAreaNewComment').value = ''
            CommentsFetch()
            window.location.href=`#${(comJson.body.comentario.id)-1}`
        })

    
}

export const Comments = (props) => {

    PostID = props.postID

    CommentsFetch()

    return (
        <div className={styles.comentarios}>
            <div className={styles.topo}>
                <label>2 COMENTÁRIOS</label>
                <IoAddCircle
                    className={styles.iconAdd}
                    onClick={showNewComment}
                />

            </div>
            <div id='NewComment' className={styles.newComment}>
                <textarea id='TextAreaNewComment' className={styles.conteudo} placeholder='Escreva aqui o seu comentário.'>

                </textarea>
                <button className={styles.comentarBtn} onClick={comentar}>
                    Comentar
                </button>
            </div>
            <div className={styles.Allcomentarios} id='frontComments'>

            </div>
        </div>
    )
}
