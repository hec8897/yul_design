Vue.component('portfolio-bord', {
    template: `   <div class="table_wrap mt40">
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
        <router-link v-bind:to = "'/portfolioview/'+list.idx"  v-for='(list,i) in lists' tag='tr'>
            <td>{{i+1}}</td>
            <td class="tal"><a href="">{{list.tit}}</a></td>
            <td>{{list.standard}}</td>
            <td>{{list.reqAddress}}</td>
            <td>{{list.reqMeasure}}</td>
            <td>{{list.option1}}</td>
            <td>{{list.option2}}</td>
            <td>{{list.option3}}</td>
            <td v-if='list.Activation === 1'>공개</td>
            <td v-else>비공개</td>
        </router-link>
 
    </table>
    <div class="foot_btn">
        <a href="" class="b_add b_blue">등록</a>
    </div>
</div>`,
data(){
    return{
        lists:[
            {
                idx:0,
                tit:'아이들이 행복한 집, 개포LG 자이',
                standard:'주거공간',
                reqAddress:'구로 디지털로 1234 개포LG APT',
                reqMeasure:'20평',
                option1:'적삼목',
                option2:'대리석',
                option3:'적삼목',
                Activation:1
            },
            {
                idx:1,
                tit:'아이들이 행복한 22집, 개포LG 자이',
                standard:'사무공간',
                reqAddress:'구로 디지털로 1234 개포LG APT',
                reqMeasure:'20평',
                option1:'적삼목',
                option2:'대리석',
                option3:'적삼목',
                Activation:0
            }
        ]

    }
}
            
});


                            // <router-link to="/counsul" tag='li' class='has-sub' class-active="has-sub on">
