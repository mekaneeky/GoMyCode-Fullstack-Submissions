const display_filtered_list = require("./mymodule")

function callback(err,data) {
    console.log(data.join("\n"))
}

const list_to_print = display_filtered_list(process.argv[2], process.argv[3], callback);
