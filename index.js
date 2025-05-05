#!/usr/bin/env node

// Bind to Render’s port & host
process.env.N8N_PORT    = process.env.PORT || 5678;
process.env.N8N_HOST    = '0.0.0.0';
process.env.WEBHOOK_URL = process.env.WEBHOOK_URL;

// Launch the n8n CLI
const { spawn } = require('child_process');
const n8n = spawn('n8n', ['start'], { stdio: 'inherit' });

n8n.on('exit', code => {
  process.exit(code);
});
