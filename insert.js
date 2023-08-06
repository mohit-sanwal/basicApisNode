const dbConnect = require('./mongodb');

const insert = async() => {
    console.log('insert called...')
   const db = await dbConnect();
   const result = await db.insertMany([{
    name: 'note 5',
    brand: 'vivo',
    price: 320,
    category: 'mobile'
   },
   {
    name: 'note 6',
    brand: 'vivo',
    price: 420,
    category: 'mobile'
   },
   {
    name: 'note 7',
    brand: 'vivo',
    price: 520,
    category: 'mobile'
   }]);

   if (result.acknowledged) {
      console.log('data inserted', result);
   }
}


insert();


// insertOne
// insertMany