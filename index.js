const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const db = require('quick.db')



//order

client.on('message', message => {
    if(message.content.startsWith(prefix + 'set-order')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**حرك**`)
      var chnl = message.mentions.channels.first()
    if (!chnl) return message.channel.send(`**Mention A Room**`)
    db.set(`chnl_${message.guild.id}` , chnl.id)
    message.channel.send(`**Done ${chnl} Is The Order Channel**`)
    
    
    
    }
    });
client.on('message' , message => {
if(message.content.startsWith(prefix + 'order')){
var chnnel = db.fetch(`chnl_${message.guild.id}`)

var args = message.content.split(" ").slice(1).join(" ")
if(!args) return message.channel.send(`**Type Your Order**`)

var embed = new Discord.MessageEmbed()

.setTitle(`**New Order**`) 


.setDescription(`**
\`${args}\`
**`)

.setFooter(`By ${message.author.username}`)


client.channels.cache.get(chnnel).send(embed)

message.channel.send(`**Your Order Has Send**`)
 

 }
 });


 //Sug

 client.on('message', message => {
    if(message.content.startsWith(prefix + 'set-sug')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**حرك**`)
      var chnl = message.mentions.channels.first()
    if (!chnl) return message.channel.send(`**Mention A Room**`)
    db.set(`chnl_${message.guild.id}` , chnl.id)
    message.channel.send(`**Done ${chnl} Is The Sug Channel**`)
    
    
    
    }
    });
client.on('message' , message => {
if(message.content.startsWith(prefix + 'sug')){
var chnnel = db.fetch(`chnl_${message.guild.id}`)

var args = message.content.split(" ").slice(1).join(" ")
if(!args) return message.channel.send(`**Type Your Sug**`)

var embed = new Discord.MessageEmbed()

.setTitle(`**New Sug**`) 


.setDescription(`**
\`${args}\`
**`)

.setFooter(`By ${message.author.username}`)


client.channels.cache.get(chnnel).send(embed)

message.channel.send(`**Your Sug Has Send**`)
 

 }
 });


 client.login('')//token