import nc from "next-connect";
import { all } from "@/middleware/index";
import passport from "middleware/passport";
import { extractUser } from "@/lib/api-helpers";

const handler = nc();

handler.use(all);

handler.post(passport.authenticate("local"), (req, res) => {
  res.json({ user: extractUser(req.user) });
});

handler.delete((req, res) => {
  req.logOut();
  res.status(204).end();
});

export default handler;
