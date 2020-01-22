
Vue.component('img-modal', {
  props: ['mode'],
  template: "<div class=\"pop-window fade\" id=\"modal-add\">\n    <div class=\"mban_input\">\n        <div class=\"input_head\">\n            <h4>\uBA54\uC778 \uBC30\uB108 \uB4F1\uB85D</h4>\n            <a href=\"javascript:;\" data-dismiss=\"modal\"><i class=\"mte i_close mte-2x\"></i></a>\n        </div>\n        <div class=\"input_con\">\n            <ul>\n                <li><h5>\uB4F1\uB85D\uD560 \uC774\uBBF8\uC9C0</h5></li>\n                <li>\n                    <div class=\"attach\">\n                        <input type=\"text\" id=\"file2\" placeholder=\"\uC774\uBBF8\uC9C0 \uB4F1\uB85D\uD558\uAE30\" readonly>\n                        <label for=\"file_img2\">\n                            <span class=\"b_file\">\uCCA8\uBD80</span>\n                        </label>\n                        <input \n                            type=\"file\" \n                            id=\"file_img2\" \n                            v-on:change=\"GetImgForm()\"\n                            ref=\"bannerimg\"\n                        >\n                    </div>\n                </li>\n      \n            </ul>\n        </div>\n        <!-- foot -->\n        <div class=\"modal_foot\">\n            <span class=\"b_blue\" v-on:click='PostData'>\uB4F1\uB85D</span>\n            <span v-on:click='ModalClose' class=\"b_sgrey\">\uCDE8\uC18C</span>\n        </div>\n    </div>\n</div>",
  data: function data() {
    return {
      UploadImg: null
    };
  },
  methods: {
    GetImgForm: function GetImgForm() {
      var File = this.$refs.bannerimg.files[0];
      console.log(File);

      if (File.size > 10000000) {
        alert('파일 사이즈가 너무 큽니다');
      } else {
        if (File.type == 'image/jpeg' || File.type == 'image/png' || File.type == 'image/gif') {
          this.UploadImg = File;
          document.getElementById('file2').value = this.UploadImg.name;
        } else {
          alert('이미지 형식만 선택해주세요');
        }
      }
    },
    PostData: function PostData() {
      var _this = this;

      if (this.UploadImg == null) {
        alert("이미지를 선택해주세요");
      } else {
        var formData = new FormData();
        formData.append('bannerImg', this.UploadImg);
        var baseURI = 'api/banner.api.php';
        axios.post(baseURI, formData).then(function (result) {
          if (result.data.phpResult == 'ok') {
            eventBus.$emit('bannerUploadResult', "ok");

            _this.ModalClose();
          }
        }).catch(function (err) {
          return console.log('Login: ', err);
        });
      }
    },
    ModalClose: function ModalClose() {
      var Modal = document.getElementById('modal-add');
      Modal.style.opacity = '0';
      setTimeout(function () {
        Modal.style.display = 'none';
      }, 100);
    }
  }
});
/* <div class="pop-window fade" id="modal-add">
    <div class="mban_input">
        <!-- head -->
        <div class="input_head">
            <h4>메인 배너 등록</h4>
            <a href="javascript:;" data-dismiss="modal"><i class="mte i_close mte-2x"></i></a>
        </div>
        <!-- con -->
        <div class="input_con">
            <ul>
                <li><h5>등록할 이미지</h5></li>
                <li>
                    <div class="attach">
                        <input type="text" id="file2" placeholder="이미지 등록하기" readonly>
                        <label for="file_img2">
                            <span class="b_file">첨부</span>
                        </label>
                        <input type="file" id="file_img2" onchange="document.getElementById('file2').value=this.value;">
                        <a href="" class="b_red">삭제</a>
                    </div>
                </li>
                <li><h5>링크 사용</h5></li>
                <li class="input_chk">
                    <div class="radio radio-css radio-danger">
                        <input type="radio" name="add" id="radio_css_4">
                        <label for="radio_css_4">링크없음</label>
                    </div>
                    <div class="radio radio-css radio-danger">
                        <input type="radio" name="add" id="radio_css_5">
                        <label for="radio_css_5">현재 창</label>
                    </div>
                    <div class="radio radio-css radio-danger">
                        <input type="radio" name="add" id="radio_css_6">
                        <label for="radio_css_6">새 창</label>
                    </div>
                </li>
                <li><h5>링크 URL</h5></li>
                <li><input type="text" placeholder="http://"></li>
            </ul>
        </div>
        <!-- foot -->
        <div class="modal_foot">
            <span class="b_blue">등록</span>
            <span v-on:click='ModalClose' class="b_sgrey">취소</span>
        </div>
    </div>
</div> */