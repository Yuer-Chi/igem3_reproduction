// February、Mars-May、June、7.12-7.18、7.19-7.25、7.26-8.1、8.2-8.8、8.9-8.15、8.16-8.22、8.23-8.29、8.30-9.5
// 9.6-9.12、9.13-9.19、9.20-9.26、9.27-10.3、10.4-10.12
// 16 pages

var winWidth = $(window).width();
var ratio = winWidth / 1920;
var played = [0,0,0,0, 0,0,0,0  ,0,0,0,0  ,0,0,0,0];
var vara = [];
// var bodyFontSize = Math.max(16 * ratio, 10);
// $("body").css("font-size", bodyFontSize + "px");

//  此处修改
vara[0] = new Vara(
    "#vara-container",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    [],
);
vara[1] = new Vara(
    "#vara-container2",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    [],
);
vara[2] = new Vara(
    "#vara-container3",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[3] = new Vara(
    "#vara-container4",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[4] = new Vara(
    "#vara-container5",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[5] = new Vara(
    "#vara-container6",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[6] = new Vara(
    "#vara-container7",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[7] = new Vara(
    "#vara-container8",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[8] = new Vara(
    "#vara-container9",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[9] = new Vara(
    "#vara-container10",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[10] = new Vara(
    "#vara-container11",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[11] = new Vara(
    "#vara-container12",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[12] = new Vara(
    "#vara-container13",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[13] = new Vara(
    "#vara-container14",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[14] = new Vara(
    "#vara-container15",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[15] = new Vara(
    "#vara-container16",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[16] = new Vara(
    "#vara-container17",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[17] = new Vara(
    "#vara-container18",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[18] = new Vara(
    "#vara-container19",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[19] = new Vara(
    "#vara-container20",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[20] = new Vara(
    "#vara-container21",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[21] = new Vara(
    "#vara-container22",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[22] = new Vara(
    "#vara-container23",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[23] = new Vara(
    "#vara-container24",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[24] = new Vara(
    "#vara-container25",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[25] = new Vara(
    "#vara-container24",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[26] = new Vara(
    "#vara-container25",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[27] = new Vara(
    "#vara-container26",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[28] = new Vara(
    "#vara-container27",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[29] = new Vara(
    "#vara-container28",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[30] = new Vara(
    "#vara-container29",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[31] = new Vara(
    "#vara-container30",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[32] = new Vara(
    "#vara-container31",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[33] = new Vara(
    "#vara-container32",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[34] = new Vara(
    "#vara-container33",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[35] = new Vara(
    "#vara-container34",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[36] = new Vara(
    "#vara-container35",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[37] = new Vara(
    "#vara-container36",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[38] = new Vara(
    "#vara-container37",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[39] = new Vara(
    "#vara-container38",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[40] = new Vara(
    "#vara-container39",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[41] = new Vara(
    "#vara-container40",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[42] = new Vara(
    "#vara-container41",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[43] = new Vara(
    "#vara-container42",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[44] = new Vara(
    "#vara-container43",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[45] = new Vara(
    "#vara-container44",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[46] = new Vara(
    "#vara-container45",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[47] = new Vara(
    "#vara-container46",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[48] = new Vara(
    "#vara-container47",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[49] = new Vara(
    "#vara-container48",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[50] = new Vara(
    "#vara-container49",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[51] = new Vara(
    "#vara-container50",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[52] = new Vara(
    "#vara-container51",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[53] = new Vara(
    "#vara-container52",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[54] = new Vara(
    "#vara-container53",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[55] = new Vara(
    "#vara-container54",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[56] = new Vara(
    "#vara-container55",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[57] = new Vara(
    "#vara-container56",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[58] = new Vara(
    "#vara-container57",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[59] = new Vara(
    "#vara-container58",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[60] = new Vara(
    "#vara-container59",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[61] = new Vara(
    "#vara-container60",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[62] = new Vara(
    "#vara-container61",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[63] = new Vara(
    "#vara-container62",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[64] = new Vara(
    "#vara-container63",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);
vara[65] = new Vara(
    "#vara-container64",
    "https://static.igem.wiki/teams/4907/wiki/notebook/vara-addition.json",
    []
);





vara[64].ready(function() {
    $(".front:not(.last)").click(function() {
        let ix = $(this)
            .parent(".paper")
            .index();
        $(".book").addClass("open");
        $(this)
            .parent(".paper")
            .addClass("open");
        if (!played[ix]) {
            vara[ix].playAll();
            vara[ix].animationEnd(function(i, o) {
                played[ix] = 1;
                if (i == "link") {
                    var group = o.container;
                    var rect = vara[1].createNode("rect", {
                        x: 0,
                        y: 0,
                        width: o.container.getBoundingClientRect().width,
                        height: o.container.getBoundingClientRect().height,
                        fill: "transparent"
                    });
                    group.appendChild(rect);
                    $(rect).css("cursor", "pointer");
                    $(rect).click(function() {
                        console.log(true);
                        document.querySelector("#link").click();
                    });
                }
            });
        }
    });
    $(".backnote").click(function() {
        // 点击back，如果.back的父元素.paper的index为0，则该页面设置为关闭
        if ($(this).parent(".paper").index() == 0) {
            $(".book").removeClass("open");
            $(".ten-13").removeClass("open");// 这里关闭最后一面
        }
        $(this).parent(".paper").removeClass("open");
    });
});
