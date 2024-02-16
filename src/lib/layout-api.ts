import { Locale } from '@/config/i18n';
import { CONFIG } from '@/config/index';

interface IParams {
  locale: Locale;
  slug: string | undefined; // slug is optional
}

// export const getSections = async (params: IParams) => {
//   //
//   const options = { params: { locale: params?.locale, slug: params?.slug, populate: '*' } };
//   const response = await fetch(`${CONFIG.BASE_URL}/views?locale=${params?.locale}&slug=${params?.slug}&populate=*`, {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${CONFIG.AUTH_TOKEN}`,
//     },
//   });
//   if(!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// };


export const getHeader = async (locale: Locale) => {
  const options = { params: { locale, populate: 'deep' } };
  // const response = await service.get('/header', options);
  // return response?.data;
};
