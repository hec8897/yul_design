///잘안됨....보류 ㅋ


Vue.component('list-number', {
    props: ['DataLength','nowpage','Data'],
    template: `<div class="page">
                <span class="none"><i class="material-icons vam">navigate_before</i></span>
                <span class="nobtn" v-for = "(list,i) in lists" v-if = 'i<10' v-on:click='NextPage(i,i+1)'>{{i+1}}</span>
                <span v-on:click='NextList'><i class="material-icons vam">navigate_next</i></span>
            </div>`,
    data(){
        return{
            thisNumber:null,
            thisIndex:0,
            start:null,
            limit:10,
            lists:null              
        }
    },
    created(){
        this.lists = this.Data;
        console.log(this.lists)
    },
    mounted(){
        this.thisNumber = this.nowpage
        this.ActivationBtn()
    },
    methods:{
        ActivationBtn(){
            // 번호 활성화
            const NoBtn = document.querySelectorAll('.nobtn')
            for(let i = 0; i < NoBtn.length; i++){
                NoBtn[i].className = 'nobtn'
            }
            NoBtn[this.thisIndex].className = 'nobtn on'
        },
        NextPage(i,ThisIndex){
            // if(ThisIndex)
            if(this.thisIndex+1 < ThisIndex){
                this.thisNumber+=10;
                this.thisIndex = i
                // this.ActivationBtn()
            }
            else if(this.thisIndex+1 > ThisIndex){
                this.thisNumber-=10;
                this.thisIndex = i
                // this.ActivationBtn()
            }
            eventBus.$emit('NextPage',i)    
        },
        NextList(){

            let NextListNo = (Math.round((this.thisIndex+11)/10))*10;
            eventBus.$emit('NextPage',NextListNo)    
            this.NextPage(NextListNo,NextListNo-1);
            this.start+=10
            this.limit+=10;

        }

    }
  
})


{/* <div class="page">
                <a href="" class="none"><i class="material-icons vam">navigate_before</i></a>
                <a href="" class="on">1</a>
                <a href="">2</a>
                <a href="">3</a>
                <a href="">4</a>
                <a href="">5</a>
                <a href="">6</a>
                <a href="">7</a>
                <a href="">8</a>
                <a href="">9</a>
                <a href="">10</a>
                <a href=""><i class="material-icons vam">navigate_next</i></a>
            </div> */}