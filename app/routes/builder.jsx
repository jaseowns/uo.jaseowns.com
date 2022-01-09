import { useLoaderData } from "remix";
import { Link, useNavigate } from "react-router-dom";
import React, {useCallback} from "react";
import { useQueryString, setLinkQueryString } from "../utils/querystring";
// import "../scss/SkillBuilder.scss"


import stylesUrl from "../styles/builder.css";

export let meta = () => {
  return {
    title: "UO Outlands Build Templates",
    description: "This tool helps you plan out or view different Ultima Online Outlands builds."
  };
};

export let links = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export let loader = async () => {
  return { message: "this is awesome 😎" };
};

export default function Index() {
  let data = useLoaderData();

  return (
    <div style={{ textAlign: "center", padding: 20 }} className="content">
      <SkillBuilder />
    </div>
  );
}


  var skillList =  [
    "Alchemy", "Anatomy", "Animal Lore", "Animal Taming", "Archery", "Arms Lore", "Begging", "Blacksmithy", "Camping", "Carpentry/Bowcraft", "Cartography", "Cooking", "Detecting Hidden", "Discordance", "Evaluating Intelligence", "Fencing", "Fishing", "Forensic Evaluation", "Healing", "Herding", "Hiding", "Inscription", "Item Identification", "Lockpicking", "Lumberjacking", "Mace Fighting", "Magery", "Meditation", "Mining", "Musicianship", "Parrying", "Peacemaking", "Poisoning", "Provocation", "Remove Trap", "Resisting Spells", "Snooping", "Spirit Speaking", "Stealing", "Stealth", "Swordsmanship", "Tactics", "Tailoring", "Taste Identification", "Tinkering", "Tracking", "Veterinary", "Wrestling"
  ];

  var skillListDetails = {
      "Alchemy": {
        wiki: "https://uooutlands.com/wiki/Alchemy",
        razorName: "Alchemy",
        description: "Increase Duration on Potions.",
        pvm: function(skillValue) {
            const result = (50 * (skillValue / 100));
            return "Heal " + result.toFixed(2) + "%";
        },
        pvp: function(skillValue) {
            const result = (25 * (skillValue / 100));
            return "Heal " + result.toFixed(2) + "%";
        },
        general: function(skillValue) {
            const result = (500 * (skillValue / 100));
            return result.toFixed(2) + "% Duration";
        },
      },"Anatomy": {
        wiki: "https://uooutlands.com/wiki/Anatomy",
        razorName: "Anatomy",
        description: "Need 60 to cure, 80 to res. Combat impact adds DMG to each swing",
        pvp: function(skillValue) {
            let baseDmg = 25;
            const result = (baseDmg * (.2 * (skillValue / 100)));
            return "DMG +" + result.toFixed(2);
        },
        pvm: function(skillValue) {
            let baseDmg = 25;
            const result = (baseDmg * (.2 * (skillValue / 100)));
            return "DMG +" + result.toFixed(2);
        }
      }, "Animal Lore": {
        wiki: "https://uooutlands.com/wiki/Animal_Lore",
        razorName: "AnimalLore",
        description: "Stable Slots: 8 + (Animal Lore Skill / 10)",
        general: function(skillValue) {
            const result = Math.floor(8 + (skillValue / 10));
            return "Stable Slots: " + result;
        }
      }, "Animal Taming": {
        wiki: "https://uooutlands.com/wiki/Animal_Taming",
        razorName: "AnimalTaming",
        description: "You can have followers!"
      }, "Archery": {
        wiki: "https://uooutlands.com/wiki/Archery",
        razorName: "Archery",
        description: "Weapon Special: Hinders the target (prevents all movement, casting, melee attacks) for 4-8 seconds",
        pvm: "WS 10%",
      }, "Arms Lore": {
        wiki: "https://uooutlands.com/wiki/Arms_Lore",
        razorName: "ArmsLore",
        description: "Chance to ignore durability losses to weapons, armors, and shields from attacking and parrying is 75% * (Arms Lore Skill / 100)",
        disarm: true,
        hamstring: true,
        pvm: function(skillValue) {
            const result = (10 * (skillValue / 100));
            return "WS " + result.toFixed(2) + "%";
        },
        general: function(skillValue) {
            const result = (75 * (skillValue / 100));
            return result.toFixed(2) + "% Ignore Durability Loss";
        },
      }, "Begging": {
        wiki: "https://uooutlands.com/wiki/Begging",
        razorName: "Begging",
        description: "Players can use the Begging skill on NPC vendors to receive 5 gold on a successful beg",
        general: function(skillValue) {
            const result = (25 * (skillValue / 100));
            return result.toFixed(2) + "% Motivation DMG";
        },
      }, "Blacksmithy": {
        wiki: "https://uooutlands.com/wiki/Blacksmithy",
        razorName: "Blacksmith",
        description: "Create sheilds, weapons and armor.",
        general: function(skillValue) {
            const result = (25 * (skillValue / 100));
            return result.toFixed(2) + "% Armor Bonus";
        },
        pvp: function(skillValue) {
            let baseDmg = 25;
            const result = (baseDmg * (.1 * (skillValue / 100)));
            return "DMG +" + result.toFixed(2);
        },
        pvm: function(skillValue) {
            let baseDmg = 25;
            const result = (baseDmg * (.25 * (skillValue / 100)));
            return "DMG +" + result.toFixed(2);
        }
      }, "Camping": {
        wiki: "https://uooutlands.com/wiki/Camping",
        razorName: "Camping",
        description: "Hiking allows player to travel, increase damage and stone carriage.",
        general: function(skillValue) {
            const result = (200 * (skillValue / 100));
            return result.toFixed(0) + " Max Weight";
        }
      }, "Carpentry/Bowcraft": {
        wiki: "https://uooutlands.com/wiki/Carpentry",
        razorName: "Carpentry",
        description: "Bowcraft/Fletching has been merged into Carpentry. Craft board-based weapons, shields, ranged weapons and ammunition",
        pvp: function(skillValue) {
            let baseDmg = 25;
            const result = (baseDmg * (.1 * (skillValue / 100)));
            return "DMG +" + result.toFixed(2);
        },
        pvm: function(skillValue) {
            let baseDmg = 25;
            const result = (baseDmg * (.25 * (skillValue / 100)));
            return "DMG +" + result.toFixed(2);
        }
      }, "Cartography": {
        wiki: "https://uooutlands.com/wiki/Cartography",
        razorName: "Cartography",
        description: "Used to decipher Research Materials, Resource Maps and Treasure Maps"
      }, "Cooking": {
        wiki: "https://uooutlands.com/wiki/Cooking",
        razorName: "Cooking",
        description: "By eating higher quality foods, players can increase their Passive Regeneration (but only for PvM, it does NOT affect PvP)"
      }, "Detecting Hidden": {
        wiki: "https://uooutlands.com/wiki/Detecting_Hidden",
        razorName: "DetectHidden",
        description: "Reveals all Hidden targets within 8 * (Detect Hidden Skill / 100) spaces of player",
        general: function(skillValue) {
            const result = (8 * (skillValue / 100));
            return Math.floor(result) + " Tile Range";
        }
      }, "Discordance": {
        wiki: "https://uooutlands.com/wiki/Discordance",
        razorName: "Discordance",
        description: "Discorded creatures take 25% increased damage from all sources. Discord effect duration is ((60 seconds - (Creature Difficulty Value)) * (Effective Barding Skill / 100)) with a minimum duration of 15 * (Musicianship Skill / 100) seconds"
      }, "Evaluating Intelligence": {
        wiki: "https://uooutlands.com/wiki/Evaluating_Intelligence",
        razorName: "EvalInt",
        description: "Increase the damage and effectiveness of Magery spells",
        pvm: function(skillValue) {
            const result = 50 * (skillValue / 100);
            return "DMG " + result.toFixed(2) + "%";
        },
        pvp: function(skillValue) {
            const result = 37.5 * (skillValue / 100);
            return "DMG " + result.toFixed(2) + "%";
        }
      }, "Fencing": {
        wiki: "https://uooutlands.com/wiki/Fencing",
        razorName: "Fencing",
        description: "This is a filler for Fencing"
      }, "Fishing": {
        wiki: "https://uooutlands.com/wiki/Fishing",
        razorName: "Fishing",
        description: "This is a filler for Fishing"
      }, "Forensic Evaluation": {
        wiki: "https://uooutlands.com/wiki/Forensic_Evaluation",
        razorName: "Forensics",
        description: "This is a filler for Forensic Evaluation"
      }, "Healing": {
        wiki: "https://uooutlands.com/wiki/Healing",
        razorName: "Healing",
        description: "Bandaging self takes 10-15 seconds, others take 5-7.5 seconds based on DEX"
      }, "Herding": {
        wiki: "https://uooutlands.com/wiki/Herding",
        razorName: "Herding",
        description: "This is a filler for Herding"
      }, "Hiding": {
        wiki: "https://uooutlands.com/wiki/Hiding",
        razorName: "Hiding",
        description: "This is a filler for Hiding"
      }, "Inscription": {
        wiki: "https://uooutlands.com/wiki/Inscription",
        razorName: "Inscribe",
        description: "This is a filler for Inscription"
      }, "Item Identification": {
        wiki: "https://uooutlands.com/wiki/Item_Identification",
        razorName: "ItemID",
        description: "This is a filler for Item Identification"
      }, "Lockpicking": {
        wiki: "https://uooutlands.com/wiki/Lockpicking",
        razorName: "Lockpicking",
        description: "This is a filler for Lockpicking"
      }, "Lumberjacking": {
        wiki: "https://uooutlands.com/wiki/Lumberjacking",
        razorName: "Lumberjacking",
        description: "This is a filler for Lumberjacking"
      }, "Mace Fighting": {
        wiki: "https://uooutlands.com/wiki/Mace_Fighting",
        razorName: "Macing",
        description: "This is a filler for Mace Fighting"
      }, "Magery": {
        wiki: "https://uooutlands.com/wiki/Magery",
        razorName: "Magery",
        description: "Minimum skill to cast (Spell Circle * 10), 100% success chance is Minimum Skill Required + 20",
        general: function(skillValue) {

            for (var x = 8; x > 1; x--) {
                var spell = (x*10) + 20;
                if (skillValue >= spell) {
                    let txt = "";
                    switch (x) {
                        case 1:
                            txt = "st";
                        break;
                        case 2:
                            txt = "nd";
                        break;
                        case 3:
                            txt = "rd";
                        break;
                        default: 
                            txt = "th";
                    }
                    return `${x}${txt} 100%`;
                }
            }

        },
      }, "Meditation": {
        wiki: "https://uooutlands.com/wiki/Meditation",
        razorName: "Meditation",
        description: "Regen rate is penalized by (2% * (Total Armor))",
        general: function(skillValue) {
            const result = 100 * (skillValue / 100);
            return "Regen " + result.toFixed(2) + "%";
        }
      }, "Mining": {
        wiki: "https://uooutlands.com/wiki/Mining",
        razorName: "Mining",
        description: "This is a filler for Mining"
      }, "Musicianship": {
        wiki: "https://uooutlands.com/wiki/Musicianship",
        razorName: "Musicianship",
        description: "This is a filler for Musicianship"
      }, "Parrying": {
        wiki: "https://uooutlands.com/wiki/Parrying",
        razorName: "Parrying",
        description: "This is a filler for Parrying"
      }, "Peacemaking": {
        wiki: "https://uooutlands.com/wiki/Peacemaking",
        razorName: "Peacemaking",
        description: "This is a filler for Peacemaking"
      }, "Poisoning": {
        wiki: "https://uooutlands.com/wiki/Poisoning",
        razorName: "Poisoning",
        description: "This is a filler for Poisoning"
      }, "Provocation": {
        wiki: "https://uooutlands.com/wiki/Provocation",
        razorName: "Provocation",
        description: "This is a filler for Provocation"
      }, "Remove Trap": {
        wiki: "https://uooutlands.com/wiki/Remove_Trap",
        razorName: "RemoveTrap",
        description: "This is a filler for Remove Trap"
      }, "Resisting Spells": {
        wiki: "https://uooutlands.com/wiki/Resisting_Spells",
        razorName: "MagicResist",
        description: "Spell damage taken has a min and max based on skill. PVM gains absorb chance.",
        pvm: function(skillValue) {
            const result = 25 * (skillValue / 100);
            return result.toFixed(2) + "%";
        }, 
        general: function(skillValue) {
            const min = 12.5 * (skillValue / 100);
            const max = 37.5 * (skillValue / 100);
            return `${min.toFixed(2)}% - ${max.toFixed(2)}%`;
        }
      }, "Snooping": {
        wiki: "https://uooutlands.com/wiki/Snooping",
        razorName: "Snooping",
        description: "This is a filler for Snooping"
      }, "Spirit Speaking": {
        wiki: "https://uooutlands.com/wiki/Spirit_Speaking",
        razorName: "SpiritSpeak",
        description: "This is a filler for Spirit Speaking"
      }, "Stealing": {
        wiki: "https://uooutlands.com/wiki/Stealing",
        razorName: "Stealing",
        description: "This is a filler for Stealing"
      }, "Stealth": {
        wiki: "https://uooutlands.com/wiki/Stealth",
        razorName: "Stealth",
        description: "This is a filler for Stealth"
      }, "Swordsmanship": {
        wiki: "https://uooutlands.com/wiki/Swordsmanship",
        razorName: "Swords",
        description: "Weapon Special: Causes bleed damage every 3 seconds for 15 seconds",
        pvm: "WS 10%"

      }, "Tactics": {
        wiki: "https://uooutlands.com/wiki/Tactics",
        razorName: "Tactics",
        description: "Modifies base weapon damage (25 for example) for all melee and ranged weapons.",
        general: function(skillValue) {
            let baseDmg = 25;
            if (skillValue <= 100) {
                const result = (baseDmg * (-.5 + (skillValue / 200))) + baseDmg;
                return "DMG " + Math.floor(result);
            }
            const result = (baseDmg * (.01 * (skillValue - 100))) + baseDmg;
            return "DMG " + Math.floor(result);
        },
        pvp: function(skillValue) { return this.general(skillValue)},
        pvm: function(skillValue) { return this.general(skillValue)},
      }, "Tailoring": {
        razorName: "Tailoring",
        wiki: "https://uooutlands.com/wiki/Tailoring",
        description: "This is a filler for Tailoring"
      }, "Taste Identification": {
        wiki: "https://uooutlands.com/wiki/Taste_Identification",
        razorName: "TasteID",
        description: "This is a filler for Taste Identification"
      }, "Tinkering": {
        wiki: "https://uooutlands.com/wiki/Tinkering",
        razorName: "Tinkering",
        description: "This is a filler for Tinkering"
      }, "Tracking": {
        wiki: "https://uooutlands.com/wiki/Tracking",
        razorName: "Tracking",
        description: "This is a filler for Tracking"
      }, "Veterinary": {
        wiki: "https://uooutlands.com/wiki/Veterinary",
        razorName: "Veterinary",
        description: "This is a filler for Veterinary"
      }, "Wrestling": {
        wiki: "https://uooutlands.com/wiki/Wrestling",
        razorName: "Wrestling",
        description: "Weapon Special: Increases damage by 400% and disorients the target for 16 seconds",
        pvm: "WS 10%"
      }
  };
  /*
These are 2 harpooners I use:
Pvp harpoon 
100 anatomy
100 fishing
100 tactics
100 tracking
100 fencing 
80 resist
80 healing 
60 magery 

PVM
120 fishing
120 begging
100 healing
100 parry
100 fencing
100 tactics
80 anatomy

fabricator02/02/2021
My poison summoner:
120 spirit speak
100 magery
100 meditation
100 poison
100 wrestling 
80 parry
80 tasteid
40 eval int 
  */
var templateList = [
    {name:"PVP - Tank Mage - Halberd", build: "EvalInt|100,Magery|100,Meditation|100,MagicResist|100,Swords|100,Tactics|100,Wrestling|100"},
    {name:"PVP - Tank Mage - Archery", build: "EvalInt|100,Magery|100,Meditation|100,MagicResist|100,Archery|100,Tactics|100,Wrestling|100"},
    {name:"PVP - Roach Mage", build: "EvalInt|100,Magery|100,Meditation|100,MagicResist|100,Anatomy|100,Healing|100,Wrestling|100"},
    {name:"More to come...", build: "Alchemy|50"},
]

const BuildBonus = (props) => {

    let pvp = [];
    let pvm = [];
    let general = [];

    return (       
    <div className="bonus-container">
         {props.buildBonus.length ? <div className="bonus-header">
            <span>
                
            </span>
            <span>
                PVP
            </span>
            <span>
                PVM
            </span>
            <span>
                Info
            </span>
        </div> : ""}
        {props.buildBonus.map(x=><div key={`build_bonus_${x.bonus.razorName}`} className="bonus-row">
            <span className="name"><a href={x.bonus.wiki} target="_wiki">{x.bonus.razorName}</a></span>
            <span className="pvp">{typeof x.bonus.pvp === "function" ? x.bonus.pvp(x.currentSkillValue) : x.bonus.pvp}</span>
            <span className="pvm">{typeof x.bonus.pvm === "function" ? x.bonus.pvm(x.currentSkillValue) : x.bonus.pvm}</span>
            <span className="general">{typeof x.bonus.general === "function" ? x.bonus.general(x.currentSkillValue) : x.bonus.general}</span>
            <span className="description">{typeof x.bonus.description === "function" ? x.bonus.description(x.currentSkillValue) : x.bonus.description}</span>
        </div>)}
    </div>
    )
}

const TemplateSelection = (props) => {
    return (
        templateList.sort().map(x => {
          //if (!props.currentBuild.length || !props.currentBuild.find(f => f.name === x)) {
              return <option key={x.name} value={x.build}>{x.name}</option>
          //}
      })
  )
}
    const SkillSelection = (props) => {
      return (
          skillList.sort().map(x => {
            if (!props.currentBuild.length || !props.currentBuild.find(f => f.name === x)) {
                return <option key={x}>{x}</option>
            }
            return ""
        })
    )
  }

const filterValueReadable = (razorValue) => {
    if (typeof razorValue === "undefined") return 100;

    var returnValue = razorValue;
    var hasDecimal = razorValue.split(".");
    if (hasDecimal.length === 2 && hasDecimal[1] === "0") {
        returnValue = hasDecimal[0];
    }

    
    if (returnValue <= 0) returnValue = 0;
    if (returnValue >= 120) returnValue = 120;
    return returnValue;
}

const fitlerNameQueryString = (cleanName) => {
    switch (cleanName) {
        case "Animal Lore":
            return "AnimalLore";
        case "Item Identification":
            return "ItemID";
        case "Carpentry/Bowcraft":
            return "Carpentry";
        case "Arms Lore":
            return "ArmsLore";
        case "Blacksmithy":
            return "Blacksmith";
        case "Detecting Hidden":
            return "DetectHidden";
        case "Evaluating Intelligence":
            return "EvalInt";
        case "Forensic Evaluation":
            return "Forensics";
        case "Inscription":
            return "Inscribe";
        case "Resisting Spells":
            return "MagicResist";
        case "Spirit Speaking":
            return "SpiritSpeak";
        case "Animal Taming":
            return "AnimalTaming";
        case "Taste Identification":
            return "TasteID";
        case "Swordsmanship":
            return "Swords";
        case "Mace Fighting":
            return "Macing";
        case "Remove Trap":
            return "RemoveTrap";
        default:
            return cleanName;
    }
}

const filterNameReadable = (razorName) => {
  
    switch (razorName) {
        case "AnimalLore":
            return "Animal Lore";
        case "ItemID":
            return "Item Identification";
        case "Carpentry":
            return "Carpentry/Bowcraft";
        case "ArmsLore":
            return "Arms Lore";
        case "Blacksmith":
            return "Blacksmithy";
        case "DetectHidden":
            return "Detecting Hidden";
        case "EvalInt":
            return "Evaluating Intelligence";
        case "Forensics":
            return "Forensic Evaluation";
        case "Inscribe":
            return "Inscription";
        case "MagicResist":
            return "Resisting Spells";
        case "SpiritSpeak":
            return "Spirit Speaking";
        case "AnimalTaming":
            return "Animal Taming";
        case "TasteID":
            return "Taste Identification";
        case "Swords":
            return "Swordsmanship";
        case "Macing":
            return "Mace Fighting";
        case "RemoveTrap":
            return "Remove Trap";
        default:
            return razorName;
    }

};





const getBuildFromTemplateString = (template) => {
    if (typeof template === "undefined" || !template.length) {
        return [];
    }
    var rows = template.split(",");
    var pastedData = [];
    rows.map(x => {
        var row = x.split("|").filter(y => y != "");
        var filteredName = filterNameReadable(row[0]);
        if (skillList.indexOf(filteredName) >= 0 && !pastedData.find(x => x.name === filteredName)) {
            let skillValue = (row.length === 2 && !isNaN(row[1])) ? row[1] : 100;
            if (skillValue <= 0) skillValue = 0;
            if (skillValue >= 120) skillValue = 120;
            pastedData.push({
                name: filteredName,
                value: skillValue
            })
        };
    });
    return pastedData;    
};



const SkillBuilder = () => {

    const ShowExampleText = () => {
        //<Link to={{pathname: '/builder', search: setLinkQueryString({template:"Anatomy|100,Archery|100,ArmsLore|100,Camping|100,Forensics|20,Healing|80,Tactics|100,Tracking|100"})}}>Example Build</Link>

            return (
            <div className="example-text">
                <p>Select a template, skill or import your character skills to get started.</p>
                <textarea ref={pasteSkillsRef} onChange={parseFromPaste} cols="30" rows="5" placeholder="Paste the 'Copy All' from the Skills tab in Razor."></textarea>
            </div>
            )
        }
        let navigate = useNavigate();


    const handleSkillChangeInBrowser = useCallback((template) => navigate(`/builder?template=${template}`), { replace: true });

    let query = useQueryString();
    const template = query.get("template") || "";
    const [buildShareString,setBuildShareString] = React.useState(template);
    const [{error, errorMessage}, setError] = React.useState({error: false,errorMessage:""})
    const [build, setBuild] = React.useState(getBuildFromTemplateString(template));
    const [total, setTotal] = React.useState(0);
    const skillNameRef = React.useRef(null);
    const skillTotalRef = React.useRef(null);
    const skillTemplateRef = React.useRef(null);
    const pasteSkillsRef = React.useRef(null);
    const [hoverOver, setHoverOver] = React.useState("");
    const [buildBonus, setBuildBonusDescription] = React.useState([]);
    const [customBuildName, setCustomBuildName] = React.useState("Name this build");

    React.useEffect(() => {
        if (template.length <= 0){
            skillTemplateRef.current.value = "Select a template";
        }
        setBuild(getBuildFromTemplateString(template));
    },[template]);

    React.useEffect(() => {
        let calcTotal = 0;
        let buildShare = window.location.protocol + "//" + window.location.host + window.location.pathname + "?template=";
        let useTemplateValues = "";
        let buildBonusTemp = [];
        build.map(b => {
            calcTotal += Math.round(b.value);
            let nameForQuerystring = fitlerNameQueryString(b.name);
            buildShare += `${nameForQuerystring}|${b.value},`;
            useTemplateValues += `${nameForQuerystring}|${b.value},`;
            buildBonusTemp.push({
                bonus: skillListDetails[b.name],
                currentSkillValue: b.value
            });
        });
        setTotal(calcTotal);
        setBuildShareString(buildShare);
        handleSkillChangeInBrowser(useTemplateValues);
        setBuildBonusDescription(buildBonusTemp);        
        
    },[build]);
   
    

    const parseFromPaste = (event) => {
        var data = pasteSkillsRef.current.value;
        var rows = data.split(String.fromCharCode(10));
        var pastedData = [];
        rows.map(x => {
            var row = x.split(" ").filter(y => y != "");
            if (row[2] > 0) {
                var filteredName = filterNameReadable(row[0]);
                if (skillList.indexOf(filteredName) >= 0 && !pastedData.find(x => x.name === filteredName)) {
                    pastedData.push({
                        name: filterNameReadable(row[0]),
                        value: filterValueReadable(row[2])
                    })
                };
            }
        });
        setBuild(pastedData)
    }

    const handleSkillAdd = (event) => {
        event.preventDefault();

        if (skillNameRef.current === null || skillNameRef.current.value === "Select a skill" || skillNameRef.current.value === "") {
            setError({ error: true, errorMessage: "You must select a template or skill"});
            skillNameRef.current.focus();
        } else {
            setError({error: false, errorMessage: ""});
            setBuild([...build, { name: skillNameRef.current.value, value: skillTotalRef.current.value ?? 100 }]);
            skillNameRef.current.focus();
        }
        
        //setError({ error: true, errorMessage: "Clicked"})
    }


    const setBuildByTemplate = (event) => {
        if (skillTemplateRef.current.value !== "") {
            setBuild(getBuildFromTemplateString(skillTemplateRef.current.value));
        }
    }
    const highLightSelectedSkill = (event) => {
        setHoverOver()
    }

    const changeSelectedSkill = (event, name) => {
        let x = [...build];
        let val = 0;
        if (typeof (event.target.value) !== "undefined" && !isNaN(event.target.value)) {
            val = event.target.value;
            if (val <= 0) val = 0;
            if (val >= 120) val = 120;
        }

        if (val === 0) {
            
            x = x.filter((y)=> y.name !== name);
            
        } else {
            x.find((y)=> y.name === name).value = val;
        }
        
        setBuild([...x]);
    }

    return (
        <div className="App">
        <header className="skill-bar-header">
          <div className="skill-bar">
                {(error) ? (
                    <div>
                        <h5>{errorMessage}</h5>
                    </div>
                ) : <></>
                }
              <form onSubmit={handleSkillAdd}>
                <select name="template" ref={skillTemplateRef} onChange={setBuildByTemplate}>
                    <option key="template_empty">Select a template</option>
                    <TemplateSelection currentBuild={build} />
                </select>
                <select name="skill" ref={skillNameRef}>
                    <SkillSelection currentBuild={build} />
                </select>
                <input type="skill_value" defaultValue="100" size="3" ref={skillTotalRef} />
                <button>Apply</button>
                {(total === 0) ? <button disabled>Reset</button> : <Link to={{pathname: '/builder', search: setLinkQueryString({template:""})}}><button>Reset</button></Link> }
            </form>
          </div>
          <div className="skill-and-bonus-container">

          <div className="skill-scroll-container">
            <div className="skill-container-top">&nbsp;<input type="text" defaultValue={customBuildName}  onChange={(event) => {setCustomBuildName(event.value)}} /></div>
            <div className="skill-container skill-container-mid">
                    {build.sort( (a,b) => {
                        if (a.name > b.name) {
                            return 1;
                        } else if (b.name > a.name) {
                            return -1;
                        }
                        return 0;
                    }).map(x => { return <div className="skill-row" onMouseOver={highLightSelectedSkill} key={"selected_" + x.name}>
                        <span className="name">{x.name}</span> <input type="number" min="0" max="120" onChange={(y) => { changeSelectedSkill(y,x.name) }} className="value" defaultValue={x.value} />
                        </div>})
                        }
                        {(total === 0) ? <ShowExampleText /> : <div className="skill-row totals">
                            <span className="name">Total</span> <span className={total > 720 ? "value invalid" : "value"}>{total}</span>
                        </div>}
            </div>
            <div className="skill-container-bot">&nbsp;</div>
          </div>
          <div className="bonus-scroll-container">
            <BuildBonus buildBonus={buildBonus} />
          </div>          
          </div>

        </header> 
        <div className="skill-faq">
        <h1>Jase Dev Todo</h1>
        <p>
            <ul>
                <li>Add ability to save & share screen easily (use windows key, shift s for now)</li>
                <li>Finish filling in bonus/perks for all skills</li>
                <li>Add a database to store builds</li>
                <li>Improve sharing with smaller url</li>
                <li>Combine builds saved in database by popularity</li>
                <li>Add "Certified" builds based on confirmed submissions</li>
                <li>Add voting system: like don't like</li>
                <li>Add meta image dynamicically</li>
            </ul>
        </p>
        <h1>FAQ</h1>
        <p>
            <b>What is this thing?</b><br />This skill builder for UO Outlands allows you to quickly import your current skill set, choose a pre-defined template or create your own template to share with your friends!
        </p>
        <p>
            <b>How do I import my skills?</b><br />You'll want to log into UO Outlands, pull up Razor and select the skills tab. Click "Copy All" and paste that value into the form below.
        </p>
        <p>
            <b>How do I share with my friends?</b><br />Changes to templates are reflected in the browser url. You can copy and paste the URL or hit the share button. 
        </p>
        <p>
            <b>What is UO Outlands?</b><br />UO Outlands is a free Ultima Online shard that I would consider UO 2.0.  Check out the <a href="https://uooutlands.com/">official Outlands Website</a> for more info!
        </p>
        <p>
            <b>I have a suggestion, comment, question:</b><br />Best way to reach me would be the <a href="https://discord.gg/h3jUvQUXv2">Jaseowns discord</a>!
        </p>
        </div>
        <div className="share-link">
            {buildShareString}
          </div>
      </div>
    )
}

