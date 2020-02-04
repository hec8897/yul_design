const consulPage = {
    props:['no'],
    template:`
    <div class="con_wrap">
        <date-filter mode='consul'></date-filter>
        <main-bord v-bind:no='no'></main-bord>
    </div>`
}