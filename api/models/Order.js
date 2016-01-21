/**
* Order.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    amount : { type: 'float' },
    oType : { type: 'integer' },
    pType : { type : 'integer'},
    bankcard: { type: 'string' } ,
    product : { type : 'object'},
    status : { type : 'integer' },
    time: { type : 'integer'},
    uid: { type : 'string' },
    bank: { type : 'string' },
    fixedTime: { type : 'integer' },
    approval_status: { type: 'integer'},
    OpRecord: { type: 'array'},
    withdraw_channel:{type:'string'},
    //支付失败原因
    payFailureDes:{type:'string'},
    owner:{
            model:'user'
        }
  }
};

