/*Get

fetch('http://127.0.0.1:8000/api/get_all/',
	{headers: {'Authorization': `Bearer ${token}`}})

     .then(res => res.json())
     .then(data => console.log(data))*/

/*Put
const url = 'http://127.0.0.1:8000/api/delete/2'
let obj = {
    id: 2,
    name: 'lunch',
    description: 'a',
    status: 'Done',
    date: "2023-03-02"
 }
 fetch(url, {
     method: 'PUT',
     headers: {
         'Authorization': `Bearer ${token}`,
         'Content-Type': 'application/json;charset=utf-8'
     },
     body: JSON.stringify(obj)
 })*/
