Vue.component('activation-modal', {
  props: ['tb'],
  template: "<div class=\"pop-window fade\" id=\"modal-active\">\n                <div class=\"alert\">\n                    <div class=\"alert_con\">\n                        <i class=\"material-icons blue\">error_outline</i>\n                        <p>\uBC30\uB108\uB97C \uBCC0\uACBD \uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?</p>\n                    </div>\n                    <div class=\"modal_foot\">\n                        <span class=\"b_blue\" v-on:click='PostData'>\uD655\uC778</span>\n                        <span v-on:click='ModalClose' class=\"b_sgrey\">\uCDE8\uC18C</span>\n                    </div>\n                </div>\n            </div>",
  data: function data() {
    return {
      mode: null,
      idx: null,
      Activation: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    eventBus.$on('ActiveModal', function (Data) {
      _this.mode = Data.mode;
      _this.idx = Data.idx;
      _this.Activation = Data.Activation;
    });
  },
  methods: {
    ModalClose: function ModalClose() {
      var Modal = document.getElementById('modal-active');
      Modal.style.opacity = '0';
      setTimeout(function () {
        Modal.style.display = 'none';
      }, 100);
    },
    PostData: function PostData() {
      var _this2 = this;

      var baseURI = 'api/banner.api.php';
      axios.post("".concat(baseURI), {
        mode: "activation",
        idx: this.idx,
        activation: this.Activation == 1 ? 0 : 1
      }).then(function (result) {
        if (result.data.phpResult == 'ok') {
          eventBus.$emit('bannerActiveResult', "ok");

          _this2.ModalClose();
        }
      }).catch(function (err) {
        return console.log('Login: ', err);
      }); //배너 비활성화 로직
    }
  }
});