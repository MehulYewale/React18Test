export const fetchApi = () => {
    fetch('http://jsonplaceholder.typicode.com/todos/1').then(
    (data) => {
     console.log('fetchApi Success', data);
     return data.json();
    }, (e) => {
        console.log('fetchApi Rejected ', e);
    }).then((jsonData) => {
       console.log('fetchApi data', jsonData);
    }).catch((error) => {
        console.error(error);
    });
};

export const asyncCall = async() => {
    const data = await fetch('http://jsonplaceholder.typicode.com/users');
    data.json().then(jsonData => console.log('asyncCall', jsonData))
    .catch((error) => {
        console.error(error);
    });
}

export const promiseCall = (id) => {
    return new Promise((resolve, reject) => {
        fetch('http://jsonplaceholder.typicode.com/users/' + id).then((data) => data.status === 200 ? resolve(data.json()) : reject(data.json()));
    });
    // return Promise.resolve(10); // resolve will return direct value on then
    // return (new Response(JSON.stringify({data: 10})));  // it weil return promise response object back.... data.json();
}

function getUserId(name) {
    return new Promise((resolve, reject) => {
      if (name.toLowerCase().indexOf("admin") > -1) {
        const USER_ID = name.toUpperCase().concat("_", Math.random());
        setTimeout(() => {
          resolve(USER_ID);
        }, 1000);
      } else {
        reject({ error: "Guest User" });
      }
    });
  }

const http = async (request) =>  {
    const response = await fetch(request);
    try {
      response.respData = await response.then();
    } catch(error) {
      if(!response.ok) {
        throw new Error(response.statusText);
      }
    }
    return response;
}

const get = async (path, args) => {
  return await http(new Request(path, args));
}

//get('http://jsonplaceholder.typicode.com/users', {method: 'get'}).then((response) => console.log(response.respData));