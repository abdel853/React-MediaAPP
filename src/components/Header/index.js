import appName from "../../includes/variables"
import {FaBeer} from'react-icons/fa';
import './styles.scss';
import MainMenu from "../MainMenu";

export default function Header(){
   return(
      <>
    <header className="main">
       <FaBeer/>
       
       <div>{appName}</div>
    </header>

   <MainMenu/>
   </>
    )
}