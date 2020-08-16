exports.handler =  async  event =>{
    try {
        let {path} = event;
        let file = path.split("/")[4];
        const data =  require(`../data/${file}`);
        console.log(event.path)
        console.log(data);
        return {
            statusCode: 200,
            body: JSON.stringify({data})
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