import { formatBlogDate } from "@/utils/format-dates";

interface DateFormatterProps {
  dateString?: string;
}

const DateFormatter: React.FC<DateFormatterProps> = ({ dateString }) => {
  if (!dateString) {
    return null;
  }
  return <time dateTime={dateString}>{formatBlogDate(dateString)}</time>;
};

export default DateFormatter;
