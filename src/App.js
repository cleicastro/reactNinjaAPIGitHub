import React, { Component } from 'react';
import './include/bootstrap';
import AppContent from './components/app-content';
import ajax from '@fdaciuk/ajax';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: {
        username: '',
        photo: '',
        login: '',
        repos: '',
        followers: '',
        following: ''
      },
      repos: [],
      starred: []
    }
  }

  getGitHubApiUrlr(username, tipo) {
    const internalUser = username ? `/${username}` : '';
    const internalTipo = tipo ? `/${tipo}` : ''
    return `http://api.github.com/users${internalUser}${internalTipo}`
  }

  handleSearch(e) {
    const keyCode = e.which || e.keyCode
    const value = e.target.value;
    this.setState({ usuario: value });
    if (keyCode === 13) {
      ajax().get(this.getGitHubApiUrlr(value))
        .then((result) => {
          this.setState({
            userinfo: {
              username: (result.name !== null) ? result.name : result.login,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
          });
          this.setState({ repos: [] })
          this.setState({ starred: [] })
        })
        .catch((e, x) => {
          x.status === 404 && alert("Usuário não encontrado")
        })
    }
  }

  getRepos(tipo) {
    const user = this.state.userinfo.login
    return (e) => {
      ajax().get(this.getGitHubApiUrlr(user, tipo))
        .then((result) => {
          this.setState({
            [tipo]: result.map((repo) => ({
              name: repo.name,
              link: repo.html_url
            }))
          });
        });
    }
  }

  render() {
    return (
      <div className="App">
        <AppContent
          userinfo={this.state.userinfo}
          repos={this.state.repos}
          starred={this.state.starred}
          handleSearch={(e) => this.handleSearch(e)}
          getRepos={this.getRepos('repos')}
          getFav={this.getRepos('starred')} />
      </div>
    )
  }
}

export default App;
