import React from 'react';
import Tile from './Tile';
import '../styles/Grid.css';

interface GridState {
  columns: number;
}

interface TileImage {
  paths: string[];
  column: number;
  z: number;
  direction?: "col" | "row";
}

class Grid extends React.Component<{}, GridState> {
  protected tileNames: TileImage[] = [
    { paths: ["yc/yc-cover.png"], column: 0, z: 0}, 
    { paths: ["yc/l_plants.jpg"], column: 0, z: 5},
    { paths: ["mail-2.png"], column: 0, z: 10}, 
    { paths: ["garden.png"], column: 0, z: 12},
    { paths: ["doorway.png"], column: 0, z: 15},
    { paths: ["discworld-tiffany.png"], column: 0, z: 20},
    { paths: ["roadtrip-golem.png"],  column: 0, z: 25},
    { paths: ["lake.png"],  column: 0, z: 30},

    { paths: ["roadtrip-bison.png"], column: 1, z: 0}, 
    { paths: ["mail-1.png"],  column: 1, z: 5},
    { paths: ["krz.png"],  column: 1, z: 10},
    { paths: ["fatt-icon-1.jpg", "fatt-icon-2.jpg"],  column: 1, z: 15},
    { paths: ["vast.png"],  column: 1, z: 20},
    { paths: ["motel.png"],  column: 1, z: 25},
    { paths: ["roadtrip-baishe.png"],  column: 1, z: 30},
    { paths: ["city-1.png"],  column: 1, z: 40},
    
    { paths: ["phone-1.png"], column: 2, z: 2},
    { paths: ["phone-2.png"], column: 2, z: 4},
    { paths: ["deer.png"], column: 2, z: 5}, 
    { paths: ["fatt-mystery.png"], column: 2, z: 10},
    { paths: ["fatt-sun.png"], column: 2, z: 15},
    { paths: ["forged.png"], column: 2, z: 20},
    { paths: ["roadtrip-jackal.png"], column: 2, z: 25},
    { paths: ["city-2.png"], column: 2, z: 30}
  ];

  constructor(props: {}) {
    super(props);
    this.state = { columns: this.getColumnCount() };
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  protected onResize = () => {
    let count = this.getColumnCount();
    if (count !== this.state.columns) {
      this.setState({ columns: count });
    }
  }

  protected getColumnCount(): number {
    return window.innerWidth < 900 ? 2 : 3;
  }

  protected getColumns(): JSX.Element[] {
    let columns = [];
    let count = this.state.columns;
    for (let col = 0; col < count; col++) {
      columns.push(<div className="grid-column" key={`col_${col}`}>
        {this.tileNames
          .filter((el, i) => { return el.column < count ? el.column === col : i % count === col })
          .sort((a, b) => { return a.z > b.z ? 1 : -1 })
          .map((el, j) => {
            return <Tile key={`im_${col}_${j}`} paths={el.paths} direction={el.direction} />
          })

        }
      </div>)
    }
    return columns;
  }

  render() {
    return <div className="grid">
      {this.getColumns()}
    </div>;
  }
}

export default Grid;
