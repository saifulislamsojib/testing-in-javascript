const fetch = async (url, { body }) => {
  return {
    json: async () => {
      const data = JSON.parse(body);
      return {
        id: Math.random().toString().replace(".", ""),
        ...data,
      };
    },
  };
};

module.exports = fetch;
