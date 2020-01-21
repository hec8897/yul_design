const portFolioPageView = {
    props:['idx'],
    template:`
    <div class="con_wrap">
    <portfilio-update v-bind:mode='idx'></portfilio-update>
    </div>`,
    created(){
    }
}