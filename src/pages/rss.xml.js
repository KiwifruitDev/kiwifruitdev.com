import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    return rss({
        title: 'KiwifruitDev',
        description: 'Welcome to my website! I\'m KiwifruitDev.',
        site: context.site,
        pubDate: 'Thu, 07 Aug 2025 00:00:00 GMT',
        items: await pagesGlobToRssItems(
            import.meta.glob('./**/*.{md,mdx}'),
        ),
        customData: `<language>en-us</language>`,
    });
}
