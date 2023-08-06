const dbConnect = require('../mongodb');

const updateData = async() => {
    console.log('update called...')
   const db = await dbConnect();
   const result = await db.updateMany({name: "note 6"}, {$set: {name: "note pro 6", price: 1620}});

   if (result.acknowledged) {
      console.log('data updated', result);
   }
}


updateData();


// updateOne
// updateMany