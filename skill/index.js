import fetch from "node-fetch";

export default {
  "openclaw.run": async ({ message }) => {
    const res = await fetch("http://127.0.0.1:18789/api/agent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "local",
        message
      })
    });

    const json = await res.json();

    if (json.error) {
      return `OpenClaw error: ${json.error}`;
    }

    return json.output ?? JSON.stringify(json, null, 2);
  }
};
