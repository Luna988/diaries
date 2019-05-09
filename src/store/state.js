const state = {
  
    diaries: [//日记
      {
        meta: {
          img: '/static/images/imgs/banner_01.jpg',
          personImg: '/static/images/imgs/own.jpg',
          personName: '多多益善',
          title: '我是个老中医',
          metaTime: '2016.4.4',
          createTime: '2016.4.5 11:20:20'
        },
        list: [
            {
              type: "TEXT",
              content: '9月11日，15年的911事件使这天蒙上了特殊的意义。2016年的这一天，怀着激动的心情，开启了高原寻秘之旅，向着那圣洁之地出发。全程自驾近2000公里，雨崩徒步80公里，完成觐见之旅。',
              poi: {
                longitude: 117.2,
                latitude: 37.5,
                name: "北京市",
              },
              description: "",
              id: 1,
              commentNum: 0,
              likeNum: 0,
            },
            {
                type: "IMAGE",
                content: '/static/images/imgs/one_01.jpg',
                poi: {
                    longitude: 117.2,
                    latitude: 37.5,
                    name: "深圳市",
                },
                description: "深圳宝安国际机场",
                id: 2,
                commentNum: 1,
                likeNum: 5,
            },
            {
              type: "IMAGE",
              content: '/static/images/imgs/one_02.jpg',
              poi: {
                longitude: 117.2,
                latitude: 37.5,
                name: "丽江三义机场",
              },
              description: "丽江三义机场",
              id: 2,
              commentNum: 1,
              likeNum: 5,
            },
            {
              type: "TEXT",
              content: ' 玉水寨在白沙溪镇，是纳西族中部地区的东巴圣地，是丽江古城的溯源。\n\nTips:门票50元/人，游玩时间2小时。',
              poi: {
                longitude: 117.2,
                latitude: 37.5,
                name: "玉水寨",
              },
              description: "",
              id: 1,
              commentNum: 0,
              likeNum: 0,
            },
            {
              type: "IMAGE",
              content: '/static/images/imgs/one_03.jpg',
              poi: {
                longitude: 117.2,
                latitude: 37.5,
                name: "玉水寨",
              },
              description: "阳光下的玉水寨",
              id: 2,
              commentNum: 1,
              likeNum: 5,
            },
            {
              type: "VIDEO",
              content: 'http://flv.bn.netease.com/videolib3/1605/22/auDfZ8781/HD/auDfZ8781-mobile.mp4',
              poi: {
                longitude: 117.2,
                latitude: 37.5,
                name: "深圳宝安国际机场",
              },
              description: "",
              id: 2,
              commentNum: 10,
              likeNum: 200,
            },
        ]
      },
      {
        meta: {
          img: '/static/images/imgs/banner_02.jpg',
          personImg: '/static/images/imgs/own.jpg',
          personName: '多多益善',
          title: '专治老中医',
          metaTime: '2016.4.4',
          createTime: '2016.4.5 11:20:20'
        },
        list: [
          {
            type: "TEXT",
            content: '2012年十一，我和朋友一行五人第一次登上这个被非洲大陆抛弃的岛屿，看到了可爱的狐猴，憨态可掬的变色龙，明信片一样的猴面包树，天真的孩子淳朴的人民，结识了我们生命中一个重要的朋友导游小温（可以加地接小温QQ或微信咨询：109300820），从此，我们爱上了这片土地。马达加斯加是一个海岛，一年分成旱季和雨季，没有特别的低温或者高温季节，几乎全年都适合旅游，只是观赏的重点略有不同而已。 \n导游小温向我们介绍，在这里，每年的7月到9月，可以近距离观看座头鲸，于是，我们从那时开始期待这个夏季的到来。',
            poi: {
              longitude: 117.2,
              latitude: 37.5,
              name: "塔那那利佛",
            },
            description: "",
            id: 1,
            commentNum: 0,
            likeNum: 0,
          },
          {
            type: "TEXT",
            content: '第一天 8月10日 天气晴\n\n长时间的飞行，多少会有一些枯燥，然而只要你愿意，依然可以看到心中的那片风景。 \n嗨！别郁闷了，和我一起到三万英尺的高空来看云。 \n喜欢飞机起飞的刹那间，加速再加速直到脱离开地球的引力冲向自由的天空。喜欢像鸟一样俯视地面的视角，高高在上，笑看人间。 \n天，蓝，云，白。机窗外的云时而像珍珠点点，时而像棉絮团团。\n夕阳将至，云和机翼被镀上一层华丽的金。 \n金红色的阳光与蓝色的天空最终合成出一片淡淡的紫，绚丽而梦幻。',
            poi: {
              longitude: 117.2,
              latitude: 37.5,
              name: "塔那那利佛",
            },
            description: "",
            id: 1,
            commentNum: 0,
            likeNum: 0,
          },
          {
            type: "IMAGE",
            content: '/static/images/imgs/two_02.jpg',
            poi: {
              longitude: 117.2,
              latitude: 37.5,
              name: "塔那那利佛",
            },
            description: "",
            id: 2,
            commentNum: 1,
            likeNum: 5,
          },
        ]
      }
    ],
    mines: {//我的模块数据
      userInfo: {//人物数据
        avatar: "/static/images/imgs/own.jpg",
        nickname: "小闹钟",
        sex: "♀",  // 0, male; 1, female
        meta: '1篇日记',
      },
      tabs: [//tabs导航菜单
        {
          "icon": "/static/images/icons/mark.png",
          "iconActive": "/static/images/icons/markHL.png",
          "title": "日记",
          "extraStyle": "",
        },
        {
          "icon": "/static/images/icons/collect.png",
          "iconActive": "/static/images/icons/collectHL.png",
          "title": "收藏",
          "extraStyle": "",
        },
        {
          "icon": "/static/images/icons/like.png",
          "iconActive": "/static/images/icons/likeHL.png",
          "title": "喜欢",
          "extraStyle": "",
        },
        {
          "icon": "/static/images/icons/more.png",
          "iconActive": "/static/images/icons/moreHL.png",
          "title": "更多",
          "extraStyle": "border:none;",
        },
      ]
    }
};
export default state;