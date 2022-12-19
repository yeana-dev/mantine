import { createStyles, MantineNumberSize } from '@mantine/core';

export const sizes = {
  xs: 30,
  sm: 36,
  md: 42,
  lg: 48,
  xl: 54,
};

export interface DayStylesParams {
  radius: MantineNumberSize;
  isStatic: boolean;
}

export default createStyles((theme, { radius, isStatic }: DayStylesParams, { size }) => {
  const colors = theme.fn.variant({ variant: 'filled' });
  const lightColors = theme.fn.variant({ variant: 'light' });
  return {
    day: {
      width: theme.fn.size({ size, sizes }),
      height: theme.fn.size({ size, sizes }),
      fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      userSelect: isStatic ? undefined : 'none',
      cursor: isStatic ? 'default' : 'pointer',
      borderRadius: theme.fn.radius(radius),
      ...(isStatic
        ? null
        : theme.fn.hover({
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
          })),

      '&:active': isStatic ? undefined : theme.activeStyles,

      '&[data-disabled]': {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
        cursor: 'not-allowed',
        ...theme.fn.hover({ backgroundColor: 'transparent' }),

        '&:active': {
          transform: 'none',
        },
      },

      '&[data-weekend]': {
        color: theme.colors.red[theme.fn.primaryShade()],
      },

      '&[data-outside]': {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
      },

      '&[data-in-range]': {
        backgroundColor: lightColors.background,
        borderRadius: 0,
        ...(isStatic ? null : theme.fn.hover({ backgroundColor: lightColors.hover })),
      },

      '&[data-first-in-range]': {
        borderTopLeftRadius: theme.radius.sm,
        borderBottomLeftRadius: theme.radius.sm,
      },

      '&[data-last-in-range]': {
        borderTopRightRadius: theme.radius.sm,
        borderBottomRightRadius: theme.radius.sm,
      },

      '&[data-selected]': {
        color: colors.color,
        backgroundColor: colors.background,
        ...(isStatic ? null : theme.fn.hover({ backgroundColor: colors.hover })),
      },

      '&[data-hidden]': {
        display: 'none',
      },
    },
  };
});