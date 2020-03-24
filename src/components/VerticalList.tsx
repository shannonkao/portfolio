import React from 'react';
import '../styles/VerticalList.css';

interface ListItem {
  title: string;
  year: number;
  description?: string;
  pages: string[];
}

class VerticalList extends React.Component {
  protected comics: ListItem[] = [
    { pages: ["caves-1.png", "caves-2.png"], title: "Echoes", year: 2019},
    { pages: ["remains-1.png", "remains-2.png"], title: "What remains?", year: 2019},
    { pages: ["fires-1.png", "fires-2.png"], title: "Friends at the Table - Twilight Mirage", year: 2018},
    { pages: ["summer-1.png", "summer-2.png"], title: "Summer", year: 2018},
    { pages: ["rgu-stairs.jpg"], title: "Falling down the stairs of your smile", year: 2019},
    { pages: ["winter.png"], title: "for the coldest months", year: 2019},
    { pages: ["smoke.png"], title: "Smoke", year: 2018}
  ]

  protected getRows(): JSX.Element[] {
    let rows = [];
    for (const comic of this.comics) {
      rows.push(<div className="list-row" key={`row_${rows.length}`}>
        <div className="list-items">
          {comic.pages.map((el, i) => {
            console.log(`../img/comics/${el}`)
            return <div className="wrapper" key={i}>
              <img src={require(`../img/comics/${el}`)} alt="Comic page" />
            </div>
          })}
        </div>
        <div className="list-header">
          {`${comic.title} (${comic.year})`}
        </div>
      </div>)
    }
    return rows;
  }

  render() {
    return <div className="list">
      {this.getRows()}
    </div>;
  }
}

export default VerticalList;
