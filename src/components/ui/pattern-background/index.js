import { cva } from 'class-variance-authority';

export const PATTERN_BACKGROUND_DIRECTION = {
  Top: 'top',
  Bottom: 'bottom',
  Left: 'left',
  Right: 'right',
  TopLeft: 'top-left',
  TopRight: 'top-right',
  BottomLeft: 'bottom-left',
  BottomRight: 'bottom-right',
};

export const PATTERN_BACKGROUND_VARIANT = {
  Grid: 'grid',
  Dot: 'dot',
  BigDot: 'big-dot',
};

export const PATTERN_BACKGROUND_SPEED = {
  Default: 10000,
  Slow: 25000,
  Fast: 5000,
};

export const patternBackgroundVariants = cva('relative text-clip', {
  variants: {
    variant: {
      [PATTERN_BACKGROUND_VARIANT.Grid]:
        'bg-[linear-gradient(to_right,hsl(var(--foreground)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.3)_1px,transparent_1px)]',
      [PATTERN_BACKGROUND_VARIANT.Dot]:
        'bg-[radial-gradient(hsl(var(--foreground)/0.3)_1px,transparent_1px)]',
      [PATTERN_BACKGROUND_VARIANT.BigDot]:
        'bg-[radial-gradient(hsl(var(--foreground)/0.3)_3px,transparent_3px)]',
    },
    size: {
      xs: 'bg-[size:8px_8px]',
      sm: 'bg-[size:16px_16px]',
      md: 'bg-[size:24px_24px]',
      lg: 'bg-[size:32px_32px]',
    },
  },
  defaultVariants: {
    variant: 'grid',
    size: 'md',
  },
});

export const PATTERN_BACKGROUND_MASK = {
  Ellipse: 'ellipse',
  EllipseTop: 'ellipse-top',
};

export const patternBackgroundMaskVariants = cva('bg-background', {
  variants: {
    mask: {
      [PATTERN_BACKGROUND_MASK.Ellipse]:
        '[mask-image:radial-gradient(ellipse_at_center,transparent,black_80%)]',
      [PATTERN_BACKGROUND_MASK.EllipseTop]:
        '[mask-image:radial-gradient(ellipse_at_top,transparent,black_80%)]',
    },
  },
  defaultVariants: {
    mask: 'ellipse',
  },
});

export { default as PatternBackground } from './PatternBackground.vue';
