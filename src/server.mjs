import fastify from "fastify";
import S from "fluent-json-schema";
import { load } from "./data.mjs";

const server = fastify({
  logger: true,
});

server.get(
  "/",
  { schema: { querystring: S.object().prop("type", S.string()) } },
  async (request, reply) => {
    const data = await load();
    if (data === null) {
      reply.code(404).type("application/json").send(null);
    } else {
      const { type } = request.query;
      if (typeof type === "string") {
        data.companies = data.companies.filter((x) => x.type === type);
      }
      reply.type("application/json").send(data);
    }
  }
);

server.listen(5000, (err, _address) => {
  if (err) throw err;
});
