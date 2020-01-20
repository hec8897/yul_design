///잘안됨....보류 ㅋ


Vue.component('list-number', {
    props: ['DataLength','nowpage'],
    template: `<div class="page">
                <span class="none" v-if="start === 1"><i class="material-icons vam">navigate_before</i></span>
                <span v-else v-on:click='FrontList'><i class="material-icons vam">navigate_before</i></span>

                <span class="nobtn" v-for = "j in limit" v-if = 'j <= limit && j >= start' v-on:click='NextPage(j,j+1)'>{{j}}</span>

                <span v-on:click='NextList' v-if='DataLength > 10 && limit < DataLength '><i class="material-icons vam">navigate_next</i></span>
                <span class='none' v-else><i class="material-icons vam">navigate_next</i></span>

            </div>`,
    data(){
        return{
            thisNumber:null,
            thisIndex:0,
            start:1,
            limit:10,
            lists:null              
        }
    },
    created(){
        this.thisNumber = this.DataLength
        if(this.DataLength <= 10){
            this.limit = this.DataLength
        }

        eventBus.$on('UpdateList',(Data)=>{
            console.log(Data.DataLength)
            console.log(Data.nowpage)
            this.limit = Data.DataLength;
            this.thisNumber = Data.nowpage
            
        })

    },
    mounted(){
        this.thisNumber = this.nowpage
        const NoBtn = document.querySelectorAll('.nobtn')
        NoBtn[0].className = 'nobtn on'
        // this.ActivationBtn(this.start)
    },
    updated(){
        const NoBtn = document.querySelectorAll('.nobtn')
        NoBtn[0].className = 'nobtn on'
        // this.ActivationBtn(1)

    },
    methods:{
        ActivationBtn(j){

            const NoBtn = document.querySelectorAll('.nobtn')
            const LimitNo = this.limit - 10;

            for(let i = 0; i < NoBtn.length; i++){
                NoBtn[i].className = 'nobtn'
            }

            // if(this.limit)
            // console.log(LimitNo)

            if(this.limit == this.DataLength){
                console.log(j%10)

                NoBtn[j%10-1].className = 'nobtn on'
            }
            else{
                NoBtn[j-1-LimitNo].className = 'nobtn on'
            }
        },
        NextPage(i,ThisIndex){
            if(this.thisIndex+1 < ThisIndex){
                this.thisNumber+=10;
                this.thisIndex = i
                this.ActivationBtn(i)
            }
            else if(this.thisIndex+1 > ThisIndex){
                this.thisNumber-=10;
                this.thisIndex = i
                this.ActivationBtn(i)
            }
            eventBus.$emit('NextPage',i-1)    

        },
        NextList(){
            this.start+=10;
            if(this.limit+10 > this.DataLength){
                this.limit = this.DataLength
                
            }
            else{
                this.limit+=10;
                this.ActivationBtn(this.start)
            }
            this.NextPage(this.start,this.start+1)

        },
        FrontList(){
            
            this.start-=10;
            // this.limit-=10;
            this.limit = Math.ceil((this.limit-10)/10)*10

            // console.log(this.start)
            if(this.start == 1){
                this.limit = 10;
            }

            this.NextPage(this.start,this.start+1)
            this.ActivationBtn(this.start)

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