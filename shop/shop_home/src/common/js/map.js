export const BaiduMap = {
    init: function() {
        const BMapURL = 'https://api.map.baidu.com/api?v=2.0&ak=' + '1W2mDCOwt4ReE2cpGMVW7ZxMAiG9VQ5H' + '&s=1&callback=onBMapCallback'
　　　　 return new Promise((resolve, reject) => {
            // 如果已加载直接返回
            if (typeof BMap !== 'undefined') {
                resolve(BMap)
                return true
            }
            // 百度地图异步加载回调处理
            window.onBMapCallback = function() {
                console.log('百度地图脚本初始化成功...')
                resolve(BMap)
            };
            // 插入script脚本
            let scriptNode = document.createElement('script')
            scriptNode.setAttribute('type', 'text/javascript')
            scriptNode.setAttribute('src', BMapURL)
            document.body.appendChild(scriptNode)
        })
    }
}