export interface IImage {
  url: string | null;
  href?: string;
  clickAction?: (event?: MouseEvent) => void;
  caption?: string;
  title?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
}
