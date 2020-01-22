var portFolioPage = {
  props: ['page'],
  template: "\n    <div class=\"con_wrap\">\n    <date-filter></date-filter>\n    <portfolio-bord></portfolio-bord>\n    </div>",
  created: function created() {
    console.log(this.page);
  }
};