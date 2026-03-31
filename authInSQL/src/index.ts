import { createServer } from "node:http";
import { createExpressApplication } from "./app";

async function main() {
  try {
    const server = createServer(createExpressApplication());
    const PORT: number = 8080;
    server.listen(PORT, () => {
      console.log(`http server is running on port:${PORT}`);
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
}

main();
