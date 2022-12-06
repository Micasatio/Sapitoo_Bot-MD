let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 

let pp = '.media/menu2.jpg'
 
const sections = [  
{
title: `Sapito_Bot Menu`,
rows: [
       {title: "/menú completo", description: "Para ver el menú completo de este bot de mierda", rowId: `${usedPrefix}menu`},
        {title: "/menú audios", description: "para ver los audios del bot", rowId: `${usedPrefix}menuaudios`},
        {title: "/menú +18", description: "para ver porno 🥵", rowId: `${usedPrefix}menusimple`},
      {title: "/hidetag", description: "Para mencionar a todos con un texto", rowId: `${usedPrefix}hidetag`},
      
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: `╭─「 Sapito_Bot 」
║❥Hola, ${name}! Espero que tengas un lindo día o noche!!
║
║❥Creador del Bot: wa.me/56937358804
║
║❥Envia los comandos sin * * ¨ ¨ ( )
║ 
╰────
*Sapito_Bot*`, footer: ``, pp,
title: null,
buttonText: "menu", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.register = true
export default handler
