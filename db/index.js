module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/budget', { useNewUrlParser: true, 
useUnifiedTopology: true, 
useFindAndModify: false 
})