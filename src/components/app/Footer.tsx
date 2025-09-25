import ContactMe from "./ContactMe"

const Footer = () => {
  return (
    <div className="bg-accent w-full">
        <ContactMe/>
        <p className="text-foreground text-center font-semibold">Website desenvolvido por Vinicyos</p>
        <p className="text-center text-sm">&copy; Copyright. Todos os direitos reservados</p>
    </div>
  )
}

export default Footer