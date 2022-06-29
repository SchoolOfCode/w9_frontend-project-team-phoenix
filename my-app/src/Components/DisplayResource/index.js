
export default function DisplayResource({ data }){
    if(data.contact_id === null){
        return(
        <div className="resource-page-container">
            <div className="resource-container">
                <h2 className="section-heading">{data.catagory_name}</h2> 
                <p className="content-title">{data.title}</p>
                <p className="content-name">{data.name}</p>
                <p className="content">{data.content}</p>
                <a className="link" href={data.url}>{data.title}</a>
            </div>
        </div>)
        } else { 
            return(
                <div className="resource-page-container">
                    <div className="resource-container">
                        <h2>{data.description}</h2>
                        <h2 className="section-heading">{data.name}</h2> 
                        <p className="content-title">{data.heading}</p>
                        <p className="content-twitter">{data.twitter}</p>
                        <p className="content-linkedin">{data.linkedin}</p>
                    </div>
                </div>
            )
        }
    }

