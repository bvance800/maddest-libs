data = {
    title: 'My Book',
    showDiv: true
}

const app = Vue.createApp({
    //data, functions, template
    data(){
        return data
    },
    methods:{
        changeTitle,
        toggleView
    }
})

function changeTitle(title){
    this.title = title
}
function toggleView(){
    this.showDiv = !this.showDiv
}

app.mount('#app')
