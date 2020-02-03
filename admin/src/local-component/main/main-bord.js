    Vue.component('main-bord', {
        props: ['no'],
        template: `<div class="table_wrap mt50">
                        <div class="tit_wrap">
                            <h4>견적문의</h4>
                            <a href="" class="b_more">더보기 +</a>
                        </div>
                        <table class="need">
                            <tr>
                                <th>No</th>
                                <th>제목</th>
                                <th>분류</th>
                                <th>이름</th>
                                <th>전화번호</th>
                                <th>등록일</th>
                            </tr>
                            <tr v-for="(list,i) in lists" v-if='i < limit && i >= start'>
                                <td>{{i+1}}</td>
                                <td class="tal"><router-link v-bind:to="/view/+list.idx">{{list.tit}}</router-link></td>
                                <td>{{list.standard}}</td>
                                <td>{{list.reqName}}</td>
                                <td>{{list.reqPhone}}</td>
                                <td>{{list.InsertDate}}</td>
                            </tr>
                        </table>    
                        <list-number v-bind:nowpage = 'this.limit-10' v-bind:DataLength='Math.ceil((this.lists.length)/10)'></list-number>
                    </div>`,
        data() {
            return {
                start: 0,
                limit: null,
                lists: [{
                        idx: 0,
                        tit: "아파트 30평 견적 문의 드립니다",
                        standard: "사무공간",
                        reqName: "김다운",
                        reqPhone: "01023866482",
                        InsertDate: "2020-01-06 17:30:30",
                        reqConsult: "주거공간 견적 신청",
                        reqMemo: "상담 메모",
                        reqAddress: "서울시 구로구",
                    },
                    {
                        idx: 1,
                        tit: "아파트 30평 견적 문의 드립니다",
                        standard: "사무공간",
                        reqName: "김다운",
                        reqPhone: "01023866482",
                        InsertDate: "2020-01-06 17:30:30",
                        reqConsult: "주거공간 견적 신청",
                        reqMemo: "상담 메모",
                        reqAddress: "서울시 구로구",
                    }
                ]
            }
        },
        created() {
            this.limit = this.start + 10
            eventBus.$on('searchData', (Data) => {
                this.start = 0
                this.GetDbList(Data)
                //검색 업데이트 펑션이 존재해야하는 자리
                this.lists = [{
                        idx: 0,
                        tit: "30평 견적 문의 드립니다",
                        standard: "사무공간",
                        reqName: "2김다운",
                        reqPhone: "01023866482",
                        InsertDate: "2020-01-06 17:30:30",
                        reqConsult: "주거공간 견적 신청",
                        reqMemo: "상담 메모",
                        reqAddress: "서울시 구로구",
                    }
                ]
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
        },
        mounted() {
            this.GetDbList()
        },
        methods: {
            GetDbList(Data) {
                //최초 데이터 업데이트 axios function //mounted에 실행 (마운트단계에서 업데이트하는방식)
                const baseURI = 'api/consul.data.php';
                axios.post(`${baseURI}`, {
                        mode: 'lists',
                        Data
                    })
                    .then((result) => {
                        const ResultData = result.data.result
                        if (result.data.phpResult == 'ok') {
                            //데이터가 있을경우 실행
                            this.lists = ResultData
                            eventBus.$emit('UpdateList', {
                                DataLength: Math.ceil((this.lists.length) / 10),
                                nowpage: this.limit - 10
                            })
                        }
                    })
                    .catch(err => console.log('Login: ', err));


            }
        }



    })
