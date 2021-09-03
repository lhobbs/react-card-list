import React from 'react'

const Card = (props) => {
  return (<>
    <div className="Card" style={{backgroundColor: props.item.backgroundColor}}>
      <img src={props.item.avatarUrl} alt="avatar" />
      <div className="CardContent">
        <h4>{props.item.title}</h4>
      </div>
    </div>
    </>
  );
};

export default Card;