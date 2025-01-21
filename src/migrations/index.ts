import * as migration_20250121_201122 from './20250121_201122';
import * as migration_20250121_213142 from './20250121_213142';

export const migrations = [
  {
    up: migration_20250121_201122.up,
    down: migration_20250121_201122.down,
    name: '20250121_201122',
  },
  {
    up: migration_20250121_213142.up,
    down: migration_20250121_213142.down,
    name: '20250121_213142'
  },
];
