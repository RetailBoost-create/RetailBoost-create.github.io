/* ═══════════════════════════════════════════════════════════════
   RETAILBOOST PRODUCT CATALOGUE + STOCK  (used by mobiles.html, cart.html, admin.html)
   All products, prices, ratings and stock below are SAMPLE data.

   PUBLIC FILE: anyone can open it in a browser.
   NEVER put cost / purchase prices or anything private here.

   id    = product id (keep it the same once used: saved carts refer to it)
   cat   = category        b = brand key (see BRANDS)
   n     = name            s = specs        p = price        o = old price (MRP)
   r     = rating          c = review count (used for Popularity)
   v     = variants (one per colour): sku, col = colour, stock = units available to sell
   ═══════════════════════════════════════════════════════════════ */
var CATALOG_VERSION='2026-10-01-sample';
var LOW_STOCK=3;   /* 1..LOW_STOCK units left = "Only X left" in the shop */

var BRANDS=[['samsung','Samsung'],['vivo','vivo'],['iqoo','iQOO'],['pixel','Google Pixel'],['apple','Apple'],['poco','POCO'],['redmi','Redmi'],['realme','realme'],['motorola','Motorola'],['oneplus','OnePlus'],['nothing','Nothing'],['aiplus','AI+']];

var PRODUCTS=[
{id:'m1',cat:'mobiles',b:'samsung',n:'Samsung Galaxy A Series 5G',s:'8GB + 128GB',p:18999,o:21999,r:4.4,c:3200,v:[{sku:'m1-black',col:'Black',stock:5},{sku:'m1-blue',col:'Blue',stock:3}]},
{id:'m2',cat:'mobiles',b:'samsung',n:'Samsung Galaxy M Series 5G',s:'6GB + 128GB',p:13499,o:15999,r:4.3,c:2100,v:[{sku:'m2-green',col:'Green',stock:4},{sku:'m2-silver',col:'Silver',stock:2}]},
{id:'m3',cat:'mobiles',b:'vivo',n:'vivo T Series 5G',s:'8GB + 128GB',p:19999,o:22999,r:4.5,c:2800,v:[{sku:'m3-blue',col:'Blue',stock:6},{sku:'m3-black',col:'Black',stock:0}]},
{id:'m4',cat:'mobiles',b:'vivo',n:'vivo Y Series',s:'4GB + 128GB',p:11499,o:12999,r:4.2,c:1900,v:[{sku:'m4-black',col:'Black',stock:7}]},
{id:'m5',cat:'mobiles',b:'iqoo',n:'iQOO Z Series 5G',s:'8GB + 128GB',p:17999,o:20999,r:4.6,c:1500,v:[{sku:'m5-blue',col:'Blue',stock:2},{sku:'m5-grey',col:'Grey',stock:1}]},
{id:'m6',cat:'mobiles',b:'iqoo',n:'iQOO Neo Series 5G',s:'12GB + 256GB',p:32999,o:36999,r:4.6,c:900,v:[{sku:'m6-black',col:'Black',stock:3}]},
{id:'m7',cat:'mobiles',b:'pixel',n:'Google Pixel A Series',s:'8GB + 128GB',p:49999,o:52999,r:4.6,c:540,v:[{sku:'m7-black',col:'Black',stock:2}]},
{id:'m8',cat:'mobiles',b:'pixel',n:'Google Pixel Series',s:'12GB + 256GB',p:74999,o:79999,r:4.7,c:320,v:[{sku:'m8-black',col:'Black',stock:0},{sku:'m8-white',col:'White',stock:0}]},
{id:'m9',cat:'mobiles',b:'apple',n:'Apple iPhone Series',s:'128GB',p:59999,o:64999,r:4.7,c:4100,v:[{sku:'m9-black',col:'Black',stock:4},{sku:'m9-blue',col:'Blue',stock:2},{sku:'m9-pink',col:'Pink',stock:1}]},
{id:'m10',cat:'mobiles',b:'apple',n:'Apple iPhone Pro Series',s:'256GB',p:114999,o:119999,r:4.8,c:2600,v:[{sku:'m10-titanium',col:'Titanium',stock:1},{sku:'m10-black',col:'Black',stock:1}]},
{id:'m11',cat:'mobiles',b:'poco',n:'POCO X Series 5G',s:'8GB + 256GB',p:21999,o:25999,r:4.5,c:3600,v:[{sku:'m11-yellow',col:'Yellow',stock:5},{sku:'m11-black',col:'Black',stock:4}]},
{id:'m12',cat:'mobiles',b:'poco',n:'POCO M Series',s:'4GB + 128GB',p:8999,o:10999,r:4.2,c:4200,v:[{sku:'m12-blue',col:'Blue',stock:8},{sku:'m12-black',col:'Black',stock:6}]},
{id:'m13',cat:'mobiles',b:'redmi',n:'Redmi Note Series 5G',s:'8GB + 128GB',p:16999,o:19999,r:4.4,c:5200,v:[{sku:'m13-blue',col:'Blue',stock:6},{sku:'m13-black',col:'Black',stock:5},{sku:'m13-white',col:'White',stock:3}]},
{id:'m14',cat:'mobiles',b:'redmi',n:'Redmi A Series',s:'4GB + 64GB',p:6999,o:8499,r:4.0,c:3800,v:[{sku:'m14-black',col:'Black',stock:9}]},
{id:'m15',cat:'mobiles',b:'realme',n:'realme Narzo Series',s:'6GB + 128GB',p:12999,o:14999,r:4.3,c:2400,v:[{sku:'m15-blue',col:'Blue',stock:4}]},
{id:'m16',cat:'mobiles',b:'realme',n:'realme P Series 5G',s:'8GB + 256GB',p:20999,o:23999,r:4.4,c:1700,v:[{sku:'m16-green',col:'Green',stock:0},{sku:'m16-grey',col:'Grey',stock:3}]},
{id:'m17',cat:'mobiles',b:'motorola',n:'Motorola Edge Series 5G',s:'8GB + 256GB',p:24999,o:29999,r:4.4,c:1300,v:[{sku:'m17-blue',col:'Blue',stock:2}]},
{id:'m18',cat:'mobiles',b:'motorola',n:'Motorola Moto G Series',s:'4GB + 128GB',p:9999,o:11999,r:4.2,c:2000,v:[{sku:'m18-black',col:'Black',stock:5}]},
{id:'m19',cat:'mobiles',b:'oneplus',n:'OnePlus Nord Series 5G',s:'12GB + 256GB',p:29999,o:33999,r:4.5,c:1800,v:[{sku:'m19-grey',col:'Grey',stock:3},{sku:'m19-green',col:'Green',stock:2}]},
{id:'m20',cat:'mobiles',b:'oneplus',n:'OnePlus Flagship Series 5G',s:'16GB + 512GB',p:64999,o:69999,r:4.7,c:900,v:[{sku:'m20-black',col:'Black',stock:1}]},
{id:'m21',cat:'mobiles',b:'nothing',n:'Nothing Phone (a) Series',s:'8GB + 128GB',p:24999,o:26999,r:4.4,c:1000,v:[{sku:'m21-white',col:'White',stock:3},{sku:'m21-black',col:'Black',stock:2}]},
{id:'m22',cat:'mobiles',b:'nothing',n:'Nothing Phone Series',s:'12GB + 256GB',p:39999,o:44999,r:4.5,c:700,v:[{sku:'m22-white',col:'White',stock:2}]},
{id:'m23',cat:'mobiles',b:'aiplus',n:'AI+ Pulse Series',s:'4GB + 64GB',p:6999,o:7999,r:4.1,c:600,v:[{sku:'m23-black',col:'Black',stock:0}]},
{id:'m24',cat:'mobiles',b:'aiplus',n:'AI+ Nova Series 5G',s:'8GB + 128GB',p:14999,o:17999,r:4.2,c:500,v:[{sku:'m24-blue',col:'Blue',stock:4}]}
];

/* total units available for a product (all colours); unknown id = null */
function stockOf(id){
  for(var i=0;i<PRODUCTS.length;i++){if(PRODUCTS[i].id===id){return PRODUCTS[i].v.reduce(function(s,x){return s+x.stock;},0);}}
  return null;
}
