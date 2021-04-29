module.exports = function filtering_module(directory_name, file_extension, callback) {
    const fs = require('fs')

    
    if (directory_name !== undefined) {
        const buf = fs.readdir(directory_name, "utf-8", 

        
        (err, data) => {
            let new_list = [];
            if (err){return callback(err)}
            for(let file_path of data) {

                if (file_path.split(".")[1] == file_extension) {
                    new_list.push(file_path)
                }
            }
        
            callback(null,new_list )
        })
}
    
}
