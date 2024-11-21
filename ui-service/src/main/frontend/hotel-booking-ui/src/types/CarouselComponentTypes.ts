import { ComponentProps, ReactNode } from "react";
import Slider from "react-slick";

export interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export interface CarouselComponentProps {
  children: ReactNode;
  title?: string;
  sliderSettings?: Partial<ComponentProps<typeof Slider>>;
}
