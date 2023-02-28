import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard(props) {
  const {id, poke:{name, hp, sprites:{front, back}}} = props;
  const [isFront, setIsFront] = useState(true);
  return (
    <Card id={id}>
      <div onClick={e => setIsFront(!isFront)}>
        <div className={name}>
          <img alt="oh no!" src={isFront? front : back}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
