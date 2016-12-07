
var init = function () {
    $('.row .item').off().on('click',function () {
        if($(this).parents().hasClass('mutil')){
            if($(this).hasClass("selected")){
                $(this).removeClass('selected');
            }else{
                $(this).addClass('selected');
            }
        }else{
            $(this).addClass('selected');
            $(this).siblings().removeClass('selected');
        }
    });

    $("#submit").click(function () {
        window.location.href='ready.html';
    })
}
var initChart = function () {
    var priceChart = echarts.init($("#price_chart")[0],'flat');
    var option = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['回收价格'],
            bottom:0
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        grid: {
            x: '50px'
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['8月','9月','10月','11月'],
                name:""
            }
        ],
        yAxis : [
            {
                type: 'value',
                splitArea: { show: true },
                name:"价格"
            }
        ],
        series : [
            {
                name:'回收价格',
                type:'line',
                itemStyle : {
                    normal : {
                        color:'#f39706',
                        lineStyle:{
                            color:'#f39706'
                        }
                    }
                },
                data:[2400, 2550, 2700, 2600]
            }
        ]
    };
    priceChart.setOption(option)
}

$(function () {
    init();
    initChart();
});