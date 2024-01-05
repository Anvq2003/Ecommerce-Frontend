import { Link } from '@nextui-org/link';
import { Snippet } from '@nextui-org/snippet';
import { Code } from '@nextui-org/code';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import { title, subtitle } from '@/components/primitives';
import { Locale } from '@/config/i18n';
import { getLanguage } from '@/shared/helpers/getLanguage';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getLanguage(lang);
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<h1>{dict['server-component'].welcome}</h1>
		</section>
  );
}
