import card_template from './card_main.html'


// 封装自定义组件标签
const components = [
    //主页面card基础组件(存在CSS无法适用的问题，暂且放弃)
    {
        name: "card",
        content: {
            template: card_template
        }
    }
];

export default components;