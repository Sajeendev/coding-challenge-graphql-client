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
