import Card from "./Card";

function CardsContainer({ imgs, handleClick }) {
  return (
    <div className="cards">
      {imgs.map((img, index) => {
        return (
          <Card
            imgUrl={img.url}
            handleClick={() => handleClick(index)}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default CardsContainer;
