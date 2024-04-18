
const Card = ({ card }: any) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <img src={card.url} className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110" alt="23" />
      {/* <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div> */}
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Card