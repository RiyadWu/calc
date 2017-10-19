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

// 无管理费
// 每月回款=〔本金×月利率×(1＋月利率)＾还款月数〕/〔(1＋月利率)＾还款月数-1〕
// 每月利息=本金×月利率×〔(1+月利率)^还款月数-(1+月利率)^(还款月序号-1)〕/〔(1+月利率)^还款月数-1〕
//
// 有管理费
// 每月回款=本金×月利率×(1+月利率)^(回款月序号-1)/((1+月利率)^回款月数-1)
// 每月利息= （1-管理费率）×本金×月利率×((1+月利率)^还款月数-(1+月利率)^(还款月序号-1))/〔(1+月利率)^还款月数-1〕

// 总本息
// 总本息 = 每月回款 X ((1+月利率)^总月数 - 1)/月利率

var test = function () {
    var x = 10000 // 本金
    var a = 0.011 // 月利率
    var k = 0.01 // 管理费
    // 本金回款
    var res = x * a * (1 + a) ** 0 / ((1 + a) ** 12 - 1)
    var resc = 784.111357670991
    // 利息
    var res1 = (1 - k) * x * a * ((1 + a) ** 12 - (1 + a) ** 0) / ((1 + a) ** 12 - 1)
    var res1c = 108.89999999999999

    var res11 = x * a * ((1 - k)*(1 + a) ** 12 + k * (1 + a)**0 )/ ((1 + a) ** 12 - 1)
    // 总回款
    var res2 =  res + res1
    var res2c = 893.0113577

    console.log(res, res1, res2, res11)

    var res = x * a * (1 + a) ** 0 / ((1 + a) ** 12 - 1)
    var res1 = (1 - k) * x * a * ((1 + a) ** 12 - (1 + a) ** 0) / ((1 + a) ** 12 - 1)
    var res11 = x * a * ((1 - k)*(1 + a) ** 12 + k * (1 + a)**0 )/ ((1 + a) ** 12 - 1)

    var ax = x * a
    var axd1 = ax / ((1 + a) ** 12 - 1)
    var a1 = 1 + a
    // res + res1: x * a * (1 + a) ** 0 / ((1 + a) ** 12 - 1) + (1 - k) * x * a * ((1 + a) ** 12 - (1 + a) ** 0) / ((1 + a) ** 12 - 1)
    //          = ax * ((1 + a) ** 0  + (1 - k) * ((1 + a) ** 12 - (1 + a) ** 0))) / ((1 + a) ** 12 - 1)
    //          = axd1 * ((1 + a) ** 0  + (1 - k) * ((1 + a) ** 12 - (1 + a) ** 0)))
    //          = axd1 * (a1 ** 0 + (1-k)*(a1**12 - a1**0))
    //          = axd1 * (a1**0 + (1-k) * a1**12 - (1-k) * a1**0)
    //          = axd1 * ((1-1+k) * a1**0 + (1-k) * a1**12)
    //          = axd1 * (k * a1**0 + (1-k) * a1 ** 12)

    // res11:       x * a * ((1 - k)*(1 + a) ** 12 + k * (1 + a)**0 )/ ((1 + a) ** 12 - 1)
    //           = axd1 * ((1-k)*a1**12 + k * a1 ** 0)
}

init()
test()