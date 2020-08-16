 const faker = require('faker');

 const data = []
 function getStudents(count) {
   for (let i = 0; i < count; i++) {
     let scheme ={}
     scheme.id = faker.random.uuid();
     scheme.gender = faker.random.boolean() ? "male" : "female" ;
     scheme.name = faker.name.findName();
     scheme.email = faker.internet.email();
     scheme.address = faker.address.streetAddress();
     data.push(scheme);
   }
   return data;
 }

module.exports=getStudents;