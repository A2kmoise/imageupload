const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');


dotenv.config()

cloudinary.config( {
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

    (async function() {
        
        const results = await cloudinary.uploader.upload('./images/innov.jpg')
        console.log(results)

        const url = cloudinary.url( results.public_id , {transformation :[
            {
                 quality: 'auto',
                fetch_format: 'auto'
            },
            {
              width: 'auto',
              length: 'auto' ,
              crop: 'fill', //crop our image automatically
              gravity: 'auto'
            }
          
        ]})
        console.log(url)
    })();











//To access aphoto on cloudinary site.

/*const url = cloudinary.url('pluto_oflusv', {
    transformation : [
        {
        fetch_format: 'auto'
    },
    { quality: 'auto'

    }
    ]
})
console.log(url)*/