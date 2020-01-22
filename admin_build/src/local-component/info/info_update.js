Vue.component('info-update', {
  template: "\n    <div class=\"info_wrap\">\n        <h4 class=\"title\">\uAD00\uB9AC\uC790 \uC815\uBCF4</h4>\n        <save-modal mode='user'></save-modal>\n        <div class=\"panel\">\n            <ul>\n                <li><h5>\uC544\uC774\uB514</h5></li>\n                <li><input type=\"text\" placeholder=\"\uC544\uC774\uB514\" id='reqid' v-bind:value='userId' readonly></li>\n                <li><h5>\uBCC0\uACBD\uD560 \uBE44\uBC00\uBC88\uD638</h5></li>\n                <li><input type=\"password\" placeholder=\"\uBE44\uBC00\uBC88\uD638\" id='reqpw'></li>\n                <li><h5>\uC5F0\uB77D\uCC98</h5></li>\n                <li class=\"phone_input\">\n                    <div>\n                    <input type=\"text\" v-bind:value='PhoneFront' id='reqfront'> \n                    - <input type=\"text\" v-bind:value='PhoneMid' id='reqmid'> \n                    - <input type=\"text\" v-bind:value='PhoneLast' id='reqback'>\n                    </div>\n                </li>\n                <li><h5>\uBCC0\uACBD\uD560 \uBE44\uBC00\uBC88\uD638 \uD655\uC778</h5></li>\n                <li><input type=\"password\" placeholder=\"\uBE44\uBC00\uBC88\uD638 \uD655\uC778\" id='re_reqpw'></li>\n            </ul>\n        </div>\n            <div class=\"btn_wrap\">\n            <span class=\"b_blue\" v-on:click='ChangePwCheck'>\uC218\uC815 \uC644\uB8CC</span>\n            <router-link to=\"/\" class=\"b_sgrey\" tag='span'>\uBA54\uC778 \uD654\uBA74</router-link>\n        </div>\n    </div>\n ",
  data: function data() {
    return {
      userId: 'ceomak',
      userName: "개발자",
      Phone: "01000000000",
      PhoneFront: "010",
      PhoneMid: "1000",
      PhoneLast: "2000"
    };
  },
  mounted: function mounted() {
    if (sessionStorage.length > 0) {
      this.userId = sessionStorage.ID;
      this.PhoneFront = sessionStorage.userPhone.substring(0, 3);
      this.PhoneMid = sessionStorage.userPhone.substring(3, 7);
      this.PhoneLast = sessionStorage.userPhone.substring(7, 11);
    }
  },
  created: function created() {
    eventBus.$on('userInfo', function (Data) {
      console.log(Data);

      if (Data == 'change') {
        alert('변경된 정보로 다시 로그인해주세요');
        sessionStorage.clear();
        location.href = "index.html";
      }
    });
  },
  methods: {
    OpenDelModal: function OpenDelModal(Data) {
      var Modal = document.getElementById('modal-alert');
      Modal.style.display = 'block';
      setTimeout(function () {
        Modal.style.opacity = '1';
      }, 100);
      eventBus.$emit('idx', {
        Data: Data
      });
    },
    ChangePwCheck: function ChangePwCheck() {
      var ReqPw = document.getElementById('reqpw').value;
      var ReqRePw = document.getElementById('re_reqpw').value;
      var ReqID = document.getElementById('reqid').value;
      var ReqPhone = document.getElementById('reqfront').value + document.getElementById('reqmid').value + document.getElementById('reqback').value;

      if (ReqRePw == "") {
        alert('변경할 패스워드를 입력해주세요');
      } else {
        if (ReqPw == ReqRePw) {
          var Data = {
            Idx: sessionStorage.idx,
            ChPw: ReqRePw,
            ChPhone: ReqPhone,
            ChId: ReqID
          };
          this.OpenDelModal(Data);
        } else {
          alert('패스워드가 다릅니다');
        }
      }
    }
  }
});