import { spawn, exec } from 'child_process';

let url = null;
let opened = false;

const vite = spawn('npx', ['vite'], { shell: true });

vite.stdout.on('data', (data) => {
  const text = data.toString();
  process.stdout.write(text);
  if (!opened) {
    const m = text.match(/Local:\s+(https?:\/\/\S+)/);
    if (m) {
      url = m[1];
      opened = true;
      openBrowser();
    }
  }
});

vite.stderr.on('data', (data) => {
  process.stderr.write(data.toString());
});

vite.on('close', (code) => {
  process.exit(code === null ? 0 : code);
});

function openBrowser() {
  console.log('Abriendo Google Chrome en', url || 'http://localhost:3000/');
  const openUrl = url || 'http://localhost:3000/';
  if (process.platform === 'win32') {
    exec(`start "" chrome ${openUrl}`);
  } else if (process.platform === 'darwin') {
    exec(`open -a "Google Chrome" ${openUrl}`);
  } else {
    exec(`xdg-open ${openUrl}`);
  }
}

process.on('SIGINT', () => {
  vite.kill('SIGINT');
  process.exit();
});
