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