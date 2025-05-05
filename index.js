// bind to the correct host & port for Render
process.env.N8N_PORT    = process.env.PORT || 5678;
process.env.N8N_HOST    = "0.0.0.0";

// pick up the public URL for webhooks
process.env.WEBHOOK_URL = process.env.WEBHOOK_URL;

const { start } = require("n8n");
start();
