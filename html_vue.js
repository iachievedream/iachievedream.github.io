new Vue({
    el: '#resume',
    data: {
        title:{
            content1:'Contect',
            content2:'Experience',
            content3:'Skills',
            content4:'Demo'
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
            { text:'機械操作人員' },
            { text:'國立大學研究助理' },
            { text:'前端工程師與測試工程師' },
            { text:'後端工程師' }
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
            text4:'MySQL'
        }
    }
})