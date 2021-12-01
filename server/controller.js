const shows = require("./db.json")
let globalShowId = 9

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
        // globalShowId-- 
        /* Although this was used in given code and seemed needed to prevent duplicate IDs, it was actually resulting in duplicate IDs because there is nothing that is reducing the ID of the following items by 1. So if I delete an item and then add an item, it will have the same ID as the last item. If ID reduction was done, then it would work properly. Or if my db.json was just an empty array & globalShowId = 0 or 1, then it would work properly.
        I could not figure out how to make that work, so the simpler solution was to remove this line. So if I delete most of the starting list (items with ID 3-8) and add 2 items (starting at 9 because of line 2 on this file), IDs in db.json would be 1, 2, 9, 10. Functions just as well, just now there will be no id #3-8 ever. No ID will ever be repeated, even after it is deleted. */
    }
}