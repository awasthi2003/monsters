import { Component } from "react";
class CardList extends Component{
    render(){
        
        const {monsters} = this.props;
        console.log(monsters)
        return (
            <div className="card-list">
            {monsters.map((monster)=>{
                const {name , id ,email} = monster;
                return (
            })}
            </div>
            
        );
    }
};
export  default CardList