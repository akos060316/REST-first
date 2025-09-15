const express = require('express'); //Express modul importálása
const app = express(); //Webszerver létrehozása
const port = 3000; //Port beállítása

app.listen(port, () => console.log(`A webszerver figyel a ${port} számú porton!`)); //Szerver indítása és üzenet kiírása a konzolra
