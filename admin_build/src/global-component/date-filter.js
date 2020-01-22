Vue.component('date-filter', {
  template: "<div class=\"search_wrap\">\n                <div class=\"panel\">\n                    <ul>\n                        <li><h5>\uB4F1\uB85D\uC77C</h5></li>\n                        <li>\n                            <div class=\"daterange\">\n                                <label for=\"datepicker-default\"><i class=\"material-icons md-18\">date_range</i></label>\n                                <input type=\"text\" class=\"\" name=\"start\" id=\"datepicker-default\" placeholder=\"\uB0A0\uC9DC\uC120\uD0DD\"/>\n                            </div>\n                            ~\n                            <div class=\"daterange\">\n                                <label for=\"datepicker-autoClose\"><i class=\"material-icons md-18\">date_range</i></label>\n                                <input type=\"text\" class=\"\" name=\"end\" id=\"datepicker-autoClose\" placeholder=\"\uB0A0\uC9DC\uC120\uD0DD\" />\n                            </div>\n                            <div class='search_btn'><i class=\"material-icons\" id='search' v-on:click='SearchDateData'>search</i></div>\n                        </li>\n                        <li><h5>\uAC80\uC0C9\uC885\uB958</h5></li>\n                        <li class=\"search_input\">\n                            <div>\n                                <select id=\"select_class\">\n                                        <option value=\"tit\" selected>\uC2DC\uACF5\uBD84\uB958</option>\n                                </select>\n                            </div>\n                            <div>\n                                <select id='search_value'>\n                                    <option value=\"\">\uBD84\uB958\uC635\uC158</option>\n                                    <option value=\"home\">\uC8FC\uAC70\uACF5\uAC04</option>\n                                    <option value=\"office\">\uC0AC\uBB34\uACF5\uAC04</option>\n                                    <option value=\"store\">\uC0C1\uC5C5\uACF5\uAC04</option>\n\n                                </select>                                \n                            </div>\n                            <div class='search_btn'><i class=\"material-icons\" id='search' v-on:click='SeachStandard'>search</i></div>\n                        </li>\n                    </ul>\n                </div>\n            </div>",
  mounted: function mounted() {
    this.dataPicker();
  },
  data: function data() {
    return {
      DateSearch: null,
      DataValue: null
    };
  },
  methods: {
    dataPicker: function dataPicker() {
      handleDatepicker();
    },
    SearchDateData: function SearchDateData() {
      var FrontDate = document.getElementById('datepicker-default');
      var BackDate = document.getElementById('datepicker-autoClose'); // const SelectClass = document.getElementById('select_class');
      // const SearchValue = document.getElementById('search_value');

      if (FrontDate.value == "") {
        alert('기준날짜를 선택해주세요');
        FrontDate.focus();
      } else if (BackDate.value == "") {
        alert('기준날짜를 선택해주세요');
        BackDate.focus();
      } else {
        this.DateSearch = {
          FrontDate: FrontDate.value,
          BackDate: BackDate.value
        };

        if (this.DataValue == null) {
          eventBus.$emit('searchData', {
            FrontDate: FrontDate.value,
            BackDate: BackDate.value // 검색 조건 => main-bord.js

          });
        } else {
          eventBus.$emit('searchData', {
            FrontDate: FrontDate.value,
            BackDate: BackDate.value,
            SearchValue: this.DataValue // 검색 조건 => main-bord.js

          });
        }
      }
    },
    SeachStandard: function SeachStandard() {
      var SearchValue = document.getElementById('search_value');

      if (SearchValue.value == "") {
        alert('검색할 분류를 선택해주세요');
        SearchValue.focus();
      } else {
        this.DataValue = SearchValue.value;
        console.log(this.DateSearch);

        if (this.DateSearch == null) {
          eventBus.$emit('searchData', {
            SearchValue: SearchValue.value // 검색 조건 => main-bord.js

          });
        } else {
          eventBus.$emit('searchData', {
            FrontDate: FrontDate.value,
            BackDate: BackDate.value,
            SearchValue: this.DataValue // 검색 조건 => main-bord.js

          });
        }
      }
    }
  }
});