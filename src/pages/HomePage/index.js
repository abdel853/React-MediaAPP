// import '../../components/PageContainer';
import PageContainer from '../../components/PageContainer';
import Posts from '../../components/Posts';

export default function HomePage(){
    return(
        
        <PageContainer title=' Welcome to my App'>

            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in</p>
            <p>graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in</p>
            
            <h2>Promoted Posts:</h2>
            <Posts  showOnlyPromoted={true}/>
        </PageContainer>
    );
}