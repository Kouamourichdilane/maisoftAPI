const app = require('./services/express');
const { Prisma } = require('./services/prisma');
const env = require('./config/env');

const startServer = async () => {
  const prisma = new Prisma();
  await prisma.start();

  const port = process.env.PORT || 5000 ;
app.listen(port , () => {
	console.log(`maisoft running on port: ${port}`);
});
};

startServer();
