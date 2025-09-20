import { registry } from './registry.ts';

const args = process.argv.slice(2);
const [topic, ...rest] = args;

if (!topic || topic === '--list') {
  console.log('📚 Topic available:');
  Object.keys(registry).forEach((k) => console.log(' -', k));
  process.exit(0);
}

const loader = registry[topic];
if (!loader) {
  console.error(`❌ Topic "${topic}" is not found.`);
  console.log('👉 Coba: bun run list');
  process.exit(1);
}

try {
  const mod = await loader();
  if (typeof mod.main !== 'function') {
    console.error(`❌ Topic "${topic}" doesn't export main() function.`);
    process.exit(1);
  }
  await mod.main(rest);
} catch (e) {
  console.error(`💥 Failed runing "${topic}":`, e);
  process.exit(1);
}
