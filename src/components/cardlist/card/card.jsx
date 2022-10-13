import "./card.css";
const Card = ({name,id,email})=> {
        return (
            <div className="card-container">
            <img src = {`https://robohash.org/${id}?set=set2&size=300x300`} alt = {`This is Monster ${name}`}/>
            <h2>{name}</h2>
            <p>{email}</p>
            </div>
            );
};
export  default Card