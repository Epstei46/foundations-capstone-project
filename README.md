<h1 align="center">Welcome to Watch List 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/Epstei46/foundations-capstone-project#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/Epstei46/foundations-capstone-project/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-no%3F-yellow.svg" />
  </a>
  <a href="https://github.com/Epstei46/foundations-capstone-project/blob/main/LICENSE.md" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-green.svg" />
    <!-- <img alt="License:MIT" src="https://img.shields.io/github/license/Epstei46/foundations-capstone-project" /> -->
  </a>
</p>

## Description

> Watch List is a personal site I created to keep track of shows I still need to watch, along with any important notes (where to watch, brief info, or who recommended it). This information is stored in a JSON file on the server. Feel free to check out what I got on there and make your own addition if you think of a show/movie I might like!

## MVP

* On page load, GET stored watch list and render it visible to the user. Will have an initial watch list with suggestions.
* User can POST new shows/movies to the watch list.
* User can DELETE a show/movie from the watch list.

## Additional Features

* Along with the title of show/movie, added an input field to the form for an optional comment.
* Changed pixel width/height to view width/height to look better on mobile.
* Made the title of this project a header that stays at the top of the browser while scrolling.
* Created a sidebar image for some extra flair.

## Challenge
I wanted to be able to go from local testing to Heroku deployment without needing to modify the code every time I went from one to the other. My original solution I came up with after doing some research was to set the baseURL object in the client folder equal to window.location.origin instead of having the URL in my code. I later changed that to use window.location.origin to see if it includes Heroku, and depending on the truthiness of that function, use the production or development URL.

<!-- ### 🏠 [Homepage](https://github.com/Epstei46/foundations-capstone-project#readme) -->
### ✨ [Demo](https://drive.google.com/file/d/1iO7s3PV4oqWdbjrgjKnLjg7WsC1JBi03/view)

![Deployed Screenshot](watch-list-ss.png?raw=true "Deployed Screenshot")

## Install & Setup

```sh
npm install
```
* In the root folder, create a .env file, type in SERVER_PORT=4242 to match with client/main.js line 6

## Usage

```sh
npm run start
```

## Author

👤 **Steven Epstein**

* Portfolio Page: https://Epstei46.github.io (under construction)
* Github: [@Epstei46](https://github.com/Epstei46)
<!-- * LinkedIn: [@TBA](https://linkedin.com/in/TBA) -->

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Steven Epstein](https://github.com/Epstei46).<br />
This project is [MIT](https://github.com/Epstei46/foundations-capstone-project/blob/main/LICENSE.md) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_