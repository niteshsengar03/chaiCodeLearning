const express = require('express');

function block_1_basicServer() {
    return new Promise((resolve) => {
        const app = express();
        app.use(express.json());

        // here a handler is registered at route /menu  
        app.get('/menu', (_, res) => {
            res.json({
                items: [
                    'thali',
                    'biryani'
                ]
            });
        })

        //query params
        //nitesh.com/?q=10&limit=19
        app.get('/search', (req, res) => {
            const { q, limit } = req.query;
            res.json({
                query: q,
                limit: limit || "10"
            });
        })
        // routes parameter
        app.get('/menu/:id', (req, res) => {
            const { id } = req.params;
            res.json({
                item: id,
                price: 149
            });
        })

        app.post('/order', (req, res) => {
            const order = req.body;
            res.status(201).json({
                status: 'created',
                order
            });
        })

        // wirting 0 means asssinging your os to
        // to give you a free port 
        const server = app.listen(0, async () => {
            const port = server.address().port;
            const base = `http://127.0.0.1:${port}`;

            try {
                const menuRes = await fetch(`${base}/menu`);
                const menuData = await menuRes.json();

                console.log("GET /menu", JSON.stringify(menuData));
                console.log("+++++++++++++++++++++++++++++++++++++++")


                const serachRes = await fetch(`${base}/search?q=10&limit=19`);
                const serachData = await serachRes.json();

                console.log("GET /serach", JSON.stringify(serachData));
                console.log("+++++++++++++++++++++++++++++++++++++++++");


                const menuItemRes = await fetch(`${base}/menu/42`);
                const menuItemData = await menuItemRes.json();

                console.log("get /menu", JSON.stringify(menuItemData));
                console.log("+++++++++++++++++++++++++++++++++++++++++");


                const orderRes = await fetch(`${base}/order`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': "application/json",
                    },
                    body: JSON.stringify({
                        dish: 'biryani',
                        quantity: 2
                    })
                })
                const orderData = await orderRes.json();

                console.log('POST /menu', orderData);
                console.log("++++++++++++++++++++++++++++++++++++++++++")

            } catch (err) {
                console.log(err);
            }

            server.close(() => {
                console.log("Block1 resolved");
                resolve();

            })

        })
    })
}

async function main() {
    await block_1_basicServer();

    // TODO 
    //  what does it does.
    process.exit(0)
}

main();