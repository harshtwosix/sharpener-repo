// AXIOS GLOBAL
axios.defaults.headers.common['X-Auth-Token']='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';


// GET REQUEST
function getTodos() {
    axios({
      method : 'get',
      url : "https://reqres.in/api/users?page=1"
    })
    .then(res=>showOutput(res))
    .catch(err=>console.log(err))
  }
  
  // POST REQUEST
  function addTodo() {
    axios({
      method : 'post',
      url :    'https://reqres.in/api/users?page=1',
      data : {
        "name":"harshit",
        age : 23,
        "place":"kanpur"
      }
    })
    .then((res)=>showOutput(res))
    .catch((err)=>console.log(err))
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    axios.put('https://reqres.in/api/users?page=1',{
        "name":"harshit prajapati",
        age :22
    })
    .then((res)=>showOutput(res))
    .catch((err)=>console.log(err))
  }
  
  // DELETE REQUEST
  function removeTodo() {
    axios.delete('https://reqres.in/api/users/2')
    .then((res)=>showOutput(res))
    .catch((err)=>console.log(err))
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    axios.all([
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5'),
      axios.get('https://jsonplaceholder.typicode.com/albums?_limit=5')
    ])
    .then((res)=>{
      showOutput(res[0])
      showOutput(res[1])
    })
    .catch(err=>console.log(err))
  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    const config={
       headers:{
        'content-typee':'application/JSON',
        Authorisation : 'someTokenn'
       }
    }

    axios.get('https://reqres.in/api/users?page=1',config)
    .then(res=>showOutput(res))
    .catch(err=>console.log(err))
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    console.log('Transform Response');
  }
  
  // ERROR HANDLING
  function errorHandling() {
    axios({
      method : 'get',
      url : 'https://jsonplaceholder.typicode.com/todosa'
    })
    .then(res=>showOutput(res))
    .catch(err=>{
      if(err.response){
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
      }

      if(err.response.status=404){
        alert('error:not forund')
      }
    })
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    console.log('Cancel Token');
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
  // Add a request interceptor
axios.interceptors.request.use(function (req) {
  // Do something before request is sent
  console.log(`${req.method.toUpperCase()} request sent to ${req.url} at ${new Date()}`)

  return req;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
  
  // AXIOS INSTANCES
  const axiosInstances = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com' 
  })

  axiosInstances.get('/comments')
  .then(res=>showOutput(res))
  .catch(err=>console.log(err))
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click',()=>{
    getTodos()
  } );
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);