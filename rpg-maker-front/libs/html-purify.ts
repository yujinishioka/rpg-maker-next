import DOMPurify from 'isomorphic-dompurify';

/**
 * HTML to React
 */
export function htmlPurify(html: string) {
  const htmlClean = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      "iframe",
      "strong",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "br",
      "a",
    ],
    ADD_ATTR: [
      'allow', 'allowfullscreen', 'frameborder', 'scrolling', 'target', 'rel', 'src', 'width', 'height'
    ],
    ADD_TAGS: ['a'],
    FORBID_ATTR: ['style'],
  });
  return { __html: htmlClean };
}