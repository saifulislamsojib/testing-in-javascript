const postToServer = async (data) => {
  return {
    id: Math.random().toString().replace(".", ""),
    ...data,
  };
};

module.exports = postToServer;
