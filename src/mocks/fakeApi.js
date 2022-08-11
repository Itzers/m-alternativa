const productosHerbolarios= [
    {id:'01', description: "Es un auxiliar para prevenir enfermedades como la hipertensión, rinitis alérgica, la anemia, la diabetes, por mencionar algunas.", name: 'Espirulina', price:100, img: 'https://i.postimg.cc/fWdVPPbG/espirulina.jpg', stock: 20, category: 'Extractos'},

    {id:'02', description: "Antinflamatorio, antiespasmódico,, auxiliar en enfermedades como artritis, reumatismo, problemas de memoria.", name: 'Petiveria', price:50, img: 'https://i.postimg.cc/3xTJzrqp/petiveria.jpg', stock:10, category: 'Aceites'},

    {id:'03', description: "Disminuye los niveles de colesteron y trigliceridos, disuelve piedras en riñones y vesícula biliar.", name: 'Hierba del Sapo', price:150, img: 'https://i.postimg.cc/ryxjMQm4/pc300.jpg', stock:70, category: 'Extractos'},
    
    {id:'04', description: "Ayuda a combatir la inflamación, además de ayudar al crecimiento de bacterias buenas en el intestino.", name: 'Melena de Leon', price: 200, img: 'https://i.postimg.cc/kMvSTZGT/melena-de-leon.jpg', stock:60, category: 'Extractos'},

    {id:'05', description: "Alivia los sintomas de estrés, ansiedad y mejora calidad del sueño.", name: 'Calderona Amarilla', price: 250, img: 'https://i.postimg.cc/g0Mb5V5s/calderona.jpg', stock:60, category: 'Tinturas'},
    
    {id:'06', description: "Protege el higado, además de ser un auxiliar para reducir el dolor y la inflamación abdominal.", name: 'Boldo', price: 110, img: 'https://i.postimg.cc/Njhd1hDC/boldo.jpg', stock:60, category: 'Aceites'},

    {id:'07', description: "Ayuda al corazón ya que mejora la circulación coronaria y regula la tensión arterial.", name: 'Espino Blanco', price: 110, img: 'https://i.postimg.cc/N0RF5XMP/ESPINO-BLANCO.jpg', stock:60, category: 'Extractos'},

    {id:'08', description: "Estimulante del sistema nervioso central, es un apoyo natural para superar estados depresivos.", name: 'Damiana Californiana', price: 110, img: 'https://i.postimg.cc/kXykXgqF/damiana.jpg', stock:60, category: 'Tinturas'},

]

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

