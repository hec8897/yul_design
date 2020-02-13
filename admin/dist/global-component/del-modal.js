Vue.component('delte-modal', {
  props: ['tb'],
  template: "<div class=\"pop-window fade\" id=\"modal-del\">\n                <div class=\"alert\">\n                    <div class=\"alert_con\">\n                        <i class=\"material-icons red\">error_outline</i>\n                        <p>\uC815\uB9D0\uB85C \uC0AD\uC81C \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?(\uC0AD\uC81C\uD6C4\uC5D4 \uBCF5\uAD6C\uAC00 \uBD88\uAC00\uB2A5\uD569\uB2C8\uB2E4)</p>\n                    </div>\n                    <div class=\"modal_foot\">\n                        <span v-on:click='GetData' class=\"b_red\">\uD655\uC778</span>\n                        <span v-on:click='ModalClose' class=\"b_sgrey\">\uCDE8\uC18C</span>\n                    </div>\n                </div>\n            </div>",
  data: function data() {
    return {
      idx: null,
      thisTarget: null,
      Data: null
    };
  },
  created: function created() {
    var _this = this;

    eventBus.$on('bannerData', function (Data) {
      _this.Data = Data[0];
      _this.thisTarget = 'bannerData';
    });
    eventBus.$on('CounselData', function (Data) {
      _this.Data = Data;
      _this.thisTarget = 'CounselData';
    });
    eventBus.$on('DataAll', function (Data) {
      _this.Data = Data;
      _this.thisTarget = 'portfolio';
    });
    eventBus.$on('MainImg', function (Data) {
      _this.Data = Data;
      _this.thisTarget = 'portfolio';
    });
  },
  methods: {
    ModalClose: function ModalClose() {
      var Modal = document.getElementById('modal-del');
      Modal.style.opacity = '0';
      setTimeout(function () {
        Modal.style.display = 'none';
      }, 100);
    },
    GetData: function GetData() {
      var _this2 = this;

      var baseURI = null;

      if (this.thisTarget == 'bannerData') {
        baseURI = 'api/banner.api.php';
      } else if (this.thisTarget == 'CounselData') {
        baseURI = 'api/consul.data.php';
      } else if (this.thisTarget == 'portfolio') {
        baseURI = 'api/portfolio.save.php';
      }

      axios.post(baseURI, {
        mode: "Delete",
        Data: this.Data
      }).then(function (result) {
        if (result.data.phpResult == 'ok') {
          _this2.ModalClose();

          if (_this2.thisTarget == 'bannerData') {
            eventBus.$emit('bannerDelteResult', "ok");
          } else if (_this2.thisTarget == 'CounselData') {
            router.go(-1);
          } else if (_this2.thisTarget == 'portfolio') {
            if (_this2.Data.mode == "MainImg") {
              eventBus.$emit('MainImgDelteResult', "ok");
            } else if (_this2.Data.mode == "slideImg") {
              eventBus.$emit('MainImgDelteResult', "ok");
            } else {
              router.go(-1);
            }
          }
        } else {
          alert('실패하였습니다 (관리자에게 문의해주세요)');
        }
      }).catch(function (err) {
        return console.log('Login: ', err);
      });
    }
  }
});