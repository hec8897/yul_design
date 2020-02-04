Vue.component('save-modal', {
    props: ['mode'],
    template: "<div class=\"pop-window fade\" id=\"modal-alert\">\n                <div class=\"alert\">\n                    <div class=\"alert_con\">\n                        <i class=\"material-icons red\">error_outline</i>\n                        <p>\uC218\uC815\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?{{mode}}</p>\n                    </div>\n                    <div class=\"modal_foot\">\n                        <span v-on:click='PostData' class=\"b_red\">\uD655\uC778</span>\n                        <span v-on:click='ModalClose' class=\"b_sgrey\">\uCDE8\uC18C</span>\n                    </div>\n                </div>\n            </div>",
    data: function data() {
      return {
        idx: null,
        Data: null
      };
    },
    mounted: function mounted() {
      this.GetData();
    },
    updated: function updated() {},
    created: function created() {
      idx = null;
      eventBus.$on('idx', function (value) {
        idx = value;
        return idx;
      });
    },
    methods: {
      ModalClose: function ModalClose() {
        var Modal = document.getElementById('modal-alert');
        Modal.style.opacity = '0';
        setTimeout(function () {
          Modal.style.display = 'none';
        }, 100);
      },
      GetData: function GetData(a) {
        var _this = this;
  
        if (this.mode == 'user') {
          eventBus.$on('idx', function (Data) {
            _this.Data = Data.Data;
          });
        }
      },
      PostData: function PostData() {
        var _this2 = this;
  
        if (this.mode == 'user') {
          var baseURI = 'api/user.proc.php';
          axios.post("" + baseURI, {
            mode: 'user_update',
            idx: this.Data.Idx,
            chId: this.Data.ChId,
            chPw: this.Data.ChPw,
            chPhone: this.Data.ChPhone
          }).then(function (result) {
            if (result.data.phpResult == 'ok') {
              alert('변경이완료되었습니다');
  
              _this2.ModalClose();
  
              eventBus.$emit('userInfo', "change");
            }
          }).catch(function (err) {
            return console.log('Login: ', err);
          });
        }
      }
    }
  });