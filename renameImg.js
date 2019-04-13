const fs = require('fs');
const imagesArray = fs.readdirSync('./assets');
console.log(imagesArray)

imagesArray.forEach((img,i)=>{
    const ext = img.split(".")[1];
    return fs.renameSync(`./assets/${img}`, `./assets/${i+1}.${ext}`)
})
debugger