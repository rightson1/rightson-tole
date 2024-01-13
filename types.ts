export interface TimeType {
  time: number;
  type: "before" | "after" | "last";
}
export interface OpenProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export type TImage = {
  fields: {
    title: string;
    file: {
      url: string;
    };
  };
};
export interface IProject {
  title: string;
  slug: string;
  author: string;
  coverImage: TImage;
  content: any;
  priority: number;
  excerpt: string;
  date: string;
  featuredImage: TImage;
  link: string;
  images: TImage[];
  index: number;
}
export interface IBlog {
  title: string;
  slug: string;
  author: string;
  featuredImage: TImage;
  content: any;
  excerpt: string;
  date: string;
}
