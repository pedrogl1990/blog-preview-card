import { formattedDate } from "../utilities/dateFormatter";
import authorImg from "../assets/images/image-avatar.webp";
import illustrationImage from "../assets/images/illustration.svg";

export const cardInfo = {
  bgImage: illustrationImage,
  subject: "Learning",
  date: formattedDate(new Date("2023-12-21")),
  title: "HTML & CSS foundations",
  summary: "These languages are the backbone of every website, defining structure, content, and presentation.",
  authorImg: authorImg,
  author: "Greg Hooper",
};
