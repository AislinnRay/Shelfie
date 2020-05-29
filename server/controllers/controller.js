module.exports = {
    //read
        getProduct: (req, res) => {
            const db = req.app.get('db')
            const { product_id } = req.params
            db.get_product(product_id)
            .then((results) => res.status(200).send(results[0]))
            .catch((err) => res.status(500).send(err))
        },
    //read
        getProducts: (req, res) => {
            const db = req.app.get("db")
            db.get_products()
            .then((results) => res.status(200).send(results))
            .catch((err) => res.status(500).send(err))
            
        },
    //creat/add
        // postProduct: (req, res) => {},
    //update/edit
        // putProduct: (req, res) => {},
    //delete
        // deleteProduct: (req, res) => {}
    }


