var applicationModel = require('../models/application');

module.exports.getAll = function(req, res) {
  res.json(applicationModel.getAll());
};

module.exports.get = function(req, res) {
  var postItItem = applicationModel.get(req.params.id);
  if (postItItem) {
    res.json(applicationModel.get(req.params.id));
  } else {
    res.status(404);
    res.send();
  }
}

module.exports.remove = function(req, res) {
  applicationModel.remove(req.params.id);
  res.status(200);
  res.send();
};

module.exports.update = function(req, res) {
  var postItItem = req.body;
  var id = req.params.id;
  if (applicationModel.get(id)) {
    applicationModel.remove(id);
    applicationModel.add(id, postItItem);
    res.status(200);
    res.send();
  } else {
    applicationModel.add(id, postItItem);
    res.status(201);
    res.setHeader('Location', '/application/' + id);
    res.json({
      id: id
    });
    res.send();
  }
};

module.exports.add = function(req, res) {
  var newTodo = req.body;
  var id = applicationModel.add(newTodo);
  res.setHeader('Location', '/application/' + id);
  res.status(201);
  res.json({
    id: id
  });
};
