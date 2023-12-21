function getdata<t>(...val: t[]): t[] {
    return val;
}

let adata = getdata("hello", "hi")
let bdata = getdata(10, 20)