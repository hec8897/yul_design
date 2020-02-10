Vue.component('portfilio-update', {
  props: ['mode'],
  template: " <div class=\"info_wrap\">\n    <h4 class=\"title\">\uD3EC\uD2B8\uD3F4\uB9AC\uC624</h4>\n    <save-modal></save-modal>\n    <delte-modal tb='portpolio'></delte-modal>\n    <div class=\"panel mody\">\n        <ul>\n            <li><h5>\uC791\uC131\uC790</h5></li>\n            <li>\n                <input \n                type=\"text\" \n                placeholder=\"\uC791\uC131\uC790\" \n                id='reqwriter'\n                v-if=\"mode!='new'\"\n                v-bind:value='Portdata.Writer'\n                />\n                <input \n                type=\"text\" \n                placeholder=\"\uC791\uC131\uC790\" \n                id='reqwriter'\n                v-else\n                />\n            </li>\n            <li><h5>\uC81C\uBAA9</h5></li>\n            <li>\n                <input \n                type=\"text\" \n                placeholder=\"\uC81C\uBAA9\" \n                class=\"mody_tit\" \n                id='reqtit'\n                v-if=\"mode!='new'\"\n                v-bind:value='Portdata.tit'\n                />\n                <input \n                type=\"text\" \n                placeholder=\"\uC81C\uBAA9\" \n                class=\"mody_tit\" \n                id='reqtit'\n                v-else\n                />\n            </li>\n            <li><h5>\uD3EC\uD2B8\uD3F4\uB9AC\uC624\uACF5\uAC1C</h5></li>\n            <li class=\"select_input\">\n                <div>\n                    <select id=\"reqactive\" v-if=\"mode === 'new'\">\n                        <option value=\"1\" selected>\uACF5\uAC1C</option>\n                        <option value=\"0\">\uBE44\uACF5\uAC1C</option>\n                    </select>\n\n                    <select id=\"reqactive\" v-else>\n                        <option v-if='Portdata.Activation == 1' value=\"1\" selected>\uACF5\uAC1C</option>\n                        <option v-else value=\"1\">\uACF5\uAC1C</option>\n\n                        <option v-if=\"Portdata.Activation == 0\" value=\"0\" selected>\uBE44\uACF5\uAC1C</option>\n                        <option v-else value=\"0\">\uBE44\uACF5\uAC1C</option>\n                    </select>\n                </div>\n            </li>\n\n            <li><h5>\uBA54\uC778\uC2AC\uB77C\uC774\uB354</h5></li>\n            <li class=\"select_input\">\n                <div>\n                    <select id=\"reqslider\" v-if=\"mode === 'new'\">\n                        <option value=\"1\">\uC0AC\uC6A9</option>\n                        <option value=\"0\" selected>\uC0AC\uC6A9\uC548\uD568</option>\n                    </select>\n\n                    <select id=\"reqslider\" v-else>\n                        <option v-if='Portdata.MainSlider == 1' value=\"1\" selected>\uC0AC\uC6A9</option>\n                        <option v-else value=\"1\">\uC0AC\uC6A9</option>\n\n                        <option v-if=\"Portdata.MainSlider == 0\" value=\"0\" selected>\uC0AC\uC6A9\uC548\uD568</option>\n                        <option v-else value=\"0\">\uC0AC\uC6A9\uC548\uD568</option>\n                    </select>\n                </div>\n            </li>\n            <li><h5>\uC2DC\uACF5\uD615\uD0DC</h5></li>\n            <li class=\"select_input\">\n                <div>\n                    <select id=\"standard\" v-if=\"mode === 'new'\">\n                        <option value=\"\">\uBD84\uB958</option>\n                        <option value=\"\uC8FC\uAC70\">\uC8FC\uAC70\uACF5\uAC04</option>\n                        <option value=\"\uC0C1\uC5C5\">\uC0C1\uC5C5\uACF5\uAC04</option>\n                        <option value=\"\uC0AC\uBB34\">\uC0AC\uBB34\uACF5\uAC04</option>\n                    </select>\n\n                    <select id=\"standard\" v-else>\n                        <option value=\"\">\uBD84\uB958</option>\n\n                        <option value=\"\uC8FC\uAC70\" v-if=\"Portdata.standard === '\uC8FC\uAC70'\" selected>\uC8FC\uAC70\uACF5\uAC04</option>\n                        <option value=\"\uC8FC\uAC70\" v-else>\uC8FC\uAC70\uACF5\uAC04</option>\n\n                        <option value=\"\uC0C1\uC5C5\" v-if=\"Portdata.standard === '\uC0C1\uC5C5'\" selected>\uC0C1\uC5C5\uACF5\uAC04</option>\n                        <option value=\"\uC0C1\uC5C5\" v-else>\uC0C1\uC5C5\uACF5\uAC04</option>\n\n                        <option value=\"\uC0AC\uBB34\" v-if=\"Portdata.standard === '\uC0AC\uBB34'\" selected>\uC0AC\uBB34\uACF5\uAC04</option>\n                        <option value=\"\uC0AC\uBB34\" v-else>\uC0AC\uBB34\uACF5\uAC04</option>\n\n                    </select>\n                </div>\n            </li>\n            <li><h5>\uC2DC\uACF5\uC8FC\uC18C</h5></li>\n            <li>\n                <input \n                type=\"text\" \n                placeholder=\"\uC8FC\uC18C\" \n                id='reqaddress' \n                class=\"mody_tit\"\n                v-if=\"mode!='new'\"\n                v-bind:value='Portdata.reqAddress'/>\n\n                <input \n                type=\"text\" \n                placeholder=\"\uC8FC\uC18C\" \n                id='reqaddress' \n                class=\"mody_tit\"\n                v-else\n                />\n\n            </li>\n            <li><h5>\uC2DC\uACF5\uBA74\uC801</h5></li>\n            <li class=\"half\">\n                <input \n                type=\"text\" \n                placeholder=\"\uBA74\uC801\" \n                id='measure'\n                v-if=\"mode!='new'\"\n                v-bind:value='Portdata.reqMeasure'\n                />\n                <input \n                type=\"text\" \n                placeholder=\"\uBA74\uC801\" \n                id='measure'\n                v-else\n                />\n            </li>\n            <li><h5>\uCC9C\uC7A5</h5></li>\n            <li class=\"half\">\n                <input \n                type=\"text\" \n                placeholder=\"\uCC9C\uC7A5\" \n                id='ceiling'\n                v-if=\"mode!='new'\"\n                v-bind:value='Portdata.option1'\n                />\n\n                <input \n                type=\"text\" \n                placeholder=\"\uCC9C\uC7A5\" \n                id='ceiling'\n                v-else\n                />\n            </li>\n            <li><h5>\uBC14\uB2E5</h5></li>\n            <li class=\"half\">\n                <input \n                type=\"text\" \n                placeholder=\"\uBC14\uB2E5\" \n                id='floor'\n                v-if=\"mode!='new'\"\n                v-bind:value='Portdata.option2'\n                />\n\n                <input \n                type=\"text\" \n                placeholder=\"\uBC14\uB2E5\" \n                id='floor'\n                v-else\n                />\n            </li>\n            <li><h5>\uBCBD\uCCB4</h5></li>\n            <li class=\"half\">\n                <input \n                type=\"text\" \n                placeholder=\"\uBCBD\uCCB4\" \n                id='walls'\n                v-if=\"mode!='new'\"\n                v-bind:value='Portdata.option3'\n                />\n\n                <input \n                type=\"text\" \n                placeholder=\"\uBCBD\uCCB4\" \n                id='walls'\n                v-else\n                />\n            </li>\n            <li><h5>\uB300\uD45C\uC774\uBBF8\uC9C0</h5></li>\n            <li v-if=\"mode === 'new'\">\n                <input \n                type=\"file\" \n                v-on:change='SelectMainImg'\n                ref=\"mainimg\" \n                placeholder='\uAC00\uB85C\uD615\uC774\uBBF8\uC9C0'\n                >\n            </li>\n            <li v-else-if=\"mode!='new' && Portdata.MainImg.length < 8\">\n                <input \n                type=\"file\" \n                v-on:change='SelectMainImg'\n                ref=\"mainimg\" \n                >\n            </li>\n\n            <li v-else>\n            <a v-bind:href='\"../port_upload/main_img/\"+Portdata.MainImg' target='blank'>\uBBF8\uB9AC\uBCF4\uAE30</a>\n            <span class='b_red' v-on:click='MainImgDelte(mode)'>\uC0AD\uC81C\uD6C4 \uC7AC\uB4F1\uB85D</span>\n            </li>\n\n            <li><h5>\uB0B4\uC6A9</h5></li>\n            <li>\n                <iframe src=\"summernote.html\" id='summernote_iframe'></iframe>\n            </li>\n        </ul>\n    </div>\n    <div class=\"btn_wrap\">\n        <span class=\"b_red\" v-if=\"mode != 'new'\" v-on:click=\"DeleteData(mode)\">\uC0AD\uC81C</span>\n        <span class=\"b_blue\" v-if=\"mode === 'new'\" v-on:click=\"InsertData('new')\">\uB4F1\uB85D</span>\n        <span class=\"b_blue\" v-else v-on:click=\"InsertData('update')\">\uC218\uC815</span>\n        <span class=\"b_sgrey\" v-on:click = \"NoneSave\">\uBAA9\uB85D</span>\n    </div>\n    </div>",
  data: function data() {
    return {
      UploadMainImg: null,
      Portdata: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    InsertData = new FormData();

    if (this.mode != 'new') {
      this.GetData();
    }

    eventBus.$on('MainImgDelteResult', function (Data) {
      if (Data == "ok") {
        _this.GetData();
      }
    });
  },
  updated: function updated() {
    var DESC = this.Portdata.Desc;
    var DescImg = this.Portdata.DescImg.split(",");
    $('#summernote_iframe').load(function () {
      for (var i = 0; i < DescImg.length; i++) {
        $('#summernote_iframe').get(0).contentWindow.ImgArray.push(DescImg[i]);
      }
    });
    $('#summernote_iframe').load(function () {
      $('#summernote_iframe').get(0).contentWindow.InsertDesc(DESC);
    });
  },
  methods: {
    OpenDelModal: function OpenDelModal(Data, Mode) {
      var Modal = document.getElementById('modal-del');
      Modal.style.display = 'block';
      setTimeout(function () {
        Modal.style.opacity = '1';
      }, 100);
      eventBus.$emit(Mode, Data);
    },
    DeleteData: function DeleteData(idx) {
      var DescImg = this.Portdata.DescImg.split(",");
      var Data = {
        idx: idx,
        ImgArray: DescImg,
        mode: "DataAll"
      };
      this.OpenDelModal(Data, "DataAll");
    },
    SelectMainImg: function SelectMainImg() {
      this.UploadMainImg = this.$refs.mainimg.files[0];
      console.log(this.UploadMainImg);
    },
    MainImgDelte: function MainImgDelte(idx) {
      var MainImg = this.Portdata.MainImg;
      var Data = {
        idx: idx,
        ImgArray: MainImg,
        mode: "MainImg"
      };
      this.OpenDelModal(Data, "MainImg");
    },
    NoneSave: function NoneSave() {
      var NewImgArray = $('#summernote_iframe').get(0).contentWindow.NewImgArray;
      var baseURI = 'api/portfolio.save.php';
      axios.post(baseURI, {
        mode: "NoneSave",
        Data: NewImgArray
      }).then(function (result) {
        router.go(-1);
      }).catch(function (err) {
        return console.log('Login: ', err);
      }); //작성중 저장안하고 이탈(이탈시 서버업로드된 이미지 삭제)
    },
    GetData: function GetData() {
      var _this2 = this;

      var baseURI = 'api/get.portfolio.data.php';
      axios.post(baseURI, {
        idx: this.mode
      }).then(function (result) {
        if (result.data.phpResult == 'no') {
          _this2.Portdata = {
            idx: 0,
            tit: "아이들이 행복한집, 개포 LG자이 아파트",
            Writer: "개발자",
            standard: "주거",
            reqAddress: "서울시 금천구 구로 디지털로 1234",
            reqMeasure: "100평",
            option1: "적상목",
            option2: "바닥",
            option3: "적삼목",
            MainImg: "../upload/202001141651works_9.jpg",
            Desc: "<p>123</p>",
            Activation: 0,
            MainSlider: 0
          };
        } else {
          _this2.Portdata = result.data.result[0];
        }
      }).catch(function (err) {
        return console.log('Login: ', err);
      });
    },
    InsertData: function (_InsertData) {
      function InsertData(_x) {
        return _InsertData.apply(this, arguments);
      }

      InsertData.toString = function () {
        return _InsertData.toString();
      };

      return InsertData;
    }(function (mode) {
      var reqTit = document.getElementById('reqtit');
      var Activate = document.getElementById('reqactive');
      var MainSlider = document.getElementById('reqslider');
      var Writer = document.getElementById('reqwriter');
      var Standard = document.getElementById('standard');
      var Address = document.getElementById('reqaddress');
      var Measure = document.getElementById('measure');
      var Ceiling = document.getElementById('ceiling');
      var Floor = document.getElementById('floor');
      var Walls = document.getElementById('walls');
      var sumNote = document.getElementById('summernote_iframe').contentWindow.document.getElementById("summernote");

      function DataFromInsert(modes, MainImg, idx) {
        if (reqTit.value == "") {
          alert('제목은필수로 작성해주세요');
          reqTit.focus();
        } else if (Standard.value == "") {
          alert('시공형태는 필수로 선택해주세요');
          Standard.focus();
        } else {
          InsertData.append('idx', idx);
          InsertData.append('mode', modes);
          InsertData.append('ReqTit', reqTit.value);
          InsertData.append('Activation', Activate.value);
          InsertData.append('Writer', Writer.value);
          InsertData.append('Standard', Standard.value);
          InsertData.append('Address', Address.value);
          InsertData.append('Measure', Measure.value);
          InsertData.append('Ceiling', Ceiling.value);
          InsertData.append('Floor', Floor.value);
          InsertData.append('Walls', Walls.value);
          InsertData.append('MainImg', MainImg);
          InsertData.append('desc', sumNote.value);
          InsertData.append('Mainslider', MainSlider.value);
          InsertData.append('desc_img', $('#summernote_iframe').get(0).contentWindow.ImgArray);
          var baseURI = 'api/portfolio.save.php';
          axios.post(baseURI, InsertData).then(function (result) {
            console.log(result);

            if (result.data.phpResult == 'ok') {
              alert('작성이완료되었습니다');
              router.push({
                path: '/portfolio'
              });
            }
          }).catch(function (err) {
            return console.log('Login: ', err);
          });
        }
      }

      if (mode == "new") {
        DataFromInsert(this.mode, this.UploadMainImg);
      } else {
        var idx = this.mode;
        DataFromInsert('update', this.UploadMainImg, idx);
      }
    })
  }
});