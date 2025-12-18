import cardProfile from "../db/dataProfile"
import CardProfile from "./CardProfile"

const ListProfile = () => {
    const dataProfile = cardProfile.perfil
  return (
    <section className="py-20 px-5 lg:px-10" id="entrenadores">
      <h1
        className="text-white font-title uppercase tracking-widest leading-none
               text-4xl md:text-5xl mb-14 "
      >
         Nuestros <span className="text-primary">Entrenadores</span>
      </h1>
       <div  className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end place-items-center md:place-items-stretch lg:place-items-center ">
       {
        dataProfile.map((datosPerfil,id)=>{
            return <CardProfile datosPerfil={datosPerfil} key={id} />
        })
       }
       </div> 
    </section>
  )
}

export default ListProfile