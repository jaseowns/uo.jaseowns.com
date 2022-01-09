import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import ColorMapping from "../../../resources/colorMapper.json";

import stylesUrl from "../../styles/hues.css";

export let meta: MetaFunction = () => {
  return {
    title: "UO Razor Hue Resource",
    description: "This page shows all the available hues for system or overhead text coming out of razor.", 
    "og:image": "https://uo.jaseowns.com/images/meta-data/razor/hues.png"
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

interface IColorMap
{
    color: string
    id: number
}

export let loader: LoaderFunction = async () => {

    var colors = Object.keys(ColorMapping);
    var filteredColors: IColorMap[] = [];

    colors.map(element => {
        var matchingKey = ColorMapping[element];
        var matchingId  = matchingKey[0];
        filteredColors.push({color: element, id: matchingId});
    })

    function compare(a: IColorMap, b: IColorMap) {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        // a must be equal to b
        return 0;
      }

    filteredColors.sort(compare);


    return { colors: filteredColors  };
};

export default function Index() {
  let data = useLoaderData();

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>UO Razor Hues List</h2>

    Razor Default Hue
    <div className="hue-example default" style={{backgroundColor:"#18e800"}}><input defaultValue="68" className="hue-value" /></div>

    Razor Default Bandage Hue:
    <div className="hue-example default" style={{backgroundColor:"#00d0e8"}}><input defaultValue="88" className="hue-value" /></div>

<hr />
      {data.colors.map(element => {
          return <div key={element.id} className={"hue-example"} style={{backgroundColor: "#" + element.color}}>
              <input defaultValue={element.id} className={"hue-value"} />
              
            </div>
      })}
      <p>{data.message}</p>
    </div>
  );
}