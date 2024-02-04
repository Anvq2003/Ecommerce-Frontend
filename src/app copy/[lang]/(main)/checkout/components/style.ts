import { tv } from 'tailwind-variants';
import { titleStyle, subtitleStyle } from '@/shared/styles/primitives';

export const checkoutStyle = tv({
  slots: {
    container: 'flex items-center justify-between rounded-[20px] bg-bgPrimary p-4 line-clamp-2 md:p-5',
    title: titleStyle({ size: 'sm' }),
    subtitle: subtitleStyle(),
    description: 'text-[16px] font-normal text-secondary',
  },
});
