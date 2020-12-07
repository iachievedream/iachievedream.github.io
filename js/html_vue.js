new Vue({
    el: '#resume',
    data: {
        title:{
            content1:'Contect',
            content2:'Experience',
            content3:'Skills',
            content4:'Demo',
            content5:'Github上的筆記',
            content6:'Github上的專案'
        },        
        name: {
            chinese: '傅獻慶',
            english: 'FU,SIAN-CING',
            id: 'iachievedream',
            content:'喜歡學習以及分享，透過自學往程式這條路的人。喜歡兩門科學，物理以及經濟學，並且想結合程式來完成。'
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
            skill1:'HTML',
            skill2:'CSS',
            skill3:'PHP',
            skill4:'MySQL',
            skill5:'Laravel'
        },
        demo:{
            title1:'CodeIgniter3：',
            href1:'http://a.fuwork.tk/',
            content1:'a.fuwork.tk',
            description1:' (測試帳號：demo，密碼：demo)',
            title2:'Laravel6：',
            href2:'http://a.fuwork.tk:8000/',
            content2:'a.fuwork.tk:8000',
            description2:' 基本留言板(有middleware做管理權限，測試帳號：demo@demo，密碼：12345678)'
        },
        demobook:{
            title1:'主要整理筆記：',
            title2:'舊筆記，待重新統整：',
            href1:'https://github.com/iachievedream/demo_code',
            href2:'https://github.com/iachievedream/notebook',
            content1:'demo_code',
            content2:'notebook'
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
            moviecontent2:'demo'
        }
    }
})