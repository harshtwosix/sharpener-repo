// GET REQUEST
function getTodos() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5', {timeout : 4000})
    .then((res)=>{showOutput(res)})
    .catch((err)=>{console.log(err)})
  }
  
  // POST REQUEST
  function addTodo() {
    axios({
        method :'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data :{
            name:'harshit',
            age:23
        }
    })
    .then((res)=>{showOutput(res)})
    .catch((err)=>{showOutput(err)})

  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    axios({
        method :'patch',
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        data :{
            name:'harshit prajapati',
            age:23
        }
    })
    .then((res)=>{showOutput(res)})
    .catch((err)=>{showOutput(err)})
  }
  
  // DELETE REQUEST
  function removeTodo() {
    axios({
        method :'delete',
        url: 'https://jsonplaceholder.typicode.com/todos/1'
    })
    .then((res)=>{showOutput(res)})
    .catch((err)=>{showOutput(err)})
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos?limit=5'),
        axios.get('https://jsonplaceholder.typicode.com/posts?limit=5')
    ])
    .then(axios.spread((todos,posts)=>showOutput(posts)))
    .catch((err)=>showOutput(err))
}
  
  // CUSTOM HEADERS
  function customHeaders() {
    console.log('Custom Headers');
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    const options = {
      method : 'post',
      url : 'https://jsonplaceholder.typicode.com/todos',
      data : {
        title: "Hello World"
      },
      transformResponse: axios.defaults.transformResponse.concat(data => {
        data.title = data.title.toUpperCase();
        return data;
      })
    };

    axios(options).then(res=>showOutput(res));
  }
  
  // ERROR HANDLING
  function errorHandling() {
    axios.get('https://jsonplaceholder.typicode.com/todoss')
    .then((res)=>{showOutput(res)})
    .catch((err)=>{
      if(err.response){
        //server responded but page not found with a status other than 200 range
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.message);

        if(err.response.status===404){
          alert("Error: the page you requested doesn't exist");
        }
      }else if(err.request){
        //request was made but no response
        console.log(err.request);
      }
    })
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    console.log('Cancel Token');
  }
  
 
  // AXIOS INSTANCES
  
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
  document.getElementById('get').addEventListener('click', getTodos);
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