module.exports = {
    //read
        getProduct: (req, res) => {
            const db = req.app.get('db')
            const { product_id } = req.params
            db.get_product(product_id)
            .then((results) => res.status(200).send(results[1]))
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
        postProduct: (req, res) => {
            const db = req.app.get("db")
            const { name, price, image} = req.body
            db.post_product(name, price, image)
            .then((product) => res.status(200).send(product))
            .catch((err) => res.status(500).send(err))
        },
    //update/edit
        putProduct: (req, res) => {
            const db = req.app.get("db")
            const { product_id } = req.params
            const { name, price, image } = req.body
            db.put_product(product_id, name, price, image)
            .then(() => res.sendStatus(200))
            .catch((err) => res.status(500).send(err))
        },
    //delete
        deleteProduct: (req, res) => {
            const db = req.app.get("db")
            const { product_id } = req.params
            db.delete_product(product_id)
            .then(() => res.sendStatus(200))
            .catch((err) => res.status(500).send(err))
        }
    }


