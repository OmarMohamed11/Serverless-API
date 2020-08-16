exports.handler =  async  event =>{
    try {
        let {path} = event;
        let file = path.split("/")[4];
        let count = /^\d/.test(path.split("/")[5]) ? path.split("/")[5] : 10;
        const getData =  require(`../data/${file}`);
        let data = [];
        data = getData(count)
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    } catch (error) {
        if (error.message  == "Cannot find module './undefined'" || error.message  == "Cannot find module './'") {
            error.message  = "please specify file to fetch"
        }else {
            let unfoundFile = error.message .split("/")[1].slice(0,error.message .split("/")[1].length-1);
            error.message  = `${unfoundFile} is not a file`
        }
        throw(error);
    }

}