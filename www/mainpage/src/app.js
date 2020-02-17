const HtmlRoute = {
    main: 'index.html',
    about: 'about.html',
    portfolio: {
        list: 'portfolio.html',
        view: 'portfolio_view.html'
    },
    consulting: 'consul.html'
}
const getQueryString = function () {
    params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
        params[key] = value;
    });
    return params;
}
const HtmlLinkInsert = {
    Gnb() {
        const NavGnb = document.getElementById('gnb')
        NavGnb.innerHTML = `<nav>
                                <div class="ci"><a href="${HtmlRoute.main}"><img src="images/bi_yul.png" alt="YUL"></a></div>
                                <a href="${HtmlRoute.main}">HOME</a>
                                <a href="${HtmlRoute.about}">ABOUT US</a>
                                <a href="${HtmlRoute.portfolio.list}">PORTFOLIO</a>
                                <a href="${HtmlRoute.consulting}">CONSULTING</a>
                            </nav>`
    },
    sideBarRender() {
        const SideBar = document.getElementById('sidebar')
        SideBar.innerHTML = `<div class="ci_color"><a href="${HtmlRoute.main}"><img src="images/bi_yul.png" alt="YUL"></a></div>
                                <ul>
                                    <li>
                                        <a href="${HtmlRoute.main}" class="h_lnb">HOME</a>
                                    </li>
                                    <li>
                                        <a href="${HtmlRoute.about}" class="h_lnb">ABOUT US</a>
                                    </li>
                                    <li>
                                        <a href="${HtmlRoute.portfolio.list}" class="h_lnb">PORTFOLIO</a>
                                        <ul class="s_lnb">
                                            <li><a href="portfolio.html#/">주거공간</a></li>
                                            <li><a href="portfolio.html#/commercial">상업공간</a></li>
                                            <li><a href="portfolio.html#/office">사무공간</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="${HtmlRoute.consulting}" class="h_lnb">CONSULTING</a>
                                    </li>
                                </ul>
                                <a href="" class="brief">율 디자인</a>
                                <p class="contact">gon2rang@naver.com &nbsp;/&nbsp; 010<span>-</span>4723<span>-</span>7753</p>`

    },
    footerRender() {
        const Footer = document.querySelector('footer')
        Footer.innerHTML = `<a href="${HtmlRoute.main}"><img src="images/bi_yul.png" alt="YUL"></a>
                            <div>
                                <ul class="foot_gnb" id='foot_gnb'>
                                    <li><a href="${HtmlRoute.main}">HOME</a></li>
                                    <li><a href="${HtmlRoute.about}">ABOUT US</a></li>
                                    <li><a href="${HtmlRoute.portfolio.list}">PORTFOLIO</a></li>
                                    <li><a href="${HtmlRoute.consulting}">CONSULTING</a></li>
                                    <li><a href="http://yuldesign.kr/admin" target='_blank'>Admin</a></li>
                                </ul>
                                <ul class="copy">
                                    <li><span>율 디자인</span></li>
                                    <li><span>대표 : </span>지광곤</li>
                                    <li><span>주소 : </span>서울시 광진구 군자동 360-20 광진동양파라곤 1단지 224호</li>
                                    <li><span>전화번호 : </span>010-4723-7753</li>
                                    <li><span>이메일 : </span>gon2rang@naver.com</li>
                                </ul>
                            </div>`

    }
}

const PortViewRender = {
    GetData() {
        getQueryString()
        const baseURI = 'api/get.portfolio.php';
        axios.post(
                baseURI, params
            )
            .then((result) => {
                console.log(result)


                const tabMenu = document.querySelectorAll('.tab_menu')
                const viewTit = document.getElementById('sub_tit');
                const viewHead = document.getElementById('view_head');
                const viewCon = document.getElementById('view_con');
                const PortNav = document.getElementById('port_nav');

                if (result.data.phpResult == 'ok') {
                    const GetData = result.data.result[0]
                    if (GetData.standard == "주거") {
                        tabMenu[0].className = 'on';
                    } else if (GetData.standard == "상업") {
                        tabMenu[1].className = 'on';
                    } else if (GetData.standard == "사무") {
                        tabMenu[2].className = 'on';
                    }
                    viewTit.innerHTML = `<h1>${GetData.standard}공간</h1>`

                    viewHead.innerHTML = `
                    <p>${GetData.tit}</p>
                    <ul>
                        <li>시공형태 : ${GetData.standard}공간</li>
                        <li>시공주소 : ${GetData.reqAddress}</li>
                        <li>시공면적 : ${GetData.reqMeasure}</li>
                        <li>천정 : ${GetData.option1}</li>
                        <li>바닥 : ${GetData.option2}</li>
                        <li>벽체 : ${GetData.option3}</li>
                    </ul>`
                    viewCon.innerHTML = GetData.Desc

                    let Standards = result.data.Standardidx;
                    let Standardidx = [];
                    for (let i = 0; i < Standards.length; i++) {
                        Standardidx.push(Standards[i].idx)
                    }
                    let thisIndex = Standardidx.indexOf(params.idx)
                    let NextPage = thisIndex == Standardidx.length - 1 ? 0 : thisIndex + 1;
                    let AfterPage = thisIndex == 0 ? Standardidx.length - 1 : thisIndex - 1;

                    PortNav.innerHTML = `<a href="portfolio_view.html?idx=${Standardidx[AfterPage]}" class="fl"><img src="images/navi_priv2.png" alt=""></a>
                    <a href="portfolio.html#/" class="btn_list">목록보기</a>
                    <a href="portfolio_view.html?idx=${Standardidx[NextPage]}" class="fr"><img src="images/navi_next2.png" alt=""></a>`
                }





            })
            .catch(err => console.log('Login: ', err));
    }
}

function MokupRender() {
    HtmlLinkInsert.Gnb()
    HtmlLinkInsert.sideBarRender()
    HtmlLinkInsert.footerRender()
}

MokupRender()