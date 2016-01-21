/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	fp:function (req, res) {
		if(req.query.phone)
			User.find({phone: req.query.phone}).populate('orders').exec(function(err,r){
				res.json(r[0]);
				// console.log(r[0].toJSON())
			});
		else
			res.json("need phone as query parameter")
		// body...
	}
	
};

