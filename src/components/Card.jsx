import { cardInfo } from "../constants/cardInfo.js";

const Card = () => {
  return (
    <article className="card">
      <img src={cardInfo.bgImage} alt="illustration" className="w-full rounded-lg mb-6" />
      <div className="flex justify-center items-center bg-bg-yellow w-20 h-6 mb-3">
        <h2 className="text-preset-4">{cardInfo.subject}</h2>
      </div>
      <p className="text-preset-3 mb-4">Published {cardInfo.date}</p>
      <h1 className="text-preset-1 mb-4 hover:text-bg-yellow hover:cursor-pointer">{cardInfo.title}</h1>
      <p className="text-preset-2 mb-6">{cardInfo.summary}</p>
      <div className="flex items-center">
        <img src={cardInfo.authorImg} alt={cardInfo.author + " image"} className="h-10 w-10 mr-3" />
        <p className="text-preset-4">{cardInfo.author}</p>
      </div>
    </article>
  );
};

export default Card;
