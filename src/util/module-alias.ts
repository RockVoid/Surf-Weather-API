import * as path from 'path';
import moduleAlias from 'module-alias';

// __dirname = current directory
const files = path.resolve(__dirname, '../..');

moduleAlias.addAliases({
    '@src': path.join(files, 'src'),
    '@test': path.join(files, 'test'),
});