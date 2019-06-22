window.onload = function() {
    let createuser = document.querySelector(".form-adduser");
    createuser.onclick = handleCreateUser;
    let addjson = document.querySelector("#form-addjson");
    addjson.onclick = handleAddJson;
    console.log(window.sessionStorage);
    updateTable();
}

var d = {
                                       "name": "D. AZ ÖNELLÁTÁSSAL KAPCSOLATOS TEVÉKENYSÉGEK",
                                       "pages": [{
                                           "fields": [{
                                                   "type": "html",
                                                   "html": "<b>Most az önellátással kapcsolatos mindennapi tevékenységekről fogom kérdezni. Adok egy listát ezekről a tevékenységekről. Ismét megkérem, ne pillanatnyi, hanem tartós problémákra gondoljon!</b><br>"
                                               },
                                               {
                                                   "type": "html",
                                                   "html": "D1. Általában nehézséget okoz-e Önnek a következő tevékenységek közül bármelyik elvégzése segítség nélkül?"
                                               },
                                               {
                                                   "type": "table",
                                                   "rows": "a,b,c,d,e",
                                                   "header": [
                                                       "",
                                                       "",
                                                       "Nehézséget okoz-e ...?"
                                                   ],
                                                   "cols": [{
                                                           "type": "seq"
                                                       },
                                                       {
                                                           "type": "code",
                                                           "code": "PC1COLS"
                                                       },
                                                       {
                                                           "type": "select",
                                                           "code": "NEHEZSEG",
                                                           "id": "PC1_[SEQ]"
                                                       }
                                                   ]
                                               },
                                               {
                                                   "id": "PC2",
                                                   "label": "D2. Igénybe szokott-e venni segítséget vagy használ-e segédeszközt az előbb említett tevékenységek bármelyikének elvégzéséhez?",
                                                   "type": "select",
                                                   "code": "SEGEDESZK"
                                               },
                                               {
                                                   "id": "PC3",
                                                   "label": "D3. Szüksége lenne-e  több segítségre vagy segédeszközre ahhoz, hogy ezeket a tevékenységeket elvégezze?",
                                                   "type": "select",
                                                   "code": "SEGEDESZK"
                                               }
                                           ]
                                       }]
                                   }

var data = { "a": {
                     "name": "A. A HÁZTARTÁSBAN ÉLŐK FONTOSABB ADATAI",
                     "pages": [{
                             "fields": [{
                                     "type": "html",
                                     "html": "<b>A kérdőív  kitöltéséhez  szükséges,  hogy  információt kapjunk az Ön háztartásában élő személyekről. Ismételten  szeretném  arról  biztosítani, hogy az információkat szigorúan bizalmasan kezeljük. Az Ön háztartásában együtt élő személyeknek azokat tekintjük, akikkel egy lakásban él, részben vagy egészben közös jövedelemből gazdálkodik, akár rokonok, akár nem. Kérem, vegye számba azokat is, akik egészségi állapotuk, tanulmányaik vagy munkájuk miatt jelenleg távol vannak (pl.  kórházban, kollégiumban, albérletben vagy külföldön).</b><br><br>"
                                 },
                                 {
                                     "id": "HH_1",
                                     "label": "A1. Önt is beleértve hányan élnek az Ön háztartásában?",
                                     "type": "input",
                                     "format": "int",
                                     "size": "2",
                                     "min": 1,
                                     "max": 16
                                 }
                             ]
                         },
                         {
                             "fields": [{
                                     "type": "html",
                                     "html": "A válaszadó",
                                     "bold": true,
                                     "skip": 2
                                 },
                                 {
                                     "id": "HH_2_1",
                                     "label": "Keresztneve",
                                     "type": "input"
                                 },
                                 {
                                     "id": "HH_5_1",
                                     "label": "Születési ideje",
                                     "type": "input",
                                     "size": "4"
                                 },
                                 {
                                     "id": "HH_6_1",
                                     "label": "Legmagasabb befejezett iskolai végzettsége",
                                     "type": "select",
                                     "code": "VEGZETSEG"
                                 },
                                 {
                                     "id": "HH_7_1",
                                     "label": "Gazdasági aktivitása",
                                     "type": "select",
                                     "code": "GAZDAKT"
                                 },
                                 {
                                     "id": "HH_8_1",
                                     "label": "Közfoglalkoztatott-e? ",
                                     "type": "select",
                                     "code": "IGENNEM"
                                 }
                             ]
                         },
                         {
                             "fields": [{
                                     "type": "html",
                                     "html": "A2. Most a háztartás tagjaira vonatkozóan teszek fel néhány kérdést. Kérem, mondja el nekem az Önök háztartásában élő minden személy keresztnevét, nemét, ha rokonok, akkor az Önhöz fűződő rokoni kapcsolat típusát, születési idejét, iskolai végzettségét, gazdasági aktivitását. Kezdjük Önnel a sort, majd folytassuk a háztartás többi tagjával!<br><br>"
                                 },
                                 {
                                     "type": "table",
                                     "rows": "2-16",
                                     "header": [
                                         "Ssz",
                                         "Keresztneve",
                                         "Neme",
                                         "Önhöz viszonyított<br>családi szerepe",
                                         "Születési<br>ideje",
                                         "Legmagasabb befejezett<br>iskolai végzettsége",
                                         "Gazdasági<br>aktivitása"
                                     ],
                                     "cols": [{
                                             "type": "seq"
                                         },
                                         {
                                             "type": "input",
                                             "id": "HH_2_[SEQ]"
                                         },
                                         {
                                             "type": "select",
                                             "code": "NEME",
                                             "id": "HH_3_[SEQ]"
                                         },
                                         {
                                             "type": "select",
                                             "code": "CSALAD",
                                             "id": "HH_4_[SEQ]"
                                         },
                                         {
                                             "type": "input",
                                             "id": "HH_5_[SEQ]"
                                         },
                                         {
                                             "type": "select",
                                             "code": "VEGZETSEG",
                                             "id": "HH_6_[SEQ]"
                                         },
                                         {
                                             "type": "select",
                                             "code": "GAZDAKT",
                                             "id": "HH_7_[SEQ]"
                                         }
                                     ]
                                 }
                             ]
                         },
                         {
                             "fields": [{
                                     "type": "html",
                                     "html": "<b>A következő kérdéstől kezdve a kérdések csak Önre vonatkoznak, a háztartás többi tagjára nem!</b><br><br>"
                                 },
                                 {
                                     "id": "BIRTHPLACE",
                                     "type": "input",
                                     "label": "A3. &nbsp;&nbsp;Melyik országban lakott az édesanyja az Ön születésekor?"
                                 },
                                 {
                                     "id": "CITIZEN",
                                     "type": "input",
                                     "label": "A4. &nbsp;&nbsp;Az Ön (elsődleges) állampolgársága?"
                                 },
                                 {
                                     "id": "BIRHTPLACEFATH",
                                     "type": "input",
                                     "label": "A5. &nbsp;&nbsp;Melyik országban lakott az apai nagyanyja az Ön édesapja születésekor?"
                                 },
                                 {
                                     "id": "BIRHTPLACEMOTH",
                                     "type": "input",
                                     "label": "A6. &nbsp;&nbsp;Melyik országban lakott az anyai nagyanyja az Ön édesanyja születésekor?"
                                 }
                             ]
                         },
                         {
                             "fields": [{
                                     "id": "HH9",
                                     "label": "A7. &nbsp;&nbsp;Mely nemzetiséghez tartozónak érzi magát?",
                                     "type": "select",
                                     "code": "NEMZETISEGI"
                                 },
                                 {
                                     "id": "HH10",
                                     "label": "Az előzőn kívül tartozik-e még más nemzetiséghez is?",
                                     "type": "select",
                                     "code": "NEMZETISEGI"
                                 },
                                 {
                                     "id": "HH11",
                                     "label": "A9. &nbsp;&nbsp;Mi az Ön hivatalos családi állapota?",
                                     "type": "select",
                                     "code": "CSALADIALAPOT"
                                 },
                                 {
                                     "id": "HH12",
                                     "label": "A10. Volt-e Önnek valaha fizetett munkája?",
                                     "type": "select",
                                     "code": "IGENNEM"
                                 },
                                 {
                                     "id": "HH13",
                                     "label": "A11. Milyen típusú munkaszerződése van?",
                                     "type": "select",
                                     "code": "MUNKASZERTIP"
                                 }
                             ]
                         },
                         {
                             "fields": [{
                                     "type": "html",
                                     "html": "A12. Mi az Ön foglalkozása, munkaköre?<br>a. Foglalkozása:<br>"
                                 },
                                 {
                                     "id": "HH14SZ",
                                     "type": "area",
                                     "row": 2
                                 },
                                 {
                                     "type": "html",
                                     "html": "b. Mondja el részletesen, hogy miből áll /állt a munkája:<br>"
                                 },
                                 {
                                     "id": "HH14R",
                                     "type": "area",
                                     "row": 3
                                 },
                                 {
                                     "id": "HH14F",
                                     "type": "input",
                                     "label": "<b>FEOR-kód</b>",
                                     "display": {
                                         "user": [
                                             "3"
                                         ]
                                     }
                                 },
                                 {
                                     "id": "HH14",
                                     "type": "input",
                                     "label": "<b>ISCO-08 kód</b>",
                                     "display": {
                                         "user": [
                                             "3"
                                         ]
                                     }
                                 }
                             ]
                         },
                         {
                             "fields": [{
                                     "id": "HH15",
                                     "label": "A13. Van-e beosztottja / alkalmazottja? Ha igen, akkor hány fő? Volt-e beosztottja / alkalmazottja? Ha igen, akkor hány fő?",
                                     "type": "select",
                                     "code": "BEOSZT"
                                 },
                                 {
                                     "type": "html",
                                     "html": "A14. Milyen tevékenységet végez az a cég, ahol Ön dolgozik (pl. ipari tevékenység, vendéglátás, egészségügyi vagy szociális ellátás, kereskedelem, üzleti tevékenység stb.)? Milyen tevékenységet végzett az a cég, ahol Ön dolgozott (pl. ipari tevékenység, vendéglátás, egészségügyi vagy szociális ellátás, kereskedelem, üzleti tevékenység stb.)?"
                                 },
                                 {
                                     "id": "HH16SZ",
                                     "type": "area",
                                     "row": 4
                                 },
                                 {
                                     "id": "HH16",
                                     "type": "input",
                                     "label": "<b>TEÁOR-08 kód</b>",
                                     "display": {
                                         "user": [
                                             "3"
                                         ]
                                     }
                                 }
                             ]
                         }
                     ]
                 },
                 "b": {
                     "name": "B. EGÉSZSÉGI ÁLLAPOT",
                     "pages": [{
                             "fields": [{
                                     "type": "html",
                                     "html": "<b>Most az egészségéről szeretnék feltenni néhány kérdést!</b><br><br>"
                                 },
                                 {
                                     "id": "HS1",
                                     "label": "B1. Milyen az Ön egészsége általában?",
                                     "type": "select",
                                     "code": "NAGYONJO"
                                 },
                                 {
                                     "id": "HSU1",
                                     "label": "B2. Véleménye szerint Ön mennyit tehet az egészségéért?",
                                     "type": "select",
                                     "code": "NAGYONSOK"
                                 },
                                 {
                                     "id": "HS2",
                                     "label": "B3. Van-e Önnek hosszantartó betegsége vagy egészségi problémája? Hosszantartónak tekintünk egy betegséget, egészségi problémát, ha legalább 6 hónapja tart, vagy várhatóan legalább 6 hónapig fog tartani.",
                                     "type": "select",
                                     "code": "VANNINCS"
                                 },
                                 {
                                     "id": "HS3A",
                                     "label": "B4. Korlátozza-e Önt valamilyen egészségi probléma a  mindennapi tevékenységek elvégzésében?",
                                     "type": "select",
                                     "code": "KORL"
                                 },
                                 {
                                     "id": "HS3B",
                                     "label": "B5. Fennáll-e legalább 6 hónapja ez a korlátozás?",
                                     "type": "select",
                                     "code": "IGENNEM"
                                 }
                             ]
                         },
                         {
                             "fields": [{
                                     "type": "html",
                                     "html": "<b>Most a fogainak és fogínyének állapotával kapcsolatban szeretnék néhány kérdést feltenni.</b><br><br>"
                                 },
                                 {
                                     "id": "CD2",
                                     "label": "B6. Általában véve hogyan értékelné fogainak, szájüregének egészségét?",
                                     "type": "select",
                                     "code": "NAGYONJO"
                                 },
                                 {
                                     "type": "html",
                                     "html": "B7. Igazak-e Önre a következő állítások?<br>"
                                 },
                                 {
                                     "type": "table",
                                     "rows": "a,b,c,d,e,f,g",
                                     "header": [
                                         "",
                                         "",
                                         "KÓD"
                                     ],
                                     "cols": [{
                                             "type": "seq"
                                         },
                                         {
                                             "type": "code",
                                             "code": "HSU3COLS"
                                         },
                                         {
                                             "type": "select",
                                             "code": "IGENNEM",
                                             "id": "HSU3_[SEQ]"
                                         }
                                     ]
                                 },
                                 {
                                     "id": "HSU4",
                                     "label": "B8. Csaknem minden felnőtt elveszíti néhány fogát az évek során. Hány foga hiányzik Önnek a bölcsességfogakat és a fogszabályozás miatt kihúzott fogakat nem számítva? Kérem, hogy a fogpótlással pótolt és a nem pótolt fogakat is vegye figyelembe!",
                                     "type": "select",
                                     "code": "FOG"
                                 }
                             ]
                         },
                         {
                             "fields": [{
                                     "type": "html",
                                     "html": "<b>Adok egy listát krónikus betegségekről, egészségi problémákról.</b><br><br>B9. 1. Az elmúlt 12 HÓNAPBAN volt-e Önnek valamilyen betegsége vagy egészségi problémája a listán szereplők közül?<br>Ha igen:<br>B9.2. A betegséget/egészségi problémát orvos állapította meg?<br>B9.3. Orvos javaslatára szedett gyógyszert erre a betegségre/egészségi problémára?<br>Kérem, vegyen figyelembe minden olyan gyógyszert és táplálékkiegészítőt (gyógynövénykészítményt, vitamint) is, amit orvosi javaslatra szedett, függetlenül attól, hogy receptre vagy recept nélkül kapható!<br>"
                                 },
                                 {
                                     "type": "table",
                                     "rows": "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x",
                                     "header": [
                                         "",
                                         "",
                                         "<b>B9.1.</b><br>Az elmúlt 12 hónapban volt-e?",
                                         "<b>B9.2.</b><br>Orvos állapította meg?",
                                         "<b>B9.3.</b><br>Orvos javaslatára szedett rá gyógyszert?"
                                     ],
                                     "cols": [{
                                             "type": "seq"
                                         },
                                         {
                                             "type": "code",
                                             "code": "CD_1_U1_U2COLS"
                                         },
                                         {
                                             "type": "select",
                                             "code": "IGENNEM",
                                             "id": "CD1_[SEQ]"
                                         },
                                         {
                                             "type": "select",
                                             "code": "IGENNEM",
                                             "id": "CDU1_[SEQ]"
                                         },
                                         {
                                             "type": "select",
                                             "code": "IGENNEM",
                                             "id": "CDU2_[SEQ]"
                                         }
                                     ]
                                 }
                             ]
                         },
                         {
                             "fields": [{
                                     "type": "html",
                                     "html": "<b>B10. Az elmúlt 12 HÓNAPBAN volt-e a felsoroltak közül valamilyen sérüléssel járó balesete? A munkahelyen illetve a munkaköri feladatok elvégzése során történő baleseteket ne vegye figyelembe!</b><br><br>PONTOSÍTÁS A KÉRDEZŐNEK: Mérgezés, állatok által okozott sérülés, pl. rovarcsípés szintén ide tartozik, de nem tartozik ide a szándékosan okozott sérülés.<br><br>"
                                 },
                                 {
                                     "id": "AC1A",
                                     "label": "a. Közúti közlekedési balesete",
                                     "type": "select",
                                     "code": "IGENNEM"
                                 },
                                 {
                                     "id": "AC1B",
                                     "label": "b. Otthoni balesete",
                                     "type": "select",
                                     "code": "IGENNEM"
                                 },
                                 {
                                     "id": "AC1C",
                                     "label": "c. Szabadidős tevékenység közben történt balesete. Kérem, a már említett közúti vagy otthoni baleseteket ne vegye figyelembe!",
                                     "type": "select",
                                     "code": "IGENNEM"
                                 },
                                 {
                                     "id": "AC2",
                                     "label": "B11. A baleset(ei) következményeként igénybe vett-e egészségügyi ellátást?",
                                     "type": "select",
                                     "code": "EGELL"
                                 },
                                 {
                                     "id": "AW1",
                                     "label": "B12. Az elmúlt 12 HÓNAPBAN előfordult-e, hogy saját egészségi problémája miatt nem tudott dolgozni, és ezért hiányzott a munkahelyéről? Minden olyan betegséget, sérülést és más egészségi problémát vegyen figyelembe, amely miatt Ön az elmúlt 12 HÓNAPBAN hiányzott a munkahelyéről!",
                                     "type": "select",
                                     "code": "IGENNEM"
                                 }
                             ]
                         },
                         {
                             "fields": [{
                                     "id": "AW2",
                                     "type": "input",
                                     "label": "B13. Az elmúlt 12 HÓNAPBAN összesen hány napot nem dolgozott a munkahelyén saját egészségi problémái miatt? Ha nem emlékszik pontosan, hozzávetőleges becslést is adhat!"
                                 },
                                 {
                                     "id": "AWU_1O",
                                     "type": "input",
                                     "label": "B14. A. Összesen hány munkaórát hiányzott az elmúlt 1 HÓNAPBAN a munkahelyéről saját egészségi problémái miatt? Számítsa bele mindazt az időt, amit betegállományban vagy betegsége miatt szabadságon töltött, és azokat az órákat, amikor panasza miatt későn ért munkába, korábban távozott (például mert orvoshoz kellett mennie, vagy rosszul érezte magát stb.)!"
                                 },
                                 {
                                     "type": "html",
                                     "html": "<br>PONTOSÍTÁS A KÉRDEZŐNEK: Egészségi probléma lehet akut vagy krónikus betegség, vagy olyan panasz mint például fejfájás, ízületi-mozgásszervi fájdalmak (például nyak-, derék-, hát-, láb-, térdfájdalom), stressz, állandó fáradtság, levertség, légszomj, stb.<br><br>"
                                 },
                                 {
                                     "id": "AWU_1N",
                                     "type": "input",
                                     "label": "B. Ezek a hiányzások hány napot érintettek?"
                                 },
                                 {
                                     "id": "AWU_2",
                                     "type": "input",
                                     "label": "B15. Az elmúlt 1 HÓNAPBAN hányszor fordult elő Önnel, hogy valamely egészségi problémája gondot okozott Önnek, de ennek ellenére elvégezte a fizetett munkáját?"
                                 }
                             ]
                         }
                     ]
                 },
                 "c": {
                     "name": "C. KORLÁTOZOTTSÁG",
                     "pages": [{
                             "fields": [{
                                     "type": "html",
                                     "html": "<b>A következő kérdések az Ön általános fizikai állapotára fognak vonatkozni, azzal összefüggésben, hogy ez mennyire befolyásolja az Ön mindennapi tevékenységeit. Kérem, hogy tartós problémákra gondoljon, átmeneti problémákat ne vegyen figyelembe!</b><br><br>"
                                 },
                                 {
                                     "id": "PL1",
                                     "label": "C1. Hord-e Ön szemüveget vagy kontaktlencsét?",
                                     "type": "select",
                                     "code": "VAK"
                                 },
                                 {
                                     "id": "PL2",
                                     "label": "C2. Ezt kérdezd, ha a C1. kérdés (PL1)=1!Nehézséget okoz-e Önnek tisztán, élesen látni szemüveg vagy kontaktlencse segítségével?",
                                     "type": "select",
                                     "code": "LATAS"
                                 },
                                 {
                                     "id": "PL3",
                                     "label": "C3. Használ-e Ön hallókészüléket?",
                                     "type": "select",
                                     "code": "SIKET"
                                 },
                                 {
                                     "id": "PL4",
                                     "label": "C4. Ezt kérdezd, ha a C3. kérdés (PL3)=1!Nehézséget okoz-e Önnek, hogy jól hallja beszélgetőpartnerét egy csendes szobában még hallókészülék segítségével is?Ezt kérdezd, ha a C3. kérdés (PL3)=2, 8, 9!Nehézséget okoz-e Önnek, hogy jól hallja beszélgetőpartnerét egy csendes szobában?Kérem, a 6. VÁLASZLAP segítségével válaszoljon!",
                                     "type": "select",
                                     "code": "HALLAS"
                                 }
                             ]
                         },
                         {
                             "fields": [{
                                     "id": "PL5",
                                     "label": "C5. Ezt kérdezd, ha a C3. kérdés (PL3)=1!Nehézséget okoz-e Önnek, hogy jól hallja beszélgetőpartnerét egy zajosabb szobában még hallókészülék segítségével is?Ezt kérdezd, ha a C3. kérdés (PL3)=2, 8, 9!Nehézséget okoz-e Önnek, hogy jól hallja beszélgetőpartnerét egy zajosabb szobában?Kérem, a 6. VÁLASZLAP segítségével válaszoljon!",
                                     "type": "select",
                                     "code": "HALLAS"
                                 },
                                 {
                                     "id": "PL6",
                                     "label": "C6. Nehézséget okoz-e Önnek 500 métert gyalogolni sík területen segédeszköz vagy személyes segítség nélkül?Kérem, a 6. VÁLASZLAP segítségével válaszoljon!",
                                     "type": "select",
                                     "code": "NEHEZSEG"
                                 },
                                 {
                                     "id": "PL7",
                                     "label": "C7. Nehézséget okoz-e Önnek le- vagy felmenni 12 lépcsőfokon?Kérem, a 6. VÁLASZLAP segítségével válaszoljon!",
                                     "type": "select",
                                     "code": "NEHEZSEG"
                                 },
                                 {
                                     "id": "PL8",
                                     "label": "C8. Nehézséget okoz-e Önnek az emlékezés vagy a koncentrálás? Kérem, a 6. VÁLASZLAP segítségével válaszoljon!",
                                     "type": "select",
                                     "code": "NEHEZSEG"
                                 },
                                 {
                                     "id": "PL9",
                                     "label": "C9. Nehézséget okoz-e Önnek kemény ételre (pl. friss almára) ráharapni vagy azt megrágni?Kérem, a 6. VÁLASZLAP segítségével válaszoljon!",
                                     "type": "select",
                                     "code": "NEHEZSEG"
                                 }
                             ]
                         }
                     ]
                 },
                 "d": {
                     "name": "D. AZ ÖNELLÁTÁSSAL KAPCSOLATOS TEVÉKENYSÉGEK",
                     "pages": [{
                         "fields": [{
                                 "type": "html",
                                 "html": "<b>Most az önellátással kapcsolatos mindennapi tevékenységekről fogom kérdezni. Adok egy listát ezekről a tevékenységekről. Ismét megkérem, ne pillanatnyi, hanem tartós problémákra gondoljon!</b><br>"
                             },
                             {
                                 "type": "html",
                                 "html": "<br>D1. Általában nehézséget okoz-e Önnek a következő tevékenységek közül bármelyik elvégzése segítség nélkül?"
                             },
                             {
                                 "type": "table",
                                 "rows": "a,b,c,d,e",
                                 "header": [
                                     "",
                                     "",
                                     "Nehézséget okoz-e ...?"
                                 ],
                                 "cols": [{
                                         "type": "seq"
                                     },
                                     {
                                         "type": "code",
                                         "code": "PC1COLS"
                                     },
                                     {
                                         "type": "select",
                                         "code": "NEHEZSEG",
                                         "id": "PC1_[SEQ]"
                                     }
                                 ]
                             },
                             {
                                 "id": "PC2",
                                 "label": "D2. Igénybe szokott-e venni segítséget vagy használ-e segédeszközt az előbb említett tevékenységek bármelyikének elvégzéséhez?",
                                 "type": "select",
                                 "code": "SEGEDESZK"
                             },
                             {
                                 "id": "PC3",
                                 "label": "D3. Szüksége lenne-e  több segítségre vagy segédeszközre ahhoz, hogy ezeket a tevékenységeket elvégezze?",
                                 "type": "select",
                                 "code": "SEGEDESZK"
                             }
                         ]
                     }]
                 },
                 "e": {
                     "name": "E. A HÁZTARTÁSSAL KAPCSOLATOS TEVÉKENYSÉGEK",
                     "pages": [{
                         "fields": [{
                                 "type": "html",
                                 "html": "<b>Most a háztartással kapcsolatos mindennapi tevékenységekről fogom kérdezni. Adok egy listát ezekről a tevékenységekről. Ismét megkérem, ne pillanatnyi, hanem tartós problémákra gondoljon!</b><br>"
                             },
                             {
                                 "type": "table",
                                 "rows": "a,b,c,d,e,f,g",
                                 "header": [
                                     "",
                                     "",
                                     "Nehézséget okoz-e ...?"
                                 ],
                                 "cols": [{
                                         "type": "seq"
                                     },
                                     {
                                         "type": "code",
                                         "code": "HA1COLS"
                                     },
                                     {
                                         "type": "select",
                                         "code": "SEGITSEG",
                                         "id": "HA1_[SEQ]"
                                     }
                                 ]
                             },
                             {
                                 "id": "HA2",
                                 "label": "Igénybe szokott-e venni segítséget vagy használ-e segédeszközt az előbb említett tevékenységek bármelyikének elvégzéséhez?",
                                 "type": "select",
                                 "code": "SEGEDESZK"
                             },
                             {
                                 "id": "HA3",
                                 "label": "Szüksége lenne-e  több segítségre vagy segédeszközre ahhoz, hogy ezeket a tevékenységeket elvégezze?",
                                 "type": "select",
                                 "code": "SEGEDESZK"
                             }
                         ]
                     }]
                 },
                 "f": {
                     "name": "F. FIZIKAI FÁJDALMAK, ERŐNLÉT ÉS KEDÉLYÁLLAPOT",
                     "pages": [{
                         "fields": [{
                                 "type": "html",
                                 "html": "<b>A következő kérdések az elmúlt 4 hétben tapasztalt fizikai fájdalmaira vonatkoznak!</b><br>"
                             },
                             {
                                 "id": "PN1",
                                 "label": "Volt-e, és ha igen, milyen mértékű fizikai fájdalma volt Önnek az elmúlt 4 HÉTBEN?",
                                 "type": "select",
                                 "code": "FAJDALOM"
                             },
                             {
                                 "id": "PN2",
                                 "label": "Milyen mértékben akadályozta Önt tevékenységeiben (beleértve a munkahelyi és az otthoni munkáját, iskolai, szabadidős elfoglaltságait is) a fizikai fájdalom az elmúlt 4 HÉTBEN?",
                                 "type": "select",
                                 "code": "FAJAKAD"
                             },
                             {
                                 "type": "table",
                                 "rows": "a,b,c,d,e,f,g,h",
                                 "header": [
                                     "",
                                     "",
                                     "KÓD"
                                 ],
                                 "cols": [{
                                         "type": "seq"
                                     },
                                     {
                                         "type": "code",
                                         "code": "MH1COLS"
                                     },
                                     {
                                         "type": "select",
                                         "code": "GYAKGOND",
                                         "id": "MH1_[SEQ]"
                                     }
                                 ]
                             }
                         ]
                     }]
                 },
                 "g": {
                     "name": "G. SZAKELLÁTÁS (KÓRHÁZI, JÁRÓBETEG-SZAKELLÁTÁS), ALAPELLÁTÁS (HÁZIORVOSI) IGÉNYBEVÉTELE",
                     "pages": [{
                         "fields": [{
                                 "type": "html",
                                 "html": "<b>A következőkben arról szeretném kérdezni, hogy mennyi időt töltött kórházban. A kórházak minden típusát, valamint a külföldön kórházban töltött időt is vegye figyelembe!</b><br>"
                             },
                             {
                                 "id": "HO1A",
                                 "label": "Az elmúlt 12 HÓNAPBAN volt-e Ön legalább egy éjszakát kórházban fekvőbetegként?",
                                 "type": "select",
                                 "code": "IGENNEM"
                             },
                             {
                                 "id": "HO1B",
                                 "label": "Az elmúlt 12 HÓNAPBAN összesen hány éjszakát töltött Ön fekvőbetegként kórházban?",
                                 "type": "input",
                                 "format": "int",
                                 "size": "3",
                                 "min": 0,
                                 "max": 366
                             },
                             {
                                 "id": "HO2A",
                                 "label": "Az elmúlt 12 HÓNAPBAN volt-e Ön kórházban vagy más egészségügyi intézményben egynapos ellátáson, tehát úgy, hogy felvették, befektették a kórházba/intézménybe diagnosztizálás, kezelés, műtét vagy más típusú egészségügyi ellátás céljából, de nem kellett bent töltenie az éjszakát?",
                                 "type": "select",
                                 "code": "IGENNEM"
                             },
                             {
                                 "id": "HO2B",
                                 "label": "Az elmúlt 12 HÓNAPBAN hány alkalommal részesült Ön ilyen egynapos ellátásban?",
                                 "type": "input",
                                 "format": "int",
                                 "size": "3",
                                 "min": 0,
                                 "max": 366
                             },
                             {
                                 "id": "AM1",
                                 "label": "Mikor járt utoljára fogorvosnál, fogszabályozó szakorvosnál saját egészsége érdekében (tehát úgy, hogy nem gyermekét vagy házastársát stb. kísérte el)?",
                                 "type": "select",
                                 "code": "FOGGYAKOR"
                             },
                             {
                                 "id": "AM2",
                                 "label": "Mikor találkozott vagy lépett kapcsolatba utoljára háziorvosával saját egészsége érdekében?",
                                 "type": "select",
                                 "code": "HAZIORVOS"
                             },
                             {
                                 "id": "AM3",
                                 "label": "Az elmúlt 4 HÉTBEN hány alkalommal találkozott vagy lépett kapcsolatba háziorvosával saját egészsége érdekében?",
                                 "type": "input",
                                 "format": "int",
                                 "size": "3",
                                 "min": 0,
                                 "max": 31
                             },
                             {
                                 "id": "AM4",
                                 "label": "Mikor találkozott vagy lépett kapcsolatba utoljára szakorvossal saját egészsége érdekében?",
                                 "type": "select",
                                 "code": "SZAKORVOS"
                             },
                             {
                                 "id": "AM5",
                                 "label": "Az elmúlt 4 HÉTBEN hány alkalommal találkozott vagy lépett kapcsolatba szakorvossal saját egészsége érdekében?",
                                 "type": "input",
                                 "format": "int",
                                 "size": "3",
                                 "min": 0,
                                 "max": 31
                             },
                             {
                                 "id": "AM6A",
                                 "label": "a.  gyógytornászt, mozgásterapeutát, kiropraktőrt, gyógymasszőrt vagy csontkovácsot",
                                 "type": "select",
                                 "code": "IGENNEM"
                             },
                             {
                                 "id": "AM6B",
                                 "label": "b. pszichológust, pszichoterapeutát vagy pszichiátert",
                                 "type": "select",
                                 "code": "IGENNEM"
                             },
                             {
                                 "id": "AM6C",
                                 "label": "c. dietetikust, táplálkozási tanácsadót",
                                 "type": "select",
                                 "code": "IGENNEM"
                             },
                             {
                                 "id": "AM6D",
                                 "label": "d. természetgyógyászt, homeopátiás szakembert",
                                 "type": "select",
                                 "code": "IGENNEM"
                             },
                             {
                                 "id": "AM7A",
                                 "label": "Az elmúlt 12 HÓNAPBAN igénybe vett-e Ön saját maga számára otthoni szakápolási szolgáltatást?",
                                 "type": "select",
                                 "code": "IGENNEM"
                             },
                             {
                                 "id": "AM7B",
                                 "label": "Az elmúlt 12 HÓNAPBAN igénybe vett-e Ön saját maga számára házi segítségnyújtási szolgáltatást?",
                                 "type": "select",
                                 "code": "IGENNEM"
                             },
                             {
                                 "id": "AMU7",
                                 "label": "Mi volt a fő oka annak, hogy nem vett igénybe házi segítségnyújtási szolgáltatást?",
                                 "type": "select",
                                 "code": "HAZISEG"
                             }
                         ]
                     }]
                 },
                 "h": {
                     "name": "H. GYÓGYSZEREK, GYÓGYHATÁSÚ KÉSZÍTMÉNYEK, TÁPLÁLÉKKIEGÉSZÍTŐK HASZNÁLATA",
                     "pages": [{
                         "fields": [{
                                 "type": "html",
                                 "html": "<b>A következőkben az elmúlt 2 hétben szedett gyógyszerekkel kapcsolatban kérdezem.</b><br>"
                             },
                             {
                                 "id": "MD1",
                                 "label": "Használt-e az elmúlt 2 HÉTBEN orvos által Önnek receptre felírt gyógyszert?",
                                 "type": "select",
                                 "code": "IGENNEM"
                             },
                             {
                                 "id": "MD2",
                                 "label": "Használt-e Ön az elmúlt 2 HÉTBEN olyan gyógyszert, gyógyszernek nem minősülő gyógyhatású készítményt, vitamint vagy gyógyteát, amit recept nélkül vásárolt?",
                                 "type": "select",
                                 "code": "IGENNEM"
                             }
                         ]
                     }]
                 },
                 "i": {
                     "name": "I. BETEGSÉGEK ELLENI VÉDEKEZÉS, SZŰRÉSEK",
                     "pages": [{
                         "fields": [{
                                 "type": "html",
                                 "html": "<b>Most az influenza elleni védőoltásról fogom kérdezni.</b><br>"
                             },
                             {
                                 "id": "PAM1",
                                 "label": "Kapott-e Ön valaha influenza elleni védőoltást?",
                                 "type": "select",
                                 "code": "IGENNEM"
                             },
                             {
                                 "id": "PA1",
                                 "label": "Mikor kapott Ön utoljára influenza elleni védőoltást?",
                                 "type": "input",
                                 "todo": "VISSZATÉRNI IDE, HOGY HOGYAN KELL MEGVALÓSÍTANI"
                             },
                             {
                                 "id": "PA_2",
                                 "label": "Mikor mérte meg a vérnyomását utoljára egészségügyi dolgozó?",
                                 "type": "select",
                                 "code": "VERNYOMAS"
                             },
                             {
                                 "id": "PA3",
                                 "label": "Mikor mérte meg koleszterin-/vérzsírszintjét utoljára egészségügyi dolgozó?",
                                 "type": "select",
                                 "code": "VERNYOMAS"
                             },
                             {
                                 "id": "PA4",
                                 "label": "Mikor mérte meg a vércukorszintjét utoljára egészségügyi dolgozó?",
                                 "type": "select",
                                 "code": "VERNYOMAS"
                             },
                             {
                                 "id": "PA5",
                                 "label": "Mikor volt Önnek utoljára székletvérvizsgálata?",
                                 "type": "select",
                                 "code": "SZEKLET"
                             },
                             {
                                 "id": "PA6",
                                 "label": "Mikor volt Ön utoljára vastagbéltükrözésen?",
                                 "type": "select",
                                 "code": "VASTAGBEL"
                             },
                             {
                                 "id": "PA7",
                                 "label": "Mikor végeztek Önnél utoljára emlőröntgent vagy más szóval mammográfiás vizsgálatot?",
                                 "type": "select",
                                 "code": "VASTAGBEL"
                             },
                             {
                                 "id": "PA8",
                                 "label": "Mikor vettek Öntől utoljára kenetet citológiai vizsgálatra, méhnyakrák szűrése céljából?",
                                 "type": "select",
                                 "code": "KENET"
                             }
                         ]
                     }]
                 },
                 "j": {
                     "name": "J. KI NEM ELÉGÍTETT EGÉSZSÉGÜGYI ELLÁTÁSI SZÜKSÉGLETEK",
                     "pages": [{
                         "fields": [{
                                 "type": "html",
                                 "html": "<b>Számos oka lehet annak, ha azt tapasztaljuk, hogy késve vagy egyáltalán nem kapjuk meg azt az egészségügyi ellátást, amire szükségünk volna.</b><br>"
                             },
                             {
                                 "id": "UN1A",
                                 "label": "Előfordult-e Önnel az elmúlt 12 hónapban, hogy a szükségesnél később vagy egyáltalán nem jutott hozzá valamely egészségügyi ellátáshoz azért, mert túl sokat kellett várnia vizsgálati időpontra, kezelésre, műtétre vagy gyógyszerre?",
                                 "type": "select",
                                 "code": "EUELLATAS"
                             },
                             {
                                 "id": "UN1B",
                                 "label": "Előfordult-e Önnel az elmúlt 12 HÓNAPBAN, hogy későn vagy egyáltalán nem kapta meg a szükséges egészségügyi ellátást a lakóhelye és az egészségügyi intézmény közti nagy távolság vagy nehézkes közlekedés miatt?",
                                 "type": "select",
                                 "code": "EUELLATAS"
                             },
                             {
                                 "id": "UN2A",
                                 "label": "Az elmúlt 12 HÓNAPBAN előfordult-e Önnel az, hogy az alább felsorolt egészségügyi ellátásokra szüksége lett volna, de anyagi okok miatt nem engedhette meg magának?  <br> a. orvosi ellátás (a fogorvosi ellátás kivételével)",
                                 "type": "select",
                                 "code": "EUELLATAS"
                             },
                             {
                                 "id": "UN2B",
                                 "label": "Az elmúlt 12 HÓNAPBAN előfordult-e Önnel az, hogy az alább felsorolt egészségügyi ellátásokra szüksége lett volna, de anyagi okok miatt nem engedhette meg magának?  <br> b. fogorvosi ellátás",
                                 "type": "select",
                                 "code": "FOGELLATAS"
                             },
                             {
                                 "id": "UN2C",
                                 "label": "Az elmúlt 12 HÓNAPBAN előfordult-e Önnel az, hogy az alább felsorolt egészségügyi ellátásokra szüksége lett volna, de anyagi okok miatt nem engedhette meg magának?  <br> c. receptköteles gyógyszer felíratása, kiváltása",
                                 "type": "select",
                                 "code": "RECEPTELLATAS"
                             },
                             {
                                 "id": "UN2D",
                                 "label": "Az elmúlt 12 HÓNAPBAN előfordult-e Önnel az, hogy az alább felsorolt egészségügyi ellátásokra szüksége lett volna, de anyagi okok miatt nem engedhette meg magának?  <br> d. mentálhigiénés ellátás (például pszichológus, pszichiáter)",
                                 "type": "select",
                                 "code": "MENTALELLATAS"
                             }
                         ]
                     }]
                 },
                 "k": {
                     "name": "K. AZ EGÉSZSÉGÜGYI ELLÁTÁSRA VONATKOZÓ VÉLEMÉNY",
                     "pages": [{
                         "fields": [{
                                 "type": "html",
                                 "html": "<b>Most az egészségügyi ellátásra vonatkozó véleményéről kérdezem. Mondja meg a 9. VÁLASZLAP segítségével, hogy mennyire elégedett általában a következő egészségügyi ellátásokkal Magyarországon?</b><br>"
                             },
                             {
                                 "label": "Kérem, először kizárólag a társadalombiztosítás által finanszírozott ellátásokat vegye figyelembe, magán egészségügyi ellátásokat ne!",
                                 "type": "table",
                                 "rows": "a,b,c,d,e,f,g",
                                 "header": [
                                     "",
                                     "",
                                     "KÓDOK"
                                 ],
                                 "cols": [{
                                         "type": "seq"
                                     },
                                     {
                                         "type": "code",
                                         "code": "SAU1COLS"
                                     },
                                     {
                                         "id": "SAU1_[SEQ]",
                                         "type": "select",
                                         "code": "TBELLATAS"
                                     }
                                 ]
                             }
                         ]
                     }]
                 },
                 "l": {
                     "name": "L. JÓLLÉT INDEX",
                     "pages": [{
                         "fields": [{
                                 "id": "JIU1",
                                 "label": "Összességében mennyire elégedett Ön az életével mostanában? Kérjük, értékelje 0-tól 10-ig!",
                                 "type": "input",
                                 "format": "int",
                                 "size": "2",
                                 "min": 0,
                                 "max": 99
                             },
                             {
                                 "type": "table",
                                 "rows": "a,b,c,d,e",
                                 "header": [
                                     "",
                                     "Az elmúlt 2 HÉT során...",
                                     "KÓDOK"
                                 ],
                                 "cols": [{
                                         "type": "seq"
                                     },
                                     {
                                         "type": "code",
                                         "code": "WHO5COLS"
                                     },
                                     {
                                         "id": "WHO5_[SEQ]",
                                         "type": "select",
                                         "code": "JOLLET"
                                     }
                                 ]
                             }
                         ]
                     }]
                 },
                 "m": {
                     "name": "M. MAGASSÁG, TESTSÚLY",
                     "pages": [{
                         "fields": [{
                                 "type": "html",
                                 "html": "<b>Most a magasságáról és a testsúlyáról fogom kérdezni.</b><br>"
                             },
                             {
                                 "id": "BMI1",
                                 "label": "Milyen magas Ön cipő nélkül?",
                                 "type": "input",
                                 "format": "int",
                                 "size": "3",
                                 "min": 1,
                                 "max": 999
                             },
                             {
                                 "id": "BMI2",
                                 "label": "Mekkora a testsúlya ruha és cipő nélkül?",
                                 "type": "input",
                                 "format": "int",
                                 "size": "3",
                                 "min": 1,
                                 "max": 999
                             }
                         ]
                     }]
                 },
                 "n": {
                     "name": "N. TESTMOZGÁS",
                     "pages": [{
                         "fields": [{
                                 "type": "html",
                                 "html": "<b>Most arról fogom kérdezni, hogy egy átlagos héten mennyi időt tölt testmozgással. Kérem akkor is válaszoljon, ha nem tekinti magát fizikailag különösebben aktív személynek!</b><br>"
                             },
                             {
                                 "id": "PE1",
                                 "label": "Először gondoljon a munkával töltött időre, a munkájához kapcsolódó fizikai tevékenységekre! Ha Ön dolgozik, akkor arra a munkájára gondoljon, amiért fizetést kap, ha Ön nem dolgozik, akkor vegye figyelembe a ház körüli munkákat, a család ellátásával kapcsolatos tevékenységeket, ha Ön tanuló, akkor a tanulmányaival összefüggő aktivitást! <br> Munka közben mi jellemzi Önt leginkább?",
                                 "type": "select",
                                 "code": "TESTMOZGAS"
                             },
                             {
                                 "id": "PE2",
                                 "label": "Egy átlagos héten hány napon fordul elő, hogy folyamatosan legalább 10 percet gyalogol azért, hogy egyik helyről a másikra jusson?",
                                 "type": "input",
                                 "format": "int",
                                 "size": "1",
                                 "min": 0,
                                 "max": 9
                             },
                             {
                                 "id": "PE3",
                                 "label": "Egy átlagos napon mennyi időt gyalogol azért, hogy egyik helyről a másikra jusson?",
                                 "type": "select",
                                 "code": "GYALOGLAS"
                             },
                             {
                                 "id": "PE4",
                                 "label": "Egy átlagos héten hány napon fordul elő, hogy  folyamatosan legalább 10 percet kerékpározik (esetleg rollerezik, görkorcsolyázik vagy gördeszkázik) azért, hogy egyik helyről a másikra jusson?",
                                 "type": "input",
                                 "format": "int",
                                 "size": "1",
                                 "min": 0,
                                 "max": 9
                             },
                             {
                                 "id": "PE5",
                                 "label": "Egy átlagos napon mennyi időt kerékpározik (esetleg rollerezik, görkorcsolyázik vagy gördeszkázik) azért, hogy egyik helyről a másikra jusson?",
                                 "type": "select",
                                 "code": "GYALOGLAS"
                             },
                             {
                                 "id": "PE6",
                                 "label": "Egy átlagos héten hány napon sportol, tölti szabadidejét mozgással legalább 10 percen át, megszakítás nélkül?",
                                 "type": "input",
                                 "format": "int",
                                 "size": "1",
                                 "min": 0,
                                 "max": 9
                             },
                             {
                                 "id": "PE7",
                                 "label": "Egy átlagos héten mennyi időt tölt összesen sportolással, mozgással szabadidejében? <br> Kérem, órában és percben adja meg a sportolás heti időtartamát!",
                                 "type": "input",
                                 "format": "int",
                                 "size": "4",
                                 "min": 1,
                                 "max": 9999,
                                 "todo": "speciális eset: egy szám valójában két szám"
                             },
                             {
                                 "id": "PE8",
                                 "label": "Egy átlagos héten hány napon végez kifejezetten izomerősítő, állóképességet fejlesztő gyakorlatokat? Számítson bele minden tevékenységet, azokat is, amiket esetleg már az előzőekben említett!",
                                 "type": "input",
                                 "format": "int",
                                 "size": "1",
                                 "min": 0,
                                 "max": 9
                             },
                             {
                                 "id": "PE9",
                                 "label": "Egy átlagos napon hány órát tölt üléssel vagy fekvéssel?",
                                 "type": "input",
                                 "format": "int",
                                 "size": "2",
                                 "min": 0,
                                 "max": 24
                             }
                         ]
                     }]
                 },
                 "o": {
                     "name": "O. TÁPLÁLKOZÁSI SZOKÁSOK",
                     "pages": [{
                         "fields": [{
                                 "type": "html",
                                 "html": "<b>A következő kérdések a táplálkozási szokásaira vonatkoznak.</b><br>"
                             },
                             {
                                 "id": "DH1",
                                 "label": "Milyen gyakran fogyaszt Ön friss, fagyasztott, szárított vagy konzerv gyümölcsöt? Kérem, gyümölcslevek fogyasztását ne vegye figyelembe!",
                                 "type": "select",
                                 "code": "GYUMOLCS"
                             },
                             {
                                 "id": "DH2",
                                 "label": "Hány adag gyümölcsöt eszik naponta?  Kérem, gyümölcslevek fogyasztását ne vegye figyelembe!",
                                 "type": "input",
                                 "format": "int",
                                 "size": "2",
                                 "min": 0,
                                 "max": 99
                             },
                             {
                                 "id": "DH3",
                                 "label": "Milyen gyakran fogyaszt Ön friss, fagyasztott, szárított vagy konzerv zöldséget vagy salátát (burgonyát nem számítva)? Kérem, zöldséglevek, hideg vagy meleg levesek fogyasztását ne vegye figyelembe!",
                                 "type": "select",
                                 "code": "GYUMOLCS"
                             },
                             {
                                 "id": "DH4",
                                 "label": "Hány adag zöldséget, salátát eszik naponta (burgonyát nem számítva)? Kérem, zöldséglevek, hideg vagy meleg levesek fogyasztását ne vegye figyelembe!",
                                 "type": "input",
                                 "format": "int",
                                 "size": "2",
                                 "min": 0,
                                 "max": 99
                             },
                             {
                                 "id": "DH5W",
                                 "label": "Mennyi vizet fogyaszt Ön általában naponta? Az ízesített ásványvíz kivételével mindenfajta víz  – csapvíz, tisztított víz, forrásvíz, ásványvíz, szódavíz – fogyasztását vegye figyelembe!",
                                 "type": "select",
                                 "code": "VIZ"
                             },
                             {
                                 "id": "DH5",
                                 "label": "Milyen gyakran fogyasztja Ön a következő italokat? <br> A. 100%-os  gyümölcslé vagy zöldséglé, a koncentrátumból készült vagy édesített levek, valamint a levesek kivételével",
                                 "type": "select",
                                 "code": "GYUMOLCS"
                             },
                             {
                                 "id": "DH6",
                                 "label": "Milyen gyakran fogyasztja Ön a következő italokat? <br> B. Cukros üdítőital (pl. limonádé, kóla, Sprite, Fanta, jeges tea, energiaitalok, szörpök, koncentrátumból készült vagy nem 100%-os gyümölcslevek stb.)",
                                 "type": "select",
                                 "code": "GYUMOLCS"
                             },
                             {
                                 "id": "DH7",
                                 "label": "Milyen gyakran fogyasztja Ön a következő italokat? <br> C. Diétás vagy cukormentes üdítőital, szénsavas vagy szénsavmentes (pl. mesterséges édesítőszerrel készült italok, 'light' kóla: Pepsi Max, Cola Zero, diétás szörpök, stb.)",
                                 "type": "select",
                                 "code": "GYUMOLCS"
                             },
                             {
                                 "id": "DH8",
                                 "label": "Milyen gyakran fogyasztja Ön a következő italokat? <br> D. Energiaital (pl. Red Bull,Hell, Monster, Burn, Red Horse, stb.)",
                                 "type": "select",
                                 "code": "GYUMOLCS"
                             },
                             {
                                 "id": "DH9",
                                 "label": "Milyen gyakran fogyasztja Ön a következő italokat? <br> E. Sportital (pl. Isostar, Powerade, Gatorade, stb.)",
                                 "type": "select",
                                 "code": "GYUMOLCS"
                             },
                             {
                                 "id": "DH5A",
                                 "label": "Mennyi 100%-os gyümölcs- vagy zöldséglevet fogyaszt Ön általában naponta?",
                                 "type": "select",
                                 "code": "LE"
                             },
                             {
                                 "id": "DH6A",
                                 "label": "Mennyi cukros üdítőitalt fogyaszt Ön általában naponta?",
                                 "type": "select",
                                 "code": "LE"
                             },
                             {
                                 "id": "DH7A",
                                 "label": "Mennyi diétás vagy cukormentes üdítőitalt fogyaszt Ön általában naponta?",
                                 "type": "select",
                                 "code": "LE"
                             },
                             {
                                 "id": "DH8A",
                                 "label": "Mennyi energiaitalt fogyaszt Ön általában naponta?",
                                 "type": "select",
                                 "code": "LE"
                             },
                             {
                                 "id": "DH9A",
                                 "label": "Mennyi sportitalt fogyaszt Ön általában naponta?",
                                 "type": "select",
                                 "code": "LE"
                             },
                             {
                                 "id": "DH10",
                                 "label": "Milyen gyakran fogyaszt Ön meleg italokat (pl. kávét, teát vagy kakaót)?",
                                 "type": "select",
                                 "code": "MELEGITAL"
                             },
                             {
                                 "id": "DH11",
                                 "label": "Tesz Ön a meleg italába természetes (pl. cukor, méz, sztevia, nyírfacukor) vagy mesterséges (pl. aszpartám, szacharin) édesítőszert?",
                                 "type": "select",
                                 "code": "EDESITO"
                             },
                             {
                                 "id": "DH12",
                                 "label": "Hány adag édességet, desszertet (pl. csokoládé, keksz, jégkrém, fagylalt, sütemény, édes snack) fogyaszt Ön általában naponta? Egy adag alatt egy fél tábla csokit (~5 dkg), vagy 3 darab kekszet, vagy egy gombóc fagyit, vagy egy kis darab süteményt, vagy egy darab édes péksüteményt értünk. Az édesített, kanalazható tejes desszertek (pl. puding, túrókrém) is ide tartoznak",
                                 "type": "select",
                                 "code": "EDESSEG"
                             },
                             {
                                 "id": "DH13A",
                                 "label": "Milyen gyakran fogyasztja Ön a következő húsfajtákat? <br> A. Vörös hús (pl. sertés, marha, borjú, bárány, vadhús)",
                                 "type": "select",
                                 "code": "HUS"
                             },
                             {
                                 "id": "DH13B",
                                 "label": "Milyen gyakran fogyasztja Ön a következő húsfajtákat? <br> B. Fehér hús (pl. csirke, pulyka)",
                                 "type": "select",
                                 "code": "HUS"
                             },
                             {
                                 "id": "DH13C",
                                 "label": "Milyen gyakran fogyasztja Ön a következő húsfajtákat? <br> C. Feldolgozott húskészítmények (pl. szalámi, felvágott, sonka, kolbász, virsli)",
                                 "type": "select",
                                 "code": "HUS"
                             },
                             {
                                 "id": "DH13D",
                                 "label": "Milyen gyakran fogyasztja Ön a következő húsfajtákat? <br> D. Hal vagy tenger gyümölcsei",
                                 "type": "select",
                                 "code": "HUS"
                             },
                             {
                                 "id": "DH14",
                                 "label": "Milyen gyakran fogyaszt Ön tejet és tejterméket (pl. tejes italokat, kefírt, joghurtot, tejfölt, vajat, sajtot)? Kérem, csak a természetes, hozzáadott cukrot vagy édesítőszert nem  tartalmazó tej és tejtermék fogyasztását vegye figyelembe!",
                                 "type": "select",
                                 "code": "HUS"
                             },
                             {
                                 "id": "DH15",
                                 "label": "Általában megsózza-e étkezéskor az ételt akkor is, ha azt már készítésekor is megsózták?",
                                 "type": "select",
                                 "code": "SO"
                             },
                             {
                                 "id": "DH16",
                                 "label": "Hány hónapos koráig kapott anyatejet (gyermek neve), akár hozzátáplálás mellett is? <br> Válasszon az alábbi lehetőségek közül!",
                                 "type": "select",
                                 "code": "ANYATEJ",
                                 "todo": "VISSZATÉRNI IDE, HOGY HOGYAN KELL MEGVALÓSÍTANI! Input + Select"
                             },
                             {
                                 "id": "DH16KOR",
                                 "label": "Hány hónapos koráig kapott anyatejet (gyermek neve), akár hozzátáplálás mellett is? <br> Kérem írja be a hónapot!",
                                 "type": "input",
                                 "todo": "VISSZATÉRNI IDE, HOGY HOGYAN KELL MEGVALÓSÍTANI! Input + Select"
                             },
                             {
                                 "id": "DH17",
                                 "label": "Hány hónapos korától kapott (gyermek neve) rendszeresen az anyatejen kívül  más folyadékot (pl. víz, gyógytea, gyümölcslé, állati eredetű tej) vagy szilárd táplálékot?  <br> Válasszon az alábbi lehetőségek közül!",
                                 "type": "select",
                                 "code": "FOLYADEK",
                                 "todo": "VISSZATÉRNI IDE, HOGY HOGYAN KELL MEGVALÓSÍTANI! Input + Select"
                             },
                             {
                                 "id": "DH17KOR",
                                 "label": "Hány hónapos korától kapott (gyermek neve) rendszeresen az anyatejen kívül  más folyadékot (pl. víz, gyógytea, gyümölcslé, állati eredetű tej) vagy szilárd táplálékot?  <br> Kérem írja be a hónapot!",
                                 "type": "input",
                                 "code": "FOLYADEK",
                                 "todo": "VISSZATÉRNI IDE, HOGY HOGYAN KELL MEGVALÓSÍTANI! Input + Select"
                             },
                             {
                                 "id": "DHU_1A",
                                 "label": "Követ-e tudatosan valamilyen étrendet? Kérem, a 21. VÁLASZLAP segítségével válaszoljon! Több étrendet is megjelölhet!",
                                 "type": "select",
                                 "code": "ETREND"
                             },
                             {
                                 "id": "DHU_1B",
                                 "label": "Követ-e tudatosan valamilyen étrendet? Kérem, a 21. VÁLASZLAP segítségével válaszoljon! Több étrendet is megjelölhet!",
                                 "type": "select",
                                 "code": "ETREND"
                             },
                             {
                                 "id": "DHU_1C",
                                 "label": "Követ-e tudatosan valamilyen étrendet? Kérem, a 21. VÁLASZLAP segítségével válaszoljon! Több étrendet is megjelölhet!",
                                 "type": "select",
                                 "code": "ETREND"
                             }
                         ]
                     }]
                 },
                 "p": {
                     "name": "P. DOHÁNYZÁS",
                     "pages": [{
                         "fields": [{
                                 "type": "html",
                                 "html": "<b>Most a dohányzásról, illetve arról fogom kérdezni, hogy dohányoznak-e az Ön környezetében.</b><br>"
                             },
                             {
                                 "id": "SK1M_A",
                                 "label": "Kérem, mondja meg, melyik állítás illik Önre legjobban a dohányzással kapcsolatban! Mindenféle dohányterméket vegyen figyelembe az e-cigaretta és más hasonló elektronikus eszköz kivételével! A kipróbálást ne számítsa dohányzásnak!",
                                 "type": "select",
                                 "code": "DOHANYZAS"
                             },
                             {
                                 "id": "SK1M_B",
                                 "label": "Milyen gyakran fogyaszt Ön valamilyen dohányterméket (e-cigaretta vagy más hasonló elektronikus eszköz kivételével)?",
                                 "type": "select",
                                 "code": "DOHANYTERMEK"
                             },
                             {
                                 "type": "table",
                                 "rows": "a,b,c,d,e,f,g,h",
                                 "header": [
                                     "",
                                     "",
                                     "KÓD"
                                 ],
                                 "cols": [{
                                         "type": "seq"
                                     },
                                     {
                                         "type": "code",
                                         "code": "DOH_2COLS"
                                     },
                                     {
                                         "id": "DOH_2_[SEQ]",
                                         "type": "select",
                                         "code": "FOGYASZTAS"
                                     }
                                 ]
                             },
                             {
                                 "id": "SK2A",
                                 "label": "Fogyaszt-e Ön naponta gyári vagy kézzel sodort cigarettát?",
                                 "type": "select",
                                 "code": "IGENNEM"
                             },
                             {
                                 "id": "SK2B",
                                 "label": "Naponta átlagosan hány szál cigarettát szív?",
                                 "type": "input",
                                 "format": "int",
                                 "size": "3",
                                 "min": 0,
                                 "max": 999
                             },
                             {
                                 "id": "SK3",
                                 "label": "Korábban szívott legalább egy évig napi vagy majdnem napi rendszerességgel dohányterméket?",
                                 "type": "select",
                                 "code": "IGENNEM"
                             },
                             {
                                 "id": "SK4",
                                 "label": "Összesen hány évig dohányzott naponta? Az egymással össze nem függő időszakokat is vegye figyelembe!",
                                 "type": "input",
                                 "format": "int",
                                 "size": "2",
                                 "min": 0,
                                 "max": 99
                             },
                             {
                                 "id": "SKU1",
                                 "label": "Hány éves korában kezdett dohányozni? <br> Egyaránt vegye figyelembe, ha naponta vagy ha alkalmanként dohányzott, függetlenül attól, hogy előfordult olyan időszak, amikor nem dohányzott. A kipróbálást ne számítsa ide!",
                                 "type": "input",
                                 "format": "int",
                                 "size": "2",
                                 "min": 0,
                                 "max": 99
                             },
                             {
                                 "id": "SKU2",
                                 "label": "Megpróbált-e leszokni a dohányzásról az elmúlt 12 HÓNAPBAN?",
                                 "type": "select",
                                 "code": "IGENNEM"
                             },
                             {
                                 "id": "SKM_5A",
                                 "label": "Milyen gyakran tartózkodik otthonában olyan helyiségben (zárt légtérben), ahol mások dohányoznak?",
                                 "type": "select",
                                 "code": "MASDOHANYZAS"
                             },
                             {
                                 "id": "SKM_5B",
                                 "label": "Milyen gyakran tartózkodik otthonán kívül olyan helyiségben (zárt légtérben), ahol mások dohányoznak?",
                                 "type": "select",
                                 "code": "MASDOHANYZAS"
                             },
                             {
                                 "id": "SK6",
                                 "label": "Használ-e e-cigarettát vagy hasonló elektronikus eszközt (pl. e-shisha, e-pipa)?",
                                 "type": "select",
                                 "code": "CIGI"
                             }
                         ]
                     }]
                 },
                 "q": {
                     "name": "Q. ALKOHOLFOGYASZTÁS",
                     "pages": [{
                         "fields": [{
                                 "type": "html",
                                 "html": "<b>Most arról kérdezem, hogy az elmúlt 12 hónapban mennyi alkoholt fogyasztott.</b><br>"
                             },
                             {
                                 "id": "AL1",
                                 "label": "Az elmúlt 12 HÓNAPBAN milyen gyakran fogyasztott Ön alkoholtartalmú italt (mint például sör, bor, pezsgő, pálinka, vodka, rum, whisky, koktél, likőr, alkoholos üdítő, házilag előállított alkohol…)?",
                                 "type": "select",
                                 "code": "ALKOHOL"
                             },
                             {
                                 "type": "table",
                                 "rows": "1-7",
                                 "header": [
                                     "",
                                     "",
                                     "A",
                                     "B",
                                     "C"
                                 ],
                                 "cols": [{
                                         "type": "seq"
                                     },
                                     {
                                         "type": "code",
                                         "code": "WEEKDAYS"
                                     },
                                     {
                                         "type": "input",
                                         "id": "ALM2[SEQ]A"
                                     },
                                     {
                                         "type": "input",
                                         "id": "ALM2[SEQ]B"
                                     },
                                     {
                                         "type": "input",
                                         "id": "ALM2[SEQ]C"
                                     }
                                 ]
                             },
                             {
                                 "id": "AL6",
                                 "label": "Az elmúlt 12 HÓNAPBAN milyen gyakran fogyasztott Ön egy alkalommal legalább 1 liter bort, vagy 2 dl röviditalt, 2 liter sört vagy cidert? Például egy buli alatt, étkezés közben, baráti összejövetel, esti kikapcsolódás alkalmával, vagy akár egyedül, otthon…",
                                 "type": "select",
                                 "code": "BULI"
                             }
                         ]
                     }]
                 },
                 "r": {
                     "name": "R. TÁRSAS KAPCSOLATOK",
                     "pages": [{
                         "fields": [{
                                 "type": "html",
                                 "html": "<b>A következő kérdések a társas kapcsolataira vonatkoznak.</b><br>"
                             },
                             {
                                 "id": "SS1",
                                 "label": "Hány olyan, Önhöz közel álló ember van, akire számíthat, ha komoly személyes problémája van?",
                                 "type": "select",
                                 "code": "PROBLEMA"
                             },
                             {
                                 "id": "SS2",
                                 "label": "Mennyire érdekli másokat az, amit Ön csinál, ami Önnel történik?",
                                 "type": "select",
                                 "code": "ERDEKLODES"
                             },
                             {
                                 "id": "SS3",
                                 "label": "Milyen könnyen kapna segítséget a szomszédoktól, ha szüksége lenne rá?",
                                 "type": "select",
                                 "code": "SZOMSZEDSEGITSEG"
                             },
                             {
                                 "id": "SSU1",
                                 "label": "Meg tudja-e beszélni valakivel a személyes dolgait?",
                                 "type": "select",
                                 "code": "IGENNEM"
                             }
                         ]
                     }]
                 },
                 "s": {
                     "name": "S. GONDOSKODÁS, SEGÍTSÉGNYÚJTÁS",
                     "pages": [{
                         "fields": [{
                                 "type": "html",
                                 "html": "<b>A következőkben az egészségi problémákkal küzdőknek nyújtott segítségről fogom kérdezni.</b><br>"
                             },
                             {
                                 "id": "IC1",
                                 "label": "Gondoz-e, segít-e legalább hetente egyszer olyan személyt vagy személyeket, akik idős koruk, tartós betegségük vagy fogyatékosságuk miatt segítségre szorulnak?",
                                 "type": "select",
                                 "code": "GONDOZAS"
                             },
                             {
                                 "id": "IC2",
                                 "label": "Akinek/akiknek segítséget nyújt",
                                 "type": "select",
                                 "code": "CSALADTAG"
                             },
                             {
                                 "id": "IC3",
                                 "label": "Hetente összesen hány órát tölt segítségnyújtással, gondozással?",
                                 "type": "select",
                                 "code": "SEGITSEGNYUJTAS"
                             }
                         ]
                     }]
                 },
                 "t": {
                     "name": "T. A HÁZTARTÁS JÖVEDELME",
                     "pages": [{
                         "fields": [{
                                 "type": "html",
                                 "html": "<b>A következő kérdések az Ön háztartásának anyagi helyzetére vonatkoznak. Ezt az információt, csakúgy, mint a többit, bizalmasan kezeljük, és kizárólag az egészségi állapot és az anyagi helyzet összefüggésének vizsgálatára használjuk.</b><br>"
                             },
                             {
                                 "id": "INU1",
                                 "label": "Milyennek ítéli az Önök háztartásának anyagi helyzetét?",
                                 "type": "select",
                                 "code": "ANYAGIAK"
                             },
                             {
                                 "id": "IN1",
                                 "label": "Mennyi az Önök háztartásának a havi nettó összjövedelme?",
                                 "type": "input",
                                 "format": "int",
                                 "size": "4",
                                 "min": 0,
                                 "max": 9999
                             },
                             {
                                 "id": "IN_2",
                                 "label": "Kérem, mondja meg a 24. VÁLASZLAP segítségével, hogy melyik jövedelemsávba sorolható az Önök háztartásának havi nettó összjövedelme?",
                                 "type": "select",
                                 "code": "JOVEDELMISAV"
                             }
                         ]
                     }]
                 }
 }

var storage = window.sessionStorage;
var  qhead = data.c.name
var  qmeta=  data.c.pages[0].fields[0].html
var  d1q =  data.c.pages[0].fields[1].html

storage.setItem("0", qhead + "$")
storage.setItem("1", qmeta + "$")
console.log(qhead);


//setInterval(function(){ updateTable() }, 4000);


function handleAddJson() {
            console.log(storage);
            var answers = {
                            "formCode": "2001",
                            "externalId": "L11",
                            "formSequence": "1",
                            "formStatus": "STARTED",
                            "spendTime": "0",
                            "fillDate": "2019-06-14T07:45:00.05Z",
                            "data" : storage
                          }
             fetch("api/createdata", {
                         method: "POST",
                         headers: {
                             "Content-Type": "application/json; charset=utf-8"
                                 },
                         body: JSON.stringify(storage)
                }).then(function(response) {
                           return response.json();
                       })
                       .then(function(jsonData) {
                           console.log(jsonData);
                       })
                       .catch(error => console.log(error));
                   return false;
            }



//setInterval(function(){ getAllData() }, 4000);

function updateTable() {
    //let productIdFromUrl = window.location.href.split('=')[1];
    let section = "api/getsection/" + "D" ;
     fetch(section)
     .then(function(request) {
        return request.json();
     })
     .then(function(jsonData) {
     console.table(jsonData);
     fillTable(jsonData);
     })
     .catch(function(error){
        console.log("failed to retrieve data!",error);
     });
}


var format = {
               "formCode": "2001",
               "externalId": "L11",
               "formSequence": "1",
               "formStatus": "STARTED",
               "spendTime": "0",
               "fillDate": "2019-06-14T07:45:00.05Z",
               "data": {
                 "HH14SZ": "test",
                 "HH_3_2": "3"
               }
             }


function handleCreateUser() {
    let name = document.querySelector("#user-name").value;
    let password = document.querySelector("#user-password").value;
    let user = {
                   "name": name,
                   "password": password,
               }
     fetch("api/createuser", {
                 method: "POST",
                 headers: {
                     "Content-Type": "application/json; charset=utf-8"
                         },
                 body: JSON.stringify(user)
        }).then(function(response) {
                   return response.json();
               })
               .then(function(jsonData) {
                   console.log(jsonData);
               })
               .catch(error => console.log(error));
           return false;
}

function updateTable() {
    //let productIdFromUrl = window.location.href.split('=')[1];
    let section = "api/getsection/" + "D" ;
     fetch(section)
     .then(function(request) {
        return request.json();
     })
     .then(function(jsonData) {
     console.table(jsonData);
     })
     .catch(function(error){
        console.log("failed to retrieve data!",error);
     });
}
