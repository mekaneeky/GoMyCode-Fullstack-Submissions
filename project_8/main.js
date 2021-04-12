
function insertion_sort(unsorted_arr) {
    sorted_arr = [];

    for (arr_element of unsorted_arr) {
        var pos_to_add = -1;
        console.log(sorted_arr);

        for (var i = 0; i < sorted_arr.length;i++ ) {
            
            if (sorted_arr[i] < arr_element) {
                continue;
            } else {
                pos_to_add = i;
                break;
            }
        }

        if (pos_to_add === -1) {
            sorted_arr.push(arr_element);
        } else {
            sorted_arr.splice(pos_to_add,0,arr_element);
        }
    }

    return sorted_arr
}