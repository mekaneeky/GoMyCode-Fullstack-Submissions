const fs = require('fs')

const path_to_file = process.argv[2];


if (path_to_file !== undefined) {
    let counter = 0
    
    const buf = fs.readFile(path_to_file, "utf-8", 
    (err, data) => {
        if (err) {
        return}
        
        for(char of data) {
            if (char == "\n") {
                counter++
            }
        }

        console.log(counter)

    } )
}
    
