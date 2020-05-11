new Vue({
    el: '#resume',
    data: {
        title:{
            content1:'Contect',
            content2:'Experience',
            content3:'Skills',
            content4:'Demo(AWS之外為本機電腦)',
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
            githubicon:'picture/github.svg',
            fb:'https://www.facebook.com/profile.php?id=100002572888672',
            fb_incon:'picture/facebook.svg',
            web:'https://physicalconceptsstation.wordpress.com/',
            web_icon:'picture/internet.svg'
        },
        experiences:[
            { text:'後端工程師' },
            { text:'前端工程師與測試工程師' },
            { text:'國立大學研究助理' },
            { text:'機械操作人員' }
        ],
        skills:{
            skill1:'html',
            skill2:'CSS',
            skill3:'PHP',
            skill4:'MySQL',
            skill5:'Laravel',
        },
        demo:{
            title1:'AWS：',
            title2:'http：',
            title3:'https：',
            title4:'測試 laravel：',
            href1:'http://aws.fuwork.nctu.me/',
            href2:'http://virtualboxubuntu1.fuwork.xyz:81/',
            href3:'https://virtualboxubuntu1.fuwork.xyz/',
            href4:'http://virtualboxubuntu1.fuwork.xyz/',
            content1:'aws.fuwork.nctu.me',
            content2:'virtualboxubuntu1：81',
            content3:'virtualboxubuntu1',
            content4:'virtualboxubuntu1：80'
        },
        demobook:{
            title1:'主要整理筆記：',
            title2:'舊筆記，還需重新整理：',
            href1:'https://github.com/iachievedream/demo_code',
            href2:'https://github.com/iachievedream/notebook',
            content1:'demo_code',
            content2:'notebook',
        },
        demo_code:{
            title1:'laravel 的 blog(含筆記)：',
            title2:'laravel 的 blog，採用JWT方式：',
            href1:'https://github.com/iachievedream/blog-laravel',
            href2:'https://github.com/iachievedream/blog-laravel-jwt',
            hrefcontent1:'blog-laravel',
            hrefcontent2:'blog-laravel-jwt',
            movie1:'實際操作影片：',
            movie2:'實際操作影片：',
            moviehref2:'https://www.youtube.com/watch?v=yn9q4NXd7BM&list=PLfBT9P5LG1z8n61SkoeK5nxIdS83LwZi3&index=1',
            moviehref1:'https://www.youtube.com/watch?v=PgSaVoqxjTo&list=PLfBT9P5LG1z8n61SkoeK5nxIdS83LwZi3&index=2',
            moviecontent1:'demo',
            moviecontent2:'demo',
        }
    }
})