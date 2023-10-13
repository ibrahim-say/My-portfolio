

function Title(props){
    return(
<div className="text-center">
<p className=""style={{color:"rgb(85, 85, 85)"}}>{props.paragraph}</p>
<h1 style={{fontWeight:"bold"}}>{props.title}</h1>
</div>
    )
}

export default Title