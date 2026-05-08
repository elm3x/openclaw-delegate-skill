# OpenClaw Delegation Skill

This skill enables Hermes to delegate tasks to a single OpenClaw agent via the OpenClaw Gateway HTTP API.

## Tool: openclaw.run

Use this tool to send a task to the OpenClaw agent.

### Arguments
- `message` (string): The instruction to send to the OpenClaw agent.

### Behavior
Send an HTTP POST request to:

`http://127.0.0.1:18789/api/agent`

with JSON body:

```json
{
  "to": "local",
  "message": "{{message}}"
}
```

Return the `"output"` field from the response.

