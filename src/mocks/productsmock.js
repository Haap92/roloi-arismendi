const products = [
    {id:'01', name:'Minimalist Analog Watch', description:'The Minimalist Two-Hand Black Leather Watch', img:'https://i.postimg.cc/bvjzSNw5/FS5447-main.jpg', initial:1, stock:5, price: 30},
    {id:'02', name:'Common Digital Watch', description:'Going Digital with a watch', img:'https://i.postimg.cc/8zvpCrNW/71r-T69t8-GVL-UX679.jpg', initial:1, stock:15, price: 35},
    {id:'03', name:'Pirate Dream Smart Watch', description:'The Smarter smart watch wide and convincing', img:'https://i.postimg.cc/TYp2Z4st/gll770-twenteesky-original-imag8p3egtsk3t7h.webp', initial:1, stock:7, price: 255},
    {id:'04', name:'Just an Old Vintage Watch', description:'Old its always fun, nice piece of art', img:'https://i.postimg.cc/tTkCjQyM/1.jpg', initial:1, stock:3, price: 75},
    {id:'05', name:'Another Analog Watch', description:'90 people favorite watch', img:'https://i.postimg.cc/bvHqxcGw/Screen-Shot-2019-07-06-at-12-09-22-PM-large.webp', initial:1, stock:10, price: 50},
    {id:'06', name:'More Interesting Digital Watch', description:'Just to add some diversity to the website', img:'https://i.postimg.cc/2yXk1Q1d/images.jpg', initial:1, stock:4, price: 25},
    {id:'07', name:'The Usual Smart Watch', description:'Everyone got one nowdays so we have to offer this one too', img:'https://i.postimg.cc/CLXMY4TS/20b86b4166b88ee81a1104fe727a3bff.jpg', initial:1, stock:4, price: 120},
    {id:'08', name:'Gorgeous Vintage Watch', description:'Enjoy feeling luxury by adding this piece to your collection', img:'https://i.postimg.cc/90fXX8QF/download.jpg', initial:1, stock:4, price: 35}
  ]

  export const productData = new Promise ((resolve, reject) =>{
    let condition = true
    setTimeout(()=>{
      if(condition){
        resolve(products)
      }else{
        reject('Couldnt load products')
      }
    },3000)
  })
