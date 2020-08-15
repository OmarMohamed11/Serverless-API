exports.handler =  async  event =>{
   const data =  require(`../data/${event.queryStringParameters.fileName}`);
   console.log(event.path)
    console.log(data);
    return {
        statusCode: 200,
        body: JSON.stringify({data})
      }
}