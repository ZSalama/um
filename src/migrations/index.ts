import * as migration_20250120_185108 from './20250120_185108';

export const migrations = [
  {
    up: migration_20250120_185108.up,
    down: migration_20250120_185108.down,
    name: '20250120_185108'
  },
];
