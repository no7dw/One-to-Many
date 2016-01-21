# One-to-Many

a [Sails](http://sailsjs.org) application
One-to-Many sails project, demo ORM join effect with the help o waterline as ORM . With this , you don't need to manual join.
  
    dengwei@dengweis-MacBook-Pro:~/project/github/One-to-Many$ sails console
    
    sails>User.create({phone: "18680493002",is_verify: true,id_card: "918d3d59ab54cc0c8473f35ce",real_name: "邓维",pay_password: "$2a$10$RYhfCGYsJ0",created_from: "ios",real_name_status: 1}).exec(console.log);
    
    //user id: '54cef05579337f164b365050'
    
    sails>      Order.create({
        "uid": "56a08fe5d8aadd27a6f8650c",
        "amount": 35000,
        "products": [
          {
            "id": "55c31e936f227ed922c508aa",
            "num": 35000,
            "product_id": "55c31e936f227ed922c508aa",
            "price": 1
          }
        ],
        "product": {
          "id": "55c31e936f227ed922c508aa",
          "num": 35000,
          "product_id": "55c31e936f227ed922c508aa",
          "price": 1
        },
        "bankcard": "6226961601692104",
        "pType": 1,
        "oType": 1,
        "payment": "llpay",
        "channel": "default",
        "payEnd": 3,
        "status": 3,
        "time": 1446809301922,
        "createdAt": "2015-11-06T11:28:21.923Z",
        "updatedAt": "2015-11-06T11:28:21.923Z",
        "payFailureDes": true,
        owner:"54cef05579337f164b365050"
        
      }).exec(console.log);
    
    
    sails>  Order.create({
        "uid": "56a08fe5d8aadd27a6f8650c",
        "amount": 1000,
        "products": [
          {
            "id": "55c31e936f227ed922c508aa",
            "num": 1000,
            "product_id": "55c31e936f227ed922c508aa",
            "price": 1
          }
        ],
        "product": {
          "id": "55c31e936f227ed922c508aa",
          "num": 1000,
          "product_id": "55c31e936f227ed922c508aa",
          "price": 1
        },
        "bankcard": "6226961601692104",
        "pType": 1,
        "oType": 1,
        "payment": "llpay",
        "channel": "default",
        "payEnd": 3,
        "status": 2,
        "time": 1446809301922,
        "createdAt": "2015-11-06T11:28:21.923Z",
        "updatedAt": "2015-11-06T11:28:21.923Z",
        "payFailureDes": true,
        owner:"54cef05579337f164b365050"
        
      }).exec(console.log);
    
    
    
    User.find({phone:'18680493001'}).populate('orders').exec(function(err,r){console.log(r[0].toJSON())});
    undefined
    sails> { orders: 
       [ { uid: '56a08fe5d8aadd27a6f8650c',
           amount: 35000,
           products: [Object],
           product: [Object],
           bankcard: '6226961601692104',
           pType: 1,
           oType: 1,
           payment: 'llpay',
           channel: 'default',
           payEnd: 3,
           status: 3,
           time: 1446809301922,
           createdAt: '2015-11-06T11:28:21.923Z',
           updatedAt: '2015-11-06T11:28:21.923Z',
           payFailureDes: 'true',
           owner: '54cef05579337f164b365050',
           id: '56a0957b2557b3daa61ab82e' },
         { uid: '56a08fe5d8aadd27a6f8650c',
           amount: 1000,
           products: [Object],
           product: [Object],
           bankcard: '6226961601692104',
           pType: 1,
           oType: 1,
           payment: 'llpay',
           channel: 'default',
           payEnd: 3,
           status: 2,
           time: 1446809301922,
           createdAt: '2015-11-06T11:28:21.923Z',
           updatedAt: '2015-11-06T11:28:21.923Z',
           payFailureDes: 'true',
           owner: '54cef05579337f164b365050',
           id: '56a095aa2557b3daa61ab82f' } ],
      phone: '18680493001',
      is_verify: true,
      createdAt: '2015-02-02T03:34:45.924Z',
      updatedAt: '2015-07-17T10:29:34.274Z',
      id_card: '918d3d59ab54cc0c8473f35ce982e1858ff4d4a72544ea27',
      real_name: '邓维',
      pay_password: '$2a$10$RYhfCGYsJ0pbvF8pDyyOQe4QYHsJBH0.3wltkn5XyXN3WxA1UdPN2',
      created_from: 'ios',
      real_name_status: 1,
      id: '54cef05579337f164b365050' }


