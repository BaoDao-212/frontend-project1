const a = {
  client: {
    excludes: ["**/graphql/generated/*"],
    service: {
      name: "backend-project1",
      url: "http://localhost:4000/graphql",
    },
  },
};
module.exports = a;


