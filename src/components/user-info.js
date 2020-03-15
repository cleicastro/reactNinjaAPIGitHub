import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ Userinfo }) => (
    <div>
        <img src={Userinfo.photo} className="foto-perfil mb-4 col-4" />
        <div className="user-info mb-4 ml-4">
            <h1 className="user">
                <a href={`https://github.com/${Userinfo.login}`}>{Userinfo.username}</a>
            </h1>
            <ul className="repos-info">
                <li>Repositórios: {Userinfo.repos}</li>
                <li>Seguidores: {Userinfo.followers}</li>
                <li>Seguindo: {Userinfo.following}</li>
            </ul>
        </div>
    </div>
)

UserInfo.propType = {
    Userinfo: PropTypes.shape({
        photo: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        repos: PropTypes.number.isRequired,
        folowers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired,
    })
}
export default UserInfo