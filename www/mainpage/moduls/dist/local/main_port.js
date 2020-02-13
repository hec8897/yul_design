var mainPortfolio = {
  template: " <div class=\"ma_portfolio\">\n    <div v-for=\"list in lists\">\n                    <a v-bind:href=\"'portfolio_view.html?idx='+list.idx\">\n                        <div>\n                        <img v-bind:src=\"list.portfolioImg\" alt=\"portfolio img\">\n                        </div>\n                        <img src=\"images/blank_img.png\" alt=\"blank\">\n                    </a>\n                    <p>\uC2DC\uACF5\uD615\uD0DC : {{list.portfolioStandard}} / \uC2DC\uACF5\uC8FC\uC18C : {{list.Address}}</p>\n                </div>\n    </div>\n    </div>\n</div>",
  data: function data() {
    return {
      lists: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    var baseURI = 'api/get.portfolio.main.php';
    axios.post(baseURI, {
      mode: "All"
    }).then(function (result) {
      if (result.data.phpResult == "ok") {
        _this.lists = result.data.result;
      }
    }).catch(function (err) {
      return console.log('Login: ', err);
    });
  }
};