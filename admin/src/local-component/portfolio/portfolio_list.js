Vue.component('portfolio-bord', {
    template: `<div class="table_wrap mt40">
    <div class="tit_wrap">
        <h4>포트폴리오</h4>
    </div>
    <table class="portfolio">
        <tr>
            <th>No</th>
            <th>제목</th>
            <th>시공형태</th>
            <th>시공주소</th>
            <th>시공면적</th>
            <th>천정</th>
            <th>바닥</th>
            <th>벽체</th>
            <th>노출</th>
        </tr>

        <router-link v-bind:to = "'/portfolioview/'+list.idx"  v-for='(list,i) in lists' tag='tr' v-if='i < limit && i >= start'>

            <td v-if="list.Activation === '0'" class='gray'>{{i+1}}</td>
            <td v-else>{{i+1}}</td>

            <td v-if="list.Activation === '0'" class='tal gray'>{{list.tit}}</td>
            <td class="tal" v-else>{{list.tit}}</td>
            <td v-if="list.Activation === '0'" class='gray'>{{list.standard}}</td>
            <td v-else>{{list.standard}}</td>
            <td v-if="list.Activation === '0'" class='gray'>{{list.reqAddress}}</td>
            <td v-else>{{list.reqAddress}}</td>
            <td v-if="list.Activation === '0'" class='gray'>{{list.reqMeasure}}</td>
            <td v-else>{{list.reqMeasure}}</td>

            <td v-if="list.Activation === '0'" class='gray'>{{list.option1}}</td>
            <td v-else>{{list.option1}}</td>

            <td v-if="list.Activation === '0'" class='gray'>{{list.option2}}</td>
            <td v-else>{{list.option2}}</td>

            <td v-if="list.Activation === '0'" class='gray'>{{list.option3}}</td>
            <td v-else>{{list.option3}}</td>

            <td v-if="list.Activation === '0'" class='gray'>비공개</td>
            <td v-else>공개</td>
        </router-link> 
    </table>
    <list-number v-bind:nowpage = 'this.limit-10' v-bind:DataLength='Math.ceil((this.lists.length)/10)'></list-number>
    <div class="foot_btn">
        <router-link to='portfolioview/new' class="b_add b_blue">등록</router-link>
    </div>
</div>`,
    data() {
        return {
            start: 0,
            limit: null,
            lists: [{
                    idx: 0,
                    tit: '아이들이 행복한 집, 개포LG 자이',
                    standard: '주거공간',
                    reqAddress: '구로 디지털로 1234 개포LG APT',
                    reqMeasure: '20평',
                    option1: '적삼목',
                    option2: '대리석',
                    option3: '적삼목',
                    Activation: "1"
                },
                {
                    idx: 1,
                    tit: '아이들이 행복한 22집, 개포LG 자이',
                    standard: '사무공간',
                    reqAddress: '구로 디지털로 1234 개포LG APT',
                    reqMeasure: '20평',
                    option1: '적삼목',
                    option2: '대리석',
                    option3: '적삼목',
                    Activation: "0"
                }
            ]
              
        }
    },
    mounted() {
        const baseURI = 'api/get.portfolio.list.php';
        axios.post(
                baseURI
            )
            .then((result) => {
                if (result.data.phpResult == 'ok') {
                    this.lists = result.data.result;
                    eventBus.$emit('UpdateList', {
                        DataLength: Math.ceil((this.lists.length) / 10),
                        nowpage: this.limit - 10
                    })
                }
            })
            .catch(err => console.log('Login: ', err));
    },
    created() {
        this.limit = this.start + 10
        eventBus.$on('searchData', (Data) => {
            this.start = 0
            const baseURI = 'api/get.portfolio.list.php';
            axios.post(
                    baseURI,{
                        mode:"search",
                        SearchData:Data
                    }
                )
                .then((result) => {
                    if (result.data.phpResult == 'ok') {
                        this.lists = result.data.result
                    }
                })
                .catch(err => console.log('Login: ', err));
            eventBus.$emit('UpdateList', {
                DataLength: Math.ceil((this.lists.length) / 10),
                nowpage: this.limit - 10
            })
        })

        eventBus.$emit('Listlength', this.lists.length)

        eventBus.$on('NextPage', (Data) => {
            this.start = Data * 10;
            this.limit = (Data * 10) + 10
        })
    }

});
