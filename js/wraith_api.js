import './live2d.js';
// 模型列表
const models = [
	["mxd/umaru"],
	[
		"Potion-Maker/Pio",
		"Potion-Maker/Pio/list/1",
		"Potion-Maker/Pio/list/2",
		"Potion-Maker/Pio/list/3",
		"Potion-Maker/Pio/list/4",
		"Potion-Maker/Pio/list/5",
		"Potion-Maker/Pio/list/6",
		"Potion-Maker/Pio/list/7",
		"Potion-Maker/Pio/list/8",
		"Potion-Maker/Pio/list/9",
		"Potion-Maker/Pio/list/10",
		"Potion-Maker/Pio/list/11",
		"Potion-Maker/Pio/list/12",
		"Potion-Maker/Pio/list/13",
		"Potion-Maker/Pio/list/14",
		"Potion-Maker/Pio/list/15",
		"Potion-Maker/Pio/list/16",
		"Potion-Maker/Pio/list/17",
		"Potion-Maker/Pio/list/18",
		"Potion-Maker/Pio/list/19",
		"Potion-Maker/Pio/list/20",
		"Potion-Maker/Pio/list/21",
		"Potion-Maker/Pio/list/22",
		"Potion-Maker/Pio/list/23",
		"Potion-Maker/Pio/list/24",
		"Potion-Maker/Pio/list/25",
		"Potion-Maker/Pio/list/26",
		"Potion-Maker/Pio/list/27",
		"Potion-Maker/Pio/list/28",
		"Potion-Maker/Pio/list/29",
		"Potion-Maker/Pio/list/30",
		"Potion-Maker/Pio/list/31",
		"Potion-Maker/Pio/list/32",
		"Potion-Maker/Pio/list/33",
		"Potion-Maker/Pio/list/34",
		"Potion-Maker/Pio/list/35",
		"Potion-Maker/Pio/list/36",
		"Potion-Maker/Pio/list/37",
		"Potion-Maker/Pio/list/38",
		"Potion-Maker/Pio/list/39",
		"Potion-Maker/Pio/list/40",
		"Potion-Maker/Pio/list/41",
		"Potion-Maker/Pio/list/42",
		"Potion-Maker/Pio/list/43",
		"Potion-Maker/Pio/list/44",
		"Potion-Maker/Pio/list/45",
		"Potion-Maker/Pio/list/46",
		"Potion-Maker/Pio/list/47",
		"Potion-Maker/Pio/list/48",
		"Potion-Maker/Pio/list/49",
		"Potion-Maker/Pio/list/50",
		"Potion-Maker/Pio/list/51",
		"Potion-Maker/Pio/list/52",
		"Potion-Maker/Pio/list/53",
		"Potion-Maker/Pio/list/54",
		"Potion-Maker/Pio/list/55",
		"Potion-Maker/Pio/list/56",
		"Potion-Maker/Pio/list/57",
		"Potion-Maker/Pio/list/58",
		"Potion-Maker/Pio/list/59",
		"Potion-Maker/Pio/list/60",
		"Potion-Maker/Pio/list/61",
		"Potion-Maker/Pio/list/62",
		"Potion-Maker/Pio/list/63",
		"Potion-Maker/Pio/list/64",
		"Potion-Maker/Pio/list/65",
		"Potion-Maker/Pio/list/66",
		"Potion-Maker/Pio/list/67",
		"Potion-Maker/Pio/list/68",
		"Potion-Maker/Pio/list/69",
		"Potion-Maker/Pio/list/70",
		"Potion-Maker/Pio/list/71",
		"Potion-Maker/Pio/list/72",
		"Potion-Maker/Pio/list/73",
		"Potion-Maker/Pio/list/74",
		"Potion-Maker/Pio/list/75",
		"Potion-Maker/Pio/list/76",
		"Potion-Maker/Pio/list/77",
		"Potion-Maker/Pio/list/78",
		"Potion-Maker/Pio/list/79",
		"Potion-Maker/Pio/list/80",
		"Potion-Maker/Pio/list/81",
		"Potion-Maker/Pio/list/82",
		"Potion-Maker/Pio/list/83",
		"Potion-Maker/Pio/list/84",
		"Potion-Maker/Pio/list/85",
		"Potion-Maker/Pio/list/86",
		"Potion-Maker/Pio/list/87",
		"Potion-Maker/Pio/list/88",
		"Potion-Maker/Pio/list/89",
		"Potion-Maker/Pio/list/90",
		"Potion-Maker/Pio/list/91",
		"Potion-Maker/Pio/list/92",
		"Potion-Maker/Pio/list/93",
		"Potion-Maker/Pio/list/94",
		"Potion-Maker/Pio/list/95",
		"Potion-Maker/Pio/list/96",
		"Potion-Maker/Pio/list/97",
		"Potion-Maker/Pio/list/98",
		"Potion-Maker/Pio/list/99",
		"Potion-Maker/Pio/list/100",
		"Potion-Maker/Pio/list/101",
		"Potion-Maker/Pio/list/102",
		"Potion-Maker/Pio/list/103",
		"Potion-Maker/Pio/list/104",
		"Potion-Maker/Pio/list/105",
		"Potion-Maker/Pio/list/106",
		"Potion-Maker/Pio/list/107",
		"Potion-Maker/Pio/list/108",
		"Potion-Maker/Pio/list/109",
		"Potion-Maker/Pio/list/110",
		"Potion-Maker/Pio/list/111",
		"Potion-Maker/Pio/list/112",
		"Potion-Maker/Pio/list/113",
		"Potion-Maker/Pio/list/114",
		"Potion-Maker/Pio/list/115",
		"Potion-Maker/Pio/list/116",
		"Potion-Maker/Pio/list/117",
		"Potion-Maker/Pio/list/118",
		"Potion-Maker/Pio/list/119",
		"Potion-Maker/Pio/list/120",
		"Potion-Maker/Pio/list/121",
		"Potion-Maker/Pio/list/122",
		"Potion-Maker/Pio/list/123",
		"Potion-Maker/Pio/list/124",
		"Potion-Maker/Pio/list/125",
		"Potion-Maker/Pio/list/126",
		"Potion-Maker/Pio/list/127",
		"Potion-Maker/Pio/list/128",
		"Potion-Maker/Pio/list/129",
		"Potion-Maker/Pio/list/130",
		"Potion-Maker/Pio/list/131",
		"Potion-Maker/Pio/list/132",
		"Potion-Maker/Pio/list/133",
		"Potion-Maker/Pio/list/134",
		"Potion-Maker/Pio/list/135",
		"Potion-Maker/Pio/list/136",
		"Potion-Maker/Pio/list/137",
		"Potion-Maker/Pio/list/138",
		"Potion-Maker/Pio/list/139",
		"Potion-Maker/Pio/list/140",
		"Potion-Maker/Pio/list/141",
		"Potion-Maker/Pio/list/142",
		"Potion-Maker/Pio/list/143",
		"Potion-Maker/Pio/list/144",
		"Potion-Maker/Pio/list/145",
		"Potion-Maker/Pio/list/146",
		"Potion-Maker/Pio/list/147",
		"Potion-Maker/Pio/list/148",
		"Potion-Maker/Pio/list/149",
		"Potion-Maker/Pio/list/150",
		"Potion-Maker/Pio/list/151",
		"Potion-Maker/Pio/list/152",
		"Potion-Maker/Pio/list/153",
		"Potion-Maker/Pio/list/154",
		"Potion-Maker/Pio/list/155",
		"Potion-Maker/Pio/list/156",
		"Potion-Maker/Pio/list/157",
		"Potion-Maker/Pio/list/158",
		"Potion-Maker/Pio/list/159",
		"Potion-Maker/Pio/list/160",
		"Potion-Maker/Pio/list/161",
		"Potion-Maker/Pio/list/162",
		"Potion-Maker/Pio/list/163",
		"Potion-Maker/Pio/list/164",
		"Potion-Maker/Pio/list/165",
		"Potion-Maker/Pio/list/166",
		"Potion-Maker/Pio/list/167",
		"Potion-Maker/Pio/list/168",
		"Potion-Maker/Pio/list/169",
		"Potion-Maker/Pio/list/170",
		"Potion-Maker/Pio/list/171",
		"Potion-Maker/Pio/list/172",
		"Potion-Maker/Pio/list/173",
		"Potion-Maker/Pio/list/174",
		"Potion-Maker/Pio/list/175",
		"Potion-Maker/Pio/list/176",
		"Potion-Maker/Pio/list/177",
		"Potion-Maker/Pio/list/178",
		"Potion-Maker/Pio/list/179",
		"Potion-Maker/Pio/list/180",
		"Potion-Maker/Pio/list/181",
		"Potion-Maker/Pio/list/182",
		"Potion-Maker/Pio/list/183",
		"Potion-Maker/Pio/list/184",
		"Potion-Maker/Pio/list/185",
		"Potion-Maker/Pio/list/186",
		"Potion-Maker/Pio/list/187",
		"Potion-Maker/Pio/list/188",
		"Potion-Maker/Pio/list/189",
		"Potion-Maker/Pio/list/190",
		"Potion-Maker/Pio/list/191",
		"Potion-Maker/Pio/list/192",
		"Potion-Maker/Pio/list/193",
		"Potion-Maker/Pio/list/194",
		"Potion-Maker/Pio/list/195",
		"Potion-Maker/Pio/list/196",
		"Potion-Maker/Pio/list/197",
		"Potion-Maker/Pio/list/198",
		"Potion-Maker/Pio/list/199",
		"Potion-Maker/Pio/list/200",
		"Potion-Maker/Pio/list/201",
	],
	[

		"Potion-Maker/Tia",
		"Potion-Maker/Tia/list/1",
		"Potion-Maker/Tia/list/2",
		"Potion-Maker/Tia/list/3",
		"Potion-Maker/Tia/list/4",
		"Potion-Maker/Tia/list/5",
		"Potion-Maker/Tia/list/6",
		"Potion-Maker/Tia/list/7",
		"Potion-Maker/Tia/list/8",
		"Potion-Maker/Tia/list/9",
		"Potion-Maker/Tia/list/10",
		"Potion-Maker/Tia/list/11",
		"Potion-Maker/Tia/list/12",
		"Potion-Maker/Tia/list/13",
		"Potion-Maker/Tia/list/14",
		"Potion-Maker/Tia/list/15",
		"Potion-Maker/Tia/list/16",
		"Potion-Maker/Tia/list/17",
		"Potion-Maker/Tia/list/18",
		"Potion-Maker/Tia/list/19",
		"Potion-Maker/Tia/list/20",
		"Potion-Maker/Tia/list/21",
		"Potion-Maker/Tia/list/22",
		"Potion-Maker/Tia/list/23",
		"Potion-Maker/Tia/list/24",
		"Potion-Maker/Tia/list/25",
		"Potion-Maker/Tia/list/26",
		"Potion-Maker/Tia/list/27",
		"Potion-Maker/Tia/list/28",
		"Potion-Maker/Tia/list/29",
		"Potion-Maker/Tia/list/30",
		"Potion-Maker/Tia/list/31",
		"Potion-Maker/Tia/list/32",
		"Potion-Maker/Tia/list/33",
		"Potion-Maker/Tia/list/34",
		"Potion-Maker/Tia/list/35",
		"Potion-Maker/Tia/list/36",
		"Potion-Maker/Tia/list/37",
		"Potion-Maker/Tia/list/38",
		"Potion-Maker/Tia/list/39",
		"Potion-Maker/Tia/list/40",
		"Potion-Maker/Tia/list/41",
		"Potion-Maker/Tia/list/42",
		"Potion-Maker/Tia/list/43",
		"Potion-Maker/Tia/list/44",
		"Potion-Maker/Tia/list/45",
		"Potion-Maker/Tia/list/46",
		"Potion-Maker/Tia/list/47",
		"Potion-Maker/Tia/list/48",
		"Potion-Maker/Tia/list/49",
		"Potion-Maker/Tia/list/50",
		"Potion-Maker/Tia/list/51",
		"Potion-Maker/Tia/list/52",
		"Potion-Maker/Tia/list/53",
		"Potion-Maker/Tia/list/54",
		"Potion-Maker/Tia/list/55",
		"Potion-Maker/Tia/list/56",
		"Potion-Maker/Tia/list/57",
		"Potion-Maker/Tia/list/58",
		"Potion-Maker/Tia/list/59",
		"Potion-Maker/Tia/list/60",
		"Potion-Maker/Tia/list/61",
		"Potion-Maker/Tia/list/62",
	],
	[
		"GirlsFrontline/95type_405",
		"GirlsFrontline/aa12_2403",
		"GirlsFrontline/ads_3601",
		"GirlsFrontline/ak12_3302",
		"GirlsFrontline/an94_3303",
		"GirlsFrontline/carcano1891_2201",
		"GirlsFrontline/carcano1938_2202",
		"GirlsFrontline/fn57_2203",
		// 加载一直打印info
		// "GirlsFrontline/gelina",
		"GirlsFrontline/hk416_3401",
		"GirlsFrontline/m1928a1_1501",
		"GirlsFrontline/mlemk1_604",
		"GirlsFrontline/ntw20_2301",
		// 加载报错
		// "GirlsFrontline/rfb_1601",
		"GirlsFrontline/sat8_2601",
		"GirlsFrontline/sat8_3602",
		"GirlsFrontline/ump9_3404",
		"GirlsFrontline/ump45_3403",
		"GirlsFrontline/vector_1901",
		"GirlsFrontline/wa2000_6",
		"GirlsFrontline/cbjms_3503/destroy",
		"GirlsFrontline/cbjms_3503/normal",
		"GirlsFrontline/contender_2302/destroy",
		"GirlsFrontline/contender_2302/normal",
		"GirlsFrontline/DSR50_1801/destroy",
		"GirlsFrontline/DSR50_1801/normal",
		"GirlsFrontline/DSR50_2101/destroy",
		"GirlsFrontline/DSR50_2101/normal",
		"GirlsFrontline/G36C_1202/destroy",
		"GirlsFrontline/G36C_1202/normal",
		// 太暴露
		// "GirlsFrontline/g36_2407/destroy",
		"GirlsFrontline/g36_2407/normal",
		"GirlsFrontline/G41_2401/destroy",
		"GirlsFrontline/G41_2401/normal",
		"GirlsFrontline/Grizzly_2102/normal",
		"GirlsFrontline/HK416_805/destroy",
		"GirlsFrontline/HK416_805/normal",
		"GirlsFrontline/K2_3301/destroy",
		"GirlsFrontline/K2_3301/normal",
		// 太暴露
		// "GirlsFrontline/kp31_1103",
		// "GirlsFrontline/kp31/destroy",
		"GirlsFrontline/kp31/normal",
		// 太暴露
		// "GirlsFrontline/kp31_weal/destroy",
		"GirlsFrontline/kp31_weal/normal",
		// 太暴露
		// "GirlsFrontline/lewis_3502/destroy",
		"GirlsFrontline/lewis_3502/normal",
		"GirlsFrontline/m1903_5/normal",
		"GirlsFrontline/m950a_2303/destroy",
		"GirlsFrontline/m950a_2303/normal",
		"GirlsFrontline/ots14_1203/destroy",
		"GirlsFrontline/ots14_1203/normal",
		// 太暴露
		// "GirlsFrontline/ots14_3001/destroy",
		"GirlsFrontline/ots14_3001/normal",
		"GirlsFrontline/pkp_1201/destroy",
		"GirlsFrontline/pkp_1201/normal",
		"GirlsFrontline/px4storm_2801/destroy",
		"GirlsFrontline/px4storm_2801/normal",
		"GirlsFrontline/r3mp_3704/destroy",
		"GirlsFrontline/r3mp_3704/normal",
		// 太暴露
		// "GirlsFrontline/r93_3501/destroy",
		// "GirlsFrontline/r93_3501/normal",
		"GirlsFrontline/type64-ar_2901/destroy",
		"GirlsFrontline/type64-ar_2901/normal",
		"GirlsFrontline/type88_3504/destroy",
		"GirlsFrontline/type88_3504/normal",
		"GirlsFrontline/welrod_1401/destroy",
		"GirlsFrontline/welrod_1401/normal",
	],
	[
		"kesshouban/kesshouban",
		"kesshouban/kesyoban",
	],
	[
		"bilibili-live/22",
		"bilibili-live/22/list/1",
		"bilibili-live/22/list/2",
		"bilibili-live/22/list/3",
		"bilibili-live/22/list/4",
		"bilibili-live/22/list/5",
		"bilibili-live/22/list/6",
		"bilibili-live/22/list/7",
		"bilibili-live/22/list/8",
		"bilibili-live/22/list/9",
		"bilibili-live/22/list/10",
		"bilibili-live/22/list/11",
		"bilibili-live/22/list/12",
		"bilibili-live/22/list/13",
	],
	[
		"bilibili-live/33",
		"bilibili-live/33/list/1",
		"bilibili-live/33/list/2",
		"bilibili-live/33/list/3",
		"bilibili-live/33/list/4",
		"bilibili-live/33/list/5",
		"bilibili-live/33/list/6",
		"bilibili-live/33/list/7",
		"bilibili-live/33/list/8",
		"bilibili-live/33/list/9",
		"bilibili-live/33/list/10",
		"bilibili-live/33/list/11",
		"bilibili-live/33/list/12",
		"bilibili-live/33/list/13",
	],
	[
		"bilibili/22",
		"bilibili/33",
	],
	[
		"ShizukuTalk/shizuku",
		"ShizukuTalk/shizuku-48",
		"ShizukuTalk/shizuku-pajama",
	],
	[
		"hatsunemiku/miku",
		"hatsunemiku/miku0",
	],
	[
		"HyperdimensionNeptunia/neptune_classic",
		"HyperdimensionNeptunia/nepnep",
		"HyperdimensionNeptunia/neptune_santa",
		"HyperdimensionNeptunia/nepmaid",
		"HyperdimensionNeptunia/nepswim",
		"HyperdimensionNeptunia/noir_classic",
		"HyperdimensionNeptunia/noir",
		"HyperdimensionNeptunia/noir_santa",
		"HyperdimensionNeptunia/noireswim",
		"HyperdimensionNeptunia/blanc_classic",
		"HyperdimensionNeptunia/blanc_normal",
		"HyperdimensionNeptunia/blanc_swimwear",
		"HyperdimensionNeptunia/vert_classic",
		"HyperdimensionNeptunia/vert_normal",
		"HyperdimensionNeptunia/vert_swimwear",
		"HyperdimensionNeptunia/nepgear",
		"HyperdimensionNeptunia/nepgear_extra",
		"HyperdimensionNeptunia/nepgearswim",
		"HyperdimensionNeptunia/histoire",
	],
	["KantaiCollection/murakumo"],
	[
		"epsilon/epsilon",
		"epsilon/epsilon2",
	],
	["widget/chitose"],
	[
		"widget/haru/haru01",
		"widget/haru/haru02",
	],
	["widget/haruto"],
	["widget/hibiki"],
	["widget/hijiki"],
	["widget/izumi"],
	["widget/koharu"],
	[
		"ni/nico",
		"ni/ni-j",
		"ni/nipsilon",
		"ni/nito",
		"ni/nietzsche",
	],
	["widget/tororo"],
	["widget/tsumiki"],
	["widget/unitychan"],
	["widget/wanko"],
	["widget/z16"],
	["widget/asuna_33"],
	["widget/cirno"],
	["mxd/aoba"],
	["mxd/nero"],
	["mxd/remu"],
	["mxd/tamamo"],
	["mxd/Violet"],
	["Sakurasou/jin"],
	[
		"Sakurasou/mashiro/ryoufuku",
		"Sakurasou/mashiro/seifuku",
		"Sakurasou/mashiro/shifuku",
	],
	[
		"Sakurasou/misaki/ryoufuku",
		"Sakurasou/misaki/seifuku",
		"Sakurasou/misaki/shifuku",
	],
	[
		"Sakurasou/nanami/ryoufuku",
		"Sakurasou/nanami/seifuku",
		"Sakurasou/nanami/shifuku",
	],
	[
		"Sakurasou/otoha/ryoufuku",
		"Sakurasou/otoha/seifuku",
		"Sakurasou/otoha/shifuku",
	],
	["Sakurasou/ryunosuke"],
	["newModel/contender"],
	["newModel/kp31"],
	["newModel/uni"],
	["newModel/xisitina"],
	["newModel/sagiri"],
	["newModel/katou_01"],
	["newModel/chino"],
	["newModel/madoka"],
	["newModel/snow_miku"],
	["newModel/index"],
	["newModel/live_uu"],
	["newModel/yuri"],
	["newModel/mei"],
	["newModel/bronya"],
	["newModel/platelet"],
	["newModel/kanna"],
	["newModel/8"],
	["newModel/iio"],
	["newModel/makoto"],
	["newModel/penchan"],
	[
		"yukari/yukari_model",
		"yukari/YuzukiYukari",
	],
	["newModel/chiaki_kitty"],
	[
		"newModel/16/date_16",
		"newModel/16/hallo_16",
		"newModel/16/wed_16",
	],
	["newModel/kanzaki"],
	["newModel/kuroko"],
	["newModel/len/len"],
	["newModel/mikoto"],
	["newModel/saten"],
	["newModel/stl"],
	["newModel/touma"],
	["newModel/uiharu"],
	["newModel/kurumi"],
];
// 消息提示
const message = {
	"wraith": {
		"console_open_msg": "哈哈，你打开了控制台，是想要看看我的秘密吗？",
		"copy_message": "你都复制了些什么呀，转载要记得加上出处哦",
		"screenshot_message": "照好了嘛，是不是很可爱呢？",
		"hidden_message": "我们还能再见面的吧…",
		"hour_tips": {
			"6_7": ["早上好！一日之计在于晨，美好的一天就要开始了"],
			"8_9_10_11": ["上午好！工作顺利嘛，不要久坐，多起来走动走动哦！"],
			"12_13_14": ["中午了，工作了一个上午，现在是午餐时间！"],
			"15_16_17": ["午后很容易犯困呢，今天的运动目标完成了吗？"],
			"18_19": ["傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~"],
			"20_21": ["晚上好，今天过得怎么样？"],
			"22_23": ["已经这么晚了呀，早点休息吧，晚安~"],
			"24_0_1_2_3_4_5": ["你是夜猫子呀？这么晚还不睡觉，明天起的来嘛"],
			"default": ["嗨~ 快来逗我玩吧！"]
		},
		"referrer_message": {
			"localhost": ["欢迎阅读<span style=\"color:#0099cc;\">『", "』</span>", " - "],
			"baidu": ["Hello! 来自 百度搜索 的朋友<br>你是搜索 <span style=\"color:#0099cc;\">", "</span> 找到的我吗？"],
			"so": ["Hello! 来自 360搜索 的朋友<br>你是搜索 <span style=\"color:#0099cc;\">", "</span> 找到的我吗？"],
			"google": ["Hello! 来自 谷歌搜索 的朋友<br>欢迎阅读<span style=\"color:#0099cc;\">『", "』</span>", " - "],
			"default": ["Hello! 来自 <span style=\"color:#0099cc;\">", "</span> 的朋友"],
			"none": ["欢迎阅读<span style=\"color:#0099cc;\">『", "』</span>", " - "]
		},
		"referrer_hostname": {
			"example.com": ["示例网站"],
			"www.fghrsh.net": ["FGHRSH 的博客"]
		},
		"api_message": [
			'最大的骄傲于最大的自卑都表示心灵的最软弱无力。——斯宾诺莎',
			'自知之明是最难得的知识。——西班牙',
			'勇气通往天堂，怯懦通往地狱。——塞内加',
			'最灵繁的人也看不见自己的背脊。——非洲',
			'最困难的事情就是认识自己。——希腊',
			'与肝胆人共事，无字句处读书。——周恩来',
			'知人者智，自知者明。胜人者有力，自胜者强。——老子',
			'知之者不如好之者，好之者不如乐之者。——孔子',
		],
	},
	"mouseover": [{
		"selector": "container a[href^='http']",
		"text": ["要看看 <span style=\"color:#0099cc;\">{text}</span> 么？"]
	},
	{
		"selector": "fui-home",
		"text": ["点击前往首页，想回到上一页可以使用浏览器的后退功能哦"]
	},
	{
		"selector": "wraith-live2d-tips",
		"text": ["一言一语，一字一句间。"]
	},
	{
		"selector": "wraith-live2d-model",
		"text": ["嗯··· 要切换 看板娘 吗？"]
	},
	{
		"selector": "wraith-live2d-skin",
		"text": ["喜欢换装 Play 吗？"]
	},
	{
		"selector": "wraith-live2d-photo",
		"text": ["要拍张纪念照片吗？"]
	},
	{
		"selector": "fui-info-circle",
		"text": ["这里有关于我的信息呢"]
	},
	{
		"selector": "fui-cross",
		"text": ["你不喜欢我了吗..."]
	},
	{
		"selector": "tor_show",
		"text": ["翻页比较麻烦吗，点击可以显示这篇文章的目录呢"]
	},
	{
		"selector": "comment_go",
		"text": ["想要去评论些什么吗？"]
	},
	{
		"selector": "night_mode",
		"text": ["深夜时要爱护眼睛呀"]
	},
	{
		"selector": "qrcode",
		"text": ["手机扫一下就能继续看，很方便呢"]
	},
	{
		"selector": "comment_reply",
		"text": ["要吐槽些什么呢"]
	},
	{
		"selector": "back-to-top",
		"text": ["回到开始的地方吧"]
	},
	{
		"selector": "author",
		"text": ["该怎么称呼你呢"]
	},
	{
		"selector": "mail",
		"text": ["留下你的邮箱，不然就是无头像人士了"]
	},
	{
		"selector": "url",
		"text": ["你的家在哪里呢，好让我去参观参观"]
	},
	{
		"selector": "textarea",
		"text": ["认真填写哦，垃圾评论是禁止事项"]
	},
	{
		"selector": "OwO-logo",
		"text": ["要插入一个表情吗"]
	},
	{
		"selector": "csubmit",
		"text": ["要[提交]^(Commit)了吗，首次评论需要审核，请耐心等待~"]
	},
	{
		"selector": "ImageBox",
		"text": ["点击图片可以放大呢"]
	},
	{
		"selector": "input[name=s]",
		"text": ["找不到想看的内容？搜索看看吧"]
	},
	{
		"selector": "previous",
		"text": ["去上一页看看吧"]
	},
	{
		"selector": "next",
		"text": ["去下一页看看吧"]
	},
	{
		"selector": "dropdown-toggle",
		"text": ["这里是菜单"]
	},
	{
		"selector": "play-icon",
		"text": ["想要听点音乐吗"]
	},
	{
		"selector": "time",
		"text": ["在这里可以调整<span style=\"color:#0099cc;\">播放进度</span>呢"]
	},
	{
		"selector": "volume",
		"text": ["在这里可以调整<span style=\"color:#0099cc;\">音量</span>呢"]
	},
	{
		"selector": "list-button",
		"text": ["<span style=\"color:#0099cc;\">播放列表</span>里都有什么呢"]
	},
	{
		"selector": "lyric-button",
		"text": ["有<span style=\"color:#0099cc;\">歌词</span>的话就能跟着一起唱呢"]
	},
	{
		"selector": "live2d",
		"text": ["干嘛呢你，快把手拿开", "鼠…鼠标放错地方了！"]
	}
	],
	"click": [
		"是…是不小心碰到了吧",
		"萝莉控是什么呀",
		"你看到我的小熊了吗",
		"再摸的话我可要报警了！⌇●﹏●⌇",
		"110吗，这里有个变态一直在摸我(ó﹏ò｡)"
	],
	"seasons": {
		'1/1': ["<span style=\"color:#0099cc;\">元旦</span>了呢，新的一年又开始了~"],
		'2/14': ["又是一年<span style=\"color:#0099cc;\">情人节</span>，{year}年找到对象了嘛~"],
		'3/8': ["今天是<span style=\"color:#0099cc;\">妇女节</span>！"],
		'3/12': ["今天是<span style=\"color:#0099cc;\">植树节</span>，要保护环境呀"],
		'4/1': ["悄悄告诉你一个秘密~<span style=\"background-color:#34495e;\">今天是愚人节，不要被骗了哦~</span>"],
		'5/1': ["今天是<span style=\"color:#0099cc;\">五一劳动节</span>，计划好假期去哪里了吗~"],
		'6/1': ["<span style=\"color:#0099cc;\">儿童节</span>了呢，快活的时光总是短暂，要是永远长不大该多好啊…"],
		'9/3': ["<span style=\"color:#0099cc;\">中国人民抗日战争胜利纪念日</span>，铭记历史、缅怀先烈、珍爱和平、开创未来。"],
		'9/10': ["<span style=\"color:#0099cc;\">教师节</span>，在学校要给老师问声好呀~"],
		'10/1': ["<span style=\"color:#0099cc;\">国庆节</span>，新中国在1949成立的哦"],
		'11/11': ["今年的<span style=\"color:#0099cc;\">双十一</span>是和谁一起过的呢~"],
		'12/25': ["这几天是<span style=\"color:#0099cc;\">圣诞节</span>，主人肯定又去剁手买买买了~"],
	},
};

export const loading = (params) => {
	const live2d_settings = new Object();
	// 模型路径api
	live2d_settings.modelApi = params?.modelApi || '.';
	// 保存当前展示的模型与皮肤，下次开启浏览器从当前模型皮肤开始展示
	live2d_settings.saveModelSkin = params?.saveModelSkin || false;
	// 模型切换方式 random 随机切换  normal 按照模型顺序切换
	live2d_settings.modelSwitcher = params?.modelSwitcher || 'normal';
	// canvas画布的类名或者id名
	live2d_settings.canvasName = params?.canvasName || 'wraith-canvas';
	// canvas画布外层盒子的类名或者id名
	live2d_settings.boxName = params?.boxName || 'model-container';
	// 看板娘位置，靠左或靠右
	live2d_settings.direction = params?.direction || 'right';
	// canvas画布等比例放大倍数，初始比例尺寸300*400
	live2d_settings.scale = params?.scale || 1;
	// 看板娘菜单字体大小
	live2d_settings.menuFontSize = params?.menuFontSize || 20;
	// 看板娘菜单顶部距离
	live2d_settings.menuTop = params?.menuTop || '16%';
	// 看板娘菜单颜色
	live2d_settings.menuColor = params?.menuColor || '#65d0fc';
	// 看板娘菜单背景颜色
	live2d_settings.menuBg = params?.menuBg || 'white';
	// 看板娘对话框颜色
	live2d_settings.msgFontColor = params?.msgFontColor || 'rgba(0, 0, 0, 0.6)';
	live2d_settings.msgFontSize = params?.msgFontSize || 16;
	live2d_settings.msgBorderColor = params?.msgBorderColor || 'rgba(224, 186, 140, 0.62)';
	live2d_settings.msgBgColor = params?.msgBgColor || 'rgba(236, 217, 188, 0.5)';
	live2d_settings.msgShadowColor = params?.msgShadowColor || 'rgba(236, 217, 188, 0.2)';
	// 是否监听复制
	live2d_settings.showCopyMessage = params?.showCopyMessage || true;
	// 主页设置
	live2d_settings.homePageUrl = params?.homePageUrl || 'http://127.0.0.1:8848/live2d_wriath/index.html';
	// 随机语句api
	// live2d_settings.wraithMessageApi = params?.wraithMessageApi;

	const {
		modelApi,
		saveModelSkin,
		modelSwitcher,
		skinSwitcher,
		canvasName,
		scale,
		boxName,
		direction,
		menuFontSize,
		menuTop,
		menuColor,
		menuBg,
		msgFontColor,
		msgFontSize,
		msgBorderColor,
		msgBgColor,
		msgShadowColor,
		showCopyMessage,
		homePageUrl,
	} = live2d_settings;

	// 看板娘菜单项
	const menuObj = [{
		id: 1,
		label: '言',
		class: 'wraith-live2d-tips',
		color: menuColor,
	},
	{
		id: 2,
		label: '模',
		class: 'wraith-live2d-model',
		color: menuColor,
	},
	{
		id: 3,
		label: '肤',
		class: 'wraith-live2d-skin',
		color: menuColor,
	},
	{
		id: 4,
		label: '照',
		class: 'wraith-live2d-photo',
		color: menuColor,
	}
	];

	// 获取canvas画布外层盒子元素
	const canvasBoxEl = document.querySelector(`#${boxName}`) || document.querySelector(`.${boxName}`);
	// 获取canvas画布元素
	const canvasEl = document.querySelector(`#${canvasName}`) || document.querySelector(`.${canvasName}`);

	/**
	 * 初始化canvas外层盒子样式
	 */
	canvasBoxEl.setAttribute('style', `position: fixed;bottom: 0;${direction}: 0;`)

	/**
	 * 初始化canvas画布样式
	 */
	canvasEl.width = 300 * scale || 300;
	canvasEl.height = 400 * scale || 400;
	const canvasStyle = 'position:relative;display: block;'
	canvasEl.setAttribute('style', `${canvasStyle}cursor: -webkit-grab;cursor: -moz-grab;cursor: grab;`);

	/**
	 * 初始化Message盒子
	 */
	const messageDiv = document.createElement('div');
	messageDiv.className = 'wraith-live2d-message-box';
	const msgStyle =
		`padding:1em;position:absolute;top:-100px;left:4%;right:4%;border-radius:8px;background:red;transition: opacity .4s;`
	const msgCss =
		`border: 1px solid ${msgBgColor};background-color:${msgBgColor};box-shadow:0 3px 15px 2px ${msgShadowColor};`
	messageDiv.style = `${msgStyle}${msgCss}color:${msgFontColor}`;
	messageDiv.innerHTML = `<div class='wraith-live2d-message' style='line-height: 1.3em;overflow: hidden;height:4em;
							word-wrap: break-word;word-break: break-all;font-size:${msgFontSize}px'></div>`
	canvasBoxEl.insertBefore(messageDiv, canvasBoxEl.firstChild);

	const messageEl = document.querySelector('.wraith-live2d-message');

	/**
	 * 初始化菜单盒子
	 */
	const menuDiv = document.createElement('div');
	const orient = canvasBoxEl.offsetLeft > 0 ? 'left' : 'right';
	const fontSize = parseInt(menuFontSize) || 0;
	menuDiv.className = 'wraith-live2d-menu-box';
	menuDiv.style =
		`position:absolute;${orient}:-${fontSize * 1.5}px;top:${menuTop};transition: opacity .4s;opacity:0`;
	// 设置用户无法选择文字
	const selectNone =
		'user-select: none;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;'
	// 预设菜单子项与其样式
	const menuStyle =
		`${selectNone}cursor:pointer;margin-bottom:${fontSize / 2}px;cursor:pointer;font-size:${fontSize}px;width:${fontSize * 1.5}px;
		height:${fontSize * 1.5}px;line-height:${fontSize * 1.5}px;border-radius: 50%;text-align: center;border:1px solid `;
	let menuStr = '';
	menuObj.forEach((obj) => {
		menuStr +=
			`<div class="${obj.class}" style="${menuStyle}${obj.color};color:${obj.color}">${obj.label}</div>`;
	});
	menuDiv.innerHTML = menuStr;
	canvasBoxEl.insertBefore(menuDiv, canvasBoxEl.firstChild);

	/**
	 * 事件处理
	 */
	const messageBoxEl = document.querySelector('.wraith-live2d-message-box');
	const menuBoxEl = document.querySelector(".wraith-live2d-menu-box");
	// 如无操作，5秒后隐藏message
	let timer = null;
	hideMessageBoxEl(5000);
	/**
	 * 设置默认展示文本
	 */
	// 当前链接处于主页链接时
	if (window.location.href === homePageUrl) {
		// 每天的时辰
		const tips = message.wraith.hour_tips;
		const nowHours = getDateTime('hh');
		const timeKey = Object.keys(tips).find((key) => key.includes(nowHours)) || 'default';
		showTips(tips[timeKey], 5000);
		// 每年的节日
		const nowDate = `${getDateTime('MM')}/${getDateTime('dd')}`;
		if (message.seasons[nowDate]) showTips(message.seasons[nowDate], 5000);
	}
	getDateTime();
	/**
	 * 获取时间
	 */
	function getDateTime(str) {
		const formatDate = 'yyyy-MM-dd hh:mm:ss';
		if ('yyyy'.includes(str)) return new Date().getYear();
		if ('MM'.includes(str)) return new Date().getMonth() + 1;
		if ('dd'.includes(str)) return new Date().getDate();
		if ('hh'.includes(str)) return new Date().getHours();
		if ('mm'.includes(str)) return new Date().getMinutes();
		if ('ss'.includes(str)) return new Date().getSeconds();
	}
	// canvas外层盒子移入移出事件
	canvasBoxEl.onmouseover = () => {
		// 鼠标移入，显示菜单
		menuBoxEl.style.opacity = 1;
		showMessageBoxEl();
	};
	canvasBoxEl.onmouseout = () => {
		// 鼠标移出，隐藏菜单
		menuBoxEl.style.opacity = 0;
		hideMessageBoxEl(5000);
	};
	/**
	 * message盒子的显示隐藏
	 */
	function showMessageBoxEl() {
		messageBoxEl.style.opacity = 1;
		// 清除延时
		clearTimeout(timer);
	};

	function hideMessageBoxEl(time) {
		timer = setTimeout(() => {
			messageBoxEl.style.opacity = 0;
			// 清除延时
			if (timer) clearTimeout(timer);
		}, time);
	};
	// canvas鼠标按下事件
	canvasEl.onmousedown = () => {
		canvasEl.setAttribute('style',
			`${canvasStyle}cursor: -webkit-grabbing;cursor: -moz-grabbing;cursor: grabbing;`);
		showTips(message.click[randomNum(message.click.length - 1)]);
	};
	// canvas鼠标松开事件
	canvasEl.onmouseup = () => {
		canvasEl.setAttribute('style', `${canvasStyle}cursor: -webkit-grab;cursor: -moz-grab;cursor: grab;`);
	};

	// 当前点击的切换对象是模型还是皮肤
	let curChange = null;
	// 当前展示模型的索引
	let curModel = 0;
	// 当前展示模型皮肤的索引
	let curSkin = 0;
	/**
	 * 
	 * 菜单项操作事件
	 */
	menuObj.forEach((item) => {
		// 菜单鼠标移入事件
		document.querySelector(`.${item.class}`).onmouseenter = () => {
			const menuObj = message.mouseover.find((obj) => obj.selector === item.class);
			if (menuObj?.text) showTips(menuObj.text);
		};
		// 菜单鼠标点击事件
		document.querySelector(`.${item.class}`).onclick = () => {
			switch (item.id) {
				case 1:
					// 随机语句
					const randText = params?.wraithMessageApi ||
						message.wraith.api_message[randomNum(message.wraith.api_message.length - 1)];
					showTips(randText);
					break;
				case 2:
					// 如果当前索引超过了模型总索引，从第一个模型重新开始
					curModel = curModel < models.length - 1 ? curModel + 1 : 0;
					// 每次切换模型，把皮肤索引重新设置
					curSkin = 0;
					curChange = 'model';
					if (saveModelSkin) setModelSkin({
						curModel,
						curSkin,
					});
					console.log()
					showTips(`你好，我来自${models[curModel][curSkin]}`);
					loadingLive2d();
					break;
				case 3:
					const skinArr = models[curModel] || [];
					// 如果当前皮肤索引超过了当前模型下皮肤的总索引，从第一个皮肤重新开始
					curSkin = curSkin < skinArr.length - 1 ? curSkin + 1 : 0;
					curChange = 'skin';
					if (saveModelSkin) setModelSkin({
						curModel,
						curSkin,
					});
					if (skinArr.length > 1) {
						showTips('我的新衣服好看嘛?');
					} else {
						showTips('我还没有其他衣服呢?');
					}
					loadingLive2d();
					break;
				case 4:
					showTips(message.wraith.screenshot_message, 5000);
					// 保存当前加载的live2d的图片
					window.Live2D.captureName = 'live2d.png';
					window.Live2D.captureFrame = true;
					break;
				default:
					break;
			}
		}
	});
	/**
	 * 初次加载live2d模型
	 */
	loadingLive2d();
	/**
	 * 监听复制剪切操作
	 */
	if (showCopyMessage) {
		document.oncopy = function () {
			showTips(message.wraith.copy_message);
			showMessageBoxEl();
		};
		document.oncut = function () {
			showTips(message.wraith.copy_message);
			showMessageBoxEl();
		};
	}
	/**
	 * 加载live2d
	 */
	function loadingLive2d() {
		if (modelSwitcher === 'random') {
			// 当切换模型点击事件触发，才改变模型，否则只切换皮肤
			if (curChange === 'model') curModel = randomNum(models?.length - 1);
			curSkin = randomNum(models[curModel]?.length - 1);
		} else if (saveModelSkin) {
			curModel = getCurModelSkin().curModel;
			curSkin = getCurModelSkin().curSkin;
		}
		const url = `${modelApi}/model/${models[curModel][curSkin]}/index.json`;
		loadlive2d("wraith-canvas", url);
	};
	/**
	 * @param {Object} 
	 * obj存储当前模型和皮肤的索引值
	 */
	function setModelSkin(obj) {
		return localStorage.setItem('live2dModelSkin', JSON.stringify(obj));
	};
	/**
	 * 取出当前模型和皮肤索引值
	 */
	function getCurModelSkin() {
		return JSON.parse(localStorage.getItem('live2dModelSkin')) || {
			curModel: 0,
			curSkin: 0
		};
	};
	/**
	 * 生成随机数
	 */
	function randomNum(max = 10) {
		const min = 0;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	/**
	 * @param {Object} text
	 * @param {Object} timeout
	 * 重载message文本
	 */
	function showTips(text, timeout) {
		messageEl.innerHTML = text;
		if (timeout) {
			if (timer) clearTimeout(timer);
			hideMessageBoxEl(timeout);
		}
	};
};
console.clear();
