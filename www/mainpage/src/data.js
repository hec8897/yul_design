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
    if(CheckBox.checked == false){
        alert('개인정보수집 및 이용에 동의해주세요');
    }
    else if (reqName == "") {
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
                if(result.data.phpResult == 'ok'){
                    alert('상담 신청이 완료되었습니다.')
                    location.reload()
                }
                else{
                    alert('상담 요청이 실패하였습니다. 관리자에게 문의해주세요');
                }
            })
            .catch(err => console.log('Login: ', err));

    }
}