import cardGym from "../db/data";
import Card from "./Card";

const ListCard = () => {
    const card = cardGym.planes
  return (
    <section className="py-20 px-5 lg:px-10" id="planes">
      <h1
        className="text-white font-title text-center uppercase tracking-widest leading-none
               text-4xl md:text-5xl mb-14 "
      >
        Planes de <span className="text-primary">Entrenamiento</span>
      </h1>
      <div  className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
       {
        card.map((datos,id)=>{
            return <Card datos={datos} key={id} />
        })
       }
       </div>
    </section>
  );
};

export default ListCard;
