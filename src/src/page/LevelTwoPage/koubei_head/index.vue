<template>
    <!--当主界面下拉时的head-->
    <div>
         <!--上标栏-->
         <div class="headDiv0">
            <div class="headDiv1">
              <div class="headDiv1Word">
                 {{city}}
                 <img class="youxiaImg" src="./img/youxia.svg">
              </div>
            </div>
            <div class="headDiv2">
              <div class="searchDiv">
                <div class="inline-search d1">
                  <img src="./img/search.svg" class="icon-search">
                </div>
                <div class="inline-search d2">想吃什么</div>
              </div>
            </div>

            <div class="headDiv3">
              <img class="otherImg" src="./img/other.svg">
            </div>
         </div>
    </div>
</template>

<script>
// import BMap from 'BMap'

export default {
  name: 'head',
  data: function(){
    return{
      city: '未知'          //当前城市
    }
  },
  mounted: function(){

    //该方法无法区分模拟器与真机，只能区分纯电脑运行
    // let url = "";
    // if(navigator.userAgent.match(/(windows NT|Macintosh)/i)){
    //   url = "/map/location/ip";
    // } else{
    //   url = "http://api.map.baidu.com/location/ip";
    // }

    // this.$http.post(url, {ak : 'LI9reGDw05izp0pR94aDRfNW0S25RYUA'}).then(function(result){
    //     alert(result.body.address);
    // });

    // this.$http.get("http://api.map.baidu.com/location/ip", {params: {ak : 'LI9reGDw05izp0pR94aDRfNW0S25RYUA'}}).then(function(result){
    //     alert(result.body.address);
    // });
    // $.ajax({
    //   url: "http://api.map.baidu.com/location/ip",
    //   data: {ak : 'LI9reGDw05izp0pR94aDRfNW0S25RYUA'},
    //   success: function(result){
    //     alert(result.address);
    //   }
    // });

    var pageView = this;
    var myCity = new BMap.LocalCity();
	  myCity.get(function(result){
      // console.log(result);
      pageView.city = result.name.split("市")[0];
    });

  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headDiv0{
  height: 48px;
  width: 100%;
  color: #ffffff;
  display: table;
}
.icon-search{
  height: 12%;
  display: table-cell;
  vertical-align: middle;
  margin:0 auto;
}
.searchDiv{
  /*margin: 6px 8px;*/
  background-color: #308dd6;
  color: #cfe5f6;
  margin-left: 5%;
  /*float: left;*/
  width: 95%;
  display: table;
}
.headDiv1{
  display: table-cell;
  width: 15%;
  height: 48px;
  vertical-align: middle;
}
.headDiv2{
  display: table-cell;
  width: 73%;
  height: 48px;
  vertical-align: middle;
}
.headDiv3{
  display: table-cell;
  width: 12%;
  height: 48px;
  text-align: center;
}
.headDiv1Word{
  font-size: 4.5vmin;
  height: 48px;
  line-height: 48px;
  text-align: center;
}
.youxiaImg{
  position: absolute;
  top: 14px;
}
.inline-search{
  display: table-cell;
  vertical-align: middle;
}
.d2{
  text-align: left;
  font-size: 3.2vmin;
  line-height: 24px;
  /*padding-top: 3px;*/
}
.d1{
  width: 12%;
}
.otherImg{
  margin-top: 12px;
}

</style>