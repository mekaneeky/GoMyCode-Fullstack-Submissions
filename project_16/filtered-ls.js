const fs = require('fs')

const path_to_file = process.argv[2];
const extension_to_filter_by = process.argv[3];

if (path_to_file !== undefined) {
    let counter = 0
    let new_list = [];
    const buf = fs.readdir(path_to_file, "utf-8", 
    (err, data) => {
        if (err) {
        return}
        
        for(file_path of data) {
            if (file_path.split(".")[1] == extension_to_filter_by) {
                new_list.push(file_path)
            }
        }

        console.log(new_list.join("\n"))

    } )
}
    
