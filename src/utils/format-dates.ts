import { parseISO, format } from "date-fns";

export const formatBlogDate = (dateString: string): string => {
  const date = parseISO(dateString);

  return format(date, "LLLL	d, yyyy");
};

export const pluckYear = (date: Date): string => {
  return format(date.toString(), "yyyy");
};

export const baseDateFormat = (date: Date): string => {
  return format(date.toString(), "MMMM yyyy");
};
