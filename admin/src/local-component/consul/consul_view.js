
const ConsulView = {
    props:['idx'],
    template:`<div class="con_wrap">
                    <delte-modal tb='consul'></delte-modal>
                    <div class="info_wrap">
                        <h4 class="title">견적문의</h4>
                        <div class="order">
                            <table>
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
                                    <th>상담분류</th>
                                    <td>{{list.reqConsult}}</td>
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
                        <router-link to="/" class="b_sgrey">목록</router-link>
                    </div>
                </div>`,
        data(){
            return{
                list:
                    {
                        idx:2,
                        tit:"아파트 30평 견적 문의 드립니다",
                        standard:"사무공간",
                        reqName:"김다운",
                        reqPhone:"01023866482",
                        InsertDate:"2020-01-06 17:30:30",
                        reqConsult:"주거공간 견적 신청",
                        reqMemo:"상담 메모",
                        reqAddress:"서울시 구로구",
                        reqMeasure:"30평",
                        reqDate:"2020-01-10"
                    }
            }
        },
        methods:{
            OpenDelModal(idx){
                const Modal = document.getElementById('modal-del')
                Modal.style.display='block';
                setTimeout(() => {
                    Modal.style.opacity='1';
                }, 100);
                eventBus.$emit('idx',idx)
            }
        }
}
