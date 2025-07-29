import { ReactElement } from "react";

export type Post = {
  slug: string; // url slug
  title: string; // post title
  date: string; // date format - YYYY-MM-DDT00:00:00
  coverImage: string; // pub image set, TODO: org into folders
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  tags?: string[];
  categories?: string[];
  preview?: boolean;
};

export type MDXPost = {
  content: ReactElement;
  frontmatter: Post;
  slug: string;
};
