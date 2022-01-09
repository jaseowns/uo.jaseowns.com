import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { Link } from "react-router-dom";

import stylesUrl from "../../styles/starter-items.css";


interface IStarterSkill 
{
  name: string
  items: string[]
  stats: string[]
}

const skillStarterItems: IStarterSkill[] = [
  {
    name: 'Alchemy',
    items: [ 'MortarPestle x2', 'Bottle x10', 'HealPotion x5' ],
    stats: [ 'Int' ]
  },
  {
    name: 'Anatomy',
    items: [ 'Bandage x100' ],
    stats: [ 'Str' ]
  },
  {
    name: 'AnimalLore',
    items: [ 'Bandage x100' ],
    stats: [ 'Int' ]
  },
  {
    name: 'AnimalTaming',
    items: [],
    stats: [ 'Str', 'Int' ]
  },
  {
    name: 'Archery',
    items: [ 'Bow', 'Arrow x500' ],
    stats: [ 'Dex' ]
  },
  {
    name: 'ArmsLore',
    items: [ 'Bandage x100' ],
    stats: [ 'Str' ]
  },
  {
    name: 'Begging',
    items: [],
    stats: [ 'Str', 'Dex' ]
  },
  {
    name: 'Blacksmith',
    items: [ 'Tongs x2', 'Pickaxe x2'],
    stats: [ 'Str' ]
  },
  {
    name: 'Camping',
    items: [ 'Saw', 'Hatchet', 'Skillet' ],
    stats: [ 'Str' ]
  },
  {
    name: 'Carpentry',
    items: [ 'Saw x2', 'Hatchet x2'],
    stats: [ 'Str' ]
  },
  {
    name: 'Cartography',
    items: [ 'MapmakersPen x2', 'Spyglass', 'Shovel' ],
    stats: [ 'Int' ]
  },
  {
    name: 'Chivalry',
    items: [],
    stats: [ 'Str', 'Dex' ]
  },
  {
    name: 'Cooking',
    items: [ 'Skillet x3'],
    stats: [ 'Int' ]
  },
  {
    name: 'DetectHidden',
    items: [],
    stats: [ 'Int', 'Int' ]
  },
  {
    name: 'Discordance',
    items: ['Random Instrument x2'],
    stats: ['Dex']
  },
  {
    name: 'EvalInt',
    items: [ 'Spellstone x250' ],
    stats: [ 'Int' ]
  },
  {
    name: 'Fencing',
    items: [ 'WarFork' ],
    stats: [ 'Dex' ]
  },
  {
    name: 'Fishing',
    items: [ 'FishingPole x3'],
    stats: [ 'Str' ]
  },
  {
    name: 'Forensics',
    items: [ 'SkinningKnife x3'],
    stats: [ 'Dex' ]
  },
  {
    name: 'Healing',
    items: [ 'Bandage x150' ],
    stats: [ 'Dex' ]
  },
  {
    name: 'Herding',
    items: [ 'ShepherdsCrook' ],
    stats: [ 'Str' ]
  },
  {
    name: 'Hiding',
    items: [],
    stats: [ 'Dex', 'Dex' ]
  },
  {
    name: 'Inscribe',
    items: [ 'ScribesPen x3', 'Spellstone x250' ],
    stats: [ 'Int' ]
  },
  {
    name: 'ItemID',
    items: [],
    stats: [ 'Int', 'Int' ]
  },
  {
    name: 'Lockpicking',
    items: [ 'Lockpicks x2', 'TrapTool x2'],
    stats: [ 'Dex' ]
  },
  {
    name: 'Lumberjacking',
    items: [ 'Hatchet x2', 'Saw', 'Axe' ],
    stats: [ 'Str' ]
  },
  { name: 'Macing', items: [ 'Mace' ], stats: [ 'Dex' ] },
  {
    name: 'Magery',
    items: [ 'SpellBook (8 spells)', 'Spellstone x250' ],
    stats: [ 'Int' ]
  },
  {
    name: 'MagicResist',
    items: [],
    stats: [ 'Str', 'Int' ]
  },
  {
    name: 'Meditation',
    items: [ 'Spellstone x250' ],
    stats: [ 'Int' ]
  },
  {
    name: 'Mining',
    items: [ 'Pickaxe x2', 'Maul' ],
    stats: [ 'Str' ]
  },
  {
    name: 'Musicianship',
    items: [ 'Random Instrument x2'],
    stats: ['Dex']
  },
  {
    name: 'Necromancy',
    items: [ 'Spellstone x250' ],
    stats: [ 'Int' ]
  },
  {
    name: 'Parry',
    items: [ 'WoodenShield' ],
    stats: [ 'Str' ]
  },
  {
    name: 'Peacemaking',
    items: [ 'Random Instrument x2'],
    stats: ['Dex']
  },
  {
    name: 'Poisoning',
    items: [ 'PoisonPotion x5', 'CurePotion x5' ],
    stats: [ 'Dex' ]
  },
  {
    name: 'Provocation',
    items: [ 'Random Instrument x2'],
    stats: ['Dex']
  },
  {
    name: 'RemoveTrap',
    items: [ 'Lockpicks x2', 'TrapTool x2' ],
    stats: [ 'Dex' ]
  },
  {
    name: 'Snooping',
    items: [],
    stats: [ 'Dex', 'Dex' ]
  },
  {
    name: 'SpiritSpeak',
    items: [ 'Spellstone x250' ],
    stats: [ 'Int' ]
  },
  {
    name: 'Stealing',
    items: [],
    stats: [ 'Dex', 'Dex' ]
  },
  {
    name: 'Stealth',
    items: [],
    stats: [ 'Dex', 'Dex' ]
  },
  {
    name: 'Swords',
    items: [ 'Longsword' ],
    stats: [ 'Dex' ]
  },
  {
    name: 'Tactics',
    items: [],
    stats: [ 'Str', 'Dex' ]
  },
  {
    name: 'Tailoring',
    items: [ 'SewingKit x2', 'SkinningKnife x2' ],
    stats: [ 'Int' ]
  },
  {
    name: 'TasteID',
    items: [],
    stats: [ 'Int', 'Int' ]
  },
  {
    name: 'Tinkering',
    items: [ 'TinkerTools x2', 'Pickaxe x2' ],
    stats: [ 'Int' ]
  },
  {
    name: 'Tracking',
    items: [],
    stats: [ 'Dex', 'Int' ]
  },
  {
    name: 'Veterinary',
    items: [ 'Bandage x150' ],
    stats: [ 'Dex' ]
  },
  {
    name: 'Wrestling',
    items: [],
    stats: [ 'Str', 'Dex' ]
  }
];


export let meta: MetaFunction = () => {
  return {
    title: "Jaseowns Ultima Online Resources",
    description: "Jaseowns.com is the online dumping ground of Jason Ramsey. He's a developer, gamer, husband and father who has been a nerd owning people on the internet since dial up."
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let loader: LoaderFunction = async () => {
  return { message: "" };
};

export default function Index() {
  let data = useLoaderData();

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>UO Outlands Starting Items by Skill</h2>

      {/* <div className={"starter-skill-item-container example"}>
        <div>
            <b>Skill Name</b>
            <i>StatStones</i>
            <div>Items</div>
        </div>
      </div> */}

      <div className={"parent"}>
      {skillStarterItems.map(skill => {
        return <div key={`skills_key_${skill.name}`} className={"starter-skill-item-container"}>

          <b>{skill.name} <i>({skill.stats.map((stat, index) => {
            var extra = index > 0 ? "/" : "";
            return `${extra}${stat}`;
          })})</i></b>
          

          {skill.items.length > 0 ? 

        skill.items.map((item, index) => <div key={`items_key_${index}`} className={`item-icon icon_${item.split(" ")[0]}`}>
              {item}

        </div>)
    :   <div className={"no-items"}>no items</div>
        }
        </div>
      })}
      </div>
    </div>
  );
}