
export default function List({ data }){
    if(data.contact_id === null){
        return(
        <div className="main">
            <div className="info-container">
                <h2 className="section-heading">{data.catagory_name}</h2> 
                <p className="docs-content">{data.title}</p>
                <p className="docs-content">{data.name}</p>
                <p className="docs-content">{data.content}</p>
                <a href={data.url}>{data.title}</a>

        </div>
    </div>)
    }else{ 
        return(
            <div className="main">
                    <div className="info-container">
                        <h2>{data.description}</h2>
                        <h2 className="section-heading">{data.name}</h2> 
                        <p className="docs-content">{data.heading}</p>
                        <p className="docs-content">{data.twitter}</p>
                        <p className="docs-content">{data.linkedin}</p>

                </div>
            </div>
    )
        }
}