// Write a procedure, called dot_product which 
//calculates in the variable ps, the dot(scalar) 
// product of v1 and v2 (v1 and v2 are vectors of IR)

//how does it make sense to use a procedure with no return? 

function dot_product(v1, v2) {
    console.assert(v1.length == v2.length, "Assure that the vetors are of equal length")
    dot_product_val = 0;
    for (v_idx in v1) {
        dot_product_val += (v1[v_idx] * v2[v_idx])
    }
    return dot_product_val;
}

function is_orthogonal(v1,v2) {
    if (dot_product(v1,v2) === 0) {
        return true;
    } else {
        return false;
    }
}