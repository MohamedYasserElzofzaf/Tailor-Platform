const  mongoose  = require('mongoose');
const userModel = require('../user/user.model');
const orderModel = require('./order.model');



const create_order = (req , res , next )=>{
    const order = new orderModel({
        // _id: mongoose.Types.ObjectId(),
        customerID: req.body.customerID,
        tailorID: req.body.tailorID,
        designs: req.body.designs,
        sizes: req.body.sizes, 
    });
    order.save().then(result =>{
        console.log(result);
        res.status(201).json();
    }).catch(err=>{
        console.log(err);
        res.status(500).json({message: err.toString()})
    });
};


const view_order = (req , res , next )=>{
    // id ? tailor :cutomer
    // get order by customer id find({customerID:customer_id})
    // get order by tailor id find({tailorID:tailor_id})
    // get order by id findById
    orderModel.find()
              .then(docs =>{
                         res.status(200).json(docs);
                            })
                .catch(err =>{
                        res.status(500).json({
                            error: err
                        })
                });
};
const view_orderByTailor = (req , res , next )=>{
    orderModel.find({tailorID:tailor_id})
              .then(docs =>{
                         res.status(200).json(docs);
                            })
                .catch(err =>{
                        res.status(500).json({
                            error: err
                        })
                });
};
const view_orderByCustomer = (req , res , next )=>{
    orderModel.find({customerID:customer_id})
              .then(docs =>{
                         res.status(200).json(docs);
                            })
                .catch(err =>{
                        res.status(500).json({
                            error: err
                        })
                });
};
const view_orderByOrder = (req , res , next )=>{
    orderModel.findById({_id})
              .then(docs =>{
                         res.status(200).json(docs);
                            })
                .catch(err =>{
                        res.status(500).json({
                            error: err
                        })
                });
};

module.exports={
    create_order,
    view_order,
    view_orderByTailor,
    view_orderByCustomer,
    view_orderByOrder,
}