(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),u=a(20),o=a.n(u),c=(a(66),a(10)),d=a(12),i=a(15),s=a(13),l=a(14),p=a(117),f=a(118),b=(a(68),a(111)),m=a(112),g=a(113),I=a(116),v=a(114),h=a(21),y=a.n(h),G="https://api-dev.tesco.com/product/v4/products/gtin?productNumber=",E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={apiCallStarted:!1},a.fetchResults=function(){var e=a.props.queue.dequeue();e&&fetch(G+e+"&countryCode=IE?access_token="+a.props.authToken,{method:"GET",credentials:"include",mode:"cors",headers:{Accept:"application/json","Access-Control-Allow-Origin":"*",Authorization:"Bearer "+a.props.authToken}}).then(function(e){return JSON.parse(e)}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},a._onDetected=function(e){a.props.queue.enqueue(e.codeResult.code),a.state.apiCallStarted||a.setState({apiCallStarted:!0},a.fetchResults)},a}return Object(l.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"interactive",className:"viewport"})}},{key:"componentDidMount",value:function(){y.a.init({inputStream:{type:"LiveStream",constraints:{width:640,height:480,facingMode:"environment"}},locator:{patchSize:"medium",halfSample:!0},numOfWorkers:0,decoder:{readers:["code_128_reader","ean_reader","ean_8_reader","code_39_reader","code_39_vin_reader","codabar_reader","upc_reader","upc_e_reader","i2of5_reader"]},locate:!0},function(e){e?console.log(e):(console.log("Initialization finished. Ready to start"),y.a.start())}),y.a.onDetected(this._onDetected)}},{key:"componentWillUnmount",value:function(){y.a.offDetected(this._onDetected)}}]),t}(r.Component),S=a(28),k=a(55),C=a(110),w=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(d.a)(t,[{key:"showProduct",value:function(e){var t=this;return void 0==e||null==e?null:Array.isArray(e)?e.map(function(e,a){return t.showProduct(e)}):"object"==Object(S.a)(e)?Object.keys(e).map(function(a,u){return n.a.createElement(r.Fragment,null,n.a.createElement(k.a,{key:u,bsStyle:"info"},a),t.showProduct(e[a]))}):"string"==typeof e||"number"==typeof e?n.a.createElement(k.a,null,e):"boolean"==typeof e?n.a.createElement(k.a,null,e?"True":"False"):void 0}},{key:"render",value:function(){var e=this.props.result;return e?n.a.createElement(C.a,null,this.showProduct(e)):null}}]),t}(r.Component),O={products:[{productId:"trn:tesco:product:uuid:30aada1f-9a2a-4db7-8652-cb646c7270ee",catalogue:{uuid:"trn:tesco:hierarchynode:uuid:acc22390-ba7e-11e8-b78f-fd312e4fb0d8",name:"Beer",number:10000159},commercialHierarchy:[],tempVariants:[],productIdentifiers:{tpna:"000003149",tpnb:"000004950",tpnc:"000002314",gtin:"5057373352842",catId:null,baseId:"trn:tesco:product:base:uuid:5e155f67-4af0-4665-a7fd-6f06489dbd14",tempVariantId:null},gtins:[],productAttributes:[{attrGroup:"tradeItemInfo",attrGroupId:"trn:tesco:attrgroup:uuid:4f17cc20-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"brand",value:"TESCO"},{name:"isSellable",value:!0},{name:"isOrderable",value:!0},{name:"sellByType",value:"Item"}]},{attrGroup:"priceMarkInfo",attrGroupId:"trn:tesco:attrgroup:uuid:b1346570-c6ed-11e8-8729-8d30f61b2420",attributes:[{name:"isPriceOnPack",value:!0}]},{attrGroup:"episelDescription",attrGroupId:"trn:tesco:attrgroup:uuid:4f249d60-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"episelDesc1",value:"EPISEL 1 Description"},{name:"episelDesc2",value:"EPISEL 2 Description"},{name:"episelDesc3",value:"EPISEL 3 Description"},{name:"episelDesc4",value:"EPISEL 4 Description"},{name:"episelDesc5",value:"EPISEL 5 Description"}]},{attributes:[{name:"description",valueMap:{en:"Wolf Warning Swedish Lager 330ml Can"}}],attrGroup:"baseProductDescription",attrGroupId:"trn:tesco:attrgroup:uuid:4f19c7f0-ba80-11e8-b78f-fd312e4fb0d8"},{attrGroup:"netProductContent",attrGroupId:"trn:tesco:attrgroup:uuid:4f1ea9f0-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"netContent",value:330},{name:"netContentUom",value:"ML"}]},{attrGroup:"productPackaging",attrGroupId:"trn:tesco:attrgroup:uuid:4f207eb0-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"packagingType",value:"Can"}]},{attrGroup:"productCare",attrGroupId:"trn:tesco:attrgroup:uuid:4f21b730-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"minLifeDepotDays",value:120},{name:"shelfLifeDays",value:90}]},{attrGroup:"tradeTariff",attrGroupId:"trn:tesco:attrgroup:uuid:4f32f540-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"commodityCode",value:"2203000900"}]},{attrGroup:"generalAlcohol",attrGroupId:"trn:tesco:attrgroup:uuid:4f25fcf0-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"exciseProductCode",value:"22"},{name:"taxTypeCode",value:"473"},{name:"alcoholVolumePercent",value:6}]},{attrGroup:"salesTaxInfo",attrGroupId:"trn:tesco:attrgroup:uuid:4f2dec30-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"countryCode",value:"IE"},{name:"vatCategory",value:"Reduced Rate"}]},{attrGroup:"targetMarkets",attrGroupId:"trn:tesco:attrgroup:uuid:4f1d7170-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"countryCode",value:"IE"}]}],gtinInfo:{gtin:"5057373352842",gtinType:"gtin13",gtinScanned:!1},versionId:"61kpq6aqfmlyajsiq9gzwhafym",workflowStatus:{workflowStatus:"Incomplete"}},{productId:"trn:tesco:product:uuid:9190b5ba-d196-45e3-98f0-612c1c3c8cfa",catalogue:{uuid:"trn:tesco:hierarchynode:uuid:acc22390-ba7e-11e8-b78f-fd312e4fb0d8",name:"Beer",number:10000159},commercialHierarchy:[],tempVariants:[],productIdentifiers:{tpna:"416718648",tpnb:"000002342",tpnc:"000004265",gtin:"0000000001781",catId:null,baseId:"trn:tesco:product:base:uuid:ad46d6ac-768e-4e56-9e48-3cd33b2c03c2",tempVariantId:null},gtins:[],productAttributes:[{attrGroup:"tradeItemInfo",attrGroupId:"trn:tesco:attrgroup:uuid:4f17cc20-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"brand",value:"TESCO"},{name:"isSellable",value:!0},{name:"isOrderable",value:!0},{name:"sellByType",value:"Item"}]},{attrGroup:"priceMarkInfo",attrGroupId:"trn:tesco:attrgroup:uuid:b1346570-c6ed-11e8-8729-8d30f61b2420",attributes:[{name:"isPriceOnPack",value:!1}]},{attrGroup:"episelDescription",attrGroupId:"trn:tesco:attrgroup:uuid:4f249d60-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"episelDesc1",value:"EPISEL 1 Description"},{name:"episelDesc2",value:"EPISEL 2 Description"},{name:"episelDesc3",value:"EPISEL 3 Description"},{name:"episelDesc4",value:"EPISEL 4 Description"},{name:"episelDesc5",value:"EPISEL 5 Description"}]},{attributes:[{name:"description",valueMap:{en:"Wolf Warning Swedish Lager 330ml Can"}}],attrGroup:"baseProductDescription",attrGroupId:"trn:tesco:attrgroup:uuid:4f19c7f0-ba80-11e8-b78f-fd312e4fb0d8"},{attrGroup:"netProductContent",attrGroupId:"trn:tesco:attrgroup:uuid:4f1ea9f0-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"netContent",value:330},{name:"netContentUom",value:"ML"}]},{attrGroup:"productPackaging",attrGroupId:"trn:tesco:attrgroup:uuid:4f207eb0-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"packagingType",value:"Can"}]},{attrGroup:"productCare",attrGroupId:"trn:tesco:attrgroup:uuid:4f21b730-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"minLifeDepotDays",value:120},{name:"shelfLifeDays",value:90}]},{attrGroup:"tradeTariff",attrGroupId:"trn:tesco:attrgroup:uuid:4f32f540-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"commodityCode",value:"2203000900"}]},{attrGroup:"generalAlcohol",attrGroupId:"trn:tesco:attrgroup:uuid:4f25fcf0-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"exciseProductCode",value:"22"},{name:"taxTypeCode",value:"473"},{name:"alcoholVolumePercent",value:6}]},{attrGroup:"salesTaxInfo",attrGroupId:"trn:tesco:attrgroup:uuid:4f2dec30-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"countryCode",value:"IE"},{name:"vatCategory",value:"Reduced Rate"}]},{attrGroup:"targetMarkets",attrGroupId:"trn:tesco:attrgroup:uuid:4f1d7170-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"countryCode",value:"IE"}]}],gtinInfo:{gtin:"0000000001781",gtinType:"gtin13",gtinScanned:!1},versionId:"9bgzhild0wgxhl7czpv7g0v1gp",workflowStatus:{workflowStatus:"Incomplete"}},{productId:"trn:tesco:product:uuid:25b2935c-beac-4e74-b4b1-da901e9748e4",catalogue:{uuid:"trn:tesco:hierarchynode:uuid:afe97b40-ba7e-11e8-b78f-fd312e4fb0d8",name:"Meat Substitutes (Shelf Stable)",number:10005825},commercialHierarchy:[{uuid:"trn:tesco:hierarchynode:uuid:f7103400-ba7e-11e8-b78f-fd312e4fb0d8",country:"IE"}],tempVariants:[],productIdentifiers:{tpna:"416719618",tpnb:"000003140",tpnc:"300167205",gtin:"5012345896786",catId:null,baseId:"trn:tesco:product:base:uuid:c3e3592c-0e18-4aeb-953f-13ad1ea2af75",tempVariantId:null},gtins:[],productAttributes:[{attrGroup:"priceInfo",attrGroupId:"trn:tesco:attrgroup:uuid:4f2cb3b0-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"countryCode",value:"IE"},{name:"suggestedRetailPrice",value:12},{name:"priceCurrency",value:"EUR"}]},{attrGroup:"salesTaxInfo",attrGroupId:"trn:tesco:attrgroup:uuid:4f2dec30-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"countryCode",value:"IE"},{name:"vatCategory",value:"Standard Rate - ROI"}]},{attrGroup:"tradeItemInfo",attrGroupId:"trn:tesco:attrgroup:uuid:4f17cc20-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"brand",value:"AAK"},{name:"isSellable",value:!0},{name:"isOrderable",value:!0},{name:"sellByType",value:"Item"}]},{attributes:[{name:"description",valueMap:{en:"Test branded tempvariant1"}}],attrGroup:"baseProductDescription",attrGroupId:"trn:tesco:attrgroup:uuid:4f19c7f0-ba80-11e8-b78f-fd312e4fb0d8"},{attrGroup:"productOrigin",attrGroupId:"trn:tesco:attrgroup:uuid:4f233dd0-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"countryOfOriginName",value:"Ireland"}]},{attrGroup:"productPackaging",attrGroupId:"trn:tesco:attrgroup:uuid:4f207eb0-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"packagingType",value:"Bag"}]},{attrGroup:"netProductContent",attrGroupId:"trn:tesco:attrgroup:uuid:4f1ea9f0-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"netContent",value:12},{name:"netContentUom",value:"CL"},{name:"drainedWeight",value:12}]},{attrGroup:"productDimensions",attrGroupId:"trn:tesco:attrgroup:uuid:4f2f24b0-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"dimensionsUom",value:"CM"},{name:"weightUom",value:"KG"}]},{attrGroup:"targetMarkets",attrGroupId:"trn:tesco:attrgroup:uuid:4f1d7170-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"countryCode",value:"IE"}]},{attrGroup:"lifecycleInfo",attrGroupId:"trn:tesco:attrgroup:uuid:4f1449b0-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"countryCode",value:"IE"},{name:"targetLaunchWeek",value:"2019WK01 "},{name:"targetLaunchDate",value:"24/02/2019"}]},{attrGroup:"priceMarkInfo",attrGroupId:"trn:tesco:attrgroup:uuid:b1346570-c6ed-11e8-8729-8d30f61b2420",attributes:[{name:"isPriceOnPack",value:!1},{name:"isPriceOnPackException",value:!1}]},{attributes:[{name:"selDesc1",valueMap:{en:"Wolf Warning"}},{name:"selDesc2",valueMap:{en:"Swedish Lager"}},{name:"selDesc3",valueMap:{en:"330ml Can"}},{name:"tillRollDesc",valueMap:{en:"Lager"}}],attrGroup:"productDescriptions",attrGroupId:"trn:tesco:attrgroup:uuid:4f275c80-ba80-11e8-b78f-fd312e4fb0d8"},{attrGroup:"productCare",attrGroupId:"trn:tesco:attrgroup:uuid:4f21b730-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"minLifeDepotDays",value:120},{name:"shelfLifeDays",value:90}]}],gtinInfo:{gtin:"5012345896786",gtinType:"gtin13",gtinScanned:!0},versionId:"lnodmjqulbws64wtou8qufrvll",workflowStatus:{workflowStatus:"Incomplete"}},{productId:"trn:tesco:product:uuid:75d83a18-6089-4a36-8c66-1dab80ee3f87",catalogue:{uuid:"trn:tesco:hierarchynode:uuid:ac7a6c30-ba7e-11e8-b78f-fd312e4fb0d8",name:"Air Fresheners/Deodorisers (Non Powered)",number:10000402},commercialHierarchy:[],tempVariants:[],productIdentifiers:{tpna:"000002063",tpnb:"083664012",tpnc:"000000207",gtin:"5057373347800",catId:null,baseId:"trn:tesco:product:base:uuid:8c4df08c-490c-40c0-bfee-4c867735a2e6",tempVariantId:null},gtins:[],productAttributes:[{attrGroup:"priceInfo",attrGroupId:"trn:tesco:attrgroup:uuid:4f2cb3b0-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"countryCode",value:"IE"},{name:"priceCurrency",value:"EUR"}]},{attrGroup:"tradeItemInfo",attrGroupId:"trn:tesco:attrgroup:uuid:4f17cc20-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"brand",value:"TESCO"},{name:"isSellable",value:!0},{name:"isOrderable",value:!0},{name:"sellByType",value:"Item"}]},{attributes:[{name:"description",valueMap:{en:"Perf Basedesc"}}],attrGroup:"baseProductDescription",attrGroupId:"trn:tesco:attrgroup:uuid:4f19c7f0-ba80-11e8-b78f-fd312e4fb0d8"},{attrGroup:"targetMarkets",attrGroupId:"trn:tesco:attrgroup:uuid:4f1d7170-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"countryCode",value:"IE"}]},{attrGroup:"priceMarkInfo",attrGroupId:"trn:tesco:attrgroup:uuid:b1346570-c6ed-11e8-8729-8d30f61b2420",attributes:[{name:"isPriceOnPack",value:!1}]}],gtinInfo:{gtin:"5057373347800",gtinType:"gtin13",gtinScanned:!1},versionId:"hatdjyi44dgs6gyke3qeaas5u0",workflowStatus:{workflowStatus:"Incomplete"}},{productId:"trn:tesco:product:uuid:993e30a0-7efb-4576-8135-2f7a84e9b115",catalogue:{uuid:"trn:tesco:hierarchynode:uuid:ac7a6c30-ba7e-11e8-b78f-fd312e4fb0d8",name:"Air Fresheners/Deodorisers (Non Powered)",number:10000402},commercialHierarchy:[],tempVariants:[],productIdentifiers:{tpna:"000001200",tpnb:"083707743",tpnc:"000001466",gtin:"0000000004119",catId:null,baseId:"trn:tesco:product:base:uuid:167f2e45-83db-4f50-bb06-5871f3864d4c",tempVariantId:null},gtins:[],productAttributes:[{attrGroup:"priceInfo",attrGroupId:"trn:tesco:attrgroup:uuid:4f2cb3b0-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"countryCode",value:"IE"},{name:"priceCurrency",value:"EUR"}]},{attrGroup:"tradeItemInfo",attrGroupId:"trn:tesco:attrgroup:uuid:4f17cc20-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"brand",value:"TESCO"},{name:"isSellable",value:!0},{name:"isOrderable",value:!0},{name:"sellByType",value:"Item"}]},{attributes:[{name:"description",valueMap:{en:"Perf Basedesc"}}],attrGroup:"baseProductDescription",attrGroupId:"trn:tesco:attrgroup:uuid:4f19c7f0-ba80-11e8-b78f-fd312e4fb0d8"},{attrGroup:"targetMarkets",attrGroupId:"trn:tesco:attrgroup:uuid:4f1d7170-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"countryCode",value:"IE"}]},{attrGroup:"priceMarkInfo",attrGroupId:"trn:tesco:attrgroup:uuid:b1346570-c6ed-11e8-8729-8d30f61b2420",attributes:[{name:"isPriceOnPack",value:!1}]}],gtinInfo:{gtin:"0000000004119",gtinType:"gtin13",gtinScanned:!1},versionId:"5qga86k95bimw1od9flrb3gnuc",workflowStatus:{workflowStatus:"Incomplete"}},{productId:"trn:tesco:product:uuid:9b6a2fb2-1c95-4834-8c1b-ba1a964a6da3",catalogue:{uuid:"trn:tesco:hierarchynode:uuid:ac7a6c30-ba7e-11e8-b78f-fd312e4fb0d8",name:"Air Fresheners/Deodorisers (Non Powered)",number:10000402},commercialHierarchy:[],tempVariants:[],productIdentifiers:{tpna:"000003458",tpnb:"083688833",tpnc:"300099487",gtin:"04351494381141",catId:null,baseId:"trn:tesco:product:base:uuid:d95ea76e-820d-4bd7-9473-a585ced4fc9b",tempVariantId:null},gtins:[],productAttributes:[{attrGroup:"priceInfo",attrGroupId:"trn:tesco:attrgroup:uuid:4f2cb3b0-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"countryCode",value:"IE"},{name:"priceCurrency",value:"EUR"}]},{attrGroup:"tradeItemInfo",attrGroupId:"trn:tesco:attrgroup:uuid:4f17cc20-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"brand",value:"TESCO"},{name:"isSellable",value:!0},{name:"isOrderable",value:!0},{name:"sellByType",value:"Item"}]},{attributes:[{name:"description",valueMap:{en:"Perf Basedesc"}}],attrGroup:"baseProductDescription",attrGroupId:"trn:tesco:attrgroup:uuid:4f19c7f0-ba80-11e8-b78f-fd312e4fb0d8"},{attrGroup:"targetMarkets",attrGroupId:"trn:tesco:attrgroup:uuid:4f1d7170-ba80-11e8-b78f-fd312e4fb0d8",attributes:[{name:"countryCode",value:"IE"}]},{attrGroup:"priceMarkInfo",attrGroupId:"trn:tesco:attrgroup:uuid:b1346570-c6ed-11e8-8729-8d30f61b2420",attributes:[{name:"isPriceOnPack",value:!1}]}],gtinInfo:{gtin:"04351494381141",gtinType:"gtin13",gtinScanned:!1},versionId:"4nu185c6b9psqwsvubv71ouwmh",workflowStatus:{workflowStatus:"Incomplete"}}]},D=function e(){var t=this;Object(c.a)(this,e),this.enqueue=function(e){t.hash.hasOwnProperty(e)||(t.queue.push(e),t.hash[e]=!0)},this.dequeue=function(){return t.head!==t.queue.length&&(t.head++,t.queue[t.head-1])},this.queue=[],this.hash={},this.head=0},P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={scanning:!1,result:null,queue:new D,authToken:""},a._searchProduct=function(e){for(var t=0;t<O.products.length;t++)O.products[t].productIdentifiers.gtin===e&&(a.history.push(O.products[t].productId),localStorage.setItem("history",JSON.stringify(a.history)),a.setState({result:O.products[t],scanning:!1}))},a.setResult=function(e){a.setState({result:e})},a._scan=function(){a.setState({scanning:!a.state.scanning,queue:new D})},a._onDetected=function(e){console.log(e.codeResult.code,e.codeResult.format)},a.history=JSON.parse(localStorage.getItem("history"))||[],a}return Object(l.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(b.a,{style:{marginTop:10}},n.a.createElement(m.a,null,n.a.createElement(g.a,{sm:12,md:4,mdOffset:4},n.a.createElement(I.a,{type:"text",value:this.state.authToken,placeholder:"Access Token",onChange:function(t){e.setState({authToken:t.target.value})}}))),n.a.createElement(m.a,null,n.a.createElement(g.a,{sm:12,md:4,mdOffset:4},n.a.createElement(v.a,{onClick:this._scan,block:!0},this.state.scanning?"Stop":"Start"))),n.a.createElement(m.a,null,n.a.createElement(g.a,{sm:12,md:6,mdOffset:3},this.state.scanning?n.a.createElement(E,{onDetected:this._onDetected,queue:this.state.queue,setResult:this.setResult,authToken:this.state.authToken}):null,this.state.result&&!this.state.scanning?n.a.createElement(w,{result:this.state.result}):null)))}}]),t}(r.Component),T=a(115),j=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement(r.Fragment,null,n.a.createElement(T.a,null,"Recently Scanned ProductIds"),n.a.createElement(C.a,null,localStorage.getItem("history")?JSON.parse(localStorage.getItem("history")).map(function(e,t){return n.a.createElement(k.a,{key:t},e)}):n.a.createElement(k.a,null,"No Products Scanned")))}}]),t}(r.Component),M=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement(p.a,{defaultActiveKey:0,id:"scan-tab",style:{marginTop:10}},n.a.createElement(f.a,{eventKey:0,title:"Scan"},n.a.createElement(P,null)),n.a.createElement(f.a,{eventKey:1,title:"History"},n.a.createElement(j,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},61:function(e,t,a){e.exports=a(108)},66:function(e,t,a){},68:function(e,t,a){}},[[61,2,1]]]);
//# sourceMappingURL=main.519effb5.chunk.js.map