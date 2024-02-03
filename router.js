import express  from "express";
const  router = express.Router();

router.get('/', () => {
console.log('GE');
    //  read products from file 
    // send html to client with content
})

router.get('/about-us', () => {
    console.log('about');

    //  read about-us from file 
    // send html to client with content
});


router.get('/admin', () => {
console.log('admin');
 //  read products and about-us from file 
// send html to client with content
 

})

export default router;