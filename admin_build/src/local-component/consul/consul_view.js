var ConsulView = {
  props: ['idx'],
  template: "<div class=\"con_wrap\">\n                    <delte-modal tb='consul'></delte-modal>\n                    <div class=\"info_wrap\">\n                        <h4 class=\"title\">\uACAC\uC801\uBB38\uC758</h4>\n                        <div class=\"order\">\n                            <table>\n                                <tr>\n                                    <th>\uC0C1\uB2F4\uC2E0\uCCAD\uC77C</th>\n                                    <td>{{list.InsertDate}}</td>\n                                </tr>\n                                <tr>\n                                    <th>\uC2DC\uACF5\uBD84\uB958</th>\n                                    <td>{{list.standard}}</td>\n                                </tr>\n                                <tr>\n                                    <th>\uC774\uB984</th>\n                                    <td>{{list.reqName}}</td>\n                                </tr>\n                                <tr>\n                                    <th>\uC81C\uBAA9</th>\n                                    <td>{{list.tit}}</td>\n                                </tr>\n                                <tr>\n                                    <th>\uB0B4\uC6A9</th>\n                                    <td>\n                                    {{list.reqMemo}}\n                                    </td>\n                                </tr>\n                                <tr>\n                                    <th>\uC804\uD654\uBC88\uD638</th>\n                                    <td>{{list.reqPhone}}</td>\n                                </tr>\n                                <tr>\n                                    <th>\uACF5\uC0AC\uC608\uC815 \uC8FC\uC18C</th>\n                                    <td>{{list.reqAddress}}</td>\n                                </tr>\n                                <tr>\n                                    <th>\uACF5\uC0AC\uBA74\uC801</th>\n                                    <td>{{list.reqMeasure}}</td>\n                                </tr>\n                                <tr>\n                                    <th>\uACF5\uC0AC\uC608\uC815\uC77C</th>\n                                    <td>{{list.reqDate}}</td>\n                                </tr>\n                             \n                            </table>\n                        </div>\n                    </div>\n                    <div class=\"btn_wrap\">\n                        <span class=\"b_red\" @click='OpenDelModal(list.idx)'>\uC0AD\uC81C</span>\n                        <router-link to=\"/consul\" class=\"b_sgrey\" tag='span'>\uBAA9\uB85D</router-link>\n                    </div> \n                </div>",
  data: function data() {
    var _list;

    return {
      list: (_list = {
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
        reqDate: "2020-01-10"
      }, _list["InsertDate"] = "2020-01-10", _list)
    };
  },
  created: function created() {},
  mounted: function mounted() {
    this.GetData();
  },
  methods: {
    OpenDelModal: function OpenDelModal(idx) {
      var Modal = document.getElementById('modal-del');
      Modal.style.display = 'block';
      setTimeout(function () {
        Modal.style.opacity = '1';
      }, 100);
      eventBus.$emit('CounselData', idx);
    },
    GetData: function GetData() {
      var _this = this;

      var baseURI = 'api/consul.data.php';
      axios.post("" + baseURI, {
        mode: 'list',
        idx: this.idx
      }).then(function (result) {
        var ResultData = result.data.result[0];

        if (result.data.phpResult == 'ok') {
          _this.list = ResultData;
        }
      }).catch(function (err) {
        return console.log('Login: ', err);
      });
    }
  }
};