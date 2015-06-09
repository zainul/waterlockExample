/**
 * ArticleController
 *
 * @description :: Server-side logic for managing articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  restricted: function(req, res) {
    return res.ok("this is restricted controller, if you find this you are authenticated");
  },
  open: function(req, res){
    return res.ok("Its open for public");
  },
  jwt: function(req, res){
    return res.ok("Yeah you are have json web token right? ");
  }
};
