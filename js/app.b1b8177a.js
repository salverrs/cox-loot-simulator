(function(){"use strict";var t={160:function(t,e,o){var l=o(5130),n=o(6768),i=o(4232);const a={class:"app-wrapper"},s={class:"main-container"},r={class:"parameters"},u={class:"parameter-controls"},c={class:"parameter-controls"},h={key:0,class:"choose-items-container"},p={class:"checkboxes"},m=["value"],d={class:"expected-purple-rate"},g={key:0},y={key:1},L={class:"parameter-generation"},v=["disabled"],k={class:"dynamic-tooltip","data-tooltip-content":"Toggle Info"},w={class:"dynamic-tooltip underlined","data-tooltip-content":"Estimations averaged across all rolls"},b={class:"dynamic-tooltip underlined","data-tooltip-content":"Chance of receiving 1 or more purple (%)"},C={class:"dynamic-tooltip underlined","data-tooltip-content":"Excluding completion capes"},f={class:"loot-panel-container"},S={class:"title-text"},I=["checked"],x=["checked"],R=["checked"],P=["checked"],O={key:0,class:"loot-grid"},D=["href"],_=["src","alt","onMouseenter","onMousemove","onMouseleave"],A={key:1,class:"subtitle-text"},M={class:"title-text"},T={class:"all-loot"},U=["checked"],q=["checked"],E=["checked"],N=["checked"],K={key:0,class:"loot-grid"},$=["href"],V=["src","alt","onMouseenter","onMousemove","onMouseleave"],F={key:1,class:"subtitle-text"},G={class:"title-text"},X={class:"collection-log"},Q={key:0,class:"loot-grid"},W=["href"],B=["src","alt","onMouseenter"],H={key:1,class:"subtitle-text"};function j(t,e,o,j,z,J){return(0,n.uX)(),(0,n.CE)("div",a,[e[44]||(e[44]=(0,n.Lk)("span",{id:"tooltip",class:"custom-tooltip"},null,-1)),e[45]||(e[45]=(0,n.Lk)("a",{class:"switch-simulator",href:"https://salverrs.github.io/toa-loot-simulator/"},[(0,n.Lk)("span",null,"ToA"),(0,n.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"16px",viewBox:"0 -960 960 960",width:"16px",fill:"#e8eaed"},[(0,n.Lk)("path",{d:"M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"})])],-1)),e[46]||(e[46]=(0,n.Lk)("header",null,[(0,n.Lk)("h1",null,"Chambers of Xeric Loot Simulator")],-1)),(0,n.Lk)("div",s,[(0,n.Lk)("div",r,[(0,n.Lk)("div",u,[(0,n.Lk)("label",null,[e[23]||(e[23]=(0,n.eW)("Personal Points: ")),(0,n.bo)((0,n.Lk)("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=t=>z.personalPoints=t),min:"0",max:"9999999",style:{"max-width":"8rem"}},null,512),[[l.Jo,z.personalPoints,void 0,{number:!0}]])]),(0,n.Lk)("label",null,[e[25]||(e[25]=(0,n.eW)("Challenge Mode: ")),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":e[1]||(e[1]=t=>z.challengeMode=t)},e[24]||(e[24]=[(0,n.Lk)("option",{value:"disabled"},"Disabled",-1),(0,n.Lk)("option",{value:"enabled"},"Enabled",-1)]),512),[[l.u1,z.challengeMode]])]),(0,n.Lk)("label",null,[e[26]||(e[26]=(0,n.Lk)("span",{class:"dynamic-tooltip underlined","data-tooltip-content":"Max point variance (%) range"},"PV (%):",-1)),(0,n.bo)((0,n.Lk)("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=t=>z.variance=t),min:"0",max:"200",style:{"max-width":"80px"}},null,512),[[l.Jo,z.variance,void 0,{number:!0}]])]),(0,n.Lk)("label",null,[e[27]||(e[27]=(0,n.eW)("Rolls: ")),(0,n.bo)((0,n.Lk)("input",{type:"number","onUpdate:modelValue":e[3]||(e[3]=t=>z.numberOfRolls=t),min:"1",max:"10000",style:{"max-width":"80px"}},null,512),[[l.Jo,z.numberOfRolls,void 0,{number:!0}]])])]),(0,n.Lk)("div",c,[(0,n.Lk)("label",null,[e[28]||(e[28]=(0,n.eW)("Auto Roll Interval (ms): ")),(0,n.bo)((0,n.Lk)("input",{type:"number","onUpdate:modelValue":e[4]||(e[4]=t=>z.autoRollInterval=t),min:"1",max:"3600000",style:{"max-width":"100px"}},null,512),[[l.Jo,z.autoRollInterval,void 0,{number:!0}]])]),(0,n.Lk)("label",null,[e[30]||(e[30]=(0,n.eW)("Auto Roll Stop: ")),(0,n.bo)((0,n.Lk)("select",{"onUpdate:modelValue":e[5]||(e[5]=t=>z.autoRollStopCondition=t)},e[29]||(e[29]=[(0,n.Fv)('<option value="never">Never</option><option value="purple">Purple</option><option value="pet">Pet</option><option value="newCollectionLog">New Collection Log</option><option value="allUniques">All Purples</option><option value="log">Green Logged</option><option value="chooseItemsAny">Choose Items (Any)</option><option value="chooseItemsAll">Choose Items (All)</option>',8)]),512),[[l.u1,z.autoRollStopCondition]])]),"chooseItemsAny"===z.autoRollStopCondition||"chooseItemsAll"===z.autoRollStopCondition?((0,n.uX)(),(0,n.CE)("div",h,[(0,n.Lk)("div",p,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(z.allCollLogItemsList,(t=>((0,n.uX)(),(0,n.CE)("div",{key:t,class:"checkbox-item"},[(0,n.Lk)("label",{class:(0,i.C4)({"greyed-out":z.collectionLog[t]})},[(0,n.bo)((0,n.Lk)("input",{type:"checkbox",value:t,"onUpdate:modelValue":e[6]||(e[6]=t=>z.selectedItems=t)},null,8,m),[[l.lH,z.selectedItems]]),(0,n.eW)(" "+(0,i.v_)(t),1)],2)])))),128))])])):(0,n.Q3)("",!0)]),(0,n.Lk)("div",d,[e[31]||(e[31]=(0,n.eW)(" Estimated Purple Rate:  ")),z.variance>0?((0,n.uX)(),(0,n.CE)("span",g,(0,i.v_)(J.formatPurpleRate(J.expectedPurpleRange.min,J.expectedPurpleRange.max)),1)):((0,n.uX)(),(0,n.CE)("span",y,(0,i.v_)(J.expectedPurpleRange.max.toFixed(2))+"% ",1))]),(0,n.Lk)("div",L,[(0,n.Lk)("button",{onClick:e[7]||(e[7]=(...t)=>J.simulateLoot&&J.simulateLoot(...t))},"Roll"),(0,n.Lk)("button",{onClick:e[8]||(e[8]=t=>z.autoRolling?J.stopAutoRoll():J.startAutoRoll()),disabled:!J.canStartAutoRoll&&!z.autoRolling,class:(0,i.C4)({"stop-button":z.autoRolling,"disabled-button":!J.canStartAutoRoll&&!z.autoRolling})},(0,i.v_)(z.autoRolling?"Stop Auto Roll":"Start Auto Roll"),11,v),(0,n.Lk)("button",{onClick:e[9]||(e[9]=(...t)=>J.resetLoot&&J.resetLoot(...t)),style:{"background-color":"#d1ba26"}}," Reset ")])]),(0,n.Lk)("span",k,[(0,n.Lk)("button",{onClick:e[10]||(e[10]=(...t)=>J.toggleExtraInfo&&J.toggleExtraInfo(...t)),class:"toggle-extra-info","aria-label":"Toggle Info"},e[32]||(e[32]=[(0,n.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-info-lg",viewBox:"0 0 16 16"},[(0,n.Lk)("path",{d:"m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0"})],-1)]))]),(0,n.Lk)("div",{class:(0,i.C4)(["extra-info",z.showExtraInfo?"visible":"hidden"])},[(0,n.Lk)("span",w," Expected Purples: "+(0,i.v_)(z.expectedPurplePercent.toFixed(2))+"% ",1),(0,n.Lk)("span",null,"Actual Purples: "+(0,i.v_)(z.actualPurplePercent.toFixed(2))+"%",1),(0,n.Lk)("span",null,"Total Purples: "+(0,i.v_)(z.totalPurples),1),(0,n.Lk)("span",null,"Dupe Purples: "+(0,i.v_)(z.dupesCount),1),(0,n.Lk)("span",null,"Dry Streak: "+(0,i.v_)(z.dryStreak),1),(0,n.Lk)("span",b," Dryness: "+(0,i.v_)(z.drynessPercent.toFixed(2))+"% ",1),(0,n.Lk)("span",null,"Longest Dry Streak: "+(0,i.v_)(z.longestDryStreak),1),(0,n.Lk)("span",null,"Worst Dryness: "+(0,i.v_)(z.worstDryness.toFixed(2))+"%",1),(0,n.Lk)("span",null,"Total Value: "+(0,i.v_)(J.formatTotalGP(J.totalLootValue)),1),(0,n.Lk)("span",C,[(0,n.eW)("Logs Complete: "+(0,i.v_)(z.logsComplete)+"/"+(0,i.v_)(z.totalLogs),1),z.logsComplete>=z.totalLogs?((0,n.uX)(),(0,n.CE)(n.FK,{key:0},[(0,n.eW)(" ("+(0,i.v_)(z.greenLoggedKc)+"kc)",1)],64)):(0,n.Q3)("",!0)])],2),(0,n.Lk)("div",f,[(0,n.Lk)("h2",S," Loot from "+(0,i.v_)(z.lastRolls)+" "+(0,i.v_)(1===z.lastRolls?"roll":"rolls"),1),(0,n.Lk)("div",{class:(0,i.C4)(["loot-results",{"no-border":!z.currentLoot.length,"white-border":z.currentLoot.length&&!z.showHasPurpleBorder&&!z.showNewCollectionLogBorder,"coll-log-border":z.currentLoot.length&&!z.showHasPurpleBorder&&z.showNewCollectionLogBorder,"purple-border":z.showHasPurpleBorder}])},[(0,n.Lk)("details",{ref:"currentSortDropdown",class:"dropdown sort-dropdown",onClick:e[15]||(e[15]=t=>J.handleClickInside("current"))},[e[37]||(e[37]=(0,n.Lk)("summary",{role:"button"},[(0,n.Lk)("i",{class:"fa fa-sort"})],-1)),(0,n.Lk)("ul",null,[(0,n.Lk)("li",null,[(0,n.Lk)("label",null,[(0,n.Lk)("input",{type:"radio",name:"sortOptionCurrent",value:"valueDesc",onChange:e[11]||(e[11]=t=>J.setSortOption("current","valueDesc")),checked:"valueDesc"===z.currentSortOption},null,40,I),e[33]||(e[33]=(0,n.eW)(" Value (Highest) "))])]),(0,n.Lk)("li",null,[(0,n.Lk)("label",null,[(0,n.Lk)("input",{type:"radio",name:"sortOptionCurrent",value:"valueAsc",onChange:e[12]||(e[12]=t=>J.setSortOption("current","valueAsc")),checked:"valueAsc"===z.currentSortOption},null,40,x),e[34]||(e[34]=(0,n.eW)(" Value (Lowest) "))])]),(0,n.Lk)("li",null,[(0,n.Lk)("label",null,[(0,n.Lk)("input",{type:"radio",name:"sortOptionCurrent",value:"obtainedDesc",onChange:e[13]||(e[13]=t=>J.setSortOption("current","obtainedDesc")),checked:"obtainedDesc"===z.currentSortOption},null,40,R),e[35]||(e[35]=(0,n.eW)(" Newest "))])]),(0,n.Lk)("li",null,[(0,n.Lk)("label",null,[(0,n.Lk)("input",{type:"radio",name:"sortOptionCurrent",value:"obtainedAsc",onChange:e[14]||(e[14]=t=>J.setSortOption("current","obtainedAsc")),checked:"obtainedAsc"===z.currentSortOption},null,40,P),e[36]||(e[36]=(0,n.eW)(" Oldest "))])])])],512),z.currentLoot.length?((0,n.uX)(),(0,n.CE)("div",O,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(J.sortedCurrentLoot,((t,e)=>((0,n.uX)(),(0,n.CE)("div",{key:t.itemName,class:"loot-item"},[(0,n.Lk)("a",{href:t.url,target:"_blank",style:{"text-decoration":"none"}},[(0,n.Lk)("img",{src:t.imageUrl,alt:t.itemName,class:"loot-image",onMouseenter:e=>J.isTrackedKCItem(t)&&J.showTooltip(e,J.getUniqueItemKC(t,!0)),onMousemove:e=>J.isTrackedKCItem(t)&&J.moveTooltip(e),onMouseleave:e=>J.isTrackedKCItem(t)&&J.hideTooltip()},null,40,_),t.quantity>1?((0,n.uX)(),(0,n.CE)("span",{key:0,class:(0,i.C4)(["quantity-text",J.formatQuantity(t).colorClass])},(0,i.v_)(J.formatQuantity(t).formattedQuantity),3)):(0,n.Q3)("",!0)],8,D)])))),128))])):((0,n.uX)(),(0,n.CE)("p",A,"No loot roll yet"))],2),(0,n.Lk)("h2",M," Loot from "+(0,i.v_)(z.totalRollsDelayed)+" "+(0,i.v_)(1===z.totalRollsDelayed?"roll":"rolls"),1),(0,n.Lk)("div",T,[(0,n.Lk)("details",{ref:"allSortDropdown",class:"dropdown sort-dropdown",onClick:e[20]||(e[20]=t=>J.handleClickInside("all"))},[e[42]||(e[42]=(0,n.Lk)("summary",{role:"button"},[(0,n.Lk)("i",{class:"fa fa-sort"})],-1)),(0,n.Lk)("ul",null,[(0,n.Lk)("li",null,[(0,n.Lk)("label",null,[(0,n.Lk)("input",{type:"radio",name:"sortOptionAll",value:"valueDesc",onChange:e[16]||(e[16]=t=>J.setSortOption("all","valueDesc")),checked:"valueDesc"===z.allSortOption},null,40,U),e[38]||(e[38]=(0,n.eW)(" Value (Highest) "))])]),(0,n.Lk)("li",null,[(0,n.Lk)("label",null,[(0,n.Lk)("input",{type:"radio",name:"sortOptionAll",value:"valueAsc",onChange:e[17]||(e[17]=t=>J.setSortOption("all","valueAsc")),checked:"valueAsc"===z.allSortOption},null,40,q),e[39]||(e[39]=(0,n.eW)(" Value (Lowest) "))])]),(0,n.Lk)("li",null,[(0,n.Lk)("label",null,[(0,n.Lk)("input",{type:"radio",name:"sortOptionAll",value:"obtainedDesc",onChange:e[18]||(e[18]=t=>J.setSortOption("all","obtainedDesc")),checked:"obtainedDesc"===z.allSortOption},null,40,E),e[40]||(e[40]=(0,n.eW)(" Newest "))])]),(0,n.Lk)("li",null,[(0,n.Lk)("label",null,[(0,n.Lk)("input",{type:"radio",name:"sortOptionAll",value:"obtainedAsc",onChange:e[19]||(e[19]=t=>J.setSortOption("all","obtainedAsc")),checked:"obtainedAsc"===z.allSortOption},null,40,N),e[41]||(e[41]=(0,n.eW)(" Oldest "))])])])],512),z.allLoot.length?((0,n.uX)(),(0,n.CE)("div",K,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(J.sortedAllLoot,((t,e)=>((0,n.uX)(),(0,n.CE)("div",{key:t.itemName,class:"loot-item"},[(0,n.Lk)("a",{href:t.url,target:"_blank",style:{"text-decoration":"none"}},[(0,n.Lk)("img",{src:t.imageUrl,alt:t.itemName,class:"loot-image",onMouseenter:e=>J.isTrackedKCItem(t)&&J.showTooltip(e,J.getUniqueItemKC(t,!0)),onMousemove:e=>J.isTrackedKCItem(t)&&J.moveTooltip(e),onMouseleave:e=>J.isTrackedKCItem(t)&&J.hideTooltip()},null,40,V),t.quantity>1?((0,n.uX)(),(0,n.CE)("span",{key:0,class:(0,i.C4)(["quantity-text",J.formatQuantity(t).colorClass])},(0,i.v_)(J.formatQuantity(t).formattedQuantity),3)):(0,n.Q3)("",!0)],8,$)])))),128))])):((0,n.uX)(),(0,n.CE)("p",F,"No loot results yet"))]),(0,n.Lk)("h2",G,[e[43]||(e[43]=(0,n.eW)(" Collection Log ")),(0,n.Lk)("span",{style:(0,i.Tr)({color:z.logsCompleteDelayed>=z.totalLogs?"#6bb537":""})},"("+(0,i.v_)(z.logsCompleteDelayed)+"/"+(0,i.v_)(z.totalLogs)+")",5)]),(0,n.Lk)("div",X,[z.allCollLogItemsList.length?((0,n.uX)(),(0,n.CE)("div",Q,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(z.allCollLogItemsList,(t=>((0,n.uX)(),(0,n.CE)("div",{key:t,class:(0,i.C4)(["loot-item",{"obtained-item":J.isItemObtained(t),"not-obtained-item":!J.isItemObtained(t)}])},[(0,n.Lk)("a",{href:J.getItemUrl(t),target:"_blank",style:{"text-decoration":"none"}},[(0,n.Lk)("img",{src:J.getItemImage(t),alt:t,class:"loot-image",onMouseenter:e=>J.showTooltip(e,J.getUniqueItemKCByName(t)),onMousemove:e[21]||(e[21]=t=>J.moveTooltip(t)),onMouseleave:e[22]||(e[22]=(...t)=>J.hideTooltip&&J.hideTooltip(...t))},null,40,B),J.getItemQuantity(t)>1?((0,n.uX)(),(0,n.CE)("span",{key:0,class:(0,i.C4)(["quantity-text",J.formatQuantity({itemName:t,quantity:J.getItemQuantity(t)}).colorClass])},(0,i.v_)(J.formatQuantity({itemName:t,quantity:J.getItemQuantity(t)}).formattedQuantity),3)):(0,n.Q3)("",!0)],8,W)],2)))),128))])):((0,n.uX)(),(0,n.CE)("p",H,"No collection log items"))])])])])}o(4114),o(7642),o(8004),o(3853),o(5876),o(2475),o(5024),o(1698);class z{constructor(t,e,o,l,n,i){this.itemName=t,this.quantity=e,this.itemValue=o,this.imageUrl=l,this.url=n,this.type=i}}class J{constructor(t,e,o,l=null,n=null){this.itemName=t,this.divisor=e,this.itemValue=o,this.quantity=0,this.url=l||this.generateUrl(t),this.imageUrl=n||this.generateImageUrl(t)}generateUrl(t){return`https://oldschool.runescape.wiki/w/${t.replace(/\s/g,"_")}`}generateImageUrl(t){return`images/${t.replace(/\s/g,"_")}.png`}}class Y{constructor(t,e,o,l=null,n=null){this.itemName=t,this.weight=e,this.itemValue=o,this.chance=0,this.url=l||this.generateUrl(t),this.imageUrl=n||this.generateImageUrl(t)}generateUrl(t){return`https://oldschool.runescape.wiki/w/${t.replace(/\s/g,"_")}`}generateImageUrl(t){return`images/${t.replace(/\s/g,"_")}.png`}}class Z{constructor(t,e,o,l){this.personalPoints=t,this.challengeMode=e,this.hasAncientTablet=o,this.variance=l,this.rng=Math.random,this.maxRoll=1/8675*57e4,this.normalLootItems=this.initializeNormalLootItems(),this.uniqueLootItems=this.initializeUniqueLootItems()}initializeNormalLootItems(){return[new J("Death rune",36,190),new J("Blood rune",32,279),new J("Soul rune",20,176),new J("Rune arrow",14,67),new J("Dragon arrow",202,1456),new J("Grimy toadflax",525,2863),new J("Grimy ranarr weed",800,7097),new J("Grimy irit leaf",162,1560),new J("Grimy avantoe",234,3803),new J("Grimy kwuarm",378,3881),new J("Grimy snapdragon",1348,8703),new J("Grimy cadantine",358,3666),new J("Grimy lantadyme",249,1586),new J("Grimy dwarf weed",201,2553),new J("Grimy torstol",824,4241),new J("Silver ore",20,74),new J("Coal",20,131),new J("Gold ore",44,176),new J("Mithril ore",32,164),new J("Adamantite ore",167,823),new J("Runite ore",2093,10902),new J("Uncut sapphire",189,233),new J("Uncut emerald",142,489),new J("Uncut ruby",250,1004),new J("Uncut diamond",514,2281),new J("Lizardman fang",28,15),new J("Pure essence",2,1),new J("Saltpetre",24,8),new J("Teak plank",100,1013),new J("Mahogany plank",240,2304),new J("Dynamite",54,591),new J("Torn prayer scroll",999999,46957),new J("Dark relic",999999,0)]}initializeUniqueLootItems(){return[new Y("Dexterous prayer scroll",20,17482665),new Y("Arcane prayer scroll",20,2105945),new Y("Twisted buckler",4,20201013),new Y("Dragon hunter crossbow",4,86813578),new Y("Dinh's bulwark",3,24496500),new Y("Ancestral hat",3,48805248),new Y("Ancestral robe top",3,158772884),new Y("Ancestral robe bottom",3,118323336),new Y("Dragon claws",3,79699447),new Y("Elder maul",2,133145759),new Y("Kodai insignia",2,117585355),new Y("Twisted bow",2,1685595577)]}simulateLootRoll(t){this.ancientTabletObtained=t;const e=Math.max(this.calculateTotalPoints(),0),o=this.getUniqueRewardPool(e);let l=[],n=!1;for(let r=0;r<o.uniqueChances.length;r++){if(this.rng()>=o.uniqueChances[r])continue;const t=this.rng();let e=0;for(let i of o.uniqueLootPool)if(e+=i.chance,t<e){l.push(new z(i.item.itemName,1,i.item.itemValue,i.item.imageUrl,i.item.url,"unique")),n=!0;break}}if(!n){let o=[...this.normalLootItems];for(let n=0;n<2;n++){if(!this.hasAncientTablet){const e=.1,o=this.rng();if(o<e){l.push(new z("Ancient tablet",1,0,this.generateImageUrl("Ancient tablet"),this.generateUrl("Ancient tablet"),"normal")),t=!0,this.hasAncientTablet=!0;continue}}const n=Math.floor(this.rng()*o.length),i=o[n];l.push(new z(i.itemName,this.calculateLootQuantity(e,i.divisor),i.itemValue,i.imageUrl,i.url,"normal")),o.splice(n,1)}}const i=1/70,a=this.rng();a<i&&l.push(new z("Onyx",1,2912298,this.generateImageUrl("Onyx"),this.generateUrl("Onyx"),"normal"));const s=this.simulateTertiaryDrops(n);return l=l.concat(s),{lootResults:l,totalPoints:e,ancientTabletObtained:t}}simulateTertiaryDrops(t){let e=[];if(this.challengeMode){const t=1/400,o=this.rng();o<t&&e.push(new z("Metamorphic dust",1,0,this.generateImageUrl("Metamorphic dust"),this.generateUrl("Metamorphic dust"),"tertiary"));const l=1/75,n=this.rng();n<l&&e.push(new z("Twisted ancestral colour kit",1,0,this.generateImageUrl("Twisted ancestral colour kit"),this.generateUrl("Twisted ancestral colour kit"),"tertiary"))}if(t){const t=1/53,o=this.rng();o<t&&e.push(new z("Olmlet",1,0,this.generateImageUrl("Olmlet"),this.generateUrl("Olmlet"),"tertiary"))}else{const t=1/12,o=this.rng();o<t&&e.push(new z("Clue scroll (elite)",1,0,this.generateImageUrl("Clue scroll (elite)"),this.generateUrl("Clue scroll (elite)"),"tertiary"))}return e}calculateTotalPoints(){return 0==this.variance?this.personalPoints:this.applyVariance(this.personalPoints,this.variance)}applyVariance(t,e){const o=t*(e/100),l=Math.floor(t-o),n=Math.ceil(t+o);return Math.floor(Math.random()*(n-l+1))+l}getUniqueRewardPool(t){const e=this.determineUniqueChancesFromTotalPoints(t),o=[];for(let l of this.uniqueLootItems){let t=l.weight/69;o.push({item:l,chance:t})}return{uniqueChances:e,uniqueLootPool:o}}determineUniqueChancesFromTotalPoints(t){const e=[];let o=t*(1/8675);for(let l=0;l<3;l++){if(!(o>this.maxRoll)){e.push(o/100);break}e.push(this.maxRoll/100),o-=this.maxRoll}return e}calculateLootQuantity(t,e){if(999999==e)return 1;let o=Math.floor(t/e);return Math.max(o,1)}calculatePointsWithMaxVariance(t=!1){let e=this.personalPoints;return e=this.applyMaxVariance(e,t),e}applyMaxVariance(t,e){const o=t*(this.variance/100);return e?Math.floor(t-o):Math.ceil(t+o)}getExpectedPurpleRange(){const t=Math.max(this.calculatePointsWithMaxVariance(!0),0),e=this.calculatePointsWithMaxVariance(!1),o=this.getUniqueRewardPool(t),l=this.getUniqueRewardPool(e);let n=1;for(const a of o.uniqueChances)n*=1-a;let i=1;for(const a of l.uniqueChances)i*=1-a;return{min:100*(1-n),max:100*(1-i)}}generateUrl(t){return`https://oldschool.runescape.wiki/w/${t.replace(/\s/g,"_")}`}generateImageUrl(t){return`images/${t.replace(/\s/g,"_")}.png`}}var tt=Z,et={data(){return{personalPoints:32e3,pathInvocation:0,challengeMode:"disabled",numberOfRolls:1,lastRolls:0,currentLoot:[],allLoot:[],totalRolls:0,totalRollsDelayed:0,rollExecuted:!1,hasPurple:!1,newCollectionLog:!1,showHasPurpleBorder:!1,showNewCollectionLogBorder:!1,lootSimulator:null,dryStreak:0,longestDryStreak:0,drynessPercent:0,worstDryness:0,logsComplete:0,logsCompleteDelayed:0,greenLoggedKc:-1,totalLogs:19,variance:5,rollHistory:[],autoRolling:!1,autoRollInterval:300,stopOnPurple:!0,autoRollTimer:null,totalPurples:0,itemKCs:{},currentitemKCs:{},petObtained:!1,showExtraInfo:!1,autoRollStopCondition:"purple",collectionLog:{},uniqueItemsList:["Dexterous prayer scroll","Arcane prayer scroll","Twisted buckler","Dragon hunter crossbow","Dinh's bulwark","Ancestral hat","Ancestral robe top","Ancestral robe bottom","Dragon claws","Elder maul","Kodai insignia","Twisted bow"],tertiaryItemsList:["Onyx","Ancient tablet","Metamorphic dust","Twisted ancestral colour kit","Olmlet"],allCollLogItemsList:["Twisted bow","Kodai insignia","Elder maul","Dragon claws","Dinh's bulwark","Ancestral hat","Ancestral robe top","Ancestral robe bottom","Twisted buckler","Dragon hunter crossbow","Dexterous prayer scroll","Arcane prayer scroll","Torn prayer scroll","Dark relic","Ancient tablet","Metamorphic dust","Twisted ancestral colour kit","Onyx","Olmlet"],selectedItems:[],ancientTabletObtained:!1,sortOptions:{current:"valueDesc",all:"valueDesc"},acquiredDates:{current:{},all:{}},currentSortOption:"valueDesc",allSortOption:"valueDesc",activeDropdown:null,imageCache:new Set,imageCacheRefs:new Set,expectedPurplePercent:0,actualPurplePercent:0,totalPurpleChanceSum:0,dupesCount:0,imageList:["Adamantite_ore.png","Ancestral_hat.png","Ancestral_robe_bottom.png","Ancestral_robe_top.png","Ancient_tablet.png","Arcane_prayer_scroll.png","Blood_rune.png","Coal.png","Dark_relic.png","Death_rune.png","Dexterous_prayer_scroll.png","Dinh's_bulwark.png","Dragon_arrow_5.png","Dragon_claws.png","Dragon_hunter_crossbow.png","Dynamite.png","Elder_maul.png","Gold_ore.png","Grimy_avantoe.png","Grimy_cadantine.png","Grimy_dwarf_weed.png","Grimy_irit_leaf.png","Grimy_kwuarm.png","Grimy_lantadyme.png","Grimy_ranarr_weed.png","Grimy_snapdragon.png","Grimy_toadflax.png","Grimy_torstol.png","Kodai_insignia.png","Lizardman_fang.png","Mahogany_plank.png","Metamorphic_dust.png","Mithril_ore.png","Olmlet.png","Onyx.png","Pure_essence.png","Rune_arrow.png","Runite_ore.png","Saltpetre.png","Silver_ore.png","Soul_rune.png","Teak_plank.png","Torn_prayer_scroll.png","Twisted_ancestral_colour_kit.png","Twisted_bow.png","Twisted_buckler.png","Uncut_diamond.png","Uncut_emerald.png","Uncut_ruby.png","Uncut_sapphire.png","Clue_scroll_(elite).png"]}},computed:{expectedPurpleRange(){if(!this.lootSimulator)return{min:0,max:0};const t=this.lootSimulator.getExpectedPurpleRange();return{min:t.min,max:t.max}},canStartAutoRoll(){return!!("chooseItemsAny"!==this.autoRollStopCondition&&"chooseItemsAll"!==this.autoRollStopCondition||this.selectedItems&&0!==this.selectedItems.length)&&!this.isOneTimeAutoRollStopConditionMet()},sortedCurrentLoot(){return this.sortLoot(this.currentLoot,this.currentSortOption)},sortedAllLoot(){return this.sortLoot(this.allLoot,this.allSortOption)},totalLootValue(){return this.allLoot.reduce(((t,e)=>t+e.itemValue*e.quantity),0)}},created(){const t=localStorage.getItem("currentSortOption"),e=localStorage.getItem("allSortOption");this.currentSortOption=t||"valueDesc",this.allSortOption=e||"valueDesc",this.applySorting("current"),this.applySorting("all");const o=localStorage.getItem("savedParameters");if(o){const t=JSON.parse(o);this.numberOfRolls=void 0!==t.numberOfRolls?parseInt(t.numberOfRolls):1,this.autoRollStopCondition=t.autoRollStopCondition||"purple",this.personalPoints=void 0!==t.personalPoints?parseInt(t.personalPoints):32e3,this.challengeMode=void 0!==t.challengeMode?t.challengeMode:"disabled",this.variance=void 0!==t.variance?parseInt(t.variance):5,this.autoRollInterval=void 0!==t.autoRollInterval?parseInt(t.autoRollInterval):300,this.selectedItems=void 0!==t.selectedItems?t.selectedItems:[]}this.initializeLootSimulator()},watch:{autoRollStopCondition:"saveParameters",personalPoints(){this.validateMinMax("personalPoints",0,999999),this.saveParameters(),this.refreshLootSimulator()},challengeMode(){this.saveParameters(),this.refreshLootSimulator()},variance(){this.validateMinMax("variance",0,200),this.saveParameters(),this.refreshLootSimulator()},numberOfRolls(){this.validateMinMax("numberOfRolls",1,1e4),this.saveParameters()},autoRollInterval(){this.validateMinMax("autoRollInterval",1,36e5),this.saveParameters()},selectedItems:{handler(t){this.saveParameters()},deep:!0}},mounted(){this.preloadImages(),setTimeout((()=>{this.preloadImages()}),500);const t=document.getElementById("tooltip"),e=document.querySelectorAll(".dynamic-tooltip");e.forEach((e=>{const o=e.getAttribute("data-tooltip-content");e.addEventListener("mouseenter",(()=>{t.textContent=o,t.style.display="block"})),e.addEventListener("mousemove",(e=>{t.style.left=`${e.pageX+15}px`,t.style.top=e.pageY-25+"px"})),e.addEventListener("mouseleave",(()=>{t.style.display="none"}))})),document.addEventListener("click",this.handleClickOutside)},beforeUnmount(){this.stopAutoRoll(),document.removeEventListener("click",this.handleClickOutside)},methods:{isTrackedKCItem(t){return"unique"===t.type||"tertiary"===t.type||"Ancient tablet"===t.itemName||"Torn prayer scroll"===t.itemName||"Onyx"===t.itemName||"Dark relic"===t.itemName},validateMinMax(t,e,o){this[t]<e?this[t]=e:this[t]>o&&(this[t]=o)},formatPurpleRate(t,e){return t.toFixed(2)!=e.toFixed(2)?`${t.toFixed(2)}% - ${e.toFixed(2)}%`:t.toFixed(3)!==e.toFixed(3)?`${t.toFixed(3)}% - ${e.toFixed(3)}%`:t.toFixed(4)!==e.toFixed(4)?`${t.toFixed(4)}% - ${e.toFixed(4)}%`:`~${t.toFixed(2)}%`},isItemObtained(t){return this.allLoot.some((e=>e.itemName===t))},getItemQuantity(t){const e=this.allLoot.find((e=>e.itemName===t));return e?e.quantity:0},getUniqueItemKCByName(t){const e=this.allLoot.find((e=>e.itemName===t));return e?this.getUniqueItemKC(e,!1):""},getItemImage(t){return`images/${t.replace(/\s/g,"_")}.png`},getItemUrl(t){return`https://oldschool.runescape.wiki/w/${t.replace(/\s/g,"_")}`},preloadImages(){this.imageList.forEach((t=>{const e=new Image;e.src=`images/${t}`}))},preloadLootImages(t){return new Promise((e=>{let o=0;const l=t.filter((t=>!this.imageCache.has(t.imageUrl))),n=l.length;0!==n?l.forEach((t=>{const l=new Image;l.src=t.imageUrl,l.onload=l.onerror=()=>{o++,this.imageCacheRefs.add(l),this.imageCache.add(t.imageUrl),o===n&&e()}})):e()}))},handleClickInside(t){this.activeDropdown=t},handleClickOutside(t){const e=this.$refs.currentSortDropdown,o=this.$refs.allSortDropdown;!this.activeDropdown||e.contains(t.target)||o.contains(t.target)||(e.removeAttribute("open"),o.removeAttribute("open"),this.activeDropdown=null)},setSortOption(t,e){"current"===t?(this.currentSortOption=e,localStorage.setItem("currentSortOption",e),this.applySorting("current"),this.$refs.currentSortDropdown.removeAttribute("open")):"all"===t&&(this.allSortOption=e,localStorage.setItem("allSortOption",e),this.applySorting("all"),this.$refs.allSortDropdown.removeAttribute("open"))},applySorting(t){"current"===t?this.currentLoot=this.sortLoot(this.currentLoot,this.currentSortOption):"all"===t&&(this.allLoot=this.sortLoot(this.allLoot,this.allSortOption))},sortLoot(t,e){return t&&0!==t.length?"valueDesc"===e?t.sort(((t,e)=>e.itemValue*e.quantity-t.itemValue*t.quantity)):"valueAsc"===e?t.sort(((t,e)=>t.itemValue*t.quantity-e.itemValue*e.quantity)):"obtainedDesc"===e?t.sort(((t,e)=>{const o=t.acquiredDate||0,l=e.acquiredDate||0;return l-o})):"obtainedAsc"===e?t.sort(((t,e)=>{const o=t.acquiredDate||0,l=e.acquiredDate||0;return o-l})):void 0:[]},formatQuantity(t){const e=t.quantity;let o=e.toString(),l="yellow";return e>=1e10?(o=`${Math.floor(e/1e9)}b`,l="green"):e>=1e7?(o=`${Math.floor(e/1e6)}m`,l="green"):e>=1e5&&(o=`${Math.floor(e/1e3)}k`,l="white"),{formattedQuantity:o,colorClass:l}},formatTotalGP(t){let e=t.toString();return t>=1e10?e=`${Math.floor(t/1e9)}b`:t>=1e7?e=`${Math.floor(t/1e6)}m`:t>=1e5&&(e=`${Math.floor(t/1e3)}k`),e},saveParameters(){const t={numberOfRolls:this.numberOfRolls,autoRollStopCondition:this.autoRollStopCondition,personalPoints:this.personalPoints,challengeMode:this.challengeMode,variance:this.variance,autoRollInterval:this.autoRollInterval,selectedItems:"chooseItemsAny"===this.autoRollStopCondition||"chooseItemsAll"===this.autoRollStopCondition?this.selectedItems:[]};localStorage.setItem("savedParameters",JSON.stringify(t))},initializeLootSimulator(){this.lootSimulator=new tt(this.personalPoints,"enabled"===this.challengeMode,!1,this.variance)},getUniqueItemKC(t,e=!1){const o=8;if(this.isTrackedKCItem(t)){const l=this.itemKCs[t.itemName]||[];let n;if(l.length>0){const i=l[0];if(e){const e=this.currentitemKCs[t.itemName]||[],a=new Set(e.map(Number)),s=l.slice(-o);return n=s.map((t=>{const e=Number(t);return a.has(e)?`[${t}]`:t})).join(", "),l.length>o?`KC: ${i}, ..., ${n}`:`KC: ${n}`}return n=l.slice(-o).join(", "),l.length>o?`KC: ${i}, ..., ${n}`:`KC: ${n}`}}return""},toggleExtraInfo(){this.showExtraInfo=!this.showExtraInfo},refreshLootSimulator(){this.lootSimulator.personalPoints=parseInt(this.personalPoints,10),this.lootSimulator.challengeMode="enabled"===this.challengeMode,this.lootSimulator.variance=this.variance},async simulateLoot(){if(this.isSimulating)return;this.isSimulating=!0,this.refreshLootSimulator();const t={};this.hasPurple=!1,this.newCollectionLog=!1;const e=this.totalRolls;this.currentitemKCs={},this.acquiredDates.current={};let o=0;for(let l=0;l<this.numberOfRolls;l++){this.totalRolls++,this.lootSimulator.raidLevel<150?this.entryModeCount++:this.lootSimulator.raidLevel<300?this.normalModeCount++:this.expertModeCount++;const n=e+l+1,i=Date.now()+1e3*l,a=this.lootSimulator.simulateLootRoll(this.ancientTabletObtained);this.ancientTabletObtained=a.ancientTabletObtained;const s=a.lootResults;let r=0,u=this.lootSimulator.getUniqueRewardPool(a.totalPoints);for(const t of u.uniqueChances)r+=t;o+=r;const c=1-Math.pow(1-r,1);let h=!1;this.rollHistory.push({personalPoints:this.personalPoints,challengeMode:this.challengeMode,purpleChance:r,probabilityOfOneOrMoreDrops:c}),s.forEach((e=>{this.isTrackedKCItem(e)&&("unique"===e.type&&(this.hasPurple=!0,h=!0),"Olmlet"===e.itemName&&(this.petObtained=!0),this.itemKCs[e.itemName]||(this.itemKCs[e.itemName]=[]),this.itemKCs[e.itemName].push(n),this.currentitemKCs[e.itemName]||(this.currentitemKCs[e.itemName]=[]),this.currentitemKCs[e.itemName].push(n)),e.acquiredDate=i,t[e.itemName]?(t[e.itemName].quantity+=e.quantity,t[e.itemName].acquiredDate=i):t[e.itemName]={...e}})),h?(this.totalPurples+=1,this.dryStreak=0,this.rollHistory=[]):(this.dryStreak+=1,this.dryStreak>this.longestDryStreak&&(this.longestDryStreak=this.dryStreak)),this.drynessPercent=this.calculateOverallDrynessPercent(),parseFloat(this.drynessPercent)>parseFloat(this.worstDryness)&&(this.worstDryness=this.drynessPercent),this.updateCollectionLog(s)}this.totalPurpleChanceSum+=o,await this.preloadLootImages(Object.values(t)),this.totalRollsDelayed=this.totalRolls,this.logsCompleteDelayed=this.logsComplete,this.showHasPurpleBorder=this.hasPurple,this.showNewCollectionLogBorder=this.newCollectionLog,this.currentLoot=Object.values(t),this.mergeLootResults(this.currentLoot),this.lastRolls=this.numberOfRolls,this.rollExecuted=!0,this.totalRolls>0?this.expectedPurplePercent=this.totalPurpleChanceSum/this.totalRolls*100:this.expectedPurplePercent=0,this.totalRolls>0?this.actualPurplePercent=this.totalPurples/this.totalRolls*100:this.actualPurplePercent=0,this.recheckAutoCondition(),this.calculateDupes(),this.isSimulating=!1},recheckAutoCondition(){("chooseItemsAny"===this.autoRollStopCondition&&this.selectedItems.some((t=>this.currentLoot.some((e=>e.itemName===t))))||"newCollectionLog"===this.autoRollStopCondition&&this.newCollectionLog||"purple"===this.autoRollStopCondition&&this.hasPurple||this.isOneTimeAutoRollStopConditionMet())&&this.stopAutoRoll()},calculateDupes(){let t=0;this.uniqueItemsList.forEach((e=>{const o=this.getItemQuantity(e);o>1&&(t+=o-1)})),this.dupesCount=t},calculateOverallDrynessPercent(){let t=1;for(let o of this.rollHistory){const e=o.purpleChance,l=Math.pow(1-e,1);t*=l}const e=100*(1-t);return e},mergeLootResults(t){t.forEach((t=>{const e=this.allLoot.findIndex((e=>e.itemName===t.itemName));if(-1!==e){const o=this.allLoot[e],l={...o,quantity:o.quantity+t.quantity,type:t.type,acquiredDate:t.acquiredDate};this.allLoot.splice(e,1,l)}else this.allLoot.push({...t})}))},updateCollectionLog(t){t.forEach((t=>{"Ancient tablet"!==t.itemName&&"Torn prayer scroll"!==t.itemName&&"Onyx"!==t.itemName&&"Dark relic"!==t.itemName&&("unique"!==t.type&&"tertiary"!==t.type||"Clue scroll (elite)"===t.itemName)||this.collectionLog[t.itemName]||(this.collectionLog[t.itemName]=!0,this.newCollectionLog=!0)})),this.logsComplete=Object.keys(this.collectionLog).length,this.logsComplete>=this.totalLogs&&-1==this.greenLoggedKc&&(this.greenLoggedKc=this.totalRolls)},resetLoot(){this.stopAutoRoll(),this.currentLoot=[],this.allLoot=[],this.totalRolls=0,this.totalRollsDelayed=0,this.lastRolls=0,this.rollExecuted=!1,this.showHasPurpleBorder=!1,this.showNewCollectionLogBorder=!1,this.hasPurple=!1,this.newCollectionLog=!1,this.dryStreak=0,this.longestDryStreak=0,this.drynessPercent=0,this.worstDryness=0,this.rollHistory=[],this.totalPurples=0,this.itemKCs={},this.currentitemKCs={},this.petObtained=!1,this.ancientTabletObtained=!1,this.collectionLog={},this.logsComplete=0,this.logsCompleteDelayed=0,this.greenLoggedKc=-1,this.expectedPurplePercent=0,this.actualPurplePercent=0,this.totalPurpleChanceSum=0,this.dupesCount=0,this.initializeLootSimulator()},async startAutoRoll(){if(this.autoRolling)return;if(this.isOneTimeAutoRollStopConditionMet())return;this.autoRolling=!0;const t=async()=>{if(!this.autoRolling)return;const e=Date.now();this.isSimulating||await this.autoRollSimulate();const o=Date.now(),l=o-e,n=this.autoRollInterval-l;setTimeout((()=>{t()}),Math.max(0,n))};await t()},async autoRollSimulate(){await this.simulateLoot()},stopAutoRoll(){this.autoRolling=!1},isOneTimeAutoRollStopConditionMet(){return"pet"===this.autoRollStopCondition?this.petObtained:"log"===this.autoRollStopCondition?this.logsComplete>=this.totalLogs:"allUniques"===this.autoRollStopCondition?this.isAllUniquesObtained():"chooseItemsAll"===this.autoRollStopCondition&&this.areAllSelectedItemsObtained()},showTooltip(t,e){if(!e)return;const o=document.getElementById("tooltip");o.textContent=e,o.style.display="block",this.moveTooltip(t)},moveTooltip(t){const e=document.getElementById("tooltip");e.style.left=`${t.pageX+15}px`,e.style.top=t.pageY-25+"px"},hideTooltip(){const t=document.getElementById("tooltip");t.style.display="none"},isAllUniquesObtained(){return this.uniqueItemsList.every((t=>this.collectionLog[t]))},areAllSelectedItemsObtained(){return 0===this.selectedItems.length?(console.log("No items selected."),!1):(this.selectedItems.forEach((t=>{console.log(`Checking ${t}:`,this.collectionLog[t])})),this.selectedItems.every((t=>!0===this.collectionLog[t])))}}},ot=o(1241);const lt=(0,ot.A)(et,[["render",j]]);var nt=lt;(0,l.Ef)(nt).mount("#app")}},e={};function o(l){var n=e[l];if(void 0!==n)return n.exports;var i=e[l]={exports:{}};return t[l].call(i.exports,i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,l,n,i){if(!l){var a=1/0;for(c=0;c<t.length;c++){l=t[c][0],n=t[c][1],i=t[c][2];for(var s=!0,r=0;r<l.length;r++)(!1&i||a>=i)&&Object.keys(o.O).every((function(t){return o.O[t](l[r])}))?l.splice(r--,1):(s=!1,i<a&&(a=i));if(s){t.splice(c--,1);var u=n();void 0!==u&&(e=u)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[l,n,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var l in e)o.o(e,l)&&!o.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:e[l]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};o.O.j=function(e){return 0===t[e]};var e=function(e,l){var n,i,a=l[0],s=l[1],r=l[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(r)var c=r(o)}for(e&&e(l);u<a.length;u++)i=a[u],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(c)},l=self["webpackChunkcox_loot_simulator"]=self["webpackChunkcox_loot_simulator"]||[];l.forEach(e.bind(null,0)),l.push=e.bind(null,l.push.bind(l))}();var l=o.O(void 0,[504],(function(){return o(160)}));l=o.O(l)})();
//# sourceMappingURL=app.b1b8177a.js.map