<template>
  <div id="main_content">
      <!--大图标区域-->
      <div id="centerTool" class="contentArea">
        <div id="isShowLabal">
          <div class="imgLabal">
            <img class="bigImg" src="./img/saoyisao.svg">
            <div class="wordLabal">扫一扫</div>
          </div>
          <div class="imgLabal">
            <img class="bigImg" src="./img/fukuan.svg">
            <div class="wordLabal">付款</div>
          </div>
          <div class="imgLabal">
            <img class="bigImg" src="./img/kajuan.svg">
            <div class="wordLabal">卡劵</div>
          </div>
          <div class="imgLabal">
            <!--<img class="bigImg" src="./img/fukuan.svg">-->
            <!--<div class="wordLabal">到位</div>-->
          </div>
        </div>
        
      </div>

      <!--工具区-->
      <div id="otherTools" class="contentArea">
        <div class="line-tool">
          <div class="one-tool">
            <svg class="icon icon-tools zhuanzhang" aria-hidden="true">
              <use xlink:href="#icon-zhuanzhang"></use>
            </svg>
            <div class="tools-word-label">
              转账
            </div>
          </div>
          <div class="one-tool">
            <svg class="icon icon-tools chongzhizhongxin" aria-hidden="true">
              <use xlink:href="#icon-shoujichongzhi"></use>
            </svg>
            <div class="tools-word-label">
              充值中心
            </div>
          </div>
          <div class="one-tool">
            <svg class="icon icon-tools zhimaxinyong" aria-hidden="true">
              <use xlink:href="#icon-logo"></use>
            </svg>
            <div class="tools-word-label">
              芝麻信用
            </div>
          </div>
          <div class="one-tool">
            <svg class="icon icon-tools wodekuaidi" aria-hidden="true">
              <use xlink:href="#icon-kuaidi"></use>
            </svg>
            <div class="tools-word-label">
              我的快递
            </div>
          </div>
        </div>
        <div class="has-line"></div>
        <div class="line-tool">
          <div class="one-tool">
            <svg class="icon icon-tools qinmifu" aria-hidden="true">
              <use xlink:href="#icon-qinmifu"></use>
            </svg>
            <div class="tools-word-label">
              亲密付
            </div>
          </div>
          <div class="one-tool">
            <svg class="icon icon-tools yuebao" aria-hidden="true">
              <use xlink:href="#icon-icon"></use>
            </svg>
            <div class="tools-word-label">
              余额宝
            </div>
          </div>
          <div class="one-tool">
            <svg class="icon icon-tools xinyongkahuankuan" aria-hidden="true">
              <use xlink:href="#icon-xinyongqiahuankuan"></use>
            </svg>
            <div class="tools-word-label">
              信用卡还款
            </div>
          </div>
          <div class="one-tool">
            <svg class="icon icon-tools quanbu" aria-hidden="true">
              <use xlink:href="#icon-tianjialeimu"></use>
            </svg>
            <div class="tools-word-label">
              全部
            </div>
          </div>
        </div>
      </div>

      <!--发表信息区域-->
      <div id="iSay" class="contentArea">
        <div class="iSayDiv" id="myHeadDiv">

        <img id="myHead" src="./img/myHead.svg">
          
        </div>
        <div class="iSayDiv" id="sayTip">
          记录我的生活
        </div>
        <div class="iSayDiv" id="zhaoxiangDiv">
          <div class="zxDiv">
            <img id="zhaoxiangji" src="./img/zhaoxiang.svg">
          </div>
        </div>
      </div>

      <!--动态展示列表-->
      <div id="newsList" class="contentArea">



        <!--<card>
          <template scope>
            <div slot="card_img">
                <img  id="card_photo_huabei" src="./img/huabei.svg">
            </div>
            <div slot="card_name">蚂蚁花呗·本月账单</div>
            <div slot="card_time">48分钟前</div>
            <div slot="card_content" id="card_mayi_content" class="card_content">已还清</div>
            <div slot="card_foot">查看详情</div>
          </template>
        </card>-->

        


        <div class="card">

          <div class="card_head">
            <div class="card_photo card_head_img">
              <img id="card_photo_jijin" src="./img/jubao.svg">
            </div>
            <div class="card_info">
              <div class="card_info_word">蚂蚁聚宝·我的基金</div>
              <div class="card_info_time">上午10:11</div>
            </div>
            <div class="card_other">
              <img class="qita" src="./img/qita.svg">
            </div>
          </div>

          <div id="card_jijin_content" class="card_content">
            <div>
              +11.78
            </div>
            <div class="card_content_small">
              02-08基金收益已更新
            </div>
          </div>

          <div class="has-line"></div>

          <div class="card_foot">
            <div class="card_foot_word">基金市场</div>
            <div class="card_foot_word">热门精选</div>
          </div>

        </div>


        <div class="card">

          <div class="card_head">
            <div class="card_photo card_head_img">
              <img id="card_photo_zhima" src="./img/zhimaxinyong.svg">
            </div>
            <div class="card_info">
              <div class="card_info_word">芝麻信用·月度更新</div>
              <div class="card_info_time">02-06 上午6:09</div>
            </div>
            <div class="card_other">
              <img class="qita" src="./img/qita.svg">
            </div>
          </div>

          <div id="card_zhima_content" class="card_content">
            <div class="zhima_big_word">
              本月芝麻分更新了
            </div>
            <div class="card_content_time">
              评估时间:2017-02-06
            </div>
            <div class="card_content_small_zhima">
              点滴珍贵，重在积累
            </div>
          </div>

          <div class="has-line"></div>

          <div class="card_foot">
            立即查看
          </div>

        </div>


        <div class="card">

          <div class="card_head">
            <div class="card_photo card_head_img">
              <img id="card_photo_huabei" src="./img/huabei.svg">
            </div>
            <div class="card_info">
              <div class="card_info_word">蚂蚁花呗·本月账单</div>
              <div class="card_info_time">48分钟前</div>
            </div>
            <div class="card_other">
              <img class="qita" src="./img/qita.svg">
            </div>
          </div>

          <div id="card_mayi_content" class="card_content">
            已还清
          </div>

          <div class="has-line"></div>

          <div class="card_foot">查看详情</div>

        </div>



        <div class="card">

          <div class="card_head">
            <div class="card_photo card_head_img">
              <img class="other_say_head" src="./img/my_photo.png">
            </div>
            <div class="card_info">
              <div class="card_info_word">晨晨</div>
              <div class="card_info_time">02-06 上午10:33</div>
            </div>
            <div class="card_other">
              <img class="qita" src="./img/qita.svg">
            </div>
          </div>

          <div id="card_othersay_content" class="card_content">
            <div class="other_say">
              <div class="other_say_photo">
                <img class="other_say_img" src="./img/other_say_photo.png">
              </div>
              <div class="other_say_word">
                →_→我的芝麻分722分，来比比！
              </div>
            </div>
          </div>

          <div class="has-line"></div>

          <div class="card_foot">
            <div class="other_say_foot">
              
              <div class="other_say_foot_word">
                <img class="other_say_foot_img" src="./img/zan.svg">
                <div class="other_say_foot_word2">
                  赞
                </div>
                
              </div>
              
            </div>
            <div class="other_say_foot">
              <img class="other_say_foot_img" src="./img/pinglun.svg">
              <div class="other_say_foot_word2">
                评论
              </div>
            </div>
            <div class="other_say_foot">
              <img class="other_say_foot_img" src="./img/dashang.svg">
              <div class="other_say_foot_word2">
                打赏
              </div>
            </div>
          </div>

        </div>



    </div>


    <!--底线区-->
    <div id="dixian">
      <div class="dixian_line line1"></div>
      <!--<div class="dixian_word">我是有底线的</div>-->
      我是有底线的
      <div class="dixian_line line2"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'content',
  props: ['scrollTop'],
  data: function(){
    return{
      //是否开启高度自设(手机过渡不圆滑，暂且放弃该效果,想开启可设置为true)
      allowSetHeight: false,
      //动态过渡的Dom声明
      bigToolShowNode: null,
      bigToolHeightNode: null,
      //动态过渡边距界限值(若开启高度自设建议值为54)
      showLimit: 98,
      //自减原始高度
      agoHeight: 0
    }
  },
  watch: {
    scrollTop: function(val){
      // console.log(val);
      //小于界限值，则根据边距调节透明度和自减长度
      if(val < this.showLimit){
        //透明自调节
        let opacityParam = (this.showLimit - val)/this.showLimit;
        this.bigToolShowNode.style.opacity = opacityParam;
        // console.log("opacityParam: " + opacityParam + " val: " + val + " showLimit:" + this.showLimit);
        if(this.allowSetHeight){
          //高度自设
          let nowHeight = this.agoHeight - val;
          if(nowHeight < 0){
            nowHeight = 0;
          }
          this.bigToolHeightNode.style.height = nowHeight + "px";
        }
      } 
    }
  },
  mounted: function(){
    //初始化需要动态过渡的Dom
    this.bigToolShowNode = this.$el.querySelector("#isShowLabal");
    this.bigToolHeightNode = this.$el.querySelector("#centerTool");
    this.agoHeight = 108;
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main_content{
  width: 100%;
  /*height: 100%;*/
  /*overflow-y: auto;*/
  background-color: rgb(231, 231, 231);
}
.contentArea{
  width: 100%;
}

#centerTool{
  height: 108px;
  background-color: #1b82d2;
  /*display: table;*/
  overflow: hidden;
}
.imgLabal{
  display: table-cell;
  height: 100%;
  width: 25%;
  font-size: 3.5vmin;
  color: white;
  text-align: center;
  padding-top: 3.5%;
}
.wordLabal{
  text-align: center;
}
.bigImg{
  width: 45%;
  height: 27%;
}

#otherTools{
  height: 160px;
  background-color: white;
  width: 100%;
  font-size: 3vmin;
}
.line-tool{
  height: 50%;
  width: 100%;
}
.one-tool{
  height: 100%;
  width: 25%;
  float: left;
  text-align: center;
}
.has-line{
  border-bottom: 1px solid rgb(232, 232, 232);
  width: 94%;
  margin-left: 3%;
}

.icon-tools{
    width: 32%;
    height: 32%;
    margin-top: 16%;
}
.tools-word-label{
  font-family: "Microsoft YaHei";
  margin-top: 3px;
}

.zhuanzhang{
  color: rgb(29, 143, 225);
}
.chongzhizhongxin{
  color: rgb(243, 152, 38);
}
.xinyongkahuankuan{
  color: rgb(243, 152, 38);
}
.wodekuaidi{
  color: rgb(243, 152, 38);
}
.zhimaxinyong{
  color: rgb(41, 171, 145);
}
.qinmifu{
  color: rgb(241, 90, 74);
}
.yuebao{
  color: rgb(241, 90, 74);
}
.quanbu{
  color: rgb(151, 151, 151);
}

#iSay{
  display: inline-table;
  width: 100%;
  margin-top: 10px;
  height: 58px;
  background-color: white;
}
.iSayDiv{
  display: table-cell;
  height: 100%;
  vertical-align: middle;
}

#myHead{
  /*height: 100%;*/
  width: 60%;
  /*top: 20%;*/
  
  background-color: #e6e6e6;
  border-radius: 5px;
  vertical-align: middle;
}
#myHeadDiv{
  width: 17%;
  text-align: center;
}
#sayTip{
  color: rgb(186, 190, 195);
  width: 69%;
  font-size: 3.2vmin;
}
#zhaoxiangji{
  width: 68%;
  background-color: rgb(245, 245, 245);
  border-radius: 100%;
  vertical-align: middle;
}
#zhaoxiangDiv{
  width: 14%;
}

#newsList{
  width: 100%;
}
.card{
  margin-top: 10px;
  width: 100%;
  background-color: white;
  text-align: center;
  /*position: relative;*/
}
.card_head{
  height: 45px;
  width: 100%;
  /*position: absolute;
  top: 0;*/
  padding-top: 10px;
}
.card_foot{
  /*position: absolute;*/
  height: 48px;
  /*bottom: 0;*/
  width: 100%;
  line-height: 50px;
  font-size: 3.5vmin;
  color: rgb(50, 143, 215);
}
/*.card_foot2{*/
  /*width: 94%;
  float: left;
  margin-left: 3%;*/
/*}*/
.card_content{
  /*position: absolute;*/
  width: 100%;
  overflow: hidden;
  /*top: 52px;*/
}

#card_mayi{
  /*height: 156px;*/
}
#card_mayi_content{
  height: 50px;
  line-height: 50px;
  font-size: 6.2vmin;
}
#card_jijin_content{
  height: 72px;
  /*line-height: 86px;*/
  font-size: 6.2vmin;
}
#card_photo_huabei{
  background-color: #90cbfb;
}
#card_photo_jijin{
  background-color: #90cbfb;
}
#card_photo_zhima{
  background-color: rgb(146, 224, 175);
}
.card_head_img img{
  text-align: center;
  border-radius: 5px;
}
.card_photo{
  width: 14.5%;
  text-align: center;
  height: 100%;
  float: left;
  margin-left: 1.25%;
}
.card_info{
  width: 74.2%;
  text-align: left;
  float: left;
  height: 100%;
  /*margin-top: 0.5%;*/
}
.card_info_word{
  font-size: 3.7vmin;
}
.card_info_time{
   font-size: 2.8vmin;
   color: rgb(186, 190, 195);
   /*margin-top: 1%;*/
}
.card_other{
  width: 6.8%;
  height: 100%;
  float: left;
}
.qita{
  width: 70%;
  margin-top: 5px;
}

.card_content_small{
  font-size: 3.6vmin;
  color: rgb(136, 136, 136);
}
.card_content_small_zhima{
  font-size: 3.6vmin;
  color: rgb(136, 136, 136);
  height: 35px;
  line-height: 35px;
}
.card_foot_word{
  float: left;
  height: 100%;
  width: 50%;
}
.card_content_time{
  font-size: 3.5vmin;
  color: rgb(255, 91, 5);
}
.zhima_big_word{
  font-size: 6.2vmin;
}

.other_say{
  /*height: 63px;*/
  padding-top: 16px;
  /*background-color: rgb(248, 248, 248);*/
  
  height: 100%;
  width: 94%;
  margin-left: 3%;
}
.other_say_photo{
  float: left;
  height: 48px;
  width: 12.5%;
}
.other_say_word{
  float: left;
  height: 48px;
  width: 83.5%;
  line-height: 48px;
  text-align: left;
  background-color: rgb(248, 248, 248);
  font-size: 3.2vmin;
  padding-left: 4%;
}
.other_say_img{
  height: 48px;
  width: 100%;
}
#card_othersay_content{
  height: 73px;
}
.other_say_head{
  height: 40px;
  width: 40px;
}
.other_say_foot{
  width: 33.3%;
  height: 48px;
  line-height: 48px;
  color: rgb(16, 16, 16);
  float: left;
}
.other_say_foot_img{
  margin-left: 8%;
  /*z-index: 99;*/
  float: left;
}
.other_say_foot_word{
  float: left;
  width: 100%;
  height: 100%;
}
.other_say_foot_word2{
  height: 100%;
  float: left
}

#dixian{
  height: 55px;
  font-size: 3.9vmin;
  color: rgb(164, 169, 176);
  text-align: center;
  line-height: 55px;
}
.dixian_line{
  width: 30%;
  margin-top: 27px;
  border-top:1pt solid rgb(164, 169, 176);
}
.line1{
  float: left;
  margin-left: 4.3%;
}
.line2{
  float: right;
  margin-right: 4.3%;
}
/*.dixian_word{
  float: left;
  height: 100%;
  width: 27%;
}*/

</style>
