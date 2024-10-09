export interface FeaturedBundleCardProp {
  destination: string;
  dates: string;
  price: number;
  imgSrc: string;
}

export interface FeaturedBundleComponentProps {
  bundles: FeaturedBundleCardProp[];
}

export interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
