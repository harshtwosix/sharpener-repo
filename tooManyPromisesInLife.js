const posts = [{ title: 'POST1' }];
let userTime = new Date()

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({title: post});
      updateLastUserActivityTime();
      resolve(posts);
    }, 2000)
  })
}


function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        posts.pop();
        resolve(posts);
      } else {
        reject("ERROR: ARRAY IS EMPTY")
      }
    }, 1000)
  })
}


function updateLastUserActivityTime(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      userTime=new Date();
    },1000)
    resolve(userTime);
  })
}


createPost('POST2')
.then((res)=>{
  console.log(res);
  console.log(userTime)
  createPost('POST3')
  .then((res)=>{
    console.log(res);
    console.log(userTime)
    deletePost()
    .then((res)=>{
      console.log(res)
    })
  })
})


