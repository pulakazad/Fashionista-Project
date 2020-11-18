

const Company = require('../models/Company.js');


exports.findAll = (req, res) => {
    Company.find()
        .then(company => {
            res.send(company);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.findById = (req, res) => {
    // Company.findById(req.params.id, (err, company) => {
    //     if (err) throw err;
    //     res.json(company);
    // })
    var idInfo = req.params.id;
    console.log("Param info: " + idInfo);
    Company.find({_id: idInfo}, (err, data) => {
        console.log(data);
        if (err) throw err;
        res.json(data);
    })

};

exports.addCompany = (req, res) => {
    let company = new Company({
        name: req.body.name
    });

    company.save((err, result) => {
        if (err) {
            res.json({"msg": "There was an error"})
        } else {
            res.json({"msg": "Company was saved"})
        }
    })
    // Company.create(req.body, (err, data) => {
    //     if (err) { throw err; }
    //     res.send(data);
    // })
};

exports.removeById = (req, res) => {
    Company.findByIdAndRemove(req.params.id, (err, company) => {
        if (err) throw err;
        res.send(company);
    })

    // var deleteId = req.params.id;
    // Company.deleteOne({_id: deleteId}, (err,result) => {
    //     if (err) throw err;

    //     if (result.deletedCount> 0) {
    //         res.json({"msg": "Record Deleted Successfully"})
    //     } else {
    //         res.json({"msg": "Record not present"});
    //     }
    // })
}

exports.updateById = (req, res) => {
    Company.findByIdAndUpdate(req.params.id, req.body, (err, company) => {
        if (err) throw err;
        res.send(company);
    })
}
