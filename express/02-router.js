const express = require("express");
function block() {
    return new Promise((resolve) => {
        const app = express;
        app.use(express.json());

        const routes = {
            1: {
                id: 1,
                name: "Rajdhani",
                direction: "East",
            },
            2: {
                id: 2,
                name: "Shatabdi",
                direction: "West",
            },
            3: {
                id: 3,
                name: "LocalExpress",
                direction: "North",
            }
        }

        let nextId = 4;

        // list all trains
        app.get('/routes', (_, res) => {

            // It does not flatten nested objects. It only returns the top-level values.
            res.json(Object.values(routes));
        })

        // single route by id
        app.get("/routes/:id", (req, res) => {
            const { id } = req.params;
            const route = routes[id];     // dynamic object access []

            if (!route) return res.status(404).json({ error: "No train no this route" });
            res.status(202).json(route);
        })

        app.post("/routes", (req, res) => {
            // put nextId in id then increament the acutal value of nextId
            const newRoute = {
                id: nextId++, ...req.body
            }
            routes[newRoute.id] = newRoute;
            res.status(201).json(newRoute);
        })

        app.put("/routes/:id", (req, res) => {
            const updateData = req.body;
            const { id } = req.params;
            if (!routes[id]) return res.status(404).json({ error: "id is not there" });
            routes[id] = { id: Number(id), ...req.body };
        })


        app.patch("/routes/:id", (req, res) => {
            const updateData = req.body;
            const { id } = req.params;
            if (!routes[id]) return res.status(404).json({ error: "id is not there" });
            // routes[id] = { id: Number(id), ...req.body };
            // TODO Complete this route
        })

        app.delete("/routes/:id", (req, res) => {
            const { id } = req.params;
            if (!routes[id]) return res.status(404).json({ error: "id is not there" });
            delete routes[id];
            res.status(204).end();
        })

        const server = app.listen(0, async () => {
            const port = server.address().port;
            const base = `http://121.0.0.1:${port}`;

            try {
                // TODO complete the fetch code 

            } catch (err) {
                console.log(err);
            }

        })


        // SOME IMPORTANT EXTRA ROUTES
        // /files/kuchbhi
        // /files/style/REadme.md
        app.get('/files/*filepath', (req, res) => {
            const filepath = req.params.filepath;
            res.json({ filepath, type: "wildcard" });
        })

        //sundar syntax
        app
            .route("/schdule")
            .get((req,res)=>{})
            .post((req,res)=>{});

        server.close(() => {
            console.log("close server");
            resolve();
        })
    })
}
function main() {
    block();
    process.exit(0);
}

main();