window.addEventListener('DOMContentLoaded', () => {
  const temp = parseFloat(localStorage.getItem('temp'));         // 온도
  const ph = parseFloat(localStorage.getItem('ph'));             // pH
  const turbidity = parseFloat(localStorage.getItem('turbidity')); // 탁도

  const tempResult = document.getElementById('temp-result');
  const phResult = document.getElementById('ph-result');
  const turbidityResult = document.getElementById('turbidity-result');
  const status = document.getElementById('status');
  const recommendation = document.getElementById('recommendation');

  let goodCount = 0;

  // 온도 분석 (20~28도)
  if (!isNaN(temp)) {
    if (temp >= 20 && temp <= 28) {
      tempResult.textContent = '적정';
      goodCount++;
    } else {
      tempResult.textContent = '불량';
    }
  } else {
    tempResult.textContent = '미입력';
  }

  // pH 분석 (6.5~8.5)
  if (!isNaN(ph)) {
    if (ph >= 6.5 && ph <= 8.5) {
      phResult.textContent = '적정';
      goodCount++;
    } else {
      phResult.textContent = '불량';
    }
  } else {
    phResult.textContent = '미입력';
  }

  // 탁도 분석 (0~5 NTU)
  if (!isNaN(turbidity)) {
    if (turbidity >= 0 && turbidity <= 5) {
      turbidityResult.textContent = '적정';
      goodCount++;
    } else {
      turbidityResult.textContent = '불량';
    }
  } else {
    turbidityResult.textContent = '미입력';
  }

  // 종합 상태 및 제안
  if (goodCount === 3) {
    status.textContent = '양호';
    recommendation.textContent = '지금 상태를 유지해 주세요.';
  } else {
    status.textContent = '주의 필요';
    recommendation.textContent = '산소 공급기 가동 및 정화 필터 점검 필요.';
  }
});


// 알림창 화면
