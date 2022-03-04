const app = Vue.createApp({
data(){
    return {
        name: ''
    };
},
methods:{
    setName(event){
        this.name = event.target.value;
    },
    submitForm(){
        alert("Submitted!");
    },
}

});
app.mount('#Login_Page');