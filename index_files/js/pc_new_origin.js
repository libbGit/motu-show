/*!
 * @description pagechoice motu_domain
 * @revise  artecfeng
 * @version  1.0.0.01
 * @to  yichepc
 * @now yiche
 * @changedate 2019-02-25
 * @changelog 更改css 表单样式
 */

/**
 * 用于将js文件，通过<script src="url">的方式加载到页面
 */

(function(window, undefined) {
    "use strict";
  
    let formData = {
      rows: [
        { id: 1, name: "name", title: "注册预约试驾", type: "label" },
        { id: 10, name: "province", option: "geoStores", title: "省份", type: "select" },
        { id: 11, name: "city", option: "geoStores", title: "城市", type: "select" },
        { id: 12, name: "shop", option: "geoStores", title: "经销商", type: "select" },
        { id: 13, name: "name", title: "姓名", type: "text" },
        { id: 14, name: "phone", title: "手机", type: "password" },
        { id: 15, name: "submit", title: "提交注册", type: "submit" }
      ],
      geoStores: {
        上海市: { 上海市: ["启辰上海东浦五洲大道", "启辰上海东风南方威顺", "启辰上海松江"] },
        云南省: {
          大理市: ["启辰大理东风南方东明"],
          德宏傣族景颇族自治州: ["启辰德宏弘信环东"],
          昆明市: ["启辰昆明东风南方三佳"],
          玉溪市: ["启辰玉溪东风南方龙马"],
          红河哈尼族彝族自治州: ["启辰红河护国路观福"]
        },
        内蒙古: {
          乌兰察布市: ["启辰乌兰察布新东辰"],
          兴安盟市: ["启辰兴安盟亚龙"],
          包头市: ["启辰包头恒畅稀土路"],
          呼伦贝尔市: ["启辰呼伦贝尔骏通"],
          赤峰市: ["启辰赤峰世航"],
          通辽市: ["启辰通辽驰程"]
        },
        北京市: {
          北京市: ["启辰北京东风南方大兴", "启辰北京中汽雷日学院路", "启辰北京华盛昌辰天", "启辰北京庞大腾飞"]
        },
        吉林省: { 吉林市: ["启辰吉林融展瑞祥"], 长春市: ["启辰长春一驰"] },
        四川省: {
          南充市: ["启辰南充东风南方树生"],
          宜宾市: ["启辰宜宾河田江北"],
          德阳市: ["启辰德阳东风南方中凯"],
          成都市: ["启辰成都东风南方双流成发", "启辰成都东风南方青羊成达"],
          泸州市: ["启辰泸州东风南方江阳泸发"],
          绵阳市: ["启辰绵阳东风南方绵发"],
          达州市: ["启辰达州商驰"],
          遂宁市: ["启辰遂宁东风南方遂兴"]
        },
        天津市: { 天津市: ["启辰天津友尚", "启辰天津名濠", "启辰天津广裕盛世", "启辰天津鹏兴静海"] },
        宁夏省: { 银川市: ["启辰银川赢胜"] },
        安徽省: {
          六安市: ["启辰六安小小子辰"],
          合肥市: ["启辰合肥宇之行", "启辰合肥小小"],
          宿州市: ["启辰宿州浩睿"],
          滁州市: ["启辰天长东辰"],
          阜阳市: ["启辰阜阳中旭开发区"]
        },
        山东省: {
          东营市: ["启辰东营诚丰和轩"],
          临沂市: ["启辰临沂启通", "启辰临沂辰通"],
          德州市: ["启辰德州国信临邑", "启辰德州盛威龙"],
          日照市: ["启辰日照易通东升"],
          枣庄市: ["启辰枣庄天通"],
          泰安市: ["启辰泰安嘉信泰山"],
          济南市: ["启辰济南大友龙"],
          济宁市: ["启辰济宁东风南方星源", "启辰邹城东风南方启兴"],
          淄博市: ["启辰淄博天航晨源"],
          渮泽市: ["启辰菏泽东风南方启发", "启辰菏泽东风南方广源"],
          潍坊市: ["启辰寿光风神"],
          烟台市: ["启辰烟台天航", "启辰烟台弘信开发区"],
          聊城市: ["启辰聊城东风南方天泽"],
          青岛市: ["启辰青岛家盛胶州"]
        },
        山西省: {
          临汾市: ["启辰临汾东风南方尧都"],
          大同市: ["启辰大同东佳"],
          太原市: ["启辰太原东风南方北城", "启辰太原东风南方龙城"],
          忻州市: ["启辰忻州东风南方忻府"],
          晋中市: ["启辰晋中东风南方汇盛"],
          晋城市: ["启辰晋城盛元辰瑞"],
          朔州市: ["启辰朔州汇海安泰"],
          运城市: ["启辰运城瑞嘉"],
          长治市: ["启辰长治蓝池赛龙城北"],
          阳泉市: ["启辰阳泉东风南方太行"]
        },
        广东省: {
          东莞市: [
            "启辰东莞东风南方东兴",
            "启辰东莞东风南方东深",
            "启辰东莞东风南方南城",
            "启辰东莞东风南方富民",
            "启辰东莞东风南方寮辰"
          ],
          中山市: ["启辰中山世纪", "启辰中山东月"],
          云浮市: ["启辰云浮雄峰"],
          佛山市: ["启辰佛山旭辰", "启辰佛山禅车城", "启辰佛山雄峰", "启辰顺德桂辰"],
          广州市: [
            "启辰广州万江",
            "启辰广州东风南方东泰",
            "启辰广州东风南方利辰",
            "启辰广州东风南方广辰",
            "启辰广州东风南方新塘",
            "启辰广州腾逸达",
            "启辰广州荔湾芳村",
            "启辰广州迎宾番禺"
          ],
          惠州市: ["启辰惠州天骅", "启辰惠州天骊", "启辰惠州醒晨"],
          揭阳市: ["启辰揭阳恒捷"],
          梅州市: ["启辰梅州春天"],
          汕头市: ["启辰汕头中升恒晨", "启辰汕头启航"],
          汕尾市: ["启辰汕尾启信"],
          江门市: ["启辰江门利辰蓬江", "启辰江门泰辰"],
          河源市: ["启辰河源雄峰源城"],
          深圳市: ["启辰深圳东风南方华景", "启辰深圳东风南方华龙"],
          清远市: ["启辰清远银江"],
          湛江市: ["启辰湛江保利"],
          潮州市: ["启辰潮州侨水"],
          珠海市: ["启辰珠海通九州泰锋"],
          肇庆市: ["启辰肇庆合利丰"],
          茂名市: ["启辰茂名广利丰"],
          阳江市: ["启辰阳江广宝辰"],
          韶关市: ["启辰韶关通九州帝利"]
        },
        广西省: {
          北海市: ["启辰北海雄峰"],
          南宁市: ["启辰南宁康和科园", "启辰南宁弘启"],
          崇左市: ["启辰崇左广利成友谊大道"],
          来宾市: ["启辰来宾广利"],
          柳州市: ["启辰柳州航盛"],
          桂林市: ["启辰桂林弘辰"],
          梧州市: ["启辰梧州合利辰"],
          河池市: ["启辰河池雄峰"],
          玉林市: ["启辰玉林广利"],
          百色市: ["启辰百色桂程"],
          贵港市: ["启辰贵港雄峰"],
          贺州市: ["启辰贺州合利"],
          钦州市: ["启辰钦州雄峰车城"]
        },
        新疆: {
          乌鲁木齐市: ["启辰乌鲁木齐卓辉友好", "启辰乌鲁木齐卓辉赛博特", "启辰乌鲁木齐天中"],
          伊犁哈萨克自治州: ["启辰伊犁天中"],
          和田市: ["启辰和田天中"],
          哈密市: ["启辰哈密万丰"],
          喀什市: ["启辰喀什煜辉"],
          巴音郭楞蒙古自治州: ["启辰库尔勒青丰巴州"],
          昌吉市: ["启辰昌吉汇京吉祥"],
          石河子市: ["启辰石河子升辉"],
          阿克苏市: ["启辰阿克苏奕辉大欣"]
        },
        江苏省: {
          南京市: ["启辰南京宇辰江宁"],
          南通市: ["启辰南通太平洋兴伟"],
          宿迁市: ["启辰宿迁浩辰"],
          常州市: ["启辰常州中天日辰"],
          徐州市: ["启辰徐州震华"],
          扬州市: ["启辰扬州东风南方扬辰"],
          无锡市: ["启辰无锡南华"],
          昆山市: ["启辰昆山华星"],
          泰兴市: ["启辰泰州东风南方泰兴"],
          淮安市: ["启辰淮安兴泰淮阴"],
          盐城市: ["启辰盐城太平洋博通"],
          苏州市: ["启辰苏州诚隆"],
          连云港市: ["启辰连云港盈辰"]
        },
        江西省: {
          上饶市: ["启辰上饶月亮湾汽车城"],
          九江市: ["启辰九江友缘庐山"],
          南昌市: ["启辰南昌泰辰东湖"],
          宜春市: ["启辰高安江华"],
          新余市: ["启辰新余利辰仙女湖"],
          赣州市: ["启辰赣州友缘", "启辰赣州虔辰"]
        },
        河北省: {
          保定市: ["启辰保定东风南方和兴", "启辰保定东风南方和顺", "启辰保定东风南方涿州"],
          唐山市: ["启辰唐山汇京唐誉", "启辰迁安汇京四通"],
          廊坊市: ["启辰廊坊华盛昌辰悦"],
          张家口市: ["启辰张家口华联腾飞"],
          沧州市: ["启辰任丘东风南方泰丽", "启辰沧州东风南方沧运", "启辰沧州东风南方沧运开发区"],
          石家庄市: ["启辰石家庄东风南方尚德", "启辰石家庄东风南方联德"],
          秦皇岛市: ["启辰秦皇岛京翰"],
          衡水市: ["启辰衡水蓝池滨湖赛龙"],
          邢台市: ["启辰邢台蓝池赛龙", "启辰邢台蓝池鼎龙"],
          邯郸市: ["启辰邯郸东风南方北环"]
        },
        河南省: {
          三门峡市: ["启辰三门峡威佳开发区"],
          信阳市: ["启辰信阳威佳启通"],
          南阳市: ["启辰南阳威佳启昌"],
          周口市: ["启辰周口威佳启诚"],
          商丘市: ["启辰商丘威佳启祥"],
          安阳市: ["启辰安阳威佳文峰", "启辰安阳威佳豫北车城"],
          平顶山市: ["启辰平顶山威佳启泰"],
          开封市: ["启辰开封金明"],
          新乡市: ["启辰新乡威佳启新"],
          洛阳市: ["启辰洛阳威佳启兴"],
          漯河市: ["启辰漯河威佳启程"],
          濮阳市: ["启辰濮阳威佳启隆"],
          焦作市: ["启辰焦作威佳"],
          许昌市: ["启辰许昌威佳启旺"],
          郑州市: ["启辰巩义威佳宏昊", "启辰郑州威佳圃田", "启辰郑州威佳花园路", "启辰郑州威骏中牟"],
          驻马店市: ["启辰驻马店威佳启浩"]
        },
        浙江省: {
          台州市: ["启辰台州恒联"],
          嘉兴市: ["启辰嘉兴裕大南湖"],
          宁波市: ["启辰宁波东幸海曙", "启辰象山众博"],
          杭州市: ["启辰杭州东风南方宁新"],
          温州市: ["启辰温州龙汇", "启辰温州龙辰"],
          湖州市: ["启辰湖州东风南方湖骏"],
          金华市: ["启辰金华金辰"]
        },
        海南省: {
          万宁市: ["启辰万宁东风南方启吉"],
          三亚市: ["启辰三亚东风南方启佑"],
          海口市: ["启辰海口东风南方启神"],
          琼海市: ["启辰琼海东风南方启海"]
        },
        湖北省: {
          十堰市: ["启辰十堰东贸轩弘"],
          咸宁市: ["启辰咸宁广裕银泉"],
          孝感市: ["启辰三环义通孝南"],
          宜昌市: ["启辰宜昌麟辰"],
          恩施市: ["启辰恩施麟盛"],
          武汉市: ["启辰武汉三环金通汉阳", "启辰武汉三环骏通", "启辰武汉众为"],
          潜江市: ["启辰潜江友爱"],
          荆州市: ["启辰荆州宏通古城"],
          荆门市: ["启辰荆门智为"],
          襄阳市: ["启辰襄阳樊城"],
          随州市: ["启辰随州众合"],
          黄石市: ["启辰黄石腾达"]
        },
        湖南省: {
          娄底市: ["启辰娄底兰天"],
          岳阳市: ["启辰岳阳华强"],
          常德市: ["启辰常德瑞丰"],
          张家界市: ["启辰张家界华盛"],
          怀化市: ["启辰怀化恒裕"],
          株洲市: ["启辰株洲兰天汽车城"],
          永州市: ["启辰永州高辉"],
          湘西土家族苗族自治州: ["启辰吉首储运"],
          益阳市: ["启辰益阳兰天"],
          衡阳市: ["启辰衡阳高鹏"],
          邵阳市: ["启辰邵阳兰天大兴路"],
          长沙市: ["启辰长沙兰天城南", "启辰长沙兰天城西", "启辰长沙兰天星沙", "启辰长沙湘乾岳麓"]
        },
        甘肃省: { 兰州市: ["启辰兰州容华"], 平凉市: ["启辰平凉鑫锐通"], 武威市: ["启辰武威佳成"] },
        福建省: {
          厦门市: ["启辰厦门塞尔福和顺"],
          泉州市: ["启辰泉州汇京晋江", "启辰泉州汇京福新"],
          漳州市: ["启辰漳州聚力星辰"],
          福州市: ["启辰福州汇京新辰青口"],
          莆田市: ["启辰莆田佰胜通涵江"],
          龙岩市: ["启辰龙岩汇京闽龙"]
        },
        贵州省: {
          六盘水市: ["启辰六盘水东风南方黔达"],
          贵阳市: ["启辰贵阳东风南方孟关", "启辰贵阳东风南方白云"],
          遵义市: ["启辰遵义东风南方长沙路"]
        },
        辽宁省: {
          大连市: ["启辰大连华圣西岗", "启辰大连汽贸金三角", "启辰庄河金桥"],
          抚顺市: ["启辰抚顺汽贸新城路"],
          沈阳市: ["启辰沈阳东风南方沈河", "启辰沈阳新世纪"],
          铁岭市: ["启辰铁岭东风南方凡河"]
        },
        重庆市: { 重庆市: ["启辰重庆东风南方渝南", "启辰重庆东风南方渝达", "启辰重庆东风南方渝风"] },
        陕西省: {
          咸阳市: ["启辰咸阳福泽秦都", "启辰咸阳英和金旭"],
          安康市: ["启辰安康合裕"],
          榆林市: ["启辰榆林榆佳"],
          汉中市: ["启辰汉中合裕兴汉"],
          渭南市: ["启辰渭南广汇渭清"],
          西安市: ["启辰西安英和天台", "启辰西安远方通达"]
        },
        青海省: { 西宁市: ["启辰西宁青鹏"] },
        黑龙江省: { 齐齐哈尔市: ["启辰齐齐哈尔华宇瑞通"] }
      }
    };
  
    let defaultSetting = {
      motu_type: "",
      kakari_Position: "",
      float_Position: "",
      timeLength: 5,
      trigger_Position: "1",
      css: []
    };
  
    let imageDom; //image dom元素
  
    //在开发中修改此处即可 start
    const env = {
      mode: "development", //是开发模式还是生产模式 development | production| test
      href: "http://news.bitauto.com/heise/2019/03/20/938553.html",
      domain: "news.bitauto.com"
    };
    //在开发中修改此处即可 end
  
    const GLOBAL_DATA = {
      mt_url: env.mode == "production" ? "https://pagechoicemotu.gentags.net/mt" : "http://171.84.4.137:8081/mt", //171为测试环境接口，pagechoicemotu为生产环境接口
      es6_url: "index_files/js/polyfill.js",
      jquery_url: "index_files/js/jquery-1.9.0.js",
      vue_url: "index_files/js/vue.js",
      href: env.mode != "development" ? window.location.href : env.href, //在生产环境上，都是通过真实的url来判断媒体的
      domain: env.mode != "development" ? document.domain : env.domain
    };
  
    function start() {
      add_jquery();
    }
  
    function add_jquery() {
      let head = document.getElementsByTagName("head")[0];
      let script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", GLOBAL_DATA.jquery_url);
      script.setAttribute("defer", true); //等待dom加载完再执行
      head.appendChild(script);
  
      script.onload = script.onreadystatechange = function() {
        add_es6_polyfill();
      };
    }
  
    function add_es6_polyfill() {
      let head = document.getElementsByTagName("head")[0];
      let script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", GLOBAL_DATA.es6_url);
      head.appendChild(script);
  
      script.onload = script.onreadystatechange = function() {
        addVueJs();
      };
    }
  
    function addVueJs() {
      let head = document.getElementsByTagName("head")[0];
      let script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", GLOBAL_DATA.vue_url);
      head.appendChild(script);
  
      script.onload = script.onreadystatechange = function() {
        fetch_Mt_Data();
      };
    }
  
    function loadMotuCss(url) {
      if (url[0].charAt(url[0].length - 1) == ";") {
        url = url[0].substr(0, url[0].length - 1);
      }
      let head = document.getElementsByTagName("head")[0];
      let link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("type", "text/css");
      link.setAttribute("href", url);
      head.appendChild(link);
    }
  
    /**
     * 从后端接口获取 数据，根据数据来判断如何展示魔图形式
     */
    function fetch_Mt_Data() {
      let href = GLOBAL_DATA.href;
      let h6; //给mt接口发送的参数pz的值
  
      if ($(".h6 a").length == 1) {
        h6 = $(".h6 a").attr("href");
      } else if ($("#hfCarLevel").length == 1) {
        h6 = $("#hfCarLevel").attr("value");
      }
  
      console.log("fetch_Mt_Data=", href, "h6", h6);
  
      let data = getResponseData();
  
      /**
       * data.pointId   表示页面上需要挂载广告位的大图class
       * data.csss   表示需要加载的动效url
       * data.type   表示需要加载的动效类型
       */
      let option = data.data;
      if (data.state == 200 && data.data) {
        option = data.data;
  
        //加载motu效果css
        // if (env.mode != "development") {
        loadMotuCss(option.csss);
        // }
  
        console.log("option", option);
        //设置，motu广告的跟节点和监测节点
        setMotuRootDom(option);
  
        //创建vue组件
        createVue(option);
      }
    }
  
    function getResponseData() {
      let data = {};
  
      let motuType = $(".motu-type option:selected").val();
      if (motuType == 1 || motuType == 2) {
        data = {
          data: {
            active: 1,
            adsense: [
              {
                cvCode:
                  "http://120.26.162.46:8555/mtc?projectId=56&planId=1554285791979&zoneId=145&mediaId=27&formatId=55&creativeId=174&cType=ad&cPosition=1",
                ext: "",
                form_svCode:
                  "http://120.26.162.46:8555/mtc?projectId=56&planId=1554285791979&zoneId=145&mediaId=27&formatId=55&creativeId=174&cType=sbm&cPosition=1",
                fromUrl: "http://171.84.4.139/data/fordring/creative/20190401/1554110269098.html",
                landingUrl: "http://171.84.4.137",
                logoImg_cvCode:
                  "http://120.26.162.46:8555/mtc?projectId=56&planId=1554285791979&zoneId=145&mediaId=27&formatId=55&creativeId=174&cType=logo&cPosition=1",
                logoImg_pvCode:
                  "http://120.26.162.46:8555/mtv?projectId=56&planId=1554285791979&zoneId=145&mediaId=27&formatId=55&creativeId=174&cType=logo&cPosition=1,http://171.84.4.137",
                logo_img_src: "index_files/image/xiao_tu_001.jpg",
                logo_landingUrl: "http://171.84.4.137",
                positionId: 1,
                pvCode:
                  "http://120.26.162.46:8555/mtv?projectId=56&planId=1554285791979&zoneId=145&mediaId=27&formatId=55&creativeId=174&cType=ad&cPosition=1",
                url: "index_files/image/da_tu_001.jpg"
              },
              {
                cvCode:
                  "http://120.26.162.46:8555/mtc?projectId=56&planId=1554285791979&zoneId=145&mediaId=27&formatId=55&creativeId=174&cType=ad&cPosition=2",
                ext: "",
                form_svCode:
                  "http://120.26.162.46:8555/mtc?projectId=56&planId=1554285791979&zoneId=145&mediaId=27&formatId=55&creativeId=174&cType=sbm&cPosition=2",
                fromUrl: "http://171.84.4.139/data/fordring/creative/20190401/1554110286737.html",
                landingUrl: "http://171.84.4.137",
                logoImg_cvCode:
                  "http://120.26.162.46:8555/mtc?projectId=56&planId=1554285791979&zoneId=145&mediaId=27&formatId=55&creativeId=174&cType=logo&cPosition=2",
                logoImg_pvCode:
                  "http://120.26.162.46:8555/mtv?projectId=56&planId=1554285791979&zoneId=145&mediaId=27&formatId=55&creativeId=174&cType=logo&cPosition=2",
                logo_img_src: "index_files/image/xiao_tu_002.jpg",
                logo_landingUrl: "http://171.84.4.137",
                positionId: 2,
                pvCode:
                  "http://120.26.162.46:8555/mtv?projectId=56&planId=1554285791979&zoneId=145&mediaId=27&formatId=55&creativeId=174&cType=ad&cPosition=2",
                url: "index_files/image/da_tu_002.jpg"
              }
            ],
            closeCvCode:
              "http://120.26.162.46:8555/mtc?projectId=56&planId=1554285791979&zoneId=145&mediaId=27&formatId=55&creativeId=174&cType=cls&cPosition=1",
            creativeId: 174,
            csss: defaultSetting.css,
            customerId: 42,
            float_Position: defaultSetting.float_Position, //
            formSubmitUrl: "http://171.84.4.137/creative/add.do",
            frequency: "1,3",
            jss: [""],
            kakari_Position: defaultSetting.kakari_Position, //
            mediaId: 27,
            planId: 160,
            pointId: ".imgborder",
            positionMark: 1,
            terminal: "pc",
            timeLength: defaultSetting.timeLength,
            trigger_Position: defaultSetting.trigger_Position,
            type: defaultSetting.motu_type,
            zoneId: 145
          },
          message: "OK",
          state: 200
        };
      }
  
      if (motuType == 3) {
        data = {
          data: {
            active: 1,
            adsense: [
              {
                cvCode:
                  "http://120.26.162.46:8555/mtc?projectId=56&planId=1554285791979&zoneId=145&mediaId=27&formatId=55&creativeId=174&cType=ad&cPosition=1",
                ext: "",
                form_svCode:
                  "http://120.26.162.46:8555/mtc?projectId=56&planId=1554285791979&zoneId=145&mediaId=27&formatId=55&creativeId=174&cType=sbm&cPosition=1",
                fromUrl: "http://171.84.4.139/data/fordring/creative/20190401/1554110269098.html",
                landingUrl: "http://171.84.4.137",
                logoImg_cvCode:
                  "http://120.26.162.46:8555/mtc?projectId=56&planId=1554285791979&zoneId=145&mediaId=27&formatId=55&creativeId=174&cType=logo&cPosition=1",
                logoImg_pvCode:
                  "http://120.26.162.46:8555/mtv?projectId=56&planId=1554285791979&zoneId=145&mediaId=27&formatId=55&creativeId=174&cType=logo&cPosition=1,http://171.84.4.137",
                logo_img_src: "index_files/image/xiao_tu_001.jpg",
                logo_landingUrl: "http://171.84.4.137",
                positionId: 1,
                pvCode:
                  "http://120.26.162.46:8555/mtv?projectId=56&planId=1554285791979&zoneId=145&mediaId=27&formatId=55&creativeId=174&cType=ad&cPosition=1",
                url: "index_files/image/da_tu_show.jpg"
              }
            ],
            closeCvCode:
              "http://120.26.162.46:8555/mtc?projectId=56&planId=1554285791979&zoneId=145&mediaId=27&formatId=55&creativeId=174&cType=cls&cPosition=1",
            creativeId: 174,
            csss: defaultSetting.css,
            customerId: 42,
            float_Position: defaultSetting.float_Position, //
            formSubmitUrl: "http://171.84.4.137/creative/add.do",
            frequency: "1,3",
            jss: [""],
            kakari_Position: defaultSetting.kakari_Position, //
            mediaId: 27,
            planId: 160,
            pointId: ".imgborder",
            positionMark: 1,
            terminal: "pc",
            timeLength: defaultSetting.timeLength,
            trigger_Position: defaultSetting.trigger_Position,
            type: defaultSetting.motu_type,
            zoneId: 145
          },
          message: "OK",
          state: 200
        };
      }
  
      if (motuType == 4) {
        data = {
          data: {
            active: 1,
            adsense: [
              {
                cvCode:
                  "https://pctracking.gentags.net/mtc?projectId=56&planId=1554111188725&zoneId=148&mediaId=27&formatId=73&creativeId=148&cType=ad&cPosition=1",
                ext: "",
                form_svCode:
                  "https://pctracking.gentags.net/mtc?projectId=56&planId=1554111188725&zoneId=148&mediaId=27&formatId=73&creativeId=148&cType=sbm&cPosition=1",
                fromUrl: "https://images.pagechoice.net/data/fordring/creative/20171113/1510555062398.html",
                landingUrl: "http://www.baidu.com",
                positionId: 1,
                pvCode:
                  "https://pctracking.gentags.net/mtv?projectId=56&planId=1554111188725&zoneId=148&mediaId=27&formatId=73&creativeId=148&cType=ad&cPosition=1",
                url: "index_files/image/dilan_chang.png"
              }
            ],
            closeCvCode:
              "https://pctracking.gentags.net/mtc?projectId=56&planId=1554111188725&zoneId=148&mediaId=27&formatId=73&creativeId=148&cType=cls&cPosition=1",
            creativeId: 148,
            csss: defaultSetting.css,
            customerId: 42,
            formSubmitUrl: "https://172.16.213.62/creative/add.do",
            frequency: "2,3",
            jss: ["https://images.pagechoice.net/data/athena/js/turn.js;"],
            mediaId: 27,
            planId: 159,
            pointId: ".imgborder",
            positionMark: 1,
            terminal: "pc",
            timeLength: defaultSetting.timeLength,
            trigger_Position: defaultSetting.trigger_Position,
            type: defaultSetting.motu_type,
            zoneId: 148
          },
          message: "OK",
          state: 200
        };
      }
      if (motuType == 5) {
        data = {
          data: {
            active: 1,
            adsense: [
              {
                ext: "",
                form_svCode:
                  "http://171.84.4.137:9001/mtc?projectId=182&planId=1559110413876&zoneId=168&mediaId=32&formatId=96&creativeId=359&cType=sbm&cPosition=1",
                fromUrl: "http://171.84.4.139/data/fordring/creative/20190528/1559029767726.html",
                logoImg_cvCode:
                  "http://171.84.4.137:9001/mtc?projectId=182&planId=1559110413876&zoneId=168&mediaId=32&formatId=96&creativeId=359&cType=logo&cPosition=1",
                logoImg_pvCode:
                  "http://171.84.4.137:9001/mtv?projectId=182&planId=1559110413876&zoneId=168&mediaId=32&formatId=96&creativeId=359&cType=logo&cPosition=1",
                logo_img_src: "index_files/image/dilan_duan.jpg",
                logo_landingUrl: "http://171.84.4.137/plan/toInsertPlanPage.do?platform=pc",
                positionId: 1
              }
            ],
            closeCvCode:
              "http://171.84.4.137:9001/mtc?projectId=182&planId=1559110413876&zoneId=168&mediaId=32&formatId=96&creativeId=359&cType=cls&cPosition=1",
            creativeId: 359,
            csss: defaultSetting.css,
            customerId: 140,
            formSubmitUrl: "http://171.84.4.137/creative/add.do",
            frequency: "3,3",
            jss: [""],
            mediaId: 32,
            planId: 256,
            pointId: ".imgborder",
            positionMark: 1,
            terminal: "pc",
            timeLength: defaultSetting.timeLength,
            trigger_Position: defaultSetting.trigger_Position,
            type: defaultSetting.motu_type,
            zoneId: 168
          },
          message: "OK",
          state: 200
        };
      }
  
      return data;
    }
  
    /**
     * 设置 魔图的根节点和监测 节点
     */
    function setMotuRootDom(data) {
      if (data.pointId.indexOf(".") > -1) {
        //包含点的class
        if ($(data.pointId + ":first").get(0).nodeName == "IMG") {
          //适配易车正文  返回的pointId是图片的
          if ($(data.pointId + ":first").width()) {
            imageDom = $(data.pointId + ":first");
            imageDom.parent("p").css({ position: "relative" });
            imageDom.parent("div").css({ position: "relative" });
          } else {
            console.log("**********************原图为空！pointId为：****************" + data.pointId);
          }
        } else if ($(data.pointId + ":first").get(0).nodeName == "DIV") {
          //易车图库  返回的pointId TMD不是图片，而是图片的parent，即div的
          if ($(data.pointId + " img:first").width()) {
            imageDom = $(data.pointId + " img:first");
            imageDom.parent("p").css({ position: "relative" });
            imageDom.parent("div").css({ position: "relative" });
          } else {
            console.log("**********************原图为空！pointId为：****************" + data.pointId);
          }
        } else {
          console.log("**********************原图为空！pointId为：****************" + data.pointId);
        }
      } else {
        //不包含点的class，用于data-class
        if ($("[data-class=" + data.pointId + "]" + ":first").width()) {
          //适配中国娱乐网
          imageDom = $("[data-class=" + data.pointId + "]" + ":first");
          imageDom.parent("p").css({ position: "relative" });
          imageDom.parent("div").css({ position: "relative" });
        } else {
          console.log("**********************原图为空！pointId为：****************" + data.pointId);
        }
      }
  
      imageDom.after("<div id='motu-app'></div>"); //id不能变，用于vue绑定节点，最后会替换掉
      //设置监测
      imageDom.after('<div class="motu_monitor" style="display:none;"></div>');
    }
  
    /**
     *
     * 创建vue组件
     */
    function createVue(mtData) {
      createMotuSingle(mtData);
      createMotuDouble(mtData);
  
      createMotuSingleShow(mtData);
      createMotuLongShow(mtData);
      createMotuShortShow(mtData);
  
      /**
                1 挂角单广告交互     
                2 挂角双广告交互   
                3 挂角单广告展示   
                4 底栏交互长标签  
                5 底栏交互短标签  
               */
      if (mtData.type == 1) {
        let vm = new Vue({
          render: h => h("motu-single")
        }).$mount("#motu-app");
      } else if (mtData.type == 2) {
        let vm = new Vue({
          render: h => h("motu-double")
        }).$mount("#motu-app");
      } else if (mtData.type == 3) {
        let vm = new Vue({
          render: h => h("motu-single-show")
        }).$mount("#motu-app");
      } else if (mtData.type == 4) {
        let vm = new Vue({
          render: h => h("motu-long")
        }).$mount("#motu-app");
      } else if (mtData.type == 5) {
        let vm = new Vue({
          render: h => h("motu-short")
        }).$mount("#motu-app");
      }
    }
  
    //创建 长底栏 交互
    function createMotuLongShow(mtData) {
      Vue.component("motu-long", {
        data() {
          return {
            close: "close",
            singleData: mtData,
            showMain: true,
            url: mtData.adsense[0].url,
            landingUrl: mtData.adsense[0].landingUrl,
  
            geoStores: {},
            provinceArr: [],
            cityArr: [],
            hometownArr: [],
            province_title: "province",
            city_tile: "city",
            hometown_title: "hometown",
            name_title: "name",
            phone_title: "phone",
  
            provinceValue: "",
            cityValue: "",
            hometownValue: "",
            nameValue: "",
            phoneValue: "",
  
            headerBackground: {
              background: ""
            },
            // headerClosePosition: {},
            showBody: false,
            closeTimer: "",
            openTimer: "",
            hiddenBodyTimer: "",
  
            rules: {
              province: { validate: true },
              city: { validate: true },
              hometown: { validate: true },
              name: { validate: true, message: "" },
              phone: { validate: true, message: "" }
            },
  
            animateCss: "",
            frequencyTime: [], // 展示的频率， n小时内，最多展示m次
  
            isSubmitSuccess: false
          };
        },
        template: ` <div class="mt-main"  @mouseleave="handleMouseleave($event)" v-if="showMain">
                                <div class="mtHeader">
                                    <div class="logo_landing" @mouseenter="handleTriggerOnLabel()" @click="setMotuMonitor(singleData.adsense[0].cvCode)">
                                        <a :href="landingUrl" target="view_window">
                                          <img :src="url">
                                        </a>
                                    </div>
                                </div>
            
                                <div class="mtMainBody" v-show="showBody" @mouseenter="handleMouseenter()">
                                    <div class="mBOne animated" :class="animateCss">
                                        <div class="mBOClose clearfix">
                                            <div class="closs__buton" @click="setMotuMonitor(singleData.closeCvCode,close)" >&Chi;</div>
                                        </div>
                                        <div class="mtSelectArea" v-show="!isSubmitSuccess">
                                          <div class="item">
                                            <label>{{province_title}}</label>
                                            <select @change="handleChangeProvince" v-model="provinceValue">
                                              <option value="">请选择</option>
                                              <option v-for="(item,index) in provinceArr" :key="index" :value="item">{{item}}</option>
                                            </select>
                                            <span class="error_tip" v-if="!rules.province.validate">请选择{{province_title}}</span>
                                          </div>
          
                                          <div class="item">
                                            <label>{{city_tile}}</label>
                                            <select @change="handleChangeCity" v-model="cityValue">
                                              <option value="">请选择</option>
                                              <option v-for="(item,index) in cityArr" :key="index" :value="item">{{item}}</option>
                                            </select>
                                            <span class="error_tip" v-if="!rules.city.validate">请选择{{city_tile}}</span>
                                          </div>
          
                                          <div class="item">
                                            <label>{{hometown_title}}</label>
                                            <select v-model="hometownValue">
                                              <option value="">请选择</option>
                                              <option v-for="(item,index) in hometownArr" :key="index" :value="item">{{item}}</option>
                                            </select>
                                            <span class="error_tip" v-if="!rules.hometown.validate">请选择{{hometown_title}}</span>
                                          </div>
          
                                          <div class="item">
                                            <label>{{name_title}}</label>
                                            <input type="text" placeholder="请输入" v-model="nameValue"/>
                                            <span class="error_tip" v-if="!rules.name.validate">请输入{{name_title}}</span>
                                          </div> 
                                          <div class="item">
                                            <label>{{phone_title}}</label>
                                            <input type="text" placeholder="请输入" v-model="phoneValue"/>
                                            <span class="error_tip" v-if="!rules.phone.validate">{{rules.phone.message}}</span>
                                          </div> 
          
                                          <div class="submit">
                                            <button @click="submit()">立即报名</button>
                                          </div>
                                        </div>
                                        <div class="mtSelectArea" v-show="isSubmitSuccess">
                                          <div style="width: 100%;text-align: center;">
                                            <span class="submit--success">提交成功 </span>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`,
        computed: {},
        methods: {
          init() {
            this.url = this.singleData.adsense[0].url;
            this.landingUrl = this.singleData.adsense[0].landingUrl;
            //小图曝光监测
            this.setMotuMonitor(this.singleData.adsense[0].pvCode);
          },
  
          //是否在标签处触发
          handleTriggerOnLabel() {
            if (this.singleData.trigger_Position != "2") {
              this.handleMouseenter();
            }
          },
  
          handleMouseenter() {
            clearTimeout(this.closeTimer);
            clearTimeout(this.hiddenBodyTimer);
  
            this.animateCss = "slideInUp";
            this.showBody = true;
          },
          handleMouseleave(e) {
            console.log("3333333333333");
            this.closeTimer = setTimeout(() => {
              clearTimeout(this.closeTimer);
              clearTimeout(this.hiddenBodyTimer);
  
              this.animateCss = "slideOutDown";
              this.hiddenBodyTimer = setTimeout(() => {
                this.showBody = false;
              }, 1000);
            }, mtData.timeLength * 1000 || 5000);
          },
  
          //验证频率，是否在n小时内，展示了不超过m次
          validateFrequence() {
            let date = +this.singleData.frequency.split(",")[0]; //时间
            let times = +this.singleData.frequency.split(",")[1]; //次数
            //表示在 一定的时间内，最多展示 相应 的次数
  
            if (this.frequencyTime.length < times) {
              this.frequencyTime.push(new Date());
  
              localStorage.setItem("frequencyTime", JSON.stringify(this.frequencyTime));
              return true;
            } else {
              //当前时间和最早时间的差值
              let timeDelay = (new Date() - new Date(this.frequencyTime[0])) / (1000 * 60 * 60);
              //整体向前平移，更新时间数组
              this.frequencyTime.shift(); //将第一个移除
              this.frequencyTime.push(new Date());
  
              localStorage.setItem("frequencyTime", JSON.stringify(this.frequencyTime));
              if (timeDelay < date) {
                return false;
              } else {
                return true;
              }
            }
          },
  
          setMotuMonitor(urls, type) {
            if (urls) {
              console.log("调用监测.........");
              let urlArr = urls.split(",");
              for (let i = 0; i < urlArr.length; i++) {
                $(".motu_monitor").append('<img src="' + urlArr[i] + '"  width="1" height="1" alt="" />');
              }
              if (type == "close") {
                this.showMain = false;
              }
            }
          },
  
          getCityData(url) {
            return new Promise((resovle, reject) => {
              $.ajax({
                type: "get",
                url: url,
                dataType: "jsonp",
                jsonpCallback: "showData",
                async: false,
                global: false,
                cache: true,
                success: function(data) {
                  resovle(data);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                  reject(textStatus);
                  console.log("请求失败！");
                }
              });
            });
          },
  
          handleChangeProvince() {
            this.cityArr = [];
            this.cityValue = "";
            this.hometownArr = [];
            this.hometownValue = "";
  
            for (let i in this.geoStores[this.provinceValue]) {
              this.cityArr.push(i);
            }
          },
          handleChangeCity() {
            this.hometownArr = [];
            this.hometownValue = "";
  
            let obj = this.geoStores[this.provinceValue][this.cityValue];
  
            for (let i of obj) {
              this.hometownArr.push(i);
            }
          },
  
          submit() {
            let allValidate = true;
            if (this.provinceValue == "") {
              this.rules.province.validate = false;
              allValidate = false;
            } else {
              this.rules.province.validate = true;
            }
  
            if (this.cityValue == "") {
              this.rules.city.validate = false;
              allValidate = false;
            } else {
              this.rules.city.validate = true;
            }
  
            if (this.hometownValue == "") {
              this.rules.hometown.validate = false;
              allValidate = false;
            } else {
              this.rules.hometown.validate = true;
            }
  
            if (this.nameValue == "") {
              this.rules.name.validate = false;
              allValidate = false;
            } else {
              this.rules.name.validate = true;
            }
  
            let phoneReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
            if (this.phoneValue && phoneReg.test(this.phoneValue)) {
              console.log("手机号通过校验");
              this.rules.phone.validate = true;
            } else {
              this.rules.phone.validate = false;
              this.rules.phone.message = "请正确填写格式";
              allValidate = false;
            }
  
            if (allValidate == false) {
              return;
            }
  
            let params = {
              info:
                '{"province":"' +
                this.provinceValue +
                '","city":"' +
                this.cityValue +
                '","shop":"' +
                this.hometownValue +
                '","name":"' +
                this.nameValue +
                '","phone":"' +
                this.phoneValue +
                '"}',
              customerId: this.singleData.customerId,
              ext: this.singleData.adsense[0].ext,
              mediaId: this.singleData.mediaId,
              planId: this.singleData.planId,
              creativeId: this.singleData.creativeId,
              zoneId: this.singleData.zoneId,
              positionId: this.singleData.adsense[0].positionId
            };
            // $.ajax({
            //   type: "post",
            //   url: this.singleData.formSubmitUrl,
            //   dataType: "json",
            //   contentType: "application/json",
            //   data: JSON.stringify(params),
            //   async: true,
            //   success: data => {
            //     console.log(data);
            //     if (data.status_code == 200) {
                  this.isSubmitSuccess = true;
                  this.setMotuMonitor(this.singleData.adsense[0].form_svCode);
              //   } else if (data.status_code == 300) {
              //     this.rules.phone.validate = false;
              //     this.rules.phone.message = "号码已经注册过";
              //   } else {
              //     console.log("请求数据为空！");
              //   }
              // },
              // error: (XMLHttpRequest, textStatus, errorThrown) => {
              //   console.log("请求失败！");
              // }
            // });
          }
        },
        mounted() {
          if (localStorage.getItem("frequencyTime")) {
            this.frequencyTime = JSON.parse(localStorage.getItem("frequencyTime"));
          }
  
          this.init();
  
          if (this.validateFrequence()) {
            this.handleMouseenter();
            this.handleMouseleave();
          }
  
          // this.getCityData(this.singleData.adsense[0].fromUrl).then(data => {
          let data = formData;
          this.register_title = data.rows[0].title;
          this.province_title = data.rows[1].title;
          this.city_tile = data.rows[2].title;
          this.hometown_title = data.rows[3].title;
          this.name_title = data.rows[4].title;
          this.phone_title = data.rows[5].title;
          this.geoStores = data.geoStores;
  
          console.log("dadadada", data);
          //收集 省份
          for (let i in data.geoStores) {
            this.provinceArr.push(i);
          }
          // });
  
          //触发方式包含原图时 给first img绑定事件
          if (this.singleData.trigger_Position == "2" || this.singleData.trigger_Position == "3") {
            imageDom.hover(
              () => {
                this.handleMouseenter();
              },
              () => {
                this.handleMouseleave();
              }
            );
          }
        }
      });
    }
  
    //创建 短底栏 交互
    function createMotuShortShow(mtData) {
      Vue.component("motu-short", {
        data() {
          return {
            close: "close",
            singleData: mtData,
            showMain: true,
            url: mtData.adsense[0].url,
            landingUrl: mtData.adsense[0].landingUrl,
  
            geoStores: {},
            provinceArr: [],
            cityArr: [],
            hometownArr: [],
            province_title: "province",
            city_tile: "city",
            hometown_title: "hometown",
            name_title: "name",
            phone_title: "phone",
  
            provinceValue: "",
            cityValue: "",
            hometownValue: "",
            nameValue: "",
            phoneValue: "",
  
            headerBackground: {
              background: ""
            },
            // headerClosePosition: {},
            showBody: false,
            closeTimer: "",
            openTimer: "",
            hiddenBodyTimer: "",
  
            rules: {
              province: { validate: true },
              city: { validate: true },
              hometown: { validate: true },
              name: { validate: true, message: "" },
              phone: { validate: true, message: "" }
            },
  
            animateCss: "",
            frequencyTime: [], // 展示的频率， n小时内，最多展示m次
  
            isSubmitSuccess: false
          };
        },
        template: ` <div class="mt-main"  @mouseleave="handleMouseleave($event)" v-if="showMain">
                                <div class="mtHeader">
                                    <div class="logo_landing">
                                        <a :href="landingUrl" target="view_window"  class="logo-link">
                                          <img :src="url" @mouseenter="handleTriggerOnLabel()" @click="setMotuMonitor(singleData.adsense[0].logoImg_cvCode)">
                                        </a>
                                    </div>
                                </div>
            
                                <div class="mtMainBody" v-show="showBody" @mouseenter="handleMouseenter()">
                                    <div class="mBOne animated" :class="animateCss">
                                        <div class="mBOClose clearfix">
                                            <div class="closs__buton" @click="setMotuMonitor(singleData.closeCvCode,close)">&Chi;</div>
                                        </div>
                                        <div class="mtSelectArea" v-show="!isSubmitSuccess">
                                          <div class="item">
                                            <label>{{province_title}}</label>
                                            <select @change="handleChangeProvince" v-model="provinceValue">
                                              <option value="">请选择</option>
                                              <option v-for="(item,index) in provinceArr" :key="index" :value="item">{{item}}</option>
                                            </select>
                                            <span class="error_tip" v-if="!rules.province.validate">请选择{{province_title}}</span>
                                          </div>
          
                                          <div class="item">
                                            <label>{{city_tile}}</label>
                                            <select @change="handleChangeCity" v-model="cityValue">
                                              <option value="">请选择</option>
                                              <option v-for="(item,index) in cityArr" :key="index" :value="item">{{item}}</option>
                                            </select>
                                            <span class="error_tip" v-if="!rules.city.validate">请选择{{city_tile}}</span>
                                          </div>
          
                                          <div class="item">
                                            <label>{{hometown_title}}</label>
                                            <select v-model="hometownValue">
                                              <option value="">请选择</option>
                                              <option v-for="(item,index) in hometownArr" :key="index" :value="item">{{item}}</option>
                                            </select>
                                            <span class="error_tip" v-if="!rules.hometown.validate">请选择{{hometown_title}}</span>
                                          </div>
          
                                          <div class="item">
                                            <label>{{name_title}}</label>
                                            <input type="text" placeholder="请输入" v-model="nameValue"/>
                                            <span class="error_tip" v-if="!rules.name.validate">请输入{{name_title}}</span>
                                          </div> 
                                          <div class="item">
                                            <label>{{phone_title}}</label>
                                            <input type="text" placeholder="请输入" v-model="phoneValue"/>
                                            <span class="error_tip" v-if="!rules.phone.validate">{{rules.phone.message}}</span>
                                          </div> 
          
                                          <div class="submit">
                                            <button @click="submit()">立即报名</button>
                                          </div>
                                        </div>
                                        <div class="mtSelectArea" v-show="isSubmitSuccess">
                                          <div style="width: 100%;text-align: center;">
                                            <span class="submit--success">提交成功 </span>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`,
        computed: {},
        methods: {
          init() {
            this.url = this.singleData.adsense[0].logo_img_src;
            this.landingUrl = this.singleData.adsense[0].logo_landingUrl;
            //小图曝光监测
            this.setMotuMonitor(this.singleData.adsense[0].logoImg_pvCode);
          },
  
          //是否在标签处触发
          handleTriggerOnLabel() {
            if (this.singleData.trigger_Position != "2") {
              this.handleMouseenter();
            }
          },
  
          handleMouseenter() {
            clearTimeout(this.closeTimer);
            clearTimeout(this.hiddenBodyTimer);
  
            $(".mtHeader").addClass("showDetail");
  
            this.animateCss = "slideInUp";
            this.showBody = true;
          },
          handleMouseleave(e) {
            console.log("mtData.timeLength", mtData.timeLength, this.closeTimer);
            this.closeTimer = setTimeout(() => {
              clearTimeout(this.closeTimer);
              clearTimeout(this.hiddenBodyTimer);
  
              this.animateCss = "slideOutDown";
              $(".mtHeader").removeClass("showDetail");
  
              this.hiddenBodyTimer = setTimeout(() => {
                this.showBody = false;
              }, 1000);
            }, mtData.timeLength * 1000 || 5000);
          },
  
          //验证频率，是否在n小时内，展示了不超过m次
          validateFrequence() {
            let date = +this.singleData.frequency.split(",")[0]; //时间
            let times = +this.singleData.frequency.split(",")[1]; //次数
            //表示在 一定的时间内，最多展示 相应 的次数
  
            if (this.frequencyTime.length < times) {
              this.frequencyTime.push(new Date());
  
              localStorage.setItem("frequencyTime", JSON.stringify(this.frequencyTime));
              return true;
            } else {
              //当前时间和最早时间的差值
              let timeDelay = (new Date() - new Date(this.frequencyTime[0])) / (1000 * 60 * 60);
              //整体向前平移，更新时间数组
              this.frequencyTime.shift(); //将第一个移除
              this.frequencyTime.push(new Date());
  
              localStorage.setItem("frequencyTime", JSON.stringify(this.frequencyTime));
              if (timeDelay < date) {
                return false;
              } else {
                return true;
              }
            }
          },
  
          setMotuMonitor(urls, type) {
            if (urls) {
              console.log("调用监测.........");
              let urlArr = urls.split(",");
              for (let i = 0; i < urlArr.length; i++) {
                $(".motu_monitor").append('<img src="' + urlArr[i] + '"  width="1" height="1" alt="" />');
              }
              if (type == "close") {
                this.showMain = false;
              }
            }
          },
  
          getCityData(url) {
            return new Promise((resovle, reject) => {
              $.ajax({
                type: "get",
                url: url,
                dataType: "jsonp",
                jsonpCallback: "showData",
                async: false,
                global: false,
                cache: true,
                success: function(data) {
                  resovle(data);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                  reject(textStatus);
                  console.log("请求失败！");
                }
              });
            });
          },
  
          handleChangeProvince() {
            this.cityArr = [];
            this.cityValue = "";
            this.hometownArr = [];
            this.hometownValue = "";
  
            for (let i in this.geoStores[this.provinceValue]) {
              this.cityArr.push(i);
            }
          },
          handleChangeCity() {
            this.hometownArr = [];
            this.hometownValue = "";
  
            let obj = this.geoStores[this.provinceValue][this.cityValue];
  
            for (let i of obj) {
              this.hometownArr.push(i);
            }
          },
  
          submit() {
            let allValidate = true;
            if (this.provinceValue == "") {
              this.rules.province.validate = false;
              allValidate = false;
            } else {
              this.rules.province.validate = true;
            }
  
            if (this.cityValue == "") {
              this.rules.city.validate = false;
              allValidate = false;
            } else {
              this.rules.city.validate = true;
            }
  
            if (this.hometownValue == "") {
              this.rules.hometown.validate = false;
              allValidate = false;
            } else {
              this.rules.hometown.validate = true;
            }
  
            if (this.nameValue == "") {
              this.rules.name.validate = false;
              allValidate = false;
            } else {
              this.rules.name.validate = true;
            }
  
            let phoneReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
            if (this.phoneValue && phoneReg.test(this.phoneValue)) {
              console.log("手机号通过校验");
              this.rules.phone.validate = true;
            } else {
              this.rules.phone.validate = false;
              this.rules.phone.message = "请正确填写格式";
              allValidate = false;
            }
  
            if (allValidate == false) {
              return;
            }
  
            let params = {
              info:
                '{"province":"' +
                this.provinceValue +
                '","city":"' +
                this.cityValue +
                '","shop":"' +
                this.hometownValue +
                '","name":"' +
                this.nameValue +
                '","phone":"' +
                this.phoneValue +
                '"}',
              customerId: this.singleData.customerId,
              ext: this.singleData.adsense[0].ext,
              mediaId: this.singleData.mediaId,
              planId: this.singleData.planId,
              creativeId: this.singleData.creativeId,
              zoneId: this.singleData.zoneId,
              positionId: this.singleData.adsense[0].positionId
            };
            
            // $.ajax({
            //   type: "post",
            //   url: this.singleData.formSubmitUrl,
            //   dataType: "json",
            //   contentType: "application/json",
            //   data: JSON.stringify(params),
            //   async: true,
            //   success: data => {
            //     console.log(data);
            //     if (data.status_code == 200) {
                  this.isSubmitSuccess = true;
                  this.setMotuMonitor(this.singleData.adsense[0].form_svCode);
            //     } else if (data.status_code == 300) {
            //       this.rules.phone.validate = false;
            //       this.rules.phone.message = "号码已经注册过";
            //     } else {
            //       console.log("请求数据为空！");
            //     }
            //   },
            //   error: (XMLHttpRequest, textStatus, errorThrown) => {
            //     console.log("请求失败！");
            //   }
            // });
          }
        },
        mounted() {
          if (localStorage.getItem("frequencyTime")) {
            this.frequencyTime = JSON.parse(localStorage.getItem("frequencyTime"));
          }
  
          this.init();
  
          if (this.validateFrequence()) {
            this.handleMouseenter();
            this.handleMouseleave();
          }
  
          // this.getCityData(this.singleData.adsense[0].fromUrl).then(data => {
          let data = formData;
          this.register_title = data.rows[0].title;
          this.province_title = data.rows[1].title;
          this.city_tile = data.rows[2].title;
          this.hometown_title = data.rows[3].title;
          this.name_title = data.rows[4].title;
          this.phone_title = data.rows[5].title;
          this.geoStores = data.geoStores;
  
          console.log("dadadada", data);
          //收集 省份
          for (let i in data.geoStores) {
            this.provinceArr.push(i);
          }
          // });
  
          //触发方式包含原图时 给first img绑定事件
          if (this.singleData.trigger_Position == "2" || this.singleData.trigger_Position == "3") {
            imageDom.hover(
              () => {
                this.handleMouseenter();
              },
              () => {
                this.handleMouseleave();
              }
            );
          }
        }
      });
    }
  
    function createMotuSingle(mtData) {
      //创建单挂角
      Vue.component("motu-single", {
        data() {
          return {
            singleData: mtData,
            showMain: true,
            logo_landingUrl_0: mtData.adsense[0].logo_landingUrl,
            landingUrl_0: mtData.adsense[0].landingUrl,
  
            headerBackground: {
              background: ""
            },
  
            bodyTopBackground: {
              background: ""
            },
  
            headerClosePosition: {},
  
            active: "one",
  
            showBody: false,
  
            mhOneData: {
              // validate: false,
              register_title: "注册",
              province_title: "province",
              city_tile: "city",
              hometown_title: "hometown",
              name_title: "name",
              phone_title: "phone",
  
              geoStores: {},
              provinceArr: [],
              cityArr: [],
              hometownArr: [],
  
              provinceValue: "",
              cityValue: "",
              hometownValue: "",
              nameValue: "",
              phoneValue: "",
              checked: true
            },
  
            rules: {
              province: { validate: true },
              city: { validate: true },
              hometown: { validate: true },
              name: { validate: true, message: "" },
              phone: { validate: true, message: "" }
            },
  
            isSubmitSuccess: false,
  
            closeTimer: "",
            openTimer: "",
            hiddenBodyTimer: "",
  
            animateCss: "",
            show_position: "right-left", //挂角展示位置  表示，header在右边显示，并且在左侧展开
            frequencyTime: [] // 展示的频率， n小时内，最多展示m次
          };
        },
        template: `
                  <div class="mt-main" :class="show_position" @mouseleave="handleMouseleave($event)" v-if="showMain">
                      <div class="mtHeader">
                          <div class="mhOne" @mouseenter="handleTriggerOnLabel()">
                              <div class="mhOAd" :style="headerBackground" @click="setMotuMonitor(singleData.adsense[0].logoImg_cvCode)">
                                  <a :href='logo_landingUrl_0' target="view_window"></a>
                              </div>
                              <div class="mhOClose" :style="headerClosePosition" @click="setMotuMonitor(singleData.closeCvCode,'close')"></div>
                          </div>
                      </div>
          
                      <div class="mtMainBody" v-show="showBody" @mouseenter="handleMouseenter()">
                          <div class="mBOne animated faster" :class="animateCss" v-show="active=='one'">
                              <div class="mBOPic" :style="bodyTopBackground" @click="setMotuMonitor(singleData.adsense[0].cvCode)">
                                  <a target="view_window" :href='landingUrl_0'></a>
                              </div>
                              <div class="success_page" v-show="isSubmitSuccess">
                                  <p class="image"></p>
                                  <p>提交成功感谢您的参与</p>
                              </div>
                              <div class="mBOForm" v-show="!isSubmitSuccess">
                                  <p class="title" id="mt_zc1">{{mhOneData.register_title}}</p>
                                  <form>
                                      <div class="item">
                                          <label>{{mhOneData.province_title}}</label>
                                          <select id="mt_province" class="select_area" @change="handleChangeProvince" v-model="mhOneData.provinceValue">
                                              <option value="">请选择{{mhOneData.province_title}}</option>
                                              <option v-for="(item,index) in mhOneData.provinceArr" :key="index" :value="item">{{item}}</option>
                                          </select>
                                          <span class="error_tip" v-if="!rules.province.validate">请输入{{mhOneData.province_title}}</span>
                                      </div>
                                      
                                      <div class="item">
                                          <label>{{mhOneData.city_tile}}</label>
                                          <select id="mt_city" class="select_area" @change="handleChangeCity" v-model="mhOneData.cityValue">
                                            <option value="">请选择{{mhOneData.city_tile}}</option>
                                            <option v-for="(item,index) in mhOneData.cityArr" :key="index" :value="item">{{item}}</option>
                                          </select>
                                          <span class="error_tip"  v-if="!rules.city.validate">请输入{{mhOneData.city_tile}}</span>
                                      </div>
                                     
                                      <div  class="item">
                                          <label>{{mhOneData.hometown_title}}</label>
                                          <select id="mt_homeTown" class="select_area" v-model="mhOneData.hometownValue">
                                            <option value="">请选择{{mhOneData.hometown_title}}</option>
                                            <option v-for="(item,index) in mhOneData.hometownArr" :key="index" :value="item">{{item}}</option>
                                          </select>
                                          <span class="error_tip" v-if="!rules.hometown.validate">请输入{{mhOneData.hometown_title}}</span>
                                      </div>
                                      
                                      <div  class="item">
                                          <label>{{mhOneData.name_title}}</label>
                                          <input id="mt_name" maxlength="6" placeholder="请输入姓名" class="select_area" v-model="mhOneData.nameValue"/>
                                          <span class="error_tip" v-if="!rules.name.validate">请输入{{mhOneData.name_title}}</span>
                                      </div>
                                      
                                      <div  class="item">
                                          <label>{{mhOneData.phone_title}}</label>
                                          <input maxlength="12" id="mt_phone" placeholder="请输入手机号" class="select_area" v-model="mhOneData.phoneValue"/>
                                          <span class="error_tip" v-if="!rules.phone.validate">请输入{{rules.phone.message}}</span>
                                      </div>
                                      <div class="item">
                                          <input id="mt_checked1" type="checkbox" v-model="mhOneData.checked"/>
                                          <span style="color:#fff">注册即视为同意<a target="view_window" href="http://i.yiche.com/AuthenService/Register/PrivacyPolicy.html" style="color:green">《隐私政策》</a></span>
                                      </div>
                                  </form>
                                  <p class="submit">
                                      <button id="submit" @click="gotoRegister()" :class="{disabled:!mhOneData.checked}">提交注册</button>
                                  </p>
                              </div>
                              <div class="mBOClose clearfix">
                                  <div class="mbocClose" @click="setMotuMonitor(singleData.closeCvCode,'close')" >关闭广告</div>
                              </div>
                          </div>
                      </div>
                  </div>`,
  
        methods: {
          init() {
            this.logo_landingUrl_0 = this.singleData.adsense[0].logo_landingUrl;
            this.landingUrl_0 = this.singleData.adsense[0].landingUrl;
  
            this.headerBackground = {
              background: "url(" + this.singleData.adsense[0].logo_img_src + ") 0% 0% / 100% 100%"
            };
  
            this.bodyTopBackground = {
              background: `url(${this.singleData.adsense[0].url}) 0% 0% / 100% 100%`
            };
  
            //挂角展示位置
            if (this.singleData.kakari_Position == 1) {
              //左上角
              if (this.singleData.float_Position == 1) {
                //左侧展开
                this.show_position = "left-left";
  
                let img = new Image();
                img.src = this.singleData.adsense[0].url;
                img.onload = () => {
                  //获得底图尺寸
                  $(".mtMainBody").css({ left: -(img.width + 25) + "px" });
                };
              } else {
                this.show_position = "left-right";
              }
  
              let blank =
                Number.parseFloat(imageDom.css("padding-right")) + Number.parseFloat(imageDom.css("margin-right")) + "px";
              $(".mt-main").css({ left: blank });
            } else {
              if (this.singleData.float_Position == 1) {
                //左侧展开
                this.show_position = "right-left";
              } else {
                this.show_position = "right-right";
              }
  
              let blank =
                Number.parseFloat(imageDom.css("padding-right")) + Number.parseFloat(imageDom.css("margin-right")) + "px";
              $(".mt-main").css({ right: blank });
            }
  
            //小图曝光监测
            this.setMotuMonitor(this.singleData.adsense[0].logoImg_pvCode);
          },
  
          //是否在标签处触发
          handleTriggerOnLabel() {
            if (this.singleData.trigger_Position != "2") {
              this.handleMouseenter();
            }
          },
  
          handleMouseenter() {
            if (this.animateCss == "" || this.animateCss.indexOf("Out") > 0) {
              //已经展开，出去，再进入，还是展示状态，不需要再发送监测请求。
              //大图曝光监测
              this.setMotuMonitor(this.singleData.adsense[0].pvCode);
            }
  
            clearTimeout(this.closeTimer);
            clearTimeout(this.hiddenBodyTimer);
  
            if (this.show_position == "right-left") {
              this.animateCss = "bounceInRight";
            } else if (this.show_position == "right-right") {
              this.animateCss = "bounceInLeft";
            } else if (this.show_position == "left-right") {
              this.animateCss = "bounceInLeft";
            } else if (this.show_position == "left-left") {
              this.animateCss = "bounceInRight";
            }
  
            this.showBody = true;
  
            this.active = "one";
            this.headerBackground = {
              background: "url(" + this.singleData.adsense[0].logo_img_src + ") 0% 0% / 100% 100%"
            };
            this.bodyTopBackground = {
              background: `url(${this.singleData.adsense[0].url}) 0% 0% / 100% 100%`
            };
  
            this.headerClosePosition = {
              "background-position": "100% 0%"
            };
          },
  
          handleMouseleave(e) {
            this.closeTimer = setTimeout(() => {
              clearTimeout(this.closeTimer);
              clearTimeout(this.hiddenBodyTimer);
  
              if (this.show_position == "right-left") {
                this.animateCss = "bounceOutRight";
              } else if (this.show_position == "right-right") {
                this.animateCss = "bounceOutLeft";
              } else if (this.show_position == "left-right") {
                this.animateCss = "bounceOutLeft";
              } else if (this.show_position == "left-left") {
                this.animateCss = "bounceOutRight";
              }
  
              this.headerClosePosition = {
                "background-position": "0% 0%"
              };
  
              this.hiddenBodyTimer = setTimeout(() => {
                this.showBody = false;
              }, 1000);
            }, mtData.timeLength * 1000 || 5000);
          },
  
          getCityData(url) {
            return new Promise((resovle, reject) => {
              $.ajax({
                type: "get",
                url: url,
                dataType: "jsonp",
                jsonpCallback: "showData",
                async: false,
                global: false,
                cache: true,
                success: function(data) {
                  resovle(data);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                  reject(textStatus);
                  console.log("请求失败！");
                }
              });
            });
          },
          handleChangeProvince() {
            this.mhOneData.cityArr = [];
            this.mhOneData.cityValue = "";
            this.mhOneData.hometownArr = [];
            this.mhOneData.hometownValue = "";
  
            for (let i in this.mhOneData.geoStores[this.mhOneData.provinceValue]) {
              this.mhOneData.cityArr.push(i);
            }
          },
  
          handleChangeCity() {
            this.mhOneData.hometownArr = [];
            this.mhOneData.hometownValue = "";
  
            let obj = this.mhOneData.geoStores[this.mhOneData.provinceValue][this.mhOneData.cityValue];
  
            for (let i of obj) {
              this.mhOneData.hometownArr.push(i);
            }
          },
  
          setMotuMonitor(urls, type) {
            let urlArr = urls.split(",");
            for (let i = 0; i < urlArr.length; i++) {
              $(".motu_monitor").append('<img src="' + urlArr[i] + '"  width="1" height="1" alt="" />');
            }
            if (type == "close") {
              this.showMain = false;
            }
          },
          //验证频率，是否在n小时内，展示了不超过m次
          validateFrequence() {
            let date = +this.singleData.frequency.split(",")[0]; //时间
            let times = +this.singleData.frequency.split(",")[1]; //次数
            //表示在 一定的时间内，最多展示 相应 的次数
  
            if (this.frequencyTime.length < times) {
              this.frequencyTime.push(new Date());
  
              localStorage.setItem("frequencyTime", JSON.stringify(this.frequencyTime));
              return true;
            } else {
              //当前时间和最早时间的差值
              let timeDelay = (new Date() - new Date(this.frequencyTime[0])) / (1000 * 60 * 60);
              //整体向前平移，更新时间数组
              this.frequencyTime.shift(); //将第一个移除
              this.frequencyTime.push(new Date());
  
              localStorage.setItem("frequencyTime", JSON.stringify(this.frequencyTime));
              if (timeDelay < date) {
                return false;
              } else {
                return true;
              }
            }
          },
  
          validateForm() {
            return new Promise((resolved, reject) => {
              if (!this.mhOneData.checked) {
                reject();
                return;
              }
              let allValidate = true;
              if (this.mhOneData.provinceValue == "") {
                this.rules.province.validate = false;
                allValidate = false;
              } else {
                this.rules.province.validate = true;
              }
  
              if (this.mhOneData.cityValue == "") {
                this.rules.city.validate = false;
                allValidate = false;
              } else {
                this.rules.city.validate = true;
              }
  
              if (this.mhOneData.hometownValue == "") {
                this.rules.hometown.validate = false;
                allValidate = false;
              } else {
                this.rules.hometown.validate = true;
              }
  
              if (this.mhOneData.nameValue == "") {
                this.rules.name.validate = false;
                allValidate = false;
              } else {
                this.rules.name.validate = true;
              }
  
              let phoneReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
              if (this.mhOneData.phoneValue && phoneReg.test(this.mhOneData.phoneValue)) {
                console.log("手机号通过校验");
                this.rules.phone.validate = true;
              } else {
                this.rules.phone.validate = false;
                this.rules.phone.message = "请正确填写格式";
                allValidate = false;
              }
  
              if (allValidate == true) {
                resolved();
              } else {
                reject();
              }
            });
          },
          gotoRegister() {
            this.validateForm().then(() => {
              let params = {};
              if (this.active == "one") {
                params = {
                  info:
                    '{"province":"' +
                    this.mhOneData.provinceValue +
                    '","city":"' +
                    this.mhOneData.cityValue +
                    '","shop":"' +
                    this.mhOneData.hometownValue +
                    '","name":"' +
                    this.mhOneData.nameValue +
                    '","phone":"' +
                    this.mhOneData.phoneValue +
                    '"}',
                  customerId: this.singleData.customerId,
                  ext: this.singleData.adsense[0].ext,
                  mediaId: this.singleData.mediaId,
                  planId: this.singleData.planId,
                  creativeId: this.singleData.creativeId,
                  zoneId: this.singleData.zoneId,
                  positionId: this.singleData.adsense[0].positionId
                };
              }
  
              // $.ajax({
              //   type: "post",
              //   url: this.singleData.formSubmitUrl,
              //   contentType: "application/json",
              //   data: JSON.stringify(params),
              //   async: false,
              //   dataType: "json",
              //   success: data => {
              //     if (data.status_code == 200) {
              if (this.active == "one") {
                this.isSubmitSuccess = true;
              }
  
              this.setMotuMonitor(this.singleData.adsense[0].form_svCode);
              // } else if (data.status_code == 300) {
              //   this.rules.phone.validate = false;
              //   this.rules.phone.message = "号码已经注册过";
              // } else {
              //   // console.log("请求数据为空！");
              // }
              //     },
              //     error: function(XMLHttpRequest, textStatus, errorThrown) {
              //       console.log("请求失败！");
              //     }
              //   });
            });
          }
        },
  
        async mounted() {
          if (localStorage.getItem("frequencyTime")) {
            this.frequencyTime = JSON.parse(localStorage.getItem("frequencyTime"));
          }
  
          this.init();
  
          if (this.validateFrequence()) {
            console.log("频鹿合格...");
            this.handleMouseenter();
            this.handleMouseleave();
          }
  
          //触发方式包含原图时 给first img绑定事件
          if (this.singleData.trigger_Position == "2" || this.singleData.trigger_Position == "3") {
            imageDom.hover(
              () => {
                this.handleMouseenter();
              },
              () => {
                this.handleMouseleave();
              }
            );
          }
  
          // await this.getCityData(this.singleData.adsense[0].fromUrl).then(data => {
          let data = formData;
          this.mhOneData.register_title = data.rows[0].title;
          this.mhOneData.province_title = data.rows[1].title;
          this.mhOneData.city_tile = data.rows[2].title;
          this.mhOneData.hometown_title = data.rows[3].title;
          this.mhOneData.name_title = data.rows[4].title;
          this.mhOneData.phone_title = data.rows[5].title;
          this.mhOneData.geoStores = data.geoStores;
  
          console.log("this.mhOneData", this.mhOneData);
          //收集 省份
          for (let i in data.geoStores) {
            this.mhOneData.provinceArr.push(i);
          }
          // });
        }
      });
    }
  
    //创建单挂角展示
    function createMotuSingleShow(mtData) {
      Vue.component("motu-single-show", {
        data() {
          return {
            close: "close",
            singleData: mtData,
            showMain: true,
            logo_landingUrl_0: mtData.adsense[0].logo_landingUrl,
            landingUrl_0: mtData.adsense[0].landingUrl,
  
            headerBackground: {
              background: ""
            },
            headerClosePosition: {},
            active: "one",
            showBody: false,
            closeTimer: "",
            openTimer: "",
            hiddenBodyTimer: "",
  
            animateCss: "",
            show_position: "right-left", //挂角展示位置  表示，header在右边显示，并且在左侧展开
            frequencyTime: [] // 展示的频率， n小时内，最多展示m次
          };
        },
        template: `<div class="mt-main" :class="show_position"  @mouseleave="handleMouseleave($event)" v-if="showMain">
                                <div class="mtHeader">
                                    <div class="mhOne" @mouseenter="handleTriggerOnLabel()">
                                        <div class="mhOAd" :style="headerBackground" @click="setMotuMonitor(singleData.adsense[0].logoImg_cvCode)">
                                            <a :href="logo_landingUrl_0" target="view_window"></a>'
                                        </div>
                                        <div class="mhOClose" :style="headerClosePosition" @click="setMotuMonitor(singleData.closeCvCode,'close')"></div>
                                    </div>
                                </div>
            
                                <div class="mtMainBody" v-show="showBody" @mouseenter="handleMouseenter()">
                                    <div class="mBOne animated faster" :class="animateCss" v-show="isActiveOne">
                                      <div class="mBOPic" @click="setMotuMonitor(singleData.adsense[0].cvCode)">
                                          <a target="view_window" :href="landingUrl_0">
                                              <img class="mMBPic" :src="singleData.adsense[0].url" />
                                          </a>
                                        </div>
                                        <div class="mBOClose clearfix">
                                            <div class="mbocClose" @click="setMotuMonitor(singleData.closeCvCode,close)" >关闭广告</div>
                                        </div>
                                    </div>
                                </div>
                            </div>`,
  
        computed: {
          isActiveOne() {
            return this.active == "one";
          }
        },
        methods: {
          init() {
            this.logo_landingUrl_0 = this.singleData.adsense[0].logo_landingUrl;
            this.landingUrl_0 = this.singleData.adsense[0].landingUrl;
  
            this.headerBackground = {
              background: "url(" + this.singleData.adsense[0].logo_img_src + ") 0% 0% / 100% 100%"
            };
  
            //挂角展示位置
            if (this.singleData.kakari_Position == 1) {
              //左上角
              if (this.singleData.float_Position == 1) {
                //左侧展开
                this.show_position = "left-left";
  
                let img = new Image();
                img.src = this.singleData.adsense[0].url;
                img.onload = () => {
                  //获得底图尺寸
                  $(".mtMainBody").css({ left: -(img.width + 25) + "px" }); //200刚好为mt-main的width
                };
              } else {
                this.show_position = "left-right";
              }
  
              let blank =
                Number.parseFloat(imageDom.css("padding-right")) + Number.parseFloat(imageDom.css("margin-right")) + "px";
              $(".mt-main").css({ left: blank });
            } else {
              if (this.singleData.float_Position == 1) {
                //左侧展开
                this.show_position = "right-left";
              } else {
                this.show_position = "right-right";
              }
              let blank =
                Number.parseFloat(imageDom.css("padding-right")) + Number.parseFloat(imageDom.css("margin-right")) + "px";
              $(".mt-main").css({ right: blank });
            }
  
            //小图曝光监测
            this.setMotuMonitor(this.singleData.adsense[0].logoImg_pvCode);
          },
  
          //是否在标签处触发
          handleTriggerOnLabel() {
            if (this.singleData.trigger_Position != "2") {
              this.handleMouseenter();
            }
          },
  
          handleMouseenter() {
            if (this.animateCss == "" || this.animateCss.indexOf("Out") > 0) {
              //已经展开，出去，再进入，还是展示状态，不需要再发送监测请求。
              //大图曝光监测
              this.setMotuMonitor(this.singleData.adsense[0].pvCode);
            }
  
            clearTimeout(this.closeTimer);
            clearTimeout(this.hiddenBodyTimer);
  
            if (this.show_position == "right-left") {
              this.animateCss = "bounceInRight";
            } else if (this.show_position == "right-right") {
              this.animateCss = "bounceInLeft";
            } else if (this.show_position == "left-right") {
              this.animateCss = "bounceInLeft";
            } else if (this.show_position == "left-left") {
              this.animateCss = "bounceInRight";
            }
  
            this.showBody = true;
  
            this.active = "one";
            this.headerBackground = {
              background: "url(" + this.singleData.adsense[0].logo_img_src + ") 0% 0% / 100% 100%"
            };
  
            this.headerClosePosition = {
              "background-position": "100% 0%"
            };
          },
          handleMouseleave(e) {
            this.closeTimer = setTimeout(() => {
              clearTimeout(this.closeTimer);
              clearTimeout(this.hiddenBodyTimer);
  
              if (this.show_position == "right-left") {
                this.animateCss = "bounceOutRight";
              } else if (this.show_position == "right-right") {
                this.animateCss = "bounceOutLeft";
              } else if (this.show_position == "left-right") {
                this.animateCss = "bounceOutLeft";
              } else if (this.show_position == "left-left") {
                this.animateCss = "bounceOutRight";
              }
  
              this.headerClosePosition = {
                "background-position": "0% 0%"
              };
  
              this.hiddenBodyTimer = setTimeout(() => {
                this.showBody = false;
              }, 1000);
            }, mtData.timeLength * 1000 || 5000);
          },
  
          //验证频率，是否在n小时内，展示了不超过m次
          validateFrequence() {
            let date = +this.singleData.frequency.split(",")[0]; //时间
            let times = +this.singleData.frequency.split(",")[1]; //次数
            //表示在 一定的时间内，最多展示 相应 的次数
  
            if (this.frequencyTime.length < times) {
              this.frequencyTime.push(new Date());
  
              localStorage.setItem("frequencyTime", JSON.stringify(this.frequencyTime));
              return true;
            } else {
              //当前时间和最早时间的差值
              let timeDelay = (new Date() - new Date(this.frequencyTime[0])) / (1000 * 60 * 60);
              //整体向前平移，更新时间数组
              this.frequencyTime.shift(); //将第一个移除
              this.frequencyTime.push(new Date());
  
              localStorage.setItem("frequencyTime", JSON.stringify(this.frequencyTime));
              if (timeDelay < date) {
                return false;
              } else {
                return true;
              }
            }
          },
  
          setMotuMonitor(urls, type) {
            console.log("调用监测.........");
            let urlArr = urls.split(",");
            for (let i = 0; i < urlArr.length; i++) {
              $(".motu_monitor").append('<img src="' + urlArr[i] + '"  width="1" height="1" alt="" />');
            }
            if (type == "close") {
              this.showMain = false;
            }
          }
        },
        mounted() {
          if (localStorage.getItem("frequencyTime")) {
            this.frequencyTime = JSON.parse(localStorage.getItem("frequencyTime"));
          }
  
          this.init();
  
          if (this.validateFrequence()) {
            this.handleMouseenter();
            this.handleMouseleave();
          }
  
          //触发方式包含原图时 给first img绑定事件
          if (this.singleData.trigger_Position == "2" || this.singleData.trigger_Position == "3") {
            imageDom.hover(
              () => {
                this.handleMouseenter();
              },
              () => {
                this.handleMouseleave();
              }
            );
          }
        }
      });
    }
  
    function createMotuDouble(mtData) {
      //创建双挂角
      Vue.component("motu-double", {
        data() {
          return {
            dubbleData: mtData,
            showMain: true,
            logo_landingUrl_0: mtData.adsense[0].logo_landingUrl,
            landingUrl_0: mtData.adsense[0].landingUrl,
            landingUrl_1: mtData.adsense[1].landingUrl,
  
            headerBackground: {
              background: ""
            },
  
            bodyTopBackground: {
              background: ""
            },
  
            headerClosePosition: {},
  
            active: "one",
            activeLabel: "one",
  
            showBody: false,
  
            mhOneData: {
              validate: false,
              register_title: "注册",
              province_title: "province",
              city_tile: "city",
              hometown_title: "hometown",
              name_title: "name",
              phone_title: "phone",
  
              geoStores: {},
              provinceArr: [],
              cityArr: [],
              hometownArr: [],
  
              provinceValue: "",
              cityValue: "",
              hometownValue: "",
              nameValue: "",
              phoneValue: "",
              checked: true,
  
              rules: {
                province: { validate: true },
                city: { validate: true },
                hometown: { validate: true },
                name: { validate: true, message: "" },
                phone: { validate: true, message: "" }
              },
  
              registerSuccess: false
            },
  
            mhTwoData: {
              validate: false,
              register_title: "注册",
              province_title: "province",
              city_tile: "city",
              hometown_title: "hometown",
              name_title: "name",
              phone_title: "phone",
  
              geoStores: {},
              provinceArr: [],
              cityArr: [],
              hometownArr: [],
  
              provinceValue: "",
              cityValue: "",
              hometownValue: "",
              nameValue: "",
              phoneValue: "",
              checked: true,
  
              rules: {
                province: { validate: true },
                city: { validate: true },
                hometown: { validate: true },
                name: { validate: true, message: "" },
                phone: { validate: true, message: "" }
              },
  
              registerSuccess: false
            },
  
            closeTimer: "",
            openTimer: "",
            hiddenBodyTimer: "",
  
            animateCss: "",
            show_position: "right-left", //挂角展示位置  表示，header在右边显示，并且在左侧展开
            frequencyTime: [] // 展示的频率， n小时内，最多展示m次
          };
        },
  
        template: `
                <div class="mt-main" :class="show_position" @mouseleave="handleMouseleave($event)" v-if="showMain">
                    <div class="mtPointer" :class="activeLabel">
                        <div class="mmpOne"  @mouseenter="handleTriggerOnLabel('onePointer')" ></div>
                        <div class="mmpTwo" @mouseenter="handleTriggerOnLabel('twoPointer')"></div>
                    </div>
                    <div class="mtHeader" @mouseenter="handleTriggerOnLabel(activeLabel=='one'?'onePointer':'twoPointer')">
                        <div class="mhOne" v-show="activeLabel=='one'">
                            <div class="mhOAd" :style="headerBackground" @click="setMotuMonitor(dubbleData.adsense[0].logoImg_cvCode)">
                                <a :href='logo_landingUrl_0' target="view_window"></a>
                            </div>
                            <div class="mhOClose" :style="headerClosePosition" @click="setMotuMonitor(dubbleData.closeCvCode,'close')"></div>
                        </div>
                        <div class="mhTwo" v-show="activeLabel=='two'" >
                            <div class="mhTAd" :style="headerBackground" @click="setMotuMonitor(dubbleData.adsense[1].logoImg_cvCode)">
                                <a :href='logo_landingUrl_0' target="view_window" ></a>
                            </div>
                            <div class="mhTClose" :style="headerClosePosition" @click="setMotuMonitor(dubbleData.closeCvCode,'close')"></div>
                        </div>
                    </div>
        
                    <div class="mtMainBody" v-show="showBody" @mouseenter="handleMouseenter(activeLabel=='one'?'onePointer':'twoPointer')">
                        <div class="mBOne animated faster" :class="animateCss"  v-show="active=='one'">
                            <div class="mBOPic" :style="bodyTopBackground" @click="setMotuMonitor(dubbleData.adsense[0].cvCode)">
                                <a target="view_window" :href='landingUrl_0'></a>
                            </div>
                            <div class="success_page" v-show="mhOneData.registerSuccess">
                                <p class="image"></p>
                                <p>提交成功感谢您的参与</p>
                            </div>
                            <div class="mBOForm" v-show="!mhOneData.registerSuccess">
                                <p class="title" id="mt_zc1">{{mhOneData.register_title}}</p>
                                <form>
                                    <div class="item">
                                        <label class="title">{{mhOneData.province_title}}</label>
                                        <select id="mt_province" class="select_area" @change="handleChangeProvince" v-model="mhOneData.provinceValue">
                                            <option value="">请选择{{mhOneData.province_title}}</option>
                                            <option v-for="(item,index) in mhOneData.provinceArr" :key="index" :value="item">{{item}}</option>
                                        </select>
                                        <span class="error_tip" v-if="!mhOneData.rules.province.validate">请输入{{mhOneData.province_title}}</span>
                                    </div>
                                    
                                    <div class="item">
                                        <label class="title">{{mhOneData.city_tile}}</label>
                                        <select id="mt_city" class="select_area" @change="handleChangeCity" v-model="mhOneData.cityValue">
                                          <option value="">请选择{{mhOneData.city_tile}}</option>
                                          <option v-for="(item,index) in mhOneData.cityArr" :key="index" :value="item">{{item}}</option>
                                        </select>
                                        <span class="error_tip" v-if="!mhOneData.rules.city.validate">请输入{{mhOneData.city_tile}}</span>
                                    </div>
                                    
                                    <div class="item">
                                        <label class="title">{{mhOneData.hometown_title}}</label>
                                        <select id="mt_homeTown" class="select_area" v-model="mhOneData.hometownValue">
                                          <option value="">请选择{{mhOneData.hometown_title}}</option>
                                          <option v-for="(item,index) in mhOneData.hometownArr" :key="index" :value="item">{{item}}</option>
                                        </select>
                                        <span class="error_tip" v-if="!mhOneData.rules.hometown.validate">请输入{{mhOneData.hometown_title}}</span>
                                    </div>
                                    
                                    <div class="item">
                                        <label class="title">{{mhOneData.name_title}}</label>
                                        <input id="mt_name" maxlength="6" placeholder="请输入姓名" class="select_area" v-model="mhOneData.nameValue"/>
                                        <span class="error_tip" v-if="!mhOneData.rules.name.validate">请输入{{mhOneData.name_title}}</span>
                                    </div>
                                    <div class="item">
                                        <label class="title">{{mhOneData.phone_title}}</label>
                                        <input maxlength="12" id="mt_phone" placeholder="请输入手机号" class="select_area" v-model="mhOneData.phoneValue"/>
                                        <span class="error_tip" v-if="!mhOneData.rules.phone.validate">{{mhOneData.rules.phone.message}}</span>
                                    </div>
                                    <div class="item">
                                        <input id="mt_checked1" type="checkbox" v-model="mhOneData.checked"/>
                                        <span style="color:#fff">注册即视为同意<a target="view_window" href="http://i.yiche.com/AuthenService/Register/PrivacyPolicy.html" style="color:green">《隐私政策》</a></span>
                                    </div>
                                </form>
                                <p class="submit">
                                    <button id="submit" @click="gotoRegister()" :class="{disalbed:!mhOneData.checked}">提交注册</button>
                                </p>
                            </div>
                            <div class="mBOClose clearfix">
                                <div class="mbocClose" @click="setMotuMonitor(dubbleData.closeCvCode,'close')" >关闭广告</div>
                            </div>
                        </div>
                        <div class="mBTwo animated faster" :class="animateCss"  v-show="active=='two'">
                            <div class="mBTPic" :style="bodyTopBackground" @click="setMotuMonitor(dubbleData.adsense[1].cvCode)">
                                <a target="view_window" :href='landingUrl_1'></a>
                            </div>
                            <div class="success_page" v-show="mhTwoData.registerSuccess">
                                <p class="image"></p>
                                <p>提交成功感谢您的参与</p>
                            </div>
                            <div class="mBTForm" v-show="!mhTwoData.registerSuccess">
                                <p class="title" id="mt_zc2">{{mhTwoData.register_title}}</p>
                                <form>
                                    <div  class="item">
                                        <label class="title">{{mhTwoData.province_title}}</label>
                                        <select id="mt_province2" class="select_area" @change="handleChangeProvince2" v-model="mhTwoData.provinceValue">
                                          <option value="">请选择{{mhTwoData.province_title}}</option>
                                          <option v-for="(item,index) in mhTwoData.provinceArr" :key="index" :value="item">{{item}}</option>
                                        </select>
                                        <span class="error_tip" v-if="!mhTwoData.rules.province.validate">请输入{{mhTwoData.province_title}}</span>
                                    </div>
                                    <div  class="item">
                                        <label class="title">{{mhTwoData.city_tile}}</label>
                                        <select id="mt_city2" class="select_area" @change="handleChangeCity2" v-model="mhTwoData.cityValue">
                                            <option value="">请选择{{mhTwoData.city_tile}}</option>
                                            <option v-for="(item,index) in mhTwoData.cityArr" :key="index" :value="item">{{item}}</option>
                                        </select>
                                        <span class="error_tip"  v-if="!mhTwoData.rules.city.validate">请输入{{mhTwoData.city_tile}}</span>
                                    </div>
                                    <div  class="item">
                                        <label class="title">{{mhTwoData.hometown_title}}</label>
                                        <select id="mt_homeTown2" class="select_area" v-model="mhTwoData.hometownValue">
                                          <option value="">请选择{{mhTwoData.hometown_title}}</option>
                                          <option v-for="(item,index) in mhTwoData.hometownArr" :key="index" :value="item">{{item}}</option>
                                        </select>
                                        <span class="error_tip" v-if="!mhTwoData.rules.hometown.validate">请输入{{mhTwoData.hometown_title}}</span>
                                    </div>
                                    <div  class="item">
                                        <label class="title">{{mhTwoData.name_title}}</label>
                                        <input id="mt_name2" maxlength="6" placeholder="请输入姓名" class="select_area" v-model="mhTwoData.nameValue">
                                        <span class="error_tip"  v-if="!mhTwoData.rules.name.validate">请输入{{mhTwoData.name_title}}</span>
                                    </div>
                                    <div  class="item">
                                        <label class="title">{{mhTwoData.phone_title}}</label>
                                        <input id="mt_phone2" maxlength="11" placeholder="请输入手机号" class="select_area" v-model="mhTwoData.phoneValue">
                                        <span class="error_tip" v-if="!mhTwoData.rules.phone.validate">{{mhTwoData.rules.phone.message}}</span>
                                    </div>
                                    <div  class="item">
                                        <input id="mt_checked2" type="checkbox" v-model="mhTwoData.checked"/>
                                        <span style="color:#fff">注册即视为同意<a target="view_window" href="http://i.yiche.com/AuthenService/Register/PrivacyPolicy.html" style="color:green">《隐私政策》</a></span>
                                    </div>
                                </form>
                                <p class="submit">
                                    <button id="submit2"  @click="gotoRegister()" :class="{disalbed:!mhTwoData.checked}">提交注册</button>
                                </p>
                            </div>
                            <div class="mBTClose clearfix">
                                <div class="mbtcClose" @click="setMotuMonitor(dubbleData.closeCvCode,'close')">关闭广告</div>
                            </div>
                        </div>
                    </div>
                </div>`,
  
        methods: {
          init() {
            this.logo_landingUrl_0 = this.dubbleData.adsense[0].logo_landingUrl;
            this.landingUrl_0 = this.dubbleData.adsense[0].landingUrl;
            this.landingUrl_1 = this.dubbleData.adsense[1].landingUrl;
  
            this.headerBackground = {
              background: "url(" + this.dubbleData.adsense[0].logo_img_src + ") 0% 0% / 100% 100%"
            };
  
            this.bodyTopBackground = {
              background: `url(${this.dubbleData.adsense[0].url}) 0% 0% / 100% 100%`
            };
  
            //挂角展示位置
            if (this.dubbleData.kakari_Position == 1) {
              //左上角
              if (this.dubbleData.float_Position == 1) {
                //左侧展开
                this.show_position = "left-left";
  
                let img = new Image();
                img.src = this.dubbleData.adsense[0].url;
                img.onload = () => {
                  //获得底图尺寸
                  $(".mtMainBody").css({ left: -(img.width + 25) + "px" });
                };
              } else {
                this.show_position = "left-right";
              }
  
              let blank =
                Number.parseFloat(imageDom.css("padding-right")) + Number.parseFloat(imageDom.css("margin-right")) + "px";
              $(".mt-main").css({ left: blank });
            } else {
              if (this.dubbleData.float_Position == 1) {
                //左侧展开
                this.show_position = "right-left";
              } else {
                this.show_position = "right-right";
              }
  
              let blank =
                Number.parseFloat(imageDom.css("padding-right")) + Number.parseFloat(imageDom.css("margin-right")) + "px";
              $(".mt-main").css({ right: blank });
            }
  
            //小图曝光监测
            this.setMotuMonitor(this.dubbleData.adsense[0].logoImg_pvCode);
          },
  
          //是否在标签处触发
          handleTriggerOnLabel(type) {
            if (type == "onePointer") {
              this.activeLabel = "one";
              this.headerBackground = {
                background: `url(${this.dubbleData.adsense[0].logo_img_src}) 0% 0% / 100% 100%`
              };
            } else if ((type = "twoPointer")) {
              this.activeLabel = "two";
              this.headerBackground = {
                background: `url(${this.dubbleData.adsense[1].logo_img_src}) 0% 0% / 100% 100%`
              };
            }
  
            if (this.dubbleData.trigger_Position != "2") {
              console.log(1111);
              this.handleMouseenter(type);
            }
          },
  
          handleMouseenter(type) {
            if (type == "onePointer") {
              this.active = "one";
              if (this.animateCss == "" || this.animateCss.indexOf("Out") > 0) {
                this.setMotuMonitor(this.dubbleData.adsense[0].pvCode);
              }
              this.headerBackground = {
                background: `url(${this.dubbleData.adsense[0].logo_img_src}) 0% 0% / 100% 100%`
              };
  
              this.bodyTopBackground = {
                background: `url(${this.dubbleData.adsense[0].url}) 0% 0% / 100% 100%`
              };
            } else if ((type = "twoPointer")) {
              this.active = "two";
              if (this.animateCss == "" || this.animateCss.indexOf("Out") > 0) {
                this.setMotuMonitor(this.dubbleData.adsense[1].pvCode);
              }
  
              this.headerBackground = {
                background: `url(${this.dubbleData.adsense[1].logo_img_src}) 0% 0% / 100% 100%`
              };
              this.bodyTopBackground = {
                background: `url(${this.dubbleData.adsense[1].url}) 0% 0% / 100% 100%`
              };
            }
  
            clearTimeout(this.closeTimer);
            clearTimeout(this.hiddenBodyTimer);
  
            if (this.show_position == "right-left") {
              this.animateCss = "bounceInRight";
            } else if (this.show_position == "right-right") {
              this.animateCss = "bounceInLeft";
            } else if (this.show_position == "left-right") {
              this.animateCss = "bounceInLeft";
            } else if (this.show_position == "left-left") {
              this.animateCss = "bounceInRight";
            }
  
            this.showBody = true;
  
            this.headerClosePosition = {
              "background-position": "100% 0%"
            };
          },
  
          handleMouseleave(e) {
            this.closeTimer = setTimeout(() => {
              clearTimeout(this.closeTimer);
              clearTimeout(this.hiddenBodyTimer);
  
              if (this.show_position == "right-left") {
                this.animateCss = "bounceOutRight";
              } else if (this.show_position == "right-right") {
                this.animateCss = "bounceOutLeft";
              } else if (this.show_position == "left-right") {
                this.animateCss = "bounceOutLeft";
              } else if (this.show_position == "left-left") {
                this.animateCss = "bounceOutRight";
              }
  
              this.headerClosePosition = {
                "background-position": "0% 0%"
              };
  
              this.hiddenBodyTimer = setTimeout(() => {
                this.showBody = false;
              }, 1000);
            }, mtData.timeLength * 1000 || 5000);
          },
  
          getCityData(url) {
            return new Promise((resovle, reject) => {
              $.ajax({
                type: "get",
                url: url,
                dataType: "jsonp",
                jsonpCallback: "showData",
                async: false,
                global: false,
                cache: true,
                success: function(data) {
                  resovle(data);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                  reject(textStatus);
                  console.log("请求失败！");
                }
              });
            });
          },
          handleChangeProvince() {
            this.mhOneData.cityArr = [];
            this.mhOneData.cityValue = "";
            this.mhOneData.hometownArr = [];
            this.mhOneData.hometownValue = "";
  
            for (let i in this.mhOneData.geoStores[this.mhOneData.provinceValue]) {
              this.mhOneData.cityArr.push(i);
            }
          },
  
          handleChangeProvince2() {
            this.mhTwoData.cityArr = [];
            this.mhTwoData.cityValue = "";
            this.mhTwoData.hometownArr = [];
            this.mhTwoData.hometownValue = "";
  
            for (let i in this.mhTwoData.geoStores[this.mhTwoData.provinceValue]) {
              this.mhTwoData.cityArr.push(i);
            }
          },
  
          handleChangeCity() {
            this.mhOneData.hometownArr = [];
            this.mhOneData.hometownValue = "";
  
            let obj = this.mhOneData.geoStores[this.mhOneData.provinceValue][this.mhOneData.cityValue];
  
            for (let i of obj) {
              this.mhOneData.hometownArr.push(i);
            }
          },
          handleChangeCity2() {
            this.mhTwoData.hometownArr = [];
            this.mhTwoData.hometownValue = "";
  
            let obj = this.mhTwoData.geoStores[this.mhTwoData.provinceValue][this.mhTwoData.cityValue];
  
            for (let i of obj) {
              this.mhTwoData.hometownArr.push(i);
            }
          },
  
          setMotuMonitor(urls, type) {
            console.log("urls", urls);
  
            let urlArr = urls.split(",");
            for (let i = 0; i < urlArr.length; i++) {
              $(".motu_monitor").append('<img src="' + urlArr[i] + '"  width="1" height="1" alt="" />');
            }
            if (type == "close") {
              this.showMain = false;
            }
          },
  
          //验证频率，是否在n小时内，展示了不超过m次
          validateFrequence() {
            let date = +this.dubbleData.frequency.split(",")[0]; //时间
            let times = +this.dubbleData.frequency.split(",")[1]; //次数
            //表示在 一定的时间内，最多展示 相应 的次数
  
            if (this.frequencyTime.length < times) {
              this.frequencyTime.push(new Date());
  
              localStorage.setItem("frequencyTime", JSON.stringify(this.frequencyTime));
              return true;
            } else {
              //当前时间和最早时间的差值
              let timeDelay = (new Date() - new Date(this.frequencyTime[0])) / (1000 * 60 * 60);
              //整体向前平移，更新时间数组
              this.frequencyTime.shift(); //将第一个移除
              this.frequencyTime.push(new Date());
  
              localStorage.setItem("frequencyTime", JSON.stringify(this.frequencyTime));
              if (timeDelay < date) {
                return false;
              } else {
                return true;
              }
            }
          },
  
          validateForm() {
            if (this.active == "one") {
              return new Promise((resolved, reject) => {
                if (!this.mhOneData.checked) {
                  reject();
                  return;
                }
  
                let allValidate = true;
                if (this.mhOneData.provinceValue == "") {
                  this.mhOneData.rules.province.validate = false;
                  allValidate = false;
                } else {
                  this.mhOneData.rules.province.validate = true;
                }
  
                if (this.mhOneData.cityValue == "") {
                  this.mhOneData.rules.city.validate = false;
                  allValidate = false;
                } else {
                  this.mhOneData.rules.city.validate = true;
                }
  
                if (this.mhOneData.hometownValue == "") {
                  this.mhOneData.rules.hometown.validate = false;
                  allValidate = false;
                } else {
                  this.mhOneData.rules.hometown.validate = true;
                }
  
                if (this.mhOneData.nameValue == "") {
                  this.mhOneData.rules.name.validate = false;
                  allValidate = false;
                } else {
                  this.mhOneData.rules.name.validate = true;
                }
  
                let phoneReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
                if (!this.mhOneData.phoneValue) {
                  this.mhOneData.rules.phone.validate = false;
                  this.mhOneData.rules.phone.message = "请输入手机号";
                  allValidate = false;
                } else if (this.mhOneData.phoneValue && phoneReg.test(this.mhOneData.phoneValue)) {
                  console.log("手机号通过校验");
                  this.mhOneData.rules.phone.validate = true;
                } else {
                  this.mhOneData.rules.phone.validate = false;
                  this.mhOneData.rules.phone.message = "请正确填写格式";
                  allValidate = false;
                }
  
                if (allValidate == true) {
                  resolved();
                } else {
                  reject();
                }
              });
            } else {
              return new Promise((resolved, reject) => {
                if (!this.mhTwoData.checked) {
                  reject();
                  return;
                }
  
                let allValidate = true;
                if (this.mhTwoData.provinceValue == "") {
                  this.mhTwoData.rules.province.validate = false;
                  allValidate = false;
                } else {
                  this.mhTwoData.rules.province.validate = true;
                }
  
                if (this.mhTwoData.cityValue == "") {
                  this.mhTwoData.rules.city.validate = false;
                  allValidate = false;
                } else {
                  this.mhTwoData.rules.city.validate = true;
                }
  
                if (this.mhTwoData.hometownValue == "") {
                  this.mhTwoData.rules.hometown.validate = false;
                  allValidate = false;
                } else {
                  this.mhTwoData.rules.hometown.validate = true;
                }
  
                if (this.mhTwoData.nameValue == "") {
                  this.mhTwoData.rules.name.validate = false;
                  allValidate = false;
                } else {
                  this.mhTwoData.rules.name.validate = true;
                }
  
                let phoneReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
                if (!this.mhTwoData.phoneValue) {
                  this.mhTwoData.rules.phone.validate = false;
                  this.mhTwoData.rules.phone.message = "请输入手机号";
                  allValidate = false;
                } else if (this.mhTwoData.phoneValue && phoneReg.test(this.mhTwoData.phoneValue)) {
                  console.log("手机号通过校验");
                  this.mhTwoData.rules.phone.validate = true;
                } else {
                  this.mhTwoData.rules.phone.validate = false;
                  this.mhTwoData.rules.phone.message = "请正确填写格式";
                  allValidate = false;
                }
  
                if (allValidate == true) {
                  resolved();
                } else {
                  reject();
                }
              });
            }
          },
          gotoRegister() {
            this.validateForm().then(() => {
              let params = {};
              if (this.active == "one") {
                params = {
                  info:
                    '{"province":"' +
                    this.mhOneData.provinceValue +
                    '","city":"' +
                    this.mhOneData.cityValue +
                    '","shop":"' +
                    this.mhOneData.hometownValue +
                    '","name":"' +
                    this.mhOneData.nameValue +
                    '","phone":"' +
                    this.mhOneData.phoneValue +
                    '"}',
                  customerId: this.dubbleData.customerId,
                  ext: this.dubbleData.adsense[0].ext,
                  mediaId: this.dubbleData.mediaId,
                  planId: this.dubbleData.planId,
                  creativeId: this.dubbleData.creativeId,
                  zoneId: this.dubbleData.zoneId,
                  positionId: this.dubbleData.adsense[0].positionId
                };
              } else {
                params = {
                  info:
                    '{"province":"' +
                    this.mhTwoData.provinceValue +
                    '","city":"' +
                    this.mhTwoData.cityValue +
                    '","shop":"' +
                    this.mhTwoData.hometownValue +
                    '","name":"' +
                    this.mhTwoData.nameValue +
                    '","phone":"' +
                    this.mhTwoData.phoneValue +
                    '"}',
                  customerId: this.dubbleData.customerId,
                  ext: this.dubbleData.adsense[1].ext,
                  mediaId: this.dubbleData.mediaId,
                  planId: this.dubbleData.planId,
                  creativeId: this.dubbleData.creativeId,
                  zoneId: this.dubbleData.zoneId,
                  positionId: this.dubbleData.adsense[1].positionId
                };
              }
  
              // $.ajax({
              //   type: "post",
              //   url: this.dubbleData.formSubmitUrl,
              //   contentType: "application/json",
              //   data: JSON.stringify(params),
              //   async: false,
              //   dataType: "json",
              //   success: data => {
              //     if (data.status_code == 200) {
                    if (this.active == "one") {
                      this.mhOneData.registerSuccess = true;
                      this.setMotuMonitor(this.dubbleData.adsense[0].form_svCode);
                    } else {
                      this.mhTwoData.registerSuccess = true;
                      this.setMotuMonitor(this.dubbleData.adsense[1].form_svCode);
                    }
              //     } else if (data.status_code == 300) {
              //       if (this.active == "one") {
              //         this.mhOneData.rules.phone.validate = false;
              //         this.mhOneData.rules.phone.message = "号码已经注册过";
              //       } else {
              //         this.mhTwoData.rules.phone.validate = false;
              //         this.mhTwoData.rules.phone.message = "号码已经注册过";
              //       }
              //     } else {
              //       // console.log("请求数据为空！");
              //     }
              //   },
              //   error: function(XMLHttpRequest, textStatus, errorThrown) {
              //     console.log("请求失败！");
              //   }
              // });
            });
          }
        },
  
        async mounted() {
          if (localStorage.getItem("frequencyTime")) {
            this.frequencyTime = JSON.parse(localStorage.getItem("frequencyTime"));
          }
  
          this.init();
  
          if (this.validateFrequence()) {
            console.log("频鹿合格...");
            this.handleMouseenter(this.activeLabel == "one" ? "onePointer" : "twoPointer");
            this.handleMouseleave();
          }
  
          //触发方式包含原图时 给first img绑定事件
          if (this.dubbleData.trigger_Position == "2" || this.dubbleData.trigger_Position == "3") {
            imageDom.hover(
              () => {
                this.handleMouseenter(this.activeLabel == "one" ? "onePointer" : "twoPointer");
              },
              () => {
                this.handleMouseleave();
              }
            );
          }
  
          // await this.getCityData(this.dubbleData.adsense[0].fromUrl).then(data => {
          let data = formData;
          this.mhOneData.register_title = data.rows[0].title;
          this.mhOneData.province_title = data.rows[1].title;
          this.mhOneData.city_tile = data.rows[2].title;
          this.mhOneData.hometown_title = data.rows[3].title;
          this.mhOneData.name_title = data.rows[4].title;
          this.mhOneData.phone_title = data.rows[5].title;
          this.mhOneData.geoStores = data.geoStores;
  
          //收集 省份
          for (let i in data.geoStores) {
            this.mhOneData.provinceArr.push(i);
          }
          // });
  
          // await this.getCityData(this.dubbleData.adsense[1].fromUrl).then(data => {
          this.mhTwoData.register_title = data.rows[0].title;
          this.mhTwoData.province_title = data.rows[1].title;
          this.mhTwoData.city_tile = data.rows[2].title;
          this.mhTwoData.hometown_title = data.rows[3].title;
          this.mhTwoData.name_title = data.rows[4].title;
          this.mhTwoData.phone_title = data.rows[5].title;
          this.mhTwoData.geoStores = data.geoStores;
  
          //收集 省份
          for (let i in data.geoStores) {
            this.mhTwoData.provinceArr.push(i);
          }
          // });
        }
      });
    }
  
    // //
    $(".motu-type")
      .find('option[value="1"]')
      .attr("selected", true);
    $(".kakari_Position")
      .find('option[value="2"]')
      .attr("selected", true);
    $(".float_Position")
      .find('option[value="1"]')
      .attr("selected", true);
  
    $(".motu-type").on("click", function() {
      let value = $(".motu-type option:selected").val();
      if (value == 4 || value == 5) {
        $(".kakari_Position")
          .closest("div")
          .css({ display: "none" });
        $(".float_Position")
          .closest("div")
          .css({ display: "none" });
      } else {
        $(".kakari_Position")
          .closest("div")
          .css({ display: "block" });
        $(".float_Position")
          .closest("div")
          .css({ display: "block" });
      }
    });
  
    $(".trigger-button").on("click", function() {
      //重置 start
      //每次start后都会向head中增加 css，所以此处先删除以前旧的，再加新的
      let shengxia = $($("head")[0].childNodes).slice(15);
      shengxia.each(function(a, b) {
        $(b).remove();
      });
  
      //先清空旧的
      $(".mt-main").remove();
      $(".motu_monitor").remove();
  
      //解除之前绑定的事件
      imageDom && imageDom.off("mouseenter");
      imageDom && imageDom.off("mouseleave");
      //重置 end
  
      let motuType = $(".motu-type option:selected").val();
      defaultSetting.motu_type = motuType;
  
      defaultSetting.kakari_Position = $(".kakari_Position:checked").val();
      defaultSetting.float_Position = $(".float_Position:checked").val();
      defaultSetting.timeLength = $(".timeLength").val();
      defaultSetting.trigger_Position = $(".trigger_Position:checked").val();
  
      if (motuType == 1) {
        defaultSetting.css = ["index_files/css/Zw/JhsingleCss.css"];
      }
      if (motuType == 2) {
        defaultSetting.css = ["index_files/css/Zw/JhdubbleCss.css"];
      }
      if (motuType == 3) {
        defaultSetting.css = ["index_files/css/Zw/ZssingleCss.css"];
      }
      if (motuType == 4) {
        defaultSetting.css = ["index_files/css/Zw/JhlongCss.css"];
      }
      if (motuType == 5) {
        defaultSetting.css = ["index_files/css/Zw/JhshortCss.css"];
      }
  
      console.log("321312");
      start();
    });
  })(window);
  