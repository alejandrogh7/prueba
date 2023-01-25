const WHITELIST = ["https://localhost:3000"];

const corsOptions = {
  origin: (origin, callback) => {
    if (WHITELIST.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Host not allowed"));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
