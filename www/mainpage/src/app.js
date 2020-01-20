const HtmlRoute = {
    main: 'index.html',
    about: 'about.html',
    portfolio: {
        list: 'portfolio.html',
        view: 'portfolio_view.html'
    },
    consulting: 'consul.html'
}

const HtmlLinkInsert = {
    Gnb() {
        const NavGnb = document.getElementById('gnb')
        NavGnb.innerHTML = `<nav>
                                <div class="ci"><a href=""><img src="images/bi_yul.png" alt="YUL"></a></div>
                                <a href="${HtmlRoute.main}">HOME</a>
                                <a href="${HtmlRoute.about}">ABOUT US</a>
                                <a href="${HtmlRoute.portfolio.list}">PORTFOLIO</a>
                                <a href="${HtmlRoute.consulting}">CONSULTING</a>
                            </nav>`
    },
    sideBarRender(){
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
                                            <li><a href="/">주거공간</a></li>
                                            <li><a href="/">상업공간</a></li>
                                            <li><a href="/">사무공간</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="${HtmlRoute.consulting}" class="h_lnb">CONSULTING</a>
                                    </li>
                                </ul>
                                <a href="" class="brief">율 디자인</a>
                                <p class="contact">gon2rang@naver.com &nbsp;/&nbsp; 010<span>-</span>4723<span>-</span>7753</p>`

    },
    footerRender(){
        const Footer = document.querySelector('footer')
        Footer.innerHTML = `<a href="${HtmlRoute.main}"><img src="images/bi_yul.png" alt="YUL"></a>
                            <div>
                                <ul class="foot_gnb" id='foot_gnb'>
                                    <li><a href="${HtmlRoute.main}">HOME</a></li>
                                    <li><a href="${HtmlRoute.about}">ABOUT US</a></li>
                                    <li><a href="${HtmlRoute.portfolio.list}">PORTFOLIO</a></li>
                                    <li><a href="${HtmlRoute.consulting}">CONSULTING</a></li>
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

function MokupRender(){
    HtmlLinkInsert.Gnb()
    HtmlLinkInsert.sideBarRender()
    HtmlLinkInsert.footerRender()
}

MokupRender()