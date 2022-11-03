class ResgisterService {
  constructor(RegisterModel) {
    this.user = RegisterModel;
  }

  async get() {
    try {
      const users = await this.user.findAll();
    } catch (error) {
      console.error(error.message);
      throw error;
    }
    return users;
  }

  async post(userDTO) {
    try {
      await this.user.create(userDTO);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
}

module.exports = ResgisterService;
