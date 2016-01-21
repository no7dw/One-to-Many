/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    username : { type: 'string' },

    password : { type: 'string' },

    real_name : { type: 'string' },

    encrypted_password: {
      type: 'string'
    },

    pay_password : { type: 'string' },

    id_card : { type: 'string' },

    is_verify : { type : 'boolean' } ,  //身份是否认证过

    email : { type: 'string' },

    phone : {
      type: 'string'
    },

    created_from : { type: 'string' },
    real_name_status : { type: 'integer',defaultsTo:2},
    orders:{
            collection: 'order',
            via: 'owner'
        },


    toJSON: function() {
      var obj = this.toObject();
      delete obj.encrypted_password;
      return obj;
    }
  }
};

