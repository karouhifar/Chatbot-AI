import concurrently from "concurrently";
import path from "path";
// index.ts
// Example: run multiple npm scripts/commands concurrently using the "concurrently" package.
// Install first: npm install concurrently
// Replace the commands with your actual npm script names or shell commands.

const commands = [
  {
    command: "bun:dev",
    name: "client",
    prefixColor: "blue",
    cwd: path.resolve(__dirname, "packages/client"),
  },
  {
    command: "bun:dev",
    name: "server",
    prefixColor: "green",
    cwd: path.resolve(__dirname, "packages/server"),
  },
];

const { result } = concurrently(commands, {
  prefix: "name",
  killOthersOn: ["failure", "success"],
  restartTries: 1,
});
result
  .then(() => {
    console.log("All processes exited successfully.");
    process.exit(0);
  })
  .catch((err: any) => {
    console.error("One or more processes failed.");
    if (err && err.message) console.error(err.message);
    process.exit(1);
  });
