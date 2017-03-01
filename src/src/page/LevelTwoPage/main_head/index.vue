<template>
    <div class="headDiv">
         <!--上标栏-->
         <div class="t t0">
            <div class="searchDiv">
                <div @click="clickSearch" class="inline-search d1">
                  <img src="./img/search.svg" class="icon-search">
                </div>
                <div @click="clickSearch" class="inline-search d2">搜索</div>
                <div @click="clickYuyin" class="inline-search d3">
                  <img src="./img/yuyin.svg" class="icon-yuyin">
                </div>
            </div>
         </div>

         <div class="t t2">
           <img src="./img/lianxiren.svg" class="icon-top">
         </div>
         <div class="t t3">
           <img src="./img/add.svg" class="icon-top">
         </div>
    </div>
</template>

<script>
// 上标栏事件，以后有空再写
export default {
  name: 'head',
  data: function(){
    return{
      
    }
  },

  methods: {
    clickSearch: function(){

    },
    clickYuyin: function(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon-top{
  height: 20%;
  display: table-cell;
  vertical-align: middle;
  margin:0 auto;
}
.icon-search{
  height: 12%;
  display: table-cell;
  vertical-align: middle;
  margin:0 auto;
}
.icon-yuyin{
  height: 10%;
  display: table-cell;
  vertical-align: middle;
  margin:0 auto;
}

.t{
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  height: 100%;
}

.t0{
  width: 76%;
}
.t2{
  width: 12%;
}
.t3{
  width: 12%;
}

.tx{
  width: 25%;
}

.searchDiv{
  margin: 5px 8px;
  background-color: #308dd6;
  color: #cfe5f6;
  margin-left: 5%;
  float: left;
  width: 95%;
  display: inline-table;
}
.inline-search{
  display: table-cell;
  vertical-align: middle;
}
.d1{
  width: 15%;
}
.d2{
  width: 70%;
  text-align: left;
  font-size: 4.5vmin;
}
.d3{
  width: 15%;
}

.headDiv{
    height: 48px;
    display: inline-table;
    width: 100%;
}

</style>