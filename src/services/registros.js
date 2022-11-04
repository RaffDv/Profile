class ResgisterService {
  constructor(RegisterModel) {
    this.user = RegisterModel;
  }

  async get() {
    try {
      const users = await this.user.findAll();
      return users;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  async post(userDTO) {
    const user = await this.user.findOne({
      where: {
        name: userDTO.name,
      },
    });
    if (user != null) {
      throw new Error(
        "este Nome de usuário já foi cadastrado, informe outro nome "
      );
    }
    try {
      await this.user.create(userDTO);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
}

module.exports = ResgisterService;
