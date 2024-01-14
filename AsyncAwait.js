console.log('person1 :shows ticket')
console.log('person2 :shows ticket')
// Using Async Await
const preMovie =  async function(){
    const promisewifebringtickt=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },3000)
    })

    const getpopCorn = new Promise((resolve,reject)=>{
        resolve(`popcorn`)
       });

    let ticket= await promisewifebringtickt
    console.log(`wife:i have the ${ticket}`);
    console.log("husband: let gets in");
    console.log("wife:no I am hungry");

    let popcorn=await getpopCorn;
        console.log(`husband:I got some ${popcorn},we should go in`)
        console.log("wife:i need butter");
       
        const getbutter=new Promise((resolve,reject)=>{
            resolve(`butter`)
        })

        let butter=await getbutter;
        console.log(`husband:I got ${butter},anything else`);
        console.log("I am thirsty go and get some colddrinks");

        const getcolddrink=new Promise((resolve,reject)=>{
            resolve('colddrink')
        })

        let colddrink=await getcolddrink;
        console.log(`husband:I got the ${colddrink},anything else?`);
        console.log('wife:no lets go we are getting late');
    
    return ticket
}

preMovie().then((m)=>{
    console.log(`person3:shows ${m}`)
})
////////////////////////////end//////////////////////////

//using promise.then
const wifebringsticket=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('TICKET')
    },3000)
});
const getpopCorn= wifebringsticket.then((t)=>{
    console.log(`wife:I got the ${t}`)
    console.log("husband:let's go in");
    console.log("wife:I'am hungry");
    return new Promise((resolve,reject)=>{
        resolve(`POPCORN`)
    })
})
const getbutter=getpopCorn.then((res)=>{
    console.log(`husband:I got some ${res},we should go in`)
    console.log("wife:i need butter");
    return new Promise((resolve,reject)=>{
        resolve(`BUTTER`)
    })
})

const getcolddrink=getbutter.then((res)=>{
     console.log(`husband:I got some ${res}`);
     console.log("wife:i am thirsty")
     return new Promise((resolve,reject)=>{
         resolve('COLDRINK')
     })
})
getcolddrink.then((res)=>{
    console.log(`husband:I got ${res}`);
    console.log('wife:lets get in');
})
////////////////////////end///////////////////////////////
console.log('person4 :shows ticket');
console.log('person5 :shows ticket');