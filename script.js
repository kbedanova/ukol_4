const max3 = (a, b, c) => {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
    
const result = max3(5, 3, 8);
console.log("Největší číslo je:", result);
