var Residence = {
  props: ['page'],
  template: "\n    <div>\n    <portfoli-nav></portfoli-nav>\n\n    <div class=\"protfolio\">\n    <div class=\"sub_tit\">\n        <h1>\uC8FC\uAC70\uACF5\uAC04</h1>\n    </div>\n\n    <div class=\"ma_portfolio sub\">\n\n    <div v-for=\"list in lists\">\n                    <a v-bind:href=\"'portfolio_view.html?idx='+list.idx\">\n                        <div>\n                        <img v-bind:src=\"list.portfolioImg\" alt=\"portfolio img\">\n                        </div>\n                        <img src=\"images/blank_img.png\" alt=\"blank\">\n                    </a>\n                    <p>\uC2DC\uACF5\uD615\uD0DC : {{list.portfolioStandard}} / \uC2DC\uACF5\uC8FC\uC18C : {{list.Address}}</p>\n                </div>\n        <!-- <div v-for=\"list in lists\">\n            <a v-bind:href=\"'portfolio_view.html?idx='+list.idx\">\n                <img v-bind:src=\"list.portfolioImg\" alt=\"portfolio img\">\n            </a>\n        </div> -->\n\n    </div>\n\n    <!--// page -->\n    <!-- <div class=\"paging\">\n    <a href=\"\"><img src=\"images/navi_left.gif\" alt=\"priv\"></a>\n    <a href=\"\">1</a>\n    <a href=\"\">2</a>\n    <a href=\"\">3</a>\n    <a href=\"\">4</a>\n    <a href=\"\">5</a>\n    <a href=\"\">6</a>\n    <a href=\"\">7</a>\n    <a href=\"\">8</a>\n    <a href=\"\">9</a>\n    <a href=\"\">10</a>\n    <a href=\"\"><img src=\"images/navi_right.gif\" alt=\"next\"></a>\n</div> -->\n    <!-- page //-->\n    <!--// search -->\n    <!-- <div class=\"search\">\n        <div class=\"search_select\">\n            <select name=\"\" id=\"\">\n                <option value=\"\">\uC81C\uBAA9</option>\n            </select>\n        </div>\n        <div class=\"search_input\">\n            <a href=''><img src=\"images/icon_search.png\" alt=\"search\"></a>\n            <input type=\"text\" placeholder=\"\uAC80\uC0C9\">\n        </div>\n    </div> -->\n    <!-- search //-->\n\n</div>\n<!-- portfolio //-->\n</div>\n    </div>",
  data: function data() {
    return {
      lists: [{
        idx: 0,
        portfolioImg: "",
        portfolioStandard: "주거공간",
        Address: "개포 LG자이 APT1"
      }, {
        idx: 0,
        portfolioImg: "images/portfolio_2.jpg",
        portfolioStandard: "주거공간",
        Address: "개포 LG자이 APT2"
      }]
    };
  },
  created: function created() {
    var _this = this;

    var baseURI = 'api/get.portfolio.php';
    axios.post(baseURI, {
      mode: "standard",
      standard: '주거'
    }).then(function (result) {
      if (result.data.phpResult == "ok") {
        _this.lists = result.data.result;
      }
    }).catch(function (err) {
      return console.log('Login: ', err);
    });
  }
};