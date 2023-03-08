/*const url = 'http://127.0.0.1:8000/api/create/'

let obj = {
    id: 3,
    name: 'd',
    description: 'a',
    status: 'Done',
    date: "2023-03-02"
 }
 fetch(url, {
     method: 'POST',
     headers: {
         'Content-Type': 'application/json;charset=utf-8'
     },
     body: JSON.stringify(obj)
 }*/
let obj = {
    id: 3,
    name: 'd',
    description: 'a',
    status: 'Done',
    date: "2023-03-02"
 }
 fetch(url, {
     method: 'POST',
     headers: {
         'Authorization': `Bearer ${token}`,
         'Content-Type': 'application/json;charset=utf-8'
     },
     body: JSON.stringify(obj)
 })



const url = 'http://127.0.0.1:8000/api/delete/3'


let obj = {
    id: 1,
    name: 'd',
    description: 'a',
    status: 'Done',
    date: "2023-03-02"
 }
fetch(url, {
    method: 'UPDATE',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json;charset=utf-8'
    }
})
     .then(res => res.json())
     .then(data => console.log(data))

const url = 'http://127.0.0.1:8000/api/delete/2'
fetch(url, {
    method: 'PUT',

    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json;charset=utf-8'
    }

} )
     .then(res => res.json())
     .then(data => console.log(data))