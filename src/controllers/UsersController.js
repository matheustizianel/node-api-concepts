export class UsersController {
  create(req, res) {
    const { name } = req.body;

    res.json({ name });
  }
}
