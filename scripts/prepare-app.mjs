// Tauri için "tauri-dist" klasörünü hazırlar: index.html'i alır,
// yalnızca web (PWA) sürümünde gereken parçaları çıkarır.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';

const out = 'tauri-dist';
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

let html = readFileSync('index.html', 'utf8');
html = html.replace(/<link rel="manifest"[^>]*>\n?/g, '');
html = html.replace(/<script>\nif\('serviceWorker' in navigator[\s\S]*?<\/script>\n?/g, '');
html = html.replace(/<p class="foot">[\s\S]*?<\/p>/g, '');
writeFileSync(out + '/index.html', html);

console.log('tauri-dist hazır');
