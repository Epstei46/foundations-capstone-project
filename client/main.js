// NOTE - document.querySelector() is used to select an HTML element (created in main.html or this file). Then that selection is saved to an object for easy access/use. 
const listContainer = document.querySelector("#list-container")
const form = document.querySelector("form")

// const baseURL = window.location.origin
const production = "https://simple-watch-list.herokuapp.com";
const development = "http://localhost:4242";
const baseURL = window.location.origin.includes('heroku') ? production : development;

/**
 * This  function is used to take the data coming from the server and focuses in on the list containing objects (from the JSON file), each of which contains key-value pairs for a specific show, and passes that list as a parameter to the displayShows function.
 * @param {*} shows - object containing key-value pairs.
 */
const showsCallback = ({ data: shows}) => displayShows(shows)
const errCallback = err => console.log(err)

const getAllShows = () => axios.get(`${baseURL}/api/shows`).then(showsCallback).catch(errCallback)
const addShow = body => axios.post(`${baseURL}/api/shows`, body).then(showsCallback).catch(errCallback)
const deleteShow = id => axios.delete(`${baseURL}/api/shows/${id}`).then(showsCallback).catch(errCallback)

/**
 * This function handles when the input form is submitted by adding the text/data that was submitted to the JSON file stored on the server, so that even if the page is refreshed (or closed/opened), the data will still be stored.
 * @param {*} e - the "submit" event.
 */
function submitHandler(e) {
    e.preventDefault() /**This stops the page from refreshing when the form is submitted.*/
    let show = document.querySelector("#show")
    let notes = document.querySelector("#notes")
    if (show.value.trim() == ""){return alert("Please enter text for the title of the Show/Movie you want to add to the list.")} /**Error handler, prevents the submission of "" (an empty string) to the watch list*/
    let bodyObj = {
        name: show.value,
        notes: notes.value
    } /**This takes information on the webpage and puts it in an object that is ready to send to the server*/
    addShow(bodyObj)
    show.value=''  /**This clears the text currently in in the #show HTML element*/
    notes.value='' /**This clears the text currently in in the #notes HTML element*/
}

/**
 * This  function takes the show parameter and then uses the values stored on each key (id, name, notes) to generate a HTML element with the correct information on the webpage.
 * @param {object} show - object containing key-value pairs.
 */
function createShowItem(show) {
    const showItem = document.createElement("div")
    showItem.classList.add("show-item")
    showItem.innerHTML = `<p class="show">${show.name}</p>
    <p class="notes">${show.notes}</p>
    <button onclick="deleteShow(${show.id})">delete</button>`
    listContainer.appendChild(showItem)
}

/**
 * Each object in the arr parameter is iterated through and used as a parameter to invoke the createShowItem function, rendering each item in the list visible to the user.
* @param {list} arr - list of objects containing key-value pairs
 */
function displayShows(arr) {
    listContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createShowItem(arr[i])
    }
}

form.addEventListener("submit", submitHandler)

getAllShows() /**This invokes the function on page load to GET the list of shows stored in the server-side JSON file and then displays them in the browser*/

// const suggestButton = document.querySelector("#suggestButton")
// suggestButton.addEventListener("click", makeSuggestions)
// function makeSuggestions(e) {
//     e.preventDefault()
// }