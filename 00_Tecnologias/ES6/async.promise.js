function hacerAlgoPromesa() {
    return new Promise(function (resolve, reject) {
        console.log('hacer algo que ocupa un tiempo...');
        setTimeout(resolve(), 1000);
    })
}