import { tv } from 'tailwind-variants';

export const titleStyle = tv({
  base: 'tracking-tight block font-bold text-primary',
  variants: {
    color: {
      default: 'textPrimary',
    },
    size: {
      sm: 'text-[18px] font-medium',
      md: 'text-[22px] font-medium',
      lg: 'lg:text-[24px] lg:font-bold',
    },
    fullWidth: {
      true: 'w-full block',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'default',
  },
});

export const subtitleStyle = tv({
  base: 'w-full block text-primary',
  variants: {
    size: {
      sm: '',
      md: 'text-[15px] font-normal',
      lg: '',
    },
    color: {
      default: 'textPrimary',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'default',
  },
});
