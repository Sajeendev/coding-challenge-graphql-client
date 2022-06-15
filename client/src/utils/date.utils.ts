import { format } from 'date-fns';

/**
 * Check if dates is equal
 */
export const isEqualDates = (
  year: number,
  month: number,
  day: number,
  dataParam: Date
) => {
  return (
    format(new Date(dataParam), 'dd/MM/yyyy') ===
    format(new Date(year, month, day), 'dd/MM/yyyy')
  );
};
