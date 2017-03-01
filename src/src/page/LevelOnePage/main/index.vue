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
            <router-view name="content"></router-view>
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
      showHeadNode: null,             //动态过渡head区域
      hadPull: false,                 //路由被替换成下拉状态标志
    }
  },

  mounted: function(){
    this.showHeadNode = this.$el.querySelector("#showTop");
  },

  watch: {
    scrollTop: function(val, oldVal){

      //动态改变head效果和路由
      //opacity不会重排和重绘，故性能问题不用担心
      let showDomStyle = this.showHeadNode.style;
      if(val < this.scrollChangeHeadLimit){
        //逐渐变淡
        let opacityParam = (this.scrollChangeHeadLimit - val)/this.scrollChangeHeadLimit;
        showDomStyle.opacity = opacityParam;
      } else if(108 > val && val > this.scrollChangeHeadLimit){
        //逐渐变亮
        let opacityParam = val - this.scrollChangeHeadLimit/108 - this.scrollChangeHeadLimit;
        showDomStyle.opacity = opacityParam/100;
      } else{
        showDomStyle.opacity = 1;
      }

      // 路由标志替换（因为不能保证监听连续执行，故将替换代码多次执行）
      if(val > this.scrollChangeHeadLimit){
        this.hadPull = true;
      } else{
        this.hadPull = false;
      }
      
    },

    //根据标志改变路由
    hadPull: function(val){
      if(val){
        this.$router.push({ path: 'pull'});
      } else{
        this.$router.push({ path: 'home'});
      }
    },

  },
  methods: {
    clickWX: function(){
      this.$router.push({ path: 'content'})
    },
    scrollContent: function(e){
      //出了主页面就不再做处理
      if(this.$route.name === "home" || this.$route.name === "default" || this.$route.name === "home_pull"){
        this.scrollTop = e.currentTarget.scrollTop; 
      }
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
