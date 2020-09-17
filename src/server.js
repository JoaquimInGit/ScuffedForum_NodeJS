require('./configs/mongodb').connectDB()
    .then(() => {
        console.log('Connected successfully to database server')

        const express = require("express");
        const bodyParser = require("body-parser");
        const cors = require("cors");

        const app = express();

        //Queremos parsing de dados em formato json
        app.use(bodyParser.json());
        app.use(cors());

        app.use("/post", require("./routes/post-route"));
        app.use("/category", require("./routes/category-route"))
        app.use("/user", require("./routes/user-route"));

        const port = process.env.PORT || 3000;

        app.listen(port, () => {
            console.log(`\x1b[32m(PLAIN) Server listening on port ${port}\x1b[0m.`);
        });

    })
    .catch(err => {
        console.error('Unable to connect to databse server :', err.message);
    });