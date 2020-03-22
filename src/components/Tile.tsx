import React from 'react';
import '../styles/Tile.css';

interface TileProps {
    paths: string[];
    direction?: "col" | "row";
}

function Tile(props: TileProps) {
  return (
    <div className={`tile ${props.direction || "row"}`}>
        {props.paths.map((el, i) => {
            if (!el) return;
            return <div className="wrapper" key={i}>
                <img src={require(`../img/${el}`)} alt="Portfolio image" />
            </div>
        })}
    </div>
  );
}

export default Tile;
