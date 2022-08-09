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
  switch (req.body.like) {
    //cancel = 0
    //check if the user had liked or disliked the sauce
    //uptade the sauce, send message/error
    case 0:
      Sauces.findOne({ _id: req.params.id })
        .then((sauce) => {
          if (sauce.usersLiked.find((user) => user === req.body.userId)) {
            Sauces.updateOne(
              { _id: req.params.id },
              {
                $inc: { likes: -1 },
                $pull: { usersLiked: req.body.userId },
                _id: req.params.id,
              }
            )
              .then(() => {
                res
                  .status(201)
                  .json({ message: "Ton avis a été pris en compte!" });
              })
              .catch((error) => {
                res.status(400).json({ error: error });
              });
          }
          if (sauce.usersDisliked.find((user) => user === req.body.userId)) {
            Sauces.updateOne(
              { _id: req.params.id },
              {
                $inc: { dislikes: -1 },
                $pull: { usersDisliked: req.body.userId },
                _id: req.params.id,
              }
            )
              .then(() => {
                res.status(201).json({ message: "ok..." });
              })
              .catch((error) => {
                res.status(400).json({ error: error });
              });
          }
        })
        .catch((error) => {
          res.status(404).json({ error: error });
        });
      break;
    //likes = 1
    //uptade the sauce, send message/error
    case 1:
      Sauces.updateOne(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
          $push: { usersLiked: req.body.userId },
          _id: req.params.id,
        }
      )
        .then(() => {
          res.status(201).json({ message: "Like added!" });
        })
        .catch((error) => {
          res.status(400).json({ error: error });
        });
      break;
    //likes = -1
    //uptade the sauce, send message/error
    case -1:
      Sauces.updateOne(
        { _id: req.params.id },
        {
          $inc: { dislikes: 1 },
          $push: { usersDisliked: req.body.userId },
          _id: req.params.id,
        }
      )
        .then(() => {
          res.status(201).json({ message: "Ok... it's your right..." });
        })
        .catch((error) => {
          res.status(400).json({ error: error });
        });
      break;
    default:
      console.error("Bad request");
  }
};
