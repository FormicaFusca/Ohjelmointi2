'use strict';

const form = document.getElementById('form');

form.addEventListener('submit', async function(evt) {
    evt.preventDefault();

    const query = document.getElementById('query').value;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const jsonData = await response.json();

        console.log(jsonData);
    } catch (error) {
        console.log(error.message);
    }
});

// action="https://api.tvmaze.com/search/shows"