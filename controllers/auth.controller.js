class AuthController {
  async createSession(req, res) {
    console.log('123')
    try {
      res.json('ok')
    } catch (e) {
      res.status(400)
    }
  }

  async deleteSession(req, res) {

  }

  async findSession(req, res) {

  }
}

export default new AuthController()
