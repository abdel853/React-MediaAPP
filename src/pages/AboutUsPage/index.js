import PageContainer from "../../components/PageContainer";
import { NavLink, Outlet } from "react-router-dom";

import './styles.scss';

export default function AboutUsPage(){
    return(
        <PageContainer title='About Us' className='about-us-page'>
        <article>    
           
           <Outlet />
           
    </article>  
    {/* side menu */}

    <aside>
        {/* end makes the button about us dont have the color when we do */}
        <NavLink to='/about-us' end>About Us</NavLink>
        <NavLink to='/about-us/mission'>Our Mission</NavLink>
        <NavLink to='/about-us/privacy'>Privacy Policy</NavLink>
    </aside>
        </PageContainer>
    );

}