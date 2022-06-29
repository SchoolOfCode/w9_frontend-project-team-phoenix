
export default function List({ data }){
    if(data.contact_id === null){
        return(
        <div className="main-container">
            <div className="info-container">
                <h2 className="section-heading">{data.catagory_name}</h2> 
                <p className="docs-content-title">{data.title}</p>
                <p className="docs-content-name">{data.name}</p>
                <p className="docs-content">{data.content}</p>
                <a className="docs-link" href={data.url}>{data.title}</a>
            </div>
        </div>)
        } else { 
            return(
                <div className="main-container">
                    <div className="info-container">
                        <h2>{data.description}</h2>
                        <h2 className="section-heading">{data.name}</h2> 
                        <p className="docs-content-title">{data.heading}</p>
                        <p className="docs-content-twitter">{data.twitter}</p>
                        <p className="docs-content-linkedin">{data.linkedin}</p>
                    </div>
                </div>
            )
        }
    }

