import { tv } from 'tailwind-variants';

export const titleStyle = tv({
  base: 'tracking-tight block font-bold text-primary',
  variants: {
    color: {
      default: 'text-primary',
    },
    size: {
      sm: 'text-[18px] font-medium',
      md: 'text-[22px] font-medium',
      lg: 'text-[24px] font-bold',
    },
    fullWidth: {
      true: 'w-full block',
    },
  },
  compoundVariants: [
    {
      size: ['sm', 'md', 'lg'],
      class: 'tracking-tight',
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'default',
  },
});

export const subtitleStyle = tv({
  base: 'w-full block text-primary',
  variants: {
    size: {
      md: 'text-[15px] font-normal',
    },
    color: {
      default: 'text-primary',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'default',
  },
});
