const listContainer = document.querySelector("#list-container")
const form = document.querySelector("form")

const baseURL = `/api/shows`

const showsCallback = ({ data: shows}) => displayShows(shows)
const errCallback = err => console.log(err)

const getAllShows = () => axios.get(baseURL).then(showsCallback).catch(errCallback)
const addShow = body => axios.post(baseURL, body).then(showsCallback).catch(errCallback)
const deleteShow = id => axios.delete(`${baseURL}/${id}`).then(showsCallback).catch(errCallback)

// below function handles when the input form is submitted by adding the text/data that was submitted to db.json, so that even if the page is refreshed (or closed/opened), the data will still be stored.
function submitHandler(e) {
    e.preventDefault()
    let show = document.querySelector("#show")
    let notes = document.querySelector("#notes")
    if (show.value.trim() == ""){return alert("Please enter text for the title of the Show/Movie you want to add to the list.")}
    let bodyObj = {
        name: show.value,
        notes: notes.value
    }
    addShow(bodyObj)
    show.value=''
    notes.value=''
}

function createShowItem(show) {
    const showItem = document.createElement("div")
    showItem.classList.add("show-item")
    showItem.innerHTML = `<p class="show">${show.name}</p>
    <p class="notes">${show.notes}</p>
    <button onclick="deleteShow(${show.id})">delete</button>`
    listContainer.appendChild(showItem)
}
// below function pulls from the db.json file to createShowItem, rendering each item in the list visible to the user.
function displayShows(arr) {
    listContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createShowItem(arr[i])
    }
}

form.addEventListener("submit", submitHandler)

getAllShows()

// const suggestButton = document.querySelector("#suggestButton")
// suggestButton.addEventListener("click", makeSuggestions)
// function makeSuggestions(e) {
//     e.preventDefault()
// }