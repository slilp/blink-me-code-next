import { Tag, TagColor } from "./enum";

export const mapToColorTag = (tag: Tag) => {
  switch (tag) {
    case Tag.REACT:
      return TagColor.REACT;
    case Tag.NEST:
      return TagColor.NEST;
    case Tag.NEXT:
      return TagColor.NEXT;
    case Tag.NODE:
      return TagColor.NODE;
    case Tag.GO:
      return TagColor.GO;
    case Tag.BLOCK:
      return TagColor.BLOCK;
    default:
      return TagColor.OTHER;
  }
};
