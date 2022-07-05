const productosHerbolarios= [
    {id:'01', description: "Alga Espirulina", name: 'Espirulina', price:100, img: 'https://i.postimg.cc/fWdVPPbG/espirulina.jpg', stock: 20},
    {id:'02', description: "Petiveria alliacea", name: 'Petiveria', price:50, img: 'https://i.postimg.cc/3xTJzrqp/petiveria.jpg', stock:10},
    {id:'03', description: "Eryngium heterophyllum", name: 'PC300', price:150, img: 'https://i.postimg.cc/ryxjMQm4/pc300.jpg', stock:70},
    {id:'04', description: "Hongo Melena de Leon", name: 'Melena de Leon', price: 200, img: 'https://i.postimg.cc/kMvSTZGT/melena-de-leon.jpg', stock:60},
]

    export const getData = new Promise ((resolve, reject) =>{
        let condition = true
        setTimeout(()=>{
            if(condition){
                resolve(productosHerbolarios)
            }else{
                reject(console.log('salio mal'))
        }
        },2000)
    })
