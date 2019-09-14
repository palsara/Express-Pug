// Logger middleware function
const myMiddleWare = (req, res, next) => {
  const currentDate = new Date();
  const stamp = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}:${currentDate.getMilliseconds()}`;
  console.log(`${req.method}: ${req.url}, time: ${stamp}`);
  next();
};
module.exports = myMiddleWare;
