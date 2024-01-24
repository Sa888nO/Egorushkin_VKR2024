import { DataSource, DataSourceOptions } from 'typeorm';
import { join } from 'path';

export const appDataSource = new DataSource({
  url: "postgresql://postgres:saske228@127.0.0.1:5432",
  type: 'postgres',
  schema: 'public',
  logging: true,
  entities: [],
  migrations: [join(process.cwd(), 'migrations', '**', '*migrations.ts')],
  migrationsRun: true,
  migrationsTableName: 'migrations'
});
