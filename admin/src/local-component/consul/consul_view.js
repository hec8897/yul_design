const ConsulView = {
    props: ['idx'],
    template: `<div class="con_wrap">
                    <delte-modal tb='consul'></delte-modal>
                    <div class="info_wrap">
                        <h4 class="title">견적문의</h4>
                        <div class="order">
                            <table>
                                <tr>
                                    <th>상담신청일</th>
                                    <td>{{list.InsertDate}}</td>
                                </tr>
                                <tr>
                                    <th>시공분류</th>
                                    <td>{{list.standard}}</td>
                                </tr>
                                <tr>
                                    <th>이름</th>
                                    <td>{{list.reqName}}</td>
                                </tr>
                                <tr>
                                    <th>제목</th>
                                    <td>{{list.tit}}</td>
                                </tr>
                                <tr>
                                    <th>내용</th>
                                    <td>
                                    {{list.reqMemo}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>전화번호</th>
                                    <td>{{list.reqPhone}}</td>
                                </tr>
                                <tr>
                                    <th>공사예정 주소</th>
                                    <td>{{list.reqAddress}}</td>
                                </tr>
                                <tr>
                                    <th>공사면적</th>
                                    <td>{{list.reqMeasure}}</td>
                                </tr>
                                <tr>
                                    <th>공사예정일</th>
                                    <td>{{list.reqDate}}</td>
                                </tr>
                             
                            </table>
                        </div>
                    </div>
                    <div class="btn_wrap">
                        <span class="b_red" @click='OpenDelModal(list.idx)'>삭제</span>
                        <router-link to="/consul" class="b_sgrey" tag='span'>목록</router-link>
                    </div> 
                </div>`,
    data() {
        return {
            list: {
                idx: 2,
                tit: "개발테스트용",
                standard: "사무공간",
                reqName: "개발자",
                reqPhone: "01023866482",
                InsertDate: "2020-01-06 17:30:30",
                reqConsult: "주거공간 견적 신청",
                reqMemo: "상담 메모",
                reqAddress: "서울시 구로구",
                reqMeasure: "30평",
                reqDate: "2020-01-10",
                InsertDate: "2020-01-10"
            }
        }
    },
    mounted() {
        this.GetData()

    },
    methods: {
        OpenDelModal(idx) {
            const Modal = document.getElementById('modal-del')
            Modal.style.display = 'block';
            setTimeout(() => {
                Modal.style.opacity = '1';
            }, 100);
            eventBus.$emit('CounselData', idx)
        },
        GetData() {
            const baseURI = 'api/consul.data.php';
            axios.post(`${baseURI}`, {
                    mode: 'list',
                    idx: this.idx
                })
                .then((result) => {

                    const ResultData = result.data.result[0]
                    if (result.data.phpResult == 'ok') {
                        this.list = ResultData;
                    }

                })
                .catch(err => console.log('Login: ', err));

        }
    }
}
