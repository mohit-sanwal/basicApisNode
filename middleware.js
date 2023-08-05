 requestFilter = (req, res, next) => {
    if(!req.query.age) {
      res.send('please provide age')
    } else {
      if (req.query.age < 18) {
       res.send('you can not access this page')
      } else {
          // if we have alredy send response after that we can not access next that why adding in else
        next();
      }
    }
  }

module.exports = requestFilter;