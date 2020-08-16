const faker = require('faker');


function getAccounts(count) {
 const data = []
  for (let i = 0; i < count; i++) {
    let scheme ={}
    scheme.patientID = faker.random.number();
    scheme.branchID = faker.random.number();
    scheme.doctorID = faker.random.number();
    scheme.patientName = faker.name.findName();
    scheme.branchName = faker.name.firstName();
    scheme.doctorName = faker.name.findName();
    scheme.collectionDate = faker.date.past();
    if(faker.random.boolean()){
        scheme.receiptID = faker.random.number();
        scheme.invoiceID = null;
    }else{
        scheme.receiptID = null;
        scheme.invoiceID = faker.random.number();
    }
    scheme.totalAmount = faker.random.number();
    scheme.adjustmentAmount = faker.random.number();
    data.push(scheme);
  }
  return data;
}

module.exports=getAccounts;