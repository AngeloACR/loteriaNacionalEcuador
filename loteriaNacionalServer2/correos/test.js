const codigosPromocionales = require("../codigosPromocionales/controller/main");

codigosPromocionales.setCode("9.00", "43011", "37584", "192.168.0.1").then((data) =>{
  console.log(data);
}).catch((err) =>{
  console.log(err)
})