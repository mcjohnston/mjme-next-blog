export type Post = {
  slug: string; // url slug
  title: string; // post title
  date: string; // date TODO: format?
  coverImage: string; // pub image set, TODO: org into folders
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
