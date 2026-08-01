const assert = require('assert');
const http = require('http');
const { spawn } = require('child_process');
const path = require('path');

const serverProcess = spawn(process.execPath, ['apps/web/server.js'], {
  cwd: path.join(__dirname, '..'),
  stdio: ['ignore', 'pipe', 'pipe'],
});

let stdout = '';
let stderr = '';
serverProcess.stdout.on('data', (chunk) => {
  stdout += chunk.toString();
});
serverProcess.stderr.on('data', (chunk) => {
  stderr += chunk.toString();
});

function waitForServer() {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error(`Server did not start.\nSTDOUT:\n${stdout}\nSTDERR:\n${stderr}`)), 5000);
    const attempt = () => {
      http.get('http://127.0.0.1:3000/', (res) => {
        clearTimeout(timeout);
        let body = '';
        res.on('data', (chunk) => {
          body += chunk;
        });
        res.on('end', () => {
          try {
            assert.ok(body.includes('Nexus Intelligence Platform'));
            resolve();
          } catch (error) {
            reject(error);
          } finally {
            serverProcess.kill();
          }
        });
      }).on('error', () => {
        setTimeout(attempt, 100);
      });
    };
    attempt();
  });
}

waitForServer().then(() => {
  console.log('Smoke test passed');
}).catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
  serverProcess.kill();
});
