Vue.component('list-number', {
    props: ['DataLength','nowpage'],
    template: `<div class="page">
                <a href="" class="none"><i class="material-icons vam">navigate_before</i></a>
                <span class="nobtn" v-for = "i in DataLength" v-on:click='NextPage(i-1,i)'>{{i}}</span>
                <a href=""><i class="material-icons vam">navigate_next</i></a>
            </div>`,
    data(){
        return{
            thisNumber:null,
            thisIndex:1
        }
    },
    created(){
        console.log(this.thisIndex)
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
            NoBtn[(this.thisNumber)/10].className = 'nobtn on'
        },
        NextPage(i,ThisIndex){
            // if(ThisIndex)
            if(this.thisIndex < ThisIndex){
                this.thisNumber+=10;
                this.thisIndex+=1
                this.ActivationBtn()

            }
            else if(this.thisIndex > ThisIndex){
                this.thisNumber-=10;
                this.thisIndex-=1


                this.ActivationBtn()
            }

            eventBus.$emit('NextPage',i)    


            
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