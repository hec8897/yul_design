const mainSlider = {
    template: `<div class="swipe-portfolio">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="list in lists">
            <a v-bind:href="'portfolio_view.html?idx='+list.idx">
                <div class="overf">
                    <h2>{{list.portfolioStandard}}</h2>
                    <p>{{list.tit}}</p>
                    <span>자세히 보기</span>
                </div>
                <div class='slidImg' v-bind:style='background-image:url(list.portfolioImg)'></div>
                <!-- <img v-bind:src="list.portfolioImg" alt="sample img"> -->
            </a>
        </div>
    </div>
    <div class="swiper-button-next"><img src="images/icon_next.png" alt=""></div>
    <div class="swiper-button-prev"><img src="images/icon_priv.png" alt=""></div>
</div>`,
    data() {
        return {
            lists:null
        }
    },
    created() {
        const baseURI = 'api/get.portfolio.main.php';
        axios.post(
                baseURI, {
                    mode: "Slider",
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