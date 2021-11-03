const requestURL = 'https://jsonplaceholder.typicode.com/users';
const body = document.querySelector('body');
const button = document.getElementById('btn');
console.log(button);

function sendRequest(method, url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open(method, url);
            xhr.responseType = 'json';

            xhr.onload = () => resolve(xhr.response);

            xhr.send();
    })
}



sendRequest('GET', requestURL).then(function(data) {
    for (let i = 0; i < data.length; i++) {
       body.innerHTML += `
       <h2>User ID :${data[i].id}</h2>
       <p>${data[i].name}</p>
       <p>${data[i].username}</p>
       <p>${data[i].email}</p>
       
       `
    } 
     
}
     
)

     
     

















    

    






















