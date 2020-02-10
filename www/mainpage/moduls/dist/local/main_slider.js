var mainSlider = {
  template: "         <div class=\"swipe-portfolio\">\n    <div class=\"swiper-wrapper\">\n        <div class=\"swiper-slide\" v-for=\"list in lists\">\n            <a v-bind:href=\"'portfolio_view.html?idx='+list.idx\" v-bind:style=\"{backgroundImage:'url(' +list.portfolioImg+')'}\">\n\n                <div class=\"overf\">\n                    <h2>{{list.portfolioStandard}}</h2>\n                    <p>{{list.tit}}</p>\n                    <span>\uC790\uC138\uD788 \uBCF4\uAE30</span>\n                </div>\n                <img src=\"images/blank_img2.png\" alt=\"blank\">\n            </a>\n        </div>\n    </div>\n    <!-- navi -->\n    <div class=\"swiper-button-next\"><img src=\"images/icon_next.png\" alt=\"\"></div>\n    <div class=\"swiper-button-prev\"><img src=\"images/icon_priv.png\" alt=\"\"></div>\n</div>",
  data: function data() {
    return {
      lists: null
    };
  },
  created: function created() {
    var _this = this;

    var baseURI = 'api/get.portfolio.main.php';
    axios.post(baseURI, {
      mode: "Slider"
    }).then(function (result) {
      if (result.data.phpResult == "ok") {
        _this.lists = result.data.result;
      }
    }).catch(function (err) {
      return console.log('Login: ', err);
    });
  }
};