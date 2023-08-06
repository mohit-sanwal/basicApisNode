const dbConnect = require('./mongodb');

const deleteData = async() => {
   console.log('delete called...')
   const db = await dbConnect();
   const result = await db.deleteMany({name: "note 5"});

   if (result.acknowledged) {
      console.log('data deleted', result);
   }
}


deleteData();


// deleteOne
// deleteMany