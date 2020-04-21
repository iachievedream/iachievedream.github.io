new Vue({
    el: '#resume',
    data: {
        title:{
            content1:'Contect',
            content2:'Experience',
            content3:'Skills',
            content4:'Demo(本機電腦要開，ubuntu環境)',
            content5:'Github上的筆記',
            content6:'Github上的專案'
        },        
        name: {
            chinese: '傅獻慶',
            english: 'FU,SIAN-CING',
            id: 'iachievedream',
            content:'喜歡學習以及分享，透過自學往程式這條路的人。喜歡兩門科學，物理以及經濟學，且用程式來完成。'
        },
        contect:{
            github:'https://github.com/iachievedream',
            githubicon:'../picture/github.svg',
            fb:'https://www.facebook.com/profile.php?id=100002572888672',
            fb_incon:'../picture/facebook.svg',
            web:'https://physicalconceptsstation.wordpress.com/',
            web_icon:'../picture/internet.svg'
        },
        experiences:[
            { text:'後端工程師' },
            { text:'前端工程師與測試工程師' },
            { text:'國立大學研究助理' },
            { text:'機械操作人員' }
        ],
        // skills:[
        //     { text:'html' },
        //     { text:'CSS' },
        //     { text:'PHP' },
        //     { text:'MySQL' }
        // ]
        skills:{
            text1:'html',
            text2:'CSS',
            text3:'PHP',
            text4:'MySQL',
            text5:'Laravel',
        },
        demo:{
            text1:'http://virtualboxubuntu1.fuwork.xyz:81/',
            text2:'https://virtualboxubuntu1.fuwork.xyz/',
            text3:'http://virtualboxubuntu1.fuwork.xyz/'
        },
        demobook:{
            text1:'https://github.com/iachievedream/demo_code',
            text2:'https://github.com/iachievedream/notebook'
        },
        demo_code:{
            text1:'https://github.com/iachievedream/blog-laravel',
            text2:'https://github.com/iachievedream/blog-laravel-jwt'
        }
    }
})