import { jsonFilePath } from "./router.js"
import fs from "fs"

export const main = (req, res, data) => {



}

export const admin = (req, res, data) => {
    const newData = {
        "products": ["andrew", "elgama3a"]
    }
    data.products = newData.products
    writeData(jsonFilePath, data)
    

}



export const about = (req, res, data) => {


}




export const writeData = (filePath, jsonData) => {
    // Convert the jsonData object to a JSON-formatted string
    const jsonString = JSON.stringify(jsonData, null, 2); // null and 2 for pretty formatting

    fs.writeFile(filePath, jsonString, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
            return;
        }

        console.log('Data has been written to the file successfully!');
    });
}




