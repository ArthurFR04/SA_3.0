import React from 'react';

import styles from './CommentsStyle.module.css';

import { IoAddCircle } from "react-icons/io5";



let AllComentarios

let PostID

let ArrayComentarios = []

let AllUsers = new Array
let Fetch = () => {

    fetch('https://sa-3-back.herokuapp.com/api/comentario', {

        method: 'GET'
    })
        .then((response) => response.json())
        .then((json) => {

            AllComentarios = json.data

            filtrar()
        })
}

let searchUser = (UserID) => {
    console.log(UserID);
    fetch(`https://sa-3-back.herokuapp.com/api/usuario/${UserID}}`, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((json) => {

            AllUsers = json.data
        })
}

let filtrar = () => {


    for (let i = 0; i < AllComentarios.length; i++) {

        if (AllComentarios[i].postagenId === PostID) {

            ArrayComentarios.push(AllComentarios[i])
            if ( AllComentarios[i].usuarioId == AllUsers[i].id) {

                // searchUser()
                console.log('dfsfsdesfsdf');
            }

            // console.log(AllComentarios[i]);
            // console.log(AllComentarios[i].usuarioId);
        }
    }

    imprimirComments()
}





let imprimirComments = () => {

    if (ArrayComentarios.length > 0) {

        for (let i = 0; i < ArrayComentarios.length; i++) {

            if ( 2+2
                // ArrayComentarios[i].id == Users[i].id
                ) {

                document.getElementById('frontComments').innerHTML += `
                    <div className={styles.individual} style="
                            position: relative;
                            box-sizing:border-box;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            width: 98%;
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
                                <h3 className={styles.nomes} style="
                                        box-sizing: border-box;
                                        width: 100%;
                                        padding-right: 4%;
                                        margin-top: 10px;
                                        margin-bottom: 0;
                                ">
                                    // ${'User.nome'} ${'User.sobrenome'}
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
                                        arthur@eltec.com
                                    </h4>
                                    <h4 className={styles.data} style="
                                            margin: 0;
                                            margin-top: 10px;
                                            color: gray
                                    ">
                                        12/22/2022
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className={styles.texto} style="
                            width: 88%;
                            height: 50%;
                            margin: 2%
                        ">
                            aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaa
                        </div>

                    </div>
                `
            }
            else {
                console.log(ArrayComentarios[0].id);
            }
        }
    }
    else {
        document.getElementById('frontComments').innerHTML += `Não tem comentário`
    }
}

export const Comments = (props) => {

    PostID = props.postID

    Fetch()

    return (
        <div className={styles.comentarios} id='frontComments'>
            <div className={styles.topo}>
                <label>2 COMENTÁRIOS</label>
                <IoAddCircle className={styles.iconAdd} />
            </div>
        </div>
    )
}
