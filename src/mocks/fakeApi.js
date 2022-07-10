const productosHerbolarios= [
    {id:'01', description: "Alga Espirulina", name: 'Espirulina', price:100, img: 'https://i.postimg.cc/fWdVPPbG/espirulina.jpg', stock: 20, category: 'Extractos'},
    {id:'02', description: "Petiveria alliacea", name: 'Petiveria', price:50, img: 'https://i.postimg.cc/3xTJzrqp/petiveria.jpg', stock:10, category: 'Aceites'},
    {id:'03', description: "Eryngium heterophyllum", name: 'PC300', price:150, img: 'https://i.postimg.cc/ryxjMQm4/pc300.jpg', stock:70, category: 'Contacto'},
    {id:'04', description: "Hongo Melena de Leon", name: 'Melena de Leon', price: 200, img: 'https://i.postimg.cc/kMvSTZGT/melena-de-leon.jpg', stock:60, category: 'Extractos'},
]

// const productoHerbolario = {
//     id:'01', description: "Alga Espirulina", name: 'Espirulina', price:100, img: 'https://i.postimg.cc/fWdVPPbG/espirulina.jpg', stock: 20,
// };

export const getData = new Promise ((resolve, reject) => {
    let condition = true
    setTimeout(()=>{
        if(condition){
            resolve(productosHerbolarios)
        }else{
            reject(console.log('salio mal'))
            }
        },2000)
});

// export const getDataProduct = (id) => {
//     return new Promise ((resolve, reject) =>{
//         const productoEncontrado = productoHerbolario.find(
//             (prod) => getDataProduct.id === Number (id)
//         );
//         setTimeout(() => {
//             resolve(productoEncontrado);
//         }, 2000);

    // let condition = true
    // setTimeout(()=>{
    //     if(condition){
    //         resolve(productoHerbolario)
    //     }else{
    //         reject(console.log('salio mal'))
    // }
    // },2000)
//});
//}
