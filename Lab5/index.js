//funkcja zwrotna (callback)
//task1

fetch('http://localhost:3000/tool.json')
.then(response => response.json())
.then(data => {
    var year = data.albums[0].year
    var nr = data.albums[0].songs[1].nr
    console.log('funkcja zwrotna, task1:' + year*nr)
});
//task2
fetch('http://localhost:3000/tool.json')
.then(response => response.json())
.then(data => {
    var album = data.albums[0].title
    var song = data.albums[0].songs[2].title
    console.log('funkcja zwrotna, task2: '+`"${song}" jest utworem z albumu "${album}"`)
})

//obiekt Promise (resolve, reject) z metodami then(), catch() i finally() + axios (lub fetch)
//task1
function status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  }
  
  function json(response) {
    return response.json()
  }

fetch('https://jsonplaceholder.typicode.com/comments/27')
  .then(status)
  .then(json)
  .then(function(data){
      console.log('Obiekt Promise, task1: '+data.postId + data.id)
  }).catch(function(error){
    console.log('Request failed', error);
  }).finally(function(){
    console.log('Mam nadzieję że jesteś zadowolony/zadowolona z działania strony')
  })
//task2
fetch('https://jsonplaceholder.typicode.com/users/5')
  .then(status)
  .then(json)
  .then(function(data){
    var newObject = {
      name: data.name,
      email: data.email
  }
      console.log('Obiekt Promise, task2:')
      console.log(newObject)
  }).catch(function(error){
    console.log('Request failed', error);
  }).finally(function(){
    console.log('Mam nadzieję że jesteś zadowolony/zadowolona z działania strony')
  }
)


//async/await + fetch (lub axios)
//task1
var liczbyAsync = async function(){
    const response = await fetch('https://jsonplaceholder.typicode.com/albums/74')
    const data = await response.json()
    console.log('async/await, task1: ' +data.id * data.userId)
}
liczbyAsync()
//task2
var obiektAsync = async function(){
    const response = await fetch('https://jsonplaceholder.typicode.com/albums/74')
    const data = await response.json()
    var newObject = {
      id: data.id,
      title: data.title
    }
    console.log('async/await, task2:')
    console.log(newObject)
}
obiektAsync()

//Zapytania AJAX
//task1
var url = 'https://jsonplaceholder.typicode.com/comments/55'
var xhr = new XMLHttpRequest()
xhr.open('GET', url)
xhr.responseType = 'json'
xhr.send()
xhr.onload = function(){
    var data = xhr.response
    var number1 = data.postId
    var number2 = data.id
    console.log('Zapytania AJAX, task1: ' +number1+number2)
}
xhr.onerror = function(){
    console.log('Nie udało się pobrać zawartości')
}
//task2
var xhr2 = new XMLHttpRequest()
xhr2.open('GET', url)
xhr2.responseType = 'json'
xhr2.send()
xhr2.onload = function(){
    var data = xhr.response
    var newObject = {
      name: data.name,
      email: data.email
    }
    console.log('Zapytania AJAX, task2: ')
    console.log(newObject)
}
xhr2.onerror = function(){
    console.log('Nie udało się pobrać zawartości')
}

//metoda fetch
//task1
fetch('https://jsonplaceholder.typicode.com/todos/130')
.then(response => response.json())
.then(data => {
    console.log('metoda fetch, task1:' +data.id * data.userId)
});
//task2
fetch('https://jsonplaceholder.typicode.com/todos/130')
.then(response => response.json())
.then(data => {
  var newObject = {
    userId: data.userId,
    title: data.title
  }
  console.log('metoda fetch, task2:')
  console.log(newObject)
})

//bibliotexa axios
//task1
var axiosNumber = axios.get('https://jsonplaceholder.typicode.com/albums/7')
.then(function(response){
  console.log('biblioteka axios, task1:'+response.data.userId+response.data.id)
})  
.catch(function (error) {
  console.log(error);
})
//taks2
var axiosNumber = axios.get('https://jsonplaceholder.typicode.com/users/7')
.then(function(response){
  var newObject = {
    username: response.data.username,
    city: response.data.address.city
  }
  console.log('biblioteka axios, task2:')
  console.log(newObject)
})  
.catch(function (error) {
  console.log(error);
})