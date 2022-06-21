
export default function List({ data }){
    console.log(data, "category name")
    return(
        <div className="main">
                <div className="info-container">
                    <h2 className="section-heading">{data.catagory_name}</h2> 
                    <p className="docs-content">{data.title}</p>
                    <p className="docs-content">{data.name}</p>

                </div>
            </div>
    )
}