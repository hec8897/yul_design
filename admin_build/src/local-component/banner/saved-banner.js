Vue.component('saved-banner-controler', {
  template: "<div class=\"mban_wrap\">\n                    <h4 class=\"title\">\uBA54\uC778\uC774\uBBF8\uC9C0 \uAD00\uB9AC</h4>\n                <div class=\"mban_edit\">\n                \n                <img-modal mode='mainbanner'></img-modal>\n                <delte-modal tb='banner'></delte-modal>\n                <activation-modal></activation-modal>\n\n                <div class=\"edit_ban\" v-for='ImgData in ImgDatas' >\n                    <span href=\"#modal-alert\" class=\"btn_del\" v-on:click='OpenDelModal(ImgData.idx)'>\uC0AD\uC81C</span>\n\n                    <span v-if=\"ImgData.Activation === '1'\"\n                    v-on:click=\"OpenActiveModal(ImgData.Activation,ImgData.idx,'hide')\" \n                    class=\"btn_mody\">\uBE44\uACF5\uAC1C</span>\n\n                    <span v-else\n                    v-on:click=\"OpenActiveModal(ImgData.Activation,ImgData.idx,'new')\" \n                    class=\"btn_mody\">\uACF5\uAC1C</span>\n\n                    <img v-bind:src=\"ImgData.imgLink\" alt=\"main banner 1\" v-if = \"ImgData.Activation === '0'\" style='opacity:0.5'>\n                    <img v-bind:src=\"ImgData.imgLink\" alt=\"main banner 1\" v-else >\n                </div>\n              \n                <div class=\"mban_insert\">\n                    <span v-on:click=\"OpenImgInsertModal('new')\">\n                        <i class=\"material-icons md-48\">image</i><p>\uC774\uBBF8\uC9C0 \uB4F1\uB85D</p>\n                    </span>\n                </div>\n            </div>\n            </div>",
  data: function data() {
    return {
      ImgDatas: [{
        idx: 0,
        imgLink: 'banner/banner_1.jpg',
        Name: '샘플이미지1',
        Activation: '1'
      }, {
        idx: 1,
        imgLink: 'banner/banner_2.jpg',
        Name: '샘플이미지2',
        Activation: '1'
      }, {
        idx: 2,
        imgLink: 'banner/banner_1.jpg',
        Name: '샘플이미지3',
        Activation: '1'
      }]
    };
  },
  mounted: function mounted() {
    this.GetnPostData('default');
  },
  created: function created() {
    var _this = this;

    eventBus.$on('bannerUploadResult', function (Data) {
      if (Data == "ok") {
        _this.GetnPostData('default');
      }
    });
    eventBus.$on('bannerActiveResult', function (Data) {
      if (Data == "ok") {
        _this.GetnPostData('default');
      }
    });
    eventBus.$on('bannerDelteResult', function (Data) {
      if (Data == "ok") {
        _this.GetnPostData('default');
      }
    });
  },
  methods: {
    OpenDelModal: function OpenDelModal(idx) {
      var idxData = this.ImgDatas.filter(function (x) {
        return x.idx == idx;
      });
      console.log(idxData);
      var Modal = document.getElementById('modal-del');
      Modal.style.display = 'block';
      setTimeout(function () {
        Modal.style.opacity = '1';
      }, 100);
      eventBus.$emit('bannerData', idxData);
    },
    OpenActiveModal: function OpenActiveModal(Activation, idx, mode) {
      var Modal = document.getElementById('modal-active');

      PostData = function PostData() {
        Modal.style.display = 'block';
        setTimeout(function () {
          Modal.style.opacity = '1';
        }, 100);
        eventBus.$emit('ActiveModal', {
          idx: idx,
          Activation: Activation,
          mode: 'banner'
        });
      };

      if (mode == 'new') {
        var _Activation = this.ImgDatas.filter(function (x) {
          return x.Activation == 1;
        });

        if (_Activation.length == 3) {
          alert('베너는 3개까지만 공개가능합니다 다른 배너를 비활성화 해주세요');
        } else {
          PostData();
        }
      } else {
        PostData();
      }
    },
    OpenImgInsertModal: function OpenImgInsertModal(Data) {
      var Modal = document.getElementById('modal-add');
      Modal.style.display = 'block';
      setTimeout(function () {
        Modal.style.opacity = '1';
      }, 100);
      eventBus.$emit('idx', Data);
    },
    GetnPostData: function GetnPostData(mode, files) {
      var _this2 = this;

      var baseURI = 'api/banner.api.php';
      axios.post("".concat(baseURI), {
        mode: mode,
        file: files
      }).then(function (result) {
        if (result.data.phpResult == 'ok') {
          _this2.ImgDatas = result.data.result;
        }
      }).catch(function (err) {
        return console.log('Login: ', err);
      });
    }
  }
});