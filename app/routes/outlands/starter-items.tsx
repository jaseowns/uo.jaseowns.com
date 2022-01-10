import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import { useLoaderData } from "remix";
import { Link } from "react-router-dom";

import stylesUrl from "../../styles/starter-items.css";

interface ISkillKey
{
  name: string
  value: string
}

interface IStarterTemplate
{
  name: string
  items: string[]
  skills: ISkillKey[]
}

interface IStarterSkill 
{
  name: string
  items: string[]
  stats: string[]
}

const skillTemplates: IStarterTemplate[] = [
  {
    name: 'Bard',
    items: ['Random Instrument x4', 'SpellBook (8 spells)', 'Spellstone x250'],
    skills: [
      { name: "Musicianship", value: "50"},
      { name: "Discordance", value: "50"},
      { name: "Peacemaking", value: "50"},
      { name: "Provocation", value: "50"},
      { name: "Magery", value: "50"},
    ]
  },
  {
    name: 'Blacksmith',
    items: ['Tongs x2', 'Pickaxe x4', 'TinkerTools x3', 'Maul'],
    skills: [
      { name: "Blacksmith", value: "50"},
      { name: "Tinkering", value: "50"},
      { name: "Mining", value: "50"},
      { name: "Macing", value: "50"}
    ]
  },
  {
    name: 'Lumberjack',
    items: ['Hatchet x5', 'Saw x4', 'Skillet', 'Axe', 'Maul'],
    skills: [
      { name: "Lumberjacking", value: "50"},
      { name: "Carpentry", value: "50"},
      { name: "Camping", value: "50"},
      { name: "Swords", value: "50"}
    ]
  },
  {
    name: 'Mage',
    items: ['SpellBook (8 spells)', 'Spellstone x750'],
    skills: [
      { name: "Magery", value: "50"},
      { name: "Meditation", value: "50"},
      { name: "EvalInt", value: "50"},
      { name: "Wrestling", value: "50"}
    ]
  },
  {
    name: 'Ranger',
    items: ['Bow', 'Arrow x500', 'Bandage x150', 'Hatchet x2', 'Saw', 'Axe'],
    skills: [
      { name: "Archery", value: "50"},
      { name: "Tracking", value: "50"},
      { name: "Healing", value: "50"},
      { name: "Lumberjacking", value: "25"},
      { name: "Carpentry", value: "25"}
    ]
  },
  {
    name: 'Tamer',
    items: ['Bandage x350', 'ShepherdsCrook'],
    skills: [
      { name: "AnimalTaming", value: "50"},
      { name: "AnimalLore", value: "50"},
      { name: "Veterinary", value: "50"},
      { name: "Herding", value: "50"}
    ]
  },
  {
    name: 'Warrior',
    items: ['WarFork', 'Mace', 'Longsword', 'WoodenShield', 'Bandage x150'],
    skills: [
      { name: "Fencing", value: "50"},
      { name: "Macing", value: "50"},
      { name: "Swords", value: "50"},
      { name: "Tactics", value: "50"},
      { name: "Parry", value: "50"},
      { name: "Healing", value: "50"},
    ]
  },
]

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
    title: "UO Outlands Starting Items by Skill",
    description: "This page breaks down what items each skill grants you when creating a new character on UO Outlands.",
    "og:image": "https://uo.jaseowns.com/images/meta-data/outlands/starter-items.png"
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

      <h2>UO Outlands Starting Templates</h2>

      
      <div className={"parent-template"}>

      <div className={"starter-skill-item-container"}>
        <b>Template Selection</b>
        <div>Bard: 250 skill points</div>
        <div>Blacksmith: 200 skill points</div>
        <div>Lumberjack: 200 skill points</div>
        <div>Mage: 200 skill points</div>
        <div>Ranger: 200 skill points</div>
        <div>Tamer: 200 skill points</div>
        <div>Warrior: 300 skill points</div>
      </div>

      {skillTemplates.map(template => {
        return <div key={`template_key_${template.name}`} className={"starter-skill-item-container"}>

          {/* <b>{skill.name} <i>({skill.stats.map((stat, index) => {
            var extra = index > 0 ? "/" : "";
            return `${extra}${stat}`;
          })})</i></b> */}
          
          <b>{template.name}</b>


          {template.skills.map((item, index) => <div key={`template_skills_key_${index}`}>
              {item.name} {item.value}
          </div>)}
          <b></b>
          {template.items.length > 0 ? 

        template.items.map((item, index) => <div key={`template_items_key_${index}`} className={`item-icon icon_${item.split(" ")[0]}`}>
              {item}

        </div>)
    :   <div className={"no-items"}>none</div>
        }
        </div>
      })}
      </div>

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

          {/* <b>{skill.name} <i>({skill.stats.map((stat, index) => {
            var extra = index > 0 ? "/" : "";
            return `${extra}${stat}`;
          })})</i></b> */}
          
          <b>{skill.name}</b>

          {skill.items.length > 0 ? 

        skill.items.map((item, index) => <div key={`items_key_${index}`} className={`item-icon icon_${item.split(" ")[0]}`}>
              {item}

        </div>)
    :   <div className={"no-items"}>none</div>
        }
        </div>
      })}
      </div>
    </div>
  );
}