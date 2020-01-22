Vue.component('app-header', {
  template: " <div class=\"head_wrap\">\n    <div class=\"head_bi\">\n        <div class=\"bi_img\"><a href=\"\"><img src=\"images/bi_yul.png\" alt=\"yul_bi\"></a></div>\n            <h4>ADMINISTRATOR</h4>\n        </div>\n            <div class=\"head_info\">\n                <span class=\"btn_out\" v-on:click='DestorySessionData'>\uB85C\uADF8\uC544\uC6C3</span>\n            </div>\n        </div>",
  methods: {
    DestorySessionData: function DestorySessionData() {
      var y = confirm("로그아웃 하시겠습니까?");

      if (y == true) {
        sessionStorage.clear();
        location.href = "index.html";
      }
    }
  }
});