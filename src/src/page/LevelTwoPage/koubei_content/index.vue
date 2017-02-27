<template>
  <div>
    <input id="upload" type="file" @change="getFile" accept="image/*" />

    <img v-if="hasImg" :src="url" height="100" width="100" />
  </div>
  


  <!--<div></div>-->
  
  <!--<iframe src="http://image.baidu.com/wisehomepage/feeds" width="200" height="300"></iframe>-->
</template>

<script>
export default {
  name: 'koubei_content',

  data: function(){
    return{
      imgFile: null,
      hasImg: false,
      url: ""
    }
  },

  methods: {
    getFile: function(){

      console.log("begin");
      let pageView = this;
      let fileArr = Array.prototype.slice.apply(this.$el.querySelector("#upload").files);
      console.log(fileArr);
      for(let img of fileArr){
        let reader = new FileReader();
        console.log(reader);
        reader.onload = function(){
          console.log(this.result);
          pageView.url = this.result;
          pageView.hasImg = true;
        }
        reader.onerror = function(e){
          // alert("error");
          console.log(reader.error);
        }
        reader.readAsText(img);
      }

      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*@color: blue;
div{
  background-color: @color;
  height:100px;
  width:100px;
  
}*/

</style>
