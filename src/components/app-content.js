import React from 'react';
import PropTypes from 'prop-types';
import Search from '../components/search';
import UserInfo from '../components/user-info';
import Action from '../components/action';
import Repositorio from '../components/repositorio';

const AppContent = ({ userinfo, repos, starred, handleSearch, getRepos, getFav }) => (
    <div className="m-4">
        <Search handleSearch={handleSearch} />
        {userinfo.photo !== '' && <UserInfo Userinfo={userinfo} />}
        {userinfo.photo !== '' && <Action getRepos={getRepos} getFav={getFav} />}
        {repos !== [] &&
            <Repositorio
                className="repos"
                title="Repositórios: "
                repos={repos}
            />
        }

        {starred !== [] &&
            <Repositorio
                className="starred"
                title="Favoritos: "
                repos={starred}
            />
        }
    </div>
)

AppContent.propTypes = {
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired
}

export default AppContent