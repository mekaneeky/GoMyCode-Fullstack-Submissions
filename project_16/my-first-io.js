const fs = require('fs')

const path_to_file = process.argv[2];

if (path_to_file !== undefined) {
    let counter = 0
    const buf = fs.readFileSync(path_to_file)
    const str = buf.toString()
    for (i of str) {
        if (i == "\n") {
            counter++
        }
    }
    console.log(counter)

}