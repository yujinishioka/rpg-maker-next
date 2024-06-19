import { htmlPurify } from "@/libs/html-purify";
import { createElement } from "react";

type Props = {
  text: string,
  className?: string,
  tag?: string,
}

const Html = ({ text, className, tag }: Props) => {
  const newTag = tag ?? 'div';
  return createElement(newTag, {
    className,
    dangerouslySetInnerHTML: htmlPurify(text)
  });
}

export default Html;