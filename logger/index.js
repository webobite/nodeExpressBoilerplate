const  logger = (_typeOfLog, logMessage) => {
    let date_ob = new Date();

    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);

    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();

    // current hours
    let hours = date_ob.getHours();

    // current minutes
    let minutes = date_ob.getMinutes();

    // current seconds
    let seconds = date_ob.getSeconds();

    switch (_typeOfLog) {
        case 'SUCCESS': console.log(`SUCCESS LOG MESSAGE at : : `, + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + " ==> " + logMessage);
        case 'ERROR': console.log(`ERROR LOG MESSAGE at : : `, + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + " ==> " + logMessage);
        case 'DEBUG': console.log(`DEBUG LOG MESSAGE at : : `, + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + " ==> " + logMessage);
    }
}

exports.logger = logger