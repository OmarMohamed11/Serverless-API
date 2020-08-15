exports.handler =  async  event =>{
    let {path} = event;
    let file = path.split("/")[4];
   const data =  require(`../data/${file}`);
   console.log(event.path)
    console.log(data);
    return {
        statusCode: 200,
        body: JSON.stringify({data})
      }
}