{
    level: 1,
    class: {
        https://www.dnd5eapi.co/api/classes/(class) output
    },
    classSpells: {
        https://www.dnd5eapi.co/api/classes/(class)/spells output
    },
    HP: 0(calculated based off level and class),
    AbilityScores: {
        Str: 0,
        Dex: 0,
        Con: 0,
        Int: 0,
        Cha: 0,
        Wis: 0,
    },
    ProficiencyScore: 0(based off level),
    Initiative: based on dex,
    ArmorScore: based on dex + armor,
    AbilityScoreProficienies: {
        Str: false,
        Dex: false,
        Con: false,
        Int: false,
        Cha: false,
        Wis: false,
    },
    
    SkillProficiencies: {
        skills....: false,
    },
    PassiveSkills: {
        Perception: (10 + perception)
        Investigation: (10 invest)
        Insight: (10 + insight)
    }
    ToolProficiencies: {
        tools....: false,
    },
    Languages: {
        languages....: false,
    }
    Spells: {
        level: {
            0: {
                each spell
            }
            each level...
        }
    }
}