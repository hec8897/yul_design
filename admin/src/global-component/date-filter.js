Vue.component('date-filter', {
    template: `<div class="search_wrap">
                <div class="panel">
                    <ul>
                        <li><h5>등록일(//일시보류중)</h5></li>
                        <li>
                            <div class="daterange">
                                <label for="datepicker-default"><i class="material-icons md-18">date_range</i></label>
                                <input type="text" class="" name="start" id="datepicker-default" placeholder="날짜선택"/>
                            </div>
                            ~
                            <div class="daterange">
                                <label for="datepicker-autoClose"><i class="material-icons md-18">date_range</i></label>
                                <input type="text" class="" name="end" id="datepicker-autoClose" placeholder="날짜선택" />
                            </div>
                        </li>
                        <li><h5>검색종류</h5></li>
                        <li class="search_input">
                            <div>
                                <select name="" id="select_class" class="">
                                    <option value="">분류</option>
                                    <option value="tit">제목</option>
                                    <option value="name">이름</option>
                                </select>
                            </div>
                            <div>
                                <input type="text" placeholder="검색" id='search_value'>
                                <i class="material-icons" id='search' v-on:click='SearchData'>search</i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>`,
            mounted(){
                this.dataPicker()
            },
            methods:{
                dataPicker(){
                    handleDatepicker();
                },
                SearchData(){
                    const FrontDate = document.getElementById('datepicker-default');
                    const BackDate = document.getElementById('datepicker-autoClose');
                    const SelectClass = document.getElementById('select_class');
                    const SearchValue = document.getElementById('search_value');

                    eventBus.$emit('searchData', {
                        FrontDate:FrontDate.value,
                        BackDate:BackDate.value,
                        SelectClass:SelectClass.value,
                        SearchValue:SearchValue.value
                    })
                }
            }

        })
