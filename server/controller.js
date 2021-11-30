const shows = require("./db.json")
let globalShowId = 4

module.exports = {
    getAllShows: (req, res) => {
        res.status(200).send(shows)
    },
    addShow: (req, res) => {
        // console.log(req.body)
        let {name, notes} = req.body
        let newShow = {
            id: globalShowId,
            name: name,
            notes: notes
        }
        shows.push(newShow)
        res.status(200).send(shows)
        globalShowId++
    },
    // If I change db.json to start with id=0 instead of id=1, then showIndex = req.params.id ?
    deleteShow: (req, res) => {
        // console.log(req.params)
        let showIndex = shows.findIndex((show) => show.id === Number(req.params.id))
        // console.log(showIndex)
        shows.splice(showIndex, 1)
        res.status(200).send(shows)
        globalShowId--
    }
}