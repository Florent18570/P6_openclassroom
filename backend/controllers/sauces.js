const Sauces = require("../models/ModelsSauce.js");

exports.allsauces = (req, res, next) => {
  Sauces.find()
    .then((sauces) => {
      res.status(200).json(sauces);
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.idsauces = (req, res, next) => {};

exports.postsauces = (req, res, next) => {
  const sauceObject = JSON.parse(req.body.sauce);
  delete sauceObject._id;

  const sauces = new Sauces({
    ...sauceObject,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  sauces
    .save()
    .then(() => res.status(201).json({ message: "sauce enregistrée" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.putidsauces = (req, res, next) => {};

exports.deletesauces = (req, res, next) => {};

exports.sauceslike = (req, res, next) => {};
