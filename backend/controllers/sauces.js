const Sauces = require("../models/ModelsSauce.js");

exports.allsauces = (req, res, next) => {
  Sauces.find()
    .then((sauces) => {
      res.status(200).json(sauces);
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.idsauces = (req, res, next) => {
  Sauces.findOne({ _id: req.params.id })
    .then((sauces) => {
      res.status(200).json(sauces);
    })
    .catch((error) => res.status(400).json({ error }));
};

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

exports.putidsauces = (req, res, next) => {
  Sauces.updateOne({ _id: req.params.id }, { ...req.body })
    .then((sauces) => {
      res.status(200).json(sauces);
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.deletesauces = (req, res, next) => {
  Sauces.deleteOne({ _id: req.params.id })
    .then((sauces) => {
      res.status(200).json(sauces);
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.sauceslike = (req, res, next) => {
  // ajoute un like
  if (req.body.likes == 1) {
    Sauces.updateOne({ _id: req.params.id }, { ...req.body })
      .then((sauces) => {
        res.status(200).json(sauces);
      })
      .catch((error) => res.status(400).json({ error }));
  }
  //ajoute un dislike
  else if (req.body.dislikes == -1) {
    Sauces.updateOne({ _id: req.params.id }, { ...req.body })
      .then((sauces) => {
        res.status(200).json(sauces);
      })
      .catch((error) => res.status(400).json({ error }));
  }

  //retire un like
  else if (req.body.likes == 0) {
    Sauces.updateOne({ _id: req.params.id }, { ...req.body })
      .then((sauces) => {
        res.status(200).json(sauces);
      })
      .catch((error) => res.status(400).json({ error }));
  }

  //retire un dislike
  else if (req.body.dislikes == 0) {
    Sauces.updateOne({ _id: req.params.id }, { ...req.body })
      .then((sauces) => {
        res.status(200).json(sauces);
      })
      .catch((error) => res.status(400).json({ error }));
  }
};
