

const  PageContainer = ({title,children,className}) => {
    return ( 
        <main className="page">
            <h1>{title}</h1>
           {/* this (className|| '')} means if it has name render it otherwise render empty */}
            {/* <div className={"container " + (className|| '')}> */}
            <div>
            {children}
            </div>
        </main>
     );
}
 
export default  PageContainer;