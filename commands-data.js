var CommandsDataSet = [



	[
		"1",
		"Deckhand",
		"editsign",
		"sign, esign, eeditsign",
		"Edits a sign in the world.",
		"Chat",
		"/<command> <set/clear> <line number> [text]"
	],
	[
		"1",
		"Deckhand",
		"repair",
		"fix, efix, erepair",
		"Repairs the durability of one or all items.",
		"Chat",
		"/<command> [hand|all]"
	],
	[
		"1",
		"Deckhand",
		"msgtoggle",
		"emsgtoggle",
		"Blocks receiving all private messages.",
		"Chat",
		"/<command> [player] [on|off]"
	],
	[
		"1",
		"Deckhand",
		"setjail",
		"esetjail, createjail, ecreatejail",
		"Creates a jail where you specified named [jailname].",
		"Chat",
		"/<command> <jailname>"
	],
	[
		"1",
		"Deckhand",
		"settpr",
		"[esettpr, settprandom, esettprandom]",
		"Set the random teleport location and parameters.",
		"Chat",
		"/<command> [center|minrange|maxrange] [value]"
	],
	[
		"1",
		"Deckhand",
		"help",
		"ehelp",
		"Views a list of available commands.",
		"Chat",
		"/<command> [search term] [page]"
	],
	[
		"1",
		"Deckhand",
		"clearinventoryconfirmtoggle",
		"eclearinventoryconfirmtoggle, clearinventoryconfirmoff, eclearinventoryconfirmoff, clearconfirmoff, eclearconfirmoff, clearconfirmon, eclearconfirmon, clearconfirm, eclearconfirm",
		"Toggles whether you are prompted to confirm inventory clears.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"mute",
		"emute, silence, esilence",
		"Mutes or unmutes a player.",
		"Chat",
		"/<command> <player> [datediff]"
	],
	[
		"1",
		"Deckhand",
		"spawner",
		"changems, echangems, espawner, mobspawner, emobspawner",
		"Change the mob type of a spawner.",
		"Chat",
		"/<command> <mob> [delay]"
	],
	[
		"1",
		"Deckhand",
		"deljail",
		"edeljail, remjail, eremjail, rmjail, ermjail",
		"Removes a jail.",
		"Chat",
		"/<command> <jailname>"
	],
	[
		"1",
		"Deckhand",
		"powertool",
		"epowertool, pt, ept",
		"Assigns a command to the item in hand.\r\n\r\nUse 'c:' as the command to make a chat macro.\r\nUse 'a:' to append multiple commands.\r\nUse 'r:' to remove a single command.\r\nUse 'l:' to list all power tools\r\nUse 'd:' to remove all power tools \r\n",
		"Chat",
		"/<command> [l:|a:|r:|c:|d:][command] [arguments]\r\n({player} can be replaced by name of a clicked player.)\r\n"
	],
	[
		"1",
		"Deckhand",
		"weather",
		"rain, erain, sky, esky, storm, estorm, sun, esun, eweather",
		"Sets the weather.",
		"Chat",
		"/<command> <storm\/sun> [duration]"
	],
	[
		"1",
		"Deckhand",
		"gc",
		"lag, elag, egc, mem, emem, memory, ememory, uptime, euptime, tps, etps, entities, eentities",
		"Reports memory, uptime and tick info.",
		"Chat",
		"/<command> [all]"
	],
	[
		"1",
		"Deckhand",
		"delhome",
		"edelhome, remhome, eremhome, rmhome, ermhome",
		"Removes a home.",
		"Chat",
		"/<command> [player:]<name>"
	],
	[
		"1",
		"Deckhand",
		"enderchest",
		"echest, eechest, eenderchest, endersee, eendersee, ec, eec",
		"Lets you see inside an enderchest.",
		"Chat",
		"/<command> [player]"
	],
	[
		"1",
		"Deckhand",
		"powertooltoggle",
		"epowertooltoggle, ptt, eptt, pttoggle, epttoggle",
		"Enables or disables all current powertools.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"kickall",
		"ekickall",
		"Kicks all players off the server except the issuer.",
		"Chat",
		"/<command> [reason]"
	],
	[
		"1",
		"Deckhand",
		"speed",
		"flyspeed, eflyspeed, fspeed, efspeed, espeed, walkspeed, ewalkspeed, wspeed, ewspeed",
		"Change your walk or fly speed.",
		"Chat",
		"/<command> [type] <speed> [player]"
	],
	[
		"1",
		"Deckhand",
		"tpall",
		"etpall",
		"Teleport all online players to another player.",
		"Chat",
		"/<command> <player>"
	],
	[
		"1",
		"Deckhand",
		"suicide",
		"esuicide",
		"Causes you to perish.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"whois",
		"ewhois",
		"Displays player information",
		"Chat",
		"/<command> <nickname|playername>"
	],
	[
		"1",
		"Deckhand",
		"tptoggle",
		"etptoggle",
		"Blocks all forms of teleportation.",
		"Chat",
		"/<command> [player] [on|off]"
	],
	[
		"1",
		"Deckhand",
		"disposal",
		"edisposal, trash, etrash",
		"Opens a portable disposal menu.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"top",
		"etop",
		"Teleport to the highest block at your current position.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"gamemode",
		"adventure, eadventure, adventuremode, eadventuremode, creative, eecreative, creativemode, ecreativemode, egamemode, gm, egm, gma, egma, gmc, egmc, gms, egms, gmt, egmt, survival, esurvival, survivalmode, esurvivalmode, gmsp, sp, egmsp, spec, spectator",
		"Change player gamemode.",
		"Chat",
		"/<command>\n<survival|creative|adventure|spectator>\n[player]"
	],
	[
		"1",
		"Deckhand",
		"condense",
		"econdense, compact, ecompact, blocks, eblocks, toblocks, etoblocks",
		"Condenses items into a more compact blocks.",
		"Chat",
		"/<command> [<itemname>|<id>|hand|inventory]"
	],
	[
		"1",
		"Deckhand",
		"tp",
		"tele, etele, teleport, eteleport, etp, tp2p, etp2p",
		"Teleport to a player.",
		"Chat",
		"/<command> <player> [otherplayer]"
	],
	[
		"1",
		"Deckhand",
		"tpoffline",
		"otp, offlinetp, tpoff, tpoffline",
		"Teleport to a player's last known logout location",
		"Chat",
		"/<command> <player>"
	],
	[
		"1",
		"Deckhand",
		"setworth",
		"esetworth",
		"Set the sell value of an item.",
		"Chat",
		"/<command> [itemname|id] <price>"
	],
	[
		"1",
		"Deckhand",
		"spawnmob",
		"mob, emob, spawnentity, espawnentity, espawnmob",
		"Spawns a mob.",
		"Chat",
		"/<command> <mob>[:data][,<mount>[:data]] [amount] [player]"
	],
	[
		"1",
		"Deckhand",
		"book",
		"ebook",
		"Allows reopening and editing of sealed books.",
		"Chat",
		"/<command> [title|author [name]]"
	],
	[
		"1",
		"Deckhand",
		"time",
		"day, eday, night, enight, etime",
		"Display\/Change the world time. Defaults to current world.",
		"Chat",
		"/<command> [day|night|dawn|17:30|4pm|4000ticks] [worldname|all]"
	],
	[
		"1",
		"Deckhand",
		"tpaall",
		"etpaall",
		"Requests all players online to teleport to you.",
		"Chat",
		"/<command> <player>"
	],
	[
		"1",
		"Deckhand",
		"mail",
		"email, eemail, memo, ememo",
		"Manages inter-player, intra-server mail.",
		"Chat",
		"/<command> [read|clear|send [to] [message]|sendall [message]]"
	],
	[
		"1",
		"Deckhand",
		"hat",
		"ehat, head, ehead",
		"Get some cool new headgear.",
		"Chat",
		"/<command> [remove]"
	],
	[
		"1",
		"Deckhand",
		"worth",
		"eprice, price, eworth",
		"Calculates the worth of items in hand or as specified.",
		"Chat",
		"/<command> <<itemname>|<id>|hand|inventory|blocks> [-][amount]"
	],
	[
		"1",
		"Deckhand",
		"kick",
		"ekick",
		"Kicks a specified player with a reason.",
		"Chat",
		"/<command> <player> [reason]"
	],
	[
		"1",
		"Deckhand",
		"more",
		"emore",
		"Fills the item stack in hand to specified amount, or to maximum size if none is specified.",
		"Chat",
		"/<command> [amount]"
	],
	[
		"1",
		"Deckhand",
		"info",
		"about, eabout, ifo, eifo, einfo, inform, einform, news, enews",
		"Shows information set by the server owner.",
		"Chat",
		"/<command> [chapter] [page]"
	],
	[
		"1",
		"Deckhand",
		"tpahere",
		"etpahere",
		"Request that the specified player teleport to you.",
		"Chat",
		"/<command> <player>"
	],
	[
		"1",
		"Deckhand",
		"realname",
		"erealname",
		"Displays the username of a user based on nick.",
		"Chat",
		"/<command> <nickname>"
	],
	[
		"1",
		"Deckhand",
		"bigtree",
		"ebigtree, largetree, elargetree",
		"Spawn a big tree where you are looking.",
		"Chat",
		"/<command> <tree|redwood|jungle>"
	],
	[
		"1",
		"Deckhand",
		"rest",
		"erest",
		"Rests you or the given player.",
		"Chat",
		"/<command> [player]"
	],
	[
		"1",
		"Deckhand",
		"rules",
		"erules",
		"Views the server rules.",
		"Chat",
		"/<command> [chapter] [page]"
	],
	[
		"1",
		"Deckhand",
		"recipe",
		"formula, eformula, method, emethod, erecipe, recipes, erecipes",
		"Displays how to craft items.",
		"Chat",
		"/<command> <item> [number]"
	],
	[
		"1",
		"Deckhand",
		"sethome",
		"esethome, createhome, ecreatehome",
		"Set home to your current location.",
		"Chat",
		"/<command> [player:]<name>"
	],
	[
		"1",
		"Deckhand",
		"pweather",
		"playerweather, eplayerweather, epweather",
		"Adjust a player's weather",
		"Chat",
		"/<command> [list|reset|storm|sun|clear] [player|*]"
	],
	[
		"1",
		"Deckhand",
		"setwarp",
		"createwarp, ecreatewarp, esetwarp",
		"Creates a new warp.",
		"Chat",
		"/<command> <warp>"
	],
	[
		"1",
		"Deckhand",
		"delwarp",
		"edelwarp, remwarp, eremwarp, rmwarp, ermwarp",
		"Deletes the specified warp.",
		"Chat",
		"/<command> <warp>"
	],
	[
		"1",
		"Deckhand",
		"warpinfo",
		"ewarpinfo",
		"Finds location information for a specified warp.",
		"Chat",
		"/<command> <warp>"
	],
	[
		"1",
		"Deckhand",
		"warp",
		"ewarp, warps, ewarps",
		"List all warps or warp to the specified location.",
		"Chat",
		"/<command> <pagenumber|warp> [player]"
	],
	[
		"1",
		"Deckhand",
		"break",
		"ebreak",
		"Breaks the block you are looking at.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"msg",
		"w, m, t, pm, emsg, epm, tell, etell, whisper, ewhisper",
		"Sends a private message to the specified player.",
		"Chat",
		"/<command> <to> <message>"
	],
	[
		"1",
		"Deckhand",
		"compass",
		"ecompass, direction, edirection",
		"Describes your current bearing.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"world",
		"eworld",
		"Switch between worlds.",
		"Chat",
		"/<command> [world]"
	],
	[
		"1",
		"Deckhand",
		"me",
		"action, eaction, describe, edescribe, eme",
		"Describes an action in the context of the player.",
		"Chat",
		"/<command> <description>"
	],
	[
		"1",
		"Deckhand",
		"payconfirmtoggle",
		"epayconfirmtoggle, payconfirmoff, epayconfirmoff, payconfirmon, epayconfirmon, payconfirm, epayconfirm",
		"Toggles whether you are prompted to confirm payments.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"ext",
		"eext, extinguish, eextinguish",
		"Extinguish players.",
		"Chat",
		"/<command> [player]"
	],
	[
		"1",
		"Deckhand",
		"broadcastworld",
		"bcw, ebcw, bcastw, ebcastw, ebroadcastworld, shoutworld, eshoutworld",
		"Broadcasts a message to a world.",
		"Chat",
		"/<command> <world> <msg>"
	],
	[
		"1",
		"Deckhand",
		"togglejail",
		"jail, ejail, tjail, etjail, etogglejail, unjail, eunjail",
		"Jails\/Unjails a player, TPs them to the jail specified.",
		"Chat",
		"/<command> <player> <jailname> [datediff]"
	],
	[
		"1",
		"Deckhand",
		"list",
		"elist, online, eonline, playerlist, eplayerlist, plist, eplist, who, ewho",
		"List all online players.",
		"Chat",
		"/<command> [group]"
	],
	[
		"1",
		"Deckhand",
		"remove",
		"eremove, butcher, ebutcher, killall, ekillall, mobkill, emobkill",
		"Removes entities in your world.",
		"Chat",
		"/<command> <all|tamed|named|drops|arrows|boats|\nminecarts|xp|paintings|itemframes|endercrystals|\nmonsters|animals|ambient|mobs|[mobType]> [radius|world]"
	],
	[
		"1",
		"Deckhand",
		"lightning",
		"elightning, shock, eshock, smite, esmite, strike, estrike, thor, ethor",
		"The power of Thor. Strikes at the cursor or a player.",
		"Chat",
		"/<command> [player] [power]"
	],
	[
		"1",
		"Deckhand",
		"ignore",
		"eignore, unignore, eunignore, delignore, edelignore, remignore, eremignore, rmignore, ermignore",
		"Ignore or unignore other players.",
		"Chat",
		"/<command> <player>"
	],
	[
		"1",
		"Deckhand",
		"item",
		"i, eitem, ei",
		"Spawn an item.",
		"Chat",
		"/<command> <item|numeric> [amount [itemmeta...]]"
	],
	[
		"1",
		"Deckhand",
		"near",
		"enear, nearby, enearby",
		"Lists the players near by or around a player.",
		"Chat",
		"/<command> [playername] [radius]"
	],
	[
		"1",
		"Deckhand",
		"firework",
		"efirework",
		"Allows you to modify a stack of fireworks.",
		"Chat",
		"/<command> <<meta param>|power [amount]|clear|fire [amount]>"
	],
	[
		"1",
		"Deckhand",
		"invsee",
		"einvsee",
		"See and/or edit the inventory of other players.",
		"Chat",
		"/<command> <player> [armor]"
	],
	[
		"1",
		"Deckhand",
		"balancetop",
		"ebalancetop, baltop, ebaltop",
		"Lists players by top balances.",
		"Chat",
		"/<command> <page>"
	],
	[
		"1",
		"Deckhand",
		"ban",
		"eban",
		"Bans a player.",
		"Chat",
		"/<command> <player> [reason]"
	],
	[
		"1",
		"Deckhand",
		"kill",
		"ekill",
		"Kills specified player.",
		"Chat",
		"/<command> <player>"
	],
	[
		"1",
		"Deckhand",
		"balance",
		"bal, ebal, ebalance, money, emoney",
		"States the current balance of a player.",
		"Chat",
		"/<command> [player]"
	],
	[
		"1",
		"Deckhand",
		"enchant",
		"eenchant, enchantment, eenchantment",
		"Enchants the item the user is holding.",
		"Chat",
		"/<command> <enchantmentname> [level]"
	],
	[
		"1",
		"Deckhand",
		"banip",
		"ebanip",
		"Bans an IP address.",
		"Chat",
		"/<command> <address>"
	],
	[
		"1",
		"Deckhand",
		"socialspy",
		"esocialspy",
		"Toggles if you can see msg\/mail commands in chat.",
		"Chat",
		"/<command> [player] [on|off]"
	],
	[
		"1",
		"Deckhand",
		"workbench",
		"craft, ecraft, wb, ewb, wbench, ewbench, eworkbench",
		"Opens up a workbench.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"anvil",
		"eanvil",
		"Opens up an Anvil.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"cartographytable",
		"ecartographytable, carttable, ecarttable",
		"Opens up a cartography table.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"grindstone",
		"egrindstone",
		"Opens up a grindstone.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"loom",
		"eloom",
		"Opens up a loom.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"smithingtable",
		"esmithingtable, smithtable, esmithtable",
		"Opens up a smithing table.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"stonecutter",
		"estonecutter",
		"Opens up a stonecutter.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"motd",
		"emotd",
		"Views the Message Of The Day.",
		"Chat",
		"/<command> [chapter] [page]"
	],
	[
		"1",
		"Deckhand",
		"ptime",
		"playertime, eplayertime, eptime",
		"Adjust player's client time. Add @ prefix to fix.",
		"Chat",
		"/<command> [list|reset|day|night|dawn|17:30|4pm|4000ticks] [player|*]"
	],
	[
		"1",
		"Deckhand",
		"give",
		"egive",
		"Give a player an item.",
		"Chat",
		"/<command> <player> <item|numeric> [amount [itemmeta...]]"
	],
	[
		"1",
		"Deckhand",
		"tree",
		"etree",
		"Spawn a tree where you are looking.",
		"Chat",
		"/<command> <tree|birch|redwood|redmushroom|\nbrownmushroom|jungle|junglebush|swamp>"
	],
	[
		"1",
		"Deckhand",
		"tpacancel",
		"etpacancel",
		"Cancel all outstanding teleport requests. Specify [player] to cancel requests with them.",
		"Chat",
		"/<command> [player]"
	],
	[
		"1",
		"Deckhand",
		"sudo",
		"esudo",
		"Make another user perform a command.",
		"Chat",
		"/<command> <player> <command [args]>"
	],
	[
		"1",
		"Deckhand",
		"back",
		"eback, return, ereturn",
		"Teleports you to your location prior to tp\/spawn\/warp.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"jump",
		"j, ej, ejump, jumpto, ejumpto",
		"Jumps to the nearest block in the line of sight.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"fly",
		"efly",
		"Take off, and soar!",
		"Chat",
		"/<command> [player] [on|off]"
	],
	[
		"1",
		"Deckhand",
		"potion",
		"epotion, elixer, eelixer",
		"Adds custom potion effects to a potion.",
		"Chat",
		"/<command> <clear|apply|effect:<effect> power:<power> duration:<duration>>"
	],
	[
		"1",
		"Deckhand",
		"seen",
		"eseen",
		"Shows the last logout time of a player.",
		"Chat",
		"/<command> <playername>"
	],
	[
		"1",
		"Deckhand",
		"home",
		"ehome, homes, ehomes",
		"Teleport to your home.",
		"Chat",
		"/<command> [player:]<name>"
	],
	[
		"1",
		"Deckhand",
		"vanish",
		"v, ev, evanish",
		"Hide yourself from other players.",
		"Chat",
		"/<command> [player] [on|off]"
	],
	[
		"1",
		"Deckhand",
		"tpdeny",
		"etpdeny, tpno, etpno",
		"Reject a teleport request.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"tpohere",
		"etpohere",
		"Teleport here override for tptoggle.",
		"Chat",
		"/<command> <player>"
	],
	[
		"1",
		"Deckhand",
		"getpos",
		"eposition",
		"Get your current coordinates or those of a player.",
		"Chat",
		"/<command> [player]"
	],
	[
		"1",
		"Deckhand",
		"god",
		"tgm",
		"Enables your godly powers.",
		"Chat",
		"/<command> [player] [on|off]"
	],
	[
		"1",
		"Deckhand",
		"ping",
		"echo, eecho, eping, pong, epong",
		"Pong!",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"helpop",
		"eamsg",
		"Message online admins.",
		"Chat",
		"/<command> <message>"
	],
	[
		"1",
		"Deckhand",
		"skull",
		"head",
		"Set the owner of a player skull",
		"Chat",
		"/<command> [owner]"
	],
	[
		"1",
		"Deckhand",
		"broadcast",
		"ebcast, bc, bcast, ebc",
		"Broadcasts a message to the entire server.",
		"Chat",
		"/<command> <msg>"
	],
	[
		"1",
		"Deckhand",
		"clearinventory",
		"ci, eci, clean, eclean, clear, eclear, clearinvent, eclearinvent, eclearinventory",
		"Clear all items in your inventory.",
		"Chat",
		"/<command> [player|*] [item[:<data>]|*|**] [amount]"
	],
	[
		"1",
		"Deckhand",
		"unlimited",
		"eul",
		"Allows the unlimited placing of items.",
		"Chat",
		"/<command> <list|item|clear> [player]"
	],
	[
		"1",
		"Deckhand",
		"antioch",
		"tnt",
		"A little surprise for operators.",
		"Chat",
		"/<command> [message]"
	],
	[
		"1",
		"Deckhand",
		"fireball",
		"fireskull",
		"Throw a fireball or other assorted projectiles.",
		"Chat",
		"/<command> [fireball|small|large|arrow|skull|egg|snowball|expbottle|dragon|splashpotion|lingeringpotion|trident] [speed]"
	],
	[
		"1",
		"Deckhand",
		"tpa",
		"tpask",
		"Request to teleport to the specified player.",
		"Chat",
		"/<command> <player>"
	],
	[
		"1",
		"Deckhand",
		"createkit",
		"ck",
		"Create a kit in game!",
		"Chat",
		"/<command> <kitname> <delay>"
	],
	[
		"1",
		"Deckhand",
		"depth",
		"eheight",
            "States current depth",
            "Chat",
		"/depth"
	],
	[
		"1",
		"Deckhand",
		"paytoggle",
		"payon",
		"Toggles whether you are accepting payments.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"itemdb",
		"eitemdb",
		"Searches for an item.",
		"Chat",
		"/<command> <item>"
	],
	[
		"1",
		"Deckhand",
		"itemlore",
		"lore, elore, ilore, eilore, eitemlore",
		"Edit the lore of an item.",
		"Chat",
		"/<command> <add/set/clear> [text/line] [text]"
	],
	[
		"1",
		"Deckhand",
		"itemname",
		"iname, einame, eitemname, itemrename, irename, eitemrename, eirename",
		"Renames the item your currently holding. Leave name empty to reset. You can add in color codes when you have permission to.",
		"Chat",
		"/<command> [name]"
	],
	[
		"1",
		"Deckhand",
		"afk",
		"eafk, away, eaway",
		"Marks you as away-from-keyboard.",
		"Chat",
		"/<command> [player\/message...]"
	],
	[
		"1",
		"Deckhand",
		"backup",
		"ebackup",
		"Runs the backup if configured.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"burn",
		"eburn",
		"Set a player on fire.",
		"Chat",
		"/<command> <player> <seconds>"
	],
	[
		"1",
		"Deckhand",
		"customtext",
		"",
		"Allows you to create custom text commands.",
		"Chat",
		"/<alias> - Define in bukkit.yml"
	],
	[
		"1",
		"Deckhand",
		"eco",
		"eeco,economy,eeconomy",
		"Manages the server economy.",
		"Chat",
		"/<command> <give|take|set|reset> <player> <amount>"
	],
	[
		"1",
		"Deckhand",
		"exp",
		"eexp, xp",
		"Give, set or look at a players exp.",
		"Chat",
		"/<command> [show|set|give] [playername [amount]]"
	],
	[
		"1",
		"Deckhand",
		"feed",
		"eat,eeat,efeed",
		"Satisfy the hunger.",
		"Chat",
		"/<command> [player]"
	],
	[
		"1",
		"Deckhand",
		"heal",
		"eheal",
		"Heals you or the given player.",
		"Chat",
		"/<command> [player]"
	],
	[
		"1",
		"Deckhand",
		"kit",
		"ekit,kits,ekits",
		"Obtains the specified kit or views all available kits.",
		"Chat",
		"/<command> [kit] [player]"
	],
	[
		"1",
		"Deckhand",
		"kittycannon",
		"ekittycannon",
		"Throw an exploding kitten at your opponent.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"beezooka",
		"ebeezooka, beecannon, ebeecannon",
		"Throw an exploding bee at your opponent.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"nick",
		"enick,nickname,enickname",
		"Change your nickname or that of another player.",
		"Chat",
		"/<command> [player] <nickname|off>"
	],
	[
		"1",
		"Deckhand",
		"nuke",
		"enuke",
		"May death rain upon them.",
		"Chat",
		"/<command> [player]"
	],
	[
		"1",
		"Deckhand",
		"pay",
		"epay",
		"Pays another player from your balance.",
		"Chat",
		"/<command> <player> <amount>"
	],
	[
		"1",
		"Deckhand",
		"r",
		"er,reply,ereply",
		"Quickly reply to the last player to message you.",
		"Chat",
		"/<command> <message>"
	],
	[
		"1",
		"Deckhand",
		"rtoggle",
		"ertoggle, replytoggle, ereplytoggle",
		"Change whether the recipient of the reply is last recipient or last sender.",
		"Chat",
		"/<command> [player] [on|off]"
	],
	[
		"1",
		"Deckhand",
		"sell",
		"esell",
		"Sells the item currently in your hand.",
		"Chat",
		"/<command> <<itemname>|<id>|hand|inventory|blocks> [-][amount]"
	],
	[
		"1",
		"Deckhand",
		"showkit",
		"kitpreview,preview,kitshow",
		"Show contents of a kit.",
		"Chat",
		"/<command> <kitname>"
	],
	[
		"1",
		"Deckhand",
		"tempban",
		"etempban",
		"Temporary ban a user.",
		"Chat",
		"/<command> <playername> <datediff> <reason>"
	],
	[
		"1",
		"Deckhand",
		"thunder",
		"ethunder",
		"Enable\/disable thunder.",
		"Chat",
		"/<command> <true\/false> [duration]"
	],
	[
		"1",
		"Deckhand",
		"tpaccept",
		"etpaccept,tpyes,etpyes",
		"Accepts a teleport request.",
		"Chat",
		"/<command> [otherplayer]"
	],
	[
		"1",
		"Deckhand",
		"tphere",
		"s,etphere",
		"Teleport a player to you.",
		"Chat",
		"/<command> <player>"
	],
	[
		"1",
		"Deckhand",
		"tpohere",
		"etpohere",
		"Teleport here override for tptoggle.",
		"Chat",
		"/<command> <player>"
	],
	[
		"1",
		"Deckhand",
		"tppos",
		"etppos",
		"Teleport to coordinates.",
		"Chat",
		"/<command> <x> <y> <z> [yaw] [pitch] [world]"
	],
	[
		"1",
		"Deckhand",
		"tpr",
		"etpr, tprandom, etprandom",
		"Teleport randomly.",
		"Chat",
		"/<command>"
	],
	[
		"1",
		"Deckhand",
		"unban",
		"pardon,eunban,epardon",
		"Unbans the specified player.",
		"Chat",
		"/<command> <player>"
	],
	[
		"1",
		"Deckhand",
		"unbanip",
		"eunbanip,pardonip,epardonip",
		"Unbans the specified IP address.",
		"Chat",
		"/<command> <address>"
	],
	[
		"1",
		"Deckhand",
		"setspawn",
		"esetspawn",
		"Set the spawnpoint to your current position.",
		"Chat",
		"/<command> <group>"
	],
	[
		"1",
		"Deckhand",
		"spawn",
		"espawn",
		"Teleport to the spawnpoint.",
		"Chat",
		"/<command> [player]"
	],
	[
		"1",
		"Deckhand",
		"tpauto",
		"etpauto",
		"Automatically accept teleportation requests.",
		"Chat",
		"/<command> <player>"
	],
	[
		"1",
		"Deckhand",
		"delkit",
		"",
		"Delete a given kit",
		"Chat",
		"/<command> <kitname>"
	]




];

jQuery(document).ready(function($) {

      $('#CommandsTable').DataTable( {
            pageLength: 50,
            responsive: true,
            data: CommandsDataSet,
            columns: [
                  { title: "ID" },
                  { title: "Rank" },
                  { title: "Command" },
                  { title: "Aliases" },
                  { title: "Description" },
                  { title: "Category" },
                  { title: "Syntax" },
          ],
          "columnDefs": [
            {
                "targets": [ 0 ],
                "visible": false,
                "searchable": true
            },
            {
                  "targets": [6],
                  "title": "Syntax",
                  "render": function (data) {
                      data = data.replace(/\</g,"&lt;").replace(/\>/g,"&gt;");
                      return '<kbd>'+data+'</kbd>';
                  }
              }
            ],
          "createdRow": function( row, data, dataIndex){
                  if( data[2] ==  `Commodore`){
                        $(row).addClass('table-secondary');
                  }
                  else if(data[2] ==  `Rear Admiral`)
                  {
                        $(row).addClass('table-warning');   
                  }
             },
             "scrollX": true,

             "dom": "<'row'<'col-sm-12 col-md-4'l><'col-sm-12 col-md-4'p><'col-sm-12 col-md-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",

      } );




} );