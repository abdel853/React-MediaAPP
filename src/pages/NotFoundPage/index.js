import PageContainer from "../../components/PageContainer";
import { Link } from "react-router-dom";

export default function NotFoundPage(){
    return(
        <PageContainer title='Page Not Found'>
            <p>Please, check the Address</p>
            <ul>
                <li>
                    <Link to='/'>Click here</Link> to go to the initial page
                </li>
            </ul>
        </PageContainer>
    )
}