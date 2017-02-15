// 路由配置文件

// 引入组件
import Main from './page/LevelOnePage/main/index'
import Main_Content from './page/LevelTwoPage/main_content/index'
import Main_Foot from './page/LevelTwoPage/main_foot/index'
import Main_Head from './page/LevelTwoPage/main_head/index'

import Pull_Head from './page/LevelTwoPage/pull_head/index'

import Koubei_Content from './page/LevelTwoPage/koubei_content/index'
import Koubei_Head from './page/LevelTwoPage/koubei_head/index'

// 配置路由信息对象
const routes = [
    {
        path: '/',
        component: Main,
        children: [
            //空路由默认主页面
            {
                path: '/',
                name: 'default',
                components: {
                    foot: Main_Foot,
                    head: Main_Head,
                    content: Main_Content,
                },
            },
            //首页
            {
                path: '/home',
                name: 'home',
                components: {
                    foot: Main_Foot,
                    head: Main_Head,
                    content: Main_Content,
                },
                // beforeEnter: (to, from, next) => {
                //     console.log(to);
                //     console.log(from);
                //     next();
                // },
                // beforeUpdate: (to, from, next) => {
                //     console.log("Update to :" + to);
                //     console.log("Update from :" + from);
                //     console.log("Update next :" + next);
                //     next();
                // },
                // beforeLeave: (to, from, next) => {
                //     console.log("Leave to :" + to);
                //     console.log("Leave from :" + from);
                //     console.log("Leave next :" + next);
                //     next();
                // }
            },
            //首页下拉
            {
                path: '/pull',
                name: 'home_pull',
                components: {
                    head: Pull_Head,
                    foot: Main_Foot,
                    content: Main_Content,
                }
            },
            //口碑页面
            {
                path: '/koubei',
                components: {
                    content: Koubei_Content,
                    foot: Main_Foot,
                    head: Koubei_Head,
                }
            },
            //朋友页面
            {
                path: '/pengyou',
                components: {
                    content: Main_Content,
                    foot: Main_Foot,
                    head: Main_Head,
                }
            },
            //个人信息页面
            {
                path: '/wode',
                components: {
                    content: Main_Content,
                    foot: Main_Foot,
                    head: Main_Head,
                }
            }
        ]
    }

];

export default routes;