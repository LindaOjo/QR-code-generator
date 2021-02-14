async function qrGenerator () {
    fetch("https://qr-code6.p.rapidapi.com/?size=250&string=hello%20world", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "8df413e2c7msh74cafdc95cca72ep1295a2jsn579392783c63",
            "x-rapidapi-host": "qr-code6.p.rapidapi.com"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
}

qrGenerator();