String.prototype.replaceAll = function (org, dest) {
    return this.split(org).join(dest);
}

DataInsertAxios = () => {
    const CheckBox = document.getElementById('checkbox_1');

    const reqStandardRadio1 = document.getElementById('radio_1');
    const reqStandardRadio2 = document.getElementById('radio_2');
    const reqStandardRadio3 = document.getElementById('radio_3');

    let reqStandard = null;

    if (reqStandardRadio1.checked == true) {
        reqStandard = '주거공간';
    } else if (reqStandardRadio2.checked == true) {
        reqStandard = '상업공간';
    } else if (reqStandardRadio3.checked == true) {
        reqStandard = '주거공간';
    }

    const reqName = document.getElementById('reqname').value;
    const reqPhone = document.getElementById('reqphone').value;
    const reqMemo = document.getElementById('reqmemo').value;
    const reqAddress = document.getElementById('reqaddress').value;
    const reqMeasure = document.getElementById('reqmeasure').value;
    const reqDate = document.getElementById('reqdate').value;
    if (CheckBox.checked == false) {
        alert('개인정보수집 및 이용에 동의해주세요');
    } else if (reqName == "") {
        alert('성함을 입력해주세요');
    } else if (reqPhone == "") {
        alert('연락처를 입력해주세요');
    } else if (reqStandard == null) {
        alert('상담을 선택해주세요');
    } else {
        let DataObj = {
            reqStandard,
            reqName,
            reqPhone,
            reqMemo,
            reqAddress,
            reqMeasure,
            reqDate,
            reqTit: reqStandard + " " + reqAddress + " " + reqMeasure
        }

        const baseURI = 'insert/insert.php';
        axios.post(`${baseURI}`, DataObj)
            .then((result) => {
                if (result.data.phpResult == 'ok') {
                    alert('상담 신청이 완료되었습니다.')
                    location.reload()
                } else {
                    alert('상담 요청이 실패하였습니다. 관리자에게 문의해주세요');
                }
            })
            .catch(err => console.log('Login: ', err));
    }
}

mainBannerGet = () => {
    const baseURI = 'api/get.banner.php';
    axios.post(`${baseURI}`, 'getbanner')
        .then((result) => {
            if (result.data.phpResult == 'no') {
                BannerList = [
                    {
                        bannerImg: 'banner/banner_1.jpg',
                        bannerTit: "YUL INTERIOR",
                        bannerSubTit: "예쁘고 세련된 집에서 살고 싶다!<span>당신의 오랜 꿈을 이뤄드립니다.</span>"
                    },
                    {
                        bannerImg: 'banner/banner_2.jpg',
                        bannerTit: "YUL INTERIOR",
                        bannerSubTit: "오래 머물고 싶은 공간!<span>힐링 공간창조를 위한 노력</span>"
                    },
                    {
                        bannerImg: 'banner/banner_3.jpg',
                        bannerTit: "YUL INTERIOR",
                        bannerSubTit: "트랜디한 가치를 높이다!<span>공간을 바꾸는 기술</span>"
                    }
                ]
            } else {
                BannerList = [
                    {
                        bannerImg: 'admin/'+result.data.result[0].imgLink,
                        bannerTit: "YUL INTERIOR",
                        bannerSubTit: "예쁘고 세련된 집에서 살고 싶다!<span>당신의 오랜 꿈을 이뤄드립니다.</span>"
                    },
                    //임시
                    {
                        bannerImg: 'admin/'+result.data.result[1].imgLink,
                        bannerTit: "YUL INTERIOR",
                        bannerSubTit: "오래 머물고 싶은 공간!<span>힐링 공간창조를 위한 노력</span>"
                    },
                    {
                        bannerImg: 'admin/'+result.data.result[2].imgLink,
                        bannerTit: "YUL INTERIOR",
                        bannerSubTit: "트랜디한 가치를 높이다!<span>공간을 바꾸는 기술</span>"
                    }
                ]

            }
        })
        .then(() => {
            const sliderSection = document.getElementById('sliders')
            let SliderArray = [];
            for (let i = 0; i < BannerList.length; i++) {
                SliderArray.push(`
                        <div class="swiper-slide">
                        <div class="visual" style="background:url('${BannerList[i].bannerImg}') no-repeat top center">
                            <div class="visual_con txt1">
                                <h1>${BannerList[i].bannerTit}</h1>
                                <p>${BannerList[i].bannerSubTit}</p>
                            </div>
                        </div>
                    </div>`)
            }
            let SliderHtml = SliderArray.toString().replaceAll(",", "")
            sliderSection.innerHTML = SliderHtml

            /* Swipe */
            new Swiper('.swiper-container', {
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });

            new Swiper('.swipe-portfolio', {
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                slidesPerView: 3,
                spaceBetween: 20,
                breakpoints: {
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    360: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    }
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });


        })
        .catch(err => console.log('Login: ', err));
}
