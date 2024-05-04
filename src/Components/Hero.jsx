import { useMediaQuery } from "react-responsive";
import Form from "./Form"


const image  = "https://images.unsplash.com/photo-1506377711776-dbdc2f3c20d9?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"



const Hero = ({setActive}) => {

const isMobile = useMediaQuery({ maxWidth: 960 });

const hero = {
    background: isMobile ?'#F8FAFC': `url(${image})`,
    backgroundSize:'cover'
}

  return (
    <div style={hero} className=" w-full md:py-[2%] py-[5%] md:px-[15%] px-[5%] flex flex-col md:flex-row md:justify-between justify-center object-fill">
        <div className="my-7 text-center">
            <p className="text-4xl font-bold">Online loans <br /> simple and fast</p>
            <p className="md:text-3xl text-2xl mt-2">Apply now for easy <br /> same day funding.</p>
        </div>

        <Form setActive={setActive}/>
    </div>
  )
}

export default Hero