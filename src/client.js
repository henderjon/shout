var _ = require("lodash");
var crypto = require("crypto");

module.exports = Client;

var id = 0;

function Client(sockets, name, config) {
  _.merge(this, {
    chan: -1,
    config: config,
    id: id++,
    name: name,
    networks: [],
    sockets: sockets,
    token: crypto.randomBytes(48)
  });
}

Client.prototype = {
  emit: emit,
  input: input,
  connect: connect,
  open: open,
  quit: quit,
  sort: sort,
  save: save
};

function emit(e, data) {
  if (this.sockets) {
    this.sockets.in(this.id).emit(e, data);
  }
}

function input() {}
function connect(args) {}
function open(id) {}
function quit(network) {}
function sort() {}
function save() {}
