import express  from "express";

import fs from "fs";
import {main,about,admin} from "./adminController.js";

export const jsonFilePath = "./database.json";
const  router = express.Router();

router.get('/', (req, res) => {
    
    //  read data from file 
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        const jsonData = JSON.parse(data);
        
        
        main(req,res,jsonData);
        
        
    }

    );
})

router.get('/about-us',  (req, res)=> {
        fs.readFile(jsonFilePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading the file:', err);
                return;
            }
            const jsonData = JSON.parse(data);



            about(req, res, data);


        });

    }


);
// router.get('/admin',  (req, res)=> {
//     fs.readFile(jsonFilePath, 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading the file:', err);
//             return;
//         }
//         const jsonData = JSON.parse(data);



//         admin(req, res, data);


//     });

// }


// );


export default router;