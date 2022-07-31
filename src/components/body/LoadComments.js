import dateFormat from "dateformat";
function LoadComments(props) {
    console.log(props)
    return (
        <div>
            {
                props.comment.map(item =>{
                    return(
                        <div key={item.id}>
                        <h2>{item.author}</h2>
                        <p>{item.comment}</p>
                        <p>{dateFormat(item.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                        </div>
                    )
                })
            }
        </div>

      );
}

export default LoadComments;