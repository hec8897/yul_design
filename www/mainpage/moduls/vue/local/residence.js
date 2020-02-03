var Residence = {
    props: ['page'],
    template: `
    <div>
    <portfoli-nav></portfoli-nav>

    <div class="protfolio">
    <div class="sub_tit">
        <h1>주거공간</h1>
    </div>

    <div class="ma_portfolio sub">
        <div v-for="list in lists">
            <a v-bind:href="'portfolio_view.html?idx='+list.idx">
                <img v-bind:src="list.portfolioImg" alt="portfolio img">
                <p>시공형태 : {{list.portfolioStandard}} / 시공주소 : {{list.Address}}</p>
            </a>
        </div>

    </div>

    <!--// page -->
    <!-- <div class="paging">
    <a href=""><img src="images/navi_left.gif" alt="priv"></a>
    <a href="">1</a>
    <a href="">2</a>
    <a href="">3</a>
    <a href="">4</a>
    <a href="">5</a>
    <a href="">6</a>
    <a href="">7</a>
    <a href="">8</a>
    <a href="">9</a>
    <a href="">10</a>
    <a href=""><img src="images/navi_right.gif" alt="next"></a>
</div> -->
    <!-- page //-->
    <!--// search -->
    <!-- <div class="search">
        <div class="search_select">
            <select name="" id="">
                <option value="">제목</option>
            </select>
        </div>
        <div class="search_input">
            <a href=''><img src="images/icon_search.png" alt="search"></a>
            <input type="text" placeholder="검색">
        </div>
    </div> -->
    <!-- search //-->

</div>
<!-- portfolio //-->
</div>
    </div>`,
    data:function() {
        return{
            lists:[
                {
                    idx:0,
                    portfolioImg:"",
                    portfolioStandard:"주거공간",
                    Address:"개포 LG자이 APT1"
                },
                {
                    idx:0,
                    portfolioImg:"images/portfolio_2.jpg",
                    portfolioStandard:"주거공간",
                    Address:"개포 LG자이 APT2"
                }
            ]
        }
    },
    created() {
        const baseURI = 'api/get.portfolio.php';
        axios.post(
                baseURI,{
                    mode:"standard",
                    standard:'주거'
                }
            )
            .then((result) => {
                if(result.data.phpResult == "ok"){
                    this.lists = result.data.result
                }
            })
            .catch(err => console.log('Login: ', err));
    }

}