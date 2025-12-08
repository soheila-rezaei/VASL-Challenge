
function Game({data}){
return(
<div>
    <div>
        <img src={data.image} alt={data.name} />
        <p>{data.name}</p>
     </div>
    
</div>
)
}
export default Game;
