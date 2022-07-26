const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

const items = [
    { id : 0, title : 'Elemento 1', path : 'vid-01.mp4' },
    { id : 1, title : 'Elemento 2', path : 'vid-02.mp4' },
    { id : 2, title : 'Elemento 3', path : 'vid-03.mp4' },
    { id : 3, title : 'Elemento 4', path : 'vid-04.mp4' },
    { id : 4, title : 'Elemento 5', path : 'vid-05.mp4' },
    { id : 5, title : 'Elemento 6', path : 'vid-06.mp4' },
    { id : 6, title : 'Elemento 7', path : 'vid-07.mp4' },
    { id : 7, title : 'Elemento 8', path : 'vid-08.mp4' },
    { id : 8, title : 'Elemento 9', path : 'vid-09.mp4' },
    { id : 9, title : 'Elemento 10', path : 'vid-10.mp4' },
    { id : 10, title : 'Elemento 11', path : 'vid-11.mp4' },
    { id : 11, title : 'Elemento 12', path : 'vid-12.mp4' },
    { id : 12, title : 'Elemento 13', path : 'vid-13.mp4' },
    { id : 13, title : 'Elemento 14', path : 'vid-14.mp4' },
    { id : 14, title : 'Elemento 15', path : 'vid-15.mp4' },
    { id : 15, title : 'Elemento 16', path : 'vid-16.mp4' },
    { id : 16, title : 'Elemento 17', path : 'vid-17.mp4' },
    { id : 17, title : 'Elemento 18', path : 'vid-18.mp4' },
    { id : 18, title : 'Elemento 19', path : 'vid-19.mp4' },
    { id : 19, title : 'Elemento 20', path : 'vid-20.mp4' }
]

app.use(express.json())
app.use(cors())

app.use(express.static(path.resolve('./public')))

app.get('/', (req, res) => {
    res.send('Hola')
})

let range = 5
let index = 0

app.get('/page/:page', (req, res) => {
    const start = req.params.page ?? index
    const portion = items.slice(start * range, start * range + range)

    res.json(portion)
})

app.listen(4000, () => {
    console.log('Server Iniciado')
})