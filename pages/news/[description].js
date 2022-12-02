const ArticleListByCategory = ({articles, description}) => {

    return(

        <> 
    
        <h1>Showing News For Description <i>{description}</i></h1>

        {
            articles.map(article => {

                return(

                    <div key = {article.id}>

                        <h2>{article.id} {article.title}</h2>

                        <p>{article.description}</p>

                    <hr/>
                    </div>
                )

            })
        }
        
        
        
        </>

    )
}

export default ArticleListByCategory


export const getServerSideProps = async(context) => {




const {params, req, res, query} = context
const {description} = params

console.log(req.headers.cookie)
console.log(query)


res.setHeader('Set-Cookie', ['name=Fento'])


const response = await fetch(`http://localhost:4000/news?description=description${description}`)

const data = await response.json()  

return{

    props : {

        articles : data, 

        description,

    }
}

}