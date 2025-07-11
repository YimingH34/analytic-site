import { formatter } from '@lingui/format-json';

const linguiConfig = {
    locales: ['en', 'fr'],
    sourceLocale: 'en',
    format: formatter({ style: 'minimal' }),
    // messageId: 'literal',
    catalogs: [
        {
            path: 'src/locales/{locale}/messages',
            include: ['src'],
        },
    ],
};

export default linguiConfig;


