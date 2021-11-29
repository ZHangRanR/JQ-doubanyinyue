$('#slides').slidesImg({
	images:['https://img1.doubanio.com/view/music_index_banner/raw/public/banner-2718.jpg','https://img3.doubanio.com/view/music_index_banner/raw/public/banner-2711.jpg','https://img1.doubanio.com/view/music_index_banner/raw/public/banner-2717.jpg','https://img3.doubanio.com/view/music_index_banner/raw/public/banner-2713.jpg','https://img3.doubanio.com/view/music_index_banner/raw/public/banner-2700.jpg','https://img3.doubanio.com/view/music_index_banner/raw/public/banner-2714.jpg'],
	order:['./images/next.png','./images/prev.png']
});

// 本周流行音乐/上升最快音乐人 选项切换
$('#tab-plugin-musician').tabs({
	heading:['本周流行音乐','上升最快音乐人']
})
var data1 = [
            [
              {'img':"./images/Late.jpg",'aut':'Late Troubles','t':'电子 Electronica','hover':{'p1':'给她的歌 (ft. Nicole Oujian) 新专辑版本','p2':'butter and bread','p3':'看天儿','p4':'练习曲3'}},
              {'img':"./images/815218d1db19fdb.jpg",'aut':'鴨聽天','t':'古典 Classical','hover':{'p1':'10 五谷神油','p2':'20171016-12','p3':'閉門開','p4':'劫數'}},
              {'img':"./images/381733-1.jpg",'aut':'Dolphy Kick Bebop','t':'摇滚 Rock','hover':{'p1':'Shan-kuei','p2':'Soon the sun is all','p3':'Ode to a thousand gates','p4':'Morning-after pill'}},
              {'img':"./images/446044-1.jpg",'aut':'Alternative for Baroque','t':'轻音乐 Easy Listening','hover':{'p1':'L Couperin: Chaconne in D minor','p2':'「就非常的切利了」(B-C: Récit pour l\'Élévation en E#)','p3':'(Live) W. Croft: Prelude+Allemande in E Minor','p4':'(Live) Croft: Suite in C min'}},
              {'img':"./images/c65244.jpg",'aut':'宽宽','t':'民谣 Folk','hover':{'p1':'Revenge(XXXTENTACION COVER)','p2':'Solar Bear','p3':'(No One Knows My Name Is)K (feat. Jes)','p4':'TaoJin'}},
              {'img':"./images/364466-2.jpg",'aut':'小河','t':'民谣 Folk','hover':{'p1':'‘Ah’ of 492 human beings(20180608)','p2':'w m','p3':'晚风（翻唱）','p4':'xlaohelaotian'}},
              {'img':"./images/s3113075.jpg",'aut':'冯佳界&西山','t':'民谣 Folk','hover':{'p1':'城市之光-英雄主义','p2':'暗河 (demo)','p3':'花田','p4':'城市之光 (demo)'}},
              {'img':"./images/13071-1.jpg",'aut':'BRE - Beijing Renaissance Ensemble','t':'古典 Classical','hover':{'p1':'Guillaume Dufay - Ave regina celorum','p2':'Tomas Luis de Victoria - Ave Maria','p3':'Josquin Desprez - O Virgo Virginum','p4':'Giovanni Pierluigi da Palestrina - Missa Papae Marcelli - Kyrie'}}
            ],
            [
              {'img':"./images/Soil.jpg",'aut':'Soil terrapin','t':'说唱 Rap','hover':{'p1':'祝你幸福啊','p2':'you are my love白小慈','p3':'秀逗  Get money','p4':'记忆煽情  和宫儿啊'}},
              {'img':"./images/Soil.jpg",'aut':'Soil terrapin','t':'说唱 Rap','hover':{'p1':'祝你幸福啊','p2':'you are my love白小慈','p3':'秀逗  Get money','p4':'记忆煽情  和宫儿啊'}},
              {'img':"./images/Soil.jpg",'aut':'Soil terrapin','t':'说唱 Rap','hover':{'p1':'祝你幸福啊','p2':'you are my love白小慈','p3':'秀逗  Get money','p4':'记忆煽情  和宫儿啊'}},
              {'img':"./images/Soil.jpg",'aut':'Soil terrapin','t':'说唱 Rap','hover':{'p1':'祝你幸福啊','p2':'you are my love白小慈','p3':'秀逗  Get money','p4':'记忆煽情  和宫儿啊'}},
              {'img':"./images/Soil.jpg",'aut':'Soil terrapin','t':'说唱 Rap','hover':{'p1':'祝你幸福啊','p2':'you are my love白小慈','p3':'秀逗  Get money','p4':'记忆煽情  和宫儿啊'}},
              {'img':"./images/Soil.jpg",'aut':'Soil terrapin','t':'说唱 Rap','hover':{'p1':'祝你幸福啊','p2':'you are my love白小慈','p3':'秀逗  Get money','p4':'记忆煽情  和宫儿啊'}},
              {'img':"./images/Soil.jpg",'aut':'Soil terrapin','t':'说唱 Rap','hover':{'p1':'祝你幸福啊','p2':'you are my love白小慈','p3':'秀逗  Get money','p4':'记忆煽情  和宫儿啊'}},
              {'img':"./images/Soil.jpg",'aut':'Soil terrapin','t':'说唱 Rap','hover':{'p1':'祝你幸福啊','p2':'you are my love白小慈','p3':'秀逗  Get money','p4':'记忆煽情  和宫儿啊'}}
            ]    
          ]

for (var j = 0; j < data1.length ; j++) {
  var str = '';
  for (var i = 0; i < data1[j].length ; i++) {
      str += '<div class="tab-list-item">' +
                     '<div class="cover">' +
                         '<div class="tab-item-img" style="background-image:url(' + data1[j][i].img + ')">' +
                            '<div class="playBut"></div>' +
                            '<a class="item-mask">' +
                              '<div class="hoverlay">' +
                                '<p>' + data1[j][i].hover.p1 + '</p>' +
                                '<p>' + data1[j][i].hover.p2+ '</p>' +
                                '<p>' + data1[j][i].hover.p3 + '</p>' +
                                '<p>' + data1[j][i].hover.p4 + '</p>' +
                              '</div>' +
                            '</a>' +
                         '</div>' +
                     '</div>' +
                     '<a href="#1" class="musician">' + data1[j][i].aut + '</a>' +
                     '<p>' + data1[j][i].t + '</p>' +
              '</div>'
  }
  $('#tab-plugin-musician .tab-list').eq(j).append($(str));
}


// 新碟榜 选项切换
$('#tab-plugin-list').tabs({
  heading:['最热','华语','欧美','日韩','单曲'],
  title:'新碟榜',
  more:'更多'
})
var data2 = [
              [
                 {'img':"./images/Anti.jpg",'song':'Anti ! Yico','singer':'曾轶可','star':'','score':'8.0'},
                 {'img':"./images/3170.jpg",'song':'3170','singer':'曹方','star':'','score':'8.0'},
                 {'img':"./images/TheNowNow.jpg",'song':'The Now Now','singer':'Gorillaz','star':'','score':'8.0'},
                 {'img':"./images/SomethingNew.jpg",'song':'Something New','singer':'金泰妍 Kim Tae Yeon','star':'','score':'8.0'},
                 {'img':"./images/傲红尘.jpg",'song':'傲红尘','singer':'尤长靖','star':'','score':'8.0'},
                 {'img':"./images/s1967258.jpg",'song':'初恋','singer':'宇多田ヒカル','star':'','score':'8.0'},
                 {'img':"./images/8030377-1.jpg",'song':'月光白得很','singer':'莫西子诗 Mosi','star':'','score':'8.0'},
                 {'img':"./images/446044-1.jpg",'song':'渐渐','singer':'陈奕迅','star':'','score':'8.0'}
              ],
              [
                 {'img':"./images/3170.jpg",'song':'3170','singer':'曹方','star':'','score':'8.0'},
                 {'img':"./images/3170.jpg",'song':'3170','singer':'曹方','star':'','score':'8.0'},
                 {'img':"./images/3170.jpg",'song':'3170','singer':'曹方','star':'','score':'8.0'},
                 {'img':"./images/3170.jpg",'song':'3170','singer':'曹方','star':'','score':'8.0'},
                 {'img':"./images/3170.jpg",'song':'3170','singer':'曹方','star':'','score':'8.0'},
                 {'img':"./images/3170.jpg",'song':'3170','singer':'曹方','star':'','score':'8.0'},
                 {'img':"./images/3170.jpg",'song':'3170','singer':'曹方','star':'','score':'8.0'},
                 {'img':"./images/3170.jpg",'song':'3170','singer':'曹方','star':'','score':'8.0'}
              ],
              [
                 {'img':"./images/TheNowNow.jpg",'song':'The Now Now','singer':'Gorillaz','star':'','score':'8.0'},
                 {'img':"./images/TheNowNow.jpg",'song':'The Now Now','singer':'Gorillaz','star':'','score':'8.0'},
                 {'img':"./images/TheNowNow.jpg",'song':'The Now Now','singer':'Gorillaz','star':'','score':'8.0'},
                 {'img':"./images/TheNowNow.jpg",'song':'The Now Now','singer':'Gorillaz','star':'','score':'8.0'},
                 {'img':"./images/TheNowNow.jpg",'song':'The Now Now','singer':'Gorillaz','star':'','score':'8.0'},
                 {'img':"./images/TheNowNow.jpg",'song':'The Now Now','singer':'Gorillaz','star':'','score':'8.0'},
                 {'img':"./images/TheNowNow.jpg",'song':'The Now Now','singer':'Gorillaz','star':'','score':'8.0'},
                 {'img':"./images/TheNowNow.jpg",'song':'The Now Now','singer':'Gorillaz','star':'','score':'8.0'}
              ],
              [
                 {'img':"./images/SomethingNew.jpg",'song':'Something New','singer':'金泰妍 Kim Tae Yeon','star':'','score':'8.0'},
                 {'img':"./images/SomethingNew.jpg",'song':'Something New','singer':'金泰妍 Kim Tae Yeon','star':'','score':'8.0'},
                 {'img':"./images/SomethingNew.jpg",'song':'Something New','singer':'金泰妍 Kim Tae Yeon','star':'','score':'8.0'},
                 {'img':"./images/SomethingNew.jpg",'song':'Something New','singer':'金泰妍 Kim Tae Yeon','star':'','score':'8.0'},
                 {'img':"./images/SomethingNew.jpg",'song':'Something New','singer':'金泰妍 Kim Tae Yeon','star':'','score':'8.0'},
                 {'img':"./images/SomethingNew.jpg",'song':'Something New','singer':'金泰妍 Kim Tae Yeon','star':'','score':'8.0'},
                 {'img':"./images/SomethingNew.jpg",'song':'Something New','singer':'金泰妍 Kim Tae Yeon','star':'','score':'8.0'},
                 {'img':"./images/SomethingNew.jpg",'song':'Something New','singer':'金泰妍 Kim Tae Yeon','star':'','score':'8.0'}
              ],
              [
                {'img':"./images/傲红尘.jpg",'song':'傲红尘','singer':'尤长靖','star':'','score':'8.0'},
                {'img':"./images/傲红尘.jpg",'song':'傲红尘','singer':'尤长靖','star':'','score':'8.0'},
                {'img':"./images/傲红尘.jpg",'song':'傲红尘','singer':'尤长靖','star':'','score':'8.0'},
                {'img':"./images/傲红尘.jpg",'song':'傲红尘','singer':'尤长靖','star':'','score':'8.0'},
                {'img':"./images/傲红尘.jpg",'song':'傲红尘','singer':'尤长靖','star':'','score':'8.0'},
                {'img':"./images/傲红尘.jpg",'song':'傲红尘','singer':'尤长靖','star':'','score':'8.0'},
                {'img':"./images/傲红尘.jpg",'song':'傲红尘','singer':'尤长靖','star':'','score':'8.0'},
                {'img':"./images/傲红尘.jpg",'song':'傲红尘','singer':'尤长靖','star':'','score':'8.0'}
              ]
          ]

for (var j = 0; j < data2.length ; j++) {
  var str = '';
  for (var i = 0; i < data2[j].length ; i++) {
      str += '<div class="tab-list-item">' +
                     '<div class="tab-item-img" style="background-image:url(' + data2[j][i].img + ')"></div>' +
                     '<a href="#1" class="song">' + data2[j][i].song + '</a>' +
                     '<p class="singer">' + data2[j][i].singer + '</p>' +
                     '<div>' +
                       '<p class="star">' + data2[j][i].star + '</p>' +
                       '<p class="score">' + data2[j][i].score + '</p>' +
                     '</div>' +
                     
              '</div>'
  }
  $('#tab-plugin-list .tab-list').eq(j).append($(str));
}


// 近期热门歌单 选项切换
$('#tab-plugin-sheet').tabs({
  heading:['最热','流行','摇滚','民谣','原声'],
  title:'近期热门歌单',
  more:'更多'
})
var data3 = [
            //"hottest"
             [
               {'img':"./images/451793-6.jpg",'songName':'人鱼密语','count':'22','username':'鸢。 ','collection':'2','song':['1.Wish U Were Here','2.Right Here','3.Sleep Will Come']},
               {'img':"./images/446044-1.jpg",'songName':'微风吹拂的山丘上','count':'16','username':'塔塔 ','collection':'52','song':['1.The Rose','2.虹','3.Over The Rainbow']},
               {'img':"./images/1374452-2.jpg",'songName':'遇见一个女孩','count':'66','username':'朝阳の荆棘 ','collection':'37','song':['1.遇见你的时候所有星星都落到我头上','2.神様がみてる','3.フランネル']},
               {'img':"./images/451793-6.jpg",'songName':'念如心禅','count':'30','username':'麦心 ','collection':'89','song':['1.Moon Light','2.Courage','3.4U']},
               {'img':"./images/13071-1.jpg",'songName':'Cécile Corbel','count':'8','username':'雾光森林 ','collection':'9','song':['1.翔の悲しみ','2.Arrietty\'s Song (Arrietty\'s Song)','3.Sho\'s Lament-Instrumental Version2 (翔の悲しみ)']},
               {'img':"./images/bbdafdf35709c2f.jpg",'songName':'指弹吉他-3号','count':'30','username':'Enn. ','collection':'5183','song':['1.ステッセルのピアノ','2.ウォーター・スキッパー','3.Town']}
            ],
            // "popular"
            [
               {'img':"./images/1374452-2.jpg",'songName':'听的片刻产生了心动的永恒','count':'88','username':'syn_chan ','collection':'1495','song':['1.Everything N\'Nothing (Album Version)','2.晃动在眼皮上的阳光(demo)','3.只怕不够时间看你白头']},
               {'img':"./images/6706491-7.jpg",'songName':'雾非雾','count':'84','username':'没注销 ','collection':'152','song':['1.走在冷风中','2.若你碰到他','3.岁月神偷 (Demo Version)']},
               {'img':"./images/364466-2.jpg",'songName':'Shall we dance?','count':'32','username':'某S  ','collection':'231','song':['1.Glamour Girl','2.Sky High','3.Over & Done']}
            ],
            // "RockRoll"
            [
               {'img':"./images/7327832-1.jpg",'songName':'娓娓道来的民谣如痴如醉的摇滚','count':'22','username':'freedom-cat ','collection':'62','song':['1.农夫渔夫','2.渔樵问答','3.鬼猫']},
               {'img':"./images/381733-1.jpg",'songName':'日光之下 并无新事','count':'60','username':'死了 ','collection':'124','song':['1.In The Blue','2.Ah, You Left Me','3.Something Real']},
               {'img':"./images/364466-2.jpg",'songName':'Summer','count':'252','username':'太公小望 ','collection':'22','song':['1.Yui','2.Mariana','3.白虎野(パプリカエンディングバージョン)']},
               {'img':"./images/bbdafdf35709c2f.jpg",'songName':'新的老的那些好听的','count':'29','username':'西摩君 ','collection':'569','song':['1.Keep In the Dark','2.Beat The Devil\'s Tattoo','3.Even When The Water\'s Cold']},
               {'img':"./images/7206528-1.jpg",'songName':'文字与歌','count':'39','username':'littleking ','collection':'8','song':['1.You Are A Lover','2.Eva (demo Version)','3.Owl Waltz']},
               {'img':"./images/8054632-2.jpg",'songName':'可以循环','count':'24','username':'LARS ','collection':'15','song':['1.Reflection Eternal','2.Luv(sic.) Pt. 3 Ft. Shing02','3.Fire In The Mountain']}
            ],
            // "ballad"
            [
               {'img':"./images/495311-3.jpg",'songName':'岛上咖啡馆的美好下午','count':'33','username':'s苏苏s ','collection':'266','song':['1.Journey','2.In Love','3.Beyond The Memory']},
               {'img':"./images/5799626-2.jpg",'songName':'No other way','count':'40','username':'Rain ','collection':'9','song':['1.Quiet Inside','2.Orange Sky','3.You Would Love Me Too']},
               {'img':"./images/8030377-1.jpg",'songName':'2015我的大三音乐','count':'19','username':'小镇 ','collection':'21','song':['1.预谋邂逅','2.青年','3.03 - 自己的自己']},
               {'img':"./images/1328822-42.jpg",'songName':'喜欢的歌~','count':'19','username':'Marylady ','collection':'15','song':['1.Hymn','2.Relief','3.Baby\'s Romance']},
               {'img':"./images/1543161-4.jpg",'songName':'奇妙能力歌','count':'26','username':'周小裁缝 ','collection':'295','song':['1.奇妙能力歌','2.少年你在哪里','3.小相思']},
               {'img':"./images/354987-1.jpg",'songName':'音乐识人','count':'9','username':'meomio ','collection':'9','song':['1.挚爱 True Love - 邵容 ','2.夢追人 - KOKIA ','3.在路上 - Relin（瑞琳）']}
            ],
            // "original"
            [
               {'img':"./images/50046-1.jpg",'songName':'Rise','count':'30','username':'草橙箬 ','collection':'8','song':['1.The Weeping Meadow','2.By The Sea','3.Over The Rainbow']},
               {'img':"./images/1374163-1.jpg",'songName':'越过大地的时光','count':'15','username':'睿睿 ','collection':'36','song':['1.The Inmost Feeling Ripples','2.The Moon On The Lake','3.Impressions Of The West Lake']},
               {'img':"./images/305809-2.jpg",'songName':'好想告诉你','count':'23','username':'Vict0ria-Yi ','collection':'311','song':['1.Pure','2.きみにとどけ(TV ver.)','3.青空']},
               {'img':"./images/1328822-42.jpg",'songName':'纯音乐','count':'54','username':'motai0 ','collection':'18','song':['1.Just a few minutes','2.ボレロ','3.カノン']},
               {'img':"./images/558.jpg",'songName':'古琴名曲','count':'47','username':'古乐曲花缡 ','collection':'4','song':['1.忆故人','2.醉渔唱晚','3.春风']},
               {'img':"./images/42641-1.jpg",'songName':'GODFATHER','count':'20','username':'Just ','collection':'19','song':['1.The Pick-up','2.The Godfather - Mazurka','3.The Immigrant']}
            ]
]
         
for (var j = 0; j < data3.length ; j++) {
  var str = '';
  for (var i = 0; i < data3[j].length ; i++) {
    var songList = '';
    data3[j][i].song.forEach(function(ele,index){
        songList += '<li class="song-item">' + ele + '</li>';
    })
    str += '<div class="tab-list-item">' +
                   '<div class="tab-item-img" style="background-image:url(' + data3[j][i].img + ')">' +
                       '<div class="img-mask"></div>' +
                   '</div>' +
                   '<div>' + 
                      '<a href="#1" class="songName">' + data3[j][i].songName + '</a>' + 
                      '<span class="count">(' + data3[j][i].count + ')</span>' +
                   '</div>' +
                   '<div>' +
                      '<span class="username">' + '<a>' + data3[j][i].username + '</a>' + '制作 |</span>' +
                      '<span class="collection">' + data3[j][i].collection + ' 收藏</span>' +
                   '</div>' +
                   '<ul class="songList">' + songList + 
                      '<span>...</span>' +
                   '</ul>' +
            '</div>'
  }
  $('#tab-plugin-sheet .tab-list').eq(j).append($(str));
}


// 本周单曲榜 选项切换
 $('#tab-plugin-weekList').tabs({
  heading:['最热','摇滚','民谣','流行','电子','说唱'],
  title:'本周单曲榜',
  more:'播放更多'
})
var data4 = [
              [
                 {'img':"./images/451793-6.jpg",'songName':'人鱼密语','count':'22','musician':'鸢。 '},
                 {'img':"./images/446044-1.jpg",'songName':'微风吹拂的山丘上','count':'16','musician':'塔塔 '},
                 {'img':"./images/1374452-2.jpg",'songName':'遇见一个女孩','count':'66','musician':'朝阳の荆棘 '},
                 {'img':"./images/451793-6.jpg",'songName':'念如心禅','count':'30','musician':'麦心 '},
                 {'img':"./images/13071-1.jpg",'songName':'Cécile Corbel','count':'8','musician':'雾光森林 '},
                 {'img':"./images/bbdafdf35709c2f.jpg",'songName':'指弹吉他-3号','count':'30','musician':'Enn. '},
                 {'img':"./images/1374452-2.jpg",'songName':'遇见一个女孩','count':'66','musician':'朝阳の荆棘 '},
                 {'img':"./images/bbdafdf35709c2f.jpg",'songName':'指弹吉他-3号','count':'30','musician':'Enn. '},
                 {'img':"./images/13071-1.jpg",'songName':'Cécile Corbel','count':'8','musician':'雾光森林 '},
                 {'img':"./images/bbdafdf35709c2f.jpg",'songName':'指弹吉他-3号','count':'30','musician':'Enn. '}
              ],
              [
               {'img':"./images/1374452-2.jpg",'songName':'遇见一个女孩','count':'66','musician':'朝阳の荆棘 '},
               {'img':"./images/451793-6.jpg",'songName':'人鱼密语','count':'22','musician':'鸢。 '},
               {'img':"./images/446044-1.jpg",'songName':'微风吹拂的山丘上','count':'16','musician':'塔塔 '},
               {'img':"./images/bbdafdf35709c2f.jpg",'songName':'指弹吉他-3号','count':'30','musician':'Enn. '},
               {'img':"./images/451793-6.jpg",'songName':'念如心禅','count':'30','musician':'麦心 '},
               {'img':"./images/1374452-2.jpg",'songName':'遇见一个女孩','count':'66','musician':'朝阳の荆棘 '},
               {'img':"./images/bbdafdf35709c2f.jpg",'songName':'指弹吉他-3号','count':'30','musician':'Enn. '},
               {'img':"./images/13071-1.jpg",'songName':'Cécile Corbel','count':'8','musician':'雾光森林 '},
               {'img':"./images/bbdafdf35709c2f.jpg",'songName':'指弹吉他-3号','count':'30','musician':'Enn. '},
               {'img':"./images/13071-1.jpg",'songName':'Cécile Corbel','count':'8','musician':'雾光森林 '}
              ],
              [
               {'img':"./images/451793-6.jpg",'songName':'念如心禅','count':'30','musician':'麦心 '},
               {'img':"./images/446044-1.jpg",'songName':'微风吹拂的山丘上','count':'16','musician':'塔塔 '},
               {'img':"./images/1374452-2.jpg",'songName':'遇见一个女孩','count':'66','musician':'朝阳の荆棘 '},
               {'img':"./images/13071-1.jpg",'songName':'Cécile Corbel','count':'8','musician':'雾光森林 '},
               {'img':"./images/451793-6.jpg",'songName':'人鱼密语','count':'22','musician':'鸢。 '},
               {'img':"./images/bbdafdf35709c2f.jpg",'songName':'指弹吉他-3号','count':'30','musician':'Enn. '},
               {'img':"./images/1374452-2.jpg",'songName':'遇见一个女孩','count':'66','musician':'朝阳の荆棘 '},
               {'img':"./images/bbdafdf35709c2f.jpg",'songName':'指弹吉他-3号','count':'30','musician':'Enn. '},
               {'img':"./images/13071-1.jpg",'songName':'Cécile Corbel','count':'8','musician':'雾光森林 '},
               {'img':"./images/bbdafdf35709c2f.jpg",'songName':'指弹吉他-3号','count':'30','musician':'Enn. '}
              ],
              [
               {'img':"./images/13071-1.jpg",'songName':'Cécile Corbel','count':'8','musician':'雾光森林 '},
               {'img':"./images/451793-6.jpg",'songName':'人鱼密语','count':'22','musician':'鸢。 '},
               {'img':"./images/bbdafdf35709c2f.jpg",'songName':'指弹吉他-3号','count':'30','musician':'Enn. '},
               {'img':"./images/446044-1.jpg",'songName':'微风吹拂的山丘上','count':'16','musician':'塔塔 '},
               {'img':"./images/1374452-2.jpg",'songName':'遇见一个女孩','count':'66','musician':'朝阳の荆棘 '},
               {'img':"./images/451793-6.jpg",'songName':'念如心禅','count':'30','musician':'麦心 '},
               {'img':"./images/bbdafdf35709c2f.jpg",'songName':'指弹吉他-3号','count':'30','musician':'Enn. '},
               {'img':"./images/1374452-2.jpg",'songName':'遇见一个女孩','count':'66','musician':'朝阳の荆棘 '},
               {'img':"./images/bbdafdf35709c2f.jpg",'songName':'指弹吉他-3号','count':'30','musician':'Enn. '},
               {'img':"./images/13071-1.jpg",'songName':'Cécile Corbel','count':'8','musician':'雾光森林 '}
              ],
              [
               {'img':"./images/1374452-2.jpg",'songName':'遇见一个女孩','count':'66','musician':'朝阳の荆棘 '},
               {'img':"./images/446044-1.jpg",'songName':'微风吹拂的山丘上','count':'16','musician':'塔塔 '},
               {'img':"./images/451793-6.jpg",'songName':'人鱼密语','count':'22','musician':'鸢。 '},
               {'img':"./images/13071-1.jpg",'songName':'Cécile Corbel','count':'8','musician':'雾光森林 '},
               {'img':"./images/bbdafdf35709c2f.jpg",'songName':'指弹吉他-3号','count':'30','musician':'Enn. '},
               {'img':"./images/1374452-2.jpg",'songName':'遇见一个女孩','count':'66','musician':'朝阳の荆棘 '},
               {'img':"./images/451793-6.jpg",'songName':'念如心禅','count':'30','musician':'麦心 '},
               {'img':"./images/bbdafdf35709c2f.jpg",'songName':'指弹吉他-3号','count':'30','musician':'Enn. '},
               {'img':"./images/13071-1.jpg",'songName':'Cécile Corbel','count':'8','musician':'雾光森林 '},
               {'img':"./images/bbdafdf35709c2f.jpg",'songName':'指弹吉他-3号','count':'30','musician':'Enn. '}
              ],
              [
               {'img':"./images/bbdafdf35709c2f.jpg",'songName':'指弹吉他-3号','count':'30','musician':'Enn. '},
               {'img':"./images/451793-6.jpg",'songName':'人鱼密语','count':'22','musician':'鸢。 '},
               {'img':"./images/13071-1.jpg",'songName':'Cécile Corbel','count':'8','musician':'雾光森林 '},
               {'img':"./images/446044-1.jpg",'songName':'微风吹拂的山丘上','count':'16','musician':'塔塔 '},
               {'img':"./images/1374452-2.jpg",'songName':'遇见一个女孩','count':'66','musician':'朝阳の荆棘 '},
               {'img':"./images/451793-6.jpg",'songName':'念如心禅','count':'30','musician':'麦心 '},
               {'img':"./images/bbdafdf35709c2f.jpg",'songName':'指弹吉他-3号','count':'30','musician':'Enn. '},
               {'img':"./images/1374452-2.jpg",'songName':'遇见一个女孩','count':'66','musician':'朝阳の荆棘 '},
               {'img':"./images/13071-1.jpg",'songName':'Cécile Corbel','count':'8','musician':'雾光森林 '},
               {'img':"./images/bbdafdf35709c2f.jpg",'songName':'指弹吉他-3号','count':'30','musician':'Enn. '}
              ]
            ]

for (var j = 0; j < data4.length ; j++) {
  var str ='';
  for (var i = 0; i < data4[j].length ; i++) {
    str += '<div class="tab-list-item">' +
               '<div class="tab-item-img" style="background-image:url(' + data4[j][i].img + ')">' +
                     '<div class="img-mask"></div>' +
               '</div>' +
               '<div class="information">' +
                  '<div class="songName">' + data4[j][i].songName + '</div>' + 
                  '<span class="musician">' + data4[j][i].musician + '/</span>' +
                  '<span class="count">' + data4[j][i].count + '次播放</span>' +
               '</div>' +
           '</div>'
    }

$('#tab-plugin-weekList .tab-list').eq(j).append($(str));
}