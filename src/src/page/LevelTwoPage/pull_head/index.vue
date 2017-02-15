<template>
    <!--当主界面下拉时的head-->
    <div>
         <!--上标栏-->
         <div class="imgDiv1">
            <div class="imgDiv3">
              <img src="./img/saoyisao.svg" class="icon-search saosaoImg">
            </div>
            <div class="imgDiv3">
              <img src="./img/fukuan.svg" class="icon-top fukuanImg">
            </div>
            <div class="imgDiv3">
              <img src="./img/search.svg" class="icon-search searchImg">
            </div>
         </div>

        <div class="has-line"></div>

         <div class="imgDiv2">
            <img src="./img/add.svg" class="icon-top">
         </div>
    </div>
</template>

<script>
export default {
  name: 'head',
  data: function(){
    return{
      
    }
  },

  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon-top{
  height: 48px;
  /*display: table-cell;
  vertical-align: middle;*/
  /*margin:0 auto;*/
}
.imgDiv1{
  height: 48px;
  width: 83%;
  float: left;
}
.imgDiv2{
  height: 48px;
  width: 16%;
  float: left;
}
.has-line{
  height: 30px;
  margin-top: 9px;
  float: left;
  border-left: 1px solid rgb(63, 150, 216);
}
.imgDiv3{
  float: left;
  text-align: center;
  width: 22%;
}
.searchImg{
    height: 36px;
    width: 36px;
    margin-top: 6px;
}
.saosaoImg{
  height: 30px;
  width: 30px;
  margin-top: 9px;
}
.fukuanImg{
  height: 28px;
  width: 28px;
  margin-top: 10px;
}

</style>