// import querystring from 'querystring'
import fetch from 'node-fetch'

export default class Api {
  constructor({ host = '' } = {}) {
    this.host = host
    this.paths = {
      api: {
        login: `/api/login`,
        password: {
          email: `/api/password/email`,
          reset: `/api/password/reset`
        }
      },
      locations: {
        locations: `/locations`,
        guess: `/locations/guess`,
        cities: `/locations/cities`,
      },
      events: `/events/dates`,
      players: {
        players: `/players`,
        oauth: `/players/oauth`,
        password: `/players/password/reset`,
        email: {
          send: `/players/email/send`,
          confirm: `/players/email/confirm`
        },
        teams: `/players/teams`,
        application: `/players/application`
      },
      game: `/game/`,
      avatar: `/partners/avatar`,
      user: `/users/`
    }
  }

  async request({ path = '', method = 'GET', body = {} } = {}) {
    const response = await fetch(`${this.host}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    })

    const data = response.json()

    return data

  }

  async userAuthorize({ method = 'POST', email = '', password = '' } = {}) {
    return this.request({
      path: this.paths.api.login,
      method,
      body: {
        'email': email,
        'password': password
      }
    })
  }


  async sendPasswordResetLink({ method = 'POST', email = '' } = {}) {
    return this.request({
      path: this.paths.api.password.email,
      method,
      body: {
        'email': email
      }
    })
  }

  async resetUserPassword({ method = 'POST', email = '', token = '', password = '', passwordConfirmation = '' } = {}) {
    return this.request({
      path: this.paths.api.password.reset,
      method,
      body: {
        'email': email,
        'token': token,
        'password': password,
        'password_confirmation': passwordConfirmation
      }
    })
  }

  async getListCitieGroupedByCountry({ method = 'GET' } = {}) {
    return this.request({
      path: this.paths.locations.locations,
      method
    })
  }

  async guessCitiyByIp({ method = 'GET' } = {}) {
    return this.request({
      path: this.paths.locations.guess,
      method
    })
  }

  async getInfoCitiy({
    method = 'GET',
    id
  } = {}) {
    return this.request({
      path: `${this.paths.locations.cities}/${id}`,
      method
    })
  }

  async getEventsDatesCities({
    method = 'GET',
    id } = {}) {
    return this.request({
      path: `${this.paths.events}/${id}`,
      method
    })
  }

  async creatUser({
    method = 'POST',
    name = '',
    email = '',
    phone = '',
    password = '',
    passwordConfirmation = ''
  } = {}) {
    return this.request({
      path: `${this.paths.players.players}`,
      method,
      body: {
        'name': name,
        'email': email,
        'phone': phone,
        'password': password,
        'password_confirmation': passwordConfirmation
      }
    })
  }

  async creatUserSocial({
    method = `POST`,
    source = ``
  } = {}) {
    return this.request({
      path: `${this.paths.players.oauth}/${source}`,
      method
    })
  }

  async getOauthlink({ method = `GET`, source = ``, link = `` } = {}) {
    return this.request({
      path: `${this.paths.players.oauth}/${source}/${link}`,
      method
    })
  }

  async sendVerifyEmail({ method = `GET` } = {}) {
    return this.request({
      path: `${this.paths.players.email.send}`,
      method
    })
  }

  async confirmEmail({ method = `GET`, id } = {}) {
    return this.request({
      path: `${this.paths.players.email.confirm}/${id}`,
      method
    })
  }

  async resetPassword({
    method = `POST`,
    password = ``,
    newPassword = ``,
    newPasswordConfirmation = ``
  } = {}) {
    return this.request({
      path: `${this.paths.players.password.reset}`,
      method,
      body: {
        'password': password,
        'new_password': newPassword,
        'new_passwordd_confirmation': newPasswordConfirmation
      }
    })
  }

  async getTeam({ method = `GET` } = {}) {
    return this.request({
      path: `${this.paths.players.teams}`,
      method
    })
  }

  async creatTeam({
    method = `POST`,
    name = ``,
    cityId = ``,
    playerCount = 0
  } = {}) {
    return this.request({
      path: `${this.paths.players.teams}`,
      method,
      body: {
        "name": name,
        "city_id": cityId,
        "player_count": playerCount,
      }
    })
  }

  async updateTeam({
    method = `PATCH`,
    name = '',
    cityId = '',
    playerCount = 0
  }) {
    return this.request({
      path: `${this.paths.players.teams}/${applicationsId}`,
      method,
      body: {
        "name": name,
        "city_id": cityId,
        "player_count": playerCount,
      }
    })
  }

  async deleteTeam({ method = `DELETE`, applicationsId = `` } = {}) {
    return this.request({
      path: `${this.paths.players.teams}/${applicationsId}`,
      method,
    })
  }

  // Description: Get all applications for current user

  async getUserapplications({ method = 'GET' } = {}) {
    return this.request({
      path: `${this.paths.application}`,
      method
    })
  }

  async createApplication({
    method = `POST`,
    eventDay = ``,
    teamId = 0,
    playerCount = 0,
    comment = ``,
    playFirstTime = false,
    captainName = ``,
    captainEmail = ``,
    captainPhone = ``
  } = {}) {
    return this.request({
      path: `${this.paths.application}`,
      method,
      body: {
        "event_day_id": eventDay,
        "team_id": teamId,
        "player_count": playerCount,
        "comment": comment,
        "play_for_first_time": playFirstTime,
        "captain_name": captainName,
        "captain_email": captainPhone,
        "captain_phone": captainEmail
      }
    })
  }

  async updateApplication({
    method = `PATCH`,
    applicationsId = ``,
    eventDay = ``,
    teamId = 0,
    playerCount = 0,
    comment = ``,
    playFirstTime = false,
    captainName = ``,
    captainEmail = ``,
    captainPhone = ``
  } = {}) {
    return this.request({
      path: `${this.paths.application}/${applicationsId}`,
      method,
      body: {
        "event_day_id": eventDay,
        "team_id": teamId,
        "player_count": playerCount,
        "comment": comment,
        "play_for_first_time": playFirstTime,
        "captain_name": captainName,
        "captain_email": captainPhone,
        "captain_phone": captainEmail
      }
    })
  }

  async deleteApplication({
    method = `DELETE`,
    applicationsId = ``
  } = {}) {
    return this.request({
      path: `${this.paths.application}/${applicationsId}`,
      method
    })
  }

  async changeGameEvent({
    method = `PATCH`,
    name = ``,
    cityId = 0,
    playerCount = 0
  } = {}) {
    return this.request({
      path: `${this.paths.application}/${applicationsId}/change`,
      method,
      body: {
        'name': name,
        'city_id': cityId,
        "player_count": playerCount,
      }
    })
  }

  async getGameReprot({
    method = `GET`,
    guid = ``,
    type = ``
  }) {
    return this.request({
      path: `${this.paths.game}/${guid}/excels/${type}`,
      method
    })
  }

  async updateAvatar({
    method = `POST`,
    path
  }) {
    return this.request({
      path: this.paths.avatar,
      method,
      body: {
        'file': path
      }
    })
  }

  async deleteAvatar({
    method = 'DELETE',
  }) {
    return this.request({
      path: this.paths.avatar,
      method
    })
  }

  async updateUserData({
    method = 'PATCH',
    userId = ``,
    name = ``,
    email = ``,
    phone = ``
  }) {
    return this.request({
      path: `${this.paths.user}/${userId}`,
      method,
      body: {
        'name': name,
        'email': email,
        'phone': phone
      }
    })
  }
}

