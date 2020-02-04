const mainPortfolio = {
    template: ` <div class="ma_portfolio">
    <div v-for="list in lists">
                    <a v-bind:href="'portfolio_view.html?idx='+list.idx">
                        <div>
                        <img v-bind:src="list.portfolioImg" alt="portfolio img">
                        </div>
                        <img src="images/blank_img.png" alt="blank">
                    </a>
                    <p>시공형태 : {{list.portfolioStandard}} / 시공주소 : {{list.Address}}</p>
                </div>
    </div>
    </div>
</div>`,
    data() {
        return {
            lists:null
        }
    },
    mounted() {

        const baseURI = 'api/get.portfolio.main.php';
        axios.post(
                baseURI, {
                    mode: "All",
                }
            )
            .then((result) => {
                if (result.data.phpResult == "ok") {
                    this.lists = result.data.result
                }
            })
            .catch(err => console.log('Login: ', err));
    }
}