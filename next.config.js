const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "crc729178954",
        mongodb_password: "Crc5525473.",
        mongodb_cluser: "next-js",
        mongodb_database: "my-site",
      },
    };
  }
  return {
    env: {
      mongodb_username: "crc729178954",
      mongodb_password: "Crc5525473.",
      mongodb_cluser: "next-js",
      mongodb_database: "my-site",
    },
  };
};
