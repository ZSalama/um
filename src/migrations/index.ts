import * as migration_20250118_234841 from './20250118_234841';

export const migrations = [
  {
    up: migration_20250118_234841.up,
    down: migration_20250118_234841.down,
    name: '20250118_234841'
  },
];
