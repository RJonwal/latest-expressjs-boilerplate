const service = require("../service/user.service");

// Register
exports.register = async (req, res) => {
  try {
    const user = await service.register(req.body);

    res.json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const data = await service.login(req.body);

    res.json({
      success: true,
      user: data.user,
      token: data.token,
    });

    
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};