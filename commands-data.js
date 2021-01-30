var CommandsDataSet = [

	[
		"1",
		"Deckhand",
		"helpop",
		"h",
		"Message online helpers, moderators and admins.",
		"Chat",
		"/<command> <message>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"list",
		"elist, online, eonline, playerlist, eplayerlist, plist, eplist, who, ewho",
		"List all online players.",
		"Chat",
		"/<command> [group]",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"tpaccept",
		"tpyes",
		"Accepts a teleport request.",
		"Chat",
		"/<command> [otherplayer]",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"tpdeny",
		"tpno",
		"Reject a teleport request.",
		"Chat",
		"/<command>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"newstats",
		"",
		"Testing the new stats system that reads from your ESC > Statistics data",
		"Chat, Stats",
		"/<command> [otherplayer]",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"colors",
		"",
		"Shows all the minecraft color codes",
		"Chat",
		"/<command>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"mail",
		"",
		"Manages inter-player, intra-server mail.",
		"Chat, Mail",
		"/<command> [send/clear/read] [playerName] (message)",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"ping",
		"",
		"Shows your ping to the server",
		"Chat",
		"/<command> [playerName]",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"servertime",
		"",
		"Shows server real time in GMT",
		"Chat",
		"/<command>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"warp",
		"warps",
		"List all warps or warp to the specified location.",
		"Chat",
		"/<command>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"whowas",
		"",
		"Shows pirates previous names",
		"Chat",
		"/<command>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"worth",
		"eprice, price, eworth",
		"Calculates the worth of items in hand or as specified.",
		"Chat",
		"/<command> <<itemname>|<id>|hand|inventory|blocks> [-][amount]",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"spawn",
		"",
		"Teleport to the spawnpoint.",
		"Chat",
		"/<command>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"suicide",
		"",
		"Causes you to perish.",
		"Chat",
		"/<command>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"help",
		"ehelp",
		"Views a list of available commands.",
		"Chat",
		"/<command> [search term] [page]",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"vote",
		"",
		"Views a list of available commands.",
		"Chat",
		"/<command> [url|ToggleBroadcast|list|Points|Next|gui|Streak|last|help|Top|Top All|Top Daily]",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"xpb",
		"xpboost",
		"View time left on XPBoost",
		"Chat",
		"/<command> [info]",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"brew",
		"",
		"Brewing",
		"Chat",
		"/<command> [seal|info]",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"crewscore",
		"",
		"Your PirateCraft Crew score",
		"Chat, Crew",
		"/<command>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"crewtop",
		"",
		"Top crew scores on PirateCraft",
		"Chat, Crew",
		"/<command>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"!",
		"",
		"Cross-server chat, prefix message with !",
		"Chat, Bungee",
		"!<message>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"msg",
		"w, m, t, pm, tell, whisper",
		"Sends a private message to the specified player.",
		"Chat",
		"/<command> <to> <message>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"doors",
		"bdm, bigdoors",
		"Open the Big doors GUI to manage all your doors",
		"doors",
		"/<command> [AddOwner <doorUID> <playerName>|RemoveOwner <doorUID> <playerName>]",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"newdoor",
		"",
		"Initiate door/drawbridge creation process. Use '-BD' to initiate the big door creation process, '-PC' for portcullis, and '-DB' for drawbridge. Defaults to big door. Supported types: 'door', 'drawbridge', 'portcullis', 'slidingdoor', 'flag'.",
		"doors",
		"/<command> [-BD | - PC | -DB] <DoorName>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"NewPortcullis",
		"",
		"Initiate the portcullis creation process.",
		"doors",
		"/<command> <PortcullisName>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"NewDrawbridge",
		"",
		"Initiate the drawbridge creation process.",
		"doors",
		"/<command> <DrawbridgeName>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"SetBlocksToMove",
		"",
		"Sets the number of blocks this door will try to move. Only applies to doors such as portcullises and sliding doors.",
		"doors",
		"/<command> <doorUID> <blocksToMove>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"SetDoorRotation",
		"",
		"Changes the direction a door will try to move.",
		"doors",
		"/<command> <doorUID> <direction>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"BDCancel",
		"",
		"Cancel object creation process.",
		"doors",
		"/<command>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"DelDoor",
		"",
		"Allows you to delete a Big Door.",
		"doors",
		"/<command> <DoorName>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"OpenDoor",
		"",
		"Allows you to open a Big Door (of any type). Also allows opening more than 1 door at a time.",
		"doors",
		"/<command> <DoorName> [DoorName2] ... [DoorNameX]",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"CloseDoor",
		"",
		"Allows you to close a Big Door (of any type).",
		"doors",
		"/<command> <DoorName> [DoorName2] ... [DoorNameX]",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"ToggleDoor",
		"",
		"Allows you to open a Big Door (of any type) when it is closed or close it when it's open.",
		"doors",
		"/<command> <DoorName> [DoorName2] ... [DoorNameX]",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"ListDoors",
		"",
		"List all doors owned by you, with a specific name if provided.",
		"doors",
		"/<command> <Name>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"DoorInfo",
		"",
		"Allows you to get information about a given door.",
		"doors",
		"/<command> <DoorName>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"ChangePowerBlockLoc",
		"",
		"Allows you to change the location of the powerblock of a given door.",
		"doors",
		"/<command> <DoorName>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"InspectPowerBlockLoc",
		"",
		"Gives you a tool that gives you the door info of any powerblock you hit with it.",
		"doors",
		"/<command>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"SetAutoCloseTime",
		"",
		"Sets the amount of time after which a door will try to close itself after it was opened. Negative values mean the door will not try to automatically close (you can still use redstone, of course).",
		"doors",
		"/<command> <doorUID> <autoCloseTime",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"delhome",
		"edelhome, remhome, eremhome, rmhome, ermhome",
		"Removes a home.",
		"Chat",
		"/<command> [player:]<name>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"wild",
		"",
		"Teleports you into a random location",
		"Chat, Wilderness",
		"/<command>",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"crate",
		"cr",
		"Manage your Treasure Chests keys and loot at /warp cove",
		"Crate, Treasure",
		"/<command> [claim] [preview]",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"auc",
		"",
		"Opens the Pirate Auction",
		"Auction, PirateCraft",
		"/<command> [news|clear|collect]",
		"Survival"
	],
	[
		"1",
		"Deckhand",
		"payconfirmtoggle",
		"epayconfirmtoggle, payconfirmoff, epayconfirmoff, payconfirmon, epayconfirmon, payconfirm, epayconfirm",
		"Toggles whether you are prompted to confirm payments.",
		"Chat",
		"/<command>",
		"Survival"
	],
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
                  { title: "Server" },
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