const requestURL = 'http://localhost:8000/';
const body = document.querySelector('body');
const button = document.getElementById('btn');



function sendRequest(method, url) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.onload = function() {
        const responseX = xhr.response;
        for (let i = 0; i < responseX.length; i++) {
            body.innerHTML += `
            <h3>User id: ${responseX[i].id}</h3>
            <p>Name: ${responseX[i].first_name}</p>
            <p>Last Name: ${responseX[i].last_name}</p>
            <p>Email: ${responseX[i].email}</p>
            <img src="${responseX[i].photo}">
            `
        }
    }
    xhr.send();
}

button.addEventListener('click', () => {
    sendRequest('GET', requestURL);
});   