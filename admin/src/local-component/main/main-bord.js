    Vue.component('main-bord', {
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

                        <list-number v-bind:DataLength='this.lists.length'></list-number>

                    </div>`,
    data() {
        return {
            start:0,
            limit:10,
            lists:[
                {
                    idx:0,
                    tit:"아파트 30평 견적 문의 드립니다",
                    standard:"사무공간",
                    reqName:"김다운",
                    reqPhone:"01023866482",
                    InsertDate:"2020-01-06 17:30:30",
                    reqConsult:"주거공간 견적 신청",
                    reqMemo:"상담 메모",
                    reqAddress:"서울시 구로구",
                },
                {
                    idx:1,
                    tit:"용인시에 있는 단독주택 47평 견적의뢰 합니다.",
                    standard:"주거공간",
                    reqName:"김김김",
                    reqPhone:"01023866487",
                    InsertDate:"2020-01-06 17:30:30",
                    reqConsult:"주거공간 견적 신청",
                    reqMemo:"상담 메모",
                    reqAddress:"서울시 구로구",
                },
                {
                    idx:0,
                    tit:"아파트 30평 견적 문의 드립니다",
                    standard:"사무공간",
                    reqName:"김다운",
                    reqPhone:"01023866482",
                    InsertDate:"2020-01-06 17:30:30",
                    reqConsult:"주거공간 견적 신청",
                    reqMemo:"상담 메모",
                    reqAddress:"서울시 구로구",
                },
                {
                    idx:1,
                    tit:"용인시에 있는 단독주택 47평 견적의뢰 합니다.",
                    standard:"주거공간",
                    reqName:"김김김",
                    reqPhone:"01023866487",
                    InsertDate:"2020-01-06 17:30:30",
                    reqConsult:"주거공간 견적 신청",
                    reqMemo:"상담 메모",
                    reqAddress:"서울시 구로구",
                },
                {
                    idx:0,
                    tit:"아파트 30평 견적 문의 드립니다",
                    standard:"사무공간",
                    reqName:"김다운",
                    reqPhone:"01023866482",
                    InsertDate:"2020-01-06 17:30:30",
                    reqConsult:"주거공간 견적 신청",
                    reqMemo:"상담 메모",
                    reqAddress:"서울시 구로구",
                },
                {
                    idx:1,
                    tit:"용인시에 있는 단독주택 47평 견적의뢰 합니다.",
                    standard:"주거공간",
                    reqName:"김김김",
                    reqPhone:"01023866487",
                    InsertDate:"2020-01-06 17:30:30",
                    reqConsult:"주거공간 견적 신청",
                    reqMemo:"상담 메모",
                    reqAddress:"서울시 구로구",
                },
                   {
                    idx:0,
                    tit:"아파트 30평 견적 문의 드립니다",
                    standard:"사무공간",
                    reqName:"김다운",
                    reqPhone:"01023866482",
                    InsertDate:"2020-01-06 17:30:30",
                    reqConsult:"주거공간 견적 신청",
                    reqMemo:"상담 메모",
                    reqAddress:"서울시 구로구",
                },
                {
                    idx:1,
                    tit:"용인시에 있는 단독주택 47평 견적의뢰 합니다.",
                    standard:"주거공간",
                    reqName:"김김김",
                    reqPhone:"01023866487",
                    InsertDate:"2020-01-06 17:30:30",
                    reqConsult:"주거공간 견적 신청",
                    reqMemo:"상담 메모",
                    reqAddress:"서울시 구로구",
                },
                {
                    idx:0,
                    tit:"아파트 30평 견적 문의 드립니다",
                    standard:"사무공간",
                    reqName:"김다운",
                    reqPhone:"01023866482",
                    InsertDate:"2020-01-06 17:30:30",
                    reqConsult:"주거공간 견적 신청",
                    reqMemo:"상담 메모",
                    reqAddress:"서울시 구로구",
                },
                {
                    idx:1,
                    tit:"용인시에 있는 단독주택 47평 견적의뢰 합니다.",
                    standard:"주거공간",
                    reqName:"김김김",
                    reqPhone:"01023866487",
                    InsertDate:"2020-01-06 17:30:30",
                    reqConsult:"주거공간 견적 신청",
                    reqMemo:"상담 메모",
                    reqAddress:"서울시 구로구",
                },
                {
                    idx:0,
                    tit:"아파트 30평 견적 문의 드립니다",
                    standard:"사무공간",
                    reqName:"김다운",
                    reqPhone:"01023866482",
                    InsertDate:"2020-01-06 17:30:30",
                    reqConsult:"주거공간 견적 신청",
                    reqMemo:"상담 메모",
                    reqAddress:"서울시 구로구",
                },
                {
                    idx:1,
                    tit:"용인시에 있는 단독주택 47평 견적의뢰 합니다.",
                    standard:"주거공간",
                    reqName:"김김김",
                    reqPhone:"01023866487",
                    InsertDate:"2020-01-06 17:30:30",
                    reqConsult:"주거공간 견적 신청",
                    reqMemo:"상담 메모",
                    reqAddress:"서울시 구로구",
                }
            ]
        }
    },
    created(){

        eventBus.$on('searchData',(Data)=>{
            //데이터 업데이트 axios 필요
            this.lists = [
                {
                    idx:0,
                    tit:"30평 견적 문의 드립니다",
                    standard:"사무공간",
                    reqName:"2김다운",
                    reqPhone:"01023866482",
                    InsertDate:"2020-01-06 17:30:30",
                    reqConsult:"주거공간 견적 신청",
                    reqMemo:"상담 메모",
                    reqAddress:"서울시 구로구",
                },
                {
                    idx:1,
                    tit:"47평 견적의뢰 합니다.",
                    standard:"주거공간",
                    reqName:"김김",
                    reqPhone:"01023866487",
                    InsertDate:"2020-01-06 17:30:30",
                    reqConsult:"주거공간 견적 신청",
                    reqMemo:"상담 메모",
                    reqAddress:"서울시 구로구",
                }
            ]

        })

        eventBus.$emit('Listlength',this.lists.length)



    },
    methods:{
 
      
    }
    

    
})
