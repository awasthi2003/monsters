
import Card from "./card/card"
import "./cardlist.css";
const CardList = ({monsters})=>{
        console.log(monsters)
        return (
            <div className="card-list">
            {monsters.map((monster)=>{
                const {name , id ,email} = monster;
                return (
                    <Card name={name} id = {id} email = {email}/>
                )
            })}
            </div>
            
        );
    
};
export  default CardList