const Product = require('../models/Product');


exports.findAll = (req, res) => {
    Product.find()
        .then(product => {
            res.send(product);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.findById = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) throw err;
        res.send(product);
    })
};

exports.addProduct = (req, res) => {
    let product = new Product({
        pname: req.body.pname,
        price: req.body.price,
        imageURL: req.body.imageURL,
        company: req.body.companyID
    });

    product.save((err, result) => {
        if (err) {
            res.json({"msg": "There was an error"})
        } else {
            console.log('WORKED')
            res.json({"msg": "Product was saved"})
        }
    })
   
};

exports.removeById = (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, product) => {
        if (err) throw err;
        res.send(product);
    })

}

exports.updateById = (req, res) => {

        let newProduct = new Product({
            pname: req.body.name,
            price: req.body.price,
            imageURL: req.body.imageURL,
            company: req.body.companyID
        });
    

    // Product.updateOne({_id: req.params.id}, {$set: {pname: newProduct.pname, price: newProduct.price, imageURL: newProduct.imageURL, company: newProduct.companyID}}, (err, result) => {
    //     if (err) throw err;
    //     console.log(result);

    //     if(result.nModified>0) {
    //         res.json({"msg": "Record updated successfully"})
    //     } else {
    //         res.json({"msg": "Record didn't update successfully"})
    //     }
    // })

    Product.findByIdAndUpdate(req.params.id, req.body, (err, product) => {
        if (err) throw err;
        res.send(product);
    })
}
