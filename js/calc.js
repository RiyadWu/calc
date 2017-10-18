g_data = {
    keys : [
        '#id-principal',
        '#id-interest-rate',
        '#id-reinvest-no',
    ],
}

var initForm = function () {
   g_data.keys.forEach(function (k) {
       $(k).on('change', function (e) {
           startCalc()
       })
   })
}

var startCalc = function () {
    var principal = $('#id-principal').val()
    var interestRate = $('#id-interest-rate').val()
    var reinvestNo = $('#id-reinvest-no').val()
    var canCalc = principal && interestRate && reinvestNo
    if (canCalc) {
        calc(principal, interestRate, reinvestNo)
    }
}

var calc = function (principal, interestRate, reinvestNo) {
    var backMoneyRate = (1 + interestRate / 100) / reinvestNo
    var res = 0
    var pc = 0
    for (var i = 0; i < reinvestNo; i++) {
        var c = pc + principal * backMoneyRate ** (i + 1)
        pc = c
        res += c
    }
    $('#id-profit').val(res)
}

var init = function () {
    initForm()
}

init()