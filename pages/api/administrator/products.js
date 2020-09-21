export default (req, res) => {
  switch (req.method) {
    case "GET":
      {
        res.json({ msg: "GET Route Hit!" });
      }
      break;
    case "POST":
      {
        res.json({ msg: "POST Route Hit!" });
      }
      break;
    case "DELETE":
      {
        res.json({ msg: "DELETE Route Hit!" });
      }
      break;
    default: {
      res.json({ msg: "Invalid Request." });
    }
  }
};
