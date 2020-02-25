import React from 'react'

const UserInfo = () => (
    <div>
        <img src='https://avatars0.githubusercontent.com/u/50046577?v=4' className="foto-perfil mb-4" />
        <div className="user-info mb-4 ml-4">
            <h1 className="user">
                <a href='https://github.com/cleicastro'>Clei Castro</a>
            </h1>
            <ul className="repos-info">
                <li>Repositórios: 122</li>
                <li>Seguidores: 2</li>
                <li>Seguindo: 5</li>
            </ul>
        </div>
    </div>
)

export default UserInfo