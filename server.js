const express = require ("express");

const fs = require ("fs");

const path = require ("path");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware additions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json",(err,data) => {
        if (err) {console.log(err)}
        const notes = JSON.parse(data)
        console.log(notes)
        res.json(notes)
    })
})
// Add post route here, use unique id
app.post('/api/notes', (req, res) => {
    fs.readFile("./db/db.json",(err,data) => {
        if (err) {console.log(err)}
        const notes = JSON.parse(data)
        console.log(notes)
        console.log(req.body)
    })
})


app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
  );

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
  );


  app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
  );  



app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
  );

