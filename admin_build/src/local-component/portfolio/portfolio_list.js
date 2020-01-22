Vue.component('portfolio-bord', {
  template: "   <div class=\"table_wrap mt40\">\n    <div class=\"tit_wrap\">\n        <h4>\uD3EC\uD2B8\uD3F4\uB9AC\uC624</h4>\n    </div>\n    <table class=\"portfolio\">\n        <tr>\n            <th>No</th>\n            <th>\uC81C\uBAA9</th>\n            <th>\uC2DC\uACF5\uD615\uD0DC</th>\n            <th>\uC2DC\uACF5\uC8FC\uC18C</th>\n            <th>\uC2DC\uACF5\uBA74\uC801</th>\n            <th>\uCC9C\uC815</th>\n            <th>\uBC14\uB2E5</th>\n            <th>\uBCBD\uCCB4</th>\n            <th>\uB178\uCD9C</th>\n        </tr>\n        <router-link v-bind:to = \"'/portfolioview/'+list.idx\"  v-for='(list,i) in lists' tag='tr' v-if='i < limit && i >= start'>\n            <td>{{i+1}}</td>\n            <td class=\"tal\"><a href=\"\">{{list.tit}}</a></td>\n            <td>{{list.standard}}</td>\n            <td>{{list.reqAddress}}</td>\n            <td>{{list.reqMeasure}}</td>\n            <td>{{list.option1}}</td>\n            <td>{{list.option2}}</td>\n            <td>{{list.option3}}</td>\n            <td v-if='list.Activation === 1'>\uACF5\uAC1C</td>\n            <td v-else>\uBE44\uACF5\uAC1C</td>\n        </router-link> \n    </table>\n    <list-number v-bind:nowpage = 'this.limit-10' v-bind:DataLength='Math.ceil((this.lists.length)/10)'></list-number>\n    <div class=\"foot_btn\">\n        <router-link to='portfolioview/new' class=\"b_add b_blue\">\uB4F1\uB85D</router-link>\n    </div>\n</div>",
  data: function data() {
    return {
      start: 0,
      limit: null,
      lists: [{
        idx: 0,
        tit: '아이들이 행복한 집, 개포LG 자이',
        standard: '주거공간',
        reqAddress: '구로 디지털로 1234 개포LG APT',
        reqMeasure: '20평',
        option1: '적삼목',
        option2: '대리석',
        option3: '적삼목',
        Activation: 1
      }, {
        idx: 1,
        tit: '아이들이 행복한 22집, 개포LG 자이',
        standard: '사무공간',
        reqAddress: '구로 디지털로 1234 개포LG APT',
        reqMeasure: '20평',
        option1: '적삼목',
        option2: '대리석',
        option3: '적삼목',
        Activation: 0
      }, {
        idx: 0,
        tit: '아이들이 행복한 집, 개포LG 자이',
        standard: '주거공간',
        reqAddress: '구로 디지털로 1234 개포LG APT',
        reqMeasure: '20평',
        option1: '적삼목',
        option2: '대리석',
        option3: '적삼목',
        Activation: 1
      }, {
        idx: 1,
        tit: '아이들이 행복한 22집, 개포LG 자이',
        standard: '사무공간',
        reqAddress: '구로 디지털로 1234 개포LG APT',
        reqMeasure: '20평',
        option1: '적삼목',
        option2: '대리석',
        option3: '적삼목',
        Activation: 0
      }, {
        idx: 0,
        tit: '아이들이 행복한 집, 개포LG 자이',
        standard: '주거공간',
        reqAddress: '구로 디지털로 1234 개포LG APT',
        reqMeasure: '20평',
        option1: '적삼목',
        option2: '대리석',
        option3: '적삼목',
        Activation: 1
      }, {
        idx: 1,
        tit: '아이들이 행복한 22집, 개포LG 자이',
        standard: '사무공간',
        reqAddress: '구로 디지털로 1234 개포LG APT',
        reqMeasure: '20평',
        option1: '적삼목',
        option2: '대리석',
        option3: '적삼목',
        Activation: 0
      }, {
        idx: 0,
        tit: '아이들이 행복한 집, 개포LG 자이',
        standard: '주거공간',
        reqAddress: '구로 디지털로 1234 개포LG APT',
        reqMeasure: '20평',
        option1: '적삼목',
        option2: '대리석',
        option3: '적삼목',
        Activation: 1
      }, {
        idx: 1,
        tit: '아이들이 행복한 22집, 개포LG 자이',
        standard: '사무공간',
        reqAddress: '구로 디지털로 1234 개포LG APT',
        reqMeasure: '20평',
        option1: '적삼목',
        option2: '대리석',
        option3: '적삼목',
        Activation: 0
      }, {
        idx: 0,
        tit: '아이들이 행복한 집, 개포LG 자이',
        standard: '주거공간',
        reqAddress: '구로 디지털로 1234 개포LG APT',
        reqMeasure: '20평',
        option1: '적삼목',
        option2: '대리석',
        option3: '적삼목',
        Activation: 1
      }, {
        idx: 1,
        tit: '아이들이 행복한 22집, 개포LG 자이',
        standard: '사무공간',
        reqAddress: '구로 디지털로 1234 개포LG APT',
        reqMeasure: '20평',
        option1: '적삼목',
        option2: '대리석',
        option3: '적삼목',
        Activation: 0
      }, {
        idx: 0,
        tit: '아이들이 행복한 집, 개포LG 자이',
        standard: '주거공간',
        reqAddress: '구로 디지털로 1234 개포LG APT',
        reqMeasure: '20평',
        option1: '적삼목',
        option2: '대리석',
        option3: '적삼목',
        Activation: 1
      }, {
        idx: 1,
        tit: '아이들이 행복한 22집, 개포LG 자이',
        standard: '사무공간',
        reqAddress: '구로 디지털로 1234 개포LG APT',
        reqMeasure: '20평',
        option1: '적삼목',
        option2: '대리석',
        option3: '적삼목',
        Activation: 0
      }, {
        idx: 0,
        tit: '아이들이 행복한 집, 개포LG 자이',
        standard: '주거공간',
        reqAddress: '구로 디지털로 1234 개포LG APT',
        reqMeasure: '20평',
        option1: '적삼목',
        option2: '대리석',
        option3: '적삼목',
        Activation: 1
      }, {
        idx: 1,
        tit: '아이들이 행복한 22집, 개포LG 자이',
        standard: '사무공간',
        reqAddress: '구로 디지털로 1234 개포LG APT',
        reqMeasure: '20평',
        option1: '적삼목',
        option2: '대리석',
        option3: '적삼목',
        Activation: 0
      }, {
        idx: 0,
        tit: '아이들이 행복한 집, 개포LG 자이',
        standard: '주거공간',
        reqAddress: '구로 디지털로 1234 개포LG APT',
        reqMeasure: '20평',
        option1: '적삼목',
        option2: '대리석',
        option3: '적삼목',
        Activation: 1
      }, {
        idx: 1,
        tit: '아이들이 행복한 22집, 개포LG 자이',
        standard: '사무공간',
        reqAddress: '구로 디지털로 1234 개포LG APT',
        reqMeasure: '20평',
        option1: '적삼목',
        option2: '대리석',
        option3: '적삼목',
        Activation: 0
      }]
    };
  },
  created: function created() {
    var _this = this;

    this.limit = this.start + 10;
    eventBus.$on('searchData', function (Data) {
      _this.start = 0; //데이터 업데이트 axios 필요

      _this.lists = [{
        idx: 0,
        tit: '아이들이 행복한 집, 22개포LG 자이',
        standard: '주거공간',
        reqAddress: '구로 디지털로 1234 개포LG APT',
        reqMeasure: '20평',
        option1: '적삼목',
        option2: '대리석',
        option3: '적삼목',
        Activation: 1
      }]; //데이터 업데이트 axios 필요

      eventBus.$emit('UpdateList', {
        DataLength: Math.ceil(_this.lists.length / 10),
        nowpage: _this.limit - 10
      });
    });
    eventBus.$emit('Listlength', this.lists.length);
    eventBus.$on('NextPage', function (Data) {
      _this.start = Data * 10;
      _this.limit = Data * 10 + 10;
    });
  }
});