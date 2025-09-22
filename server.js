const express = require('express'); //Express modul importálása
const app = express(); //Webszerver létrehozása
//const port = 3000; //Port beállítása

app.use(express.json());

const courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'}
]

app.get('/api/courses', (req, res) => {
    res.json(courses);
    console.log(courses); //
})

app.get('/hello', (req, res) => {
    res.send('Üdvözöl a node.js szerver');
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('A megadott azonosítóval nem található kurzus');
    res.json(course);
    console.log(course);
    console.log(req.params.id);
});

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('A megadott azonosítóval nem található kurzus');
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.json({message: 'Kurzus törölve', data: req.body});
});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('A megadott azonosítóval nem található kurzus');
    course.name = req.body.name;
    res.json({message: 'Sikeres módosítás', data: req.body});
});

app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.json(course);
});

const port = process.env.PORT || 3000; //Port beállítása környezeti változóból vagy alapértelmezett értékből

app.listen(port, () => console.log(`A webszerver figyel a ${port} számú porton!`)); //Szerver indítása és üzenet kiírása a konzolra

