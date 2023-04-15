const roles = {
    /*
    'Role Name': <Minimal Level To Obtain this Role>
    */
    'blood bronze V': 0,
    'blood bronze IV': 5,
    'blood bronze III': 10,
    'blood bronze II': 15,
    'blood bronze I': 20,
    'unbeding silver V': 25,
    'unbeding silver IV': 30,
    'unbeding silver III': 35,
    'unbeding silver II': 40,
    'unbeding silver I': 45,
    'Master V': 50,
    'Master IV': 55,
    'Master III': 60,
    'Master II': 65,
    'Master I': 70,
    'heroic gold V': 75,
    'heroic gold IV': 80,
    'heroic gold III': 85,
    'heroic gold II': 90,
    'heroic gold I': 95,
    'tough platinum V': 100,
    'tough platinum IV': 105,
    'tough platinum III': 110,
    'tough platinum II': 115,
    'tough platinum I': 120,
    'immortal star diamond  V': 125,
    'immortal star diamond  IV': 130,
    'immortal star diamond  III': 135,
    'immortal star diamond  II': 140,
    'immortal star diamond  I': 145,
    'glory crown VI': 150,
    'glory crown V': 155,
    'glory crown IV': 160,
    'glory crown III': 165,
    'glory crown II': 170,
    'glory crown I': 175,
    'super ace V': 180,
    'super ace IV': 185,
    'super ace III': 190,
    'super ace II': 195,
    'super ace I': 200,
    'CONQUEROR 👑': 205
}

export function before(m) {
        let user = db.data.users[m.sender]
        let level = user.level
        let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
        user.role = role
        return !0
    
}