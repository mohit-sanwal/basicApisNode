const dbConnect = require('../mongodb');

const main = async () => {
  let data = await dbConnect();
  let resData = await data.find().toArray();
  console.warn(resData);
}

main();

