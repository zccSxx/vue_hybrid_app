<template>
	<div>
		<tabbar>
			<tabbar-item @on-item-click="checkFoot(0)">


					<img v-if="selectNum === 0" slot="icon" src="./img/shouye_1.svg">
					<img v-else slot="icon" src="./img/shouye.svg">
					<span v-if="selectNum === 0" class="icon-font" slot="label">首页</span>
					<span v-else slot="label">首页</span>
				
			</tabbar-item>
			<tabbar-item @on-item-click="checkFoot(1)" show-dot>

					<img v-if="selectNum === 1" slot="icon" src="./img/koubei_1.svg">
					<img v-else slot="icon" src="./img/koubei.svg">
					<span v-if="selectNum === 1" class="icon-font" slot="label">口碑</span>
					<span v-else slot="label">口碑</span>

			</tabbar-item>
			<tabbar-item @on-item-click="checkFoot(2)">

					<img v-if="selectNum === 2" slot="icon" src="./img/pengyou_1.svg">
					<img v-else slot="icon" src="./img/pengyou.svg">
					<span v-if="selectNum === 2" class="icon-font" slot="label">朋友</span>
					<span v-else slot="label">朋友</span>

			</tabbar-item>
			<tabbar-item @on-item-click="checkFoot(3)">

					<img v-if="selectNum === 3" slot="icon" src="./img/wode_1.svg">
					<img v-else slot="icon" src="./img/wode.svg">
					<span v-if="selectNum === 3" class="icon-font" slot="label">我的</span>
					<span v-else slot="label">我的</span>

			</tabbar-item>
		</tabbar>
	</div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'


export default {
  name: 'foot',
  components: {
    Tabbar,
    TabbarItem
  },
  data: function(){
    return{
			routeMenu: ['home', 'koubei', 'pengyou', 'wode'],
      selectNum: 0
    }
  },

	watch: {
		//双向监听，避免以后其他途径跳转导致的下标错误
		selectNum: function(num){
			if(num === -1){
				num = 0;
			}
			this.$router.push(this.routeMenu[num]);
		},

		$route: function(url){
			//根据路由名称判定下标
			let url_state = url.name.split("_")[0];
			this.selectNum = this.routeMenu.indexOf(url_state);
		},
	},

  methods: {
    checkFoot: function(num){
			this.selectNum = num;
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon-font{
	color: #1296db;
}
.weui_tabbar:before{
	border-top: transparent;
}
</style>
