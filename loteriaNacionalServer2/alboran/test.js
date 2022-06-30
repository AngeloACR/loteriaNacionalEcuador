const wallet = require("./wallet");

(async () => {
  try {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
    let data = await wallet.getBalance("123");
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
})();
