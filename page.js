function page(params) {
    try {
        console.log(a); // a ni chaqiramiz
        let a = 12; // a ga qiymat beramiz
    } catch {
        let b = 11;
        console.log(b);
    } finally {
        console.log("try...catch..finally");
    }
    return true;
}

function page2(x) {
    try {
        if (x > 0) {
            console.log(x);
        } else {
            console.log("a noldan kichik");
        }
    } catch {
        console.log("a son bo'lishi kerak");
    }
}

page();
page2(1);

export { page, page2 };
