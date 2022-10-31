import { format } from 'date-fns';

/**
 * Check if dates is equal
 */
export const isEqualDates = (date: string, dataParam: Date) => {
  return (
    format(new Date(dataParam), 'dd/MM/yyyy') ===
    format(new Date(date), 'dd/MM/yyyy')
  );
};

export const formatDateShort = (date: Date | string) => {
  // 08 Nov 2021
  if (date) {
    return format(new Date(date), 'dd MMM yyyy');
  }

  return '';
};

export const formatTimeShort = (date: Date | string) => {
  // 08 Nov 2021
  if (date) {
    return format(new Date(date), 'h:m a');
  }

  return '';
};
