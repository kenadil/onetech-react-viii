export interface PaddingProps {
  padding?: string;
}

export interface TextProps {
  fontSize?: string;
  textAlign?: string;
  fontWeight?: string;
  padding?: string;
  activated?: boolean;
  icon?: string;
}

export interface SlideProps {
  textAlign?: string;
  background?: string;
  colored?: boolean;
}

export interface PageLinkProps {
  background?: string;
  activated?: boolean;
}

export interface BannerList {
  banners: Banner[];
}

// types
export type Banner = {
  url: string | undefined;
  children: React.ReactNode;
};
