<template>
  <div>
        <div id="top">
          <div id="showTop">
            <router-view name="head"></router-view>
          </div>
        </div>
       

       <div id="content" @scroll="scrollContent">
         <!--内容区-->
         <transition name="fade">
            <router-view :scrollTop="scrollTop" name="content"></router-view>
         </transition>
       </div>

       <router-view name="foot"></router-view>
  </div>
</template>

<script>
export default {
  name: 'main',
  
  data: function(){
    return{
      scrollTop: 0,                   //记录当前下拉值
      scrollChangeHeadLimit: 20,      //替换head的下拉界限值
      showHeadNode:null,              //动态过渡head区域

    }
  },

  mounted: function(){
    this.showHeadNode = this.$el.querySelector("#showTop");
  },

  watch: {
    scrollTop: function(val, oldVal){

      //出了主页面就不再做处理
      if(this.$route.name !== "home" && this.$route.name !== "default" && this.$route.name !== "home_pull"){
        return;
      }


      //动态改变head效果和路由
      // console.log("val:" + val + " limit:" + this.scrollChangeHeadLimit);
      if(val < this.scrollChangeHeadLimit){
        //逐渐变淡
        let opacityParam = (this.scrollChangeHeadLimit - val)/this.scrollChangeHeadLimit;
        this.showHeadNode.style.opacity = opacityParam;
      } else if(val > this.scrollChangeHeadLimit && val < this.scrollChangeHeadLimit){
        this.showHeadNode.style.opacity = 0;
        //替换路由（因为不能保证监听连续执行，故将替换代码多次执行）
        // console.log(oldVal > val);
        if(oldVal > val){
          //拉回来了
          this.$router.push({ path: 'home'})
        } else{
          //拉下去了
          this.$router.push({ path: 'pull'})
        }

      } else if(108 > val && val > this.scrollChangeHeadLimit){
        //逐渐变亮
        let opacityParam = val - this.scrollChangeHeadLimit/108 - this.scrollChangeHeadLimit;
        this.showHeadNode.style.opacity = opacityParam/100;
        // console.log(opacityParam);
      } else if(val > 108){
        this.showHeadNode.style.opacity = 1;
      }
      // （因为不能保证监听连续执行，故将替换代码多次执行）
      if(val > this.scrollChangeHeadLimit){
        this.$router.push({ path: 'pull'})
      } else{
        this.$router.push({ path: 'home'})
      }
    }
  },
  methods: {
    clickWX: function(){
      this.$router.push({ path: 'content'})
    },
    scrollContent: function(e){
      this.scrollTop = e.currentTarget.scrollTop; 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#top{
  height: 48px;
  position: fixed;
  top: 0;
  background-color: #1b82d2;
  font-size: 6vmin;
  width: 100%;
  display: table;
}

#showTop{
  height: 48px;
}

/*#foot{
  height: 8%;
  position: fixed;
  bottom: 0;
  background-color: white;
  border-top: 1px solid black;
  font-size: 8vmin;
  display: table;
  width: 100%;
}*/

#content{
  width: 100%;
  position: fixed;
  top: 47px;
  bottom: 55px;
  overflow: auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}




</style>
