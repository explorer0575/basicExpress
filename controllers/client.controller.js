var ClientModel = require('../models/client.model');
var q = require('q');

module.exports = {
    /**
     * This method is to create client
     */
    createClient: function(req, res) {
        var name = req.body.name;
        var client = new ClientModel({
            "name": name
        });
        client.save().then(function(client){
            res.json({"client":client})
        }).catch(function(error){
            res.json({"error":error})
        })
    },
    /**
    this method is to update client
     */
    updateClient: function(req, res) {
    },

    getClients: function(req, res) {
    },
}