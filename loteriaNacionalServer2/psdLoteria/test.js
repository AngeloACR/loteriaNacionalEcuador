const auth = require('./auth');

(async () => {
    try {
      let data = await auth.authTest("1805018866","l39IE68E0v23sw");
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  })();
  