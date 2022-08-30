import * as path from 'path';
import moduleAlias from 'module-alias';

// __dirname = diretória que a gente tá
const files = path.resolve(__dirname, '../..');

moduleAlias.addAliases({
    '@src': path.join(files, 'src'),
    '@test': path.join(files, 'test'),
});