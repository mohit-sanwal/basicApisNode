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


/*
q:1 how to check if data is deleted or not - need to check for deletedCount

q:2 if data is not present in db still we are trying to delete it. It will not throw
 error and give acknowledged as true but will give deleted count as zero.

*/