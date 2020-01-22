
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//고민해야하는 요소...에디터 API 활용, 이미지를 어떤식으로업로드할것인지...
Vue.component('portfilio-update', {
  props: ['mode'],
  template: " <div class=\"info_wrap\">\n    <h4 class=\"title\">\uD3EC\uD2B8\uD3F4\uB9AC\uC624</h4>\n    <save-modal></save-modal>\n    <delte-modal tb='banner'></delte-modal>\n\n    <div class=\"panel mody\">\n    \n        <ul>\n            <li><h5>\uC791\uC131\uC790 ID</h5></li>\n            <li>\n                <input type=\"text\" placeholder=\"\uC791\uC131\uC790 ID\">\n            </li>\n            <li><h5>\uB178\uCD9C\uC5EC\uBD80</h5></li>\n            <li class=\"select_input\">\n                <div>\n                    <select name=\"\" id=\"\" class=\"\">\n                        <option value=\"\">\uACF5\uAC1C</option>\n                        <option value=\"\">\uBE44\uACF5\uAC1C</option>\n                    </select>\n                </div>\n            </li>\n            <li><h5>\uC2DC\uACF5\uD615\uD0DC</h5></li>\n            <li class=\"select_input\">\n                <div>\n                    <select name=\"\" id=\"\" class=\"\">\n                        <option value=\"\">\uBD84\uB958</option>\n                        <option value=\"\">\uC8FC\uAC70\uACF5\uAC04</option>\n                        <option value=\"\">\uC0C1\uC5C5\uACF5\uAC04</option>\n                        <option value=\"\">\uC0AC\uBB34\uACF5\uAC04</option>\n                    </select>\n                </div>\n            </li>\n            \n            <li><h5>\uC2DC\uACF5\uC8FC\uC18C</h5></li>\n            <li>\n                <input type=\"text\" placeholder=\"\uC8FC\uC18C\" class=\"mody_tit\">\n            </li>\n            <li><h5>\uC2DC\uACF5\uBA74\uC801</h5></li>\n            <li class=\"half\">\n                <input type=\"text\" placeholder=\"\uBA74\uC801\">\n            </li>\n            <li><h5>\uCC9C\uC815</h5></li>\n            <li class=\"half\">\n                <input type=\"text\" placeholder=\"\uCC9C\uC815\">\n            </li>\n            <li><h5>\uBC14\uB2E5</h5></li>\n            <li class=\"half\">\n                <input type=\"text\" placeholder=\"\uBC14\uB2E5\">\n            </li>\n            <li><h5>\uBCBD\uCCB4</h5></li>\n            <li class=\"half\">\n                <input type=\"text\" placeholder=\"\uBCBD\uCCB4\">\n            </li>\n            <li><h5>\uC81C\uBAA9</h5></li>\n            <li>\n                <input type=\"text\" placeholder=\"\uC81C\uBAA9\" class=\"mody_tit\">\n            </li>\n            <li><h5>\uB0B4\uC6A9</h5></li>\n            <li>\n                <textarea name=\"content\" id='summernote'></textarea>\n            </li>\n        </ul>\n    </div>\n    <!-- button area -->\n<div class=\"btn_wrap\">\n    <span class=\"b_red\">\uC0AD\uC81C</span>\n    <span class=\"b_blue\" v-on:click='InsertData'>\uB4F1\uB85D</span>\n    <span class=\"b_sgrey\">\uBAA9\uB85D</span>\n</div>\n</div>\n\n",
  created: function created() {},
  mounted: function mounted() {
    var _$$summernote;

    $('#summernote').summernote((_$$summernote = {
      height: 400,
      lang: 'ko-KR',
      // default: 'en-US'
      focus: false,
      tooltip: false
    }, _defineProperty(_$$summernote, "lang", 'ko-KR'), _defineProperty(_$$summernote, "toolbar", [// [groupName, [list of button]]
    ['style', ['bold', 'underline', 'clear']], ['para', ['paragraph']], ['font', ['strikethrough', 'superscript', 'subscript']], ['fontsize', ['fontsize']], ['color', ['color']], ['height', ['height']], ['hr', ['hr']], ['picture', ['picture']], ['view', ['fullscreen', 'codeview']]]), _$$summernote));
    $('.note-statusbar').hide();
  },
  methods: {
    OpenDelModal: function OpenDelModal(idx) {
      var Modal = document.getElementById('modal-alert');
      Modal.style.display = 'block';
      setTimeout(function () {
        Modal.style.opacity = '1';
      }, 100);
      eventBus.$emit('idx', idx);
    },
    SummerNoteImg: function SummerNoteImg() {},
    InsertData: function InsertData() {
      var textarea = document.querySelector('textarea');
      console.log(textarea.value);
    }
  }
});