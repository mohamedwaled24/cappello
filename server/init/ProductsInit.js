const mongoose = require("mongoose");
const Products = require("../models/Products");
const Category = require("../models/Category");
const { faker } = require("@faker-js/faker");
const _=require('lodash')

async function main() {
  try {
    // connect db
    const db =await mongoose.connect(
        process.env.DB_URL,
        { useNewUrlParser: true }
      )
      if(db){
        console.log('db connected')
      }

      const categories=[new Category({
        name:'BreakFast'
      }),
      new Category({
        name:'Lunch'
      }),
      new Category({
        name:'Drink'
      }),
      new Category({
        name:'Dinner'
      })]
      var count =0;

    for(var i =0; i<categories.length;i++){
       
  
        const savedCat=await categories[i].save()
        count++
        console.log(savedCat)
        if(count===categories){
            const disconnect = mongoose.disconnect()
            if(disconnect){
                console.log('db disconnected')
            }
        }
    }
    const cat = ['Dinner' , 'BreakFast' , 'Drink' , 'Lunch']

      const images=['https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                     'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                     'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    ]

    let products = [];
    for (let i = 0; i < 10; i++) {

      
      let newProduct = new Products({
        productName: faker.commerce.productName(),
        price: faker.commerce.price(),
        category:_.sample(cat),
        imgUrl:_.sample(images)
      });
      products.push(newProduct);
    }


    var done =0;

    for(var i =0; i<products.length;i++){
       
  
        const savedProducts=await products[i].save()
        done++
        console.log(savedProducts)
        if(done===products){
            const disconnect = mongoose.disconnect()
            if(disconnect){
                console.log('db disconnected')
            }
        }
    }
    console.log(products)


  } catch (error) {
    console.log(error);
  }
}
main()