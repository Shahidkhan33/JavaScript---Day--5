//1 For Given JSON iterate over all for loops(for,for in,for of,forEach)

//lets consider following JSON data
var JSON =  [
    {
      "id": 1,
      "first_name": "Taylor",
      "last_name": "Swift",
      "email": "taylor23@gmail.com"
    },
    {
      "id": 2,
      "first_name": "Cilian",
      "last_name": "Murphy",
      "email": "murphy56@gmail.com"
    },
    {
      "id": 3,
      "first_name": "Ariana",
      "last_name": "Grande",
      "email": "grande23@gmail.com"
    }]

    //for loop
    console.log('normal for loop output'.toUpperCase())
    for(let i = 0;i<JSON.length;i++){
        console.log(JSON[i].id)
        console.log(JSON[i].first_name)
        console.log(JSON[i].last_name)
        console.log(JSON[i].email)
    }

    //for in loop
    console.log('for in loop output'.toUpperCase())
    for(let index in JSON){   //here index is the index of the array with objects as element
        console.log(JSON[index].id)       
        console.log(JSON[index].first_name)
        console.log(JSON[index].last_name)
        console.log(JSON[index].email)
    }

    //for of loop
    console.log('for of loop output'.toUpperCase())
    for(let object of JSON){  //here object is  an element of an array i.e object 
        console.log(object.id)       
        console.log(object.first_name)
        console.log(object.last_name)
        console.log(object.email)
    }

    //forEach loop
    console.log('forEach loop output'.toUpperCase())
    JSON.forEach((object) => { //here object is an element of an array i.e object
        console.log(object.id)       
        console.log(object.first_name)
        console.log(object.last_name)
        console.log(object.email)
    })
