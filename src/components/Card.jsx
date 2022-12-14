import Avatar from "./Avatar"
import Detail from "./Detail"

function Card(props) {
    return <div className="card">
        <div className="top">
            <p>{props.id}</p>
            <h2 className="name">{props.name}</h2>
            <Avatar
                imgURL={props.imgURL}
            />
        </div>
        <div className="bottom">
            <Detail contactDetail={props.phone} />
            <Detail contactDetail={props.email} />
        </div>
    </div>
}

export default Card